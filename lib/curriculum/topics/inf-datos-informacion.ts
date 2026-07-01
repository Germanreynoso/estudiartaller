import type { Topic } from "../types";

const topic: Topic = {
  id: "inf-datos-informacion",
  number: 1,
  module: "inf-fundamentos",
  title: "Datos e informacion",
  short:
    "Que son los datos, que es la informacion y como se transforman los datos en informacion.",
  theory: `Los **datos** y la **informacion** son la materia prima con la que trabaja la informatica. Parecen lo mismo, pero no lo son: los datos son la base y la informacion es el resultado util que obtenemos cuando esos datos se procesan.

## Que son los datos

Un **dato** es la representacion de un **hecho en bruto**, sin procesar y **sin contexto**. Por si solo, un dato no comunica un significado completo: es simplemente un valor aislado.

Ejemplos de datos:

- **Numeros:** 38, 1990, 100
- **Letras y palabras:** A, casa, Lucia
- **Fechas:** 12/05/2024
- **Simbolos:** %, $, #

Si alguien te dice solamente "38", no sabes que significa: puede ser una edad, una temperatura, una cantidad de alumnos o el numero de una calle. Le falta **contexto**.

## Que es la informacion

La **informacion** son **datos procesados, organizados y con significado**. Se obtiene cuando a los datos se les agrega **contexto** y se los ordena de forma que sean **utiles para tomar decisiones**.

Ejemplo: si al dato "38" le agregamos contexto y decimos "El paciente tiene **38 grados** de temperatura corporal", ya es informacion, porque comunica algo con sentido y permite decidir (por ejemplo, que el paciente tiene fiebre).

## Diferencia entre dato e informacion

La clave esta en el **contexto** y el **significado**. Un mismo dato puede generar informacion distinta segun como se lo procese y organice.

Ejemplo concreto:

- **Dato:** 9, 7, 10 (tres numeros sueltos, no dicen mucho).
- **Procesamiento:** calcular el promedio de esas notas.
- **Informacion:** "El promedio del alumno es 8,67, por lo tanto aprobo la materia." Ahora si sirve para decidir.

## Tabla comparativa

| Aspecto | Dato | Informacion |
|---|---|---|
| Que es | Hecho en bruto, sin procesar | Datos procesados y organizados |
| Contexto | No tiene contexto | Tiene contexto y significado |
| Utilidad | Poco util por si solo | Util para tomar decisiones |
| Ejemplo | 38 | "El paciente tiene 38 grados de fiebre" |
| Relacion | Es la materia prima | Es el resultado del procesamiento |

## El ciclo: dato, procesamiento e informacion

La informacion no aparece sola: se produce a partir de los datos siguiendo un ciclo:

1. **Entrada de datos:** se recogen los hechos en bruto (por ejemplo, las notas de un alumno).
2. **Procesamiento:** se organizan, ordenan, filtran o calculan esos datos (por ejemplo, se saca el promedio).
3. **Salida de informacion:** se obtiene un resultado con significado, listo para usarse en una decision.

En forma resumida:

    dato  ->  procesamiento  ->  informacion

## Un paso mas: el conocimiento

Cuando la informacion se usa, se relaciona con la experiencia y se aplica a nuevas situaciones, se transforma en **conocimiento**. El conocimiento es el paso siguiente: permite no solo saber algo, sino tambien saber que hacer con eso. La escalera completa suele resumirse asi:

    dato  ->  informacion  ->  conocimiento

> Idea clave: un dato es un valor suelto; la informacion es ese dato con contexto y significado; el conocimiento es la informacion aplicada para actuar y decidir.`,
  keyPoints: [
    "Un dato es un hecho en bruto, sin procesar y sin contexto (numeros, letras, fechas, simbolos).",
    "La informacion son datos procesados, organizados y con significado.",
    "La diferencia clave entre dato e informacion es el contexto y el significado.",
    "Un mismo dato puede generar informacion distinta segun como se procese.",
    "El ciclo es: dato -> procesamiento -> informacion.",
    "La informacion util sirve para tomar decisiones.",
    "El conocimiento es el paso siguiente: informacion aplicada para actuar.",
  ],
  questions: [
    {
      id: "inf-datos-informacion-q1",
      type: "mc",
      prompt: "Que es un dato?",
      options: [
        "La representacion de un hecho en bruto, sin procesar y sin contexto.",
        "Un conjunto de datos con significado.",
        "Una decision tomada por una persona.",
        "Un programa de computadora.",
      ],
      answerIndex: 0,
      accepted: [],
      explanation:
        "El dato es un hecho en bruto (un numero, una letra, una fecha) que por si solo no tiene contexto ni significado completo.",
      difficulty: "facil",
    },
    {
      id: "inf-datos-informacion-q2",
      type: "mc",
      prompt: "Que es la informacion?",
      options: [
        "Un dato aislado sin ningun contexto.",
        "Datos procesados, organizados y con significado, utiles para decidir.",
        "Cualquier numero escrito en un papel.",
        "Un simbolo como el % o el $.",
      ],
      answerIndex: 1,
      accepted: [],
      explanation:
        "La informacion son datos que fueron procesados y organizados, a los que se les agrego contexto para que tengan significado y sirvan para tomar decisiones.",
      difficulty: "facil",
    },
    {
      id: "inf-datos-informacion-q3",
      type: "mc",
      prompt: "Cual de los siguientes es un ejemplo de DATO en bruto?",
      options: [
        "El paciente tiene 38 grados de fiebre.",
        "El promedio del alumno es 8 y aprobo.",
        "El numero 38.",
        "Las ventas subieron respecto al mes pasado.",
      ],
      answerIndex: 2,
      accepted: [],
      explanation:
        "'El numero 38' es un dato en bruto: no tiene contexto. Las otras opciones ya tienen significado, por lo que son informacion.",
      difficulty: "media",
    },
    {
      id: "inf-datos-informacion-q4",
      type: "mc",
      prompt:
        "Cual es el orden correcto del ciclo que transforma datos en informacion?",
      options: [
        "Informacion -> procesamiento -> dato",
        "Dato -> procesamiento -> informacion",
        "Procesamiento -> dato -> informacion",
        "Dato -> informacion -> procesamiento",
      ],
      answerIndex: 1,
      accepted: [],
      explanation:
        "Primero se ingresan los datos, luego se procesan (se ordenan, calculan o filtran) y finalmente se obtiene la informacion.",
      difficulty: "media",
    },
    {
      id: "inf-datos-informacion-q5",
      type: "vf",
      prompt: "Un dato por si solo siempre tiene un significado claro y completo.",
      options: ["Verdadero", "Falso"],
      answerIndex: 1,
      accepted: [],
      explanation:
        "Falso: un dato en bruto, como '38', no dice nada por si solo. Necesita contexto para transformarse en informacion.",
      difficulty: "facil",
    },
    {
      id: "inf-datos-informacion-q6",
      type: "vf",
      prompt:
        "La informacion se obtiene procesando y organizando los datos, agregandoles contexto.",
      options: ["Verdadero", "Falso"],
      answerIndex: 0,
      accepted: [],
      explanation:
        "Verdadero: al procesar los datos y darles contexto se convierten en informacion util para decidir.",
      difficulty: "facil",
    },
    {
      id: "inf-datos-informacion-q7",
      type: "vf",
      prompt:
        "El conocimiento es el paso previo al dato dentro del ciclo de la informacion.",
      options: ["Verdadero", "Falso"],
      answerIndex: 1,
      accepted: [],
      explanation:
        "Falso: el orden es dato -> informacion -> conocimiento. El conocimiento es el paso siguiente, no el previo.",
      difficulty: "dificil",
    },
    {
      id: "inf-datos-informacion-q8",
      type: "fill",
      prompt:
        "Los datos procesados, organizados y con significado se llaman ____.",
      options: [],
      answerIndex: -1,
      accepted: ["informacion"],
      explanation:
        "La informacion son datos procesados y con significado, utiles para tomar decisiones.",
      difficulty: "media",
    },
    {
      id: "inf-datos-informacion-q9",
      type: "fill",
      prompt:
        "Un hecho en bruto, sin procesar y sin contexto, se llama ____.",
      options: [],
      answerIndex: -1,
      accepted: ["dato"],
      explanation:
        "El dato es la representacion de un hecho en bruto, sin contexto: es la materia prima de la informacion.",
      difficulty: "media",
    },
  ],
  flashcards: [
    {
      id: "inf-datos-informacion-f1",
      front: "Que es un dato?",
      back: "La representacion de un hecho en bruto, sin procesar y sin contexto (numeros, letras, fechas, simbolos).",
    },
    {
      id: "inf-datos-informacion-f2",
      front: "Que es la informacion?",
      back: "Datos procesados, organizados y con significado, utiles para tomar decisiones.",
    },
    {
      id: "inf-datos-informacion-f3",
      front: "Cual es la diferencia entre dato e informacion?",
      back: "El dato es un hecho en bruto sin contexto; la informacion es ese dato procesado y con significado.",
    },
    {
      id: "inf-datos-informacion-f4",
      front: "Cual es el ciclo que transforma datos en informacion?",
      back: "Dato -> procesamiento -> informacion.",
    },
    {
      id: "inf-datos-informacion-f5",
      front: "Da un ejemplo de dato convertido en informacion.",
      back: "Dato: 38. Informacion: 'El paciente tiene 38 grados de fiebre'.",
    },
    {
      id: "inf-datos-informacion-f6",
      front: "Que es el conocimiento?",
      back: "El paso siguiente a la informacion: informacion aplicada y relacionada con la experiencia para actuar y decidir.",
    },
    {
      id: "inf-datos-informacion-f7",
      front: "Para que sirve la informacion?",
      back: "Para tomar decisiones, porque tiene contexto y significado.",
    },
  ],
  matchPairs: [
    {
      term: "Dato",
      definition: "Hecho en bruto, sin procesar y sin contexto.",
    },
    {
      term: "Informacion",
      definition: "Datos procesados y organizados, con significado.",
    },
    {
      term: "Procesamiento",
      definition: "Ordenar, calcular o filtrar los datos.",
    },
    {
      term: "Contexto",
      definition: "Lo que le da significado a un dato.",
    },
    {
      term: "Conocimiento",
      definition: "Informacion aplicada para actuar y decidir.",
    },
    {
      term: "Ejemplo de dato",
      definition: "Un numero suelto como 38, sin explicacion.",
    },
  ],
  orderChallenge: {
    id: "inf-datos-informacion-order",
    title: "Pasos para transformar datos en informacion",
    steps: [
      "Recolectar los datos en bruto (entrada)",
      "Organizar y ordenar los datos",
      "Procesarlos (calcular, filtrar, relacionar)",
      "Agregarles contexto y significado",
      "Obtener la informacion util (salida)",
      "Usar la informacion para tomar una decision",
    ],
  },
  terms: ["DATOS", "INFORMACION", "CONTEXTO", "PROCESAR", "CONOCIMIENTO"],
};

export default topic;
