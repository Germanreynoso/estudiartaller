import type { Topic } from "../types";

const topic: Topic = {
  id: "mat-predicados",
  number: 7,
  module: "mat-predicados",
  title: "Logica de predicados (cuantificadores ∀ y ∃)",
  short:
    "Predicados, funciones proposicionales, dominio y cuantificadores universal y existencial.",
  theory: `La logica proposicional no puede analizar el interior de un enunciado como "todos los numeros pares son divisibles por 2". Para eso esta la **logica de predicados** (o logica de primer orden), que agrega **predicados**, **variables** y **cuantificadores**.

## Predicado y funcion proposicional

Un **predicado** es lo que se **afirma** del sujeto. Al escribirlo con una variable se obtiene una **funcion proposicional**, que se nota **P(x)**: una expresion que **se vuelve proposicion** (V o F) cuando se reemplaza la variable por un elemento concreto.

    P(x): "x es un numero par"
    P(4) -> "4 es par" -> V
    P(7) -> "7 es par" -> F

Por si sola, P(x) **no** tiene valor de verdad (depende de x).

## Dominio o universo de discurso

Es el **conjunto de valores** que puede tomar la variable. El valor de verdad de un enunciado cuantificado depende del dominio elegido. Por ejemplo, "todo x cumple x > 0" es verdadero si el dominio son los naturales mayores que cero, y falso si son todos los enteros.

## Cuantificadores

Convierten una funcion proposicional en una proposicion (con valor de verdad) indicando **para cuantos** elementos vale.

### Cuantificador universal (∀, "para todo")

**∀x P(x)** se lee "**para todo** x, se cumple P(x)". Es **Verdadero** si P(x) es verdadero para **TODOS** los elementos del dominio. Basta **un** contraejemplo para que sea Falso.

    ∀x (x + 0 = x)   -> Verdadero en los numeros

### Cuantificador existencial (∃, "existe")

**∃x P(x)** se lee "**existe** (al menos un) x tal que P(x)". Es **Verdadero** si P(x) se cumple para **AL MENOS UN** elemento. Es Falso solo si no se cumple para ninguno.

    ∃x (x es par)    -> Verdadero (por ejemplo, x = 2)

## Negacion de cuantificadores (leyes de De Morgan generalizadas)

Negar un cuantificado **cambia el cuantificador** y niega el predicado:

- ¬(∀x P(x)) ≡ ∃x ¬P(x)   → "no todos cumplen" = "existe alguno que no cumple".
- ¬(∃x P(x)) ≡ ∀x ¬P(x)   → "no existe ninguno que cumpla" = "todos no cumplen".

Ejemplo: la negacion de "todos los alumnos aprobaron" es "existe (al menos) un alumno que no aprobo".

## Cuantificadores multiples

Una funcion puede tener varias variables y varios cuantificadores: **∀x ∃y P(x, y)**. El **orden importa**: ∀x ∃y no significa lo mismo que ∃y ∀x.

> En resumen: el cuantificador universal ∀ exige que se cumpla en TODO el dominio; el existencial ∃ pide que se cumpla AL MENOS UNA VEZ; y para negarlos se intercambian entre si negando el predicado.`,
  keyPoints: [
    "La logica de predicados analiza el interior del enunciado: agrega predicados, variables y cuantificadores.",
    "Una funcion proposicional P(x) se vuelve proposicion (V o F) al reemplazar la variable por un valor.",
    "El dominio (universo de discurso) es el conjunto de valores que puede tomar la variable; influye en el valor de verdad.",
    "Universal ∀x P(x): verdadero si P(x) vale para TODOS; basta un contraejemplo para que sea falso.",
    "Existencial ∃x P(x): verdadero si P(x) vale para AL MENOS UNO.",
    "Negacion: ¬∀x P(x) ≡ ∃x ¬P(x) y ¬∃x P(x) ≡ ∀x ¬P(x).",
    "Con varios cuantificadores el orden importa: ∀x ∃y no es lo mismo que ∃y ∀x.",
  ],
  questions: [
    {
      id: "mat-predicados-q1",
      type: "mc",
      prompt: "Que es una funcion proposicional P(x)?",
      options: [
        "Una proposicion que siempre es verdadera.",
        "Una expresion que se vuelve proposicion (V o F) al reemplazar la variable por un valor.",
        "Un conjunto de numeros.",
        "Una pregunta sobre x.",
      ],
      answerIndex: 1,
      accepted: [],
      explanation:
        "P(x) no tiene valor de verdad por si sola; lo adquiere cuando x se reemplaza por un elemento del dominio.",
      difficulty: "facil",
    },
    {
      id: "mat-predicados-q2",
      type: "mc",
      prompt: "Como se lee el cuantificador ∀x P(x)?",
      options: [
        "Existe un x tal que P(x).",
        "Para todo x se cumple P(x).",
        "No existe x con P(x).",
        "x es igual a P.",
      ],
      answerIndex: 1,
      accepted: [],
      explanation:
        "∀ es el cuantificador universal: 'para todo x, se cumple P(x)'.",
      difficulty: "facil",
    },
    {
      id: "mat-predicados-q3",
      type: "mc",
      prompt: "Cuando es Verdadero el cuantificador existencial ∃x P(x)?",
      options: [
        "Cuando P(x) se cumple para todos los elementos.",
        "Cuando P(x) se cumple para al menos un elemento del dominio.",
        "Cuando P(x) no se cumple para ninguno.",
        "Cuando el dominio es vacio.",
      ],
      answerIndex: 1,
      accepted: [],
      explanation:
        "∃x P(x) es verdadero si existe al menos un elemento que cumple P(x).",
      difficulty: "media",
    },
    {
      id: "mat-predicados-q4",
      type: "mc",
      prompt: "Cual es la negacion de ∀x P(x)?",
      options: [
        "∀x ¬P(x)",
        "∃x ¬P(x)",
        "¬∃x P(x)",
        "∀x P(x)",
      ],
      answerIndex: 1,
      accepted: [],
      explanation:
        "¬(∀x P(x)) ≡ ∃x ¬P(x): si no todos cumplen, es que existe al menos uno que no cumple.",
      difficulty: "media",
    },
    {
      id: "mat-predicados-q5",
      type: "mc",
      prompt: "Cual es la negacion de ∃x P(x)?",
      options: [
        "∃x ¬P(x)",
        "∀x P(x)",
        "∀x ¬P(x)",
        "¬∀x ¬P(x)",
      ],
      answerIndex: 2,
      accepted: [],
      explanation:
        "¬(∃x P(x)) ≡ ∀x ¬P(x): si no existe ninguno que cumpla, entonces todos NO cumplen.",
      difficulty: "dificil",
    },
    {
      id: "mat-predicados-q6",
      type: "vf",
      prompt:
        "Para que ∀x P(x) sea Falso alcanza con encontrar un solo contraejemplo.",
      options: ["Verdadero", "Falso"],
      answerIndex: 0,
      accepted: [],
      explanation:
        "Verdadero: un unico elemento que no cumpla P(x) basta para que 'para todo' sea falso.",
      difficulty: "media",
    },
    {
      id: "mat-predicados-q7",
      type: "vf",
      prompt:
        "El valor de verdad de un enunciado cuantificado no depende del dominio elegido.",
      options: ["Verdadero", "Falso"],
      answerIndex: 1,
      accepted: [],
      explanation:
        "Falso: el dominio (universo de discurso) influye. 'Todo x cumple x > 0' puede ser V o F segun el conjunto.",
      difficulty: "dificil",
    },
    {
      id: "mat-predicados-q8",
      type: "fill",
      prompt:
        "El conjunto de valores que puede tomar la variable se llama dominio o universo de ____.",
      options: [],
      answerIndex: -1,
      accepted: ["discurso"],
      explanation:
        "El dominio o universo de discurso es el conjunto de valores posibles de la variable.",
      difficulty: "media",
    },
    {
      id: "mat-predicados-q9",
      type: "fill",
      prompt:
        "El cuantificador que se lee 'existe al menos un' se simboliza con la letra E invertida, llamada cuantificador ____.",
      options: [],
      answerIndex: -1,
      accepted: ["existencial"],
      explanation:
        "El cuantificador existencial (∃) afirma que al menos un elemento cumple el predicado.",
      difficulty: "media",
    },
  ],
  flashcards: [
    {
      id: "mat-predicados-f1",
      front: "Que es una funcion proposicional P(x)?",
      back: "Expresion que se vuelve proposicion (V o F) al reemplazar la variable por un valor del dominio.",
    },
    {
      id: "mat-predicados-f2",
      front: "Cuantificador universal ∀x P(x)",
      back: "'Para todo x, P(x)'. Verdadero si vale para TODOS; basta un contraejemplo para que sea falso.",
    },
    {
      id: "mat-predicados-f3",
      front: "Cuantificador existencial ∃x P(x)",
      back: "'Existe al menos un x tal que P(x)'. Verdadero si vale para AL MENOS UNO.",
    },
    {
      id: "mat-predicados-f4",
      front: "Negacion de ∀x P(x)",
      back: "¬∀x P(x) ≡ ∃x ¬P(x) ('no todos' = 'existe alguno que no').",
    },
    {
      id: "mat-predicados-f5",
      front: "Negacion de ∃x P(x)",
      back: "¬∃x P(x) ≡ ∀x ¬P(x) ('no existe ninguno' = 'todos no cumplen').",
    },
    {
      id: "mat-predicados-f6",
      front: "Que es el dominio o universo de discurso?",
      back: "El conjunto de valores que puede tomar la variable; afecta el valor de verdad del cuantificado.",
    },
  ],
  matchPairs: [
    {
      term: "Predicado",
      definition: "Lo que se afirma del sujeto; con variable da P(x).",
    },
    {
      term: "Cuantificador universal (∀)",
      definition: "'Para todo': verdadero si P(x) vale para todos.",
    },
    {
      term: "Cuantificador existencial (∃)",
      definition: "'Existe': verdadero si P(x) vale para al menos uno.",
    },
    {
      term: "Dominio",
      definition: "Conjunto de valores que puede tomar la variable.",
    },
    {
      term: "Negacion de ∀x P(x)",
      definition: "∃x ¬P(x).",
    },
    {
      term: "Negacion de ∃x P(x)",
      definition: "∀x ¬P(x).",
    },
  ],
  orderChallenge: {
    id: "mat-predicados-order",
    title: "Negar un enunciado cuantificado",
    steps: [
      "Identificar el cuantificador (∀ o ∃)",
      "Cambiar ∀ por ∃ (o ∃ por ∀)",
      "Negar el predicado interior P(x)",
      "Escribir el enunciado negado resultante",
    ],
  },
  terms: ["PREDICADO", "CUANTIFICADOR", "UNIVERSAL", "EXISTENCIAL", "DOMINIO", "VARIABLE"],
};

export default topic;
