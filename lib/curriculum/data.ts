import type { Topic } from "./types";

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
].sort((a, b) => a.number - b.number);

export function topicById(id: string): Topic | null {
  return TOPICS.find((t) => t.id === id) ?? null;
}

export function topicsByModule(moduleId: string): Topic[] {
  return TOPICS.filter((t) => t.module === moduleId);
}

/** Todas las preguntas del temario (para quiz mixto). */
export function allQuestions() {
  return TOPICS.flatMap((t) =>
    t.questions.map((q) => ({ ...q, topicId: t.id, topicTitle: t.title }))
  );
}

/** Todos los pares concepto-definicion (para juego de emparejar). */
export function allMatchPairs() {
  return TOPICS.flatMap((t) =>
    t.matchPairs.map((p) => ({ ...p, topicId: t.id }))
  );
}

/** Todas las flashcards. */
export function allFlashcards() {
  return TOPICS.flatMap((t) =>
    t.flashcards.map((f) => ({ ...f, topicId: t.id, topicTitle: t.title }))
  );
}

/** Todos los terminos para el ahorcado. */
export function allTerms() {
  return TOPICS.flatMap((t) =>
    t.terms.map((term) => ({ term, topicId: t.id, topicTitle: t.title }))
  );
}

/** Retos de ordenar pasos. */
export function allOrderChallenges() {
  return TOPICS.map((t) => t.orderChallenge).filter(
    (c): c is NonNullable<typeof c> => c !== null
  );
}
