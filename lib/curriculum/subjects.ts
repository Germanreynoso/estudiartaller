import type { Subject, SubjectId } from "./types";

// Materias disponibles en la plataforma. El selector de la Nav cambia entre ellas
// y todo el contenido (temario, quiz, juegos, flashcards, tutor) se filtra por la
// materia activa.
export const DEFAULT_SUBJECT: SubjectId = "taller";

export const SUBJECTS: Subject[] = [
  {
    id: "taller",
    title: "Taller de Programacion I",
    short: "Taller I",
    icon: "‹∕›",
  },
  {
    id: "matematicas",
    title: "Matematicas",
    short: "Mate",
    icon: "∑",
  },
  {
    id: "informatica",
    title: "Informatica",
    short: "Info",
    icon: "◈",
  },
];

export function subjectById(id: string): Subject | undefined {
  return SUBJECTS.find((s) => s.id === id);
}

export function isSubjectId(v: unknown): v is SubjectId {
  return typeof v === "string" && SUBJECTS.some((s) => s.id === v);
}
