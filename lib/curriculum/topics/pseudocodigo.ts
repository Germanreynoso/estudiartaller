import type { Topic } from "../types";

const topic: Topic = {
  id: "pseudocodigo",
  number: 2,
  module: "fundamentos",
  title: "Pseudocodigo",
  short: "Lenguaje intermedio entre el natural y el formal para expresar algoritmos.",
  theory: `El **pseudocodigo** es una forma de expresar los pasos de un programa de la manera mas parecida a un lenguaje de programacion, pero sin serlo. Representa por pasos la solucion a un problema o algoritmo. Su nombre lo dice todo: "pseudo" significa **falso**, asi que es **codigo falso**, escrito para que lo entienda el ser humano y no la maquina.

Por eso decimos que el pseudocodigo es un **lenguaje intermedio** entre el **lenguaje natural** (como hablamos las personas) y el **lenguaje de programacion** (como C, Java o TypeScript). Nos sirve para pensar y disenar la solucion antes de traducirla a codigo real.

## Caracteristicas

- **Facilita la programacion**: ayuda a ordenar la logica antes de escribir el codigo definitivo.
- **Facil de usar y manipular**: se lee y se modifica con poco esfuerzo.
- **Independiente del lenguaje**: el mismo pseudocodigo puede luego implementarse en cualquier lenguaje de programacion.

## Ventajas

- Facilita programar despues en un lenguaje formal.
- Mejora la **calidad** de la solucion, porque pensamos la logica antes de codificar.
- La **transicion a codigo** es sencilla: el diseno y la implementacion quedan muy parecidos.
- Lo puede implementar **otro programador**, ya que describe la solucion de forma clara y comprensible.

## Desventaja

- **Falta de normas o estandar**: no existe una unica forma "oficial" de escribir pseudocodigo, y esa libertad puede complicar la logica si cada quien usa convenciones distintas.

## PSeInt: la herramienta de clase

En clase usamos **PSeInt**, una herramienta que ofrece un **pseudolenguaje en espanol** y permite ver tambien **diagramas de flujo** de la solucion. PSeInt trabaja con **perfiles**:

- **Flexible** (perfil por defecto): mas permisivo, no obliga a declarar todo.
- **Estricto**: obliga a **definir las variables y sus tipos**, y cada instruccion debe terminar en **punto y coma** (;).

En clase usamos el **perfil estricto**, porque nos acerca mas a como se trabaja en un lenguaje de programacion real.

## Estructura basica en PSeInt

Un algoritmo en PSeInt se escribe entre 'Proceso' y 'FinProceso'. Las palabras 'Algoritmo' y 'FinAlgoritmo' son **sinonimos** de 'Proceso' y 'FinProceso'.

Detalles importantes:

- La **identacion** (sangria) se **recomienda** para que se lea mejor, pero **no es significativa**: el programa funciona igual con o sin ella.
- **No distingue mayusculas de minusculas**: 'Radio', 'radio' y 'RADIO' son lo mismo.
- Los **comentarios** se escriben con doble barra: //.

Esqueleto general de un proceso:

    Proceso <nombre>
        // aqui van las instrucciones
        // leer datos, calcular, mostrar resultados
    FinProceso

## Ejemplo: superficie y perimetro de un circulo

Un ejemplo clasico es calcular la **superficie** y el **perimetro** de un circulo a partir de su **radio**. La idea por pasos es:

1. Leer el radio que ingresa el usuario.
2. Calcular la superficie (area).
3. Calcular el perimetro.
4. Mostrar los resultados.

Asi se veria el pseudocodigo en PSeInt (perfil estricto, con tipos y punto y coma):

    Proceso Circulo
        Definir radio, superficie, perimetro Como Real;
        Escribir "Ingrese el radio:";
        Leer radio;
        superficie <- 3.14159 * radio * radio;
        perimetro <- 2 * 3.14159 * radio;
        Escribir "La superficie es: ", superficie;
        Escribir "El perimetro es: ", perimetro;
    FinProceso

En este ejemplo se ve la **estructura secuencial**: las instrucciones se ejecutan una despues de la otra, de arriba hacia abajo. Primero se leen los datos, despues se procesan (los calculos) y al final se muestran los resultados.`,
  keyPoints: [
    "Pseudocodigo = codigo falso (pseudo = falso): se escribe para que lo entienda el humano, no la maquina.",
    "Es un lenguaje intermedio entre el lenguaje natural y el lenguaje de programacion.",
    "Es independiente del lenguaje y facilita la transicion a codigo real.",
    "Su desventaja principal es la falta de un estandar unico, que puede complicar la logica.",
    "En clase se usa PSeInt en perfil estricto: definir variables y tipos, instrucciones terminadas en ; .",
    "Un proceso va entre Proceso y FinProceso (sinonimos de Algoritmo/FinAlgoritmo); comentarios con //.",
  ],
  questions: [
    {
      id: "pseudocodigo-q1",
      type: "mc",
      prompt: "Que es el pseudocodigo?",
      options: [
        "Un lenguaje de programacion que ejecuta directamente la computadora.",
        "Una forma de expresar los pasos de un programa de manera parecida a un lenguaje de programacion, pensada para el humano.",
        "Un tipo de hardware para correr algoritmos.",
        "Un compilador que traduce de un lenguaje a otro.",
      ],
      answerIndex: 1,
      accepted: [],
      explanation:
        "El pseudocodigo expresa por pasos la solucion a un problema de forma parecida a un lenguaje de programacion, pero esta escrito para que lo entienda el humano, no la maquina.",
      difficulty: "facil",
    },
    {
      id: "pseudocodigo-q2",
      type: "fill",
      prompt:
        "El prefijo 'pseudo' significa ____, por eso al pseudocodigo se lo llama codigo falso.",
      options: [],
      answerIndex: -1,
      accepted: ["falso"],
      explanation:
        "Pseudo significa falso; el pseudocodigo es codigo falso porque no lo ejecuta la maquina, sirve para que lo entienda la persona.",
      difficulty: "facil",
    },
    {
      id: "pseudocodigo-q3",
      type: "vf",
      prompt:
        "El pseudocodigo es un lenguaje intermedio entre el lenguaje natural y el lenguaje de programacion.",
      options: ["Verdadero", "Falso"],
      answerIndex: 0,
      accepted: [],
      explanation:
        "Justamente se ubica entre el lenguaje natural (como hablamos) y el lenguaje de programacion (como C o Java).",
      difficulty: "facil",
    },
    {
      id: "pseudocodigo-q4",
      type: "vf",
      prompt:
        "El pseudocodigo depende de un lenguaje de programacion en particular y solo sirve para ese lenguaje.",
      options: ["Verdadero", "Falso"],
      answerIndex: 1,
      accepted: [],
      explanation:
        "Una de sus caracteristicas es ser independiente del lenguaje: el mismo pseudocodigo puede implementarse en cualquier lenguaje.",
      difficulty: "media",
    },
    {
      id: "pseudocodigo-q5",
      type: "mc",
      prompt: "Cual es la principal desventaja del pseudocodigo?",
      options: [
        "Que solo lo entienden las maquinas.",
        "Que es muy dificil de modificar.",
        "Que no tiene normas ni un estandar unico, lo que puede complicar la logica.",
        "Que no se puede traducir a codigo real.",
      ],
      answerIndex: 2,
      accepted: [],
      explanation:
        "Su desventaja es la falta de normas o estandar: al no haber una unica forma de escribirlo, puede complicar la logica.",
      difficulty: "media",
    },
    {
      id: "pseudocodigo-q6",
      type: "mc",
      prompt:
        "En PSeInt, que caracteriza al perfil estricto que se usa en clase?",
      options: [
        "No hace falta declarar variables ni usar punto y coma.",
        "Obliga a definir las variables y sus tipos, y cada instruccion termina en punto y coma.",
        "Solo permite escribir en ingles.",
        "Elimina la posibilidad de usar comentarios.",
      ],
      answerIndex: 1,
      accepted: [],
      explanation:
        "El perfil estricto exige definir variables y tipos, y que cada instruccion termine en ; , acercandolo a un lenguaje formal.",
      difficulty: "media",
    },
    {
      id: "pseudocodigo-q7",
      type: "mc",
      prompt:
        "En PSeInt, cual es el par de palabras que delimita un algoritmo y es sinonimo de Algoritmo/FinAlgoritmo?",
      options: [
        "Inicio / Fin",
        "Proceso / FinProceso",
        "Main / EndMain",
        "Comenzar / Terminar",
      ],
      answerIndex: 1,
      accepted: [],
      explanation:
        "El bloque se escribe entre Proceso y FinProceso, que son sinonimos de Algoritmo y FinAlgoritmo.",
      difficulty: "facil",
    },
    {
      id: "pseudocodigo-q8",
      type: "vf",
      prompt:
        "En PSeInt la identacion es obligatoria y el lenguaje distingue mayusculas de minusculas.",
      options: ["Verdadero", "Falso"],
      answerIndex: 1,
      accepted: [],
      explanation:
        "La identacion se recomienda pero no es significativa, y PSeInt no distingue mayusculas de minusculas.",
      difficulty: "media",
    },
    {
      id: "pseudocodigo-q9",
      type: "fill",
      prompt:
        "En PSeInt, los comentarios se escriben usando los simbolos ____ al inicio de la linea.",
      options: [],
      answerIndex: -1,
      accepted: ["//", "doble barra", "dos barras"],
      explanation:
        "Los comentarios en PSeInt se indican con // y sirven para aclarar el codigo sin afectar la ejecucion.",
      difficulty: "facil",
    },
  ],
  flashcards: [
    {
      id: "pseudocodigo-f1",
      front: "Que es el pseudocodigo?",
      back: "Una forma de expresar por pasos la solucion de un problema, parecida a un lenguaje de programacion pero escrita para que la entienda el humano (codigo falso).",
    },
    {
      id: "pseudocodigo-f2",
      front: "Por que se llama 'codigo falso'?",
      back: "Porque 'pseudo' significa falso: no lo ejecuta la maquina, sirve para que la persona entienda la logica antes de programar.",
    },
    {
      id: "pseudocodigo-f3",
      front: "Donde se ubica el pseudocodigo?",
      back: "Es un lenguaje intermedio entre el lenguaje natural (humano) y el lenguaje de programacion (formal).",
    },
    {
      id: "pseudocodigo-f4",
      front: "Cual es la desventaja del pseudocodigo?",
      back: "La falta de normas o estandar unico, lo que puede complicar la logica si cada quien usa convenciones distintas.",
    },
    {
      id: "pseudocodigo-f5",
      front: "Que es PSeInt?",
      back: "Una herramienta de clase con un pseudolenguaje en espanol y diagramas de flujo; tiene perfil flexible (por defecto) y estricto (el que usamos en clase).",
    },
    {
      id: "pseudocodigo-f6",
      front: "Que exige el perfil estricto de PSeInt?",
      back: "Definir las variables y sus tipos, y terminar cada instruccion con punto y coma (;).",
    },
    {
      id: "pseudocodigo-f7",
      front: "Como se delimita un algoritmo en PSeInt?",
      back: "Entre Proceso y FinProceso (sinonimos de Algoritmo/FinAlgoritmo). Los comentarios se escriben con //.",
    },
  ],
  matchPairs: [
    {
      term: "Pseudocodigo",
      definition:
        "Pasos de la solucion expresados de forma parecida a un lenguaje de programacion, para el humano.",
    },
    {
      term: "Pseudo",
      definition: "Prefijo que significa falso: por eso es 'codigo falso'.",
    },
    {
      term: "PSeInt",
      definition:
        "Herramienta con pseudolenguaje en espanol y diagramas de flujo usada en clase.",
    },
    {
      term: "Perfil estricto",
      definition:
        "Modo que obliga a definir variables y tipos y terminar instrucciones en punto y coma.",
    },
    {
      term: "Proceso / FinProceso",
      definition:
        "Palabras que delimitan un algoritmo en PSeInt (sinonimos de Algoritmo/FinAlgoritmo).",
    },
    {
      term: "//",
      definition: "Simbolos para escribir comentarios en PSeInt.",
    },
  ],
  orderChallenge: {
    id: "pseudocodigo-order",
    title: "Ordena el pseudocodigo para calcular superficie y perimetro de un circulo",
    steps: [
      "Definir las variables radio, superficie y perimetro como Real.",
      "Pedir y leer el radio que ingresa el usuario.",
      "Calcular la superficie: superficie <- 3.14159 * radio * radio.",
      "Calcular el perimetro: perimetro <- 2 * 3.14159 * radio.",
      "Mostrar en pantalla la superficie y el perimetro.",
    ],
  },
  terms: ["PSEUDOCODIGO", "PSEINT", "FALSO", "PROCESO", "ALGORITMO", "ESTRICTO"],
};

export default topic;
