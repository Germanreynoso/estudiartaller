import type { Topic } from "../types";

const topic: Topic = {
  id: "mat-inferencia",
  number: 6,
  module: "mat-proposicional",
  title: "Reglas de inferencia y argumentos",
  short:
    "Argumentos validos, reglas de inferencia (Modus Ponens, Modus Tollens, silogismos) y falacias.",
  theory: `Un **argumento** (o razonamiento) es un conjunto de proposiciones llamadas **premisas** de las que se pretende deducir otra proposicion llamada **conclusion**. Se escribe poniendo las premisas y, debajo de una linea, la conclusion (el simbolo **∴** significa "por lo tanto").

    Premisa 1
    Premisa 2
    ----------
    ∴ Conclusion

## Validez

Un argumento es **valido** cuando la conclusion **se deduce necesariamente** de las premisas: **si las premisas son verdaderas, la conclusion tiene que ser verdadera**. La validez depende de la **forma** del argumento, no de si las premisas son de hecho ciertas.

Formalmente: el argumento (P1 ∧ P2 ∧ ... ) → Conclusion es valido **si y solo si es una tautologia**.

## Reglas de inferencia (formas validas)

| Regla | Premisas | Conclusion |
|---|---|---|
| **Modus Ponens** (afirmacion) | p → q ; p | ∴ q |
| **Modus Tollens** (negacion) | p → q ; ¬q | ∴ ¬p |
| **Silogismo hipotetico** (cadena) | p → q ; q → r | ∴ p → r |
| **Silogismo disyuntivo** | p ∨ q ; ¬p | ∴ q |
| **Simplificacion** | p ∧ q | ∴ p |
| **Adicion** | p | ∴ p ∨ q |
| **Conjuncion** | p ; q | ∴ p ∧ q |

### Modus Ponens (la mas usada)

"Si estudio, apruebo. Estudie. Por lo tanto, apruebo."

    p → q
    p
    ------
    ∴ q

### Modus Tollens

"Si estudio, apruebo. No aprobe. Por lo tanto, no estudie."

    p → q
    ¬q
    ------
    ∴ ¬p

## Falacias (razonamientos NO validos)

Una **falacia** es un argumento que parece valido pero no lo es. Dos clasicas, que se confunden con Modus Ponens/Tollens:

- **Afirmacion del consecuente (falacia):** de p → q y q, NO se deduce p.
- **Negacion del antecedente (falacia):** de p → q y ¬p, NO se deduce ¬q.

## Como verificar un argumento

1. **Simbolizar** las premisas y la conclusion con variables y conectivos.
2. Identificar la **regla de inferencia** que se aplica, o bien
3. Construir la **tabla de verdad** del condicional (premisas) → conclusion: si es **tautologia**, el argumento es **valido**.`,
  keyPoints: [
    "Un argumento tiene premisas y una conclusion (∴ = 'por lo tanto').",
    "Es valido si, supuestas verdaderas las premisas, la conclusion es necesariamente verdadera.",
    "La validez depende de la FORMA, no de si las premisas son de hecho ciertas.",
    "Modus Ponens: de p → q y p se deduce q.",
    "Modus Tollens: de p → q y ¬q se deduce ¬p.",
    "Silogismo hipotetico: de p → q y q → r se deduce p → r.",
    "Falacias: afirmar el consecuente y negar el antecedente NO son validas.",
    "Un argumento es valido si y solo si (premisas) → conclusion es una tautologia.",
  ],
  questions: [
    {
      id: "mat-inferencia-q1",
      type: "mc",
      prompt: "Que es un argumento valido?",
      options: [
        "Uno cuyas premisas son siempre ciertas en la realidad.",
        "Uno en el que, si las premisas son verdaderas, la conclusion necesariamente lo es.",
        "Uno que tiene muchas premisas.",
        "Uno cuya conclusion es una pregunta.",
      ],
      answerIndex: 1,
      accepted: [],
      explanation:
        "La validez es formal: garantiza que si las premisas son verdaderas, la conclusion tambien lo es.",
      difficulty: "facil",
    },
    {
      id: "mat-inferencia-q2",
      type: "mc",
      prompt: "Que conclusion da el Modus Ponens a partir de p → q y p?",
      options: ["¬q", "q", "¬p", "p ∨ q"],
      answerIndex: 1,
      accepted: [],
      explanation:
        "Modus Ponens: de 'p → q' y 'p' se deduce 'q'.",
      difficulty: "facil",
    },
    {
      id: "mat-inferencia-q3",
      type: "mc",
      prompt: "Que conclusion da el Modus Tollens a partir de p → q y ¬q?",
      options: ["q", "p", "¬p", "p ∧ q"],
      answerIndex: 2,
      accepted: [],
      explanation:
        "Modus Tollens: de 'p → q' y 'no q' se deduce 'no p' (¬p).",
      difficulty: "media",
    },
    {
      id: "mat-inferencia-q4",
      type: "mc",
      prompt:
        "De 'p → q' y 'q → r' se deduce p → r. Que regla es?",
      options: [
        "Silogismo disyuntivo.",
        "Silogismo hipotetico.",
        "Simplificacion.",
        "Adicion.",
      ],
      answerIndex: 1,
      accepted: [],
      explanation:
        "El silogismo hipotetico encadena dos condicionales: de p → q y q → r resulta p → r.",
      difficulty: "media",
    },
    {
      id: "mat-inferencia-q5",
      type: "mc",
      prompt:
        "De 'p ∨ q' y '¬p' se deduce q. Que regla es?",
      options: [
        "Silogismo disyuntivo.",
        "Modus Ponens.",
        "Conjuncion.",
        "Adicion.",
      ],
      answerIndex: 0,
      accepted: [],
      explanation:
        "El silogismo disyuntivo: si una disyuncion es verdadera y una parte es falsa, la otra debe ser verdadera.",
      difficulty: "media",
    },
    {
      id: "mat-inferencia-q6",
      type: "vf",
      prompt:
        "De 'p → q' y 'q' se puede deducir validamente 'p'.",
      options: ["Verdadero", "Falso"],
      answerIndex: 1,
      accepted: [],
      explanation:
        "Falso: eso es la falacia de afirmacion del consecuente. De p → q y q NO se deduce p.",
      difficulty: "dificil",
    },
    {
      id: "mat-inferencia-q7",
      type: "vf",
      prompt:
        "Un argumento es valido si y solo si el condicional (premisas) → conclusion es una tautologia.",
      options: ["Verdadero", "Falso"],
      answerIndex: 0,
      accepted: [],
      explanation:
        "Verdadero: esa es la prueba formal de validez mediante tabla de verdad.",
      difficulty: "dificil",
    },
    {
      id: "mat-inferencia-q8",
      type: "vf",
      prompt:
        "La regla de simplificacion permite deducir p a partir de p ∧ q.",
      options: ["Verdadero", "Falso"],
      answerIndex: 0,
      accepted: [],
      explanation:
        "Verdadero: si 'p y q' es verdadera, entonces p es verdadera (simplificacion).",
      difficulty: "media",
    },
    {
      id: "mat-inferencia-q9",
      type: "fill",
      prompt:
        "La regla que de 'p → q' y 'p' deduce 'q' se llama Modus ____.",
      options: [],
      answerIndex: -1,
      accepted: ["ponens"],
      explanation:
        "Modus Ponens (modo que afirma): de p → q y p se concluye q.",
      difficulty: "media",
    },
  ],
  flashcards: [
    {
      id: "mat-inferencia-f1",
      front: "Que es un argumento valido?",
      back: "Aquel en que, si las premisas son verdaderas, la conclusion necesariamente lo es. Depende de la forma.",
    },
    {
      id: "mat-inferencia-f2",
      front: "Modus Ponens",
      back: "Premisas: p → q y p. Conclusion: q.",
    },
    {
      id: "mat-inferencia-f3",
      front: "Modus Tollens",
      back: "Premisas: p → q y ¬q. Conclusion: ¬p.",
    },
    {
      id: "mat-inferencia-f4",
      front: "Silogismo hipotetico",
      back: "Premisas: p → q y q → r. Conclusion: p → r (encadena condicionales).",
    },
    {
      id: "mat-inferencia-f5",
      front: "Silogismo disyuntivo",
      back: "Premisas: p ∨ q y ¬p. Conclusion: q.",
    },
    {
      id: "mat-inferencia-f6",
      front: "Falacias frecuentes",
      back: "Afirmar el consecuente (de p→q y q deducir p) y negar el antecedente (de p→q y ¬p deducir ¬q). NO son validas.",
    },
    {
      id: "mat-inferencia-f7",
      front: "Como se prueba la validez con tabla de verdad?",
      back: "El argumento es valido si (premisas) → conclusion es una tautologia.",
    },
  ],
  matchPairs: [
    {
      term: "Modus Ponens",
      definition: "De p → q y p, se deduce q.",
    },
    {
      term: "Modus Tollens",
      definition: "De p → q y ¬q, se deduce ¬p.",
    },
    {
      term: "Silogismo hipotetico",
      definition: "De p → q y q → r, se deduce p → r.",
    },
    {
      term: "Silogismo disyuntivo",
      definition: "De p ∨ q y ¬p, se deduce q.",
    },
    {
      term: "Simplificacion",
      definition: "De p ∧ q, se deduce p.",
    },
    {
      term: "Falacia",
      definition: "Argumento que parece valido pero no lo es.",
    },
  ],
  orderChallenge: {
    id: "mat-inferencia-order",
    title: "Pasos para validar un argumento",
    steps: [
      "Simbolizar las premisas con variables y conectivos",
      "Simbolizar la conclusion",
      "Identificar la regla de inferencia aplicable",
      "Aplicar la regla (o armar la tabla de verdad)",
      "Concluir si el argumento es valido",
    ],
  },
  terms: ["PREMISA", "CONCLUSION", "VALIDEZ", "SILOGISMO", "PONENS", "FALACIA"],
};

export default topic;
