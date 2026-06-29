// Banco semilla para el ejercicio "elegi las proposiciones". Funciona sin IA;
// el boton "regenerar" pide mas al endpoint /api/practica.

export type StatementKind =
  | "proposicion"
  | "deseo"
  | "orden"
  | "pregunta"
  | "funcion-proposicional"
  | "exclamacion";

export interface ClassifyStatement {
  text: string;
  /** true solo si es una proposicion (V o F sin ambiguedad). */
  isProposition: boolean;
  kind: StatementKind;
  /** Por que es o no es proposicion. */
  reason: string;
}

export const KIND_LABEL: Record<StatementKind, string> = {
  proposicion: "Proposicion",
  deseo: "Deseo",
  orden: "Orden / imperativo",
  pregunta: "Pregunta",
  "funcion-proposicional": "Funcion proposicional (variable libre)",
  exclamacion: "Exclamacion",
};

export const CLASSIFY_BANK: ClassifyStatement[] = [
  {
    text: "35 = 21",
    isProposition: true,
    kind: "proposicion",
    reason: "Enunciado cerrado y evaluable: es Falso.",
  },
  {
    text: "Todo numero par es divisible por 2.",
    isProposition: true,
    kind: "proposicion",
    reason: "Afirmacion declarativa Verdadera.",
  },
  {
    text: "Buenos Aires es la capital de Argentina.",
    isProposition: true,
    kind: "proposicion",
    reason: "Declara un hecho evaluable: es Verdadero.",
  },
  {
    text: "El lenguaje C fue creado despues que Python.",
    isProposition: true,
    kind: "proposicion",
    reason: "Afirmacion declarativa (Falsa), pero tiene valor de verdad.",
  },
  {
    text: "Los alumnos de software son inteligentes.",
    isProposition: true,
    kind: "proposicion",
    reason: "Es declarativa: se le puede asignar V o F (aunque sea opinable).",
  },
  {
    text: "Me gustaria que llueva manana.",
    isProposition: false,
    kind: "deseo",
    reason: "Expresa un deseo: no se le puede asignar V o F.",
  },
  {
    text: "Antes de programar, lavense las manos.",
    isProposition: false,
    kind: "orden",
    reason: "Es una orden (imperativo): no tiene valor de verdad.",
  },
  {
    text: "Cerra la puerta, por favor.",
    isProposition: false,
    kind: "orden",
    reason: "Es un pedido / orden: no es V ni F.",
  },
  {
    text: "Las campanas son azules?",
    isProposition: false,
    kind: "pregunta",
    reason: "Es una pregunta: no afirma nada evaluable.",
  },
  {
    text: "Que hora es?",
    isProposition: false,
    kind: "pregunta",
    reason: "Es una pregunta: no se le asigna valor de verdad.",
  },
  {
    text: "24x = 16y",
    isProposition: false,
    kind: "funcion-proposicional",
    reason:
      "Tiene variables libres (x, y): su verdad depende de los valores. Es una funcion proposicional, no una proposicion.",
  },
  {
    text: "x + 1 = 5",
    isProposition: false,
    kind: "funcion-proposicional",
    reason: "Depende de x: se vuelve proposicion al fijar el valor de x.",
  },
  {
    text: "Que lindo dia!",
    isProposition: false,
    kind: "exclamacion",
    reason: "Es una exclamacion: expresa emocion, no afirma algo evaluable.",
  },
  {
    text: "El numero 7 es primo.",
    isProposition: true,
    kind: "proposicion",
    reason: "Declarativa y evaluable: es Verdadero.",
  },
];
