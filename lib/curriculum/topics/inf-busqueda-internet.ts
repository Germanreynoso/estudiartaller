import type { Topic } from "../types";

const topic: Topic = {
  id: "inf-busqueda-internet",
  number: 5,
  module: "inf-herramientas",
  title: "Busqueda de informacion en internet",
  short:
    "Definicion y caracteristicas de la busqueda de informacion en internet y como evaluar las fuentes.",
  theory: `La **busqueda de informacion en internet** es el **proceso de localizar y recuperar** datos, textos, imagenes o recursos alojados en la web para responder a una necesidad concreta. No se trata solo de "escribir algo y mirar el primer resultado": implica **formular bien la consulta**, **elegir buenas herramientas** y **evaluar** si lo encontrado es confiable.

Para localizar informacion usamos **buscadores** (o motores de busqueda): programas que recorren la web, la indexan y devuelven una lista de resultados ordenados segun su relevancia para las palabras que escribimos.

## Buscadores mas usados

- **Google:** el buscador mas popular; muy amplio y con muchos filtros.
- **Bing:** buscador de Microsoft, integrado en Windows y Edge.
- **DuckDuckGo:** orientado a la **privacidad**, no rastrea al usuario ni guarda su historial.

Todos funcionan de forma parecida: uno escribe **palabras clave** y el buscador muestra los resultados mas relevantes.

## Caracteristicas de la busqueda

### Palabras clave

Las **palabras clave** son los terminos mas importantes de lo que queremos encontrar. Conviene usar **pocas palabras y precisas**, evitando frases largas o articulos innecesarios.

- Menos util: "quiero saber cuales son los planetas del sistema solar"
- Mas util: "planetas sistema solar"

### Operadores de busqueda

Los **operadores** son signos o comandos que afinan la busqueda:

| Operador | Para que sirve | Ejemplo |
|---|---|---|
| "comillas" | Busca la frase exacta | "energia renovable" |
| signo menos (-) | Excluye una palabra | jaguar -auto |
| site: | Busca solo en un sitio | reciclaje site:edu.ar |
| filetype: | Busca un tipo de archivo | informe filetype:pdf |
| OR | Uno u otro termino | perros OR gatos |

### Filtros

Los buscadores permiten **filtrar** los resultados por **fecha**, **tipo** (imagenes, videos, noticias), **idioma** o **region**, para acotar todavia mas lo que encontramos.

## Estrategias para buscar mejor

- Usar **palabras clave precisas** y quitar lo que sobra.
- Aplicar **operadores** (comillas, menos, site:) cuando la busqueda es amplia.
- **Reformular** la consulta con sinonimos si los resultados no sirven.
- Revisar **mas de un resultado**, no quedarse con el primero.
- Usar **filtros** de fecha e idioma para resultados actuales y comprensibles.

## Evaluacion y fiabilidad de las fuentes

No todo lo que aparece en internet es cierto. Antes de dar por buena una fuente conviene revisar:

- **Autor:** quien lo escribe? Es una persona o entidad con conocimiento del tema?
- **Fecha de actualizacion:** la informacion esta vigente o quedo desactualizada?
- **Dominio y tipo de sitio:** los dominios **.edu**, **.gob** u **.org** suelen ser mas serios que un blog anonimo.
- **Objetividad:** presenta los hechos o solo busca convencer o vender algo?
- **Contrastar:** aparece lo mismo en **otras fuentes** independientes?

### Caracteristicas de una fuente confiable

Una fuente confiable **identifica a su autor**, esta **actualizada**, proviene de un **sitio serio**, es **objetiva**, **cita sus fuentes** y **coincide** con otras fuentes fiables sobre el mismo tema.

> Idea clave: buscar bien no es encontrar rapido, sino encontrar informacion **relevante y confiable**, y eso siempre incluye **evaluar** de donde viene.`,
  keyPoints: [
    "Buscar informacion es el proceso de localizar y recuperar datos en la web para una necesidad concreta.",
    "Los buscadores (Google, Bing, DuckDuckGo) indexan la web y ordenan resultados por relevancia.",
    "Conviene usar palabras clave precisas y pocas, no frases largas.",
    "Operadores utiles: comillas (frase exacta), signo menos (excluir), site: (un solo sitio).",
    "Los filtros acotan por fecha, tipo, idioma o region.",
    "Evaluar una fuente: autor, fecha, dominio, objetividad y contrastar con otras.",
    "Una fuente confiable es identificable, actual, seria, objetiva y coincide con otras.",
  ],
  questions: [
    {
      id: "inf-busqueda-internet-q1",
      type: "mc",
      prompt: "Que es la busqueda de informacion en internet?",
      options: [
        "Escribir cualquier cosa y copiar el primer resultado.",
        "El proceso de localizar y recuperar informacion en la web para una necesidad concreta.",
        "Guardar archivos en el disco de la computadora.",
        "Enviar correos electronicos a un buscador.",
      ],
      answerIndex: 1,
      accepted: [],
      explanation:
        "Buscar informacion es el proceso de localizar y recuperar recursos de la web, formulando bien la consulta y evaluando lo encontrado.",
      difficulty: "facil",
    },
    {
      id: "inf-busqueda-internet-q2",
      type: "mc",
      prompt: "Cual de estos es un buscador orientado a la privacidad?",
      options: ["Google", "Bing", "DuckDuckGo", "Windows"],
      answerIndex: 2,
      accepted: [],
      explanation:
        "DuckDuckGo se orienta a la privacidad: no rastrea al usuario ni guarda su historial de busquedas.",
      difficulty: "facil",
    },
    {
      id: "inf-busqueda-internet-q3",
      type: "mc",
      prompt:
        "Que operador sirve para buscar una frase EXACTA?",
      options: [
        "El signo menos (-)",
        "Las comillas (\"\")",
        "El comando site:",
        "El comando filetype:",
      ],
      answerIndex: 1,
      accepted: [],
      explanation:
        "Al poner una frase entre comillas, el buscador la busca tal cual, en ese orden exacto de palabras.",
      difficulty: "media",
    },
    {
      id: "inf-busqueda-internet-q4",
      type: "mc",
      prompt:
        "Para que sirve el operador site: en una busqueda?",
      options: [
        "Para excluir una palabra de los resultados.",
        "Para limitar la busqueda a un sitio o dominio determinado.",
        "Para buscar solo imagenes.",
        "Para ordenar los resultados por fecha.",
      ],
      answerIndex: 1,
      accepted: [],
      explanation:
        "site: restringe los resultados a un dominio concreto, por ejemplo 'reciclaje site:edu.ar' busca solo en sitios .edu.ar.",
      difficulty: "media",
    },
    {
      id: "inf-busqueda-internet-q5",
      type: "mc",
      prompt:
        "Cual de estos datos ayuda a evaluar si una fuente es confiable?",
      options: [
        "El color de fondo de la pagina.",
        "La cantidad de publicidad que muestra.",
        "El autor, la fecha de actualizacion y el tipo de dominio.",
        "La velocidad de carga del sitio.",
      ],
      answerIndex: 2,
      accepted: [],
      explanation:
        "Para juzgar la fiabilidad se mira quien es el autor, si esta actualizada, el dominio, la objetividad y si coincide con otras fuentes.",
      difficulty: "media",
    },
    {
      id: "inf-busqueda-internet-q6",
      type: "vf",
      prompt:
        "Todo lo que aparece en internet es informacion verdadera y confiable.",
      options: ["Verdadero", "Falso"],
      answerIndex: 1,
      accepted: [],
      explanation:
        "Falso: en internet hay informacion falsa o desactualizada, por eso hay que evaluar cada fuente antes de darla por buena.",
      difficulty: "facil",
    },
    {
      id: "inf-busqueda-internet-q7",
      type: "vf",
      prompt:
        "Contrastar una informacion con otras fuentes independientes ayuda a comprobar su fiabilidad.",
      options: ["Verdadero", "Falso"],
      answerIndex: 0,
      accepted: [],
      explanation:
        "Verdadero: si varias fuentes serias e independientes coinciden, la informacion gana credibilidad.",
      difficulty: "facil",
    },
    {
      id: "inf-busqueda-internet-q8",
      type: "fill",
      prompt:
        "Los terminos mas importantes que escribimos en el buscador para encontrar algo se llaman palabras ____.",
      options: [],
      answerIndex: -1,
      accepted: ["clave", "claves"],
      explanation:
        "Las palabras clave son los terminos precisos que resumen lo que queremos encontrar.",
      difficulty: "media",
    },
    {
      id: "inf-busqueda-internet-q9",
      type: "fill",
      prompt:
        "El programa que recorre la web, la indexa y devuelve resultados se llama motor de busqueda o ____.",
      options: [],
      answerIndex: -1,
      accepted: ["buscador"],
      explanation:
        "Un buscador (motor de busqueda) indexa la web y muestra los resultados mas relevantes para las palabras clave.",
      difficulty: "media",
    },
  ],
  flashcards: [
    {
      id: "inf-busqueda-internet-f1",
      front: "Que es buscar informacion en internet?",
      back: "El proceso de localizar y recuperar informacion de la web para responder a una necesidad concreta.",
    },
    {
      id: "inf-busqueda-internet-f2",
      front: "Que es un buscador?",
      back: "Un programa que recorre e indexa la web y devuelve resultados ordenados por relevancia (Google, Bing, DuckDuckGo).",
    },
    {
      id: "inf-busqueda-internet-f3",
      front: "Que son las palabras clave?",
      back: "Los terminos mas importantes y precisos que escribimos para encontrar lo que buscamos.",
    },
    {
      id: "inf-busqueda-internet-f4",
      front: "Para que sirven las comillas en una busqueda?",
      back: "Para buscar una frase exacta, tal cual, en ese orden de palabras.",
    },
    {
      id: "inf-busqueda-internet-f5",
      front: "Que hace el operador site:?",
      back: "Limita la busqueda a un sitio o dominio determinado.",
    },
    {
      id: "inf-busqueda-internet-f6",
      front: "Como se evalua la fiabilidad de una fuente?",
      back: "Revisando autor, fecha de actualizacion, dominio, objetividad y contrastando con otras fuentes.",
    },
    {
      id: "inf-busqueda-internet-f7",
      front: "Como es una fuente confiable?",
      back: "Identifica a su autor, esta actualizada, es de un sitio serio, es objetiva y coincide con otras fuentes.",
    },
  ],
  matchPairs: [
    {
      term: "Buscador",
      definition: "Programa que indexa la web y ordena resultados por relevancia.",
    },
    {
      term: "Palabras clave",
      definition: "Terminos precisos que escribimos para encontrar algo.",
    },
    {
      term: "Comillas",
      definition: "Operador que busca una frase exacta.",
    },
    {
      term: "site:",
      definition: "Operador que limita la busqueda a un dominio.",
    },
    {
      term: "DuckDuckGo",
      definition: "Buscador orientado a la privacidad del usuario.",
    },
    {
      term: "Fuente confiable",
      definition: "La que tiene autor, esta actual, es seria y objetiva.",
    },
  ],
  orderChallenge: {
    id: "inf-busqueda-internet-order",
    title: "Pasos para buscar y evaluar informacion",
    steps: [
      "Definir que informacion se necesita",
      "Elegir palabras clave precisas",
      "Escribir la consulta en el buscador (usando operadores si hace falta)",
      "Revisar varios resultados, no solo el primero",
      "Evaluar la fuente: autor, fecha, dominio y objetividad",
      "Contrastar con otras fuentes antes de darla por valida",
    ],
  },
  terms: ["BUSCADOR", "INTERNET", "PALABRAS", "FUENTE", "DOMINIO", "RELEVANCIA"],
};

export default topic;
