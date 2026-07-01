import type { Topic } from "../types";

const topic: Topic = {
  id: "inf-ofimatica",
  number: 4,
  module: "inf-herramientas",
  title: "Herramientas ofimaticas",
  short:
    "Definicion, categorias, las mas utilizadas y sus objetivos y beneficios.",
  theory: `Las **herramientas ofimaticas** son **aplicaciones de software** disenadas para realizar las tareas tipicas de una **oficina**: escribir documentos, hacer calculos, armar presentaciones, gestionar el correo y organizar informacion. La palabra "ofimatica" nace de unir **oficina** e **informatica**.

Su meta es simple: que el trabajo de oficina se haga **mas rapido, mas prolijo y con menos errores** que a mano.

## Categorias de herramientas ofimaticas

Cada categoria resuelve un tipo de tarea distinto:

- **Procesador de texto:** crear y dar formato a documentos escritos (cartas, informes, trabajos).
- **Hoja de calculo (planilla):** organizar datos en filas y columnas, hacer calculos, formulas y graficos.
- **Programa de presentaciones:** armar diapositivas con texto, imagenes y animaciones para exponer.
- **Gestor de correo:** enviar, recibir y organizar mensajes de correo electronico.
- **Base de datos:** almacenar, ordenar y consultar grandes cantidades de informacion estructurada.
- **Agenda / calendario:** organizar tareas, eventos, citas y recordatorios.

## Las mas utilizadas

Las herramientas mas conocidas suelen venir agrupadas en **suites ofimaticas** (paquetes que reunen varias aplicaciones):

- **Procesador de texto:** Microsoft **Word** / **Google Docs**.
- **Hoja de calculo:** Microsoft **Excel** / **Google Sheets**.
- **Presentaciones:** Microsoft **PowerPoint** / **Google Slides**.

Las **suites** mas usadas son:

- **Microsoft Office:** la suite comercial mas difundida (Word, Excel, PowerPoint, Outlook, Access).
- **Google Workspace:** suite en la nube, se usa desde el navegador (Docs, Sheets, Slides, Gmail).
- **LibreOffice:** suite **libre y gratuita** (Writer, Calc, Impress, Base).

## Tabla: categoria, ejemplo y para que sirve

| Categoria | Ejemplo | Para que sirve |
|---|---|---|
| Procesador de texto | Word / Google Docs | Escribir y dar formato a documentos |
| Hoja de calculo | Excel / Google Sheets | Calcular y organizar datos en tablas |
| Presentaciones | PowerPoint / Google Slides | Armar diapositivas para exponer |
| Gestor de correo | Outlook / Gmail | Enviar y recibir correo electronico |
| Base de datos | Access / LibreOffice Base | Guardar y consultar informacion |
| Agenda / calendario | Google Calendar | Organizar eventos y recordatorios |

## Objetivos y beneficios

Estas herramientas existen para:

- **Aumentar la productividad:** hacer mas trabajo en menos tiempo.
- **Automatizar tareas:** las formulas, plantillas y funciones repiten trabajo por nosotros.
- **Dar formato profesional:** los documentos quedan prolijos y presentables.
- **Facilitar y agilizar el trabajo:** compartir, corregir y reutilizar es rapido y sencillo.

> Idea clave: la ofimatica no reemplaza al usuario, lo **potencia**: la persona decide y la herramienta ejecuta la parte repetitiva.`,
  keyPoints: [
    "Las herramientas ofimaticas son aplicaciones de software para tareas de oficina.",
    "Ofimatica = oficina + informatica.",
    "Categorias: procesador de texto, hoja de calculo, presentaciones, correo, base de datos y agenda.",
    "Las mas usadas: Word/Docs, Excel/Sheets y PowerPoint/Slides.",
    "Las suites reunen varias aplicaciones: Microsoft Office, Google Workspace y LibreOffice.",
    "Su objetivo es aumentar la productividad, automatizar tareas y dar formato profesional.",
    "LibreOffice es una suite libre y gratuita.",
  ],
  questions: [
    {
      id: "inf-ofimatica-q1",
      type: "mc",
      prompt: "Que son las herramientas ofimaticas?",
      options: [
        "Componentes fisicos de la computadora.",
        "Aplicaciones de software para realizar tareas de oficina.",
        "Juegos de entretenimiento para descansar.",
        "Cables y perifericos de conexion.",
      ],
      answerIndex: 1,
      accepted: [],
      explanation:
        "Son aplicaciones de software pensadas para las tareas tipicas de oficina: escribir, calcular, presentar y organizar informacion.",
      difficulty: "facil",
    },
    {
      id: "inf-ofimatica-q2",
      type: "mc",
      prompt: "Que herramienta se usa para hacer calculos y organizar datos en filas y columnas?",
      options: [
        "El procesador de texto.",
        "El programa de presentaciones.",
        "La hoja de calculo (planilla).",
        "El gestor de correo.",
      ],
      answerIndex: 2,
      accepted: [],
      explanation:
        "La hoja de calculo, como Excel o Google Sheets, organiza datos en filas y columnas y permite formulas y graficos.",
      difficulty: "facil",
    },
    {
      id: "inf-ofimatica-q3",
      type: "mc",
      prompt: "Cual de estas es una suite ofimatica libre y gratuita?",
      options: [
        "Microsoft Office",
        "Google Workspace",
        "LibreOffice",
        "Windows",
      ],
      answerIndex: 2,
      accepted: [],
      explanation:
        "LibreOffice es una suite libre y gratuita que incluye Writer, Calc, Impress y Base.",
      difficulty: "media",
    },
    {
      id: "inf-ofimatica-q4",
      type: "mc",
      prompt: "Que programa se utiliza para armar diapositivas y exponer un tema?",
      options: [
        "PowerPoint / Google Slides",
        "Excel / Google Sheets",
        "Outlook / Gmail",
        "Access / Base",
      ],
      answerIndex: 0,
      accepted: [],
      explanation:
        "Los programas de presentaciones, como PowerPoint o Google Slides, sirven para armar diapositivas con texto e imagenes.",
      difficulty: "facil",
    },
    {
      id: "inf-ofimatica-q5",
      type: "vf",
      prompt: "Word y Google Docs son ejemplos de procesadores de texto.",
      options: ["Verdadero", "Falso"],
      answerIndex: 0,
      accepted: [],
      explanation:
        "Verdadero: ambos sirven para crear documentos escritos y darles formato.",
      difficulty: "facil",
    },
    {
      id: "inf-ofimatica-q6",
      type: "vf",
      prompt: "Un objetivo de las herramientas ofimaticas es automatizar tareas y aumentar la productividad.",
      options: ["Verdadero", "Falso"],
      answerIndex: 0,
      accepted: [],
      explanation:
        "Verdadero: buscan hacer mas trabajo en menos tiempo, automatizando lo repetitivo con formulas y plantillas.",
      difficulty: "media",
    },
    {
      id: "inf-ofimatica-q7",
      type: "vf",
      prompt: "Una base de datos sirve principalmente para enviar y recibir correo electronico.",
      options: ["Verdadero", "Falso"],
      answerIndex: 1,
      accepted: [],
      explanation:
        "Falso: la base de datos almacena y consulta informacion. El correo se maneja con un gestor de correo como Outlook o Gmail.",
      difficulty: "media",
    },
    {
      id: "inf-ofimatica-q8",
      type: "fill",
      prompt: "La suite ofimatica en la nube de Google, que se usa desde el navegador, se llama Google ____.",
      options: [],
      answerIndex: -1,
      accepted: ["workspace"],
      explanation:
        "Google Workspace reune Docs, Sheets, Slides y Gmail, y funciona directamente en el navegador.",
      difficulty: "media",
    },
    {
      id: "inf-ofimatica-q9",
      type: "fill",
      prompt: "La palabra ofimatica surge de unir oficina con ____.",
      options: [],
      answerIndex: -1,
      accepted: ["informatica"],
      explanation:
        "Ofimatica = oficina + informatica: la informatica aplicada a las tareas de oficina.",
      difficulty: "facil",
    },
  ],
  flashcards: [
    {
      id: "inf-ofimatica-f1",
      front: "Que son las herramientas ofimaticas?",
      back: "Aplicaciones de software para realizar tareas de oficina: escribir, calcular, presentar y organizar.",
    },
    {
      id: "inf-ofimatica-f2",
      front: "De donde viene la palabra ofimatica?",
      back: "De unir oficina + informatica.",
    },
    {
      id: "inf-ofimatica-f3",
      front: "Para que sirve una hoja de calculo?",
      back: "Para organizar datos en filas y columnas y hacer calculos, formulas y graficos (Excel, Google Sheets).",
    },
    {
      id: "inf-ofimatica-f4",
      front: "Cuales son las suites ofimaticas mas usadas?",
      back: "Microsoft Office, Google Workspace y LibreOffice (libre y gratuita).",
    },
    {
      id: "inf-ofimatica-f5",
      front: "Con que herramienta se arman presentaciones?",
      back: "Con un programa de presentaciones: PowerPoint o Google Slides.",
    },
    {
      id: "inf-ofimatica-f6",
      front: "Cuales son los objetivos de la ofimatica?",
      back: "Aumentar la productividad, automatizar tareas, dar formato profesional y agilizar el trabajo.",
    },
    {
      id: "inf-ofimatica-f7",
      front: "Que herramienta gestiona el correo electronico?",
      back: "El gestor de correo: Outlook o Gmail.",
    },
  ],
  matchPairs: [
    {
      term: "Procesador de texto",
      definition: "Crea y da formato a documentos escritos (Word, Docs).",
    },
    {
      term: "Hoja de calculo",
      definition: "Organiza datos y hace calculos (Excel, Sheets).",
    },
    {
      term: "Presentaciones",
      definition: "Arma diapositivas para exponer (PowerPoint, Slides).",
    },
    {
      term: "Gestor de correo",
      definition: "Envia y recibe correo electronico (Outlook, Gmail).",
    },
    {
      term: "Base de datos",
      definition: "Almacena y consulta informacion estructurada.",
    },
    {
      term: "Suite ofimatica",
      definition: "Paquete que reune varias aplicaciones de oficina.",
    },
  ],
  orderChallenge: {
    id: "inf-ofimatica-order",
    title: "Pasos para elegir la herramienta ofimatica correcta",
    steps: [
      "Identificar la tarea que hay que resolver",
      "Determinar la categoria que corresponde (texto, calculo, etc.)",
      "Elegir la aplicacion adecuada (Word, Excel, etc.)",
      "Abrir la aplicacion y crear el archivo",
      "Realizar el trabajo y darle formato",
      "Guardar y compartir el resultado",
    ],
  },
  terms: ["OFIMATICA", "SOFTWARE", "PLANILLA", "SUITE", "DATOS", "CORREO"],
};

export default topic;
