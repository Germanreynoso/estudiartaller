import { NextRequest } from "next/server";
import { getGroq, GROQ_MODEL, hasGroqKey } from "@/lib/groq";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 30;

// Explica por que una respuesta es incorrecta (feedback pedagogico con IA).
export async function POST(req: NextRequest) {
  if (!hasGroqKey()) {
    return Response.json(
      { error: "Falta configurar GROQ_API_KEY en el servidor." },
      { status: 503 }
    );
  }

  let body: {
    prompt?: string;
    userAnswer?: string;
    correctAnswer?: string;
    topicTitle?: string;
  };
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "JSON invalido." }, { status: 400 });
  }

  const { prompt, userAnswer, correctAnswer, topicTitle } = body;
  if (!prompt || !correctAnswer) {
    return Response.json({ error: "Faltan datos." }, { status: 400 });
  }

  const system = `Sos un tutor de "Taller de Programacion I". Explicas de forma breve, amable y clara (en espanol, Markdown) por que una respuesta es incorrecta y por que la correcta es la correcta. Maximo 4 frases. No repitas el enunciado entero.`;

  const userMsg = `Tema: ${topicTitle ?? "general"}
Pregunta: ${prompt}
Respuesta del estudiante: ${userAnswer ?? "(en blanco)"}
Respuesta correcta: ${correctAnswer}

Explica por que la respuesta del estudiante no es correcta y reforza el concepto clave.`;

  try {
    const groq = getGroq();
    const completion = await groq.chat.completions.create({
      model: GROQ_MODEL,
      temperature: 0.3,
      max_tokens: 350,
      messages: [
        { role: "system", content: system },
        { role: "user", content: userMsg },
      ],
    });

    const explanation =
      completion.choices[0]?.message?.content?.trim() ??
      "No se pudo generar la explicacion.";
    return Response.json({ explanation });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Error desconocido";
    return Response.json(
      { error: `No se pudo generar la explicacion: ${msg}` },
      { status: 502 }
    );
  }
}
