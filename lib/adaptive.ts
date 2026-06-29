import { TOPICS, allQuestions, topicsBySubject } from "@/lib/curriculum/data";
import type { SubjectId } from "@/lib/curriculum/types";
import type { ProgressState, QuizItem } from "@/lib/store/progress";

// ============================================================
//  Practica adaptativa: aprende de los errores y refuerza lo flojo.
// ============================================================

const DAY = 86_400_000;
type AdaptiveQuestion = ReturnType<typeof allQuestions>[number];

function itemKey(topicId: string, qid: string): string {
  return `${topicId}:${qid}`;
}

/** Prioridad de una pregunta (mayor = mas urgente de repasar). */
function priority(item: QuizItem | undefined, now: number): number {
  if (!item || item.seen === 0) return 2.5; // no vista: prioridad media
  let p = 6 - Math.min(5, Math.max(1, item.box)); // box 1 -> 5 ... box 5 -> 1
  if (item.lastWrongAt && now - item.lastWrongAt < 3 * DAY) p += 2; // fallada hace poco
  if (item.wrong > 0) p += Math.min(1.5, item.wrong * 0.5);
  return p;
}

export interface AdaptiveDeck {
  questions: AdaptiveQuestion[];
  fromErrors: number; // cuantas provienen de errores / cajas bajas
}

/** Arma un mazo priorizando errores, cajas bajas y temas flojos. */
export function buildAdaptiveDeck(
  progress: ProgressState,
  n = 12,
  subject?: SubjectId
): AdaptiveDeck {
  const now = Date.now();
  const scored = allQuestions(subject).map((q) => {
    const item = progress.quizItems[itemKey(q.topicId, q.id)];
    return { q, item, p: priority(item, now) + Math.random() * 0.9 };
  });
  scored.sort((a, b) => b.p - a.p);
  const picked = scored.slice(0, n);
  const fromErrors = picked.filter(
    (x) => x.item && (x.item.box <= 2 || x.item.wrong > 0)
  ).length;
  return { questions: picked.map((x) => x.q), fromErrors };
}

export interface TopicMastery {
  id: string;
  number: number;
  title: string;
  module: string;
  seen: number; // preguntas distintas vistas
  total: number; // preguntas del tema
  mastery: number; // 0..100
  wrong: number; // errores acumulados
}

export function topicMastery(
  progress: ProgressState,
  subject?: SubjectId
): TopicMastery[] {
  const list = subject ? topicsBySubject(subject) : TOPICS;
  return list.map((t) => {
    let seen = 0;
    let sumBox = 0;
    let wrong = 0;
    for (const q of t.questions) {
      const item = progress.quizItems[itemKey(t.id, q.id)];
      if (item && item.seen > 0) {
        seen++;
        sumBox += Math.min(5, Math.max(1, item.box));
        wrong += item.wrong;
      }
    }
    // mastery = promedio normalizado de las cajas vistas (box1 = 0%, box5 = 100%)
    const mastery = seen > 0 ? Math.round(((sumBox / seen - 1) / 4) * 100) : 0;
    return {
      id: t.id,
      number: t.number,
      title: t.title,
      module: t.module,
      seen,
      total: t.questions.length,
      mastery,
      wrong,
    };
  });
}

/** Temas practicados ordenados de menor a mayor dominio (los mas flojos primero). */
export function weakTopics(
  progress: ProgressState,
  limit = 6,
  subject?: SubjectId
): TopicMastery[] {
  return topicMastery(progress, subject)
    .filter((t) => t.seen > 0)
    .sort((a, b) => a.mastery - b.mastery || b.wrong - a.wrong)
    .slice(0, limit);
}

/** Cantidad de preguntas pendientes de reforzar (falladas o en cajas bajas). */
export function reviewCount(
  progress: ProgressState,
  subject?: SubjectId
): number {
  // Las claves de quizItems son `${topicId}:${questionId}`.
  const ids = subject
    ? new Set(topicsBySubject(subject).map((t) => t.id))
    : null;
  return Object.entries(progress.quizItems).filter(([key, it]) => {
    if (ids) {
      const topicId = key.slice(0, key.lastIndexOf(":"));
      if (!ids.has(topicId)) return false;
    }
    return it.wrong > 0 || it.box <= 2;
  }).length;
}

export function hasPractice(progress: ProgressState): boolean {
  return Object.keys(progress.quizItems).length > 0;
}
