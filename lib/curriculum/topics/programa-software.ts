import type { Topic } from "../types";

const topic: Topic = {
  id: "programa-software",
  number: 3,
  module: "fundamentos",
  title: "Programa y Software",
  short: "Programa: instrucciones para una tarea. Software: conjunto de programas y datos.",
  theory: `Un **programa** es una secuencia o conjunto ordenado de instrucciones, escritas en un lenguaje de programacion, que una computadora interpreta y ejecuta para resolver un problema o cumplir una funcion especifica. Por lo general un programa ofrece una **interfaz de usuario** (botones, menus, pantallas) para que la persona interactue con el.

El **software** es el conjunto de programas, datos e instrucciones que permiten ejecutar tareas en un dispositivo. Es el componente **intangible** del equipo: no se puede tocar, no tiene forma fisica. Los programas que componen el software le indican al **hardware** (la parte fisica) los pasos a seguir.

## Que es un programa

- Es una **unidad de instrucciones** pensada para una tarea concreta.
- Esta escrito en un lenguaje de programacion (por ejemplo TypeScript, Python, Java).
- La computadora lo interpreta o ejecuta para resolver un problema.
- Suele incluir una interfaz para que el usuario lo use.

Ejemplos de programas: una calculadora, un reproductor de musica, un editor de texto.

## Que es el software

El software es algo **mas amplio** que un solo programa. Incluye:

- **Programas**: aplicaciones, navegadores, juegos, etc.
- **Sistemas operativos**: Windows, Linux, Android (gestionan todo el dispositivo).
- **Datos e informacion**: la informacion del usuario y los datos que se procesan (archivos, fotos, configuraciones).

Por eso decimos que el software es el componente intangible que da vida al hardware: sin software, la computadora es solo metal y plastico.

Ejemplos de software: un sistema operativo, una suite de oficina, un navegador web, un videojuego.

## Diferencia entre programa y software

La clave esta en el alcance:

- El **programa** es una unidad de instrucciones para **una** tarea especifica.
- El **software** es el **conjunto** mas amplio: programas + datos + informacion del usuario.

Dicho corto: todo programa es software, pero el software es mucho mas que un programa.

    +-------------------------------------------------------+
    |                       SOFTWARE                        |
    |  (conjunto intangible que da ordenes al hardware)     |
    |                                                       |
    |   +-----------+   +-----------+   +---------------+    |
    |   | Programa1 |   | Programa2 |   |  Datos / Info |    |
    |   +-----------+   +-----------+   +---------------+    |
    +-------------------------------------------------------+
                            |  indica los pasos
                            v
    +-------------------------------------------------------+
    |              HARDWARE (parte fisica/tangible)         |
    +-------------------------------------------------------+

## Los cuatro terminos: algoritmo, pseudocodigo, programa y software

Es muy comun confundirlos. Cada uno esta en un nivel distinto:

- **Algoritmo**: es la **logica** o semantica, los **pasos** ordenados para resolver el problema. Responde al "que hacer". No depende de ningun lenguaje.
- **Pseudocodigo**: es la **sintaxis intermedia**, el "como" lo escribimos antes de programar. Es un puente entre el algoritmo (idea) y el codigo real, escrito en lenguaje cercano al humano.
- **Programa**: son las **instrucciones reales y ejecutables**, escritas en un lenguaje de programacion, que la computadora puede correr.
- **Software**: es el **conjunto de programas** (mas sus datos e informacion) que funciona en el dispositivo.

Asi se ve el camino desde la idea hasta el producto final:

    ALGORITMO          PSEUDOCODIGO         PROGRAMA            SOFTWARE
    (la logica)   -->  (la sintaxis    -->  (instrucciones -->  (conjunto de
    los pasos          intermedia)          ejecutables)        programas + datos)
    el "que"           el "como"            codigo real         producto que se usa

## Analogia para no olvidar

Pensa en construir una casa:

- El **pseudocodigo** son **los planos**: describen como va a ser todo antes de construir.
- El **programa** es **la casa ya construida**: el resultado concreto que se puede habitar y usar.

Los planos (pseudocodigo) guian la construccion, pero recien cuando levantamos las paredes (el programa) tenemos algo que funciona de verdad. Y un barrio entero de casas, con sus habitantes y sus muebles, seria el **software**: el conjunto completo.`,
  keyPoints: [
    "Un programa es un conjunto ordenado de instrucciones en un lenguaje de programacion para resolver una tarea especifica, y suele tener interfaz de usuario.",
    "El software es el componente intangible (no fisico): conjunto de programas, datos e informacion que da ordenes al hardware.",
    "Diferencia de alcance: el programa es una unidad para una tarea; el software es el conjunto mas amplio (programas + datos + informacion).",
    "Algoritmo = la logica/los pasos (el que); pseudocodigo = la sintaxis intermedia (el como); programa = instrucciones ejecutables; software = conjunto de programas.",
    "Analogia: el pseudocodigo son los planos y el programa es la casa ya construida.",
    "Los programas le indican al hardware (parte fisica y tangible) los pasos a seguir.",
  ],
  questions: [
    {
      id: "ps-q1",
      type: "mc",
      prompt: "Que es un programa?",
      options: [
        "La parte fisica de la computadora que se puede tocar.",
        "Un conjunto ordenado de instrucciones, escritas en un lenguaje de programacion, que la computadora ejecuta para resolver una tarea especifica.",
        "Solo la informacion y los datos del usuario almacenados en el disco.",
        "Un dibujo de los pasos que no se puede ejecutar en ningun lenguaje.",
      ],
      answerIndex: 1,
      accepted: [],
      explanation:
        "El programa es una secuencia ordenada de instrucciones en un lenguaje de programacion que la computadora interpreta para cumplir una funcion especifica.",
      difficulty: "facil",
    },
    {
      id: "ps-q2",
      type: "mc",
      prompt: "Cual de estas opciones describe mejor al software?",
      options: [
        "Una unica instruccion aislada del procesador.",
        "El conjunto de programas, datos e instrucciones, intangible, que permite ejecutar tareas en un dispositivo.",
        "Los cables y componentes electronicos del equipo.",
        "Unicamente el sistema operativo, sin las aplicaciones.",
      ],
      answerIndex: 1,
      accepted: [],
      explanation:
        "El software es el componente intangible: conjunto de programas, datos e informacion que ejecuta tareas en el dispositivo e indica al hardware los pasos a seguir.",
      difficulty: "facil",
    },
    {
      id: "ps-q3",
      type: "mc",
      prompt: "Cual es la principal diferencia entre programa y software?",
      options: [
        "El programa es fisico y el software es intangible.",
        "Son exactamente lo mismo, solo cambia el nombre.",
        "El programa es una unidad de instrucciones para una tarea; el software es el conjunto mas amplio de programas, datos e informacion.",
        "El software resuelve una sola tarea y el programa muchas a la vez.",
      ],
      answerIndex: 2,
      accepted: [],
      explanation:
        "El programa apunta a una tarea especifica; el software es el conjunto que agrupa programas, datos e informacion del usuario.",
      difficulty: "media",
    },
    {
      id: "ps-q4",
      type: "mc",
      prompt: "Cual de los cuatro terminos representa la logica o los pasos para resolver un problema, sin depender de un lenguaje?",
      options: ["El software", "El pseudocodigo", "El algoritmo", "El programa"],
      answerIndex: 2,
      accepted: [],
      explanation:
        "El algoritmo es la logica/semantica: los pasos ordenados (el 'que hacer'), independientes de cualquier lenguaje de programacion.",
      difficulty: "media",
    },
    {
      id: "ps-q5",
      type: "vf",
      prompt: "El software es el componente intangible del dispositivo: no tiene forma fisica y no se puede tocar.",
      options: ["Verdadero", "Falso"],
      answerIndex: 0,
      accepted: [],
      explanation:
        "Correcto: el software es intangible, a diferencia del hardware que es la parte fisica y tangible.",
      difficulty: "facil",
    },
    {
      id: "ps-q6",
      type: "vf",
      prompt: "El pseudocodigo es el codigo real y ejecutable que corre directamente en la computadora.",
      options: ["Verdadero", "Falso"],
      answerIndex: 1,
      accepted: [],
      explanation:
        "Falso: el pseudocodigo es la sintaxis intermedia (el 'como') previa al programa; las instrucciones reales y ejecutables son el programa.",
      difficulty: "media",
    },
    {
      id: "ps-q7",
      type: "vf",
      prompt: "En la analogia de la construccion, los planos representan el pseudocodigo y la casa ya construida representa el programa.",
      options: ["Verdadero", "Falso"],
      answerIndex: 0,
      accepted: [],
      explanation:
        "Correcto: los planos (pseudocodigo) guian la obra y la casa terminada (programa) es el resultado concreto y utilizable.",
      difficulty: "facil",
    },
    {
      id: "ps-q8",
      type: "fill",
      prompt: "El conjunto de programas, datos e informacion, intangible, que permite ejecutar tareas en un dispositivo se llama ____.",
      options: [],
      answerIndex: -1,
      accepted: ["software", "el software"],
      explanation:
        "El software es el conjunto intangible de programas, datos e informacion que da ordenes al hardware.",
      difficulty: "facil",
    },
    {
      id: "ps-q9",
      type: "fill",
      prompt: "La logica o conjunto ordenado de pasos para resolver un problema, sin depender de un lenguaje, se llama ____.",
      options: [],
      answerIndex: -1,
      accepted: ["algoritmo", "el algoritmo"],
      explanation:
        "El algoritmo describe los pasos (el 'que hacer') de forma independiente del lenguaje de programacion.",
      difficulty: "media",
    },
  ],
  flashcards: [
    {
      id: "ps-f1",
      front: "Que es un programa?",
      back: "Conjunto ordenado de instrucciones, escritas en un lenguaje de programacion, que la computadora ejecuta para resolver una tarea especifica; suele tener interfaz de usuario.",
    },
    {
      id: "ps-f2",
      front: "Que es el software?",
      back: "Conjunto intangible de programas, datos e informacion que permite ejecutar tareas en un dispositivo e indica al hardware los pasos a seguir.",
    },
    {
      id: "ps-f3",
      front: "Diferencia entre programa y software",
      back: "El programa es una unidad de instrucciones para una tarea; el software es el conjunto mas amplio (programas + datos + informacion del usuario).",
    },
    {
      id: "ps-f4",
      front: "Que es un algoritmo?",
      back: "La logica/semantica: los pasos ordenados para resolver un problema (el 'que hacer'), sin depender de ningun lenguaje.",
    },
    {
      id: "ps-f5",
      front: "Que es el pseudocodigo?",
      back: "La sintaxis intermedia (el 'como'): un puente entre el algoritmo y el programa, escrito en lenguaje cercano al humano.",
    },
    {
      id: "ps-f6",
      front: "Analogia planos / casa",
      back: "Los planos = pseudocodigo (describe antes de construir); la casa ya construida = programa (el resultado concreto y utilizable).",
    },
    {
      id: "ps-f7",
      front: "Software vs hardware",
      back: "El software es intangible (programas y datos); el hardware es la parte fisica y tangible que recibe las ordenes del software.",
    },
  ],
  matchPairs: [
    {
      term: "Programa",
      definition: "Conjunto ordenado de instrucciones ejecutables para resolver una tarea especifica.",
    },
    {
      term: "Software",
      definition: "Conjunto intangible de programas, datos e informacion que ejecuta tareas en un dispositivo.",
    },
    {
      term: "Algoritmo",
      definition: "La logica: los pasos ordenados para resolver un problema, sin depender de un lenguaje.",
    },
    {
      term: "Pseudocodigo",
      definition: "Sintaxis intermedia (el 'como'), puente entre la idea y el codigo real.",
    },
    {
      term: "Hardware",
      definition: "La parte fisica y tangible que recibe las ordenes del software.",
    },
    {
      term: "Interfaz de usuario",
      definition: "Medio con el que la persona interactua con un programa (menus, botones, pantallas).",
    },
  ],
  orderChallenge: {
    id: "ps-order",
    title: "De la idea al producto: ordena los niveles de abstraccion",
    steps: [
      "Algoritmo: definir la logica y los pasos para resolver el problema.",
      "Pseudocodigo: escribir esos pasos con una sintaxis intermedia cercana al humano.",
      "Programa: traducir el pseudocodigo a instrucciones reales y ejecutables en un lenguaje de programacion.",
      "Software: agrupar el o los programas junto con sus datos e informacion para usarlos en el dispositivo.",
    ],
  },
  terms: ["PROGRAMA", "SOFTWARE", "ALGORITMO", "PSEUDOCODIGO", "HARDWARE", "INTANGIBLE"],
};

export default topic;
