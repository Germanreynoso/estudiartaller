import { TOPICS, topicById, topicsBySubject } from "./data";
import type { SubjectId } from "./types";

// Construye contexto del temario para anclar a la IA (RAG simple en prompt).

export function curriculumOutline(subject?: SubjectId): string {
  const list = subject ? topicsBySubject(subject) : TOPICS;
  return list
    .map((t) => `${t.number}. ${t.title} (modulo ${t.module}) — ${t.short}`)
    .join("\n");
}

export function curriculumKeyPoints(subject?: SubjectId): string {
  const list = subject ? topicsBySubject(subject) : TOPICS;
  return list
    .map((t) => `### ${t.title}\n${t.keyPoints.map((k) => `- ${k}`).join("\n")}`)
    .join("\n\n");
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
