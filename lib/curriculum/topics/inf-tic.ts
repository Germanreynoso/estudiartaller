import type { Topic } from "../types";

const topic: Topic = {
  id: "inf-tic",
  number: 2,
  module: "inf-fundamentos",
  title: "Tecnologia de la Informacion y la Comunicacion (TIC)",
  short:
    "Definicion de las TIC y sus elementos clave (hardware, software, redes, internet, datos y usuarios).",
  theory: `Las **TIC** (Tecnologias de la Informacion y la Comunicacion) son el **conjunto de tecnologias y herramientas** que permiten **crear, almacenar, procesar, transmitir y compartir informacion**, y ademas **comunicarse** entre personas y sistemas.

La sigla junta dos ideas: la **informacion** (los datos que se generan y procesan) y la **comunicacion** (el intercambio de esa informacion a distancia). Las TIC combinan equipos, programas y redes para que la informacion fluya de un lugar a otro de forma rapida.

## Definicion

Las TIC agrupan todos los recursos que intervienen cuando manejamos informacion de manera digital: los aparatos, los programas que corren en ellos, las redes que los conectan y las personas que los usan. No son solo la computadora: incluyen el celular, internet, las plataformas y los servicios en linea.

## Elementos clave de las TIC

Para que las TIC funcionen se necesitan seis elementos que trabajan juntos:

| Elemento | Que es | Ejemplo |
|---|---|---|
| **Hardware** | La parte fisica: los equipos y dispositivos que se pueden tocar. | Computadora, celular, impresora, router. |
| **Software** | Los programas e instrucciones que hacen funcionar al hardware. | Sistema operativo, navegador, procesador de texto. |
| **Redes / Telecomunicaciones** | Los medios que conectan los equipos para transmitir datos. | Wifi, cable de red, fibra optica, red movil. |
| **Internet** | La red mundial que interconecta millones de redes y equipos. | Sitios web, correo, plataformas en la nube. |
| **Datos / Informacion** | El contenido que se procesa: los datos y la informacion util que resulta. | Textos, imagenes, videos, una base de clientes. |
| **Usuarios / Personas** | Quienes usan y dan sentido a la tecnologia. | Estudiantes, docentes, empleados, ciudadanos. |

### Explicacion de cada elemento

- **Hardware:** es todo lo material o fisico. Sin hardware no hay donde ejecutar los programas ni donde guardar los datos. Ej.: una notebook, un teclado, un servidor.
- **Software:** son los programas que le indican al hardware que hacer. Se divide en software de sistema (el sistema operativo) y software de aplicacion (Word, un navegador). Ej.: Windows, Chrome, WhatsApp.
- **Redes y telecomunicaciones:** permiten que los equipos se comuniquen y compartan informacion a distancia, con cables o de forma inalambrica. Ej.: una red wifi hogarena, la fibra optica de la ciudad.
- **Internet:** es la gran red que conecta al mundo. Sobre ella funcionan servicios como la web, el correo electronico y la nube. Ej.: acceder a una pagina o enviar un mail.
- **Datos e informacion:** los **datos** son hechos en bruto (un numero, un nombre); cuando se organizan y adquieren sentido se convierten en **informacion** util para decidir. Ej.: una lista de notas se procesa y da el promedio de un curso.
- **Usuarios / personas:** son quienes operan la tecnologia y la aprovechan. Sin personas que la usen, la tecnologia no cumple ningun objetivo. Ej.: un docente que arma una clase virtual.

## Importancia de las TIC

Las TIC transformaron la manera de estudiar, trabajar y comunicarse. Permiten acceder a mucha informacion en segundos, automatizar tareas, colaborar a distancia y tomar mejores decisiones. Se convirtieron en una herramienta central de la vida moderna.

## Ambitos de aplicacion

- **Educacion:** aulas virtuales, plataformas de estudio, clases a distancia y material digital.
- **Salud:** historias clinicas digitales, turnos en linea, telemedicina y diagnosticos asistidos.
- **Trabajo:** teletrabajo, videollamadas, sistemas de gestion y automatizacion de tareas.
- **Gobierno:** tramites en linea, portales de datos publicos y servicios digitales al ciudadano.

> Idea clave: las TIC no son un solo aparato, sino la **combinacion** de hardware, software, redes, internet, datos y personas trabajando juntos para manejar informacion.`,
  keyPoints: [
    "Las TIC son el conjunto de tecnologias para crear, almacenar, procesar, transmitir y compartir informacion y comunicarse.",
    "Sus seis elementos clave son: hardware, software, redes, internet, datos/informacion y usuarios.",
    "El hardware es la parte fisica y el software son los programas que lo hacen funcionar.",
    "Las redes e internet conectan los equipos para transmitir la informacion a distancia.",
    "Los datos en bruto se transforman en informacion util al organizarlos y darles sentido.",
    "Las TIC se aplican en educacion, salud, trabajo y gobierno, entre otros ambitos.",
  ],
  questions: [
    {
      id: "inf-tic-q1",
      type: "mc",
      prompt: "Que son las TIC?",
      options: [
        "Un tipo de computadora moderna.",
        "El conjunto de tecnologias para crear, procesar, transmitir y compartir informacion y comunicarse.",
        "Un programa para navegar por internet.",
        "Una red social muy usada.",
      ],
      answerIndex: 1,
      accepted: [],
      explanation:
        "TIC significa Tecnologias de la Informacion y la Comunicacion: agrupan las herramientas para manejar informacion y comunicarse, no un unico aparato o programa.",
      difficulty: "facil",
    },
    {
      id: "inf-tic-q2",
      type: "mc",
      prompt: "Cual de estos es un ejemplo de HARDWARE?",
      options: [
        "El sistema operativo Windows.",
        "El navegador Chrome.",
        "Una impresora.",
        "Un archivo de texto.",
      ],
      answerIndex: 2,
      accepted: [],
      explanation:
        "El hardware es la parte fisica que se puede tocar; una impresora es un dispositivo. Windows y Chrome son software, y el archivo es un dato.",
      difficulty: "facil",
    },
    {
      id: "inf-tic-q3",
      type: "mc",
      prompt:
        "Cual de los siguientes elementos de las TIC son los programas que hacen funcionar al hardware?",
      options: ["Software", "Redes", "Usuarios", "Datos"],
      answerIndex: 0,
      accepted: [],
      explanation:
        "El software son los programas e instrucciones que le indican al hardware que tareas realizar (por ejemplo el sistema operativo o un navegador).",
      difficulty: "facil",
    },
    {
      id: "inf-tic-q4",
      type: "mc",
      prompt:
        "Que elemento de las TIC permite conectar los equipos para transmitir datos a distancia?",
      options: [
        "El hardware de un solo equipo.",
        "Las redes y telecomunicaciones.",
        "Los usuarios.",
        "El software de aplicacion.",
      ],
      answerIndex: 1,
      accepted: [],
      explanation:
        "Las redes y telecomunicaciones (wifi, cable, fibra optica, red movil) son los medios que conectan los equipos para que compartan informacion.",
      difficulty: "media",
    },
    {
      id: "inf-tic-q5",
      type: "mc",
      prompt:
        "Cual es la diferencia entre datos e informacion?",
      options: [
        "Son exactamente lo mismo.",
        "Los datos son hechos en bruto y la informacion es el resultado util de organizarlos.",
        "La informacion es fisica y los datos son programas.",
        "Los datos solo existen en internet.",
      ],
      answerIndex: 1,
      accepted: [],
      explanation:
        "Los datos son hechos sueltos (un numero, un nombre); al organizarlos y darles sentido se convierten en informacion util para decidir.",
      difficulty: "media",
    },
    {
      id: "inf-tic-q6",
      type: "vf",
      prompt:
        "Las personas o usuarios son uno de los elementos clave de las TIC.",
      options: ["Verdadero", "Falso"],
      answerIndex: 0,
      accepted: [],
      explanation:
        "Verdadero: sin usuarios que operen y aprovechen la tecnologia, esta no cumple ningun objetivo; por eso las personas son un elemento clave.",
      difficulty: "facil",
    },
    {
      id: "inf-tic-q7",
      type: "vf",
      prompt:
        "Las TIC son unicamente la computadora, sin incluir redes ni personas.",
      options: ["Verdadero", "Falso"],
      answerIndex: 1,
      accepted: [],
      explanation:
        "Falso: las TIC son la combinacion de hardware, software, redes, internet, datos y usuarios trabajando juntos, no un solo aparato.",
      difficulty: "media",
    },
    {
      id: "inf-tic-q8",
      type: "fill",
      prompt:
        "La red mundial que interconecta millones de equipos y sobre la que funciona la web y el correo se llama ____.",
      options: [],
      answerIndex: -1,
      accepted: ["internet"],
      explanation:
        "Internet es la red mundial que interconecta redes y equipos, y sobre ella funcionan servicios como la web, el correo y la nube.",
      difficulty: "facil",
    },
    {
      id: "inf-tic-q9",
      type: "fill",
      prompt:
        "La parte fisica de las TIC, formada por los equipos que se pueden tocar, se llama ____.",
      options: [],
      answerIndex: -1,
      accepted: ["hardware"],
      explanation:
        "El hardware es la parte fisica y tangible: computadora, celular, impresora, router y demas dispositivos.",
      difficulty: "media",
    },
  ],
  flashcards: [
    {
      id: "inf-tic-f1",
      front: "Que significa la sigla TIC?",
      back: "Tecnologias de la Informacion y la Comunicacion.",
    },
    {
      id: "inf-tic-f2",
      front: "Que son las TIC?",
      back: "El conjunto de tecnologias para crear, almacenar, procesar, transmitir y compartir informacion y comunicarse.",
    },
    {
      id: "inf-tic-f3",
      front: "Cuales son los elementos clave de las TIC?",
      back: "Hardware, software, redes, internet, datos/informacion y usuarios/personas.",
    },
    {
      id: "inf-tic-f4",
      front: "Diferencia entre hardware y software",
      back: "Hardware es la parte fisica (equipos); software son los programas que hacen funcionar al hardware.",
    },
    {
      id: "inf-tic-f5",
      front: "Diferencia entre datos e informacion",
      back: "Los datos son hechos en bruto; la informacion es el resultado util de organizarlos y darles sentido.",
    },
    {
      id: "inf-tic-f6",
      front: "En que ambitos se aplican las TIC?",
      back: "Educacion, salud, trabajo y gobierno, entre otros.",
    },
    {
      id: "inf-tic-f7",
      front: "Que aportan las redes e internet a las TIC?",
      back: "Conectan los equipos para transmitir y compartir informacion a distancia.",
    },
  ],
  matchPairs: [
    {
      term: "Hardware",
      definition: "Parte fisica: los equipos y dispositivos que se tocan.",
    },
    {
      term: "Software",
      definition: "Los programas que hacen funcionar al hardware.",
    },
    {
      term: "Redes",
      definition: "Medios que conectan los equipos para transmitir datos.",
    },
    {
      term: "Internet",
      definition: "Red mundial que interconecta millones de equipos.",
    },
    {
      term: "Datos",
      definition: "Hechos en bruto que al organizarse dan informacion.",
    },
    {
      term: "Usuarios",
      definition: "Las personas que usan y aprovechan la tecnologia.",
    },
  ],
  orderChallenge: {
    id: "inf-tic-order",
    title: "Camino de la informacion en las TIC",
    steps: [
      "Un usuario genera datos con un dispositivo (hardware)",
      "El software procesa esos datos en el equipo",
      "Los datos procesados se convierten en informacion util",
      "Las redes e internet transmiten la informacion",
      "Otro usuario recibe y comparte la informacion",
    ],
  },
  terms: ["HARDWARE", "SOFTWARE", "INTERNET", "REDES", "DATOS", "USUARIOS"],
};

export default topic;
