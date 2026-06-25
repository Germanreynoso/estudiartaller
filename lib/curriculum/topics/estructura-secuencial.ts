import type { Topic } from "../types";

const topic: Topic = {
  id: "estructura-secuencial",
  number: 19,
  module: "estructuras",
  title: "Estructura Secuencial",
  short:
    "Las instrucciones se ejecutan una tras otra, en orden, de arriba hacia abajo, sin saltos.",
  theory: `La **estructura secuencial** es aquella en la que las instrucciones se ejecutan **una despues de otra**, en **orden**, de **arriba hacia abajo**, **sin saltos ni bifurcaciones**. Cada accion se realiza **una sola vez** y respetando la **secuencia** en que esta escrita. Es la **estructura mas simple** y la **base** de las demas (selectiva e iterativa).

En una estructura secuencial no hay decisiones (no se pregunta nada) ni repeticiones (nada se ejecuta dos veces): el flujo del programa va **derecho**, ejecutando cada instruccion en orden hasta llegar al final.

## Caracteristicas

- Las instrucciones se ejecutan **en el mismo orden** en que aparecen escritas.
- El flujo va **de arriba hacia abajo**, sin saltos.
- **No hay bifurcaciones** (no se elige entre caminos) ni **ciclos** (no se repite nada).
- Cada accion se ejecuta **una sola vez**.
- Es la estructura mas simple y la **base** sobre la que se construyen la selectiva y la iterativa.

## Esquema (diagrama de flujo)

El esquema de una estructura secuencial es una unica linea de acciones encadenadas, desde el Inicio hasta el Fin:

    +-----------+
    |  Inicio   |
    +-----------+
          |
          v
    +-----------+
    | Accion 1  |
    +-----------+
          |
          v
    +-----------+
    | Accion 2  |
    +-----------+
          |
          v
         ...
          |
          v
    +-----------+
    | Accion n  |
    +-----------+
          |
          v
    +-----------+
    |    Fin    |
    +-----------+

En forma compacta se suele escribir asi:

    Inicio -> Accion 1 -> Accion 2 -> ... -> Accion n -> Fin

## Ejemplo: leer dos numeros, sumarlos y mostrar el resultado

Un proceso secuencial clasico es leer dos numeros, sumarlos y mostrar el total. Los pasos se ejecutan uno tras otro, sin decisiones ni repeticiones:

    Inicio
      1) Leer el primer numero  (a)
      2) Leer el segundo numero (b)
      3) Calcular la suma:  suma = a + b
      4) Mostrar la suma
    Fin

Cada paso depende del anterior y se ejecuta una sola vez: primero se ingresan los datos (entrada), luego se procesan (calculo) y finalmente se muestra el resultado (salida). Este orden entrada -> proceso -> salida es tipico de los algoritmos secuenciales.

## Para el parcial

- La estructura secuencial ejecuta las instrucciones **una tras otra, en orden**, de arriba hacia abajo.
- **No** tiene decisiones ni repeticiones: **sin saltos ni bifurcaciones**.
- Cada accion se realiza **una sola vez**.
- Es la **mas simple** y la **base** de las demas estructuras.
- Saber dibujar su esquema: 'Inicio -> Accion 1 -> Accion 2 -> ... -> Accion n -> Fin'.`,
  keyPoints: [
    "En la estructura secuencial las instrucciones se ejecutan una despues de otra, en orden.",
    "El flujo va de arriba hacia abajo, sin saltos ni bifurcaciones.",
    "No hay decisiones ni repeticiones: cada accion se realiza una sola vez.",
    "Es la estructura mas simple y la base de las demas (selectiva e iterativa).",
    "Su esquema es lineal: Inicio -> Accion 1 -> Accion 2 -> ... -> Accion n -> Fin.",
    "Ejemplo tipico: leer dos numeros, sumarlos y mostrar el resultado.",
  ],
  questions: [
    {
      id: "estructura-secuencial-q1",
      type: "mc",
      prompt:
        "Que caracteriza a la estructura secuencial?",
      options: [
        "Las instrucciones se ejecutan una tras otra, en orden, sin saltos ni bifurcaciones.",
        "Elige entre dos caminos segun una condicion.",
        "Repite un bloque mientras se cumpla una condicion.",
        "Ejecuta las instrucciones en cualquier orden, al azar.",
      ],
      answerIndex: 0,
      accepted: [],
      explanation:
        "En la estructura secuencial las instrucciones se ejecutan una despues de otra, en orden, de arriba hacia abajo, sin decisiones ni repeticiones.",
      difficulty: "facil",
    },
    {
      id: "estructura-secuencial-q2",
      type: "mc",
      prompt:
        "En que sentido se ejecutan las instrucciones de una estructura secuencial?",
      options: [
        "De arriba hacia abajo, en el orden en que estan escritas.",
        "De abajo hacia arriba.",
        "Saltando segun el valor de una condicion.",
        "Repitiendose hasta que el usuario lo detenga.",
      ],
      answerIndex: 0,
      accepted: [],
      explanation:
        "El flujo de la estructura secuencial avanza de arriba hacia abajo, respetando el orden en que estan escritas las instrucciones.",
      difficulty: "facil",
    },
    {
      id: "estructura-secuencial-q3",
      type: "mc",
      prompt:
        "Cual es el esquema correcto de una estructura secuencial?",
      options: [
        "Inicio -> Accion 1 -> Accion 2 -> ... -> Accion n -> Fin.",
        "Inicio -> condicion? -> camino A / camino B -> Fin.",
        "Inicio -> mientras (condicion) repetir bloque -> Fin.",
        "Inicio -> elegir segun valor -> varios casos -> Fin.",
      ],
      answerIndex: 0,
      accepted: [],
      explanation:
        "El esquema secuencial es una unica linea de acciones encadenadas: Inicio, las acciones en orden y Fin, sin bifurcaciones.",
      difficulty: "media",
    },
    {
      id: "estructura-secuencial-q4",
      type: "mc",
      prompt:
        "Cuantas veces se ejecuta cada accion dentro de una estructura puramente secuencial?",
      options: [
        "Una sola vez.",
        "Dos veces.",
        "Tantas veces como se cumpla una condicion.",
        "Ninguna, hasta que el usuario la repita.",
      ],
      answerIndex: 0,
      accepted: [],
      explanation:
        "En una estructura secuencial cada accion se realiza una sola vez; repetir acciones es propio de la estructura iterativa.",
      difficulty: "media",
    },
    {
      id: "estructura-secuencial-q5",
      type: "mc",
      prompt:
        "Por que se dice que la estructura secuencial es la base de las demas?",
      options: [
        "Porque es la mas simple y las demas estructuras se construyen ejecutando sus acciones en orden.",
        "Porque es la unica que puede tomar decisiones.",
        "Porque es la unica que permite repetir bloques.",
        "Porque solo funciona en lenguajes antiguos.",
      ],
      answerIndex: 0,
      accepted: [],
      explanation:
        "La secuencial es la estructura mas simple; dentro de una decision o de un ciclo, las acciones tambien se ejecutan en secuencia, por eso es la base.",
      difficulty: "media",
    },
    {
      id: "estructura-secuencial-q6",
      type: "vf",
      prompt:
        "En la estructura secuencial puede haber saltos o bifurcaciones que elijan entre varios caminos.",
      options: ["Verdadero", "Falso"],
      answerIndex: 1,
      accepted: [],
      explanation:
        "Falso: la estructura secuencial no tiene saltos ni bifurcaciones; elegir entre caminos es propio de la estructura selectiva.",
      difficulty: "facil",
    },
    {
      id: "estructura-secuencial-q7",
      type: "vf",
      prompt:
        "La estructura secuencial es la mas simple de las estructuras de control.",
      options: ["Verdadero", "Falso"],
      answerIndex: 0,
      accepted: [],
      explanation:
        "Verdadero: la secuencial es la estructura mas simple, el flujo va derecho de arriba hacia abajo, y es la base de la selectiva y la iterativa.",
      difficulty: "facil",
    },
    {
      id: "estructura-secuencial-q8",
      type: "fill",
      prompt:
        "La estructura en la que las instrucciones se ejecutan una tras otra, en orden, se llama estructura ____.",
      options: [],
      answerIndex: -1,
      accepted: ["secuencial"],
      explanation:
        "La estructura secuencial ejecuta las instrucciones una despues de otra, en el orden en que estan escritas.",
      difficulty: "facil",
    },
    {
      id: "estructura-secuencial-q9",
      type: "fill",
      prompt:
        "En el algoritmo de leer dos numeros y sumarlos, despues de leer ambos numeros la siguiente accion es ____ la suma.",
      options: [],
      answerIndex: -1,
      accepted: ["calcular", "sumar"],
      explanation:
        "Tras leer los dos numeros (entrada), el paso siguiente es calcular la suma (proceso); recien despues se muestra el resultado (salida).",
      difficulty: "media",
    },
  ],
  flashcards: [
    {
      id: "estructura-secuencial-fc1",
      front: "Que es la estructura secuencial?",
      back: "Aquella en la que las instrucciones se ejecutan una despues de otra, en orden, de arriba hacia abajo, sin saltos ni bifurcaciones.",
    },
    {
      id: "estructura-secuencial-fc2",
      front: "Cuantas veces se ejecuta cada accion en una estructura secuencial?",
      back: "Una sola vez, respetando la secuencia en que esta escrita.",
    },
    {
      id: "estructura-secuencial-fc3",
      front: "Por que la estructura secuencial es importante?",
      back: "Es la estructura mas simple y la base sobre la que se construyen las demas (selectiva e iterativa).",
    },
    {
      id: "estructura-secuencial-fc4",
      front: "Como es el esquema de una estructura secuencial?",
      back: "Inicio -> Accion 1 -> Accion 2 -> ... -> Accion n -> Fin (una linea de acciones encadenadas).",
    },
    {
      id: "estructura-secuencial-fc5",
      front: "Tiene decisiones o repeticiones la estructura secuencial?",
      back: "No: no hay decisiones ni repeticiones. El flujo va derecho, ejecutando cada instruccion en orden.",
    },
    {
      id: "estructura-secuencial-fc6",
      front: "Da un ejemplo de proceso secuencial.",
      back: "Leer dos numeros, calcular su suma y mostrar el resultado: cada paso se ejecuta una vez, en orden.",
    },
  ],
  matchPairs: [
    {
      term: "Secuencial",
      definition: "Instrucciones ejecutadas una tras otra, en orden.",
    },
    {
      term: "Orden",
      definition: "Las acciones se ejecutan de arriba hacia abajo.",
    },
    {
      term: "Una sola vez",
      definition: "Cada accion se realiza una unica vez, sin repetir.",
    },
    {
      term: "Sin bifurcaciones",
      definition: "No hay saltos ni eleccion entre caminos.",
    },
    {
      term: "Base",
      definition: "Estructura mas simple sobre la que se arman las demas.",
    },
    {
      term: "Esquema",
      definition: "Inicio -> Accion 1 -> ... -> Accion n -> Fin.",
    },
  ],
  orderChallenge: {
    id: "estructura-secuencial-order",
    title: "Ordena el proceso secuencial: calcular el area de un rectangulo",
    steps: [
      "Inicio",
      "Leer la base",
      "Leer la altura",
      "Calcular el area: area = base * altura",
      "Mostrar el area",
      "Fin",
    ],
  },
  terms: ["SECUENCIAL", "ORDEN", "INICIO", "FIN", "ACCION", "FLUJO"],
};

export default topic;
