import type { Topic } from "../types";

const topic: Topic = {
  id: "estructura-decision",
  number: 20,
  module: "estructuras",
  title: "Estructura de Decision",
  short:
    "Estructura selectiva: elige un camino segun una condicion (simple, doble o multiple).",
  theory: `La **estructura de decision** (tambien llamada **estructura selectiva** o **condicional**) es la que permite **elegir entre dos o mas caminos** segun el resultado de una **condicion** que se evalua como **verdadera (V)** o **falsa (F)**. Segun ese resultado, el programa ejecuta unas acciones u otras.

En un **diagrama de flujo** la decision se representa con un **rombo**: dentro del rombo va la **pregunta** o condicion, y de el salen dos ramas, una para el camino **SI (verdadero)** y otra para el camino **NO (falso)**.

## Tipos de estructura de decision

Existen **tres** tipos: **simple**, **doble** y **multiple**.

## 1) Decision simple (Si... Entonces)

Ejecuta un bloque de acciones **solo si** la condicion es **verdadera**. Si la condicion es falsa, no hace nada y el programa sigue de largo. Su forma en pseudocodigo es:

    Si <condicion> Entonces
        <acciones>
    FinSi

Esquema del rombo (decision simple):

         +-------------+
         | condicion?  |
         +------+------+
          V     |     F
          |     +----------> (sigue sin hacer nada)
          v
       <acciones>
          |
          v
       (continua)

**Ejemplo:** si una persona tiene 18 anios o mas, mostrar que es mayor de edad. Si no llega a 18, no se muestra nada.

    Si edad >= 18 Entonces
        mostrar "mayor de edad"
    FinSi

## 2) Decision doble (Si... Entonces... Sino)

Elige entre **un camino u otro**: ejecuta un bloque de acciones si la condicion es **verdadera** y **otro bloque distinto** si es **falsa**. Siempre se ejecuta exactamente uno de los dos caminos. Su forma en pseudocodigo es:

    Si <condicion> Entonces
        <acciones1>
    Sino
        <acciones2>
    FinSi

Esquema del rombo (decision doble):

              +-------------+
              | condicion?  |
              +------+------+
            V        |        F
            v        |        v
       <acciones1>   |   <acciones2>
            |        |        |
            +--------+--------+
                     v
                 (continua)

**Ejemplo:** segun la edad, decir si la persona es mayor o menor de edad.

    Si edad >= 18 Entonces
        mostrar "mayor de edad"
    Sino
        mostrar "menor de edad"
    FinSi

## 3) Decision multiple (Segun... / casos)

Elige entre **varias opciones** posibles segun el **valor de una variable**. Evita encadenar muchos 'Si' anidados. Su forma tipica en pseudocodigo es:

    Segun <variable> Hacer
        caso valor1: <acciones1>
        caso valor2: <acciones2>
        caso valor3: <acciones3>
        ...
        De Otro Modo: <acciones por defecto>
    FinSegun

Tambien puede escribirse como **varios 'Si' anidados** (un 'Si' dentro del 'Sino' de otro), pero la forma 'Segun' es mas clara cuando se compara una misma variable contra varios valores.

**Ejemplo:** mostrar el dia de la semana segun un numero.

    Segun dia Hacer
        caso 1: mostrar "Lunes"
        caso 2: mostrar "Martes"
        caso 3: mostrar "Miercoles"
        De Otro Modo: mostrar "Otro dia"
    FinSegun

## Para el parcial

- La estructura de decision (selectiva) **elige** un camino segun una **condicion** que da **verdadero o falso**.
- En el diagrama de flujo se representa con el **rombo**.
- Hay **tres tipos**: **simple** ('Si...Entonces'), **doble** ('Si...Entonces...Sino') y **multiple** ('Segun...' o varios 'Si' anidados).
- En la **simple** las acciones se ejecutan **solo si** la condicion es verdadera; en la **doble** se ejecuta **un camino u otro**; en la **multiple** se elige entre **varias opciones**.`,
  keyPoints: [
    "La estructura de decision (selectiva o condicional) elige un camino segun una condicion verdadera o falsa.",
    "En el diagrama de flujo se representa con el rombo, con ramas SI (verdadero) y NO (falso).",
    "Decision simple: 'Si <condicion> Entonces <acciones> FinSi'; ejecuta solo si la condicion es verdadera.",
    "Decision doble: 'Si <condicion> Entonces <acciones1> Sino <acciones2> FinSi'; un camino u otro.",
    "Decision multiple: 'Segun <variable> Hacer ... / casos' o varios Si anidados; elige entre varias opciones.",
    "Ejemplo clasico: si edad >= 18 mostrar 'mayor de edad', sino 'menor de edad'.",
  ],
  questions: [
    {
      id: "estructura-decision-q1",
      type: "mc",
      prompt:
        "Que permite hacer la estructura de decision (selectiva)?",
      options: [
        "Elegir entre dos o mas caminos segun una condicion verdadera o falsa.",
        "Repetir un bloque mientras se cumpla una condicion.",
        "Ejecutar las instrucciones una tras otra, en orden.",
        "Guardar varios valores en una sola variable.",
      ],
      answerIndex: 0,
      accepted: [],
      explanation:
        "La estructura de decision elige un camino segun el resultado (verdadero o falso) de una condicion; repetir es de la iterativa.",
      difficulty: "facil",
    },
    {
      id: "estructura-decision-q2",
      type: "mc",
      prompt:
        "Con que simbolo se representa la decision en un diagrama de flujo?",
      options: [
        "El rombo.",
        "El rectangulo.",
        "El ovalo.",
        "El paralelogramo.",
      ],
      answerIndex: 0,
      accepted: [],
      explanation:
        "La decision se representa con el rombo: dentro va la condicion y de el salen las ramas SI (verdadero) y NO (falso).",
      difficulty: "facil",
    },
    {
      id: "estructura-decision-q3",
      type: "mc",
      prompt:
        "Cuales son los tres tipos de estructura de decision?",
      options: [
        "Simple, doble y multiple.",
        "Mientras, repetir y para.",
        "Entrada, proceso y salida.",
        "Secuencial, selectiva e iterativa.",
      ],
      answerIndex: 0,
      accepted: [],
      explanation:
        "La estructura de decision puede ser simple (un camino), doble (dos caminos) o multiple (varias opciones).",
      difficulty: "media",
    },
    {
      id: "estructura-decision-q4",
      type: "mc",
      prompt:
        "Que hace la decision simple 'Si <condicion> Entonces <acciones> FinSi'?",
      options: [
        "Ejecuta las acciones solo si la condicion es verdadera; si es falsa, no hace nada.",
        "Ejecuta un bloque si la condicion es verdadera y otro distinto si es falsa.",
        "Repite las acciones mientras la condicion sea verdadera.",
        "Elige entre varios valores de una variable.",
      ],
      answerIndex: 0,
      accepted: [],
      explanation:
        "En la decision simple las acciones se ejecutan unicamente cuando la condicion es verdadera; si es falsa el programa sigue de largo.",
      difficulty: "media",
    },
    {
      id: "estructura-decision-q5",
      type: "mc",
      prompt:
        "Que palabra se agrega en la decision doble para indicar el camino del caso falso?",
      options: [
        "Sino",
        "Mientras",
        "Segun",
        "FinSi",
      ],
      answerIndex: 0,
      accepted: [],
      explanation:
        "La decision doble usa 'Sino' para el camino que se ejecuta cuando la condicion es falsa: 'Si...Entonces...Sino...FinSi'.",
      difficulty: "media",
    },
    {
      id: "estructura-decision-q6",
      type: "vf",
      prompt:
        "En la decision simple, si la condicion es falsa no se ejecuta ninguna accion del bloque.",
      options: ["Verdadero", "Falso"],
      answerIndex: 0,
      accepted: [],
      explanation:
        "Verdadero: la decision simple ('Si...Entonces') solo ejecuta sus acciones cuando la condicion es verdadera; si es falsa no hace nada.",
      difficulty: "facil",
    },
    {
      id: "estructura-decision-q7",
      type: "vf",
      prompt:
        "La estructura de decision multiple sirve para repetir un bloque muchas veces.",
      options: ["Verdadero", "Falso"],
      answerIndex: 1,
      accepted: [],
      explanation:
        "Falso: la decision multiple elige entre varias opciones segun un valor; repetir un bloque es propio de la estructura iterativa.",
      difficulty: "media",
    },
    {
      id: "estructura-decision-q8",
      type: "fill",
      prompt:
        "La estructura de decision se representa en el diagrama de flujo con el ____.",
      options: [],
      answerIndex: -1,
      accepted: ["rombo"],
      explanation:
        "El rombo es el simbolo de la decision: contiene la condicion y de el salen las ramas verdadero y falso.",
      difficulty: "facil",
    },
    {
      id: "estructura-decision-q9",
      type: "fill",
      prompt:
        "El tipo de decision que elige entre dos caminos (uno si la condicion es verdadera y otro si es falsa) se llama decision ____.",
      options: [],
      answerIndex: -1,
      accepted: ["doble"],
      explanation:
        "La decision doble ('Si...Entonces...Sino...FinSi') ejecuta un camino si la condicion es verdadera y otro distinto si es falsa.",
      difficulty: "media",
    },
  ],
  flashcards: [
    {
      id: "estructura-decision-fc1",
      front: "Que es la estructura de decision?",
      back: "La estructura selectiva o condicional que elige entre dos o mas caminos segun una condicion que se evalua como verdadera o falsa.",
    },
    {
      id: "estructura-decision-fc2",
      front: "Con que simbolo se dibuja la decision en un diagrama de flujo?",
      back: "Con el rombo: dentro va la condicion y salen dos ramas, SI (verdadero) y NO (falso).",
    },
    {
      id: "estructura-decision-fc3",
      front: "Cuales son los tipos de decision?",
      back: "Simple ('Si...Entonces'), doble ('Si...Entonces...Sino') y multiple ('Segun...' o varios Si anidados).",
    },
    {
      id: "estructura-decision-fc4",
      front: "Como funciona la decision simple?",
      back: "'Si <condicion> Entonces <acciones> FinSi'. Ejecuta las acciones solo si la condicion es verdadera; si es falsa, no hace nada.",
    },
    {
      id: "estructura-decision-fc5",
      front: "Como funciona la decision doble?",
      back: "'Si <condicion> Entonces <acciones1> Sino <acciones2> FinSi'. Ejecuta un camino si es verdadera y otro distinto si es falsa.",
    },
    {
      id: "estructura-decision-fc6",
      front: "Como funciona la decision multiple?",
      back: "'Segun <variable> Hacer ...' (o varios Si anidados). Elige entre varias opciones segun el valor de una variable.",
    },
    {
      id: "estructura-decision-fc7",
      front: "Ejemplo de decision doble con la edad.",
      back: "Si edad >= 18 Entonces mostrar 'mayor de edad' Sino mostrar 'menor de edad' FinSi.",
    },
  ],
  matchPairs: [
    {
      term: "Decision",
      definition: "Elige un camino segun una condicion verdadera o falsa.",
    },
    {
      term: "Rombo",
      definition: "Simbolo del diagrama de flujo que representa la decision.",
    },
    {
      term: "Simple",
      definition: "'Si...Entonces': ejecuta solo si la condicion es verdadera.",
    },
    {
      term: "Doble",
      definition: "'Si...Entonces...Sino': un camino u otro segun la condicion.",
    },
    {
      term: "Multiple",
      definition: "'Segun...' o Si anidados: elige entre varias opciones.",
    },
    {
      term: "Condicion",
      definition: "Expresion que se evalua como verdadera o falsa.",
    },
  ],
  orderChallenge: null,
  terms: ["DECISION", "SELECTIVA", "ROMBO", "SIMPLE", "DOBLE", "CONDICION"],
};

export default topic;
