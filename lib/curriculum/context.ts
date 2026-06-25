import { TOPICS, topicById } from "./data";

// Construye contexto del temario para anclar a la IA (RAG simple en prompt).

export function curriculumOutline(): string {
  return TOPICS.map(
    (t) => `${t.number}. ${t.title} (modulo ${t.module}) — ${t.short}`
  ).join("\n");
}

export function curriculumKeyPoints(): string {
  return TOPICS.map(
    (t) => `### ${t.title}\n${t.keyPoints.map((k) => `- ${k}`).join("\n")}`
  ).join("\n\n");
}

export function topicDeepContext(id: string): string {
  const t = topicById(id);
  if (!t) return "";
  return [
    `TEMA: ${t.title}`,
    `Resumen: ${t.short}`,
    `Puntos clave:\n${t.keyPoints.map((k) => `- ${k}`).join("\n")}`,
    `\nTeoria:\n${t.theory}`,
  ].join("\n");
}
