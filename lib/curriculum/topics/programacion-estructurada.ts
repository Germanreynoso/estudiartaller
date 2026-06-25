import type { Topic } from "../types";

const topic: Topic = {
  id: "programacion-estructurada",
  number: 7,
  module: "paradigmas",
  title: "Programacion Estructurada",
  short:
    "Paradigma secuencial basado en secuencia, seleccion e iteracion; sin saltos goto.",
  theory: `La **programacion estructurada** es el paradigma **mas comun** y el primero con el que se suele empezar a programar. Su idea central es dar las instrucciones de manera **secuencial**: una detras de otra, en orden, de arriba hacia abajo. Es el paradigma que **usamos en clase**.

Es una **forma simplificada de la programacion imperativa**: en lugar de usar **saltos absolutos** con la instruccion 'goto' (que llevaban el flujo del programa a cualquier punto y volvian el codigo dificil de seguir), se usan **bucles y estructuras de control** ordenadas. Esto da un flujo claro y predecible.

## Las tres estructuras basicas

La programacion estructurada se apoya en el **teorema del programa estructurado** (tambien conocido como teorema de **Bohm-Jacopini**), que demuestra que **cualquier algoritmo** se puede escribir usando solo **tres estructuras de control**:

- **Secuencia**: las instrucciones se ejecutan una despues de otra, en el orden en que estan escritas.
- **Seleccion (decision)**: segun una condicion, el programa **elige** que camino seguir (por ejemplo 'if / else').
- **Iteracion (repeticion)**: un bloque de instrucciones se **repite** mientras se cumpla una condicion (bucles como 'while' o 'repeat').

### Secuencia

    inicio
      instruccion 1
      instruccion 2
      instruccion 3
    fin

### Seleccion (decision)

    +-------------------+
    |   condicion?      |
    +---------+---------+
       SI     |     NO
       v      |      v
    bloque A  |   bloque B

### Iteracion (repeticion)

    mientras (condicion)
        bloque de instrucciones
        actualizar control   (ej. 'contador = contador + 1')
    fin mientras

## Por que se evita el goto

Antes, los programas usaban 'goto' para saltar a cualquier linea. Eso producia el llamado **codigo espagueti**: un flujo enredado, imposible de seguir y lleno de errores. La programacion estructurada **reemplaza esos saltos** por las tres estructuras basicas, logrando un camino logico claro.

## Ventajas de la programacion estructurada

- Programas mas **legibles y claros**: se leen de arriba hacia abajo.
- Mas **faciles de mantener y modificar** con el tiempo.
- **Menos errores**, al evitar los saltos con 'goto'.
- Facilita la **depuracion** (encontrar y corregir fallos).
- Favorece el **trabajo en equipo** y la **reutilizacion** de codigo.
- Aporta una **estructura logica clara** al programa.

## Importante para el parcial

La programacion estructurada es **imperativa simplificada**: usa **secuencia, seleccion e iteracion** en vez de 'goto'. Sus ventajas se resumen en codigo **claro, mantenible, con menos errores y facil de depurar**. Es el paradigma que usamos en clase.

    +------------------------------------------+
    |        PROGRAMACION ESTRUCTURADA         |
    +------------------------------------------+
    |  SECUENCIA   -> una detras de otra       |
    |  SELECCION   -> decide segun condicion   |
    |  ITERACION   -> repite con bucles        |
    +------------------------------------------+
    |  SIN goto  =>  mas legible y con menos   |
    |                errores                   |
    +------------------------------------------+`,
  keyPoints: [
    "Es el paradigma mas comun y el primero que se aprende; da las instrucciones de forma secuencial (una detras de otra).",
    "Es programacion imperativa simplificada: usa bucles y estructuras de control en lugar de saltos absolutos (goto).",
    "Se basa en tres estructuras basicas (teorema de Bohm-Jacopini): secuencia, seleccion (decision) e iteracion (repeticion).",
    "Ventajas: codigo mas legible, mas facil de mantener, con menos errores y facil de depurar.",
    "Favorece el trabajo en equipo, la reutilizacion y una estructura logica clara.",
    "Es el paradigma que usamos en clase.",
  ],
  questions: [
    {
      id: "programacion-estructurada-q1",
      type: "mc",
      prompt:
        "Como entrega las instrucciones la programacion estructurada?",
      options: [
        "De manera secuencial: una detras de otra, en orden.",
        "Saltando a cualquier linea del programa con goto.",
        "En objetos que se comunican entre si.",
        "Indicando solo el resultado deseado, sin el proceso.",
      ],
      answerIndex: 0,
      accepted: [],
      explanation:
        "La programacion estructurada da las instrucciones de forma secuencial, una despues de otra y en orden.",
      difficulty: "facil",
    },
    {
      id: "programacion-estructurada-q2",
      type: "mc",
      prompt:
        "Cuales son las tres estructuras basicas del teorema del programa estructurado (Bohm-Jacopini)?",
      options: [
        "Secuencia, seleccion e iteracion.",
        "Variables, constantes y funciones.",
        "Clases, objetos y metodos.",
        "Entrada, proceso y salida.",
      ],
      answerIndex: 0,
      accepted: [],
      explanation:
        "El teorema de Bohm-Jacopini demuestra que con secuencia, seleccion e iteracion alcanza para escribir cualquier algoritmo.",
      difficulty: "media",
    },
    {
      id: "programacion-estructurada-q3",
      type: "mc",
      prompt:
        "De que paradigma es una forma simplificada la programacion estructurada?",
      options: [
        "De la programacion imperativa.",
        "De la programacion declarativa.",
        "De la programacion logica.",
        "De la programacion reactiva.",
      ],
      answerIndex: 0,
      accepted: [],
      explanation:
        "Es una forma simplificada de la programacion imperativa: reemplaza los saltos goto por bucles y estructuras de control.",
      difficulty: "media",
    },
    {
      id: "programacion-estructurada-q4",
      type: "mc",
      prompt:
        "Cual de las siguientes NO es una ventaja de la programacion estructurada?",
      options: [
        "Permite usar saltos goto libremente por todo el codigo.",
        "Programas mas legibles y claros.",
        "Mas faciles de mantener y de depurar.",
        "Favorece el trabajo en equipo y la reutilizacion.",
      ],
      answerIndex: 0,
      accepted: [],
      explanation:
        "Justamente la programacion estructurada EVITA el goto; sus ventajas son legibilidad, mantenimiento, menos errores y facil depuracion.",
      difficulty: "media",
    },
    {
      id: "programacion-estructurada-q5",
      type: "mc",
      prompt:
        "Que estructura basica permite que un bloque de instrucciones se repita mientras se cumpla una condicion?",
      options: [
        "La iteracion (repeticion).",
        "La secuencia.",
        "La seleccion (decision).",
        "El salto goto.",
      ],
      answerIndex: 0,
      accepted: [],
      explanation:
        "La iteracion (bucles como while o repeat) repite un bloque mientras se cumple una condicion.",
      difficulty: "facil",
    },
    {
      id: "programacion-estructurada-q6",
      type: "vf",
      prompt:
        "La programacion estructurada evita el uso de saltos absolutos (goto) y los reemplaza por bucles y estructuras de control.",
      options: ["Verdadero", "Falso"],
      answerIndex: 0,
      accepted: [],
      explanation:
        "Verdadero: al evitar el goto se logra un flujo claro y se cometen menos errores.",
      difficulty: "facil",
    },
    {
      id: "programacion-estructurada-q7",
      type: "vf",
      prompt:
        "La programacion estructurada hace que los programas sean mas dificiles de leer y de mantener.",
      options: ["Verdadero", "Falso"],
      answerIndex: 1,
      accepted: [],
      explanation:
        "Falso: una de sus principales ventajas es que los programas son mas legibles, claros y faciles de mantener.",
      difficulty: "facil",
    },
    {
      id: "programacion-estructurada-q8",
      type: "fill",
      prompt:
        "La estructura basica en la que el programa elige un camino segun una condicion se llama ____.",
      options: [],
      answerIndex: -1,
      accepted: ["seleccion", "decision"],
      explanation:
        "La seleccion (o decision) elige que camino seguir segun una condicion, por ejemplo con un if/else.",
      difficulty: "media",
    },
    {
      id: "programacion-estructurada-q9",
      type: "fill",
      prompt:
        "Las instrucciones que se ejecutan una despues de otra en el orden escrito forman la estructura llamada ____.",
      options: [],
      answerIndex: -1,
      accepted: ["secuencia"],
      explanation:
        "La secuencia ejecuta las instrucciones una detras de otra, en el orden en que estan escritas.",
      difficulty: "facil",
    },
  ],
  flashcards: [
    {
      id: "programacion-estructurada-fc1",
      front: "Que es la programacion estructurada?",
      back: "El paradigma mas comun, donde las instrucciones se dan de forma secuencial (una detras de otra). Es una forma simplificada de la imperativa.",
    },
    {
      id: "programacion-estructurada-fc2",
      front: "Cuales son las tres estructuras basicas?",
      back: "Secuencia, seleccion (decision) e iteracion (repeticion), segun el teorema de Bohm-Jacopini.",
    },
    {
      id: "programacion-estructurada-fc3",
      front: "Por que evita el goto?",
      back: "Porque los saltos absolutos generaban codigo enredado (espagueti) y propenso a errores; se reemplazan por bucles y estructuras de control.",
    },
    {
      id: "programacion-estructurada-fc4",
      front: "Ventajas de la programacion estructurada",
      back: "Codigo mas legible y claro, mas facil de mantener, con menos errores, facil de depurar, y que favorece el trabajo en equipo y la reutilizacion.",
    },
    {
      id: "programacion-estructurada-fc5",
      front: "Que es la secuencia?",
      back: "La estructura en la que las instrucciones se ejecutan una despues de otra, en el orden en que estan escritas.",
    },
    {
      id: "programacion-estructurada-fc6",
      front: "Que es la iteracion?",
      back: "La estructura que repite un bloque de instrucciones mientras se cumpla una condicion (bucles como while o repeat).",
    },
    {
      id: "programacion-estructurada-fc7",
      front: "De que paradigma deriva?",
      back: "De la programacion imperativa: es una version simplificada que usa estructuras de control en vez de saltos goto.",
    },
  ],
  matchPairs: [
    {
      term: "Secuencia",
      definition: "Instrucciones ejecutadas una detras de otra, en orden.",
    },
    {
      term: "Seleccion",
      definition: "El programa elige un camino segun una condicion (if/else).",
    },
    {
      term: "Iteracion",
      definition: "Repite un bloque mientras se cumple una condicion (bucles).",
    },
    {
      term: "Goto",
      definition: "Salto absoluto que la estructurada evita por generar errores.",
    },
    {
      term: "Bohm-Jacopini",
      definition: "Teorema: todo algoritmo se logra con las tres estructuras basicas.",
    },
    {
      term: "Ventaja",
      definition: "Codigo legible, mantenible, con menos errores y facil de depurar.",
    },
  ],
  orderChallenge: null,
  terms: ["SECUENCIA", "SELECCION", "ITERACION", "IMPERATIVA", "BUCLE", "GOTO"],
};

export default topic;
