import type { Topic } from "../types";

const topic: Topic = {
  id: "variable-constante",
  number: 10,
  module: "datos",
  title: "Variable y Constante",
  short: "Variable: espacio en memoria cuyo valor puede cambiar. Constante: valor fijo.",
  theory: `Una **variable** es un espacio en la memoria (la RAM) de la computadora que almacena informacion de un **tipo de dato** determinado. Se identifica con un **nombre unico** y, lo mas importante, su valor **puede cambiar** durante la ejecucion del programa.

Una **constante**, en cambio, es un valor que **no cambia** durante la ejecucion del programa. Se establece una sola vez y permanece fijo, protegido de modificaciones no deseadas. Un ejemplo clasico es el numero **Pi (PI = 3.14159)**.

La diferencia central es simple: la **variable puede cambiar de valor**, la **constante permanece fija**.

## La analogia de la caja

Una variable se entiende muy bien como una **caja** que guarda informacion:

- La **caja** es el espacio reservado en la memoria.
- La **etiqueta** de la caja es el nombre con el que la identificamos.
- El **contenido** de la caja es el valor que guardamos, y podemos cambiarlo cuando queramos.

\`\`\`
        nombre (etiqueta)
            |
            v
        +---------+
        |  radio  |   <- espacio en la memoria (RAM)
        +---------+
        |   5.0   |   <- valor actual (puede cambiar)
        +---------+
\`\`\`

## Para que sirve una variable

Las variables cumplen dos funciones principales:

- **Guardar y recuperar datos:** almacenamos un valor en la memoria y lo volvemos a usar mas tarde.
- **Referirnos a un valor con un nombre representativo:** en lugar de repetir el numero 5.0 por todos lados, usamos un nombre claro como 'radio'.

Como el valor puede cambiar, la misma variable 'radio' puede valer 5.0 para un circulo y 12.0 para otro, sin tener que crear una nueva.

## La constante: un valor protegido

Una constante se usa cuando un valor **no debe cambiar nunca** durante la ejecucion. Al declararlo como constante:

- Lo **establecemos una sola vez** con un valor inicial.
- Queda **protegido**: si el programa intenta modificarlo, se produce un error.
- El codigo gana **claridad y seguridad**, porque dejamos claro que ese dato es fijo.

Por convencion, los nombres de las constantes suelen escribirse en MAYUSCULAS, por ejemplo PI.

## Variable vs Constante

\`\`\`
        VARIABLE                       CONSTANTE
  +-------------------+        +-----------------------+
  |  radio = 5.0      |        |  PI = 3.14159         |
  |  radio = 12.0  OK |        |  PI = 4.0      ERROR  |
  +-------------------+        +-----------------------+
   el valor puede cambiar       el valor permanece fijo
\`\`\`

## Ejemplos

- **Variable 'radio':** cambia segun el circulo con el que estemos trabajando (5.0, 12.0, 8.3, etc.).
- **Constante 'PI':** vale siempre 3.14159, no importa cuantos circulos calculemos.

Si quisieramos calcular el area de varios circulos, 'radio' iria cambiando en cada caso mientras que 'PI' se mantendria fijo.

## Como se crea (declara) una variable

Para crear o declarar una variable seguimos estos pasos:

1. **Elegir un nombre unico y significativo** (por ejemplo 'radio', no 'x').
2. **Especificar el tipo de dato** que va a almacenar (numero, texto, etc.).
3. **Asignar un valor inicial** a la variable.

\`\`\`
  Paso 1            Paso 2            Paso 3
  nombre            tipo              valor inicial
  radio       :     number      =     5.0
\`\`\`

Un buen nombre y un tipo correcto hacen que el codigo sea mas facil de leer y de mantener.`,
  keyPoints: [
    "Una variable es un espacio en la memoria (RAM) que almacena un dato de un tipo determinado.",
    "La variable se identifica con un nombre unico y su valor PUEDE CAMBIAR durante la ejecucion.",
    "Analogia: una variable es como una caja que guarda informacion y se identifica con una etiqueta.",
    "Una constante es un valor que NO CAMBIA durante la ejecucion; se establece una vez y queda fijo.",
    "Diferencia clave: la variable puede cambiar de valor, la constante permanece fija (ej. PI = 3.14159).",
    "Declarar una variable: elegir nombre unico y significativo, especificar el tipo y asignar valor inicial.",
  ],
  questions: [
    {
      id: "variable-constante-q1",
      type: "mc",
      prompt: "Cual es la mejor definicion de variable?",
      options: [
        "Un espacio en la memoria que almacena un dato y cuyo valor puede cambiar durante la ejecucion.",
        "Un valor fijo que nunca cambia durante la ejecucion del programa.",
        "Un lenguaje de programacion para crear paginas web.",
        "Un error que ocurre cuando el programa se ejecuta.",
      ],
      answerIndex: 0,
      accepted: [],
      explanation:
        "Una variable es un espacio en la memoria (RAM) que almacena informacion de un tipo determinado, se identifica con un nombre unico y su valor puede cambiar durante la ejecucion.",
      difficulty: "facil",
    },
    {
      id: "variable-constante-q2",
      type: "mc",
      prompt: "Cual es la diferencia principal entre una variable y una constante?",
      options: [
        "La variable puede cambiar de valor; la constante permanece fija.",
        "La variable es mas rapida que la constante.",
        "La constante puede cambiar de valor; la variable permanece fija.",
        "No existe ninguna diferencia entre ambas.",
      ],
      answerIndex: 0,
      accepted: [],
      explanation:
        "La diferencia central es que el valor de una variable puede cambiar durante la ejecucion, mientras que el de una constante permanece fijo.",
      difficulty: "facil",
    },
    {
      id: "variable-constante-q3",
      type: "mc",
      prompt: "Con que analogia se suele explicar una variable?",
      options: [
        "Una caja que guarda informacion y se identifica con una etiqueta (su nombre).",
        "Una calculadora que solo hace sumas.",
        "Un cable que conecta dos computadoras.",
        "Una pantalla que muestra resultados.",
      ],
      answerIndex: 0,
      accepted: [],
      explanation:
        "La variable se compara con una caja: el espacio en memoria es la caja, el nombre es la etiqueta y el valor es el contenido, que puede cambiar.",
      difficulty: "facil",
    },
    {
      id: "variable-constante-q4",
      type: "mc",
      prompt: "Cual de estos es un ejemplo tipico de constante?",
      options: [
        "El numero PI = 3.14159.",
        "El radio de un circulo que cambia en cada calculo.",
        "Un contador que aumenta de a uno.",
        "El nombre que escribe el usuario por teclado.",
      ],
      answerIndex: 0,
      accepted: [],
      explanation:
        "PI = 3.14159 es un valor que no cambia durante la ejecucion, por eso es el ejemplo clasico de constante.",
      difficulty: "media",
    },
    {
      id: "variable-constante-q5",
      type: "vf",
      prompt: "El valor de una variable puede cambiar durante la ejecucion del programa.",
      options: ["Verdadero", "Falso"],
      answerIndex: 0,
      accepted: [],
      explanation:
        "Es verdadero: que su valor pueda cambiar durante la ejecucion es justamente la caracteristica que define a una variable.",
      difficulty: "facil",
    },
    {
      id: "variable-constante-q6",
      type: "vf",
      prompt: "Una constante puede cambiar libremente de valor durante la ejecucion del programa.",
      options: ["Verdadero", "Falso"],
      answerIndex: 1,
      accepted: [],
      explanation:
        "Es falso: una constante se establece una sola vez y permanece fija; queda protegida de modificaciones no deseadas.",
      difficulty: "facil",
    },
    {
      id: "variable-constante-q7",
      type: "vf",
      prompt: "Una variable se guarda en la memoria (RAM) y almacena informacion de un tipo de dato determinado.",
      options: ["Verdadero", "Falso"],
      answerIndex: 0,
      accepted: [],
      explanation:
        "Es verdadero: una variable es un espacio en la memoria RAM que almacena un dato de un tipo determinado y se identifica con un nombre unico.",
      difficulty: "media",
    },
    {
      id: "variable-constante-q8",
      type: "fill",
      prompt: "El espacio en la memoria que almacena un dato y cuyo valor puede cambiar se llama ____.",
      options: [],
      answerIndex: -1,
      accepted: ["variable"],
      explanation:
        "La variable es el espacio en la memoria que guarda un dato de un tipo determinado y cuyo valor puede cambiar durante la ejecucion.",
      difficulty: "facil",
    },
    {
      id: "variable-constante-q9",
      type: "fill",
      prompt: "Un valor que no cambia durante la ejecucion del programa, como PI, se llama ____.",
      options: [],
      answerIndex: -1,
      accepted: ["constante"],
      explanation:
        "La constante es un valor que se establece una vez y permanece fijo durante toda la ejecucion, como el numero PI.",
      difficulty: "facil",
    },
  ],
  flashcards: [
    {
      id: "variable-constante-f1",
      front: "Que es una variable?",
      back: "Un espacio en la memoria (RAM) que almacena informacion de un tipo determinado, se identifica con un nombre unico y su valor puede cambiar durante la ejecucion.",
    },
    {
      id: "variable-constante-f2",
      front: "Que es una constante?",
      back: "Un valor que no cambia durante la ejecucion del programa; se establece una vez y permanece fijo (por ejemplo, PI = 3.14159).",
    },
    {
      id: "variable-constante-f3",
      front: "Cual es la diferencia entre variable y constante?",
      back: "La variable puede cambiar de valor durante la ejecucion; la constante permanece fija.",
    },
    {
      id: "variable-constante-f4",
      front: "Con que analogia se explica una variable?",
      back: "Con una caja que guarda informacion: la caja es el espacio en memoria, la etiqueta es el nombre y el contenido es el valor (que puede cambiar).",
    },
    {
      id: "variable-constante-f5",
      front: "Para que sirve una variable?",
      back: "Para guardar y recuperar datos, y para referirse a un valor con un nombre representativo.",
    },
    {
      id: "variable-constante-f6",
      front: "Que pasos hay que seguir para declarar una variable?",
      back: "Elegir un nombre unico y significativo, especificar el tipo de dato y asignar un valor inicial.",
    },
    {
      id: "variable-constante-f7",
      front: "Da un ejemplo de variable y uno de constante.",
      back: "Variable: 'radio', que cambia segun el circulo. Constante: 'PI', que vale siempre 3.14159.",
    },
  ],
  matchPairs: [
    {
      term: "Variable",
      definition: "Espacio en la memoria cuyo valor puede cambiar durante la ejecucion.",
    },
    {
      term: "Constante",
      definition: "Valor que no cambia durante la ejecucion; se establece una vez y queda fijo.",
    },
    {
      term: "PI",
      definition: "Ejemplo clasico de constante: vale 3.14159 y no cambia.",
    },
    {
      term: "Radio",
      definition: "Ejemplo de variable: cambia segun el circulo con el que se trabaja.",
    },
    {
      term: "Caja",
      definition: "Analogia de la variable: guarda un contenido identificado por una etiqueta.",
    },
    {
      term: "Nombre unico",
      definition: "Identificador con el que se reconoce una variable.",
    },
  ],
  orderChallenge: {
    id: "variable-constante-oc",
    title: "Ordena los pasos para declarar una variable",
    steps: [
      "Elegir un nombre unico y significativo (por ejemplo 'radio')",
      "Especificar el tipo de dato que va a almacenar (por ejemplo, numero)",
      "Asignar un valor inicial a la variable (por ejemplo, 5.0)",
    ],
  },
  terms: ["VARIABLE", "CONSTANTE", "MEMORIA", "VALOR", "NOMBRE", "TIPO"],
};

export default topic;
