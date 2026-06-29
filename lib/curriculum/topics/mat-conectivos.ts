import type { Topic } from "../types";

const topic: Topic = {
  id: "mat-conectivos",
  number: 3,
  module: "mat-proposicional",
  title: "Conectivos logicos (¬ ∧ ∨ → ↔)",
  short:
    "Negacion, conjuncion, disyuncion, condicional y bicondicional, con sus tablas de verdad.",
  theory: `Los **conectivos logicos** son los simbolos que **unen o modifican** proposiciones para formar proposiciones compuestas. Cada conectivo tiene una **tabla de verdad** que define su resultado segun los valores de las proposiciones que conecta.

Usamos **V** = Verdadero y **F** = Falso (equivalen a 1 y 0).

## 1. Negacion (¬, "no")

Es el unico conectivo que actua sobre **una sola** proposicion: **invierte** su valor de verdad. Se lee "no p" o "no es cierto que p".

| p | ¬p |
|---|----|
| V | F  |
| F | V  |

## 2. Conjuncion (∧, "y")

"p ∧ q" se lee "p **y** q". Es **Verdadera solo cuando AMBAS** son verdaderas.

| p | q | p ∧ q |
|---|---|-------|
| V | V |   V   |
| V | F |   F   |
| F | V |   F   |
| F | F |   F   |

## 3. Disyuncion inclusiva (∨, "o")

"p ∨ q" se lee "p **o** q". Es **Falsa solo cuando AMBAS** son falsas; basta con que una sea verdadera para que sea verdadera. Es **inclusiva**: admite que las dos sean verdaderas.

| p | q | p ∨ q |
|---|---|-------|
| V | V |   V   |
| V | F |   V   |
| F | V |   V   |
| F | F |   F   |

## 4. Disyuncion exclusiva (⊕, "o... o...")

"p ⊕ q" es verdadera cuando **exactamente una** de las dos es verdadera (una **u** otra, pero **no las dos**).

| p | q | p ⊕ q |
|---|---|-------|
| V | V |   F   |
| V | F |   V   |
| F | V |   V   |
| F | F |   F   |

## 5. Condicional o implicacion (→, "si... entonces")

"p → q" se lee "**si** p **entonces** q". \`p\` es el **antecedente** y \`q\` el **consecuente**. Es **Falsa solo cuando** el antecedente es Verdadero y el consecuente Falso (V → F). En todos los demas casos es Verdadera.

| p | q | p → q |
|---|---|-------|
| V | V |   V   |
| V | F |   F   |
| F | V |   V   |
| F | F |   V   |

Las dos ultimas filas sorprenden: si el antecedente es Falso, la implicacion es Verdadera siempre (se dice que es "verdadera por vacuidad"). Ejemplo: "Si llueve, llevo paraguas" solo es mentira el dia que llueve y NO llevo paraguas.

## 6. Bicondicional (↔, "si y solo si")

"p ↔ q" se lee "p **si y solo si** q". Es **Verdadera cuando ambas tienen el MISMO valor** (las dos V o las dos F).

| p | q | p ↔ q |
|---|---|-------|
| V | V |   V   |
| V | F |   F   |
| F | V |   F   |
| F | F |   V   |

## Jerarquia (prioridad) de los conectivos

Cuando una formula tiene varios conectivos sin parentesis, se evaluan en este orden, de **mayor a menor** prioridad:

1. **¬** negacion
2. **∧** conjuncion
3. **∨** disyuncion
4. **→** condicional
5. **↔** bicondicional

Los **parentesis** alteran ese orden y siempre se resuelven primero. Por ejemplo, ¬p ∧ q significa (¬p) ∧ q, no ¬(p ∧ q).`,
  keyPoints: [
    "Los conectivos unen o modifican proposiciones; cada uno tiene su tabla de verdad.",
    "Negacion ¬: invierte el valor (el unico que actua sobre una sola proposicion).",
    "Conjuncion ∧ (y): Verdadera SOLO si ambas son verdaderas.",
    "Disyuncion ∨ (o, inclusiva): Falsa SOLO si ambas son falsas.",
    "Disyuncion exclusiva ⊕: Verdadera cuando exactamente una es verdadera.",
    "Condicional → (si...entonces): Falsa SOLO cuando V → F (antecedente V y consecuente F).",
    "Bicondicional ↔ (si y solo si): Verdadera cuando ambas tienen el mismo valor.",
    "Prioridad de mayor a menor: ¬, ∧, ∨, →, ↔ (los parentesis van primero).",
  ],
  questions: [
    {
      id: "mat-conectivos-q1",
      type: "mc",
      prompt: "Cuando es Verdadera la conjuncion p ∧ q?",
      options: [
        "Cuando al menos una es verdadera.",
        "Solo cuando ambas son verdaderas.",
        "Solo cuando ambas son falsas.",
        "Siempre.",
      ],
      answerIndex: 1,
      accepted: [],
      explanation:
        "La conjuncion (y) es Verdadera unicamente si las dos proposiciones son verdaderas.",
      difficulty: "facil",
    },
    {
      id: "mat-conectivos-q2",
      type: "mc",
      prompt: "Cuando es Falsa la disyuncion inclusiva p ∨ q?",
      options: [
        "Cuando ambas son verdaderas.",
        "Cuando al menos una es verdadera.",
        "Solo cuando ambas son falsas.",
        "Nunca es falsa.",
      ],
      answerIndex: 2,
      accepted: [],
      explanation:
        "La disyuncion inclusiva es Falsa solo si ambas son falsas; basta una verdadera para que sea verdadera.",
      difficulty: "facil",
    },
    {
      id: "mat-conectivos-q3",
      type: "mc",
      prompt:
        "En que unico caso es Falso el condicional p → q?",
      options: [
        "Cuando p es Falso y q es Verdadero.",
        "Cuando p es Verdadero y q es Falso.",
        "Cuando ambos son verdaderos.",
        "Cuando ambos son falsos.",
      ],
      answerIndex: 1,
      accepted: [],
      explanation:
        "El condicional solo es Falso cuando el antecedente es Verdadero y el consecuente Falso (V → F).",
      difficulty: "media",
    },
    {
      id: "mat-conectivos-q4",
      type: "mc",
      prompt:
        "Cuando es Verdadero el bicondicional p ↔ q?",
      options: [
        "Cuando p y q tienen el mismo valor de verdad.",
        "Cuando p y q tienen valores distintos.",
        "Solo cuando ambos son verdaderos.",
        "Solo cuando ambos son falsos.",
      ],
      answerIndex: 0,
      accepted: [],
      explanation:
        "El bicondicional (si y solo si) es Verdadero cuando ambas proposiciones comparten el valor: las dos V o las dos F.",
      difficulty: "media",
    },
    {
      id: "mat-conectivos-q5",
      type: "mc",
      prompt:
        "En el condicional p → q, como se llama p?",
      options: [
        "Consecuente.",
        "Antecedente.",
        "Conclusion.",
        "Negacion.",
      ],
      answerIndex: 1,
      accepted: [],
      explanation:
        "En 'si p entonces q', p es el antecedente (la condicion) y q el consecuente (el resultado).",
      difficulty: "media",
    },
    {
      id: "mat-conectivos-q6",
      type: "vf",
      prompt:
        "La negacion ¬p invierte el valor de verdad de p.",
      options: ["Verdadero", "Falso"],
      answerIndex: 0,
      accepted: [],
      explanation:
        "La negacion convierte Verdadero en Falso y Falso en Verdadero.",
      difficulty: "facil",
    },
    {
      id: "mat-conectivos-q7",
      type: "vf",
      prompt:
        "Si p es Falso, el condicional p → q es Verdadero sin importar el valor de q.",
      options: ["Verdadero", "Falso"],
      answerIndex: 0,
      accepted: [],
      explanation:
        "Verdadero: con antecedente Falso, la implicacion es Verdadera siempre (verdadera por vacuidad). Las filas F→V y F→F dan V.",
      difficulty: "dificil",
    },
    {
      id: "mat-conectivos-q8",
      type: "vf",
      prompt:
        "La disyuncion exclusiva p ⊕ q es Verdadera cuando ambas son verdaderas.",
      options: ["Verdadero", "Falso"],
      answerIndex: 1,
      accepted: [],
      explanation:
        "Falso: la exclusiva es Verdadera solo cuando exactamente una es verdadera. Si ambas son verdaderas, da Falso.",
      difficulty: "media",
    },
    {
      id: "mat-conectivos-q9",
      type: "fill",
      prompt:
        "El conectivo que se lee 'si y solo si' y es verdadero cuando ambas tienen el mismo valor se llama ____.",
      options: [],
      answerIndex: -1,
      accepted: ["bicondicional", "doble condicional", "doble implicacion"],
      explanation:
        "El bicondicional (↔) es Verdadero cuando las dos proposiciones tienen el mismo valor de verdad.",
      difficulty: "media",
    },
  ],
  flashcards: [
    {
      id: "mat-conectivos-f1",
      front: "Negacion ¬p",
      back: "Invierte el valor: ¬V = F y ¬F = V. Es el unico conectivo que actua sobre una sola proposicion.",
    },
    {
      id: "mat-conectivos-f2",
      front: "Conjuncion p ∧ q (y)",
      back: "Verdadera SOLO si ambas son verdaderas.",
    },
    {
      id: "mat-conectivos-f3",
      front: "Disyuncion inclusiva p ∨ q (o)",
      back: "Falsa SOLO si ambas son falsas; basta una verdadera para que sea verdadera.",
    },
    {
      id: "mat-conectivos-f4",
      front: "Condicional p → q (si...entonces)",
      back: "Falso SOLO cuando V → F (antecedente verdadero y consecuente falso). En el resto, verdadero.",
    },
    {
      id: "mat-conectivos-f5",
      front: "Bicondicional p ↔ q (si y solo si)",
      back: "Verdadero cuando ambas tienen el MISMO valor (las dos V o las dos F).",
    },
    {
      id: "mat-conectivos-f6",
      front: "Disyuncion exclusiva p ⊕ q",
      back: "Verdadera cuando EXACTAMENTE una es verdadera (una u otra, pero no las dos).",
    },
    {
      id: "mat-conectivos-f7",
      front: "Prioridad de los conectivos (mayor a menor)",
      back: "1) ¬, 2) ∧, 3) ∨, 4) →, 5) ↔. Los parentesis se resuelven primero.",
    },
  ],
  matchPairs: [
    {
      term: "Negacion (¬)",
      definition: "Invierte el valor de verdad de una proposicion.",
    },
    {
      term: "Conjuncion (∧)",
      definition: "Verdadera solo si ambas proposiciones son verdaderas.",
    },
    {
      term: "Disyuncion (∨)",
      definition: "Falsa solo si ambas proposiciones son falsas.",
    },
    {
      term: "Condicional (→)",
      definition: "Falso solo cuando el antecedente es V y el consecuente F.",
    },
    {
      term: "Bicondicional (↔)",
      definition: "Verdadero cuando ambas tienen el mismo valor de verdad.",
    },
    {
      term: "Disyuncion exclusiva (⊕)",
      definition: "Verdadera cuando exactamente una de las dos es verdadera.",
    },
  ],
  orderChallenge: {
    id: "mat-conectivos-order",
    title: "Evaluar el condicional p → q paso a paso",
    steps: [
      "Identificar el antecedente p",
      "Identificar el consecuente q",
      "Obtener el valor de verdad de p y de q",
      "Recordar que solo es Falso cuando p es V y q es F",
      "Asignar el valor de verdad al condicional",
    ],
  },
  terms: ["NEGACION", "CONJUNCION", "DISYUNCION", "CONDICIONAL", "BICONDICIONAL", "ANTECEDENTE"],
};

export default topic;
