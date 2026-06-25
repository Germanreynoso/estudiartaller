import type { Topic } from "../types";

const topic: Topic = {
  id: "nombres-variables",
  number: 14,
  module: "datos",
  title: "Nombres de Variables",
  short: "Reglas para nombrar variables: unico, descriptivo, sin reservadas y sin empezar con numero.",
  theory: `El **nombre de una variable** (tambien llamado **identificador**) es la etiqueta con la que reconocemos a una variable dentro del programa. Elegir un buen nombre y respetar las reglas del lenguaje es fundamental: si el nombre esta mal escrito, el programa **no compila** o se comporta de forma inesperada.

Un nombre **bien declarado** cumple dos cosas a la vez: **respeta las reglas tecnicas** del lenguaje y es **descriptivo y significativo** para quien lee el codigo.

## Reglas para nombrar una variable

Para que la declaracion sea CORRECTA, el identificador debe cumplir estas reglas:

- **Debe ser unico** en el programa: dos variables distintas no pueden compartir el mismo nombre dentro del mismo ambito.
- **No puede ser una palabra reservada** del lenguaje (palabras que ya tienen un significado propio), como 'var', 'function', 'if', 'for', 'while', 'return', etc.
- **Puede incluir letras, numeros y algunos caracteres** especiales (como '$', '#', '@'), pero **NO puede empezar con un numero**.
- **No puede empezar ni terminar con un punto** ('.').
- **No permite espacios** entre palabras: para separar palabras se usa el **guion bajo** ('_') o se cambia de mayuscula al estilo **camelCase**.
- **Debe ser descriptivo y significativo**: el nombre tiene que decir QUE guarda la variable (por ejemplo 'edad_usuario' en lugar de 'x').

## Declaracion CORRECTA vs INCORRECTA

\`\`\`
        CORRECTOS                         INCORRECTOS
  +--------------------+          +-------------------------------+
  |  nombre            |          |  2datos   -> empieza con num  |
  |  edad_usuario      |          |  mi variable -> tiene espacio |
  |  totalVentas       |          |  for       -> palabra reservada|
  |  _contador         |          |  .valor    -> empieza con punto|
  |  precio2           |          |  valor.    -> termina con punto|
  +--------------------+          +-------------------------------+
\`\`\`

## Por que cada ejemplo INCORRECTO esta mal

- **'2datos'**: empieza con un numero. Un identificador nunca puede comenzar con un digito.
- **'mi variable'**: tiene un espacio entre 'mi' y 'variable'. Habria que escribir 'mi_variable' o 'miVariable'.
- **'for'**: es una palabra reservada del lenguaje (se usa para los ciclos), por eso no puede usarse como nombre.
- **'.valor'**: empieza con un punto, lo cual no esta permitido.

## Las dos formas de separar palabras

Como no se permiten espacios, hay dos estilos clasicos para nombres de varias palabras:

\`\`\`
  snake_case               camelCase
  total_ventas             totalVentas
  edad_del_usuario         edadDelUsuario
\`\`\`

- **snake_case**: separa con guion bajo '_' (ejemplo: 'edad_usuario').
- **camelCase**: junta las palabras y arranca cada palabra nueva con mayuscula (ejemplo: 'totalVentas').

Ambos estilos son validos; lo importante es ser **consistente** y elegir nombres que se entiendan.

## Por que importa un nombre significativo

Comparemos dos formas de nombrar lo mismo:

- Mal: 'x = 18' (no se sabe que representa 'x').
- Bien: 'edad_usuario = 18' (queda claro de inmediato que guarda la edad del usuario).

Un nombre descriptivo hace que el codigo sea **mas facil de leer, entender y mantener**, incluso meses despues de haberlo escrito.`,
  keyPoints: [
    "El nombre de una variable (identificador) debe ser UNICO dentro del programa.",
    "No se pueden usar palabras reservadas del lenguaje como nombre (var, function, if, for, while, etc.).",
    "Puede tener letras, numeros y caracteres como $, # o @, pero NO puede empezar con un numero.",
    "No puede empezar ni terminar con un punto, ni contener espacios entre palabras.",
    "Para separar palabras se usa guion bajo (snake_case: edad_usuario) o mayusculas (camelCase: totalVentas).",
    "El nombre debe ser descriptivo y significativo (edad_usuario es mejor que x).",
  ],
  questions: [
    {
      id: "nombres-variables-q1",
      type: "mc",
      prompt: "Cual de los siguientes es un nombre de variable VALIDO?",
      options: [
        "edad_usuario",
        "2datos",
        "mi variable",
        "for",
      ],
      answerIndex: 0,
      accepted: [],
      explanation:
        "'edad_usuario' es valido: usa guion bajo para separar palabras, no empieza con numero, no es palabra reservada y es descriptivo.",
      difficulty: "facil",
    },
    {
      id: "nombres-variables-q2",
      type: "mc",
      prompt: "Por que el nombre '2datos' es INCORRECTO?",
      options: [
        "Porque un nombre de variable no puede empezar con un numero.",
        "Porque es una palabra reservada del lenguaje.",
        "Porque contiene un espacio entre palabras.",
        "Porque termina con un punto.",
      ],
      answerIndex: 0,
      accepted: [],
      explanation:
        "'2datos' empieza con el digito 2, y los identificadores nunca pueden comenzar con un numero (aunque si pueden contenerlos, como en 'precio2').",
      difficulty: "facil",
    },
    {
      id: "nombres-variables-q3",
      type: "mc",
      prompt: "Cual de estos nombres es INVALIDO por usar una palabra reservada?",
      options: [
        "for",
        "totalVentas",
        "_contador",
        "precio2",
      ],
      answerIndex: 0,
      accepted: [],
      explanation:
        "'for' es una palabra reservada del lenguaje (se usa para los ciclos), por eso no puede emplearse como nombre de variable.",
      difficulty: "media",
    },
    {
      id: "nombres-variables-q4",
      type: "mc",
      prompt: "Como se debe escribir un nombre formado por varias palabras, como 'total ventas'?",
      options: [
        "Con guion bajo (total_ventas) o en camelCase (totalVentas).",
        "Dejando el espacio tal cual: 'total ventas'.",
        "Empezando siempre con un numero: '1totalVentas'.",
        "Empezando con un punto: '.totalVentas'.",
      ],
      answerIndex: 0,
      accepted: [],
      explanation:
        "No se permiten espacios en los nombres; las palabras se separan con guion bajo (snake_case) o uniendolas con mayusculas (camelCase).",
      difficulty: "media",
    },
    {
      id: "nombres-variables-q5",
      type: "vf",
      prompt: "El nombre de una variable puede empezar con un numero, por ejemplo '2datos'.",
      options: ["Verdadero", "Falso"],
      answerIndex: 1,
      accepted: [],
      explanation:
        "Es falso: un identificador no puede empezar con un numero. Puede contener numeros, pero no al inicio (por ejemplo 'precio2' si es valido).",
      difficulty: "facil",
    },
    {
      id: "nombres-variables-q6",
      type: "vf",
      prompt: "Dentro de un mismo programa el nombre de una variable debe ser unico.",
      options: ["Verdadero", "Falso"],
      answerIndex: 0,
      accepted: [],
      explanation:
        "Es verdadero: el identificador debe ser unico en su ambito; dos variables distintas no pueden compartir el mismo nombre.",
      difficulty: "facil",
    },
    {
      id: "nombres-variables-q7",
      type: "vf",
      prompt: "El nombre '_contador' es invalido porque empieza con guion bajo.",
      options: ["Verdadero", "Falso"],
      answerIndex: 1,
      accepted: [],
      explanation:
        "Es falso: '_contador' es valido. El guion bajo esta permitido al inicio; lo que no se permite es empezar con un numero o con un punto.",
      difficulty: "media",
    },
    {
      id: "nombres-variables-q8",
      type: "fill",
      prompt: "Para separar palabras sin usar espacios se puede usar el guion bajo (_) o el estilo camelCase, donde cada palabra nueva empieza con ____.",
      options: [],
      answerIndex: -1,
      accepted: ["mayuscula", "mayusculas"],
      explanation:
        "En camelCase las palabras se juntan y cada palabra nueva arranca con mayuscula, por ejemplo 'totalVentas'.",
      difficulty: "media",
    },
    {
      id: "nombres-variables-q9",
      type: "fill",
      prompt: "Las palabras que ya tienen un significado propio en el lenguaje (como var, if o for) y no se pueden usar como nombre se llaman palabras ____.",
      options: [],
      answerIndex: -1,
      accepted: ["reservadas"],
      explanation:
        "Las palabras reservadas tienen un uso fijo en el lenguaje, por eso no pueden emplearse como nombres de variables.",
      difficulty: "facil",
    },
  ],
  flashcards: [
    {
      id: "nombres-variables-f1",
      front: "Que es el nombre o identificador de una variable?",
      back: "La etiqueta con la que reconocemos a una variable en el programa; debe respetar las reglas del lenguaje y ser descriptiva.",
    },
    {
      id: "nombres-variables-f2",
      front: "Con que NO puede empezar el nombre de una variable?",
      back: "No puede empezar con un numero ni con un punto. Si puede empezar con letra o con guion bajo (_).",
    },
    {
      id: "nombres-variables-f3",
      front: "Por que no se puede llamar a una variable 'for'?",
      back: "Porque 'for' es una palabra reservada del lenguaje (se usa para los ciclos) y las reservadas no pueden usarse como nombre.",
    },
    {
      id: "nombres-variables-f4",
      front: "Como se separan las palabras en un nombre de variable?",
      back: "No se usan espacios; se usa guion bajo (snake_case: edad_usuario) o mayusculas (camelCase: totalVentas).",
    },
    {
      id: "nombres-variables-f5",
      front: "Da 3 ejemplos de nombres CORRECTOS.",
      back: "Por ejemplo: nombre, edad_usuario, totalVentas, _contador, precio2.",
    },
    {
      id: "nombres-variables-f6",
      front: "Da 3 ejemplos de nombres INCORRECTOS y por que.",
      back: "2datos (empieza con numero), 'mi variable' (tiene espacio), for (palabra reservada), .valor (empieza con punto).",
    },
    {
      id: "nombres-variables-f7",
      front: "Por que conviene un nombre descriptivo y significativo?",
      back: "Porque hace el codigo mas facil de leer y mantener: 'edad_usuario' se entiende mejor que 'x'.",
    },
  ],
  matchPairs: [
    {
      term: "Identificador unico",
      definition: "El nombre no se puede repetir en otra variable dentro del mismo programa.",
    },
    {
      term: "Palabra reservada",
      definition: "Termino con significado propio (var, if, for) que no puede usarse como nombre.",
    },
    {
      term: "snake_case",
      definition: "Separa palabras con guion bajo, por ejemplo edad_usuario.",
    },
    {
      term: "camelCase",
      definition: "Une palabras y arranca cada nueva con mayuscula, por ejemplo totalVentas.",
    },
    {
      term: "2datos",
      definition: "Nombre incorrecto porque empieza con un numero.",
    },
    {
      term: ".valor",
      definition: "Nombre incorrecto porque empieza con un punto.",
    },
  ],
  orderChallenge: null,
  terms: ["IDENTIFICADOR", "RESERVADA", "CAMELCASE", "UNICO", "PUNTO", "NUMERO"],
};

export default topic;
