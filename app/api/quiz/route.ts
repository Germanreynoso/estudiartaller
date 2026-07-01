import { NextRequest } from "next/server";
import { getGroq, GROQ_MODEL, hasGroqKey } from "@/lib/groq";
import { topicById } from "@/lib/curriculum/data";
import { curriculumOutline } from "@/lib/curriculum/context";
import type { SubjectId } from "@/lib/curriculum/types";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 30;

interface GenQuestion {
  type: "mc" | "vf";
  prompt: string;
  options: string[];
  answerIndex: number;
  explanation: string;
  difficulty: "facil" | "media" | "dificil";
}

export async function POST(req: NextRequest) {
  if (!hasGroqKey()) {
    return Response.json(
      { error: "Falta configurar GROQ_API_KEY en el servidor." },
      { status: 503 }
    );
  }

  let body: { topicId?: string; count?: number; subject?: string };
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "JSON invalido." }, { status: 400 });
  }

  const count = Math.min(Math.max(body.count ?? 5, 1), 8);
  const subject: SubjectId =
    body.subject === "matematicas"
      ? "matematicas"
      : body.subject === "informatica"
        ? "informatica"
        : "taller";
  const topic = body.topicId ? topicById(body.topicId) : null;

  const focus = topic
    ? `Genera preguntas SOLO sobre el tema "${topic.title}".\nResumen: ${topic.short}\nPuntos clave:\n${topic.keyPoints
        .map((k) => `- ${k}`)
        .join("\n")}`
    : `Genera preguntas variadas sobre el temario completo:\n${curriculumOutline(subject)}`;

  const domain =
    subject === "matematicas"
      ? `"Matematica para la computacion" (logica proposicional y de predicados). Usa notacion logica Unicode (¬ ∧ ∨ ⊕ → ↔ ≡ ∀ ∃) cuando corresponda; NO uses LaTeX. Las tablas de verdad describilas en texto plano dentro del enunciado.`
      : subject === "informatica"
        ? `"Informatica" (datos e informacion, TIC, herramientas ofimaticas, busqueda en internet, computacion en la nube y trabajo colaborativo). Preguntas conceptuales claras y univocas.`
        : `"Taller de Programacion I" (1er año, tecnicatura en desarrollo de software).`;

  const system = `Sos generador de preguntas de examen para ${domain}
Devolves EXCLUSIVAMENTE un objeto JSON valido con esta forma:
{
  "questions": [
    {
      "type": "mc" | "vf",
      "prompt": "enunciado en espanol",
      "options": ["..."],          // mc: 3 o 4 opciones; vf: ["Verdadero","Falso"]
      "answerIndex": 0,             // indice (0-based) de la opcion CORRECTA
      "explanation": "por que es correcta",
      "difficulty": "facil" | "media" | "dificil"
    }
  ]
}
Reglas: contenido correcto y univoco; mezcla mc y vf; nada de texto fuera del JSON; espanol.`;

  try {
    const groq = getGroq();
    const completion = await groq.chat.completions.create({
      model: GROQ_MODEL,
      temperature: 0.6,
      max_tokens: 1800,
      response_format: { type: "json_object" },
      messages: [
        { role: "system", content: system },
        {
          role: "user",
          content: `${focus}\n\nGenera exactamente ${count} preguntas en el JSON pedido.`,
        },
      ],
    });

    const raw = completion.choices[0]?.message?.content ?? "{}";
    let parsed: { questions?: GenQuestion[] };
    try {
      parsed = JSON.parse(raw);
    } catch {
      return Response.json(
        { error: "La IA devolvio un formato invalido. Reintenta." },
        { status: 502 }
      );
    }

    const questions = (parsed.questions ?? [])
      .filter(
        (q) =>
          q &&
          (q.type === "mc" || q.type === "vf") &&
          Array.isArray(q.options) &&
          q.options.length >= 2 &&
          typeof q.answerIndex === "number" &&
          q.answerIndex >= 0 &&
          q.answerIndex < q.options.length
      )
      .slice(0, count)
      .map((q, i) => ({
        id: `ai-${i}`,
        type: q.type,
        prompt: String(q.prompt ?? ""),
        options: q.options.map((o) => String(o)),
        answerIndex: q.answerIndex,
        accepted: [] as string[],
        explanation: String(q.explanation ?? ""),
        difficulty: (["facil", "media", "dificil"].includes(q.difficulty)
          ? q.difficulty
          : "media") as GenQuestion["difficulty"],
      }));

    if (questions.length === 0) {
      return Response.json(
        { error: "No se generaron preguntas validas. Reintenta." },
        { status: 502 }
      );
    }

    return Response.json({ questions });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Error desconocido";
    return Response.json(
      { error: `No se pudo generar el quiz: ${msg}` },
      { status: 502 }
    );
  }
}
