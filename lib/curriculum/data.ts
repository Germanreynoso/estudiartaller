import type { Topic, SubjectId } from "./types";
import { moduleById } from "./modules";

// Indice del temario. Cada tema vive en su propio archivo (lib/curriculum/topics/).
import algoritmo from "./topics/algoritmo";
import pseudocodigo from "./topics/pseudocodigo";
import programaSoftware from "./topics/programa-software";
import diagramaFlujo from "./topics/diagrama-flujo";
import queEsProgramar from "./topics/que-es-programar";
import paradigmas from "./topics/paradigmas";
import programacionEstructurada from "./topics/programacion-estructurada";
import resolucionProblemas from "./topics/resolucion-problemas";
import datoInformacion from "./topics/dato-informacion";
import variableConstante from "./topics/variable-constante";
import contadorAcumulador from "./topics/contador-acumulador";
import tiposDatos from "./topics/tipos-datos";
import tiposVariables from "./topics/tipos-variables";
import nombresVariables from "./topics/nombres-variables";
import operadores from "./topics/operadores";
import lenguajesProgramacion from "./topics/lenguajes-programacion";
import nivelesLenguajes from "./topics/niveles-lenguajes";
import estructurasOverview from "./topics/estructuras-overview";
import estructuraSecuencial from "./topics/estructura-secuencial";
import estructuraDecision from "./topics/estructura-decision";
import estructuraIterativa from "./topics/estructura-iterativa";
import whileRepeat from "./topics/while-repeat";

// Matematicas (logica proposicional y de predicados).
import matIntro from "./topics/mat-intro";
import matProposiciones from "./topics/mat-proposiciones";
import matConectivos from "./topics/mat-conectivos";
import matTablasVerdad from "./topics/mat-tablas-verdad";
import matEquivalencias from "./topics/mat-equivalencias";
import matInferencia from "./topics/mat-inferencia";
import matPredicados from "./topics/mat-predicados";

// Orden de las materias en listados globales (cada una se numera 1..n por separado).
const SUBJECT_RANK: Record<SubjectId, number> = {
  taller: 0,
  matematicas: 1,
};

/** Materia a la que pertenece un tema (derivada de su modulo). */
export function subjectOfTopic(t: Topic): SubjectId {
  return moduleById(t.module)?.subject ?? "taller";
}

export const TOPICS: Topic[] = [
  algoritmo,
  pseudocodigo,
  programaSoftware,
  diagramaFlujo,
  queEsProgramar,
  paradigmas,
  programacionEstructurada,
  resolucionProblemas,
  datoInformacion,
  variableConstante,
  contadorAcumulador,
  tiposDatos,
  tiposVariables,
  nombresVariables,
  operadores,
  lenguajesProgramacion,
  nivelesLenguajes,
  estructurasOverview,
  estructuraSecuencial,
  estructuraDecision,
  estructuraIterativa,
  whileRepeat,
  // Matematicas
  matIntro,
  matProposiciones,
  matConectivos,
  matTablasVerdad,
  matEquivalencias,
  matInferencia,
  matPredicados,
].sort(
  (a, b) =>
    SUBJECT_RANK[subjectOfTopic(a)] - SUBJECT_RANK[subjectOfTopic(b)] ||
    a.number - b.number
);

export function topicById(id: string): Topic | null {
  return TOPICS.find((t) => t.id === id) ?? null;
}

export function topicsByModule(moduleId: string): Topic[] {
  return TOPICS.filter((t) => t.module === moduleId);
}

/** Temas de una materia (ordenados por su numero). */
export function topicsBySubject(subject: SubjectId): Topic[] {
  return TOPICS.filter((t) => subjectOfTopic(t) === subject);
}

/** Temas con los que trabajan los agregadores: filtrados por materia o todos. */
function scoped(subject?: SubjectId): Topic[] {
  return subject ? topicsBySubject(subject) : TOPICS;
}

/** Todas las preguntas (de una materia o de todo el temario). */
export function allQuestions(subject?: SubjectId) {
  return scoped(subject).flatMap((t) =>
    t.questions.map((q) => ({ ...q, topicId: t.id, topicTitle: t.title }))
  );
}

/** Todos los pares concepto-definicion (para juego de emparejar). */
export function allMatchPairs(subject?: SubjectId) {
  return scoped(subject).flatMap((t) =>
    t.matchPairs.map((p) => ({ ...p, topicId: t.id }))
  );
}

/** Todas las flashcards. */
export function allFlashcards(subject?: SubjectId) {
  return scoped(subject).flatMap((t) =>
    t.flashcards.map((f) => ({ ...f, topicId: t.id, topicTitle: t.title }))
  );
}

/** Todos los terminos para el ahorcado. */
export function allTerms(subject?: SubjectId) {
  return scoped(subject).flatMap((t) =>
    t.terms.map((term) => ({ term, topicId: t.id, topicTitle: t.title }))
  );
}

/** Retos de ordenar pasos. */
export function allOrderChallenges(subject?: SubjectId) {
  return scoped(subject)
    .map((t) => t.orderChallenge)
    .filter((c): c is NonNullable<typeof c> => c !== null);
}
