import type { Topic } from "../types";

const topic: Topic = {
  id: "paradigmas",
  number: 6,
  module: "paradigmas",
  title: "Paradigmas de Programacion",
  short:
    "Estilos sistematicos para resolver problemas de software: imperativos vs declarativos.",
  theory: `Un **paradigma** (o **tecnica**) de programacion es un metodo o estilo sistematico para realizar tareas y resolver problemas de software. No es un lenguaje ni una herramienta: es una **forma de pensar y organizar** la solucion. Por eso un paradigma se puede aplicar en **todos los niveles del diseno de codigo**, desde una funcion pequena hasta la **arquitectura de software** completa de un sistema.

Elegir un paradigma define como estructuramos el codigo, como se comunican sus partes y como se mantiene en el tiempo. La **arquitectura de software** suele apoyarse en uno o varios paradigmas para lograr codigo ordenado, legible y escalable.

## Las dos grandes categorias

Todos los paradigmas se agrupan en dos grandes familias segun **que le decimos a la maquina**:

- **Imperativa**: el programador indica de forma precisa **QUE procesos y tareas** debe hacer la maquina, es decir, el **COMO** llegar al resultado. Se describe paso a paso el procedimiento.
- **Declarativa**: el programador indica el **RESULTADO deseado** sin especificar el proceso, es decir, el **QUE** se quiere obtener (no el como). La maquina decide el procedimiento.

Una forma rapida de recordarlo:

    IMPERATIVA  ->  describimos el COMO (los pasos)
    DECLARATIVA ->  describimos el QUE  (el resultado)

## Lenguajes de cada categoria

- **Lenguajes imperativos**: Fortran, Pascal, C, C++, Java, Python, Ruby.
- **Lenguajes declarativos**: Prolog, LISP, Haskell, Scala, SQL, Kotlin.

Hay lenguajes **multiparadigma**, que permiten trabajar con varios estilos a la vez. Ejemplos: **Python** y **JavaScript** (por eso Python aparece tambien en la lista imperativa).

## Paradigmas mas usados

- **Estructurada (secuencial)**: el codigo se ejecuta de forma ordenada, paso a paso. **Es el paradigma que usamos en clase.**
- **Orientada a objetos (POO)**: el programa se organiza en **objetos** que se comunican entre si.
- **Reactiva**: el programa **escucha flujos de datos** y reacciona a los cambios. Ejemplo: **YouTube** y **Netflix** ajustan la calidad del video segun la velocidad de tu conexion.
- **Por procesos**: organiza el trabajo en procesos que se ejecutan y coordinan.
- **Funcional**: la solucion se arma combinando **funciones**.
- **Logica**: se basa en **afirmaciones y reglas** de la logica matematica para deducir resultados.

## Importante para el parcial

En esta materia, y en las practicas de clase, usamos la **programacion ESTRUCTURADA** (secuencial). Es el punto de partida para entender despues los demas paradigmas.

    +----------------------------+
    |   PARADIGMAS               |
    +-------------+--------------+
    | IMPERATIVA  | DECLARATIVA  |
    |   (el COMO) |   (el QUE)   |
    +-------------+--------------+
    | Estructurada (clase)       |
    | Orientada a objetos        |
    | Por procesos               |
    +----------------------------+
    | Funcional                  |
    | Logica                     |
    +----------------------------+`,
  keyPoints: [
    "Un paradigma es un metodo o estilo sistematico para resolver problemas de software, aplicable en todos los niveles del diseno.",
    "Imperativa = indicamos el COMO (los pasos); Declarativa = indicamos el QUE (el resultado deseado).",
    "Imperativos: Fortran, Pascal, C, C++, Java, Python, Ruby. Declarativos: Prolog, LISP, Haskell, Scala, SQL, Kotlin.",
    "Python y JavaScript son multiparadigma (sirven para varios estilos a la vez).",
    "Paradigmas mas usados: estructurada, orientada a objetos, reactiva, por procesos, funcional y logica.",
    "En clase usamos la programacion ESTRUCTURADA (secuencial).",
  ],
  questions: [
    {
      id: "paradigmas-q1",
      type: "mc",
      prompt: "Que es un paradigma o tecnica de programacion?",
      options: [
        "Un metodo o estilo sistematico para realizar tareas y resolver problemas de software.",
        "Un lenguaje de programacion especifico como Python o Java.",
        "Un programa ya compilado y listo para ejecutarse.",
        "Una herramienta para escribir comentarios en el codigo.",
      ],
      answerIndex: 0,
      accepted: [],
      explanation:
        "Un paradigma es una forma sistematica de resolver problemas de software, aplicable en todos los niveles del diseno; no es un lenguaje ni un programa.",
      difficulty: "facil",
    },
    {
      id: "paradigmas-q2",
      type: "mc",
      prompt:
        "En el paradigma IMPERATIVO, que es lo que indica el programador?",
      options: [
        "El COMO: que procesos y tareas precisas debe hacer la maquina.",
        "El QUE: solo el resultado deseado, sin el proceso.",
        "Unicamente reglas de logica matematica.",
        "El diseno grafico de la interfaz de usuario.",
      ],
      answerIndex: 0,
      accepted: [],
      explanation:
        "En lo imperativo se especifica de forma precisa el COMO, es decir los procesos y pasos que debe ejecutar la maquina.",
      difficulty: "media",
    },
    {
      id: "paradigmas-q3",
      type: "mc",
      prompt:
        "Cual de estos conjuntos corresponde a lenguajes DECLARATIVOS?",
      options: [
        "Prolog, LISP, Haskell, SQL.",
        "Fortran, Pascal, C, Java.",
        "C++, Python, Ruby, Java.",
        "HTML, CSS, JSON, XML.",
      ],
      answerIndex: 0,
      accepted: [],
      explanation:
        "Prolog, LISP, Haskell, Scala, SQL y Kotlin se citan como declarativos; Fortran, Pascal, C, C++, Java, Python y Ruby son imperativos.",
      difficulty: "media",
    },
    {
      id: "paradigmas-q4",
      type: "mc",
      prompt:
        "Que paradigma escucha flujos de datos y reacciona a los cambios, como YouTube o Netflix ajustando la calidad segun la conexion?",
      options: ["Reactiva", "Logica", "Estructurada", "Por procesos"],
      answerIndex: 0,
      accepted: [],
      explanation:
        "La programacion reactiva escucha flujos de datos; el ejemplo tipico es YouTube/Netflix ajustando la calidad segun la velocidad de la conexion.",
      difficulty: "media",
    },
    {
      id: "paradigmas-q5",
      type: "vf",
      prompt:
        "En el paradigma declarativo el programador indica el resultado deseado (el QUE) sin especificar el proceso.",
      options: ["Verdadero", "Falso"],
      answerIndex: 0,
      accepted: [],
      explanation:
        "Correcto: lo declarativo describe el QUE (el resultado) y deja que la maquina resuelva el como.",
      difficulty: "facil",
    },
    {
      id: "paradigmas-q6",
      type: "vf",
      prompt:
        "Python y JavaScript son lenguajes multiparadigma, es decir que permiten trabajar con varios estilos a la vez.",
      options: ["Verdadero", "Falso"],
      answerIndex: 0,
      accepted: [],
      explanation:
        "Verdadero: Python y JavaScript son multiparadigma; por eso Python figura tambien entre los lenguajes imperativos.",
      difficulty: "facil",
    },
    {
      id: "paradigmas-q7",
      type: "vf",
      prompt:
        "En esta materia, durante las practicas de clase, usamos principalmente la programacion orientada a objetos.",
      options: ["Verdadero", "Falso"],
      answerIndex: 1,
      accepted: [],
      explanation:
        "Falso: en clase usamos la programacion ESTRUCTURADA (secuencial), no la orientada a objetos.",
      difficulty: "facil",
    },
    {
      id: "paradigmas-q8",
      type: "fill",
      prompt:
        "El paradigma que usamos en clase, donde el codigo se ejecuta de forma secuencial paso a paso, se llama programacion ____.",
      options: [],
      answerIndex: -1,
      accepted: ["estructurada", "estructurado"],
      explanation:
        "En clase trabajamos con programacion estructurada (secuencial), base para entender luego los demas paradigmas.",
      difficulty: "media",
    },
    {
      id: "paradigmas-q9",
      type: "mc",
      prompt:
        "En el paradigma orientado a objetos, como se organiza principalmente el programa?",
      options: [
        "En objetos que se comunican entre si.",
        "En afirmaciones y reglas de logica matematica.",
        "En flujos de datos que se escuchan.",
        "En una unica funcion gigante sin partes.",
      ],
      answerIndex: 0,
      accepted: [],
      explanation:
        "La POO modela el programa como objetos que se comunican entre si.",
      difficulty: "facil",
    },
  ],
  flashcards: [
    {
      id: "paradigmas-fc1",
      front: "Que es un paradigma de programacion?",
      back: "Un metodo o estilo sistematico para realizar tareas y resolver problemas de software, aplicable en todos los niveles del diseno de codigo.",
    },
    {
      id: "paradigmas-fc2",
      front: "Diferencia entre imperativa y declarativa",
      back: "Imperativa indica el COMO (los procesos y pasos); declarativa indica el QUE (el resultado deseado) sin especificar el proceso.",
    },
    {
      id: "paradigmas-fc3",
      front: "Ejemplos de lenguajes imperativos y declarativos",
      back: "Imperativos: Fortran, Pascal, C, C++, Java, Python, Ruby. Declarativos: Prolog, LISP, Haskell, Scala, SQL, Kotlin.",
    },
    {
      id: "paradigmas-fc4",
      front: "Que significa que un lenguaje sea multiparadigma?",
      back: "Que permite trabajar con varios estilos a la vez. Ejemplos: Python y JavaScript.",
    },
    {
      id: "paradigmas-fc5",
      front: "Que es la programacion reactiva?",
      back: "Un paradigma que escucha flujos de datos y reacciona a los cambios. Ejemplo: YouTube y Netflix ajustan la calidad segun la conexion.",
    },
    {
      id: "paradigmas-fc6",
      front: "Que paradigma usamos en clase?",
      back: "La programacion estructurada (secuencial): el codigo se ejecuta ordenado, paso a paso.",
    },
    {
      id: "paradigmas-fc7",
      front: "Paradigmas mas usados",
      back: "Estructurada, orientada a objetos, reactiva, por procesos, funcional y logica.",
    },
  ],
  matchPairs: [
    {
      term: "Imperativa",
      definition: "Indica el COMO: los procesos y pasos precisos que hace la maquina.",
    },
    {
      term: "Declarativa",
      definition: "Indica el QUE: el resultado deseado, sin especificar el proceso.",
    },
    {
      term: "Estructurada",
      definition: "Ejecucion secuencial paso a paso; es la que usamos en clase.",
    },
    {
      term: "Orientada a objetos",
      definition: "Organiza el programa en objetos que se comunican entre si.",
    },
    {
      term: "Reactiva",
      definition: "Escucha flujos de datos; ej. YouTube/Netflix ajustan la calidad.",
    },
    {
      term: "Multiparadigma",
      definition: "Lenguaje que admite varios estilos a la vez, como Python o JavaScript.",
    },
  ],
  orderChallenge: null,
  terms: ["PARADIGMA", "IMPERATIVA", "DECLARATIVA", "ESTRUCTURADA", "OBJETOS", "REACTIVA"],
};

export default topic;
