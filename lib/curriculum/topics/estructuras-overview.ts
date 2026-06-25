import type { Topic } from "../types";

const topic: Topic = {
  id: "estructuras-overview",
  number: 18,
  module: "estructuras",
  title: "Estructuras de Programacion",
  short:
    "Las tres estructuras de control: secuencial, selectiva (decision) e iterativa (repeticion).",
  theory: `Las **estructuras de programacion** (o **estructuras de control**) son las tres formas basicas con las que se controla el flujo de un programa en la **programacion estructurada**. Son **tres**: la **secuencial**, la **selectiva** (tambien llamada condicional o de decision) y la **iterativa** (tambien llamada repetitiva o ciclica). Con solo estas tres se puede construir **cualquier algoritmo**.

Este tema es el **panorama general**: nombra y presenta brevemente cada estructura. En los temas que siguen vamos a profundizar en cada una por separado.

## Las tres estructuras de control

    +------------------------------------------------+
    |          ESTRUCTURAS DE PROGRAMACION           |
    +------------------------------------------------+
    |  1) SECUENCIAL  -> una instruccion tras otra   |
    |  2) SELECTIVA   -> elige segun una condicion   |
    |  3) ITERATIVA   -> repite mientras se cumpla    |
    +------------------------------------------------+

## 1) Estructura secuencial

Es la mas simple. Las instrucciones se ejecutan **una tras otra**, en el **orden** en que estan escritas, de arriba hacia abajo. No hay decisiones ni repeticiones: el flujo va derecho.

    inicio
      instruccion 1
      instruccion 2
      instruccion 3
    fin

## 2) Estructura selectiva (condicional / de decision)

Permite **elegir** entre dos o mas caminos segun el resultado de una **condicion** (verdadero o falso). Por eso tambien se la llama **condicional** o **de decision**. Puede ser:

- **Simple**: si la condicion se cumple, ejecuta un bloque; si no, no hace nada ('si...entonces').
- **Doble**: elige entre dos caminos, uno si la condicion es verdadera y otro si es falsa ('si...entonces...sino').
- **Multiple**: elige entre varios caminos posibles segun el valor de una expresion ('segun el caso').

    +-------------------+
    |    condicion?     |
    +---------+---------+
       SI      |     NO
       v       |      v
    bloque A   |   bloque B

## 3) Estructura iterativa (repetitiva / ciclica)

Permite **repetir** un bloque de instrucciones **mientras se cumpla una condicion**. Por eso tambien se la llama **repetitiva** o **ciclica**, y a la repeticion se la conoce como **bucle** o **ciclo**. En pseudocodigo aparece con palabras como **mientras**, **repetir** y **para**.

    mientras (condicion)
        bloque de instrucciones
        actualizar control   (ej. 'contador = contador + 1')
    fin mientras

## Para el parcial

- Son **tres** estructuras: **secuencial**, **selectiva** e **iterativa**.
- La **secuencial** ejecuta en orden; la **selectiva** decide segun una condicion; la **iterativa** repite mientras una condicion se cumpla.
- La selectiva puede ser **simple, doble o multiple**.
- Otros nombres: selectiva = condicional / decision; iterativa = repetitiva / ciclica.`,
  keyPoints: [
    "Existen tres estructuras de programacion (o de control): secuencial, selectiva e iterativa.",
    "Secuencial: las instrucciones se ejecutan una tras otra, en el orden escrito.",
    "Selectiva (condicional o de decision): elige un camino segun una condicion; puede ser simple, doble o multiple.",
    "Iterativa (repetitiva o ciclica): repite un bloque mientras se cumpla una condicion (mientras, repetir, para).",
    "Con estas tres estructuras se puede construir cualquier algoritmo (base de la programacion estructurada).",
  ],
  questions: [
    {
      id: "estructuras-overview-q1",
      type: "mc",
      prompt:
        "Cuales son las tres estructuras de programacion (estructuras de control)?",
      options: [
        "Secuencial, selectiva e iterativa.",
        "Variables, constantes y funciones.",
        "Entrada, proceso y salida.",
        "Clases, objetos y metodos.",
      ],
      answerIndex: 0,
      accepted: [],
      explanation:
        "Las tres estructuras de control son la secuencial, la selectiva (condicional) y la iterativa (repetitiva).",
      difficulty: "facil",
    },
    {
      id: "estructuras-overview-q2",
      type: "mc",
      prompt:
        "En que estructura las instrucciones se ejecutan una tras otra, en el orden en que estan escritas?",
      options: [
        "En la estructura secuencial.",
        "En la estructura selectiva.",
        "En la estructura iterativa.",
        "En la estructura multiple.",
      ],
      answerIndex: 0,
      accepted: [],
      explanation:
        "La estructura secuencial ejecuta las instrucciones de arriba hacia abajo, en orden, sin decisiones ni repeticiones.",
      difficulty: "facil",
    },
    {
      id: "estructuras-overview-q3",
      type: "mc",
      prompt:
        "Que otros nombres recibe la estructura selectiva?",
      options: [
        "Condicional o de decision.",
        "Repetitiva o ciclica.",
        "Secuencial o lineal.",
        "Recursiva o anidada.",
      ],
      answerIndex: 0,
      accepted: [],
      explanation:
        "La estructura selectiva tambien se llama condicional o de decision porque elige un camino segun una condicion.",
      difficulty: "media",
    },
    {
      id: "estructuras-overview-q4",
      type: "mc",
      prompt:
        "Que tipos de estructura selectiva existen segun cuantos caminos ofrece?",
      options: [
        "Simple, doble y multiple.",
        "Mientras, repetir y para.",
        "Entrada, proceso y salida.",
        "Local, global y estatica.",
      ],
      answerIndex: 0,
      accepted: [],
      explanation:
        "La seleccion puede ser simple (un camino), doble (dos caminos) o multiple (varios caminos segun un valor).",
      difficulty: "media",
    },
    {
      id: "estructuras-overview-q5",
      type: "mc",
      prompt:
        "Que hace la estructura iterativa?",
      options: [
        "Repite un bloque de instrucciones mientras se cumpla una condicion.",
        "Ejecuta las instrucciones una sola vez, en orden.",
        "Elige entre dos caminos segun una condicion.",
        "Termina inmediatamente el programa.",
      ],
      answerIndex: 0,
      accepted: [],
      explanation:
        "La estructura iterativa (repetitiva o ciclica) repite un bloque mientras la condicion se cumpla; cada vuelta es una iteracion.",
      difficulty: "facil",
    },
    {
      id: "estructuras-overview-q6",
      type: "vf",
      prompt:
        "La estructura iterativa tambien se conoce como repetitiva o ciclica.",
      options: ["Verdadero", "Falso"],
      answerIndex: 0,
      accepted: [],
      explanation:
        "Verdadero: iterativa, repetitiva y ciclica son tres nombres para la misma estructura, la que repite un bloque (bucle o ciclo).",
      difficulty: "facil",
    },
    {
      id: "estructuras-overview-q7",
      type: "vf",
      prompt:
        "En la estructura secuencial el programa elige entre varios caminos segun una condicion.",
      options: ["Verdadero", "Falso"],
      answerIndex: 1,
      accepted: [],
      explanation:
        "Falso: elegir un camino segun una condicion es propio de la estructura selectiva; la secuencial solo ejecuta en orden.",
      difficulty: "media",
    },
    {
      id: "estructuras-overview-q8",
      type: "fill",
      prompt:
        "La estructura que repite un bloque mientras se cumple una condicion se llama estructura ____.",
      options: [],
      answerIndex: -1,
      accepted: ["iterativa", "repetitiva", "ciclica"],
      explanation:
        "La estructura iterativa (tambien llamada repetitiva o ciclica) repite un bloque mientras la condicion sea verdadera.",
      difficulty: "media",
    },
    {
      id: "estructuras-overview-q9",
      type: "fill",
      prompt:
        "La estructura que elige un camino segun una condicion se llama estructura selectiva, condicional o de ____.",
      options: [],
      answerIndex: -1,
      accepted: ["decision"],
      explanation:
        "La estructura selectiva tambien se conoce como condicional o de decision, porque decide que camino seguir segun una condicion.",
      difficulty: "facil",
    },
  ],
  flashcards: [
    {
      id: "estructuras-overview-fc1",
      front: "Cuales son las tres estructuras de programacion?",
      back: "La secuencial, la selectiva (condicional/decision) y la iterativa (repetitiva/ciclica).",
    },
    {
      id: "estructuras-overview-fc2",
      front: "Que es la estructura secuencial?",
      back: "Aquella en la que las instrucciones se ejecutan una tras otra, en el orden en que estan escritas.",
    },
    {
      id: "estructuras-overview-fc3",
      front: "Que es la estructura selectiva?",
      back: "La que elige entre dos o mas caminos segun una condicion. Puede ser simple, doble o multiple. Tambien se llama condicional o de decision.",
    },
    {
      id: "estructuras-overview-fc4",
      front: "Que es la estructura iterativa?",
      back: "La que repite un bloque de instrucciones mientras se cumpla una condicion (bucle o ciclo). Tambien se llama repetitiva o ciclica.",
    },
    {
      id: "estructuras-overview-fc5",
      front: "Que tipos de seleccion existen?",
      back: "Simple (un camino), doble (dos caminos: verdadero/falso) y multiple (varios caminos segun un valor).",
    },
    {
      id: "estructuras-overview-fc6",
      front: "Para que sirven las tres estructuras de control?",
      back: "Con solo esas tres (secuencial, selectiva e iterativa) se puede construir cualquier algoritmo: es la base de la programacion estructurada.",
    },
  ],
  matchPairs: [
    {
      term: "Secuencial",
      definition: "Instrucciones ejecutadas una tras otra, en orden.",
    },
    {
      term: "Selectiva",
      definition: "Elige un camino segun una condicion (simple, doble o multiple).",
    },
    {
      term: "Iterativa",
      definition: "Repite un bloque mientras se cumple una condicion.",
    },
    {
      term: "Condicional",
      definition: "Otro nombre de la estructura selectiva o de decision.",
    },
    {
      term: "Ciclica",
      definition: "Otro nombre de la estructura iterativa o repetitiva (bucle).",
    },
    {
      term: "Multiple",
      definition: "Seleccion que elige entre varios caminos segun un valor.",
    },
  ],
  orderChallenge: null,
  terms: ["SECUENCIAL", "SELECTIVA", "ITERATIVA", "CONDICIONAL", "CICLICA", "BUCLE"],
};

export default topic;
