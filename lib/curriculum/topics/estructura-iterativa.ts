import type { Topic } from "../types";

const topic: Topic = {
  id: "estructura-iterativa",
  number: 21,
  module: "estructuras",
  title: "Estructura Iterativa y Bucles",
  short: "Permite repetir un bloque mientras se cumpla una condicion: tipos Mientras, Repetir y Para.",
  theory: `La **estructura iterativa** (tambien llamada **ciclica** o **repetitiva**) es una de las tres estructuras de control de la programacion estructurada, junto con la **secuencial** y la **condicional** (de decision). Su funcion es permitir **REPETIR un bloque de instrucciones varias veces** mientras se cumpla una **condicion**.

Gracias a esta estructura no tenemos que escribir muchas veces el mismo codigo: lo escribimos una sola vez y la computadora lo repite tantas veces como haga falta.

## Que es un bucle o ciclo

Un **bucle** (o **ciclo**) es ese **conjunto de instrucciones que se repite**. Todo bucle tiene tres elementos clave:

- Una **condicion de control**: la pregunta que se evalua para decidir si se repite o no.
- Un **cuerpo del bucle**: el bloque de instrucciones que se ejecuta en cada repeticion (cada repeticion se llama **iteracion** o **vuelta**).
- Una **forma de terminar**: el bucle **DEBE poder terminar** en algun momento. Para eso, dentro del cuerpo algo tiene que ir cambiando para que la condicion deje de cumplirse.

Si un bucle **nunca termina** (la condicion siempre se cumple y nada la modifica), tenemos un **bucle INFINITO**, que es un error: el programa se queda repitiendo para siempre y se cuelga.

Un esquema general de un ciclo es:

    +---------------------------+
    |   evaluar la condicion    |<----------+
    +---------------------------+           |
              |                             |
        se cumple? -- SI --> ejecutar el    |
              |              cuerpo del      |
              NO             bucle ----------+
              |
              v
        seguir el programa

## Tipos de estructuras iterativas

Existen tres tipos principales de estructuras iterativas. Se diferencian en **cuando** se evalua la condicion y en si conocemos o no la cantidad de repeticiones.

### 1. MIENTRAS (While-Do)

La estructura **Mientras** evalua la condicion **al INICIO**, antes de ejecutar el cuerpo. Mientras la condicion sea verdadera, repite; cuando se vuelve falsa, sale.

Como pregunta primero, el cuerpo se puede ejecutar **0 o mas veces**: si la condicion es falsa desde el comienzo, el bloque **no se ejecuta ninguna vez**.

    Mientras (condicion)
        instruccion 1
        instruccion 2
        ...
    FinMientras

### 2. REPETIR (Repeat-Until)

La estructura **Repetir** evalua la condicion **al FINAL**, despues de ejecutar el cuerpo. Por eso el bloque siempre se ejecuta **al menos una vez**.

Como evalua al final, el cuerpo se ejecuta **1 o mas veces**: aunque la condicion ya no se cumpla, igual entro una vez antes de preguntar.

    Repetir
        instruccion 1
        instruccion 2
        ...
    Hasta que (condicion)

### 3. PARA (For)

La estructura **Para** se usa cuando conocemos de antemano el **numero de repeticiones**, es decir, sabemos cuantas veces se va a repetir. Usa una **variable de control** que arranca en un valor inicial, avanza con un paso fijo en cada vuelta y termina al llegar a un valor final.

    Para i = 1 Hasta N
        instruccion 1
        instruccion 2
        ...
    FinPara

## Comparacion rapida

    ESTRUCTURA    EVALUA LA CONDICION    SE EJECUTA           CUANDO USARLA
    Mientras      al INICIO              0 o mas veces        no se sabe cuantas veces
    Repetir       al FINAL               1 o mas veces        al menos una vez seguro
    Para          (control automatico)   numero CONOCIDO      se sabe cuantas veces

## Relacion con contadores y acumuladores

Las estructuras iterativas se usan casi siempre junto con **contadores** y **acumuladores**:

- Un **contador** lleva la cuenta de cuantas vueltas se dieron, sumando una constante (por ejemplo 'contador = contador + 1') en cada iteracion.
- Un **acumulador** va juntando una suma de valores, sumando una variable (por ejemplo 'suma = suma + nro') en cada iteracion.

Ambos se **inicializan antes** de entrar al ciclo y se **actualizan dentro** de el. Ademas, modificar el contador o la variable de control es justamente lo que permite que la condicion termine cumpliendose y el bucle **finalice** correctamente.`,
  keyPoints: [
    "La estructura iterativa (ciclica o repetitiva) permite REPETIR un bloque de instrucciones mientras se cumpla una condicion.",
    "Un bucle o ciclo es el conjunto de instrucciones que se repite; tiene una condicion de control y DEBE poder terminar.",
    "Si la condicion nunca deja de cumplirse y nada la modifica, se produce un bucle INFINITO (un error).",
    "MIENTRAS (While-Do) evalua la condicion al INICIO y se ejecuta 0 o mas veces.",
    "REPETIR (Repeat-Until) evalua la condicion al FINAL y se ejecuta 1 o mas veces.",
    "PARA (For) se usa con un numero CONOCIDO de repeticiones y una variable de control; se combinan con contadores y acumuladores.",
  ],
  questions: [
    {
      id: "estructura-iterativa-q1",
      type: "mc",
      prompt: "Que permite hacer la estructura iterativa?",
      options: [
        "Tomar una decision entre dos caminos segun una condicion.",
        "Repetir un bloque de instrucciones varias veces mientras se cumpla una condicion.",
        "Ejecutar las instrucciones una sola vez, de arriba hacia abajo.",
        "Guardar un valor en una variable.",
      ],
      answerIndex: 1,
      accepted: [],
      explanation:
        "La estructura iterativa o ciclica sirve para REPETIR un bloque de instrucciones mientras se cumpla una condicion, sin tener que reescribir el codigo.",
      difficulty: "facil",
    },
    {
      id: "estructura-iterativa-q2",
      type: "mc",
      prompt: "Que es un bucle o ciclo?",
      options: [
        "Una variable que cuenta las vueltas.",
        "El conjunto de instrucciones que se repite, controlado por una condicion y que debe poder terminar.",
        "Un error que hace que el programa se cuelgue.",
        "La primera instruccion de un programa.",
      ],
      answerIndex: 1,
      accepted: [],
      explanation:
        "Un bucle o ciclo es el conjunto de instrucciones que se repite; tiene una condicion de control y debe poder terminar en algun momento.",
      difficulty: "facil",
    },
    {
      id: "estructura-iterativa-q3",
      type: "mc",
      prompt:
        "Cual de los tres tipos de estructura iterativa evalua la condicion al INICIO y puede ejecutarse 0 veces?",
      options: [
        "Repetir (Repeat-Until).",
        "Para (For).",
        "Mientras (While-Do).",
        "Ninguna, todas se ejecutan al menos una vez.",
      ],
      answerIndex: 2,
      accepted: [],
      explanation:
        "El Mientras (While-Do) evalua la condicion al inicio; si es falsa desde el comienzo, el cuerpo no se ejecuta ninguna vez (0 o mas veces).",
      difficulty: "media",
    },
    {
      id: "estructura-iterativa-q4",
      type: "mc",
      prompt:
        "Que estructura iterativa conviene usar cuando se conoce de antemano el numero exacto de repeticiones?",
      options: [
        "Mientras (While-Do).",
        "Para (For), con una variable de control.",
        "Repetir (Repeat-Until).",
        "La estructura secuencial.",
      ],
      answerIndex: 1,
      accepted: [],
      explanation:
        "El Para (For) se usa cuando el numero de repeticiones es conocido; emplea una variable de control que va del valor inicial al final.",
      difficulty: "media",
    },
    {
      id: "estructura-iterativa-q5",
      type: "vf",
      prompt:
        "La estructura Repetir (Repeat-Until) evalua la condicion al final, por lo que su cuerpo siempre se ejecuta al menos una vez.",
      options: ["Verdadero", "Falso"],
      answerIndex: 0,
      accepted: [],
      explanation:
        "Como Repetir pregunta la condicion al final, el bloque se ejecuta primero y por eso corre 1 o mas veces (al menos una vez seguro).",
      difficulty: "media",
    },
    {
      id: "estructura-iterativa-q6",
      type: "vf",
      prompt:
        "Un bucle infinito es deseable porque permite que el programa nunca se detenga.",
      options: ["Verdadero", "Falso"],
      answerIndex: 1,
      accepted: [],
      explanation:
        "Es falso: el bucle infinito es un error. Todo ciclo DEBE poder terminar; si la condicion nunca deja de cumplirse, el programa se cuelga.",
      difficulty: "facil",
    },
    {
      id: "estructura-iterativa-q7",
      type: "vf",
      prompt:
        "En la estructura Mientras (While-Do), si la condicion es falsa desde el comienzo, el cuerpo del bucle no se ejecuta ninguna vez.",
      options: ["Verdadero", "Falso"],
      answerIndex: 0,
      accepted: [],
      explanation:
        "Verdadero: como el Mientras evalua la condicion al inicio, si arranca falsa el bloque se ejecuta 0 veces.",
      difficulty: "media",
    },
    {
      id: "estructura-iterativa-q8",
      type: "fill",
      prompt:
        "El conjunto de instrucciones que se repite dentro de una estructura iterativa se llama bucle o ____.",
      options: [],
      answerIndex: -1,
      accepted: ["ciclo"],
      explanation:
        "Bucle y ciclo son sinonimos: nombran al conjunto de instrucciones que se repite mientras se cumple la condicion.",
      difficulty: "facil",
    },
    {
      id: "estructura-iterativa-q9",
      type: "fill",
      prompt:
        "Un bucle que nunca termina porque su condicion siempre se cumple se llama bucle ____.",
      options: [],
      answerIndex: -1,
      accepted: ["infinito"],
      explanation:
        "Es un bucle infinito: ocurre cuando nada modifica la condicion de control, por lo que el ciclo no puede terminar nunca.",
      difficulty: "facil",
    },
  ],
  flashcards: [
    {
      id: "estructura-iterativa-f1",
      front: "Que es la estructura iterativa?",
      back: "Una estructura de control que permite REPETIR un bloque de instrucciones varias veces mientras se cumpla una condicion. Tambien se llama ciclica o repetitiva.",
    },
    {
      id: "estructura-iterativa-f2",
      front: "Que es un bucle o ciclo y que debe cumplir?",
      back: "Es el conjunto de instrucciones que se repite. Tiene una condicion de control y DEBE poder terminar; si no, es un bucle infinito (error).",
    },
    {
      id: "estructura-iterativa-f3",
      front: "Cuales son los tres tipos de estructuras iterativas?",
      back: "Mientras (While-Do), Repetir (Repeat-Until) y Para (For).",
    },
    {
      id: "estructura-iterativa-f4",
      front: "Como funciona la estructura Mientras (While-Do)?",
      back: "Evalua la condicion al INICIO, antes del cuerpo. Se ejecuta 0 o mas veces: si la condicion es falsa desde el comienzo, no entra nunca.",
    },
    {
      id: "estructura-iterativa-f5",
      front: "Como funciona la estructura Repetir (Repeat-Until)?",
      back: "Evalua la condicion al FINAL, despues del cuerpo. Se ejecuta 1 o mas veces: siempre entra al menos una vez.",
    },
    {
      id: "estructura-iterativa-f6",
      front: "Cuando se usa la estructura Para (For)?",
      back: "Cuando se conoce de antemano el numero de repeticiones. Usa una variable de control que va del valor inicial al final con un paso fijo.",
    },
    {
      id: "estructura-iterativa-f7",
      front: "Que relacion tienen los ciclos con contadores y acumuladores?",
      back: "Dentro de un ciclo el contador suma una constante (cuenta vueltas) y el acumulador suma una variable (totaliza). Se inicializan antes y se actualizan dentro del ciclo.",
    },
  ],
  matchPairs: [
    {
      term: "Estructura iterativa",
      definition:
        "Estructura de control que repite un bloque de instrucciones mientras se cumpla una condicion.",
    },
    {
      term: "Bucle o ciclo",
      definition:
        "Conjunto de instrucciones que se repite; tiene condicion de control y debe poder terminar.",
    },
    {
      term: "Bucle infinito",
      definition:
        "Ciclo que nunca termina porque la condicion siempre se cumple; es un error.",
    },
    {
      term: "Mientras (While-Do)",
      definition:
        "Evalua la condicion al inicio; se ejecuta 0 o mas veces.",
    },
    {
      term: "Repetir (Repeat-Until)",
      definition:
        "Evalua la condicion al final; se ejecuta 1 o mas veces.",
    },
    {
      term: "Para (For)",
      definition:
        "Se usa con un numero conocido de repeticiones; usa una variable de control.",
    },
  ],
  orderChallenge: {
    id: "estructura-iterativa-order",
    title: "Ordena los pasos de la ejecucion de un ciclo Mientras (While-Do)",
    steps: [
      "Inicializar las variables que controla el ciclo antes de entrar (por ejemplo el contador).",
      "Evaluar la condicion de control al inicio del ciclo.",
      "Si la condicion es verdadera, ejecutar el cuerpo del bucle.",
      "Actualizar dentro del cuerpo lo que cambia la condicion (por ejemplo incrementar el contador).",
      "Volver a evaluar la condicion para decidir si se repite.",
      "Cuando la condicion es falsa, salir del ciclo y seguir el programa.",
    ],
  },
  terms: ["ITERATIVA", "BUCLE", "CICLO", "MIENTRAS", "REPETIR", "INFINITO"],
};

export default topic;
