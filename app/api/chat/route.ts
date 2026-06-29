import { NextRequest } from "next/server";
import { getGroq, GROQ_MODEL, hasGroqKey } from "@/lib/groq";
import { curriculumOutline, topicDeepContext } from "@/lib/curriculum/context";
import type { SubjectId } from "@/lib/curriculum/types";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 30;

interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

const SYSTEM_TALLER = `Sos "Tutor TP1", un profesor virtual de la materia "Taller de Programacion I" (1er año de la Tecnicatura Superior en Desarrollo de Software).
Tu objetivo es ayudar al estudiante a entender los temas del 1er parcial TEORICO.

Reglas:
- Responde SIEMPRE en espanol, claro y didactico, con ejemplos cuando ayuden.
- Cenite al temario de la materia (abajo). Si preguntan algo fuera, redirigi con amabilidad al temario.
- Se conciso pero completo. Usa Markdown (negritas, listas, bloques de codigo para pseudocodigo).
- Para pseudocodigo usa el estilo PSeInt (Proceso/FinProceso, Definir, Leer, Escribir, Si-Entonces-Sino, Mientras, Repetir).
- No inventes datos. Si no estas seguro, decilo.

TEMARIO (indice):
${curriculumOutline("taller")}`;

const SYSTEM_MATEMATICAS = `Sos "Tutor de Matematicas", profesor virtual de Matematica para la computacion (logica proposicional y logica de predicados).
Tu objetivo es ayudar al estudiante a entender los temas del parcial.

Reglas:
- Responde SIEMPRE en espanol, claro y didactico, con ejemplos cuando ayuden.
- Cenite al temario de la materia (abajo). Si preguntan algo fuera, redirigi con amabilidad al temario.
- Usa notacion logica en simbolos Unicode: ¬ ∧ ∨ ⊕ → ↔ ≡ ∀ ∃ ⊢. NO uses LaTeX ni $...$.
- Las tablas de verdad van como TABLAS Markdown, por ejemplo: | p | q | p ∧ q |.
- NO uses PSeInt ni pseudocodigo de programacion: esta es una materia de matematica.
- No inventes datos. Si no estas seguro, decilo.

TEMARIO (indice):
${curriculumOutline("matematicas")}`;

function systemFor(subject: SubjectId): string {
  return subject === "matematicas" ? SYSTEM_MATEMATICAS : SYSTEM_TALLER;
}

export async function POST(req: NextRequest) {
  if (!hasGroqKey()) {
    return Response.json(
      { error: "Falta configurar GROQ_API_KEY en el servidor." },
      { status: 503 }
    );
  }

  let body: { messages?: ChatMessage[]; topicId?: string; subject?: string };
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "JSON invalido." }, { status: 400 });
  }

  const messages = Array.isArray(body.messages) ? body.messages : [];
  if (messages.length === 0) {
    return Response.json({ error: "Faltan mensajes." }, { status: 400 });
  }

  // Limita historial y tamaño por seguridad.
  const trimmed = messages
    .filter((m) => m && typeof m.content === "string" && m.content.trim())
    .slice(-12)
    .map((m) => ({
      role: m.role === "assistant" ? "assistant" : "user",
      content: m.content.slice(0, 4000),
    }));

  const subject: SubjectId =
    body.subject === "matematicas" ? "matematicas" : "taller";
  let system = systemFor(subject);
  if (body.topicId) {
    const ctx = topicDeepContext(body.topicId);
    if (ctx) system += `\n\nCONTEXTO DEL TEMA ACTUAL:\n${ctx}`;
  }

  try {
    const groq = getGroq();
    const completion = await groq.chat.completions.create({
      model: GROQ_MODEL,
      stream: true,
      temperature: 0.4,
      max_tokens: 1100,
      messages: [
        { role: "system", content: system },
        ...(trimmed as ChatMessage[]),
      ],
    });

    const encoder = new TextEncoder();
    const stream = new ReadableStream<Uint8Array>({
      async start(controller) {
        try {
          for await (const chunk of completion) {
            const delta = chunk.choices[0]?.delta?.content ?? "";
            if (delta) controller.enqueue(encoder.encode(delta));
          }
        } catch (err) {
          controller.enqueue(
            encoder.encode("\n\n[Error de conexion con la IA]")
          );
        } finally {
          controller.close();
        }
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache, no-transform",
        "X-Accel-Buffering": "no",
      },
    });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Error desconocido";
    return Response.json(
      { error: `No se pudo contactar a la IA: ${msg}` },
      { status: 502 }
    );
  }
}
