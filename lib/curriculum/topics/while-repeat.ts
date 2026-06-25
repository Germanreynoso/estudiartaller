import type { Topic } from "../types";

const topic: Topic = {
  id: "while-repeat",
  number: 22,
  module: "estructuras",
  title: "While-Do y Repeat-Until",
  short:
    "Dos ciclos: Mientras evalua la condicion al inicio; Repetir, al final (1 vez minimo).",
  theory: `Las estructuras **While-Do (Mientras Hacer)** y **Repeat-Until (Repetir Hasta)** son **estructuras ciclicas o iterativas**: repiten un bloque de acciones (el **cuerpo** del ciclo) mientras se cumpla una **condicion**. La gran diferencia entre ambas esta en **donde se evalua la condicion**: en **Mientras** se evalua **al inicio** del ciclo y en **Repetir** se evalua **al final**.

En las dos estructuras necesitamos una **variable de control** que cambie dentro del cuerpo (por ejemplo un contador que crece con 'contador = contador + 1'), de modo que en algun momento la condicion deje de cumplirse y el ciclo termine. Si esa variable nunca hace que la condicion cambie, el ciclo no termina nunca: es un **bucle infinito**.

## Mientras (While-Do)

La estructura **Mientras** evalua la **condicion AL INICIO** del ciclo, **antes** de ejecutar el cuerpo. Si la condicion es **verdadera**, ejecuta el cuerpo y vuelve a evaluar; si es **falsa**, sale. Por eso, si la condicion es **falsa desde el comienzo**, el cuerpo **no se ejecuta ninguna vez**. En resumen, el cuerpo se ejecuta de **0 a n veces**.

Forma en pseudocodigo:

    Mientras <condicion> Hacer
        <cuerpo>
    FinMientras

Esquema del diagrama de flujo (el rombo va ARRIBA, antes del cuerpo):

              |
              v
        +-------------+
        | condicion?  | <-----+
        +------+------+       |
          V    |    F         |
          |    +-----> (sale) |
          v                   |
       <cuerpo>               |
          |                   |
          +-------------------+

**Ventaja:** controla la condicion **antes** de ejecutar, por lo que **evita ejecuciones indebidas** (si no corresponde repetir, ni siquiera entra al cuerpo).

**Desventajas:** si la condicion **nunca se vuelve falsa** se produce un **bucle infinito**; ademas, hay que **inicializar la variable de control antes** del ciclo, porque la condicion se evalua de entrada.

**Ejemplo:** mostrar los numeros del 1 al 5.

    contador = 1
    Mientras contador <= 5 Hacer
        mostrar contador
        contador = contador + 1
    FinMientras

## Repetir (Repeat-Until)

La estructura **Repetir** ejecuta primero el cuerpo y evalua la **condicion AL FINAL** del ciclo. Por eso el cuerpo se ejecuta **al menos una vez**, pase lo que pase. Repite **hasta que** la condicion se cumpla (es decir, sigue repitiendo mientras la condicion de corte sea falsa, y corta cuando se vuelve verdadera). En resumen, el cuerpo se ejecuta de **1 a n veces**.

Forma en pseudocodigo:

    Repetir
        <cuerpo>
    Hasta Que <condicion>

Esquema del diagrama de flujo (el rombo va ABAJO, despues del cuerpo):

              |
              v
       <cuerpo> <----------+
          |                |
          v                |
        +-------------+    |
        | condicion?  |    |
        +------+------+    |
          F    |    V      |
          |    |    +-----> (sale)
          +----+ (repite) -+

**Ventaja:** **garantiza al menos una ejecucion** del cuerpo, algo muy util para **menus** (mostrar el menu por lo menos una vez) y para la **validacion de datos** (pedir un dato y volver a pedirlo hasta que sea correcto).

**Desventaja:** **puede ejecutar de mas** si la condicion no se controla bien, porque el cuerpo siempre corre antes de comprobar nada.

**Ejemplo:** pedir una clave hasta que sea la correcta (el pedido se hace al menos una vez).

    Repetir
        pedir clave
    Hasta Que clave = "1234"

## Diferencia principal

La **diferencia principal** entre Mientras y Repetir es **el lugar donde se evalua la condicion**:

- **Mientras (While-Do):** evalua la condicion **al inicio**, por eso el cuerpo puede ejecutarse **0 veces** (de 0 a n).
- **Repetir (Repeat-Until):** evalua la condicion **al final**, por eso el cuerpo se ejecuta **al menos 1 vez** (de 1 a n).

## Para el parcial

- **Mientras** evalua la condicion al inicio (0 a n ejecuciones); **Repetir** la evalua al final (1 a n ejecuciones).
- Ventaja de Mientras: controla la condicion antes de ejecutar y evita ejecuciones indebidas.
- Ventaja de Repetir: garantiza al menos una ejecucion (ideal para menus y validacion de datos).
- En ambas hay que actualizar la variable de control para no caer en un bucle infinito.`,
  keyPoints: [
    "Mientras (While-Do) y Repetir (Repeat-Until) son estructuras ciclicas o iterativas que repiten un bloque segun una condicion.",
    "La diferencia principal es el lugar donde se evalua la condicion: Mientras al inicio y Repetir al final.",
    "Mientras evalua al inicio: si la condicion es falsa de entrada, el cuerpo no se ejecuta ninguna vez (0 a n veces).",
    "Repetir evalua al final: el cuerpo se ejecuta al menos una vez (1 a n veces), util para menus y validacion de datos.",
    "Ventaja de Mientras: controla la condicion antes de ejecutar y evita ejecuciones indebidas; requiere inicializar la variable de control antes.",
    "Si la condicion nunca se vuelve falsa se produce un bucle infinito; hay que actualizar la variable de control dentro del cuerpo.",
  ],
  questions: [
    {
      id: "while-repeat-q1",
      type: "mc",
      prompt:
        "Cual es la diferencia principal entre la estructura Mientras (While-Do) y Repetir (Repeat-Until)?",
      options: [
        "El lugar donde se evalua la condicion: Mientras al inicio y Repetir al final.",
        "Mientras usa rombo y Repetir no usa ningun simbolo.",
        "Mientras sirve para decisiones y Repetir para secuencias.",
        "No hay diferencias: son dos nombres para la misma estructura.",
      ],
      answerIndex: 0,
      accepted: [],
      explanation:
        "La diferencia clave es donde se evalua la condicion: Mientras la evalua al inicio (puede ejecutarse 0 veces) y Repetir al final (al menos 1 vez).",
      difficulty: "media",
    },
    {
      id: "while-repeat-q2",
      type: "mc",
      prompt:
        "En la estructura Mientras (While-Do), cuando se evalua la condicion?",
      options: [
        "Al inicio del ciclo, antes de ejecutar el cuerpo.",
        "Al final del ciclo, despues de ejecutar el cuerpo.",
        "En la mitad del cuerpo del ciclo.",
        "Solo una vez, al terminar el programa.",
      ],
      answerIndex: 0,
      accepted: [],
      explanation:
        "Mientras evalua la condicion al inicio; si es falsa desde el comienzo, el cuerpo no se ejecuta ninguna vez.",
      difficulty: "facil",
    },
    {
      id: "while-repeat-q3",
      type: "mc",
      prompt:
        "Cuantas veces se ejecuta como minimo el cuerpo de un ciclo Repetir (Repeat-Until)?",
      options: [
        "Al menos una vez, porque la condicion se evalua al final.",
        "Cero veces, si la condicion es falsa al principio.",
        "Exactamente cero veces siempre.",
        "Depende del rombo, nunca menos de dos.",
      ],
      answerIndex: 0,
      accepted: [],
      explanation:
        "En Repetir la condicion se evalua al final, asi que el cuerpo siempre corre al menos una vez (1 a n veces).",
      difficulty: "facil",
    },
    {
      id: "while-repeat-q4",
      type: "mc",
      prompt:
        "Cual es una ventaja tipica de la estructura Repetir (Repeat-Until)?",
      options: [
        "Garantiza al menos una ejecucion, util para menus y validacion de datos.",
        "Nunca ejecuta el cuerpo si la condicion es falsa.",
        "Evita siempre el bucle infinito de forma automatica.",
        "No necesita ninguna condicion para funcionar.",
      ],
      answerIndex: 0,
      accepted: [],
      explanation:
        "Como evalua la condicion al final, Repetir asegura que el cuerpo se ejecute al menos una vez, ideal para mostrar un menu o pedir un dato hasta que sea valido.",
      difficulty: "media",
    },
    {
      id: "while-repeat-q5",
      type: "mc",
      prompt:
        "Cual es una desventaja de la estructura Mientras (While-Do)?",
      options: [
        "Si la condicion nunca se vuelve falsa, se produce un bucle infinito.",
        "Siempre ejecuta el cuerpo aunque no corresponda.",
        "No permite usar una variable de control.",
        "Obliga a ejecutar el cuerpo al menos una vez.",
      ],
      answerIndex: 0,
      accepted: [],
      explanation:
        "Si la variable de control no cambia y la condicion nunca se vuelve falsa, el ciclo Mientras no termina nunca (bucle infinito).",
      difficulty: "media",
    },
    {
      id: "while-repeat-q6",
      type: "vf",
      prompt:
        "En la estructura Mientras, si la condicion es falsa desde el comienzo, el cuerpo del ciclo no se ejecuta ninguna vez.",
      options: ["Verdadero", "Falso"],
      answerIndex: 0,
      accepted: [],
      explanation:
        "Verdadero: como Mientras evalua la condicion al inicio, si es falsa de entrada el cuerpo se ejecuta 0 veces.",
      difficulty: "facil",
    },
    {
      id: "while-repeat-q7",
      type: "vf",
      prompt:
        "En la estructura Repetir (Repeat-Until) la condicion se evalua al inicio, por eso el cuerpo puede no ejecutarse nunca.",
      options: ["Verdadero", "Falso"],
      answerIndex: 1,
      accepted: [],
      explanation:
        "Falso: en Repetir la condicion se evalua al final, por lo que el cuerpo siempre se ejecuta al menos una vez.",
      difficulty: "media",
    },
    {
      id: "while-repeat-q8",
      type: "fill",
      prompt:
        "La estructura ciclica que evalua la condicion al inicio y puede ejecutar el cuerpo 0 veces se llama ____.",
      options: [],
      answerIndex: -1,
      accepted: ["mientras", "while", "while-do"],
      explanation:
        "Mientras (While-Do) evalua la condicion al inicio; si es falsa de entrada, el cuerpo no se ejecuta ninguna vez.",
      difficulty: "facil",
    },
    {
      id: "while-repeat-q9",
      type: "fill",
      prompt:
        "En el diagrama de flujo de Repetir, el rombo de la condicion se dibuja ____ del cuerpo (al final del ciclo).",
      options: [],
      answerIndex: -1,
      accepted: ["abajo", "debajo", "al final", "despues"],
      explanation:
        "En Repetir el rombo va abajo, despues del cuerpo, porque la condicion se evalua al final del ciclo.",
      difficulty: "media",
    },
  ],
  flashcards: [
    {
      id: "while-repeat-fc1",
      front: "Cual es la diferencia principal entre Mientras y Repetir?",
      back: "El lugar donde se evalua la condicion: Mientras al inicio (puede ejecutarse 0 veces) y Repetir al final (se ejecuta al menos 1 vez).",
    },
    {
      id: "while-repeat-fc2",
      front: "Como funciona la estructura Mientras (While-Do)?",
      back: "Evalua la condicion al inicio; si es verdadera ejecuta el cuerpo y vuelve a evaluar; si es falsa sale. El cuerpo se ejecuta de 0 a n veces.",
    },
    {
      id: "while-repeat-fc3",
      front: "Como funciona la estructura Repetir (Repeat-Until)?",
      back: "Ejecuta el cuerpo y evalua la condicion al final; repite hasta que se cumpla. El cuerpo se ejecuta de 1 a n veces (al menos una).",
    },
    {
      id: "while-repeat-fc4",
      front: "Ventaja y desventaja de Mientras.",
      back: "Ventaja: controla la condicion antes de ejecutar y evita ejecuciones indebidas. Desventaja: si la condicion nunca se vuelve falsa, hay bucle infinito; requiere inicializar la variable de control antes.",
    },
    {
      id: "while-repeat-fc5",
      front: "Ventaja y desventaja de Repetir.",
      back: "Ventaja: garantiza al menos una ejecucion (util para menus y validacion de datos). Desventaja: puede ejecutar de mas si no se controla bien la condicion.",
    },
    {
      id: "while-repeat-fc6",
      front: "Que es un bucle infinito?",
      back: "Un ciclo que no termina nunca porque la condicion nunca se vuelve falsa; ocurre si no se actualiza bien la variable de control.",
    },
    {
      id: "while-repeat-fc7",
      front: "Donde se dibuja el rombo en cada ciclo?",
      back: "En Mientras el rombo va arriba (antes del cuerpo); en Repetir el rombo va abajo (despues del cuerpo).",
    },
  ],
  matchPairs: [
    {
      term: "Mientras",
      definition: "Evalua la condicion al inicio; el cuerpo se ejecuta de 0 a n veces.",
    },
    {
      term: "Repetir",
      definition: "Evalua la condicion al final; el cuerpo se ejecuta de 1 a n veces.",
    },
    {
      term: "Ventaja Mientras",
      definition: "Controla la condicion antes de ejecutar y evita ejecuciones indebidas.",
    },
    {
      term: "Ventaja Repetir",
      definition: "Garantiza al menos una ejecucion, util para menus y validacion.",
    },
    {
      term: "Bucle infinito",
      definition: "Ciclo que no termina porque la condicion nunca se vuelve falsa.",
    },
    {
      term: "Variable de control",
      definition: "Variable que cambia en el cuerpo para que el ciclo termine.",
    },
  ],
  orderChallenge: null,
  terms: ["MIENTRAS", "REPETIR", "WHILE", "REPEAT", "CICLO", "CONDICION"],
};

export default topic;
