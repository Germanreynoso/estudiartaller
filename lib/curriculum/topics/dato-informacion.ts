import type { Topic } from "../types";

const topic: Topic = {
  id: "dato-informacion",
  number: 9,
  module: "datos",
  title: "Dato e Informacion",
  short: "El dato es la entrada cruda; la informacion es el dato procesado y con significado.",
  theory: `Un **dato** es un hecho, evento o transaccion que se registra. Es la **entrada sin procesar**, la *materia prima* a partir de la cual se produce la informacion. Por si solo, un dato no tiene contexto ni significado claro: es solo un valor crudo.

La **informacion** es un conjunto de **datos ordenados, secuenciados y procesados** por un algoritmo, comunicados de tal manera que pueden ser **entendidos e interpretados por el receptor**. La informacion responde a un contexto y, por eso, tiene significado.

La diferencia clave es simple:

- El **dato** es la entrada cruda, **sin contexto**.
- La **informacion** es el resultado **procesado**, **con significado**.

## Del dato a la informacion

La informacion no aparece sola: surge de tomar datos y procesarlos. El siguiente esquema muestra ese flujo:

\`\`\`
    DATOS              PROCESAMIENTO            INFORMACION
 (sin procesar)        (algoritmo:           (datos con contexto
                    ordenar, secuenciar,      y significado, lista
                       procesar)              para comunicar)
 +-----------+        +----------------+       +-----------------+
 |  38       |  --->  |  ordenar y     | --->  | El paciente Juan|
 |  Juan     |        |  dar contexto  |       | tiene 38 grados |
 |  fiebre   |        |                |       | de fiebre       |
 +-----------+        +----------------+       +-----------------+
\`\`\`

Los datos '38', 'Juan' y 'fiebre' son hechos sueltos. Solo cuando se ordenan, se procesan y se les da contexto se convierten en informacion que el receptor puede entender.

## Ejemplos para diferenciarlos

Comparar ejemplos ayuda a fijar la diferencia:

- Dato: '38'. Informacion: 'El paciente Juan tiene 38 grados de fiebre'.
- Dato: 'Juan'. Informacion: 'El alumno Juan aprobo el examen de Taller'.
- Dato: '25/06'. Informacion: 'El parcial es el 25 de junio'.

En todos los casos, el dato es un valor aislado; la informacion lo pone en contexto, lo ordena con otros datos y comunica algo que el receptor puede interpretar.

## Por que importa esta diferencia

En programacion, la computadora recibe **datos** como entrada (input), los **procesa** con un algoritmo y produce **informacion** como salida (output). Entender que el dato es la materia prima y la informacion es el producto procesado es la base para pensar cualquier programa: primero hay datos crudos, luego un proceso, y al final informacion util.`,
  keyPoints: [
    "Dato: hecho, evento o transaccion registrado; es la entrada sin procesar (materia prima).",
    "Informacion: conjunto de datos ordenados, secuenciados y procesados por un algoritmo.",
    "La informacion se comunica de modo que el receptor pueda entenderla e interpretarla.",
    "Diferencia clave: el dato es la entrada cruda sin contexto; la informacion es el resultado con significado.",
    "Ejemplo de dato: '38' o 'Juan'. Ejemplo de informacion: 'El paciente Juan tiene 38 grados de fiebre'.",
    "Flujo general: datos (entrada) -> procesamiento (algoritmo) -> informacion (salida).",
  ],
  questions: [
    {
      id: "dato-informacion-q1",
      type: "mc",
      prompt: "Cual es la mejor definicion de dato?",
      options: [
        "Un hecho, evento o transaccion registrado; la entrada sin procesar.",
        "Un conjunto de datos procesados y con significado para el receptor.",
        "Un algoritmo que ordena y secuencia la entrada de un programa.",
        "El resultado final que entiende e interpreta el receptor.",
      ],
      answerIndex: 0,
      accepted: [],
      explanation:
        "El dato es un hecho, evento o transaccion que se registra; es la entrada sin procesar, la materia prima de la cual se produce la informacion.",
      difficulty: "facil",
    },
    {
      id: "dato-informacion-q2",
      type: "mc",
      prompt: "Cual es la mejor definicion de informacion?",
      options: [
        "Un conjunto de datos ordenados, secuenciados y procesados, comunicados para que el receptor los entienda.",
        "Un hecho aislado y sin contexto que se registra como entrada.",
        "La materia prima cruda a partir de la cual se obtienen los datos.",
        "Un valor numerico que no necesita ningun procesamiento.",
      ],
      answerIndex: 0,
      accepted: [],
      explanation:
        "La informacion es un conjunto de datos ordenados, secuenciados y procesados por un algoritmo, comunicados de manera que el receptor pueda entenderlos e interpretarlos.",
      difficulty: "facil",
    },
    {
      id: "dato-informacion-q3",
      type: "mc",
      prompt: "Cual es la diferencia clave entre dato e informacion?",
      options: [
        "El dato es la entrada cruda sin contexto; la informacion es el resultado procesado con significado.",
        "El dato siempre es texto y la informacion siempre es un numero.",
        "El dato es la salida del programa y la informacion es la entrada.",
        "No hay diferencia: dato e informacion son sinonimos.",
      ],
      answerIndex: 0,
      accepted: [],
      explanation:
        "La diferencia clave es que el dato es la entrada cruda, sin contexto, mientras que la informacion es el resultado procesado, con contexto y significado.",
      difficulty: "media",
    },
    {
      id: "dato-informacion-q4",
      type: "mc",
      prompt: "Cual de las siguientes opciones es un ejemplo de INFORMACION (y no de un dato suelto)?",
      options: [
        "El paciente Juan tiene 38 grados de fiebre.",
        "38",
        "Juan",
        "fiebre",
      ],
      answerIndex: 0,
      accepted: [],
      explanation:
        "'38', 'Juan' y 'fiebre' son datos sueltos sin contexto; al ordenarlos y procesarlos se obtiene la informacion 'El paciente Juan tiene 38 grados de fiebre'.",
      difficulty: "media",
    },
    {
      id: "dato-informacion-q5",
      type: "vf",
      prompt: "El dato es la entrada sin procesar (materia prima) a partir de la cual se produce la informacion.",
      options: ["Verdadero", "Falso"],
      answerIndex: 0,
      accepted: [],
      explanation:
        "Es verdadero: el dato es un hecho registrado, la entrada cruda o materia prima de la cual, al procesarla, se produce la informacion.",
      difficulty: "facil",
    },
    {
      id: "dato-informacion-q6",
      type: "vf",
      prompt: "La informacion es lo mismo que un dato, ya que ninguno de los dos necesita procesamiento.",
      options: ["Verdadero", "Falso"],
      answerIndex: 1,
      accepted: [],
      explanation:
        "Es falso: el dato es la entrada cruda sin procesar, mientras que la informacion es el resultado de procesar y ordenar datos para darles significado.",
      difficulty: "media",
    },
    {
      id: "dato-informacion-q7",
      type: "vf",
      prompt: "La informacion debe comunicarse de manera que el receptor pueda entenderla e interpretarla.",
      options: ["Verdadero", "Falso"],
      answerIndex: 0,
      accepted: [],
      explanation:
        "Es verdadero: parte de la definicion de informacion es que se comunica de tal manera que el receptor puede entenderla e interpretarla.",
      difficulty: "media",
    },
    {
      id: "dato-informacion-q8",
      type: "fill",
      prompt: "La entrada sin procesar, la materia prima de la cual se produce la informacion, se llama ____.",
      options: [],
      answerIndex: -1,
      accepted: ["dato", "el dato", "datos"],
      explanation:
        "El dato es la entrada sin procesar (materia prima); al ordenarlo y procesarlo se obtiene la informacion.",
      difficulty: "facil",
    },
    {
      id: "dato-informacion-q9",
      type: "fill",
      prompt: "El conjunto de datos ordenados, secuenciados y procesados, comunicados con significado, se llama ____.",
      options: [],
      answerIndex: -1,
      accepted: ["informacion", "la informacion"],
      explanation:
        "La informacion es el conjunto de datos ordenados, secuenciados y procesados por un algoritmo, con contexto y significado para el receptor.",
      difficulty: "facil",
    },
  ],
  flashcards: [
    {
      id: "dato-informacion-f1",
      front: "Que es un dato?",
      back: "Un hecho, evento o transaccion registrado; la entrada sin procesar (materia prima) de la cual se produce la informacion.",
    },
    {
      id: "dato-informacion-f2",
      front: "Que es la informacion?",
      back: "Un conjunto de datos ordenados, secuenciados y procesados por un algoritmo, comunicados para que el receptor los entienda e interprete.",
    },
    {
      id: "dato-informacion-f3",
      front: "Cual es la diferencia clave entre dato e informacion?",
      back: "El dato es la entrada cruda, sin contexto; la informacion es el resultado procesado, con significado.",
    },
    {
      id: "dato-informacion-f4",
      front: "Da un ejemplo de dato y otro de informacion.",
      back: "Dato: '38' o 'Juan'. Informacion: 'El paciente Juan tiene 38 grados de fiebre'.",
    },
    {
      id: "dato-informacion-f5",
      front: "Que rol cumple el algoritmo entre el dato y la informacion?",
      back: "Procesa: ordena y secuencia los datos crudos para convertirlos en informacion con significado.",
    },
    {
      id: "dato-informacion-f6",
      front: "Cual es el flujo general de dato a informacion?",
      back: "Datos (entrada sin procesar) -> procesamiento (algoritmo) -> informacion (salida con contexto).",
    },
  ],
  matchPairs: [
    {
      term: "Dato",
      definition: "Hecho, evento o transaccion registrado; entrada sin procesar.",
    },
    {
      term: "Informacion",
      definition: "Datos ordenados, secuenciados y procesados, con significado.",
    },
    {
      term: "Materia prima",
      definition: "Forma de describir al dato: insumo crudo del que sale la informacion.",
    },
    {
      term: "Procesamiento",
      definition: "Accion del algoritmo que convierte datos en informacion.",
    },
    {
      term: "Receptor",
      definition: "Quien debe poder entender e interpretar la informacion.",
    },
    {
      term: "Contexto",
      definition: "Lo que tiene la informacion y le falta al dato suelto.",
    },
  ],
  orderChallenge: null,
  terms: ["DATO", "INFORMACION", "PROCESAR", "CONTEXTO", "RECEPTOR", "ENTRADA"],
};

export default topic;
