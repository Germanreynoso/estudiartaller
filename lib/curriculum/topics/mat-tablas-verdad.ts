import type { Topic } from "../types";

const topic: Topic = {
  id: "mat-tablas-verdad",
  number: 4,
  module: "mat-proposicional",
  title: "Tablas de verdad (tautologia, contradiccion, contingencia)",
  short:
    "Como se construye la tabla de verdad de una formula y como se clasifica el resultado.",
  theory: `Una **tabla de verdad** muestra el valor de verdad de una proposicion compuesta para **todas** las combinaciones posibles de valores de sus proposiciones simples.

## Cuantas filas tiene

Si una formula tiene **n** variables distintas, su tabla tiene **2 elevado a la n** filas (porque cada variable puede ser V o F):

| variables (n) | filas (2^n) |
|---|---|
| 1 | 2 |
| 2 | 4 |
| 3 | 8 |
| 4 | 16 |

## Como se construye (paso a paso)

Tomemos la formula **(p ∧ q) → p**.

1. **Identificar las variables:** p y q (n = 2, entonces 4 filas).
2. **Listar todas las combinaciones** de V y F de forma ordenada.
3. **Evaluar las subformulas** (primero los parentesis y lo de mayor prioridad).
4. **Evaluar el conectivo principal** usando las columnas ya calculadas.

| p | q | p ∧ q | (p ∧ q) → p |
|---|---|-------|-------------|
| V | V |   V   |      V      |
| V | F |   F   |      V      |
| F | V |   F   |      V      |
| F | F |   F   |      V      |

La columna final es la **columna principal** (la que define el conectivo de mayor jerarquia).

## Clasificacion segun la columna principal

Segun los valores de la columna final, la formula se clasifica en:

- **Tautologia:** es **Verdadera en TODAS** las filas. (Ejemplo: p ∨ ¬p, o el (p ∧ q) → p de arriba.) Tambien se la llama ley logica.
- **Contradiccion:** es **Falsa en TODAS** las filas. (Ejemplo: p ∧ ¬p.)
- **Contingencia:** tiene **algunas V y algunas F** (depende de los valores). Es el caso mas comun.

Ejemplo de contradiccion **p ∧ ¬p**:

| p | ¬p | p ∧ ¬p |
|---|----|--------|
| V | F  |   F    |
| F | V  |   F    |

Ejemplo de contingencia **p → q**:

| p | q | p → q |
|---|---|-------|
| V | V |   V   |
| V | F |   F   |
| F | V |   V   |
| F | F |   V   |

(tiene V y F, por eso es contingencia).

## Para que sirven

Las tablas de verdad permiten:

- **Calcular** el valor de cualquier proposicion compuesta.
- **Clasificarla** (tautologia, contradiccion o contingencia).
- **Comparar** dos formulas: si tienen la misma columna principal, son **logicamente equivalentes** (tema siguiente).
- **Verificar argumentos**: un condicional que sea tautologia representa un razonamiento valido.`,
  keyPoints: [
    "La tabla de verdad da el valor de una formula para todas las combinaciones de sus variables.",
    "Con n variables, la tabla tiene 2^n filas (1->2, 2->4, 3->8, 4->16).",
    "Se evalua primero lo de mayor prioridad y los parentesis, y al final el conectivo principal.",
    "Tautologia: Verdadera en TODAS las filas (ej. p ∨ ¬p).",
    "Contradiccion: Falsa en TODAS las filas (ej. p ∧ ¬p).",
    "Contingencia: tiene algunas V y algunas F (el caso mas comun).",
    "Dos formulas con la misma columna principal son logicamente equivalentes.",
  ],
  questions: [
    {
      id: "mat-tablas-verdad-q1",
      type: "mc",
      prompt: "Cuantas filas tiene la tabla de verdad de una formula con 3 variables?",
      options: ["3", "6", "8", "9"],
      answerIndex: 2,
      accepted: [],
      explanation:
        "Con n variables hay 2^n filas. Para n = 3: 2^3 = 8 filas.",
      difficulty: "facil",
    },
    {
      id: "mat-tablas-verdad-q2",
      type: "mc",
      prompt: "Que es una tautologia?",
      options: [
        "Una formula que es Falsa en todas las filas.",
        "Una formula que es Verdadera en todas las filas.",
        "Una formula que tiene algunas V y algunas F.",
        "Una formula sin variables.",
      ],
      answerIndex: 1,
      accepted: [],
      explanation:
        "La tautologia (o ley logica) es Verdadera para toda combinacion de valores de sus variables.",
      difficulty: "facil",
    },
    {
      id: "mat-tablas-verdad-q3",
      type: "mc",
      prompt: "Como se clasifica una formula que es Falsa en todas las filas?",
      options: [
        "Tautologia.",
        "Contingencia.",
        "Contradiccion.",
        "Equivalencia.",
      ],
      answerIndex: 2,
      accepted: [],
      explanation:
        "Una formula Falsa en todas las filas es una contradiccion (ejemplo: p ∧ ¬p).",
      difficulty: "facil",
    },
    {
      id: "mat-tablas-verdad-q4",
      type: "mc",
      prompt:
        "La formula p ∨ ¬p, segun su tabla de verdad, es una...",
      options: [
        "Contradiccion.",
        "Contingencia.",
        "Tautologia.",
        "No es una formula valida.",
      ],
      answerIndex: 2,
      accepted: [],
      explanation:
        "p ∨ ¬p es Verdadera siempre (o p es verdadera, o lo es su negacion): es una tautologia, llamada principio del tercero excluido.",
      difficulty: "media",
    },
    {
      id: "mat-tablas-verdad-q5",
      type: "mc",
      prompt:
        "Que tipo de formula tiene algunas filas Verdaderas y algunas Falsas?",
      options: [
        "Tautologia.",
        "Contradiccion.",
        "Contingencia.",
        "Axioma.",
      ],
      answerIndex: 2,
      accepted: [],
      explanation:
        "La contingencia toma valores mixtos (V y F) segun los valores de sus variables; es el caso mas comun.",
      difficulty: "media",
    },
    {
      id: "mat-tablas-verdad-q6",
      type: "vf",
      prompt:
        "Una formula con 2 variables tiene una tabla de verdad de 4 filas.",
      options: ["Verdadero", "Falso"],
      answerIndex: 0,
      accepted: [],
      explanation:
        "2^2 = 4 filas: (V,V), (V,F), (F,V), (F,F).",
      difficulty: "facil",
    },
    {
      id: "mat-tablas-verdad-q7",
      type: "vf",
      prompt:
        "Dos formulas que tienen la misma columna principal en su tabla de verdad son logicamente equivalentes.",
      options: ["Verdadero", "Falso"],
      answerIndex: 0,
      accepted: [],
      explanation:
        "Verdadero: si coinciden fila por fila en la columna principal, las formulas son equivalentes (≡).",
      difficulty: "dificil",
    },
    {
      id: "mat-tablas-verdad-q8",
      type: "vf",
      prompt:
        "La formula p ∧ ¬p es una tautologia.",
      options: ["Verdadero", "Falso"],
      answerIndex: 1,
      accepted: [],
      explanation:
        "Falso: p ∧ ¬p es Falsa en todas las filas, por lo tanto es una contradiccion, no una tautologia.",
      difficulty: "media",
    },
    {
      id: "mat-tablas-verdad-q9",
      type: "fill",
      prompt:
        "Una formula que es Verdadera en todas las filas de su tabla se llama ____.",
      options: [],
      answerIndex: -1,
      accepted: ["tautologia"],
      explanation:
        "La tautologia es Verdadera para toda asignacion de valores; tambien se la llama ley logica.",
      difficulty: "media",
    },
  ],
  flashcards: [
    {
      id: "mat-tablas-verdad-f1",
      front: "Que es una tabla de verdad?",
      back: "Una tabla que da el valor de verdad de una formula para todas las combinaciones de sus variables.",
    },
    {
      id: "mat-tablas-verdad-f2",
      front: "Cuantas filas tiene una tabla con n variables?",
      back: "2 elevado a la n. Ej.: 2 variables -> 4 filas, 3 variables -> 8 filas.",
    },
    {
      id: "mat-tablas-verdad-f3",
      front: "Tautologia",
      back: "Formula Verdadera en TODAS las filas (ej. p ∨ ¬p). Tambien llamada ley logica.",
    },
    {
      id: "mat-tablas-verdad-f4",
      front: "Contradiccion",
      back: "Formula Falsa en TODAS las filas (ej. p ∧ ¬p).",
    },
    {
      id: "mat-tablas-verdad-f5",
      front: "Contingencia",
      back: "Formula con algunas V y algunas F; depende de los valores de las variables.",
    },
    {
      id: "mat-tablas-verdad-f6",
      front: "Que es la columna principal?",
      back: "La columna del conectivo de mayor jerarquia; define la clasificacion de la formula.",
    },
  ],
  matchPairs: [
    {
      term: "Tautologia",
      definition: "Formula Verdadera en todas las filas.",
    },
    {
      term: "Contradiccion",
      definition: "Formula Falsa en todas las filas.",
    },
    {
      term: "Contingencia",
      definition: "Formula con algunas filas V y algunas F.",
    },
    {
      term: "Cantidad de filas",
      definition: "2 elevado a la n, siendo n el numero de variables.",
    },
    {
      term: "Columna principal",
      definition: "La del conectivo de mayor jerarquia; clasifica la formula.",
    },
    {
      term: "Formulas equivalentes",
      definition: "Tienen identica columna principal en la tabla.",
    },
  ],
  orderChallenge: {
    id: "mat-tablas-verdad-order",
    title: "Construir una tabla de verdad",
    steps: [
      "Identificar las variables distintas",
      "Calcular la cantidad de filas (2 elevado a la n)",
      "Listar todas las combinaciones de V y F",
      "Evaluar las subformulas y parentesis",
      "Evaluar el conectivo principal",
      "Clasificar la formula segun la columna final",
    ],
  },
  terms: ["TAUTOLOGIA", "CONTRADICCION", "CONTINGENCIA", "VARIABLE", "TABLA"],
};

export default topic;
