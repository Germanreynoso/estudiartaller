import type { Topic } from "../types";

const topic: Topic = {
  id: "inf-nube",
  number: 6,
  module: "inf-herramientas",
  title: "Computacion en la nube (cloud)",
  short:
    "Definicion de la nube informatica y sus caracteristicas principales.",
  theory: `La **computacion en la nube** (en ingles *cloud computing*) es un modelo que permite **usar servicios de computo, almacenamiento y aplicaciones a traves de internet**, bajo demanda, sin depender de la infraestructura instalada en tu propia computadora.

En vez de guardar los archivos o instalar los programas en el disco local, todo vive en **servidores remotos** de un proveedor (data centers) a los que accedes por la red. Pagas o usas solo lo que necesitas, cuando lo necesitas.

## Idea central

- Los recursos (procesador, memoria, disco, programas) estan en **servidores de un proveedor**, no en tu equipo.
- Se accede a ellos **por internet**, desde cualquier lugar y dispositivo.
- El proveedor se encarga del mantenimiento, la seguridad fisica y las actualizaciones.

## Caracteristicas principales

| Caracteristica | Que significa |
|---|---|
| Autoservicio bajo demanda | El usuario contrata o usa recursos al instante, sin intervencion humana del proveedor. |
| Acceso por red | Se llega al servicio desde cualquier lugar y dispositivo con conexion (PC, celular, tablet). |
| Elasticidad / escalabilidad | Los recursos crecen o se reducen segun la necesidad del momento. |
| Pago por uso | Se abona solo lo que se consume (almacenamiento, tiempo, usuarios). |
| Recursos compartidos | Muchos usuarios comparten la misma infraestructura (modelo multiusuario). |
| Alta disponibilidad | El servicio funciona casi siempre, con copias y respaldo en varios servidores. |

## Modelos de servicio

Segun cuanto administra el proveedor y cuanto el usuario, se distinguen tres modelos:

- **IaaS (Infraestructura como Servicio):** se alquila la infraestructura basica (servidores virtuales, red, almacenamiento). El usuario gestiona el sistema operativo y sus aplicaciones. Ej.: maquinas virtuales.
- **PaaS (Plataforma como Servicio):** el proveedor ofrece un entorno listo para **desarrollar y publicar aplicaciones**, sin preocuparse por el hardware ni el sistema operativo.
- **SaaS (Software como Servicio):** el usuario **usa un programa ya listo por internet**, sin instalar nada. Es el modelo mas comun para el usuario final.

## Ejemplos cotidianos

Servicios de almacenamiento y aplicaciones en la nube que usamos todos los dias:

- **Google Drive**
- **Dropbox**
- **OneDrive** (Microsoft)
- **iCloud** (Apple)

Con ellos guardas fotos, documentos y videos en internet y los abris desde cualquier equipo.

## Ventajas

- Acceso a los archivos desde **cualquier lugar y dispositivo**.
- No hace falta invertir en hardware potente ni preocuparse por el mantenimiento.
- Facilita el **trabajo colaborativo** (varias personas sobre el mismo documento).
- Copias de seguridad automaticas y escalabilidad inmediata.

## Desventajas

- **Dependencia de internet:** sin conexion no se accede a los datos ni a los servicios.
- **Seguridad y privacidad:** los datos estan en servidores de terceros; hay que confiar en el proveedor.
- Costos que pueden crecer con el uso y menor control sobre donde estan alojados los datos.

> Idea clave: la nube cambia el "tener" por el "usar". En lugar de comprar y mantener equipos y programas, se accede a ellos como un servicio por internet, pagando por lo que se consume.`,
  keyPoints: [
    "La nube provee computo, almacenamiento y aplicaciones a traves de internet, bajo demanda.",
    "Los recursos estan en servidores remotos del proveedor, no en el equipo local.",
    "Caracteristicas: autoservicio, acceso por red, elasticidad, pago por uso, recursos compartidos y alta disponibilidad.",
    "Modelos de servicio: IaaS (infraestructura), PaaS (plataforma) y SaaS (software).",
    "Ejemplos: Google Drive, Dropbox, OneDrive e iCloud.",
    "Ventaja: acceso desde cualquier lugar. Desventaja: dependencia de internet y dudas de privacidad.",
  ],
  questions: [
    {
      id: "inf-nube-q1",
      type: "mc",
      prompt: "Que es la computacion en la nube?",
      options: [
        "Un programa que se instala en el disco local.",
        "El uso de servicios de computo, almacenamiento y aplicaciones a traves de internet.",
        "Un tipo de memoria RAM mas rapida.",
        "Una red interna sin conexion a internet.",
      ],
      answerIndex: 1,
      accepted: [],
      explanation:
        "La nube permite usar computo, almacenamiento y aplicaciones por internet, bajo demanda, sin depender del equipo local.",
      difficulty: "facil",
    },
    {
      id: "inf-nube-q2",
      type: "mc",
      prompt: "Cual de estos es un ejemplo de almacenamiento en la nube?",
      options: [
        "Un pendrive USB.",
        "El disco duro interno de la PC.",
        "Google Drive.",
        "La memoria RAM.",
      ],
      answerIndex: 2,
      accepted: [],
      explanation:
        "Google Drive guarda los archivos en servidores remotos accesibles por internet, es almacenamiento en la nube. El pendrive, el disco y la RAM son locales.",
      difficulty: "facil",
    },
    {
      id: "inf-nube-q3",
      type: "mc",
      prompt:
        "Que caracteristica de la nube permite aumentar o reducir los recursos segun la necesidad?",
      options: [
        "Elasticidad o escalabilidad.",
        "Autoservicio bajo demanda.",
        "Recursos compartidos.",
        "Alta disponibilidad.",
      ],
      answerIndex: 0,
      accepted: [],
      explanation:
        "La elasticidad (o escalabilidad) es la capacidad de que los recursos crezcan o se reduzcan segun la demanda del momento.",
      difficulty: "media",
    },
    {
      id: "inf-nube-q4",
      type: "mc",
      prompt:
        "En que modelo el usuario usa un programa ya listo por internet, sin instalar nada?",
      options: [
        "IaaS (Infraestructura como Servicio).",
        "PaaS (Plataforma como Servicio).",
        "SaaS (Software como Servicio).",
        "LAN (Red de area local).",
      ],
      answerIndex: 2,
      accepted: [],
      explanation:
        "SaaS (Software como Servicio) entrega un programa ya listo por internet; el usuario solo lo usa, sin instalarlo ni mantenerlo.",
      difficulty: "media",
    },
    {
      id: "inf-nube-q5",
      type: "vf",
      prompt:
        "En la computacion en la nube los archivos y programas se guardan en servidores remotos del proveedor.",
      options: ["Verdadero", "Falso"],
      answerIndex: 0,
      accepted: [],
      explanation:
        "Verdadero: en la nube los recursos viven en servidores del proveedor y se accede a ellos por internet, no en el equipo local.",
      difficulty: "facil",
    },
    {
      id: "inf-nube-q6",
      type: "vf",
      prompt:
        "Una desventaja de la nube es que depende de la conexion a internet para acceder a los datos.",
      options: ["Verdadero", "Falso"],
      answerIndex: 0,
      accepted: [],
      explanation:
        "Verdadero: sin conexion a internet no se puede acceder a los archivos ni a los servicios alojados en la nube.",
      difficulty: "facil",
    },
    {
      id: "inf-nube-q7",
      type: "vf",
      prompt:
        "El pago por uso significa que hay que pagar siempre una tarifa fija sin importar cuanto se consuma.",
      options: ["Verdadero", "Falso"],
      answerIndex: 1,
      accepted: [],
      explanation:
        "Falso: el pago por uso significa abonar solo por lo que realmente se consume (almacenamiento, tiempo o usuarios).",
      difficulty: "media",
    },
    {
      id: "inf-nube-q8",
      type: "fill",
      prompt:
        "La caracteristica que permite acceder al servicio desde cualquier lugar y dispositivo se llama acceso por ____.",
      options: [],
      answerIndex: -1,
      accepted: ["red", "internet"],
      explanation:
        "El acceso por red (internet) permite llegar al servicio desde cualquier lugar y dispositivo con conexion.",
      difficulty: "media",
    },
    {
      id: "inf-nube-q9",
      type: "fill",
      prompt:
        "El modelo de servicio en el que se alquila la infraestructura basica (servidores, red, almacenamiento) se abrevia ____.",
      options: [],
      answerIndex: -1,
      accepted: ["iaas"],
      explanation:
        "IaaS (Infraestructura como Servicio) ofrece la infraestructura basica; el usuario gestiona el sistema operativo y sus aplicaciones.",
      difficulty: "dificil",
    },
  ],
  flashcards: [
    {
      id: "inf-nube-f1",
      front: "Que es la computacion en la nube?",
      back: "El uso de servicios de computo, almacenamiento y aplicaciones por internet, bajo demanda, sin depender del equipo local.",
    },
    {
      id: "inf-nube-f2",
      front: "Donde estan los recursos en la nube?",
      back: "En servidores remotos del proveedor (data centers), a los que se accede por internet.",
    },
    {
      id: "inf-nube-f3",
      front: "Nombra caracteristicas principales de la nube",
      back: "Autoservicio bajo demanda, acceso por red, elasticidad, pago por uso, recursos compartidos y alta disponibilidad.",
    },
    {
      id: "inf-nube-f4",
      front: "Que son IaaS, PaaS y SaaS?",
      back: "Modelos de servicio: IaaS entrega infraestructura, PaaS una plataforma para desarrollar y SaaS un programa ya listo por internet.",
    },
    {
      id: "inf-nube-f5",
      front: "Ejemplos de almacenamiento en la nube",
      back: "Google Drive, Dropbox, OneDrive e iCloud.",
    },
    {
      id: "inf-nube-f6",
      front: "Una ventaja y una desventaja de la nube",
      back: "Ventaja: acceso desde cualquier lugar y dispositivo. Desventaja: depende de internet y hay dudas de seguridad y privacidad.",
    },
    {
      id: "inf-nube-f7",
      front: "Que es la elasticidad o escalabilidad?",
      back: "La capacidad de aumentar o reducir los recursos segun la necesidad del momento.",
    },
  ],
  matchPairs: [
    {
      term: "Computacion en la nube",
      definition: "Uso de computo, almacenamiento y aplicaciones por internet.",
    },
    {
      term: "Elasticidad",
      definition: "Aumentar o reducir los recursos segun la necesidad.",
    },
    {
      term: "Pago por uso",
      definition: "Abonar solo lo que realmente se consume.",
    },
    {
      term: "SaaS",
      definition: "Usar un programa ya listo por internet, sin instalar nada.",
    },
    {
      term: "IaaS",
      definition: "Alquilar la infraestructura basica: servidores, red y disco.",
    },
    {
      term: "Google Drive",
      definition: "Ejemplo de almacenamiento de archivos en la nube.",
    },
  ],
  orderChallenge: {
    id: "inf-nube-order",
    title: "Pasos para guardar un archivo en la nube",
    steps: [
      "Tener conexion a internet en el dispositivo",
      "Entrar al servicio con la cuenta de usuario",
      "Elegir o crear la carpeta de destino",
      "Subir el archivo desde el equipo",
      "El archivo queda disponible desde cualquier dispositivo",
    ],
  },
  terms: ["NUBE", "INTERNET", "SERVIDOR", "ELASTICIDAD", "ALMACENAMIENTO"],
};

export default topic;
