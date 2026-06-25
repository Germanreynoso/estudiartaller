import type { Topic } from "../types";

const topic: Topic = {
  id: "niveles-lenguajes",
  number: 17,
  module: "lenguajes",
  title: "Niveles de Lenguajes",
  short:
    "Lenguajes segun su cercania a la maquina o al humano: bajo, medio y alto nivel.",
  theory: `Un **lenguaje de programacion** se puede clasificar segun su **nivel**, es decir, segun que tan **cerca** este del **hardware (la maquina)** o del **lenguaje humano**. Cuanto mas cerca esta de la maquina, mas dificil es para la persona; cuanto mas cerca esta del lenguaje humano, mas facil de aprender y usar. Por eso hablamos de lenguajes de **BAJO**, **MEDIO** y **ALTO** nivel.

Una idea clave para no confundirse: **bajo nivel** NO significa "peor" y **alto nivel** NO significa "mejor". El "nivel" mide la **distancia respecto del hardware**, no la calidad.

## Bajo nivel

Los lenguajes de **bajo nivel** son los mas **cercanos al hardware y al procesador**. Son **dificiles de entender** para el humano, pero le dan al programa **control directo del hardware**. Hay dos tipos:

- **Lenguaje maquina**: es el mas bajo de todos. Esta escrito en **binario**, solo con **0 y 1**. Es el unico que el **procesador ejecuta directamente**, sin necesidad de traduccion. Es practicamente imposible de leer o escribir a mano por una persona.
- **Lenguaje ensamblador (assembly)**: usa **mnemonicos**, palabras cortas que representan instrucciones, como 'MOV', 'ADD', 'SUB'. Es mas legible que el binario, pero necesita un **ensamblador** (un traductor) que lo convierta a lenguaje maquina para poder ejecutarse.

**Ventajas** del bajo nivel: son muy **rapidos y eficientes** y permiten **control directo del hardware**.
**Desventajas**: son **dificiles de aprender** y **dependientes de la maquina** (un programa hecho para un procesador no sirve para otro distinto).

    Mnemonico (assembly)        Lenguaje maquina (binario)
    MOV  AX, 5        ----->    10111000 00000101 00000000
    ADD  AX, 3        ----->    00000101 00000011 00000000

## Medio nivel

Los lenguajes de **medio nivel** **combinan caracteristicas** de los lenguajes de alto y de bajo nivel. Por un lado, permiten **acceder al hardware** (como el bajo nivel); por otro, ofrecen **estructuras de alto nivel** mas comodas para el programador.

El ejemplo tipico es el lenguaje **C**: se lo considera de medio nivel porque permite trabajar cerca del hardware y, al mismo tiempo, usar construcciones mas legibles y portables.

## Alto nivel

Los lenguajes de **alto nivel** son los mas **cercanos al lenguaje humano**. Sus principales caracteristicas:

- Son **independientes de la maquina**: el mismo programa puede correr en distintos equipos (son **portables**).
- Son **mas faciles de aprender** y de leer.
- **Necesitan un traductor** para poder ejecutarse, que puede ser un **compilador** o un **interprete**, porque el procesador no entiende directamente este nivel.

Ejemplos de lenguajes de alto nivel: **Python**, **Java**, **C++** y **JavaScript**.

## Resumen visual

De **mas cerca de la maquina** (abajo) a **mas cerca del humano** (arriba):

    +---------------------------------------------+
    |  ALTO NIVEL   (cerca del humano)            |
    |  Python, Java, C++, JavaScript              |
    |  portable, facil, necesita traductor        |
    +---------------------------------------------+
    |  MEDIO NIVEL                                |
    |  C  (mezcla alto + bajo nivel)              |
    +---------------------------------------------+
    |  BAJO NIVEL   (cerca de la maquina)         |
    |  Ensamblador (MOV, ADD) -> necesita         |
    |               ensamblador                   |
    |  Maquina (binario 0 y 1) -> ejecuta directo |
    +---------------------------------------------+
              mas cerca del HARDWARE`,
  keyPoints: [
    "El nivel mide la cercania al hardware (bajo) o al lenguaje humano (alto), no la calidad del lenguaje.",
    "Bajo nivel: cercano a la maquina, dificil para el humano; incluye lenguaje maquina (binario) y ensamblador (assembly).",
    "El lenguaje maquina (0 y 1) es el unico que el procesador ejecuta directamente; el ensamblador usa mnemonicos (MOV, ADD) y necesita un ensamblador.",
    "Medio nivel: combina alto y bajo nivel; permite acceso al hardware y estructuras de alto nivel. Ejemplo tipico: C.",
    "Alto nivel: cercano al humano, independiente de la maquina, portable y facil; necesita un traductor (compilador o interprete).",
    "Ejemplos de alto nivel: Python, Java, C++ y JavaScript.",
  ],
  questions: [
    {
      id: "niveles-lenguajes-q1",
      type: "mc",
      prompt:
        "Que mide el NIVEL de un lenguaje de programacion (bajo, medio o alto)?",
      options: [
        "Que tan cerca esta del hardware o del lenguaje humano.",
        "Que tan rapido se descarga el lenguaje de internet.",
        "La cantidad de lineas que tiene un programa.",
        "El precio de la licencia del lenguaje.",
      ],
      answerIndex: 0,
      accepted: [],
      explanation:
        "El nivel indica la cercania al hardware (bajo nivel) o al lenguaje humano (alto nivel); no mide calidad ni precio.",
      difficulty: "facil",
    },
    {
      id: "niveles-lenguajes-q2",
      type: "mc",
      prompt:
        "Cual de estas afirmaciones describe al LENGUAJE MAQUINA?",
      options: [
        "Esta escrito en binario (0 y 1) y el procesador lo ejecuta directamente.",
        "Usa mnemonicos como MOV y ADD y necesita un ensamblador.",
        "Es de alto nivel y muy parecido al idioma humano.",
        "Combina caracteristicas de alto y bajo nivel, como C.",
      ],
      answerIndex: 0,
      accepted: [],
      explanation:
        "El lenguaje maquina es binario (0 y 1) y es el unico que el procesador ejecuta directamente, sin traduccion.",
      difficulty: "media",
    },
    {
      id: "niveles-lenguajes-q3",
      type: "mc",
      prompt:
        "El lenguaje ENSAMBLADOR (assembly) se caracteriza porque...",
      options: [
        "Usa mnemonicos como MOV o ADD y necesita un ensamblador para convertirse en lenguaje maquina.",
        "Esta escrito solo en 0 y 1 y se ejecuta directamente.",
        "Es independiente de la maquina y totalmente portable.",
        "Es el lenguaje mas facil de aprender para un principiante.",
      ],
      answerIndex: 0,
      accepted: [],
      explanation:
        "El ensamblador usa mnemonicos (MOV, ADD) y requiere un ensamblador que lo traduzca a lenguaje maquina; sigue siendo de bajo nivel.",
      difficulty: "media",
    },
    {
      id: "niveles-lenguajes-q4",
      type: "mc",
      prompt:
        "Cual es el ejemplo tipico de lenguaje de MEDIO nivel?",
      options: ["C", "Python", "Binario", "JavaScript"],
      answerIndex: 0,
      accepted: [],
      explanation:
        "C se considera de medio nivel porque combina acceso al hardware (bajo nivel) con estructuras de alto nivel.",
      difficulty: "media",
    },
    {
      id: "niveles-lenguajes-q5",
      type: "mc",
      prompt:
        "Cual de estos grupos contiene SOLO lenguajes de ALTO nivel?",
      options: [
        "Python, Java, C++, JavaScript.",
        "Binario, ensamblador, maquina.",
        "MOV, ADD, SUB.",
        "C, ensamblador, binario.",
      ],
      answerIndex: 0,
      accepted: [],
      explanation:
        "Python, Java, C++ y JavaScript son lenguajes de alto nivel; el resto incluye bajo o medio nivel.",
      difficulty: "facil",
    },
    {
      id: "niveles-lenguajes-q6",
      type: "vf",
      prompt:
        "Los lenguajes de bajo nivel son cercanos al hardware y, por eso, suelen ser muy rapidos y eficientes pero dificiles para el humano.",
      options: ["Verdadero", "Falso"],
      answerIndex: 0,
      accepted: [],
      explanation:
        "Verdadero: el bajo nivel da control directo del hardware y mucha eficiencia, a cambio de ser dificil y dependiente de la maquina.",
      difficulty: "facil",
    },
    {
      id: "niveles-lenguajes-q7",
      type: "vf",
      prompt:
        "Los lenguajes de alto nivel se ejecutan directamente en el procesador sin necesidad de ningun traductor.",
      options: ["Verdadero", "Falso"],
      answerIndex: 1,
      accepted: [],
      explanation:
        "Falso: el alto nivel necesita un traductor (compilador o interprete); solo el lenguaje maquina se ejecuta directamente.",
      difficulty: "media",
    },
    {
      id: "niveles-lenguajes-q8",
      type: "vf",
      prompt:
        "Los lenguajes de alto nivel son independientes de la maquina, lo que los hace portables entre distintos equipos.",
      options: ["Verdadero", "Falso"],
      answerIndex: 0,
      accepted: [],
      explanation:
        "Verdadero: al ser independientes de la maquina, los lenguajes de alto nivel son portables y mas faciles de aprender.",
      difficulty: "facil",
    },
    {
      id: "niveles-lenguajes-q9",
      type: "fill",
      prompt:
        "El lenguaje de bajo nivel escrito unicamente con 0 y 1, que el procesador ejecuta directamente, se llama lenguaje ____.",
      options: [],
      answerIndex: -1,
      accepted: ["maquina"],
      explanation:
        "El lenguaje maquina esta en binario (0 y 1) y es el unico que el procesador entiende y ejecuta sin traduccion.",
      difficulty: "media",
    },
  ],
  flashcards: [
    {
      id: "niveles-lenguajes-fc1",
      front: "Que mide el nivel de un lenguaje?",
      back: "La cercania al hardware (bajo nivel) o al lenguaje humano (alto nivel). No mide la calidad del lenguaje.",
    },
    {
      id: "niveles-lenguajes-fc2",
      front: "Que es un lenguaje de bajo nivel?",
      back: "Un lenguaje cercano al hardware, dificil para el humano. Incluye el lenguaje maquina (binario) y el ensamblador (assembly).",
    },
    {
      id: "niveles-lenguajes-fc3",
      front: "Lenguaje maquina vs ensamblador",
      back: "Maquina: binario (0 y 1), lo ejecuta el procesador directamente. Ensamblador: mnemonicos (MOV, ADD); necesita un ensamblador que lo traduzca.",
    },
    {
      id: "niveles-lenguajes-fc4",
      front: "Que es un lenguaje de medio nivel?",
      back: "Combina caracteristicas de alto y bajo nivel: permite acceso al hardware y estructuras de alto nivel. Ejemplo tipico: C.",
    },
    {
      id: "niveles-lenguajes-fc5",
      front: "Que es un lenguaje de alto nivel?",
      back: "Cercano al humano, independiente de la maquina, portable y facil de aprender. Necesita un traductor (compilador o interprete).",
    },
    {
      id: "niveles-lenguajes-fc6",
      front: "Ejemplos de lenguajes de alto nivel",
      back: "Python, Java, C++ y JavaScript.",
    },
    {
      id: "niveles-lenguajes-fc7",
      front: "Ventajas y desventajas del bajo nivel",
      back: "Ventaja: muy rapidos, eficientes y con control directo del hardware. Desventaja: dificiles de aprender y dependientes de la maquina.",
    },
  ],
  matchPairs: [
    {
      term: "Lenguaje maquina",
      definition: "Binario (0 y 1); el procesador lo ejecuta directamente.",
    },
    {
      term: "Ensamblador",
      definition: "Usa mnemonicos (MOV, ADD); necesita un ensamblador para traducirse.",
    },
    {
      term: "Bajo nivel",
      definition: "Cercano al hardware: rapido y eficiente, pero dificil y dependiente de la maquina.",
    },
    {
      term: "Medio nivel",
      definition: "Mezcla alto y bajo nivel; permite acceso al hardware. Ejemplo: C.",
    },
    {
      term: "Alto nivel",
      definition: "Cercano al humano, portable y facil; necesita un traductor.",
    },
    {
      term: "Traductor",
      definition: "Compilador o interprete que convierte el alto nivel para ejecutarlo.",
    },
  ],
  orderChallenge: {
    id: "niveles-lenguajes-order",
    title: "Orden de mas cercano a la maquina a mas cercano al humano",
    steps: [
      "Lenguaje maquina (binario 0 y 1)",
      "Lenguaje ensamblador (assembly)",
      "Lenguaje de medio nivel (C)",
      "Lenguaje de alto nivel (Python, Java)",
    ],
  },
  terms: ["MAQUINA", "ENSAMBLADOR", "BINARIO", "COMPILADOR", "PORTABLE", "HARDWARE"],
};

export default topic;
