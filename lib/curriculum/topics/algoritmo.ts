import type { Topic } from "../types";

const topic: Topic = {
  id: "algoritmo",
  number: 1,
  module: "fundamentos",
  title: "Algoritmo",
  short: "Secuencia ordenada y finita de pasos para resolver un problema u objetivo.",
  theory: `Un **algoritmo** es una secuencia ordenada de pasos finitos, ejecutados de forma secuencial, para cumplir un objetivo o dar respuesta a un requerimiento.

Cuando ese conjunto de pasos se piensa para que lo ejecute una computadora, hablamos de **algoritmo informatico**: una secuencia de instrucciones finitas que realizan procesos para resolver problemas.

La idea clave es que el algoritmo describe *que hacer y en que orden*, antes de escribir codigo en un lenguaje concreto. Por eso se estudia al principio de la materia: es la base del pensamiento computacional.

## Las tres partes de un algoritmo

Todo algoritmo se organiza en tres partes:

- **Entrada (input):** los datos que el algoritmo necesita para trabajar.
- **Procesamiento:** los calculos logicos que transforman la entrada.
- **Salida (output):** los resultados que produce el algoritmo.

El siguiente esquema muestra el flujo general:

\`\`\`
   ENTRADA            PROCESAMIENTO            SALIDA
  (input)          (calculos logicos)        (output)
 +---------+        +----------------+       +---------+
 |  datos  |  --->  |  transformar   | --->  | result. |
 +---------+        +----------------+       +---------+
\`\`\`

## Caracteristicas de un algoritmo

Para que una secuencia de pasos sea considerada un algoritmo correcto, debe cumplir:

- **Preciso:** apunta a un objetivo claro, sin ambiguedad.
- **Bien definido:** ante los mismos inputs siempre produce los mismos outputs.
- **Orden secuencial:** un paso se ejecuta despues de otro, en un orden establecido.
- **Finito:** tiene un numero determinado de pasos y, por lo tanto, tiene un final.
- **Concreto:** muestra un resultado.

## Ejemplo cotidiano

Un ejemplo real es el **algoritmo de busqueda de Google**: recibe como entrada el texto que escribimos, lo procesa comparandolo con millones de paginas y devuelve como salida una lista ordenada de resultados.

## Analogia: la receta de cocina

Una forma simple de entenderlo es pensar en una **receta de cocina**:

- Los **ingredientes** son la entrada.
- Los **pasos de preparacion** son el procesamiento.
- El **plato terminado** es la salida.

Si seguimos los pasos en el orden indicado, siempre llegamos al mismo resultado. Igual que un algoritmo.

## Ejemplo paso a paso: sumar dos numeros

Un algoritmo simple, escrito en lenguaje cotidiano, para sumar dos numeros:

\`\`\`
1. Inicio
2. Leer el primer numero (a)        <- entrada
3. Leer el segundo numero (b)       <- entrada
4. Calcular suma = a + b            <- procesamiento
5. Mostrar suma                     <- salida
6. Fin
\`\`\`

Cada paso ocurre una sola vez, en orden, y el algoritmo termina (es finito). Con los mismos numeros, siempre obtenemos el mismo resultado (esta bien definido).`,
  keyPoints: [
    "Un algoritmo es una secuencia ordenada y finita de pasos para cumplir un objetivo.",
    "Algoritmo informatico: secuencia de instrucciones finitas que resuelven problemas.",
    "Tiene tres partes: entrada (input), procesamiento (calculos) y salida (output).",
    "Caracteristicas: preciso, bien definido, orden secuencial, finito y concreto.",
    "Bien definido significa que los mismos inputs producen siempre los mismos outputs.",
    "Analogias utiles: una receta de cocina y el algoritmo de busqueda de Google.",
  ],
  questions: [
    {
      id: "algoritmo-q1",
      type: "mc",
      prompt: "Cual es la mejor definicion de algoritmo?",
      options: [
        "Una secuencia ordenada de pasos finitos para cumplir un objetivo.",
        "Un lenguaje de programacion para escribir paginas web.",
        "Un programa que solo funciona en computadoras.",
        "Un error que ocurre cuando el codigo se ejecuta mal.",
      ],
      answerIndex: 0,
      accepted: [],
      explanation:
        "Un algoritmo es una secuencia ordenada de pasos finitos, ejecutados de forma secuencial, para cumplir un objetivo o requerimiento.",
      difficulty: "facil",
    },
    {
      id: "algoritmo-q2",
      type: "mc",
      prompt: "Cuales son las tres partes de un algoritmo?",
      options: [
        "Entrada, procesamiento y salida.",
        "Inicio, variable y fin.",
        "Codigo, compilador y ejecucion.",
        "Pregunta, respuesta y resultado.",
      ],
      answerIndex: 0,
      accepted: [],
      explanation:
        "Todo algoritmo tiene entrada (input: los datos que necesita), procesamiento (calculos logicos) y salida (output: los resultados).",
      difficulty: "facil",
    },
    {
      id: "algoritmo-q3",
      type: "mc",
      prompt: "En la analogia de la receta de cocina, que parte del algoritmo representan los ingredientes?",
      options: [
        "La entrada (input).",
        "El procesamiento.",
        "La salida (output).",
        "El orden secuencial.",
      ],
      answerIndex: 0,
      accepted: [],
      explanation:
        "Los ingredientes son los datos que necesita la receta para empezar, por eso representan la entrada; los pasos son el procesamiento y el plato terminado es la salida.",
      difficulty: "media",
    },
    {
      id: "algoritmo-q4",
      type: "mc",
      prompt: "Que caracteristica indica que un algoritmo, ante los mismos inputs, produce siempre los mismos outputs?",
      options: [
        "Bien definido.",
        "Finito.",
        "Concreto.",
        "Preciso.",
      ],
      answerIndex: 0,
      accepted: [],
      explanation:
        "Estar bien definido significa que para las mismas entradas el algoritmo entrega siempre las mismas salidas, de forma predecible.",
      difficulty: "media",
    },
    {
      id: "algoritmo-q5",
      type: "vf",
      prompt: "Un algoritmo debe ser finito, es decir, tener un numero determinado de pasos y un final.",
      options: ["Verdadero", "Falso"],
      answerIndex: 0,
      accepted: [],
      explanation:
        "Ser finito es una caracteristica esencial: el algoritmo tiene un numero determinado de pasos y siempre llega a un final.",
      difficulty: "facil",
    },
    {
      id: "algoritmo-q6",
      type: "vf",
      prompt: "El algoritmo de busqueda de Google no es un ejemplo de algoritmo porque es demasiado complejo.",
      options: ["Verdadero", "Falso"],
      answerIndex: 1,
      accepted: [],
      explanation:
        "Es falso: el buscador de Google es un ejemplo cotidiano de algoritmo, ya que recibe una entrada (la consulta), la procesa y devuelve una salida (resultados ordenados).",
      difficulty: "media",
    },
    {
      id: "algoritmo-q7",
      type: "vf",
      prompt: "En un algoritmo el orden de los pasos no importa: pueden ejecutarse en cualquier secuencia.",
      options: ["Verdadero", "Falso"],
      answerIndex: 1,
      accepted: [],
      explanation:
        "Es falso: el orden secuencial es una caracteristica del algoritmo; un paso se ejecuta despues de otro en un orden establecido.",
      difficulty: "media",
    },
    {
      id: "algoritmo-q8",
      type: "fill",
      prompt: "La parte del algoritmo que recibe los datos que necesita se llama ____.",
      options: [],
      answerIndex: -1,
      accepted: ["entrada", "input"],
      explanation:
        "La entrada (input) son los datos que el algoritmo necesita para poder realizar su procesamiento.",
      difficulty: "facil",
    },
    {
      id: "algoritmo-q9",
      type: "fill",
      prompt: "La parte del algoritmo que produce y muestra los resultados se llama ____.",
      options: [],
      answerIndex: -1,
      accepted: ["salida", "output"],
      explanation:
        "La salida (output) es el resultado que el algoritmo entrega luego del procesamiento.",
      difficulty: "facil",
    },
  ],
  flashcards: [
    {
      id: "algoritmo-f1",
      front: "Que es un algoritmo?",
      back: "Una secuencia ordenada de pasos finitos, ejecutados de forma secuencial, para cumplir un objetivo o requerimiento.",
    },
    {
      id: "algoritmo-f2",
      front: "Que es un algoritmo informatico?",
      back: "Una secuencia de instrucciones finitas que realizan procesos para resolver problemas en una computadora.",
    },
    {
      id: "algoritmo-f3",
      front: "Cuales son las tres partes de un algoritmo?",
      back: "Entrada (input: datos que necesita), procesamiento (calculos logicos) y salida (output: resultados).",
    },
    {
      id: "algoritmo-f4",
      front: "Cuales son las caracteristicas de un algoritmo?",
      back: "Preciso, bien definido, con orden secuencial, finito y concreto.",
    },
    {
      id: "algoritmo-f5",
      front: "Que significa que un algoritmo este 'bien definido'?",
      back: "Que ante los mismos inputs produce siempre los mismos outputs.",
    },
    {
      id: "algoritmo-f6",
      front: "Que analogia ayuda a entender un algoritmo?",
      back: "Una receta de cocina: ingredientes (entrada), pasos (procesamiento) y plato terminado (salida).",
    },
    {
      id: "algoritmo-f7",
      front: "Que ejemplo cotidiano de algoritmo se menciona?",
      back: "El algoritmo de busqueda de Google.",
    },
  ],
  matchPairs: [
    {
      term: "Entrada",
      definition: "Datos que el algoritmo necesita para trabajar (input).",
    },
    {
      term: "Procesamiento",
      definition: "Calculos logicos que transforman la entrada.",
    },
    {
      term: "Salida",
      definition: "Resultados que produce el algoritmo (output).",
    },
    {
      term: "Finito",
      definition: "Tiene un numero determinado de pasos y un final.",
    },
    {
      term: "Bien definido",
      definition: "Los mismos inputs producen siempre los mismos outputs.",
    },
    {
      term: "Orden secuencial",
      definition: "Un paso se ejecuta despues de otro, en orden establecido.",
    },
  ],
  orderChallenge: {
    id: "algoritmo-oc",
    title: "Ordena el algoritmo para sumar dos numeros",
    steps: [
      "Inicio",
      "Leer el primer numero (a)",
      "Leer el segundo numero (b)",
      "Calcular suma = a + b",
      "Mostrar el resultado",
      "Fin",
    ],
  },
  terms: ["ALGORITMO", "ENTRADA", "SALIDA", "FINITO", "SECUENCIAL", "PROCESO"],
};

export default topic;
