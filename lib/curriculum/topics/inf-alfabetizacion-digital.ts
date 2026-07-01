import type { Topic } from "../types";

const topic: Topic = {
  id: "inf-alfabetizacion-digital",
  number: 3,
  module: "inf-fundamentos",
  title: "Alfabetizacion digital",
  short:
    "Que es la alfabetizacion digital y por que es importante en la sociedad actual.",
  theory: `La **alfabetizacion digital** es la capacidad de **buscar, evaluar, usar, crear y comunicar informacion** mediante las **TIC** (Tecnologias de la Informacion y la Comunicacion) de forma **efectiva, critica, responsable y segura**.

No se trata solo de saber apretar botones: implica **entender** para que sirve la tecnologia, elegir la herramienta adecuada, distinguir informacion confiable de la que no lo es y actuar de manera etica en el entorno digital.

## Mas que saber usar la computadora

Una persona alfabetizada digitalmente combina tres cosas:

- **Saber tecnico:** manejar dispositivos, programas y servicios (computadora, celular, internet, ofimatica).
- **Saber critico:** evaluar si una fuente es confiable, detectar noticias falsas y proteger sus datos.
- **Saber comunicativo:** expresar y compartir ideas de forma clara y respetuosa usando medios digitales.

## Competencias digitales que abarca

La alfabetizacion digital se organiza en grandes areas de competencia:

| Competencia | Que implica |
|---|---|
| Informacion y datos | Buscar, filtrar, evaluar y organizar informacion. |
| Comunicacion | Interactuar y colaborar en redes y plataformas. |
| Creacion de contenido | Producir textos, imagenes, videos y respetar derechos de autor. |
| Seguridad | Proteger dispositivos, datos personales y la salud digital. |
| Resolucion de problemas | Elegir la herramienta correcta y resolver fallas basicas. |

### Ejemplos concretos

- Buscar en internet y **verificar** la informacion en varias fuentes antes de compartirla.
- Usar **procesadores de texto y planillas de calculo** para estudiar o trabajar.
- Crear una contrasena segura y reconocer un correo de **phishing**.
- Hacer un tramite en linea o pedir un turno de salud desde el celular.

## Por que es importante en la sociedad

En una sociedad cada vez mas digital, estas competencias definen quien puede participar plenamente y quien queda afuera:

- **Inclusion social:** permite participar en la vida cultural, educativa y comunitaria en linea.
- **Empleabilidad:** casi todos los trabajos exigen manejar herramientas digitales; sin ellas se pierden oportunidades laborales.
- **Ciudadania digital:** habilita ejercer derechos y deberes en internet de forma responsable y respetuosa.
- **Acceso a servicios:** banca, salud, educacion y tramites del Estado se realizan cada vez mas en linea.
- **Seguridad en linea:** ayuda a protegerse de estafas, fraudes y del robo de datos personales.
- **Reduccion de la brecha digital:** cuanta mas gente este alfabetizada, menor es la desigualdad de acceso.

## Que es la brecha digital

La **brecha digital** es la **desigualdad** entre las personas o grupos que tienen acceso y saben usar las TIC y quienes **no** los tienen. Se explica por tres factores:

- **Brecha de acceso:** no contar con dispositivos ni conexion a internet.
- **Brecha de uso:** tener acceso pero no saber aprovechar las herramientas.
- **Brecha de calidad:** diferencias en la velocidad, los equipos o la formacion disponible.

### Consecuencias de la brecha digital

Quien queda del lado desfavorecido enfrenta **menos oportunidades**: dificultad para estudiar, para conseguir empleo, para acceder a tramites y servicios, y mayor **aislamiento** social. Por eso la alfabetizacion digital es una herramienta clave para **cerrar esa brecha** y lograr una sociedad mas equitativa.

> Idea clave: alfabetizarse digitalmente no es solo aprender a usar una maquina, sino ganar autonomia para participar, trabajar y ejercer derechos en un mundo digital.`,
  keyPoints: [
    "La alfabetizacion digital es buscar, evaluar, usar, crear y comunicar informacion con las TIC de forma efectiva, critica, responsable y segura.",
    "Combina saber tecnico, saber critico y saber comunicativo: no es solo apretar botones.",
    "Abarca competencias de informacion, comunicacion, creacion de contenido, seguridad y resolucion de problemas.",
    "Es importante para la inclusion social, la empleabilidad, la ciudadania digital y el acceso a servicios.",
    "Ayuda a protegerse en linea y a reducir la brecha digital.",
    "La brecha digital es la desigualdad entre quienes acceden y usan las TIC y quienes no.",
    "Sus consecuencias son menos oportunidades de estudio, empleo, servicios y mayor aislamiento.",
  ],
  questions: [
    {
      id: "inf-alfabetizacion-digital-q1",
      type: "mc",
      prompt: "Que es la alfabetizacion digital?",
      options: [
        "Saber escribir a mano con buena letra.",
        "La capacidad de buscar, evaluar, usar, crear y comunicar informacion con las TIC de forma responsable.",
        "Tener el celular mas moderno del mercado.",
        "Memorizar todos los programas de una computadora.",
      ],
      answerIndex: 1,
      accepted: [],
      explanation:
        "Es la capacidad de buscar, evaluar, usar, crear y comunicar informacion mediante las TIC de forma efectiva, critica, responsable y segura.",
      difficulty: "facil",
    },
    {
      id: "inf-alfabetizacion-digital-q2",
      type: "mc",
      prompt: "Que significa la sigla TIC?",
      options: [
        "Tecnologias de la Informacion y la Comunicacion.",
        "Trabajo, Internet y Computacion.",
        "Tecnicas de Impresion y Copiado.",
        "Tecnologia Integrada por Computadora.",
      ],
      answerIndex: 0,
      accepted: [],
      explanation:
        "TIC significa Tecnologias de la Informacion y la Comunicacion, las herramientas que permiten manejar informacion.",
      difficulty: "facil",
    },
    {
      id: "inf-alfabetizacion-digital-q3",
      type: "mc",
      prompt: "Que es la brecha digital?",
      options: [
        "Una falla que rompe la pantalla del celular.",
        "La distancia fisica entre dos computadoras.",
        "La desigualdad entre quienes acceden y usan las TIC y quienes no.",
        "El tiempo que tarda en cargar una pagina web.",
      ],
      answerIndex: 2,
      accepted: [],
      explanation:
        "La brecha digital es la desigualdad entre las personas o grupos que tienen acceso y saben usar las TIC y quienes no los tienen.",
      difficulty: "media",
    },
    {
      id: "inf-alfabetizacion-digital-q4",
      type: "mc",
      prompt:
        "Cual de las siguientes NO es una competencia de la alfabetizacion digital?",
      options: [
        "Buscar y evaluar informacion.",
        "Proteger los datos personales.",
        "Crear contenido digital.",
        "Reparar el motor de un automovil.",
      ],
      answerIndex: 3,
      accepted: [],
      explanation:
        "Reparar un motor no es una competencia digital. Las competencias abarcan informacion, comunicacion, creacion de contenido, seguridad y resolucion de problemas.",
      difficulty: "media",
    },
    {
      id: "inf-alfabetizacion-digital-q5",
      type: "vf",
      prompt:
        "La alfabetizacion digital es solamente saber apretar botones y usar aplicaciones.",
      options: ["Verdadero", "Falso"],
      answerIndex: 1,
      accepted: [],
      explanation:
        "Falso: incluye tambien evaluar informacion de forma critica, actuar de manera responsable y comunicarse, no solo el manejo tecnico.",
      difficulty: "facil",
    },
    {
      id: "inf-alfabetizacion-digital-q6",
      type: "vf",
      prompt:
        "La alfabetizacion digital ayuda a acceder a servicios como banca, salud y tramites en linea.",
      options: ["Verdadero", "Falso"],
      answerIndex: 0,
      accepted: [],
      explanation:
        "Verdadero: muchos servicios esenciales se realizan en linea y las competencias digitales permiten usarlos con autonomia.",
      difficulty: "facil",
    },
    {
      id: "inf-alfabetizacion-digital-q7",
      type: "vf",
      prompt:
        "La brecha digital no tiene ninguna consecuencia sobre las oportunidades laborales de las personas.",
      options: ["Verdadero", "Falso"],
      answerIndex: 1,
      accepted: [],
      explanation:
        "Falso: quien queda del lado desfavorecido tiene menos oportunidades de empleo, estudio y acceso a servicios, y mayor aislamiento.",
      difficulty: "media",
    },
    {
      id: "inf-alfabetizacion-digital-q8",
      type: "fill",
      prompt:
        "La desigualdad entre quienes acceden y usan las TIC y quienes no se llama brecha ____.",
      options: [],
      answerIndex: -1,
      accepted: ["digital"],
      explanation:
        "La brecha digital es esa desigualdad de acceso y uso de las tecnologias.",
      difficulty: "media",
    },
    {
      id: "inf-alfabetizacion-digital-q9",
      type: "fill",
      prompt:
        "Detectar un correo de phishing y crear contrasenas fuertes son parte de la competencia de ____.",
      options: [],
      answerIndex: -1,
      accepted: ["seguridad"],
      explanation:
        "La competencia de seguridad implica proteger los dispositivos, los datos personales y la salud digital.",
      difficulty: "dificil",
    },
  ],
  flashcards: [
    {
      id: "inf-alfabetizacion-digital-f1",
      front: "Que es la alfabetizacion digital?",
      back: "La capacidad de buscar, evaluar, usar, crear y comunicar informacion con las TIC de forma efectiva, critica, responsable y segura.",
    },
    {
      id: "inf-alfabetizacion-digital-f2",
      front: "Que significa TIC?",
      back: "Tecnologias de la Informacion y la Comunicacion.",
    },
    {
      id: "inf-alfabetizacion-digital-f3",
      front: "Que competencias abarca la alfabetizacion digital?",
      back: "Informacion y datos, comunicacion, creacion de contenido, seguridad y resolucion de problemas.",
    },
    {
      id: "inf-alfabetizacion-digital-f4",
      front: "Por que es importante en la sociedad?",
      back: "Favorece la inclusion social, la empleabilidad, la ciudadania digital, el acceso a servicios y la seguridad en linea.",
    },
    {
      id: "inf-alfabetizacion-digital-f5",
      front: "Que es la brecha digital?",
      back: "La desigualdad entre quienes tienen acceso y saben usar las TIC y quienes no los tienen.",
    },
    {
      id: "inf-alfabetizacion-digital-f6",
      front: "Cuales son las consecuencias de la brecha digital?",
      back: "Menos oportunidades de estudio, empleo y servicios, y mayor aislamiento social.",
    },
    {
      id: "inf-alfabetizacion-digital-f7",
      front: "Alfabetizacion digital: solo saber tecnico?",
      back: "No: combina saber tecnico, saber critico (evaluar fuentes) y saber comunicativo.",
    },
  ],
  matchPairs: [
    {
      term: "Alfabetizacion digital",
      definition: "Buscar, evaluar, usar, crear y comunicar informacion con las TIC.",
    },
    {
      term: "TIC",
      definition: "Tecnologias de la Informacion y la Comunicacion.",
    },
    {
      term: "Brecha digital",
      definition: "Desigualdad entre quienes acceden a las TIC y quienes no.",
    },
    {
      term: "Ciudadania digital",
      definition: "Ejercer derechos y deberes en internet de forma responsable.",
    },
    {
      term: "Competencia de seguridad",
      definition: "Proteger dispositivos, datos personales y salud digital.",
    },
    {
      term: "Empleabilidad",
      definition: "Poder acceder a trabajos que exigen manejar herramientas digitales.",
    },
  ],
  orderChallenge: {
    id: "inf-alfabetizacion-digital-order",
    title: "Pasos para usar informacion de internet de forma critica",
    steps: [
      "Definir que informacion se necesita buscar",
      "Buscar en fuentes usando las TIC",
      "Evaluar si las fuentes son confiables",
      "Verificar el dato en varias fuentes",
      "Usar o comunicar la informacion de forma responsable",
    ],
  },
  terms: ["INFORMACION", "TIC", "BRECHA", "COMPETENCIA", "SEGURIDAD", "INCLUSION"],
};

export default topic;
