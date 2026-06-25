import type { Topic } from "../types";

const topic: Topic = {
  id: "lenguajes-programacion",
  number: 16,
  module: "lenguajes",
  title: "Lenguajes de Programacion",
  short:
    "Reglas, simbolos y palabras para escribir programas que la computadora ejecuta.",
  theory: `Un **lenguaje de programacion** es un conjunto de **reglas, simbolos y palabras**, con su **sintaxis** (la forma correcta de escribir) y su **semantica** (el significado de lo que se escribe), que permite escribir **instrucciones** (un **programa**) que la computadora puede **interpretar y ejecutar**. Dicho de otra forma, es el **medio de comunicacion entre el programador y la maquina**: la herramienta con la que le decimos a la computadora QUE tiene que hacer y COMO hacerlo.

Las personas hablamos en lenguajes naturales (espanol, ingles), pero la computadora solo entiende **lenguaje maquina** (ceros y unos). El lenguaje de programacion es el punto intermedio: es comprensible para nosotros y, mediante un **traductor**, se convierte en algo que el hardware puede ejecutar.

## Sintaxis y semantica

Todo lenguaje de programacion se apoya en dos pilares:

- **Sintaxis**: las **reglas de escritura**. Define como se combinan las palabras y los simbolos. Si rompemos la sintaxis (por ejemplo, olvidamos un punto y coma o un parentesis), el programa no se puede traducir y aparece un **error de sintaxis**.
- **Semantica**: el **significado** de las instrucciones. Una linea puede estar bien escrita (sintaxis correcta) pero hacer algo distinto de lo que queriamos: ahi hay un problema de semantica o **error de logica**.

## Funciones de un lenguaje de programacion

Un lenguaje de programacion sirve para:

- **Expresar algoritmos de forma precisa**: traducir la solucion de un problema (los pasos) a instrucciones exactas, sin ambiguedades.
- **Comunicarse con el hardware**: dar ordenes a la computadora para que realice operaciones y maneje sus recursos.
- **Crear software y aplicaciones**: construir programas utiles, desde una calculadora hasta una pagina web, un videojuego o un sistema de gestion.

## Necesitan un TRADUCTOR

La computadora no ejecuta directamente el codigo que escribimos: primero hay que pasarlo a **lenguaje maquina**. De eso se encargan los **traductores**, que son de dos tipos:

- **Compilador**: traduce **todo** el programa de una sola vez y genera un archivo ejecutable. Despues ese ejecutable corre sin volver a traducir. Ejemplos de lenguajes compilados: C, C++.
- **Interprete**: traduce y ejecuta el programa **linea por linea**, en el momento. No genera un ejecutable aparte. Ejemplos de lenguajes interpretados: Python, JavaScript.

El recorrido general es:

    CODIGO FUENTE        TRADUCTOR            LENGUAJE MAQUINA
    (lo que escribe  ->  (compilador o    ->  (ceros y unos que
     el programador)      interprete)          ejecuta el hardware)

## Ejemplos de lenguajes de programacion

Algunos de los lenguajes mas conocidos son:

- **Python**: simple y muy usado para aprender, datos e inteligencia artificial.
- **Java**: muy usado en empresas y aplicaciones Android.
- **C**: lenguaje clasico, cercano al hardware.
- **C++**: extiende C, usado en videojuegos y sistemas de alto rendimiento.
- **JavaScript**: el lenguaje de la web (paginas interactivas).
- **PHP**: usado en el desarrollo web del lado del servidor.
- **C#**: de Microsoft, usado en aplicaciones y videojuegos (Unity).
- **Ruby**: usado en desarrollo web (Ruby on Rails).

## Idea para el parcial

Un lenguaje de programacion es el **idioma** que usamos para hablarle a la computadora: tiene reglas de escritura (sintaxis) y significado (semantica), sirve para expresar algoritmos, comunicarse con el hardware y crear software, y siempre necesita un **traductor** (compilador o interprete) para convertirse en lenguaje maquina.`,
  keyPoints: [
    "Un lenguaje de programacion es un conjunto de reglas, simbolos y palabras (con sintaxis y semantica) para escribir programas que la computadora interpreta y ejecuta.",
    "Es el medio de comunicacion entre el programador y la maquina.",
    "Sus funciones: expresar algoritmos de forma precisa, comunicarse con el hardware y crear software y aplicaciones.",
    "Siempre necesita un traductor para pasar a lenguaje maquina: compilador (todo de una vez) o interprete (linea por linea).",
    "La sintaxis son las reglas de escritura; la semantica es el significado de las instrucciones.",
    "Ejemplos: Python, Java, C, C++, JavaScript, PHP, C# y Ruby.",
  ],
  questions: [
    {
      id: "lenguajes-programacion-q1",
      type: "mc",
      prompt: "Que es un lenguaje de programacion?",
      options: [
        "Un conjunto de reglas, simbolos y palabras que permite escribir instrucciones que la computadora puede interpretar y ejecutar.",
        "Un programa ya compilado y listo para usarse sin escribir nada.",
        "Una pieza fisica del hardware de la computadora.",
        "El idioma natural que hablan las personas, como el espanol o el ingles.",
      ],
      answerIndex: 0,
      accepted: [],
      explanation:
        "Es un conjunto de reglas, simbolos y palabras (con su sintaxis y semantica) para escribir un programa que la maquina interpreta y ejecuta; es el medio de comunicacion entre programador y maquina.",
      difficulty: "facil",
    },
    {
      id: "lenguajes-programacion-q2",
      type: "mc",
      prompt:
        "Cual de estas NO es una funcion de un lenguaje de programacion?",
      options: [
        "Fabricar fisicamente los componentes del hardware.",
        "Permitir expresar algoritmos de forma precisa.",
        "Comunicarse con el hardware.",
        "Crear software y aplicaciones.",
      ],
      answerIndex: 0,
      accepted: [],
      explanation:
        "Las funciones del lenguaje son expresar algoritmos con precision, comunicarse con el hardware y crear software; no fabrica componentes fisicos.",
      difficulty: "media",
    },
    {
      id: "lenguajes-programacion-q3",
      type: "mc",
      prompt:
        "Por que el codigo que escribimos necesita un traductor antes de ejecutarse?",
      options: [
        "Porque la computadora solo entiende lenguaje maquina (ceros y unos), no nuestro codigo directamente.",
        "Porque el codigo siempre tiene errores de sintaxis que el traductor corrige solo.",
        "Porque sin traductor el codigo se borra de la memoria.",
        "Porque el traductor es el que inventa el algoritmo por nosotros.",
      ],
      answerIndex: 0,
      accepted: [],
      explanation:
        "El hardware solo ejecuta lenguaje maquina; el traductor (compilador o interprete) convierte el codigo fuente a ese lenguaje.",
      difficulty: "media",
    },
    {
      id: "lenguajes-programacion-q4",
      type: "mc",
      prompt:
        "Cual es la diferencia principal entre un compilador y un interprete?",
      options: [
        "El compilador traduce todo el programa de una vez; el interprete lo traduce y ejecuta linea por linea.",
        "El compilador es un lenguaje y el interprete es un programa.",
        "El interprete traduce todo de una vez y el compilador lo hace linea por linea.",
        "No hay diferencia: son dos nombres para lo mismo.",
      ],
      answerIndex: 0,
      accepted: [],
      explanation:
        "El compilador traduce el programa completo y genera un ejecutable; el interprete traduce y ejecuta instruccion por instruccion en el momento.",
      difficulty: "media",
    },
    {
      id: "lenguajes-programacion-q5",
      type: "vf",
      prompt:
        "Un lenguaje de programacion es el medio de comunicacion entre el programador y la maquina.",
      options: ["Verdadero", "Falso"],
      answerIndex: 0,
      accepted: [],
      explanation:
        "Verdadero: es la herramienta con la que el programador le da instrucciones a la computadora.",
      difficulty: "facil",
    },
    {
      id: "lenguajes-programacion-q6",
      type: "vf",
      prompt:
        "La computadora ejecuta directamente el codigo fuente que escribimos, sin necesidad de ningun traductor.",
      options: ["Verdadero", "Falso"],
      answerIndex: 1,
      accepted: [],
      explanation:
        "Falso: el codigo fuente debe pasarse a lenguaje maquina mediante un traductor (compilador o interprete) antes de ejecutarse.",
      difficulty: "facil",
    },
    {
      id: "lenguajes-programacion-q7",
      type: "vf",
      prompt:
        "Python, Java, C, C++, JavaScript, PHP, C# y Ruby son ejemplos de lenguajes de programacion.",
      options: ["Verdadero", "Falso"],
      answerIndex: 0,
      accepted: [],
      explanation:
        "Verdadero: todos son lenguajes de programacion ampliamente usados.",
      difficulty: "facil",
    },
    {
      id: "lenguajes-programacion-q8",
      type: "fill",
      prompt:
        "El programa que traduce todo el codigo de una sola vez y genera un ejecutable se llama ____.",
      options: [],
      answerIndex: -1,
      accepted: ["compilador"],
      explanation:
        "El compilador traduce el programa completo a lenguaje maquina de una sola vez; el interprete, en cambio, lo hace linea por linea.",
      difficulty: "media",
    },
    {
      id: "lenguajes-programacion-q9",
      type: "fill",
      prompt:
        "Las reglas de escritura de un lenguaje de programacion (como combinar palabras y simbolos) se llaman ____.",
      options: [],
      answerIndex: -1,
      accepted: ["sintaxis"],
      explanation:
        "La sintaxis son las reglas de escritura; la semantica es el significado de las instrucciones.",
      difficulty: "media",
    },
  ],
  flashcards: [
    {
      id: "lenguajes-programacion-fc1",
      front: "Que es un lenguaje de programacion?",
      back: "Un conjunto de reglas, simbolos y palabras (con sintaxis y semantica) que permite escribir instrucciones (un programa) que la computadora interpreta y ejecuta. Es el medio de comunicacion entre el programador y la maquina.",
    },
    {
      id: "lenguajes-programacion-fc2",
      front: "Cuales son las funciones de un lenguaje de programacion?",
      back: "Expresar algoritmos de forma precisa, comunicarse con el hardware y crear software y aplicaciones.",
    },
    {
      id: "lenguajes-programacion-fc3",
      front: "Por que se necesita un traductor?",
      back: "Porque la computadora solo entiende lenguaje maquina (ceros y unos). El traductor convierte el codigo fuente a ese lenguaje. Hay dos tipos: compilador e interprete.",
    },
    {
      id: "lenguajes-programacion-fc4",
      front: "Compilador vs interprete",
      back: "El compilador traduce todo el programa de una vez y genera un ejecutable. El interprete traduce y ejecuta linea por linea en el momento.",
    },
    {
      id: "lenguajes-programacion-fc5",
      front: "Sintaxis vs semantica",
      back: "Sintaxis: las reglas de escritura (como se combinan palabras y simbolos). Semantica: el significado de las instrucciones.",
    },
    {
      id: "lenguajes-programacion-fc6",
      front: "Ejemplos de lenguajes de programacion",
      back: "Python, Java, C, C++, JavaScript, PHP, C# y Ruby.",
    },
  ],
  matchPairs: [
    {
      term: "Lenguaje de programacion",
      definition:
        "Reglas, simbolos y palabras para escribir programas que la computadora ejecuta.",
    },
    {
      term: "Sintaxis",
      definition: "Las reglas de escritura del lenguaje.",
    },
    {
      term: "Semantica",
      definition: "El significado de las instrucciones.",
    },
    {
      term: "Compilador",
      definition: "Traduce todo el programa de una vez y genera un ejecutable.",
    },
    {
      term: "Interprete",
      definition: "Traduce y ejecuta el programa linea por linea.",
    },
    {
      term: "Lenguaje maquina",
      definition: "Ceros y unos que el hardware puede ejecutar directamente.",
    },
  ],
  orderChallenge: null,
  terms: ["LENGUAJE", "SINTAXIS", "SEMANTICA", "COMPILADOR", "INTERPRETE", "PYTHON"],
};

export default topic;
