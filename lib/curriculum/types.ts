// Esquema de datos del temario. Todo el contenido de estudio se modela aca
// para que quizzes, juegos, flashcards y tutor IA consuman la misma fuente.

export type QuestionType = "mc" | "vf" | "fill";
export type Difficulty = "facil" | "media" | "dificil";

/** Materia de estudio. Cada modulo pertenece a una. */
export type SubjectId = "taller" | "matematicas" | "informatica";

export interface Subject {
  id: SubjectId;
  /** Nombre completo (para titulos). */
  title: string;
  /** Nombre corto (para el selector). */
  short: string;
  icon: string;
}

export interface Question {
  id: string;
  type: QuestionType;
  /** Enunciado de la pregunta. */
  prompt: string;
  /** mc: 3-4 opciones; vf: ["Verdadero","Falso"]; fill: []. */
  options: string[];
  /** mc/vf: indice de la opcion correcta; fill: -1. */
  answerIndex: number;
  /** fill: respuestas aceptadas (minusculas, sin acentos); resto: []. */
  accepted: string[];
  /** Por que esa es la respuesta correcta. */
  explanation: string;
  difficulty: Difficulty;
}

export interface Flashcard {
  id: string;
  /** Anverso: termino o pregunta corta. */
  front: string;
  /** Reverso: definicion o respuesta. */
  back: string;
}

export interface MatchPair {
  term: string;
  definition: string;
}

export interface OrderChallenge {
  id: string;
  title: string;
  /** Pasos en el ORDEN CORRECTO (se barajan en el juego). */
  steps: string[];
}

export interface Topic {
  id: string;
  /** Numero de orden global del tema. */
  number: number;
  /** id del modulo al que pertenece. */
  module: string;
  title: string;
  /** Resumen de una linea para tarjetas. */
  short: string;
  /** Cuerpo teorico en Markdown, completo y correcto. */
  theory: string;
  /** Ideas clave para repaso rapido. */
  keyPoints: string[];
  questions: Question[];
  flashcards: Flashcard[];
  /** Pares concepto-definicion para el juego de emparejar. */
  matchPairs: MatchPair[];
  /** Reto de ordenar pasos (opcional). */
  orderChallenge: OrderChallenge | null;
  /** Terminos para el ahorcado (mayusculas, una palabra o sigla). */
  terms: string[];
}

export interface Module {
  id: string;
  title: string;
  icon: string;
  description: string;
  /** Materia a la que pertenece el modulo. */
  subject: SubjectId;
}

export interface FlowchartSymbol {
  id: string;
  name: string;
  description: string;
  /** Representacion ASCII del simbolo. */
  ascii: string;
}
