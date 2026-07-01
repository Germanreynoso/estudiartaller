import type { Topic } from "../types";

const topic: Topic = {
  id: "inf-trabajo-colaborativo",
  number: 7,
  module: "inf-herramientas",
  title: "Trabajo colaborativo",
  short:
    "Definicion y caracteristicas del trabajo colaborativo con herramientas digitales.",
  theory: `El **trabajo colaborativo** es una forma de trabajar en la que **varias personas** se organizan para lograr un **objetivo comun**, coordinando sus tareas y compartiendo recursos. Hoy se apoya fuertemente en **herramientas digitales** que permiten trabajar juntos aunque cada integrante este en un lugar distinto.

No se trata solo de repartir tareas: implica **comunicarse**, **coordinarse** y **construir algo en conjunto** que sea mejor que lo que cada uno haria por separado.

## Definicion

Trabajo colaborativo: proceso en el que un **grupo de personas** aporta su esfuerzo y conocimiento hacia una **meta compartida**, dividiendo las tareas, intercambiando informacion y usando herramientas que facilitan el trabajo en equipo.

## Caracteristicas principales

- **Objetivo comun:** todos los integrantes trabajan por la misma meta, no por objetivos separados.
- **Comunicacion:** se intercambian ideas, dudas y acuerdos de forma clara y frecuente.
- **Coordinacion:** las tareas se organizan para no repetir trabajo ni dejar huecos.
- **Roles y responsabilidades:** cada persona tiene una funcion asignada y sabe de que se ocupa.
- **Documentos compartidos:** los archivos estan disponibles para todo el equipo en un mismo lugar.
- **Edicion en tiempo real:** varias personas pueden trabajar sobre el mismo documento a la vez y ver los cambios al instante.
- **Retroalimentacion:** los integrantes se dan comentarios y sugerencias para mejorar el resultado.

## Herramientas digitales

| Herramienta | Para que sirve |
|---|---|
| **Google Workspace** | Documentos, hojas de calculo y presentaciones compartidas y editables en linea |
| **Microsoft Teams** | Chat, reuniones y trabajo en equipo integrado con archivos |
| **Trello** | Organizar tareas en tableros con tarjetas y listas |
| **Repositorios compartidos** | Guardar y versionar archivos comunes (por ejemplo de codigo) |
| **Videollamadas** | Reuniones a distancia por video y audio (Meet, Zoom, Teams) |

## Beneficios

- **Mejores resultados:** la suma de aportes suele superar al trabajo individual.
- **Aprendizaje mutuo:** cada integrante aprende de los demas.
- **Division del trabajo:** las tareas se reparten y avanzan mas rapido.
- **Disponibilidad desde cualquier lugar:** al estar en la nube, se puede trabajar desde casa, la escuela o el trabajo.

> Idea clave: el trabajo colaborativo combina **personas coordinadas** con **herramientas digitales** para lograr en equipo lo que seria mas dificil de hacer en soledad.`,
  keyPoints: [
    "El trabajo colaborativo es varias personas trabajando juntas hacia un objetivo comun.",
    "Se apoya en herramientas digitales para coordinar tareas y compartir recursos.",
    "Sus pilares son objetivo comun, comunicacion, coordinacion y roles definidos.",
    "Los documentos compartidos permiten edicion en tiempo real y retroalimentacion.",
    "Herramientas tipicas: Google Workspace, Microsoft Teams, Trello, repositorios y videollamadas.",
    "Beneficios: mejores resultados, aprendizaje mutuo, division del trabajo y acceso desde cualquier lugar.",
  ],
  questions: [
    {
      id: "inf-trabajo-colaborativo-q1",
      type: "mc",
      prompt: "Que es el trabajo colaborativo?",
      options: [
        "Una persona haciendo todas las tareas sola.",
        "Varias personas trabajando juntas hacia un objetivo comun.",
        "Un programa que corrige documentos automaticamente.",
        "Guardar archivos en una computadora sin conexion.",
      ],
      answerIndex: 1,
      accepted: [],
      explanation:
        "El trabajo colaborativo es un grupo de personas que coordina tareas y comparte recursos para lograr una meta comun.",
      difficulty: "facil",
    },
    {
      id: "inf-trabajo-colaborativo-q2",
      type: "mc",
      prompt:
        "Cual de estas NO es una caracteristica del trabajo colaborativo?",
      options: [
        "Objetivo comun.",
        "Comunicacion entre los integrantes.",
        "Roles y responsabilidades definidos.",
        "Que cada uno persiga una meta distinta en secreto.",
      ],
      answerIndex: 3,
      accepted: [],
      explanation:
        "En el trabajo colaborativo todos comparten la misma meta; perseguir objetivos separados y ocultos rompe la colaboracion.",
      difficulty: "media",
    },
    {
      id: "inf-trabajo-colaborativo-q3",
      type: "mc",
      prompt:
        "Que herramienta se usa tipicamente para organizar tareas en tableros con tarjetas y listas?",
      options: ["Trello", "Una calculadora", "Un antivirus", "El bloc de notas"],
      answerIndex: 0,
      accepted: [],
      explanation:
        "Trello organiza el trabajo en tableros con listas y tarjetas, ideal para repartir y seguir tareas del equipo.",
      difficulty: "media",
    },
    {
      id: "inf-trabajo-colaborativo-q4",
      type: "mc",
      prompt:
        "Cual es un beneficio del trabajo colaborativo con herramientas digitales?",
      options: [
        "Poder trabajar desde cualquier lugar con conexion.",
        "Impedir que otros vean los cambios.",
        "Eliminar la necesidad de comunicarse.",
        "Que solo una persona pueda editar para siempre.",
      ],
      answerIndex: 0,
      accepted: [],
      explanation:
        "Al estar en la nube, los recursos se pueden usar desde casa, la escuela o el trabajo, favoreciendo la disponibilidad.",
      difficulty: "facil",
    },
    {
      id: "inf-trabajo-colaborativo-q5",
      type: "vf",
      prompt:
        "La edicion en tiempo real permite que varias personas trabajen sobre el mismo documento a la vez.",
      options: ["Verdadero", "Falso"],
      answerIndex: 0,
      accepted: [],
      explanation:
        "La edicion en tiempo real muestra los cambios al instante y deja que el equipo edite un documento de forma simultanea.",
      difficulty: "facil",
    },
    {
      id: "inf-trabajo-colaborativo-q6",
      type: "vf",
      prompt:
        "En el trabajo colaborativo la comunicacion entre los integrantes es innecesaria.",
      options: ["Verdadero", "Falso"],
      answerIndex: 1,
      accepted: [],
      explanation:
        "Falso: la comunicacion es un pilar del trabajo colaborativo; sin ella no hay coordinacion ni acuerdos.",
      difficulty: "facil",
    },
    {
      id: "inf-trabajo-colaborativo-q7",
      type: "vf",
      prompt:
        "Microsoft Teams y las videollamadas ayudan a coordinar el trabajo a distancia.",
      options: ["Verdadero", "Falso"],
      answerIndex: 0,
      accepted: [],
      explanation:
        "Ambas herramientas permiten comunicarse, reunirse y coordinar tareas aunque el equipo este en lugares distintos.",
      difficulty: "media",
    },
    {
      id: "inf-trabajo-colaborativo-q8",
      type: "fill",
      prompt:
        "Todos los integrantes de un equipo colaborativo trabajan por un mismo ____ comun.",
      options: [],
      answerIndex: -1,
      accepted: ["objetivo", "objetivo comun", "fin", "meta"],
      explanation:
        "El objetivo comun es la meta compartida que orienta el esfuerzo de todo el equipo.",
      difficulty: "media",
    },
    {
      id: "inf-trabajo-colaborativo-q9",
      type: "fill",
      prompt:
        "Los archivos disponibles para todo el equipo en un mismo lugar se llaman documentos ____.",
      options: [],
      answerIndex: -1,
      accepted: ["compartidos", "compartido"],
      explanation:
        "Los documentos compartidos estan accesibles para todos, lo que permite editarlos y consultarlos en conjunto.",
      difficulty: "media",
    },
  ],
  flashcards: [
    {
      id: "inf-trabajo-colaborativo-f1",
      front: "Que es el trabajo colaborativo?",
      back: "Varias personas que coordinan tareas y comparten recursos para lograr un objetivo comun, apoyandose en herramientas digitales.",
    },
    {
      id: "inf-trabajo-colaborativo-f2",
      front: "Cuales son sus pilares?",
      back: "Objetivo comun, comunicacion, coordinacion, roles y responsabilidades.",
    },
    {
      id: "inf-trabajo-colaborativo-f3",
      front: "Que es la edicion en tiempo real?",
      back: "Que varias personas trabajen sobre el mismo documento a la vez y vean los cambios al instante.",
    },
    {
      id: "inf-trabajo-colaborativo-f4",
      front: "Que es la retroalimentacion en un equipo?",
      back: "Los comentarios y sugerencias que se dan los integrantes para mejorar el resultado.",
    },
    {
      id: "inf-trabajo-colaborativo-f5",
      front: "Nombra herramientas de trabajo colaborativo",
      back: "Google Workspace, Microsoft Teams, Trello, repositorios compartidos y videollamadas.",
    },
    {
      id: "inf-trabajo-colaborativo-f6",
      front: "Beneficios del trabajo colaborativo",
      back: "Mejores resultados, aprendizaje mutuo, division del trabajo y disponibilidad desde cualquier lugar.",
    },
    {
      id: "inf-trabajo-colaborativo-f7",
      front: "Para que sirve Trello?",
      back: "Para organizar tareas en tableros con listas y tarjetas y seguir su avance.",
    },
  ],
  matchPairs: [
    {
      term: "Objetivo comun",
      definition: "Meta compartida que orienta el esfuerzo de todo el equipo.",
    },
    {
      term: "Coordinacion",
      definition: "Organizar las tareas para no repetir trabajo ni dejar huecos.",
    },
    {
      term: "Documentos compartidos",
      definition: "Archivos disponibles para todo el equipo en un mismo lugar.",
    },
    {
      term: "Edicion en tiempo real",
      definition: "Varias personas editan el mismo documento a la vez.",
    },
    {
      term: "Retroalimentacion",
      definition: "Comentarios y sugerencias para mejorar el resultado.",
    },
    {
      term: "Trello",
      definition: "Herramienta de tableros con listas y tarjetas para tareas.",
    },
  ],
  orderChallenge: {
    id: "inf-trabajo-colaborativo-order",
    title: "Pasos para organizar un trabajo colaborativo",
    steps: [
      "Definir el objetivo comun del equipo",
      "Repartir roles y responsabilidades",
      "Elegir las herramientas digitales a usar",
      "Compartir los documentos con todo el equipo",
      "Trabajar y comunicarse durante el proceso",
      "Dar retroalimentacion y revisar el resultado final",
    ],
  },
  terms: ["COLABORAR", "EQUIPO", "OBJETIVO", "TRELLO", "ROLES", "COMPARTIR"],
};

export default topic;
