import type { Topic } from "../types";

const topic: Topic = {
  id: "operadores",
  number: 15,
  module: "datos",
  title: "Operadores y Prioridad",
  short: "Simbolos que operan y combinan datos; orden de prioridad de los aritmeticos.",
  theory: `Los **operadores** son simbolos que permiten **realizar operaciones y manipular datos y variables**. Con ellos podemos combinar valores, hacer calculos, comparar informacion y tomar decisiones dentro de un algoritmo. Por ejemplo, el simbolo '+' suma dos numeros y el simbolo '>' compara si uno es mayor que otro.

Los valores sobre los que actua un operador se llaman **operandos**. En la expresion 'a + b', los operandos son 'a' y 'b', y el operador es '+'.

## Tipos de operadores

Segun la clase de operacion que realizan, los operadores se agrupan en cuatro tipos principales.

### 1. Operadores aritmeticos

Permiten hacer **calculos matematicos** con datos numericos. El resultado es un numero.

- **+** suma
- **-** resta
- **\*** multiplicacion
- **/** division
- **^** potencia (exponente)
- **MOD** o **%** modulo (resto de la division entera)

El **modulo** devuelve lo que sobra de una division entera. Por ejemplo, 7 MOD 3 = 1, porque 7 dividido 3 da 2 y sobra 1.

### 2. Operadores relacionales (o de comparacion)

Permiten **comparar dos valores**. El resultado siempre es un valor logico: Verdadero o Falso.

- **>** mayor que
- **<** menor que
- **>=** mayor o igual que
- **<=** menor o igual que
- **=** igual a
- **<>** distinto de

### 3. Operadores logicos

Permiten **combinar condiciones** y trabajar con valores Verdadero/Falso para **tomar decisiones**.

- **AND** (Y): es Verdadero solo si ambas condiciones son Verdaderas.
- **OR** (O): es Verdadero si al menos una condicion es Verdadera.
- **NOT** (NO): invierte el valor; convierte Verdadero en Falso y viceversa.

### 4. Operadores de asignacion

Permiten **guardar un valor en una variable**. Se escriben con la flecha '<-' o con el signo '=', segun el pseudocodigo o lenguaje. Por ejemplo, 'edad <- 18' guarda el valor 18 en la variable 'edad'.

## Prioridad de los operadores aritmeticos

Cuando una expresion tiene varios operadores, no se evaluan en cualquier orden: existe una **prioridad** (tambien llamada precedencia) que define cuales se resuelven primero. De **MAYOR a menor** prioridad, el orden es:

1. **Parentesis** ( )  -> se resuelven primero, de adentro hacia afuera
2. **Potencia / exponente** ^
3. **Multiplicacion y division** \* /
4. **Modulo** MOD
5. **Suma y resta** + -

Esquema visual del orden de prioridad:

    MAYOR PRIORIDAD
    |
    |  1)  ( )        parentesis
    |  2)  ^          potencia
    |  3)  *  /       multiplicacion y division
    |  4)  MOD        modulo (resto)
    |  5)  +  -       suma y resta
    |
    MENOR PRIORIDAD

**Regla a igual prioridad:** si dos operadores tienen el mismo nivel, la expresion se evalua de **IZQUIERDA a DERECHA**. Por ejemplo, en '10 - 4 - 2' primero se hace '10 - 4 = 6' y luego '6 - 2 = 4'.

## Ejemplo de evaluacion paso a paso

Veamos como cambia el resultado segun haya o no parentesis.

Expresion sin parentesis: 2 + 3 \* 4

    2 + 3 * 4
    = 2 + (3 * 4)     primero la multiplicacion (mayor prioridad)
    = 2 + 12
    = 14

Expresion con parentesis: (2 + 3) \* 4

    (2 + 3) * 4
    = 5 * 4           el parentesis se resuelve primero
    = 20

Aunque los numeros son los mismos, el resultado cambia (14 contra 20) porque el parentesis altera el orden de evaluacion. Por eso los parentesis son una herramienta clave para indicar con claridad que queremos calcular primero.`,
  keyPoints: [
    "Los operadores son simbolos que permiten operar y manipular datos, combinar valores y tomar decisiones.",
    "Hay cuatro tipos: aritmeticos, relacionales (comparacion), logicos y de asignacion.",
    "Aritmeticos: + - * / ^ (potencia) y MOD o % (modulo/resto).",
    "Prioridad aritmetica de mayor a menor: parentesis, potencia ^, multiplicacion/division, modulo, suma/resta.",
    "A igual prioridad, la expresion se evalua de izquierda a derecha.",
    "Los parentesis cambian el resultado: 2 + 3 * 4 = 14, pero (2 + 3) * 4 = 20.",
  ],
  questions: [
    {
      id: "operadores-q1",
      type: "mc",
      prompt: "Que permiten los operadores en un algoritmo?",
      options: [
        "Solo guardar valores en la memoria de la computadora.",
        "Realizar operaciones y manipular datos, combinar valores y tomar decisiones.",
        "Unicamente comparar dos numeros entre si.",
        "Crear variables nuevas de forma automatica.",
      ],
      answerIndex: 1,
      accepted: [],
      explanation:
        "Los operadores permiten realizar operaciones y manipular datos y variables, combinar valores y tomar decisiones dentro de un programa.",
      difficulty: "facil",
    },
    {
      id: "operadores-q2",
      type: "mc",
      prompt: "Cuales son los cuatro tipos principales de operadores?",
      options: [
        "Simples, dobles, triples y compuestos.",
        "Enteros, reales, caracteres y logicos.",
        "Aritmeticos, relacionales (comparacion), logicos y de asignacion.",
        "Suma, resta, multiplicacion y division.",
      ],
      answerIndex: 2,
      accepted: [],
      explanation:
        "Los operadores se clasifican en aritmeticos, relacionales o de comparacion, logicos y de asignacion.",
      difficulty: "facil",
    },
    {
      id: "operadores-q3",
      type: "mc",
      prompt:
        "Cual es el orden de prioridad de los operadores aritmeticos, de MAYOR a menor?",
      options: [
        "Suma/resta, modulo, multiplicacion/division, potencia, parentesis.",
        "Parentesis, potencia, multiplicacion/division, modulo, suma/resta.",
        "Potencia, parentesis, suma/resta, multiplicacion/division, modulo.",
        "Parentesis, suma/resta, potencia, multiplicacion/division, modulo.",
      ],
      answerIndex: 1,
      accepted: [],
      explanation:
        "De mayor a menor prioridad: 1) parentesis, 2) potencia ^, 3) multiplicacion y division, 4) modulo MOD, 5) suma y resta.",
      difficulty: "media",
    },
    {
      id: "operadores-q4",
      type: "mc",
      prompt: "Cuanto vale la expresion 2 + 3 * 4?",
      options: [
        "20, porque se resuelve de izquierda a derecha.",
        "14, porque la multiplicacion tiene mayor prioridad que la suma.",
        "24, porque se multiplica todo junto.",
        "9, porque la suma va primero.",
      ],
      answerIndex: 1,
      accepted: [],
      explanation:
        "La multiplicacion tiene mayor prioridad: primero 3 * 4 = 12 y luego 2 + 12 = 14.",
      difficulty: "media",
    },
    {
      id: "operadores-q5",
      type: "vf",
      prompt:
        "Los parentesis tienen la mayor prioridad: lo que esta dentro de ellos se resuelve primero.",
      options: ["Verdadero", "Falso"],
      answerIndex: 0,
      accepted: [],
      explanation:
        "Los parentesis encabezan el orden de prioridad, por eso siempre se evaluan antes que el resto de los operadores.",
      difficulty: "facil",
    },
    {
      id: "operadores-q6",
      type: "vf",
      prompt:
        "Cuando dos operadores tienen la misma prioridad, la expresion se evalua de derecha a izquierda.",
      options: ["Verdadero", "Falso"],
      answerIndex: 1,
      accepted: [],
      explanation:
        "A igual prioridad la evaluacion se hace de izquierda a derecha, no de derecha a izquierda.",
      difficulty: "media",
    },
    {
      id: "operadores-q7",
      type: "vf",
      prompt:
        "Las expresiones 2 + 3 * 4 y (2 + 3) * 4 dan el mismo resultado.",
      options: ["Verdadero", "Falso"],
      answerIndex: 1,
      accepted: [],
      explanation:
        "Dan resultados distintos: 2 + 3 * 4 = 14, mientras que (2 + 3) * 4 = 20, porque el parentesis cambia el orden de evaluacion.",
      difficulty: "media",
    },
    {
      id: "operadores-q8",
      type: "fill",
      prompt:
        "El operador aritmetico que devuelve el resto de una division entera se llama ____.",
      options: [],
      answerIndex: -1,
      accepted: ["modulo", "mod"],
      explanation:
        "El modulo (MOD o %) devuelve el resto de la division entera; por ejemplo, 7 MOD 3 = 1.",
      difficulty: "media",
    },
    {
      id: "operadores-q9",
      type: "fill",
      prompt:
        "Los operadores ____ permiten comparar dos valores y su resultado es Verdadero o Falso.",
      options: [],
      answerIndex: -1,
      accepted: ["relacionales", "de comparacion", "comparacion"],
      explanation:
        "Los operadores relacionales o de comparacion (>, <, >=, <=, =, <>) comparan dos valores y devuelven un valor logico.",
      difficulty: "dificil",
    },
  ],
  flashcards: [
    {
      id: "operadores-f1",
      front: "Que es un operador?",
      back: "Un simbolo que permite realizar operaciones y manipular datos: combinar valores, calcular, comparar y tomar decisiones.",
    },
    {
      id: "operadores-f2",
      front: "Cuales son los cuatro tipos de operadores?",
      back: "Aritmeticos, relacionales (comparacion), logicos y de asignacion.",
    },
    {
      id: "operadores-f3",
      front: "Cuales son los operadores aritmeticos?",
      back: "Suma (+), resta (-), multiplicacion (*), division (/), potencia (^) y modulo (MOD o %).",
    },
    {
      id: "operadores-f4",
      front: "Orden de prioridad aritmetica de mayor a menor",
      back: "1) Parentesis ( ), 2) Potencia ^, 3) Multiplicacion y division * /, 4) Modulo MOD, 5) Suma y resta + -.",
    },
    {
      id: "operadores-f5",
      front: "Que pasa cuando dos operadores tienen igual prioridad?",
      back: "La expresion se evalua de izquierda a derecha.",
    },
    {
      id: "operadores-f6",
      front: "Cuanto valen 2 + 3 * 4 y (2 + 3) * 4?",
      back: "2 + 3 * 4 = 14 (multiplica primero); (2 + 3) * 4 = 20 (el parentesis va primero).",
    },
    {
      id: "operadores-f7",
      front: "Que hace el operador modulo (MOD)?",
      back: "Devuelve el resto de la division entera. Por ejemplo, 7 MOD 3 = 1.",
    },
  ],
  matchPairs: [
    {
      term: "Aritmeticos",
      definition: "Hacen calculos matematicos: + - * / ^ y MOD (resto).",
    },
    {
      term: "Relacionales",
      definition: "Comparan dos valores y dan Verdadero o Falso: > < >= <= = <>.",
    },
    {
      term: "Logicos",
      definition: "Combinan condiciones para decidir: AND (Y), OR (O), NOT (NO).",
    },
    {
      term: "Asignacion",
      definition: "Guardan un valor en una variable con la flecha <- o el signo =.",
    },
    {
      term: "Modulo (MOD)",
      definition: "Operador que devuelve el resto de la division entera.",
    },
    {
      term: "Parentesis",
      definition: "Tienen la mayor prioridad: lo de adentro se resuelve primero.",
    },
  ],
  orderChallenge: {
    id: "operadores-order",
    title: "Ordena los operadores aritmeticos de MAYOR a menor prioridad",
    steps: [
      "Parentesis ( )",
      "Potencia / exponente ^",
      "Multiplicacion y division * /",
      "Modulo MOD",
      "Suma y resta + -",
    ],
  },
  terms: ["OPERADOR", "ARITMETICO", "MODULO", "POTENCIA", "PARENTESIS", "LOGICO"],
};

export default topic;
