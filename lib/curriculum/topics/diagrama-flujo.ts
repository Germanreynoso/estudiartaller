import type { Topic } from "../types";

const topic: Topic = {
  id: "diagrama-flujo",
  number: 4,
  module: "fundamentos",
  title: "Diagrama de Flujo y Simbolos",
  short: "Representacion grafica de un algoritmo mediante simbolos convencionales.",
  theory: `Un **diagrama de flujo** (DF) es la representacion grafica de un algoritmo o pseudocodigo mediante simbolos convencionales, que muestra el proceso que sigue la informacion dentro de un programa. Cada simbolo tiene un significado fijo y las flechas indican el orden en que se ejecutan los pasos.

Sirve para planear y comunicar la logica de una solucion antes de escribir el codigo: permite ver de un vistazo el camino que recorren los datos, las decisiones que se toman y las repeticiones que se hacen.

## Simbolos principales

- **Terminal (ovalo o elipse):** marca el **inicio** y el **fin** del diagrama. Todo DF comienza y termina con un terminal.
- **Entrada / Salida (paralelogramo):** se usa para **introducir datos** (por ejemplo leer desde el teclado) o **mostrar resultados** (por ejemplo escribir en pantalla).
- **Proceso (rectangulo):** representa una **operacion que cambia el valor, el formato o la posicion** de la informacion. Aca van los calculos y las asignaciones, como 'total = precio * cantidad'.
- **Decision (rombo):** representa una **operacion logica o de comparacion**. Tiene **dos salidas: SI y NO**. Tambien se usa para construir **estructuras iterativas** (bucles), donde una salida repite y la otra continua.
- **Linea de flujo (flecha):** indica la **direccion y el sentido** en que se ejecuta el algoritmo (a donde sigue el proceso).
- **Linea conectora (linea simple):** **une dos simbolos** del diagrama.

## Simbolos especificos de Entrada/Salida

Ademas del paralelogramo general, existen simbolos para dispositivos concretos:

- **Impresora:** salida de datos impresos en papel.
- **Pantalla:** salida de datos mostrados en el monitor.
- **Teclado:** entrada de datos tecleados por el usuario.

## Forma de los simbolos (ASCII)

    Inicio / Fin (Terminal)        Entrada / Salida
       _______                        ________
      /       \\                      /        /
     ( INICIO  )                    /  LEER  /
      \\_______/                    /________/
       (ovalo)                    (paralelogramo)


    Proceso                        Decision
     ___________                      /\\
    |           |                    /  \\
    | total =   |                   / x  \\  SI
    | a + b     |              NO   < > 0 >----
    |___________|                    \\    /
     (rectangulo)                     \\  /
                                       \\/
                                     (rombo)

## Como se conectan

Las flechas (lineas de flujo) van de arriba hacia abajo siguiendo el orden de ejecucion. En una **decision**, desde el rombo salen dos caminos: uno por **SI** y otro por **NO**, que luego pueden volver a unirse para continuar el programa.

    _______
   ( INICIO )
    \\___ ___/
        |
     ___v_____
    /  LEER  /     <- Entrada (paralelogramo)
   /___ ____/
       |
    ___v_______
   | n = n * 2 |   <- Proceso (rectangulo)
   |___________|
       |
       v
      /\\
     /  \\   SI
    < >0 >------> mostrar n
     \\  /
      \\/  NO
       |
    ___v____
   (  FIN   )

## Resumen util

El diagrama de flujo es **visual e intuitivo**: ideal para entender la logica de un algoritmo pequenio o mediano de un solo golpe de vista. Para algoritmos largos suele volverse engorroso, y ahi conviene el **pseudocodigo**, que es mas compacto y mas cercano al codigo real.`,
  keyPoints: [
    "El diagrama de flujo es la representacion grafica de un algoritmo o pseudocodigo con simbolos convencionales que muestran el recorrido de la informacion.",
    "Terminal (ovalo) = inicio/fin; Entrada-Salida (paralelogramo) = leer o mostrar datos; Proceso (rectangulo) = calculos y asignaciones; Decision (rombo) = comparaciones con salidas SI/NO y bucles.",
    "La linea de flujo (flecha) marca la direccion de ejecucion y la linea conectora (linea simple) une dos simbolos.",
    "Hay simbolos especificos de E/S para dispositivos: Impresora, Pantalla y Teclado.",
    "Ventaja del PSEUDOCODIGO frente al DF: es mas facil de escribir y modificar, mas cercano al codigo real, ocupa menos espacio en algoritmos largos y la transicion a codigo es directa.",
    "Ventaja del DIAGRAMA DE FLUJO: es mas visual e intuitivo, aunque se vuelve engorroso en algoritmos grandes.",
  ],
  questions: [
    {
      id: "df-q1",
      type: "mc",
      prompt: "Que es un diagrama de flujo?",
      options: [
        "La representacion grafica de un algoritmo o pseudocodigo mediante simbolos convencionales",
        "Un lenguaje de programacion compilado de bajo nivel",
        "Una tabla con los datos de entrada y salida de un programa",
        "El codigo fuente final escrito en un lenguaje real",
      ],
      answerIndex: 0,
      accepted: [],
      explanation: "El diagrama de flujo es la representacion grafica de un algoritmo que, mediante simbolos convencionales, muestra el proceso que sigue la informacion.",
      difficulty: "facil",
    },
    {
      id: "df-q2",
      type: "mc",
      prompt: "Que simbolo se usa para representar el INICIO y el FIN de un diagrama de flujo?",
      options: [
        "El rectangulo (proceso)",
        "El ovalo o elipse (terminal)",
        "El rombo (decision)",
        "El paralelogramo (entrada/salida)",
      ],
      answerIndex: 1,
      accepted: [],
      explanation: "El simbolo terminal, dibujado como ovalo o elipse, marca el inicio y el fin del diagrama.",
      difficulty: "facil",
    },
    {
      id: "df-q3",
      type: "mc",
      prompt: "Que representa el simbolo de PROCESO (rectangulo)?",
      options: [
        "La introduccion de datos por teclado",
        "Una comparacion logica con dos salidas",
        "Una operacion que cambia el valor, formato o posicion de la informacion, como calculos y asignaciones",
        "El comienzo del programa",
      ],
      answerIndex: 2,
      accepted: [],
      explanation: "El proceso (rectangulo) representa operaciones que cambian el valor, formato o posicion de la informacion, como los calculos y las asignaciones.",
      difficulty: "media",
    },
    {
      id: "df-q4",
      type: "mc",
      prompt: "Cual es la ventaja principal del PSEUDOCODIGO respecto del diagrama de flujo?",
      options: [
        "Es mas visual e intuitivo para principiantes",
        "Es mas facil de escribir y modificar, mas cercano al codigo real y ocupa menos espacio en algoritmos largos",
        "No necesita seguir ninguna logica ni orden",
        "Reemplaza por completo a la fase de codificacion",
      ],
      answerIndex: 1,
      accepted: [],
      explanation: "El pseudocodigo es mas facil de escribir y modificar, esta mas cerca del codigo real, ocupa menos espacio en algoritmos largos y su transicion a codigo es directa; el DF, en cambio, es mas visual pero engorroso en algoritmos grandes.",
      difficulty: "media",
    },
    {
      id: "df-q5",
      type: "vf",
      prompt: "El simbolo de DECISION (rombo) tiene dos salidas, SI y NO, y tambien se usa en las estructuras iterativas.",
      options: ["Verdadero", "Falso"],
      answerIndex: 0,
      accepted: [],
      explanation: "El rombo representa operaciones logicas o de comparacion con dos salidas (SI/NO) y ademas se emplea para armar las estructuras iterativas o bucles.",
      difficulty: "media",
    },
    {
      id: "df-q6",
      type: "vf",
      prompt: "La linea de flujo (flecha) sirve unicamente para unir dos simbolos, sin indicar ninguna direccion.",
      options: ["Verdadero", "Falso"],
      answerIndex: 1,
      accepted: [],
      explanation: "Es falso: la linea de flujo (flecha) indica la direccion y el sentido de ejecucion. La que solo une dos simbolos sin sentido es la linea conectora (linea simple).",
      difficulty: "media",
    },
    {
      id: "df-q7",
      type: "vf",
      prompt: "El diagrama de flujo es mas visual e intuitivo, pero se vuelve engorroso cuando el algoritmo es muy grande.",
      options: ["Verdadero", "Falso"],
      answerIndex: 0,
      accepted: [],
      explanation: "Verdadero: la fortaleza del DF es ser visual e intuitivo, pero en algoritmos grandes se vuelve engorroso, y ahi conviene el pseudocodigo.",
      difficulty: "facil",
    },
    {
      id: "df-q8",
      type: "fill",
      prompt: "El simbolo en forma de ____ se usa para la entrada o salida de datos (leer o mostrar informacion).",
      options: [],
      answerIndex: -1,
      accepted: ["paralelogramo", "paralelogramo (entrada/salida)"],
      explanation: "El paralelogramo es el simbolo de entrada/salida: se usa para introducir datos o mostrar resultados.",
      difficulty: "media",
    },
    {
      id: "df-q9",
      type: "fill",
      prompt: "Entre los simbolos especificos de entrada y salida estan la Impresora, la Pantalla y el ____.",
      options: [],
      answerIndex: -1,
      accepted: ["teclado"],
      explanation: "Los simbolos especificos de E/S son Impresora y Pantalla (salida) y Teclado (entrada de datos).",
      difficulty: "facil",
    },
  ],
  flashcards: [
    {
      id: "df-f1",
      front: "Que es un diagrama de flujo?",
      back: "La representacion grafica de un algoritmo o pseudocodigo mediante simbolos convencionales que muestran el proceso que sigue la informacion en un programa.",
    },
    {
      id: "df-f2",
      front: "Simbolo Terminal (ovalo/elipse)",
      back: "Marca el inicio y el fin del diagrama de flujo.",
    },
    {
      id: "df-f3",
      front: "Simbolo Proceso (rectangulo)",
      back: "Operacion que cambia el valor, formato o posicion de la informacion: calculos y asignaciones.",
    },
    {
      id: "df-f4",
      front: "Simbolo Decision (rombo)",
      back: "Operacion logica o de comparacion con dos salidas (SI/NO); tambien se usa en estructuras iterativas.",
    },
    {
      id: "df-f5",
      front: "Linea de flujo vs linea conectora",
      back: "La linea de flujo (flecha) indica la direccion de ejecucion; la linea conectora (linea simple) solo une dos simbolos.",
    },
    {
      id: "df-f6",
      front: "Ventaja del pseudocodigo sobre el diagrama de flujo",
      back: "Mas facil de escribir y modificar, mas cercano al codigo real, ocupa menos espacio en algoritmos largos y su transicion a codigo es directa.",
    },
    {
      id: "df-f7",
      front: "Simbolos especificos de E/S",
      back: "Impresora y Pantalla (salida) y Teclado (entrada de datos).",
    },
  ],
  matchPairs: [
    { term: "Terminal (ovalo)", definition: "Indica el inicio y el fin del diagrama." },
    { term: "Paralelogramo", definition: "Entrada o salida de datos: leer o mostrar informacion." },
    { term: "Rectangulo", definition: "Proceso: calculos y asignaciones que cambian la informacion." },
    { term: "Rombo", definition: "Decision logica con dos salidas SI/NO; tambien para bucles." },
    { term: "Flecha", definition: "Linea de flujo: direccion y sentido de ejecucion." },
    { term: "Linea simple", definition: "Linea conectora que une dos simbolos." },
  ],
  orderChallenge: null,
  terms: ["TERMINAL", "ROMBO", "PROCESO", "FLECHA", "PARALELOGRAMO", "DECISION"],
};

export default topic;
