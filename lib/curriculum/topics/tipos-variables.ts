import type { Topic } from "../types";

const topic: Topic = {
  id: "tipos-variables",
  number: 13,
  module: "datos",
  title: "Tipos de Variables",
  short: "Clasificacion de las variables por su contenido, por su uso y por su ambito.",
  theory: `Una **variable** es un espacio de memoria, identificado con un nombre, que guarda un valor que puede cambiar durante la ejecucion del programa. Pero no todas las variables son iguales: se las puede **clasificar** segun distintos criterios. Conocer esta clasificacion ayuda a entender mejor para que sirve cada variable y a elegir la mas adecuada en cada problema.

Las variables se clasifican principalmente de tres formas:

- Por su **contenido** (el tipo de dato que guardan).
- Por su **uso** o funcion (para que las usamos dentro del programa).
- Por su **ambito** o alcance (en que parte del programa existen y se pueden usar).

## 1. Clasificacion por su CONTENIDO (tipo de dato)

Aca miramos **que clase de valor** guarda la variable, es decir su tipo de dato:

- **Numericas**: guardan numeros y permiten operaciones matematicas. Se dividen en:
  - **Enteras**: numeros sin parte decimal. Ejemplo: edad = 20, cantidad = -5.
  - **Reales** (flotantes): numeros con parte decimal. Ejemplo: precio = 99.90, promedio = 7.5.
- **Alfanumericas / de cadena** (string): guardan texto, una secuencia de caracteres entre comillas. Ejemplo: nombre = "Ana", mensaje = "Hola, mundo".
- **Logicas / booleanas**: solo pueden valer Verdadero o Falso (True / False). Ejemplo: aprobado = Verdadero, esMayor = Falso.
- **De caracter** (char): guardan un unico simbolo, letra, digito o signo, entre comillas simples. Ejemplo: inicial = 'A', signo = '+'.

Un esquema de esta clasificacion:

    VARIABLES POR SU CONTENIDO
    |
    +-- NUMERICAS
    |     +-- Enteras ......... 20, -5, 100
    |     +-- Reales (float) .. 99.90, 7.5
    |
    +-- ALFANUMERICAS / CADENA . "Ana", "Hola"
    |
    +-- LOGICAS / BOOLEANAS .... Verdadero / Falso
    |
    +-- DE CARACTER (char) ..... 'A', '+'

## 2. Clasificacion por su USO o funcion

Aca miramos **para que sirve** la variable dentro de la logica del programa, sin importar su tipo de dato:

- **Variables de trabajo**: guardan resultados intermedios o datos que el programa va usando para hacer calculos y tomar decisiones. Son las de uso general. Ejemplo: resultado = base * altura.
- **Contadores**: se usan para **contar**. En un ciclo cambian su valor sumando o restando una **constante** (cantidad fija), lo mas comun +1. Ejemplo: contador = contador + 1.
- **Acumuladores**: se usan para **sumar valores**. En un ciclo cambian su valor sumando una **variable** (cantidad que puede variar). Ejemplo: suma = suma + nro.
- **Banderas / switches** (variables booleanas de control): son variables logicas que se usan para **marcar** si algo paso o no, o para controlar la continuidad de un ciclo. Funcionan como un interruptor de Verdadero/Falso. Ejemplo: encontrado = Falso (y pasa a Verdadero cuando hallamos el dato buscado).

Un esquema de esta clasificacion:

    VARIABLES POR SU USO
    |
    +-- DE TRABAJO ... resultado = base * altura
    +-- CONTADOR ..... contador = contador + 1   (suma una constante fija)
    +-- ACUMULADOR ... suma = suma + nro          (suma una variable)
    +-- BANDERA ...... encontrado = Verdadero/Falso (marca o controla)

## 3. Clasificacion por su AMBITO o alcance

El **ambito** (o alcance) indica **en que parte del programa existe** la variable y desde donde se la puede usar:

- **Variables locales**: se declaran y existen **dentro de un bloque o de una funcion**. Solo se pueden usar ahi adentro; fuera de ese bloque no existen. Cuando la funcion termina, la variable local desaparece. Sirven para no mezclar datos de una parte del programa con otra.
- **Variables globales**: se declaran **fuera de todas las funciones** y se pueden usar **en todo el programa**, desde cualquier parte. Son accesibles en cualquier bloque, pero conviene usarlas con cuidado porque cualquier parte del codigo puede modificarlas.

Un esquema de los ambitos:

    PROGRAMA
    |
    +-- variable GLOBAL  (visible en todo el programa)
    |
    +-- Funcion A
    |     +-- variable LOCAL  (solo existe dentro de Funcion A)
    |
    +-- Funcion B
          +-- variable LOCAL  (solo existe dentro de Funcion B)

Regla practica: lo que se declara dentro de una funcion es **local** a esa funcion; lo que se declara afuera, accesible para todos, es **global**. Por buena practica se prefieren las variables locales siempre que se pueda, porque hacen el programa mas ordenado y predecible.

## Resumen de los tres criterios

| Criterio   | Pregunta que responde      | Categorias                                            |
|------------|----------------------------|-------------------------------------------------------|
| Contenido  | Que tipo de dato guarda?   | Numerica, alfanumerica, logica, de caracter           |
| Uso        | Para que la uso?           | De trabajo, contador, acumulador, bandera             |
| Ambito     | Donde existe / se ve?      | Local (dentro de un bloque) o global (todo el programa) |

Una misma variable se puede describir desde los tres criterios a la vez. Por ejemplo, 'contador' puede ser **numerica entera** (contenido), **contador** (uso) y **local** a una funcion (ambito), todo al mismo tiempo.`,
  keyPoints: [
    "Las variables se clasifican por su CONTENIDO (tipo de dato), por su USO (funcion) y por su AMBITO (alcance).",
    "Por su contenido: numericas (enteras y reales), alfanumericas/cadena, logicas/booleanas y de caracter.",
    "Por su uso: de trabajo, contadores (suman una constante fija), acumuladores (suman una variable) y banderas/switches.",
    "Una bandera o switch es una variable booleana de control que marca si algo paso o controla un ciclo.",
    "Por su ambito: LOCALES (existen dentro de un bloque o funcion) y GLOBALES (accesibles en todo el programa).",
    "Una misma variable se puede describir con los tres criterios a la vez (ej. numerica entera, contador y local).",
  ],
  questions: [
    {
      id: "tipos-variables-q1",
      type: "mc",
      prompt: "Cuales son los tres criterios principales para clasificar las variables?",
      options: [
        "Por su tamano, su color y su precio.",
        "Por su contenido (tipo de dato), por su uso (funcion) y por su ambito (alcance).",
        "Por su nombre, su valor inicial y su lenguaje.",
        "Por su velocidad, su memoria y su procesador.",
      ],
      answerIndex: 1,
      accepted: [],
      explanation:
        "Las variables se clasifican por su CONTENIDO (que tipo de dato guardan), por su USO o funcion y por su AMBITO o alcance.",
      difficulty: "facil",
    },
    {
      id: "tipos-variables-q2",
      type: "mc",
      prompt: "Segun su CONTENIDO, las variables numericas se dividen en:",
      options: [
        "Locales y globales.",
        "Contadores y acumuladores.",
        "Enteras (sin decimales) y reales o flotantes (con decimales).",
        "Verdaderas y falsas.",
      ],
      answerIndex: 2,
      accepted: [],
      explanation:
        "Las variables numericas se dividen en enteras (numeros sin parte decimal) y reales o flotantes (numeros con parte decimal).",
      difficulty: "facil",
    },
    {
      id: "tipos-variables-q3",
      type: "mc",
      prompt: "Una variable que solo puede valer Verdadero o Falso y se usa para marcar si algo paso o controlar un ciclo se llama:",
      options: [
        "Variable de trabajo.",
        "Bandera o switch (variable booleana de control).",
        "Acumulador.",
        "Variable global.",
      ],
      answerIndex: 1,
      accepted: [],
      explanation:
        "La bandera o switch es una variable booleana de control: funciona como un interruptor de Verdadero/Falso para marcar estados o controlar la continuidad de un ciclo.",
      difficulty: "media",
    },
    {
      id: "tipos-variables-q4",
      type: "mc",
      prompt: "Que es una variable LOCAL segun su ambito?",
      options: [
        "Una variable que se puede usar en todo el programa, desde cualquier parte.",
        "Una variable que existe solo dentro de un bloque o de una funcion y no se puede usar fuera de ahi.",
        "Una variable que guarda numeros con decimales.",
        "Una variable que siempre suma de a uno.",
      ],
      answerIndex: 1,
      accepted: [],
      explanation:
        "Una variable local se declara y existe dentro de un bloque o funcion; solo es accesible ahi adentro y desaparece cuando ese bloque termina.",
      difficulty: "media",
    },
    {
      id: "tipos-variables-q5",
      type: "vf",
      prompt:
        "Una variable global es accesible desde cualquier parte del programa.",
      options: ["Verdadero", "Falso"],
      answerIndex: 0,
      accepted: [],
      explanation:
        "Las variables globales se declaran fuera de las funciones y se pueden usar en todo el programa, desde cualquier bloque.",
      difficulty: "facil",
    },
    {
      id: "tipos-variables-q6",
      type: "vf",
      prompt:
        "Un contador y un acumulador son ejemplos de clasificacion de variables por su USO o funcion.",
      options: ["Verdadero", "Falso"],
      answerIndex: 0,
      accepted: [],
      explanation:
        "Por su uso las variables pueden ser de trabajo, contadores, acumuladores o banderas; el criterio de uso describe para que sirve la variable.",
      difficulty: "facil",
    },
    {
      id: "tipos-variables-q7",
      type: "vf",
      prompt:
        "Una variable declarada dentro de una funcion (local) se puede usar libremente desde cualquier otra funcion del programa.",
      options: ["Verdadero", "Falso"],
      answerIndex: 1,
      accepted: [],
      explanation:
        "Es falso: una variable local solo existe dentro de su funcion o bloque. Para que sea accesible en todo el programa deberia ser global.",
      difficulty: "media",
    },
    {
      id: "tipos-variables-q8",
      type: "fill",
      prompt:
        "Por su ambito, una variable que se puede usar en todo el programa se llama ____.",
      options: [],
      answerIndex: -1,
      accepted: ["global"],
      explanation:
        "La variable global se declara fuera de las funciones y es accesible en todo el programa, a diferencia de la local que vive dentro de un bloque.",
      difficulty: "facil",
    },
    {
      id: "tipos-variables-q9",
      type: "fill",
      prompt:
        "Segun su contenido, una variable que guarda texto entre comillas, como \"Ana\", es de tipo ____.",
      options: [],
      answerIndex: -1,
      accepted: ["cadena", "string", "alfanumerica"],
      explanation:
        "Las variables alfanumericas o de cadena (string) guardan texto: una secuencia de caracteres entre comillas, como \"Ana\".",
      difficulty: "media",
    },
  ],
  flashcards: [
    {
      id: "tipos-variables-f1",
      front: "Cuales son los tres criterios para clasificar las variables?",
      back: "Por su contenido (tipo de dato), por su uso (funcion dentro del programa) y por su ambito (alcance).",
    },
    {
      id: "tipos-variables-f2",
      front: "Como se clasifican las variables por su CONTENIDO?",
      back: "Numericas (enteras y reales), alfanumericas/de cadena (string), logicas/booleanas y de caracter (char).",
    },
    {
      id: "tipos-variables-f3",
      front: "Como se clasifican las variables por su USO?",
      back: "De trabajo, contadores (suman una constante fija), acumuladores (suman una variable) y banderas/switches (booleanas de control).",
    },
    {
      id: "tipos-variables-f4",
      front: "Que es una bandera o switch?",
      back: "Una variable booleana de control (Verdadero/Falso) que marca si algo paso o controla la continuidad de un ciclo.",
    },
    {
      id: "tipos-variables-f5",
      front: "Que diferencia hay entre variable local y global?",
      back: "La local existe solo dentro de un bloque o funcion; la global se declara afuera y es accesible en todo el programa.",
    },
    {
      id: "tipos-variables-f6",
      front: "De un ejemplo de variable numerica entera y una real.",
      back: "Entera: edad = 20 (sin decimales). Real (flotante): precio = 99.90 (con decimales).",
    },
  ],
  matchPairs: [
    {
      term: "Numerica entera",
      definition: "Variable que guarda numeros sin parte decimal. Ejemplo: edad = 20.",
    },
    {
      term: "Alfanumerica",
      definition: "Variable de cadena (string) que guarda texto entre comillas. Ejemplo: nombre = \"Ana\".",
    },
    {
      term: "Bandera / switch",
      definition: "Variable booleana de control (Verdadero/Falso) que marca un estado o controla un ciclo.",
    },
    {
      term: "Variable de trabajo",
      definition: "Variable de uso general que guarda resultados intermedios y datos para calculos.",
    },
    {
      term: "Variable local",
      definition: "Existe solo dentro de un bloque o funcion; fuera de ahi no se puede usar.",
    },
    {
      term: "Variable global",
      definition: "Declarada fuera de las funciones; accesible en todo el programa.",
    },
  ],
  orderChallenge: null,
  terms: ["NUMERICA", "BOOLEANA", "CONTADOR", "BANDERA", "LOCAL", "GLOBAL"],
};

export default topic;
