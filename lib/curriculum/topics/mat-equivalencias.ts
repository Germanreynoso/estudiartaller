import type { Topic } from "../types";

const topic: Topic = {
  id: "mat-equivalencias",
  number: 5,
  module: "mat-proposicional",
  title: "Equivalencias y leyes del algebra proposicional",
  short:
    "Equivalencia logica y las leyes (De Morgan, distributiva, etc.) para simplificar proposiciones.",
  theory: `Dos proposiciones son **logicamente equivalentes** cuando tienen **la misma tabla de verdad** (la misma columna principal, fila por fila). Se escribe **p ≡ q** (o p ⇔ q). Una equivalencia es, en el fondo, un **bicondicional que es tautologia**.

Las **leyes del algebra de proposiciones** son equivalencias ya demostradas que sirven para **simplificar** o **transformar** formulas sin cambiar su valor de verdad (igual que en algebra ordinaria simplificamos expresiones).

## Tabla de leyes

| Ley | Forma |
|---|---|
| **Identidad** | p ∧ V ≡ p · p ∨ F ≡ p |
| **Dominacion (o anulacion)** | p ∨ V ≡ V · p ∧ F ≡ F |
| **Idempotencia** | p ∧ p ≡ p · p ∨ p ≡ p |
| **Doble negacion (involucion)** | ¬(¬p) ≡ p |
| **Conmutativa** | p ∧ q ≡ q ∧ p · p ∨ q ≡ q ∨ p |
| **Asociativa** | (p ∧ q) ∧ r ≡ p ∧ (q ∧ r) |
| **Distributiva** | p ∧ (q ∨ r) ≡ (p ∧ q) ∨ (p ∧ r) |
| **De Morgan** | ¬(p ∧ q) ≡ ¬p ∨ ¬q · ¬(p ∨ q) ≡ ¬p ∧ ¬q |
| **Absorcion** | p ∨ (p ∧ q) ≡ p · p ∧ (p ∨ q) ≡ p |
| **Inverso (complemento)** | p ∨ ¬p ≡ V · p ∧ ¬p ≡ F |

## Las leyes de De Morgan (clave)

Permiten "meter" o "sacar" una negacion cambiando el conectivo:

- ¬(p ∧ q) ≡ ¬p ∨ ¬q  → "no (p y q)" es lo mismo que "(no p) o (no q)".
- ¬(p ∨ q) ≡ ¬p ∧ ¬q  → "no (p o q)" es lo mismo que "(no p) y (no q)".

La negacion **invierte el conectivo**: el ∧ pasa a ∨ y viceversa, y se niega cada parte.

## Equivalencias del condicional (muy usadas)

- **Condicional como disyuncion:** p → q ≡ ¬p ∨ q
- **Contrarreciproca (contrapositiva):** p → q ≡ ¬q → ¬p
- **Negacion del condicional:** ¬(p → q) ≡ p ∧ ¬q
- **Bicondicional:** p ↔ q ≡ (p → q) ∧ (q → p)

## Ejemplo de simplificacion

Simplifiquemos **¬(¬p ∧ q)**:

    ¬(¬p ∧ q)
    ≡ ¬(¬p) ∨ ¬q     (De Morgan)
    ≡ p ∨ ¬q          (doble negacion)

Resultado: ¬(¬p ∧ q) ≡ p ∨ ¬q. Aplicar leyes nos ahorra construir toda la tabla de verdad.`,
  keyPoints: [
    "Dos proposiciones son equivalentes (p ≡ q) si tienen la misma tabla de verdad.",
    "Una equivalencia es un bicondicional que resulta tautologia.",
    "Las leyes (identidad, dominacion, idempotencia, conmutativa, asociativa, distributiva, etc.) permiten transformar formulas sin cambiar su valor.",
    "De Morgan: ¬(p ∧ q) ≡ ¬p ∨ ¬q y ¬(p ∨ q) ≡ ¬p ∧ ¬q (la negacion invierte el conectivo).",
    "Doble negacion: ¬(¬p) ≡ p.",
    "Condicional como disyuncion: p → q ≡ ¬p ∨ q.",
    "Contrarreciproca: p → q ≡ ¬q → ¬p.",
  ],
  questions: [
    {
      id: "mat-equivalencias-q1",
      type: "mc",
      prompt: "Cuando dos proposiciones son logicamente equivalentes?",
      options: [
        "Cuando tienen distinto numero de variables.",
        "Cuando tienen la misma tabla de verdad.",
        "Cuando una es la negacion de la otra.",
        "Cuando ambas son siempre falsas.",
      ],
      answerIndex: 1,
      accepted: [],
      explanation:
        "Son equivalentes (p ≡ q) si su columna principal coincide fila por fila, es decir, tienen la misma tabla de verdad.",
      difficulty: "facil",
    },
    {
      id: "mat-equivalencias-q2",
      type: "mc",
      prompt: "A que equivale ¬(p ∧ q) por la ley de De Morgan?",
      options: [
        "¬p ∧ ¬q",
        "¬p ∨ ¬q",
        "p ∨ q",
        "p ∧ q",
      ],
      answerIndex: 1,
      accepted: [],
      explanation:
        "De Morgan: ¬(p ∧ q) ≡ ¬p ∨ ¬q. La negacion invierte el conectivo (∧ pasa a ∨) y niega cada parte.",
      difficulty: "media",
    },
    {
      id: "mat-equivalencias-q3",
      type: "mc",
      prompt: "A que equivale ¬(p ∨ q)?",
      options: [
        "¬p ∨ ¬q",
        "¬p ∧ ¬q",
        "p ∧ q",
        "¬p → q",
      ],
      answerIndex: 1,
      accepted: [],
      explanation:
        "Por De Morgan, ¬(p ∨ q) ≡ ¬p ∧ ¬q.",
      difficulty: "media",
    },
    {
      id: "mat-equivalencias-q4",
      type: "mc",
      prompt: "El condicional p → q es equivalente a:",
      options: [
        "p ∧ q",
        "¬p ∨ q",
        "p ∨ ¬q",
        "¬p ∧ q",
      ],
      answerIndex: 1,
      accepted: [],
      explanation:
        "Equivalencia clave del condicional: p → q ≡ ¬p ∨ q.",
      difficulty: "dificil",
    },
    {
      id: "mat-equivalencias-q5",
      type: "mc",
      prompt: "Que ley afirma que p ∧ (q ∨ r) ≡ (p ∧ q) ∨ (p ∧ r)?",
      options: [
        "Asociativa.",
        "Conmutativa.",
        "Distributiva.",
        "De Morgan.",
      ],
      answerIndex: 2,
      accepted: [],
      explanation:
        "La ley distributiva 'reparte' el ∧ sobre el ∨ (analoga a a(b+c) = ab + ac en algebra).",
      difficulty: "media",
    },
    {
      id: "mat-equivalencias-q6",
      type: "vf",
      prompt:
        "Por la ley de doble negacion, ¬(¬p) ≡ p.",
      options: ["Verdadero", "Falso"],
      answerIndex: 0,
      accepted: [],
      explanation:
        "Negar dos veces deja la proposicion como estaba: ¬(¬p) ≡ p.",
      difficulty: "facil",
    },
    {
      id: "mat-equivalencias-q7",
      type: "vf",
      prompt:
        "La contrarreciproca de p → q es ¬q → ¬p, y es equivalente al condicional original.",
      options: ["Verdadero", "Falso"],
      answerIndex: 0,
      accepted: [],
      explanation:
        "Verdadero: p → q ≡ ¬q → ¬p (contrarreciproca o contrapositiva), tienen la misma tabla de verdad.",
      difficulty: "dificil",
    },
    {
      id: "mat-equivalencias-q8",
      type: "vf",
      prompt:
        "p ∨ V ≡ p (es decir, disyuntar con Verdadero deja la proposicion igual).",
      options: ["Verdadero", "Falso"],
      answerIndex: 1,
      accepted: [],
      explanation:
        "Falso: p ∨ V ≡ V (ley de dominacion). La que deja p igual es la identidad p ∨ F ≡ p.",
      difficulty: "media",
    },
    {
      id: "mat-equivalencias-q9",
      type: "fill",
      prompt:
        "La ley que dice ¬(p ∧ q) ≡ ¬p ∨ ¬q se llama ley de ____.",
      options: [],
      answerIndex: -1,
      accepted: ["de morgan", "morgan"],
      explanation:
        "Las leyes de De Morgan relacionan la negacion de una conjuncion o disyuncion invirtiendo el conectivo.",
      difficulty: "media",
    },
  ],
  flashcards: [
    {
      id: "mat-equivalencias-f1",
      front: "Que es una equivalencia logica (p ≡ q)?",
      back: "Dos proposiciones con la misma tabla de verdad. Equivale a un bicondicional que es tautologia.",
    },
    {
      id: "mat-equivalencias-f2",
      front: "Leyes de De Morgan",
      back: "¬(p ∧ q) ≡ ¬p ∨ ¬q y ¬(p ∨ q) ≡ ¬p ∧ ¬q. La negacion invierte el conectivo.",
    },
    {
      id: "mat-equivalencias-f3",
      front: "Doble negacion",
      back: "¬(¬p) ≡ p.",
    },
    {
      id: "mat-equivalencias-f4",
      front: "Condicional como disyuncion",
      back: "p → q ≡ ¬p ∨ q.",
    },
    {
      id: "mat-equivalencias-f5",
      front: "Contrarreciproca (contrapositiva)",
      back: "p → q ≡ ¬q → ¬p (misma tabla de verdad).",
    },
    {
      id: "mat-equivalencias-f6",
      front: "Ley distributiva",
      back: "p ∧ (q ∨ r) ≡ (p ∧ q) ∨ (p ∧ r) (y su version con ∨ sobre ∧).",
    },
    {
      id: "mat-equivalencias-f7",
      front: "Identidad vs dominacion",
      back: "Identidad: p ∧ V ≡ p, p ∨ F ≡ p. Dominacion: p ∨ V ≡ V, p ∧ F ≡ F.",
    },
  ],
  matchPairs: [
    {
      term: "De Morgan",
      definition: "¬(p ∧ q) ≡ ¬p ∨ ¬q.",
    },
    {
      term: "Distributiva",
      definition: "p ∧ (q ∨ r) ≡ (p ∧ q) ∨ (p ∧ r).",
    },
    {
      term: "Doble negacion",
      definition: "¬(¬p) ≡ p.",
    },
    {
      term: "Condicional",
      definition: "p → q ≡ ¬p ∨ q.",
    },
    {
      term: "Idempotencia",
      definition: "p ∧ p ≡ p y p ∨ p ≡ p.",
    },
    {
      term: "Conmutativa",
      definition: "p ∧ q ≡ q ∧ p (el orden no altera el resultado).",
    },
  ],
  orderChallenge: {
    id: "mat-equivalencias-order",
    title: "Simplificar ¬(¬p ∧ q) con leyes logicas",
    steps: [
      "Partir de ¬(¬p ∧ q)",
      "Aplicar De Morgan: ¬(¬p) ∨ ¬q",
      "Aplicar doble negacion: p ∨ ¬q",
      "Obtener la forma simplificada p ∨ ¬q",
    ],
  },
  terms: ["EQUIVALENCIA", "DISTRIBUTIVA", "IDEMPOTENCIA", "CONMUTATIVA", "ASOCIATIVA", "ABSORCION"],
};

export default topic;
