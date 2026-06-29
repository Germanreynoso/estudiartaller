import type { Topic } from "../types";

const topic: Topic = {
  id: "mat-proposiciones",
  number: 2,
  module: "mat-proposicional",
  title: "Logica proposicional: proposiciones",
  short:
    "Que es una proposicion, su valor de verdad, y la diferencia entre simples y compuestas.",
  theory: `Una **proposicion** es un **enunciado** del que se puede afirmar, sin ambiguedad, que es **Verdadero (V)** o **Falso (F)**, pero no ambas cosas a la vez. Ese V o F es su **valor de verdad**.

Para que un enunciado sea proposicion tiene que **declarar algo** que pueda evaluarse como verdadero o falso.

## Que es y que NO es una proposicion

Son proposiciones (declaran algo evaluable):

- "Buenos Aires es la capital de Argentina." (V)
- "5 es un numero par." (F)
- "2 + 2 = 4." (V)

**No** son proposiciones (no se les puede asignar V o F):

- "Que hora es?" (pregunta)
- "Cerra la puerta." (orden)
- "Ojala llueva." (deseo)
- "x + 1 = 3." (depende de x: es una **funcion proposicional**, se vera en predicados)

## Notacion

Las proposiciones se nombran con **letras minusculas**: p, q, r, s... Se llaman **variables proposicionales**. Por ejemplo:

    p: "Esta lloviendo."
    q: "Hace frio."

## Proposiciones simples y compuestas

- **Proposicion simple (o atomica):** expresa una sola idea, no se puede descomponer en otras proposiciones. Ej.: p: "Hoy es lunes."
- **Proposicion compuesta (o molecular):** se forma uniendo dos o mas proposiciones simples mediante **conectivos logicos** (y, o, no, si...entonces, si y solo si). Ej.: "Hoy es lunes **y** hace frio."

| Enunciado | Tipo |
|---|---|
| "7 es primo." | simple |
| "Llueve y hace frio." | compuesta |
| "No es verdad que 3 sea par." | compuesta (lleva el "no") |
| "Si estudio, apruebo." | compuesta |

## Valor de verdad

El valor de verdad de una proposicion **simple** se conoce por su contenido (saber si es cierta o no). El de una proposicion **compuesta** se calcula a partir de los valores de las simples que la forman y de los conectivos que las unen; para eso se usan las **tablas de verdad** (tema siguiente).

> Idea clave: la logica proposicional NO se ocupa de *por que* p es verdadera, sino de **como se combinan** los valores de verdad cuando armamos enunciados mas complejos.`,
  keyPoints: [
    "Una proposicion es un enunciado que es Verdadero o Falso, pero no ambos.",
    "Las preguntas, ordenes y deseos NO son proposiciones.",
    "El valor de verdad es la V o F que le corresponde a la proposicion.",
    "Las proposiciones se nombran con letras minusculas: p, q, r (variables proposicionales).",
    "Simple (atomica): una sola idea. Compuesta (molecular): varias simples unidas por conectivos.",
    "El 'no' tambien forma una proposicion compuesta (es un conectivo).",
  ],
  questions: [
    {
      id: "mat-proposiciones-q1",
      type: "mc",
      prompt: "Que es una proposicion en logica?",
      options: [
        "Cualquier oracion del idioma.",
        "Un enunciado que es Verdadero o Falso, pero no ambos.",
        "Una pregunta sobre un tema.",
        "Una orden que se le da a la computadora.",
      ],
      answerIndex: 1,
      accepted: [],
      explanation:
        "Una proposicion es un enunciado al que se le puede asignar sin ambiguedad un valor de verdad: V o F.",
      difficulty: "facil",
    },
    {
      id: "mat-proposiciones-q2",
      type: "mc",
      prompt: "Cual de los siguientes enunciados ES una proposicion?",
      options: [
        "Que hora es?",
        "Cerra la ventana, por favor.",
        "El numero 8 es par.",
        "Ojala apruebe el examen.",
      ],
      answerIndex: 2,
      accepted: [],
      explanation:
        "'El numero 8 es par' es Verdadero, se le puede asignar valor de verdad. Las preguntas, ordenes y deseos no son proposiciones.",
      difficulty: "facil",
    },
    {
      id: "mat-proposiciones-q3",
      type: "mc",
      prompt:
        "Cual de estos enunciados NO es una proposicion?",
      options: [
        "Roma es la capital de Italia.",
        "3 es mayor que 10.",
        "Pasame el lapiz.",
        "El agua hierve a 100 grados a nivel del mar.",
      ],
      answerIndex: 2,
      accepted: [],
      explanation:
        "'Pasame el lapiz' es una orden: no se le puede asignar Verdadero ni Falso, por lo tanto no es proposicion.",
      difficulty: "media",
    },
    {
      id: "mat-proposiciones-q4",
      type: "mc",
      prompt:
        "Que es una proposicion compuesta?",
      options: [
        "Una proposicion que no tiene valor de verdad.",
        "Una proposicion formada por varias simples unidas con conectivos logicos.",
        "Una proposicion que siempre es verdadera.",
        "Una pregunta larga.",
      ],
      answerIndex: 1,
      accepted: [],
      explanation:
        "La compuesta (molecular) une dos o mas proposiciones simples mediante conectivos (y, o, no, si...entonces, si y solo si).",
      difficulty: "media",
    },
    {
      id: "mat-proposiciones-q5",
      type: "vf",
      prompt:
        "El enunciado 'Llueve y hace frio' es una proposicion compuesta.",
      options: ["Verdadero", "Falso"],
      answerIndex: 0,
      accepted: [],
      explanation:
        "Une dos proposiciones simples ('llueve', 'hace frio') con el conectivo 'y', por lo tanto es compuesta.",
      difficulty: "facil",
    },
    {
      id: "mat-proposiciones-q6",
      type: "vf",
      prompt:
        "Una proposicion puede ser Verdadera y Falsa al mismo tiempo.",
      options: ["Verdadero", "Falso"],
      answerIndex: 1,
      accepted: [],
      explanation:
        "Falso: por definicion una proposicion toma un unico valor de verdad, V o F, nunca ambos a la vez.",
      difficulty: "facil",
    },
    {
      id: "mat-proposiciones-q7",
      type: "vf",
      prompt:
        "'x + 1 = 5' es una proposicion simple con valor de verdad definido.",
      options: ["Verdadero", "Falso"],
      answerIndex: 1,
      accepted: [],
      explanation:
        "Falso: su verdad depende del valor de x, asi que no tiene un valor de verdad fijo. Es una funcion proposicional (tema de predicados).",
      difficulty: "dificil",
    },
    {
      id: "mat-proposiciones-q8",
      type: "fill",
      prompt:
        "La V o F que le corresponde a una proposicion se llama su ____ de verdad.",
      options: [],
      answerIndex: -1,
      accepted: ["valor"],
      explanation:
        "El valor de verdad es la V (Verdadero) o F (Falso) que toma la proposicion.",
      difficulty: "media",
    },
    {
      id: "mat-proposiciones-q9",
      type: "fill",
      prompt:
        "Una proposicion que expresa una sola idea y no se puede descomponer se llama proposicion ____.",
      options: [],
      answerIndex: -1,
      accepted: ["simple", "atomica"],
      explanation:
        "La proposicion simple (o atomica) expresa una sola idea; no contiene conectivos que la unan a otra.",
      difficulty: "media",
    },
  ],
  flashcards: [
    {
      id: "mat-proposiciones-f1",
      front: "Que es una proposicion?",
      back: "Un enunciado que es Verdadero o Falso, pero no ambos a la vez.",
    },
    {
      id: "mat-proposiciones-f2",
      front: "Que enunciados NO son proposiciones?",
      back: "Las preguntas, las ordenes y los deseos: no se les puede asignar V o F.",
    },
    {
      id: "mat-proposiciones-f3",
      front: "Que es el valor de verdad?",
      back: "La V (Verdadero) o F (Falso) que le corresponde a una proposicion.",
    },
    {
      id: "mat-proposiciones-f4",
      front: "Como se nombran las proposiciones?",
      back: "Con letras minusculas: p, q, r, s... (variables proposicionales).",
    },
    {
      id: "mat-proposiciones-f5",
      front: "Proposicion simple vs compuesta",
      back: "Simple: una sola idea, no se descompone. Compuesta: varias simples unidas por conectivos (y, o, no, si...entonces).",
    },
    {
      id: "mat-proposiciones-f6",
      front: "'No es verdad que 3 sea par': simple o compuesta?",
      back: "Compuesta: lleva el conectivo 'no' (negacion) aplicado a una proposicion simple.",
    },
  ],
  matchPairs: [
    {
      term: "Proposicion",
      definition: "Enunciado que es Verdadero o Falso, pero no ambos.",
    },
    {
      term: "Valor de verdad",
      definition: "La V o F que le corresponde a la proposicion.",
    },
    {
      term: "Proposicion simple",
      definition: "Expresa una sola idea; no se descompone en otras.",
    },
    {
      term: "Proposicion compuesta",
      definition: "Une varias simples mediante conectivos logicos.",
    },
    {
      term: "Variable proposicional",
      definition: "Letra (p, q, r) con la que se nombra una proposicion.",
    },
    {
      term: "No es proposicion",
      definition: "Las preguntas, ordenes y deseos.",
    },
  ],
  orderChallenge: {
    id: "mat-proposiciones-order",
    title: "Pasos para clasificar un enunciado",
    steps: [
      "Leer el enunciado completo",
      "Verificar si afirma o declara algo",
      "Comprobar si se le puede asignar Verdadero o Falso",
      "Si se puede, es proposicion (si no, no lo es)",
      "Clasificarla como simple o compuesta",
    ],
  },
  terms: ["PROPOSICION", "SIMPLE", "COMPUESTA", "VERDADERO", "FALSO", "ENUNCIADO"],
};

export default topic;
