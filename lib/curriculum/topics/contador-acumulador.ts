import type { Topic } from "../types";

const topic: Topic = {
  id: "contador-acumulador",
  number: 11,
  module: "datos",
  title: "Contador y Acumulador",
  short: "Contador suma una cantidad fija; acumulador suma una cantidad variable dentro de un ciclo.",
  theory: `Cuando trabajamos con **ciclos** (bucles), muchas veces necesitamos llevar la cuenta de cuantas veces hicimos algo, o ir juntando una suma de valores. Para eso usamos dos tipos de variables muy comunes: el **contador** y el **acumulador**.

## Que es un contador

Un **contador** es una variable que se usa para **contar**. Dentro de un ciclo, en cada vuelta (iteracion) cambia su valor **sumando o restando una CONSTANTE**, es decir, **siempre la misma cantidad**. Lo mas comun es sumar de a uno (+1).

Su sintaxis general es:

    contador = contador + constante

Por ejemplo:

    contador = contador + 1   // cuenta hacia arriba, de a uno
    contador = contador - 1   // cuenta hacia abajo, de a uno

La clave es que la cantidad que se suma o resta **no cambia nunca**: siempre es la misma (1, 2, 5, lo que sea, pero fija).

## Que es un acumulador

Un **acumulador** es una variable que se usa para **sumar valores**. Dentro de un ciclo, en cada vuelta cambia su valor **sumando una VARIABLE**, es decir, una **cantidad que puede variar** de una iteracion a otra.

Su sintaxis general es:

    acumulador = acumulador + variable

Por ejemplo, si en cada vuelta el usuario ingresa un numero distinto y lo queremos ir sumando:

    suma = suma + nro

Aca 'nro' puede valer 3 en una vuelta, 10 en la siguiente y 7 en la otra: la cantidad que se suma **cambia** segun el valor de la variable.

## La diferencia clave

La diferencia entre ambos esta en **cuanto cambia** la variable en cada vuelta del ciclo:

- El **contador** aumenta o disminuye en una cantidad **FIJA** (una constante, casi siempre +1).
- El **acumulador** aumenta en una cantidad **VARIABLE** (el valor de otra variable, que puede ser distinto cada vez).

Lo podemos ver lado a lado:

    CONTADOR                          ACUMULADOR
    contador = contador + 1           suma = suma + nro
    siempre suma lo mismo (fijo)      suma algo que puede variar
    sirve para contar                 sirve para totalizar / sumar

## La inicializacion: el paso que no hay que olvidar

Tanto el contador como el acumulador **se INICIALIZAN antes de entrar al ciclo**. Si no les damos un valor inicial, no tienen un punto de partida para empezar a sumar.

- El **contador** se inicializa en **0** (si vamos a contar desde la primera vuelta) o en **1**, segun el problema.
- El **acumulador** se inicializa en **0** cuando vamos a **sumar** valores.
- Si el acumulador va a **acumular productos** (multiplicaciones), se inicializa en **1**, porque cualquier numero multiplicado por 0 daria 0 y arruinaria el calculo.

Un esquema general del uso dentro de un ciclo se veria asi:

    contador = 0          // inicializo el contador (afuera del ciclo)
    suma = 0              // inicializo el acumulador (afuera del ciclo)

    Mientras (haya datos)
        leer nro
        suma = suma + nro          // ACUMULADOR: sumo una variable
        contador = contador + 1    // CONTADOR: sumo una constante (+1)
    FinMientras

    // al terminar:
    // contador tiene la cantidad de numeros leidos
    // suma tiene el total de todos los numeros

Con este patron podemos, por ejemplo, contar **cuantos** numeros ingreso el usuario (contador) y, al mismo tiempo, calcular **la suma total** de esos numeros (acumulador). Incluso podriamos calcular el promedio dividiendo la suma por la cantidad.`,
  keyPoints: [
    "Contador: variable para contar; cambia sumando o restando una CONSTANTE (cantidad fija), lo mas comun +1.",
    "Acumulador: variable para sumar valores; cambia sumando una VARIABLE (cantidad que puede variar).",
    "Sintaxis del contador: 'contador = contador + constante'; del acumulador: 'acumulador = acumulador + variable'.",
    "Diferencia clave: el contador cambia en una cantidad FIJA y el acumulador en una cantidad VARIABLE.",
    "Ambos se INICIALIZAN antes del ciclo: contador en 0 o 1; acumulador en 0.",
    "Si el acumulador acumula productos (multiplicaciones) se inicializa en 1, no en 0.",
  ],
  questions: [
    {
      id: "contador-acumulador-q1",
      type: "mc",
      prompt: "Que es un contador?",
      options: [
        "Una variable que suma una cantidad que puede variar en cada vuelta del ciclo.",
        "Una variable que se usa para contar y cambia sumando o restando una constante (siempre la misma cantidad).",
        "Una variable que solo puede valer 0 o 1.",
        "Una variable que guarda el ultimo numero ingresado por el usuario.",
      ],
      answerIndex: 1,
      accepted: [],
      explanation:
        "El contador se usa para contar: dentro del ciclo cambia su valor sumando o restando una constante (cantidad fija), lo mas comun +1.",
      difficulty: "facil",
    },
    {
      id: "contador-acumulador-q2",
      type: "mc",
      prompt: "Que es un acumulador?",
      options: [
        "Una variable que siempre suma de a uno.",
        "Una variable que se usa para sumar valores y cambia sumando una variable (cantidad que puede variar).",
        "Una variable que cuenta cuantas vueltas dio el ciclo.",
        "Una constante que no cambia durante todo el programa.",
      ],
      answerIndex: 1,
      accepted: [],
      explanation:
        "El acumulador se usa para sumar valores: en cada vuelta suma una variable, es decir una cantidad que puede variar de una iteracion a otra.",
      difficulty: "facil",
    },
    {
      id: "contador-acumulador-q3",
      type: "mc",
      prompt:
        "Cual es la diferencia principal entre un contador y un acumulador?",
      options: [
        "El contador se usa antes del ciclo y el acumulador despues.",
        "El contador suma una cantidad fija (constante) y el acumulador suma una cantidad variable.",
        "El contador solo resta y el acumulador solo suma.",
        "No hay ninguna diferencia, son sinonimos.",
      ],
      answerIndex: 1,
      accepted: [],
      explanation:
        "La diferencia clave es cuanto cambian: el contador aumenta o disminuye en una cantidad FIJA y el acumulador en una cantidad VARIABLE.",
      difficulty: "media",
    },
    {
      id: "contador-acumulador-q4",
      type: "mc",
      prompt:
        "Si un acumulador se va a usar para acumular PRODUCTOS (multiplicaciones), en que valor conviene inicializarlo?",
      options: [
        "En 0, como cualquier acumulador.",
        "En 1, porque multiplicar por 0 daria siempre 0.",
        "En el primer numero del ciclo.",
        "Da igual, se inicializa en cualquier numero.",
      ],
      answerIndex: 1,
      accepted: [],
      explanation:
        "Si acumula productos se inicializa en 1; si arrancara en 0, cualquier multiplicacion daria 0 y arruinaria el calculo.",
      difficulty: "dificil",
    },
    {
      id: "contador-acumulador-q5",
      type: "vf",
      prompt:
        "Tanto el contador como el acumulador deben inicializarse antes de entrar al ciclo.",
      options: ["Verdadero", "Falso"],
      answerIndex: 0,
      accepted: [],
      explanation:
        "Ambos se inicializan antes del ciclo: el contador en 0 o 1 y el acumulador en 0 (o en 1 si acumula productos), para tener un punto de partida.",
      difficulty: "facil",
    },
    {
      id: "contador-acumulador-q6",
      type: "vf",
      prompt:
        "La instruccion 'suma = suma + nro' es un ejemplo de contador, porque suma siempre la misma cantidad.",
      options: ["Verdadero", "Falso"],
      answerIndex: 1,
      accepted: [],
      explanation:
        "Es un acumulador: 'nro' es una variable cuyo valor puede cambiar en cada vuelta, no una constante fija.",
      difficulty: "media",
    },
    {
      id: "contador-acumulador-q7",
      type: "vf",
      prompt:
        "La forma mas comun de un contador es sumar de a uno: 'contador = contador + 1'.",
      options: ["Verdadero", "Falso"],
      answerIndex: 0,
      accepted: [],
      explanation:
        "El contador cambia sumando una constante y lo mas comun es +1, aunque tambien puede restar (contador = contador - 1) o usar otra constante fija.",
      difficulty: "facil",
    },
    {
      id: "contador-acumulador-q8",
      type: "fill",
      prompt:
        "La variable que se usa para sumar valores y cambia sumando una cantidad que puede variar se llama ____.",
      options: [],
      answerIndex: -1,
      accepted: ["acumulador"],
      explanation:
        "El acumulador suma en cada vuelta una variable (cantidad variable), a diferencia del contador que suma una constante fija.",
      difficulty: "facil",
    },
    {
      id: "contador-acumulador-q9",
      type: "fill",
      prompt:
        "Para empezar a sumar valores, un acumulador normalmente se inicializa en el numero ____ antes del ciclo.",
      options: [],
      answerIndex: -1,
      accepted: ["0", "cero"],
      explanation:
        "El acumulador que suma valores arranca en 0 para no alterar el total; solo se inicializa en 1 cuando acumula productos.",
      difficulty: "media",
    },
  ],
  flashcards: [
    {
      id: "contador-acumulador-f1",
      front: "Que es un contador?",
      back: "Una variable que se usa para contar; dentro de un ciclo cambia su valor sumando o restando una constante (cantidad fija), lo mas comun +1.",
    },
    {
      id: "contador-acumulador-f2",
      front: "Que es un acumulador?",
      back: "Una variable que se usa para sumar valores; dentro de un ciclo cambia su valor sumando una variable (cantidad que puede variar).",
    },
    {
      id: "contador-acumulador-f3",
      front: "Cual es la diferencia entre contador y acumulador?",
      back: "El contador aumenta o disminuye en una cantidad FIJA (constante); el acumulador lo hace en una cantidad VARIABLE.",
    },
    {
      id: "contador-acumulador-f4",
      front: "Como es la sintaxis de un contador y de un acumulador?",
      back: "Contador: 'contador = contador + constante' (ej. contador = contador + 1). Acumulador: 'acumulador = acumulador + variable' (ej. suma = suma + nro).",
    },
    {
      id: "contador-acumulador-f5",
      front: "Donde y con que valor se inicializa un contador?",
      back: "Antes del ciclo, en 0 (o en 1 segun el problema). Sin inicializar no tiene punto de partida.",
    },
    {
      id: "contador-acumulador-f6",
      front: "Donde y con que valor se inicializa un acumulador?",
      back: "Antes del ciclo, en 0 cuando suma valores; en 1 si acumula productos (multiplicaciones), para no anular el resultado.",
    },
  ],
  matchPairs: [
    {
      term: "Contador",
      definition:
        "Variable para contar; cambia sumando o restando una constante (cantidad fija), lo mas comun +1.",
    },
    {
      term: "Acumulador",
      definition:
        "Variable para sumar valores; cambia sumando una variable (cantidad que puede variar).",
    },
    {
      term: "Constante",
      definition:
        "Cantidad fija que se suma o resta en un contador; siempre es la misma.",
    },
    {
      term: "Inicializar",
      definition:
        "Darle el valor de partida (0 o 1) antes del ciclo a un contador o acumulador.",
    },
    {
      term: "contador = contador + 1",
      definition:
        "Ejemplo tipico de contador que suma de a uno en cada vuelta.",
    },
    {
      term: "suma = suma + nro",
      definition:
        "Ejemplo tipico de acumulador que suma el valor variable de nro.",
    },
  ],
  orderChallenge: {
    id: "contador-acumulador-order",
    title:
      "Ordena los pasos para contar y sumar numeros ingresados en un ciclo",
    steps: [
      "Inicializar el contador en 0 antes del ciclo.",
      "Inicializar el acumulador (suma) en 0 antes del ciclo.",
      "Entrar al ciclo y leer el numero (nro) que ingresa el usuario.",
      "Acumular el valor leido: suma = suma + nro.",
      "Incrementar el contador en una constante: contador = contador + 1.",
      "Al terminar el ciclo, mostrar la cantidad (contador) y el total (suma).",
    ],
  },
  terms: ["CONTADOR", "ACUMULADOR", "CONSTANTE", "VARIABLE", "INICIALIZAR", "CICLO"],
};

export default topic;
