import type { Topic } from "../types";

const topic: Topic = {
  id: "mat-intro",
  number: 1,
  module: "mat-intro",
  title: "Introduccion a la matematica para la computacion",
  short:
    "Que es la matematica para la computacion, su importancia y la logica como base del razonamiento.",
  theory: `La **matematica para la computacion** es la rama de la matematica que reune las herramientas formales que necesita la informatica: **logica**, **conjuntos**, **relaciones y funciones**, **sistemas de numeracion**, **algebra** y **estructuras discretas**. No estudia magnitudes continuas (como el calculo tradicional), sino objetos **discretos** y bien definidos, que es justo lo que maneja una computadora.

## Por que la necesita un programador

Programar es, en el fondo, **razonar con precision**. Cada decision de un programa (un \`Si\`, un \`Mientras\`, una validacion) es una **proposicion logica** que vale Verdadero o Falso. Por eso la logica es la base:

- Las **condiciones** de un programa se escriben con operadores logicos (AND, OR, NOT).
- Los **circuitos** de la computadora funcionan con logica binaria (0 y 1, Falso y Verdadero).
- Demostrar que un algoritmo es **correcto** es, literalmente, hacer una demostracion matematica.

## Que es la logica

La **logica** es la ciencia que estudia el **razonamiento valido**: las reglas que permiten pasar de unas afirmaciones (premisas) a otra (conclusion) **sin error**. Distingue entre:

- **Razonamiento deductivo:** de lo general a lo particular; si las premisas son verdaderas, la conclusion es necesariamente verdadera. Es el que usa la matematica.
- **Razonamiento inductivo:** de casos particulares se generaliza; la conclusion es probable, no segura.

## Conceptos basicos que se definen formalmente

En matematica nada se usa sin definir. Los pilares son:

- **Definicion:** explicacion precisa y sin ambiguedad del significado de un termino.
- **Axioma (o postulado):** afirmacion que se acepta como verdadera sin demostracion; es el punto de partida.
- **Teorema:** afirmacion que se demuestra a partir de axiomas y otros teoremas.
- **Demostracion:** secuencia de pasos logicos que prueba que un teorema es verdadero.

## Lo discreto y el sistema binario

La computadora representa todo con **dos estados**: encendido/apagado, que escribimos **1 y 0**. Ese sistema **binario** (base 2) es un caso particular de las estructuras discretas que estudia esta materia. Por eso la logica de proposiciones (Verdadero/Falso) y el algebra binaria (1/0) son **dos caras de lo mismo**, y son el primer tema del programa.

> En resumen: la logica proposicional y la logica de predicados que veras a continuacion son el **lenguaje formal** con el que se razona en computacion.`,
  keyPoints: [
    "La matematica para la computacion reune logica, conjuntos, funciones, sistemas de numeracion y estructuras discretas.",
    "Estudia objetos discretos y bien definidos, que es lo que maneja una computadora.",
    "La logica es la base: estudia el razonamiento valido (pasar de premisas a conclusion sin error).",
    "El razonamiento deductivo va de lo general a lo particular y garantiza la conclusion; el inductivo solo la hace probable.",
    "Definicion, axioma, teorema y demostracion son los conceptos formales basicos.",
    "La computadora trabaja en binario (1 y 0), que se corresponde con Verdadero y Falso de la logica.",
  ],
  questions: [
    {
      id: "mat-intro-q1",
      type: "mc",
      prompt: "Que estudia principalmente la matematica para la computacion?",
      options: [
        "Solo el calculo de derivadas e integrales.",
        "Objetos discretos y herramientas formales como logica, conjuntos y funciones.",
        "Unicamente la geometria del plano y el espacio.",
        "La estadistica de grandes poblaciones.",
      ],
      answerIndex: 1,
      accepted: [],
      explanation:
        "Reune las herramientas formales de la informatica (logica, conjuntos, relaciones, funciones, numeracion, estructuras discretas), centradas en objetos discretos.",
      difficulty: "facil",
    },
    {
      id: "mat-intro-q2",
      type: "mc",
      prompt: "Que estudia la logica?",
      options: [
        "La forma de escribir programas en un lenguaje concreto.",
        "El razonamiento valido: como pasar de premisas a una conclusion sin error.",
        "La velocidad de los procesadores.",
        "El diseno grafico de interfaces.",
      ],
      answerIndex: 1,
      accepted: [],
      explanation:
        "La logica es la ciencia del razonamiento valido: las reglas que permiten deducir una conclusion correcta a partir de premisas.",
      difficulty: "facil",
    },
    {
      id: "mat-intro-q3",
      type: "mc",
      prompt:
        "Cual es la diferencia entre razonamiento deductivo e inductivo?",
      options: [
        "El deductivo generaliza casos; el inductivo va de lo general a lo particular.",
        "El deductivo va de lo general a lo particular y asegura la conclusion; el inductivo generaliza y la conclusion es solo probable.",
        "Son exactamente lo mismo.",
        "El deductivo solo sirve en informatica y el inductivo en biologia.",
      ],
      answerIndex: 1,
      accepted: [],
      explanation:
        "En el deductivo, si las premisas son verdaderas la conclusion es necesariamente verdadera; en el inductivo se generaliza desde casos y la conclusion es probable.",
      difficulty: "media",
    },
    {
      id: "mat-intro-q4",
      type: "mc",
      prompt:
        "Que es un axioma (o postulado)?",
      options: [
        "Una afirmacion que se acepta como verdadera sin demostracion.",
        "Una afirmacion que siempre hay que demostrar.",
        "Un error en un razonamiento.",
        "Un sinonimo de pregunta.",
      ],
      answerIndex: 0,
      accepted: [],
      explanation:
        "El axioma es el punto de partida: se acepta verdadero sin demostracion. A partir de axiomas se demuestran los teoremas.",
      difficulty: "media",
    },
    {
      id: "mat-intro-q5",
      type: "vf",
      prompt:
        "La logica binaria de la computadora (1 y 0) se corresponde con los valores Verdadero y Falso de la logica proposicional.",
      options: ["Verdadero", "Falso"],
      answerIndex: 0,
      accepted: [],
      explanation:
        "El 1 equivale a Verdadero y el 0 a Falso; por eso el algebra binaria y la logica proposicional son dos caras de lo mismo.",
      difficulty: "facil",
    },
    {
      id: "mat-intro-q6",
      type: "vf",
      prompt:
        "Las condiciones de un programa (Si, Mientras) son en el fondo proposiciones logicas que valen Verdadero o Falso.",
      options: ["Verdadero", "Falso"],
      answerIndex: 0,
      accepted: [],
      explanation:
        "Toda condicion de control se evalua como Verdadero o Falso, por eso la logica es la base de la programacion.",
      difficulty: "facil",
    },
    {
      id: "mat-intro-q7",
      type: "vf",
      prompt:
        "Un teorema es una afirmacion que se acepta sin necesidad de demostrarla.",
      options: ["Verdadero", "Falso"],
      answerIndex: 1,
      accepted: [],
      explanation:
        "Falso: el teorema se DEMUESTRA a partir de axiomas y otros teoremas. Lo que se acepta sin demostracion es el axioma.",
      difficulty: "media",
    },
    {
      id: "mat-intro-q8",
      type: "fill",
      prompt:
        "La secuencia de pasos logicos que prueba que un teorema es verdadero se llama ____.",
      options: [],
      answerIndex: -1,
      accepted: ["demostracion", "prueba"],
      explanation:
        "La demostracion (o prueba) es el razonamiento que establece la verdad de un teorema a partir de axiomas y teoremas previos.",
      difficulty: "media",
    },
    {
      id: "mat-intro-q9",
      type: "fill",
      prompt:
        "El sistema de numeracion en base 2, con solo dos digitos (0 y 1), se llama sistema ____.",
      options: [],
      answerIndex: -1,
      accepted: ["binario"],
      explanation:
        "El sistema binario (base 2) usa unicamente 0 y 1, los dos estados con los que trabaja la computadora.",
      difficulty: "dificil",
    },
  ],
  flashcards: [
    {
      id: "mat-intro-f1",
      front: "Que es la matematica para la computacion?",
      back: "La rama que reune las herramientas formales de la informatica: logica, conjuntos, relaciones, funciones, numeracion y estructuras discretas (objetos discretos).",
    },
    {
      id: "mat-intro-f2",
      front: "Que estudia la logica?",
      back: "El razonamiento valido: las reglas para pasar de premisas a una conclusion sin error.",
    },
    {
      id: "mat-intro-f3",
      front: "Razonamiento deductivo vs inductivo",
      back: "Deductivo: de lo general a lo particular, conclusion garantizada. Inductivo: generaliza desde casos, conclusion solo probable.",
    },
    {
      id: "mat-intro-f4",
      front: "Axioma",
      back: "Afirmacion que se acepta como verdadera sin demostracion; es el punto de partida.",
    },
    {
      id: "mat-intro-f5",
      front: "Teorema",
      back: "Afirmacion que se demuestra a partir de axiomas y otros teoremas.",
    },
    {
      id: "mat-intro-f6",
      front: "Por que el binario se relaciona con la logica?",
      back: "El 1 equivale a Verdadero y el 0 a Falso; la logica proposicional y el algebra binaria son dos caras de lo mismo.",
    },
  ],
  matchPairs: [
    {
      term: "Logica",
      definition: "Ciencia del razonamiento valido: pasar de premisas a conclusion sin error.",
    },
    {
      term: "Razonamiento deductivo",
      definition: "Va de lo general a lo particular; la conclusion es necesariamente verdadera.",
    },
    {
      term: "Axioma",
      definition: "Afirmacion aceptada como verdadera sin demostracion.",
    },
    {
      term: "Teorema",
      definition: "Afirmacion que se demuestra a partir de axiomas.",
    },
    {
      term: "Demostracion",
      definition: "Secuencia de pasos logicos que prueba un teorema.",
    },
    {
      term: "Sistema binario",
      definition: "Sistema de numeracion en base 2, con solo 0 y 1.",
    },
  ],
  orderChallenge: {
    id: "mat-intro-order",
    title: "Ordena la construccion del conocimiento matematico",
    steps: [
      "Definir los terminos con precision",
      "Aceptar los axiomas (verdades de partida)",
      "Enunciar un teorema (lo que se quiere probar)",
      "Construir la demostracion paso a paso",
      "Usar el teorema demostrado para probar otros",
    ],
  },
  terms: ["LOGICA", "AXIOMA", "TEOREMA", "BINARIO", "DEDUCTIVO", "CONJUNTO"],
};

export default topic;
