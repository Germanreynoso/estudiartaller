import type { Topic } from "../types";

const topic: Topic = {
  id: "resolucion-problemas",
  number: 8,
  module: "paradigmas",
  title: "Resolucion de Problemas",
  short: "Pasos para resolver problemas informaticos: analizar antes de codificar.",
  theory: `La **resolucion de problemas informaticos** es el proceso ordenado que seguimos para pasar de un problema (algo que queremos resolver con una computadora) a una solucion funcionando (un programa que la resuelve).

La idea central de la materia es que **programar no es escribir codigo de inmediato**. Primero hay que **entender** el problema y **disenar** la solucion; recien despues se traduce a un lenguaje de programacion. Por eso el lema es: **analizar antes de codificar**.

Para organizar ese trabajo seguimos una serie de **pasos en orden**. Cada paso se apoya en el anterior: si analizamos mal, vamos a disenar mal; si disenamos mal, el codigo va a estar mal por mas prolijo que sea.

## Los pasos en orden

El siguiente esquema muestra los cinco pasos y como se encadenan:

\`\`\`
  1) ANALISIS  ->  2) DISENO  ->  3) CODIFICACION  ->  4) PRUEBA  ->  5) DOCUMENTACION
  (que se pide)   (algoritmo)     (lenguaje real)     (verificar)    (y mantenimiento)
       |               |                |                  |                |
   entradas /      pseudocodigo /    traducir el       ejecutar y       explicar y
   salidas /       diagrama de       algoritmo a       depurar los      mantener el
    datos          flujo             codigo            errores          programa
                                                          |
                                                   si hay errores,
                                                   se vuelve atras
\`\`\`

### 1) Analisis del problema

Es **entender que se pide** antes de pensar en la solucion. En este paso identificamos:

- **Entradas (inputs):** que datos recibe el programa.
- **Salidas (outputs):** que resultados debe producir.
- **Datos y restricciones:** que informacion tenemos y que reglas se deben cumplir.

Si no entendemos bien el problema, todo lo que venga despues va a estar mal orientado.

### 2) Diseno del algoritmo

Es **definir los pasos de la solucion**: el "como" se resuelve, todavia sin un lenguaje de programacion concreto. La solucion se expresa con herramientas independientes del lenguaje, como:

- **Pseudocodigo:** los pasos escritos en lenguaje cercano al humano.
- **Diagrama de flujo:** los pasos representados con simbolos graficos.

Aca decidimos el orden de las instrucciones, las decisiones y las repeticiones.

### 3) Codificacion

Es **traducir el algoritmo a un lenguaje de programacion** (por ejemplo TypeScript). Si el diseno esta bien hecho, codificar es basicamente "pasar a codigo" lo que ya pensamos en el paso anterior.

### 4) Prueba, verificacion y depuracion

Es **ejecutar el programa para detectar y corregir errores**:

- **Prueba/Verificacion:** comprobar que el programa hace lo que se pedia, probandolo con distintos datos de entrada.
- **Depuracion (debugging):** buscar la causa de los errores encontrados y corregirlos.

Si aparecen errores graves, puede ser necesario **volver a pasos anteriores** (revisar el diseno o incluso el analisis).

### 5) Documentacion y mantenimiento

- **Documentacion:** explicar como funciona el programa (comentarios, manuales) para que otra persona (o uno mismo en el futuro) pueda entenderlo.
- **Mantenimiento:** corregir fallas que aparezcan con el tiempo y adaptar el programa a nuevas necesidades.

## Por que analizar antes de codificar

Un error muy comun de quien recien empieza es **saltar directo a codificar**. El problema es que un error de **analisis o diseno** cuesta mucho mas de corregir que un error de tipeo: obliga a rehacer codigo ya escrito.

Pensar primero (analisis y diseno) y codificar despues hace la solucion mas clara, mas facil de probar y mas barata de mantener.`,
  keyPoints: [
    "La resolucion de problemas informaticos sigue pasos en orden, no se salta directo al codigo.",
    "Los 5 pasos: analisis, diseno del algoritmo, codificacion, prueba/depuracion y documentacion/mantenimiento.",
    "El analisis identifica entradas, salidas y datos: entender que se pide.",
    "El diseno define los pasos de la solucion con pseudocodigo o diagrama de flujo.",
    "La codificacion es traducir el algoritmo a un lenguaje de programacion concreto.",
    "Lema clave: analizar antes de codificar; un error de analisis cuesta mas que uno de tipeo.",
  ],
  questions: [
    {
      id: "resolucion-problemas-q1",
      type: "mc",
      prompt: "Cual es el orden correcto de los pasos para resolver un problema informatico?",
      options: [
        "Analisis, diseno del algoritmo, codificacion, prueba/depuracion, documentacion y mantenimiento.",
        "Codificacion, analisis, diseno, prueba, documentacion.",
        "Diseno, codificacion, analisis, documentacion, prueba.",
        "Prueba, codificacion, diseno, analisis, mantenimiento.",
      ],
      answerIndex: 0,
      accepted: [],
      explanation:
        "Primero se analiza el problema, luego se disena el algoritmo, despues se codifica, se prueba/depura y finalmente se documenta y mantiene.",
      difficulty: "media",
    },
    {
      id: "resolucion-problemas-q2",
      type: "mc",
      prompt: "Que se hace en el paso de Analisis del problema?",
      options: [
        "Entender que se pide: identificar entradas, salidas y datos.",
        "Traducir el algoritmo a un lenguaje de programacion.",
        "Ejecutar el programa para detectar y corregir errores.",
        "Escribir el manual de usuario del programa.",
      ],
      answerIndex: 0,
      accepted: [],
      explanation:
        "El analisis consiste en entender que se pide, identificando las entradas, las salidas y los datos del problema, antes de pensar la solucion.",
      difficulty: "facil",
    },
    {
      id: "resolucion-problemas-q3",
      type: "mc",
      prompt: "En que paso se expresa la solucion con pseudocodigo o diagrama de flujo?",
      options: [
        "Diseno del algoritmo.",
        "Analisis del problema.",
        "Codificacion.",
        "Prueba y depuracion.",
      ],
      answerIndex: 0,
      accepted: [],
      explanation:
        "En el diseno del algoritmo se definen los pasos de la solucion y se expresan con pseudocodigo o diagrama de flujo, sin un lenguaje concreto todavia.",
      difficulty: "media",
    },
    {
      id: "resolucion-problemas-q4",
      type: "mc",
      prompt: "Que actividad corresponde al paso de Prueba/Verificacion y depuracion?",
      options: [
        "Ejecutar el programa, detectar errores y corregirlos.",
        "Identificar las entradas y salidas del problema.",
        "Definir los pasos de la solucion en pseudocodigo.",
        "Traducir el algoritmo a un lenguaje de programacion.",
      ],
      answerIndex: 0,
      accepted: [],
      explanation:
        "Probar y depurar es ejecutar el programa para verificar que hace lo pedido, detectar los errores y corregirlos (debugging).",
      difficulty: "facil",
    },
    {
      id: "resolucion-problemas-q5",
      type: "vf",
      prompt: "Conviene empezar a codificar de inmediato, sin analizar ni disenar, para ahorrar tiempo.",
      options: ["Verdadero", "Falso"],
      answerIndex: 1,
      accepted: [],
      explanation:
        "Es falso: el lema es analizar antes de codificar, porque un error de analisis o diseno cuesta mucho mas de corregir que uno de codigo.",
      difficulty: "facil",
    },
    {
      id: "resolucion-problemas-q6",
      type: "vf",
      prompt: "La codificacion es el paso en el que se traduce el algoritmo disenado a un lenguaje de programacion.",
      options: ["Verdadero", "Falso"],
      answerIndex: 0,
      accepted: [],
      explanation:
        "Es verdadero: codificar es traducir a un lenguaje de programacion el algoritmo que se penso en el paso de diseno.",
      difficulty: "facil",
    },
    {
      id: "resolucion-problemas-q7",
      type: "vf",
      prompt: "El diseno del algoritmo se hace despues de la codificacion.",
      options: ["Verdadero", "Falso"],
      answerIndex: 1,
      accepted: [],
      explanation:
        "Es falso: el diseno del algoritmo va antes de la codificacion; primero se piensa la solucion y luego se traduce a codigo.",
      difficulty: "media",
    },
    {
      id: "resolucion-problemas-q8",
      type: "fill",
      prompt: "El primer paso, en el que se identifican entradas, salidas y datos para entender que se pide, se llama ____.",
      options: [],
      answerIndex: -1,
      accepted: ["analisis", "analisis del problema"],
      explanation:
        "El analisis del problema es el primer paso: entender que se pide identificando entradas, salidas y datos.",
      difficulty: "media",
    },
    {
      id: "resolucion-problemas-q9",
      type: "fill",
      prompt: "Buscar la causa de los errores y corregirlos durante la prueba se llama ____.",
      options: [],
      answerIndex: -1,
      accepted: ["depuracion", "debugging"],
      explanation:
        "La depuracion (debugging) es la actividad de encontrar la causa de los errores detectados al probar el programa y corregirlos.",
      difficulty: "media",
    },
  ],
  flashcards: [
    {
      id: "resolucion-problemas-f1",
      front: "Cuales son los pasos para resolver un problema informatico, en orden?",
      back: "1) Analisis, 2) Diseno del algoritmo, 3) Codificacion, 4) Prueba/verificacion y depuracion, 5) Documentacion y mantenimiento.",
    },
    {
      id: "resolucion-problemas-f2",
      front: "Que se hace en el Analisis del problema?",
      back: "Entender que se pide: identificar las entradas, las salidas y los datos del problema.",
    },
    {
      id: "resolucion-problemas-f3",
      front: "Que se hace en el Diseno del algoritmo?",
      back: "Definir los pasos de la solucion y expresarla en pseudocodigo o diagrama de flujo, sin lenguaje concreto.",
    },
    {
      id: "resolucion-problemas-f4",
      front: "Que es la Codificacion?",
      back: "Traducir el algoritmo disenado a un lenguaje de programacion concreto.",
    },
    {
      id: "resolucion-problemas-f5",
      front: "Que se hace en la Prueba, verificacion y depuracion?",
      back: "Ejecutar el programa, detectar errores y corregirlos (depuracion o debugging).",
    },
    {
      id: "resolucion-problemas-f6",
      front: "Cual es el lema central de la resolucion de problemas?",
      back: "Analizar antes de codificar: pensar la solucion antes de escribir codigo.",
    },
    {
      id: "resolucion-problemas-f7",
      front: "Que incluye el paso de Documentacion y mantenimiento?",
      back: "Explicar como funciona el programa y corregir o adaptar el software con el tiempo.",
    },
  ],
  matchPairs: [
    {
      term: "Analisis",
      definition: "Entender que se pide: entradas, salidas y datos.",
    },
    {
      term: "Diseno",
      definition: "Definir los pasos de la solucion en pseudocodigo o diagrama de flujo.",
    },
    {
      term: "Codificacion",
      definition: "Traducir el algoritmo a un lenguaje de programacion.",
    },
    {
      term: "Prueba",
      definition: "Ejecutar el programa para detectar y corregir errores.",
    },
    {
      term: "Depuracion",
      definition: "Buscar la causa de los errores y corregirlos (debugging).",
    },
    {
      term: "Mantenimiento",
      definition: "Corregir fallas y adaptar el programa con el tiempo.",
    },
  ],
  orderChallenge: {
    id: "resolucion-problemas-oc",
    title: "Ordena los pasos para resolver un problema informatico",
    steps: [
      "Analisis del problema (entender que se pide: entradas, salidas, datos)",
      "Diseno del algoritmo (pseudocodigo o diagrama de flujo)",
      "Codificacion (traducir el algoritmo a un lenguaje de programacion)",
      "Prueba, verificacion y depuracion (ejecutar y corregir errores)",
      "Documentacion y mantenimiento",
    ],
  },
  terms: ["ANALISIS", "DISENO", "CODIFICACION", "DEPURACION", "PRUEBA", "ALGORITMO"],
};

export default topic;
