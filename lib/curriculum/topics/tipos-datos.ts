import type { Topic } from "../types";

const topic: Topic = {
  id: "tipos-datos",
  number: 12,
  module: "datos",
  title: "Tipos de Datos",
  short: "Clases de valores que maneja un programa: numericos, alfanumericos y logicos.",
  theory: `Un **tipo de dato** define que clase de valor puede guardar una variable y que operaciones se pueden hacer con el. En otras palabras, le dice a la computadora como interpretar la informacion: no es lo mismo el numero 5, la letra 'a' o el valor Verdadero. Elegir bien el tipo es clave para que el programa funcione correctamente y use la memoria de forma adecuada.

Los tipos de datos se dividen en dos grandes grupos: **datos simples** (o primitivos), que guardan un unico valor, y **datos estructurados** (o compuestos), que agrupan varios valores.

## Tipos de datos simples (primitivos)

Son los tipos basicos que almacenan **un solo valor**. Los mas comunes son:

- **Entero** (integer): numeros sin parte decimal, positivos o negativos. Ejemplo: 1, 2, 3, -5.
- **Flotante / Real** (float): numeros con parte decimal. Ejemplo: 1.2, 3.14.
- **Cadena de texto** (string): una secuencia de caracteres, texto entre comillas. Ejemplo: "Hola, mundo".
- **Caracter** (char): un unico simbolo, letra, digito o signo, entre comillas simples. Ejemplo: 'a'.
- **Booleano / Logico** (boolean): solo puede tomar dos valores, Verdadero o Falso (True / False).

## Clasificacion general

Los tipos simples se pueden agrupar segun la naturaleza del valor que representan:

- **Datos numericos**: representan numeros y permiten operaciones matematicas. Incluyen los **enteros** y los **reales (flotantes)**.
- **Datos alfanumericos**: representan texto y simbolos. Incluyen el **caracter** (un solo simbolo) y la **cadena** (varios caracteres).
- **Datos logicos**: representan condiciones de verdad. Es el tipo **booleano**, con solo dos valores posibles: Verdadero o Falso.

Este es el mapa general de la clasificacion:

    TIPOS DE DATOS
    |
    +-- SIMPLES (primitivos)
    |     |
    |     +-- NUMERICOS
    |     |     +-- Entero ....... 1, 2, 3, -5
    |     |     +-- Real / Flotante ... 1.2, 3.14
    |     |
    |     +-- ALFANUMERICOS
    |     |     +-- Caracter (char) ... 'a'
    |     |     +-- Cadena (string) ... "Hola, mundo"
    |     |
    |     +-- LOGICOS
    |           +-- Booleano ... Verdadero / Falso
    |
    +-- ESTRUCTURADOS (compuestos)
          +-- Arreglos (vectores)
          +-- Registros

## Datos estructurados (compuestos)

A diferencia de los simples, los **datos estructurados** agrupan **varios valores** bajo un mismo nombre. Los mas tipicos son:

- **Arreglos** (arrays o vectores): una coleccion ordenada de varios valores del **mismo tipo**. Por ejemplo, una lista de notas: [7, 8, 10, 6].
- **Registros** (records / estructuras): agrupan varios valores que pueden ser de **distinto tipo**, cada uno con su nombre. Por ejemplo, un alumno con nombre (cadena), edad (entero) y aprobado (booleano).

## Resumen con un ejemplo de cada tipo

| Tipo       | Clasificacion  | Ejemplo        |
|------------|----------------|----------------|
| Entero     | Numerico       | -5, 0, 42      |
| Real       | Numerico       | 3.14, 1.2      |
| Caracter   | Alfanumerico   | 'a', 'z', '7'  |
| Cadena     | Alfanumerico   | "Hola, mundo"  |
| Booleano   | Logico         | Verdadero      |

Una idea util para no confundirse: el caracter '7' (entre comillas simples) es **texto**, no el numero 7. Por eso no se puede sumar como un numero; primero habria que convertirlo. Lo mismo pasa con la cadena "123": es texto, aunque parezca un numero.`,
  keyPoints: [
    "Un tipo de dato define que valores puede guardar una variable y que operaciones se permiten con el.",
    "Hay dos grandes grupos: datos SIMPLES (un solo valor) y datos ESTRUCTURADOS (varios valores).",
    "Tipos simples mas comunes: entero, real (flotante), cadena, caracter y booleano.",
    "Clasificacion general: NUMERICOS (entero y real), ALFANUMERICOS (caracter y cadena) y LOGICOS (booleano).",
    "El booleano solo tiene dos valores posibles: Verdadero o Falso (True / False).",
    "Los datos estructurados agrupan varios valores: arreglos (mismo tipo) y registros (distintos tipos).",
  ],
  questions: [
    {
      id: "tipos-datos-q1",
      type: "mc",
      prompt: "Que es un tipo de dato?",
      options: [
        "El nombre que le ponemos a una variable.",
        "La definicion de que clase de valor puede guardar una variable y que operaciones se permiten con el.",
        "Un lenguaje de programacion para principiantes.",
        "La cantidad de memoria total de la computadora.",
      ],
      answerIndex: 1,
      accepted: [],
      explanation:
        "El tipo de dato indica que clase de valor (numero, texto, logico) almacena una variable y como debe interpretarlo y operarlo la computadora.",
      difficulty: "facil",
    },
    {
      id: "tipos-datos-q2",
      type: "mc",
      prompt: "Cuales son los tres grupos de la clasificacion general de los tipos simples?",
      options: [
        "Enteros, decimales y palabras.",
        "Numericos, alfanumericos y logicos.",
        "Simples, dobles y triples.",
        "Texto, imagen y sonido.",
      ],
      answerIndex: 1,
      accepted: [],
      explanation:
        "La clasificacion general agrupa los tipos simples en numericos (entero y real), alfanumericos (caracter y cadena) y logicos (booleano).",
      difficulty: "facil",
    },
    {
      id: "tipos-datos-q3",
      type: "mc",
      prompt: "Que tipo de dato usarias para guardar el valor 3.14?",
      options: [
        "Entero",
        "Booleano",
        "Real (flotante)",
        "Caracter",
      ],
      answerIndex: 2,
      accepted: [],
      explanation:
        "El valor 3.14 tiene parte decimal, por lo tanto corresponde a un dato real o flotante, dentro del grupo numerico.",
      difficulty: "facil",
    },
    {
      id: "tipos-datos-q4",
      type: "mc",
      prompt: "Cual de estas opciones es un ejemplo correcto de dato booleano?",
      options: [
        "\"Verdadero\" escrito como cadena de texto.",
        "El numero 1.2.",
        "Verdadero (uno de sus dos unicos valores: Verdadero o Falso).",
        "La letra 'b'.",
      ],
      answerIndex: 2,
      accepted: [],
      explanation:
        "El tipo booleano (logico) solo puede tomar dos valores: Verdadero o Falso (True / False).",
      difficulty: "media",
    },
    {
      id: "tipos-datos-q5",
      type: "vf",
      prompt:
        "Los datos numericos incluyen tanto a los enteros como a los reales (flotantes).",
      options: ["Verdadero", "Falso"],
      answerIndex: 0,
      accepted: [],
      explanation:
        "El grupo de datos numericos abarca los enteros (sin decimales) y los reales o flotantes (con decimales).",
      difficulty: "facil",
    },
    {
      id: "tipos-datos-q6",
      type: "vf",
      prompt:
        "Un caracter (char) puede guardar varias letras a la vez, como una cadena de texto.",
      options: ["Verdadero", "Falso"],
      answerIndex: 1,
      accepted: [],
      explanation:
        "Un caracter guarda un unico simbolo, por ejemplo 'a'. Para varios caracteres se usa una cadena (string), como \"Hola\".",
      difficulty: "media",
    },
    {
      id: "tipos-datos-q7",
      type: "vf",
      prompt:
        "El caracter y la cadena pertenecen al grupo de los datos alfanumericos.",
      options: ["Verdadero", "Falso"],
      answerIndex: 0,
      accepted: [],
      explanation:
        "Tanto el caracter (un simbolo) como la cadena (varios caracteres) representan texto, por eso forman el grupo alfanumerico.",
      difficulty: "facil",
    },
    {
      id: "tipos-datos-q8",
      type: "fill",
      prompt:
        "El tipo de dato logico se llama ____ y solo puede valer Verdadero o Falso.",
      options: [],
      answerIndex: -1,
      accepted: ["booleano", "boolean"],
      explanation:
        "El dato logico es el booleano (boolean), que solo admite dos valores: Verdadero o Falso.",
      difficulty: "media",
    },
    {
      id: "tipos-datos-q9",
      type: "fill",
      prompt:
        "Un ____ es un dato estructurado que agrupa una coleccion ordenada de varios valores del mismo tipo.",
      options: [],
      answerIndex: -1,
      accepted: ["arreglo", "array", "vector"],
      explanation:
        "El arreglo (array o vector) es un dato estructurado que guarda varios valores del mismo tipo bajo un mismo nombre.",
      difficulty: "dificil",
    },
  ],
  flashcards: [
    {
      id: "tipos-datos-f1",
      front: "Que es un tipo de dato?",
      back: "La definicion de que clase de valor puede guardar una variable y que operaciones se permiten con el (numero, texto, logico, etc.).",
    },
    {
      id: "tipos-datos-f2",
      front: "Cuales son los tipos simples mas comunes?",
      back: "Entero, real (flotante), cadena de texto, caracter y booleano.",
    },
    {
      id: "tipos-datos-f3",
      front: "Cual es la clasificacion general de los tipos simples?",
      back: "Numericos (entero y real), alfanumericos (caracter y cadena) y logicos (booleano).",
    },
    {
      id: "tipos-datos-f4",
      front: "Que diferencia hay entre caracter y cadena?",
      back: "El caracter (char) guarda un unico simbolo, como 'a'. La cadena (string) guarda varios caracteres, como \"Hola, mundo\".",
    },
    {
      id: "tipos-datos-f5",
      front: "Que valores puede tomar un dato booleano?",
      back: "Solo dos: Verdadero o Falso (True / False). Es el tipo logico.",
    },
    {
      id: "tipos-datos-f6",
      front: "Que es un dato estructurado y da ejemplos.",
      back: "Un dato que agrupa varios valores bajo un mismo nombre. Ejemplos: arreglos (varios valores del mismo tipo) y registros (valores de distinto tipo).",
    },
    {
      id: "tipos-datos-f7",
      front: "Da un ejemplo de cada tipo simple.",
      back: "Entero: -5; Real: 3.14; Caracter: 'a'; Cadena: \"Hola, mundo\"; Booleano: Verdadero.",
    },
  ],
  matchPairs: [
    {
      term: "Entero",
      definition: "Numero sin decimales, positivo o negativo. Ejemplo: 1, 2, 3, -5.",
    },
    {
      term: "Real / Flotante",
      definition: "Numero con parte decimal. Ejemplo: 1.2, 3.14.",
    },
    {
      term: "Cadena",
      definition: "Secuencia de caracteres (texto entre comillas). Ejemplo: \"Hola, mundo\".",
    },
    {
      term: "Caracter",
      definition: "Un unico simbolo entre comillas simples. Ejemplo: 'a'.",
    },
    {
      term: "Booleano",
      definition: "Dato logico con solo dos valores: Verdadero o Falso.",
    },
    {
      term: "Arreglo",
      definition: "Dato estructurado: coleccion ordenada de varios valores del mismo tipo.",
    },
  ],
  orderChallenge: null,
  terms: ["ENTERO", "REAL", "CADENA", "CARACTER", "BOOLEANO", "ARREGLO"],
};

export default topic;
