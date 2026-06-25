import type { Topic } from "../types";

const topic: Topic = {
  id: "que-es-programar",
  number: 5,
  module: "paradigmas",
  title: "Que es Programar",
  short: "Disenar, escribir, probar y mantener instrucciones para que la maquina resuelva un problema.",
  theory: `## Que es programar

**Programar** es el proceso de **disenar, escribir, probar y mantener** el codigo fuente de un programa. En otras palabras, consiste en darle a la computadora una **secuencia de instrucciones**, escritas en un **lenguaje de programacion**, para que resuelva un problema o realice una tarea.

La computadora no "entiende" el problema: solo ejecuta, paso a paso, las ordenes que le damos. Por eso programar es, en esencia, **traducir la solucion (el algoritmo) a un lenguaje que la maquina pueda interpretar y ejecutar**.

## La idea central: algoritmo + lenguaje

Antes de escribir codigo necesitamos una solucion clara. Esa solucion, expresada como una secuencia ordenada y finita de pasos, es el **algoritmo**. Programar es llevar ese algoritmo a un **lenguaje de programacion** (por ejemplo TypeScript) para que la maquina lo ejecute.

    Problema  -->  Algoritmo (solucion en pasos)  -->  Codigo (lenguaje)  -->  Ejecucion

Sin un buen algoritmo, escribir codigo es escribir instrucciones sin rumbo. Primero se piensa la solucion, despues se codifica.

## Las etapas de programar

Programar no es solo "tipear codigo". Es un proceso con varias etapas que suelen seguir este orden:

- **1. Analizar el problema:** entender que se pide, cuales son los datos de entrada y que resultado (salida) se espera.
- **2. Disenar el algoritmo:** pensar la solucion como una secuencia de pasos (por ejemplo con pseudocodigo o un diagrama de flujo).
- **3. Codificar:** traducir ese algoritmo a un lenguaje de programacion concreto.
- **4. Probar y depurar:** ejecutar el programa, detectar errores y corregirlos. Depurar (debug) es justamente **encontrar y corregir errores**.
- **5. Mantener:** corregir fallas que aparecen con el uso, adaptar el programa a nuevas necesidades y mejorarlo con el tiempo.

Esquema del flujo completo:

    +-----------+    +-----------------+    +-----------+    +----------------+    +-----------+
    | Analizar  | -> | Disenar         | -> | Codificar | -> | Probar /       | -> | Mantener  |
    | problema  |    | algoritmo       |    |           |    | Depurar        |    |           |
    +-----------+    +-----------------+    +-----------+    +----------------+    +-----------+
                                                                  |
                                                                  v
                                                        si hay errores, se vuelve
                                                        a corregir el codigo

## Depurar: encontrar y corregir errores

Casi nunca un programa funciona perfecto a la primera. **Depurar** es la tarea de localizar los errores (bugs) y arreglarlos. Los errores pueden ser:

- **De sintaxis:** el codigo esta mal escrito segun las reglas del lenguaje y no compila.
- **De ejecucion:** el programa se detiene mientras corre (por ejemplo, dividir por cero).
- **De logica:** el programa corre pero da un resultado incorrecto porque el algoritmo esta mal pensado.

## Por que hay etapas y no solo codigo

Saltarse el analisis y el diseno casi siempre cuesta mas caro: se reescribe codigo, aparecen mas errores y el mantenimiento se complica. Pensar primero el **algoritmo** y recien despues **codificar** hace que el programa sea mas claro, correcto y facil de mantener.

En resumen: **programar es resolver un problema disenando un algoritmo y traduciendolo a instrucciones que la computadora pueda ejecutar, probando y manteniendo ese codigo a lo largo del tiempo.**`,
  keyPoints: [
    "Programar es disenar, escribir, probar y mantener el codigo fuente de un programa.",
    "Es dar a la computadora una secuencia de instrucciones en un lenguaje de programacion para resolver un problema.",
    "En esencia es traducir el algoritmo (la solucion) a un lenguaje que la maquina pueda ejecutar.",
    "Las etapas son: analizar, disenar el algoritmo, codificar, probar/depurar y mantener.",
    "Depurar significa encontrar y corregir los errores del programa.",
    "Primero se piensa el algoritmo y recien despues se escribe el codigo.",
  ],
  questions: [
    {
      id: "qprog-1",
      type: "mc",
      prompt: "En que consiste programar?",
      options: [
        "Disenar, escribir, probar y mantener el codigo fuente para que la maquina resuelva un problema",
        "Encender la computadora y abrir el sistema operativo",
        "Comprar e instalar software ya hecho por otros",
        "Disenar el hardware fisico de la computadora",
      ],
      answerIndex: 0,
      accepted: [],
      explanation:
        "Programar es el proceso de disenar, escribir, probar y mantener el codigo fuente: darle a la maquina instrucciones para resolver un problema.",
      difficulty: "facil",
    },
    {
      id: "qprog-2",
      type: "mc",
      prompt: "Cual es el orden correcto de las etapas de programar?",
      options: [
        "Analizar el problema, disenar el algoritmo, codificar, probar/depurar y mantener",
        "Codificar, analizar el problema, mantener, disenar el algoritmo y probar",
        "Mantener, probar, codificar, disenar el algoritmo y analizar",
        "Disenar el algoritmo, mantener, codificar, analizar y probar",
      ],
      answerIndex: 0,
      accepted: [],
      explanation:
        "El flujo natural es entender el problema, pensar la solucion, traducirla a codigo, probar y corregir, y finalmente mantener.",
      difficulty: "media",
    },
    {
      id: "qprog-3",
      type: "mc",
      prompt: "Que significa 'depurar' (debug) un programa?",
      options: [
        "Encontrar y corregir los errores del programa",
        "Borrar el codigo fuente para empezar de nuevo",
        "Escribir la documentacion del programa",
        "Aumentar la velocidad del procesador",
      ],
      answerIndex: 0,
      accepted: [],
      explanation:
        "Depurar es la tarea de localizar los errores (bugs) y corregirlos para que el programa funcione correctamente.",
      difficulty: "facil",
    },
    {
      id: "qprog-4",
      type: "mc",
      prompt: "Que se hace primero al resolver un problema con programacion?",
      options: [
        "Analizar el problema y disenar el algoritmo antes de codificar",
        "Escribir todo el codigo y despues pensar el problema",
        "Mantener el programa antes de crearlo",
        "Probar el programa antes de escribirlo",
      ],
      answerIndex: 0,
      accepted: [],
      explanation:
        "Primero se entiende el problema y se disena el algoritmo (la solucion en pasos); recien despues se traduce a codigo.",
      difficulty: "media",
    },
    {
      id: "qprog-5",
      type: "vf",
      prompt: "Programar es, en esencia, traducir el algoritmo a un lenguaje que la maquina pueda interpretar y ejecutar.",
      options: ["Verdadero", "Falso"],
      answerIndex: 0,
      accepted: [],
      explanation:
        "Exacto: la solucion se piensa como algoritmo y programar consiste en expresarla en un lenguaje ejecutable por la computadora.",
      difficulty: "facil",
    },
    {
      id: "qprog-6",
      type: "vf",
      prompt: "Programar consiste unicamente en escribir codigo, sin necesidad de analizar el problema ni mantener el programa.",
      options: ["Verdadero", "Falso"],
      answerIndex: 1,
      accepted: [],
      explanation:
        "Es falso: programar incluye analizar, disenar, codificar, probar/depurar y mantener; no es solo escribir codigo.",
      difficulty: "media",
    },
    {
      id: "qprog-7",
      type: "fill",
      prompt: "A la etapa de encontrar y corregir errores de un programa se la llama ____.",
      options: [],
      answerIndex: -1,
      accepted: ["depurar", "depuracion", "debug", "debugging"],
      explanation:
        "Depurar (debug) es localizar los errores del programa y corregirlos.",
      difficulty: "facil",
    },
    {
      id: "qprog-8",
      type: "fill",
      prompt: "La secuencia ordenada y finita de pasos que describe la solucion de un problema se llama ____.",
      options: [],
      answerIndex: -1,
      accepted: ["algoritmo"],
      explanation:
        "El algoritmo es la solucion expresada como pasos; programar es traducir ese algoritmo a un lenguaje de programacion.",
      difficulty: "media",
    },
  ],
  flashcards: [
    {
      id: "fprog-1",
      front: "Que es programar?",
      back: "El proceso de disenar, escribir, probar y mantener el codigo fuente: dar a la maquina instrucciones en un lenguaje para resolver un problema.",
    },
    {
      id: "fprog-2",
      front: "Cuales son las etapas de programar?",
      back: "Analizar el problema, disenar el algoritmo, codificar, probar/depurar y mantener.",
    },
    {
      id: "fprog-3",
      front: "Que es depurar (debug)?",
      back: "Encontrar y corregir los errores de un programa para que funcione correctamente.",
    },
    {
      id: "fprog-4",
      front: "Que se traduce al programar?",
      back: "El algoritmo (la solucion en pasos) se traduce a un lenguaje que la maquina pueda interpretar y ejecutar.",
    },
    {
      id: "fprog-5",
      front: "Que es un algoritmo?",
      back: "Una secuencia ordenada y finita de pasos que describe como resolver un problema.",
    },
    {
      id: "fprog-6",
      front: "Que es la etapa de mantener?",
      back: "Corregir fallas que aparecen con el uso, adaptar el programa a nuevas necesidades y mejorarlo con el tiempo.",
    },
  ],
  matchPairs: [
    {
      term: "Programar",
      definition: "Disenar, escribir, probar y mantener el codigo fuente de un programa.",
    },
    {
      term: "Algoritmo",
      definition: "Secuencia ordenada y finita de pasos que resuelve un problema.",
    },
    {
      term: "Codificar",
      definition: "Traducir el algoritmo a un lenguaje de programacion concreto.",
    },
    {
      term: "Depurar",
      definition: "Encontrar y corregir los errores de un programa.",
    },
    {
      term: "Analizar",
      definition: "Entender que se pide, los datos de entrada y la salida esperada.",
    },
    {
      term: "Mantener",
      definition: "Corregir fallas, adaptar y mejorar el programa con el tiempo.",
    },
  ],
  orderChallenge: {
    id: "oprog-etapas",
    title: "Orden las etapas de programar",
    steps: [
      "Analizar el problema",
      "Disenar el algoritmo",
      "Codificar",
      "Probar / Depurar",
      "Mantener",
    ],
  },
  terms: ["PROGRAMAR", "ALGORITMO", "CODIGO", "DEPURAR", "CODIFICAR", "MANTENER"],
};

export default topic;
