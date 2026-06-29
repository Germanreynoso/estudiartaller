import { NextRequest } from "next/server";
import { getGroq, GROQ_MODEL, hasGroqKey } from "@/lib/groq";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 30;

type Mode = "clasificar" | "texto" | "analizar";

const KINDS = [
  "proposicion",
  "deseo",
  "orden",
  "pregunta",
  "funcion-proposicional",
  "exclamacion",
];

const SYS_CLASIFICAR = `Sos generador de ejercicios de logica para "Matematica para la computacion".
Genera 8 enunciados en espanol, VARIADOS, mezclando proposiciones y NO-proposiciones.
Tipos (kind) posibles: ${KINDS.join(", ")}.
- "proposicion": enunciado declarativo con valor de verdad (V o F), incluyendo igualdades numericas verdaderas o falsas.
- "deseo": expresa un deseo (ojala, me gustaria...).
- "orden": imperativo / pedido.
- "pregunta": termina con signo de pregunta.
- "funcion-proposicional": tiene variables libres (x, y...) por lo que NO es proposicion.
- "exclamacion": expresa emocion (que lindo!...).
Incluye al menos 1 de cada tipo cuando sea posible y al menos 3 proposiciones.
Devolve EXCLUSIVAMENTE este JSON:
{ "statements": [ { "text": "...", "isProposition": true|false, "kind": "...", "reason": "por que es o no es proposicion" } ] }`;

const SYS_TEXTO = `Sos generador de textos breves para practicar analisis logico en "Matematica para la computacion".
Genera UN texto corto en espanol (2 a 4 oraciones). Alterna al azar entre:
A) un texto apto para LOGICA PROPOSICIONAL: usa conectivos (y, o, no, si...entonces, si y solo si) y, si encaja, un razonamiento con premisas y conclusion.
B) un texto apto para LOGICA DE PREDICADOS: usa cuantificadores (todos, ningun, algun, existe, para todo, cada).
Devolve EXCLUSIVAMENTE: { "text": "..." }`;

const SYS_TEXTO_PRED = `Sos generador de textos breves para practicar LOGICA DE PREDICADOS en "Matematica para la computacion".
Genera UN texto corto en espanol (2 a 4 oraciones) que use cuantificadores (todos, ningun, algun, existe, para todo, cada) y que contenga preferentemente un ARGUMENTO (premisas y conclusion), por ejemplo un silogismo categorico como: "Todos los X son Y. Z es un X. Por lo tanto, Z es Y.".
Devolve EXCLUSIVAMENTE: { "text": "..." }`;

const SYS_ANALIZAR = `Sos un analista de logica para "Matematica para la computacion". Analiza el TEXTO del usuario.
Reglas de notacion: usa simbolos Unicode (¬ ∧ ∨ ⊕ → ↔ ∀ ∃) y variables minusculas (p, q, r). NO uses LaTeX.

1) TIPO. Primero deci si el texto es un ARGUMENTO o una sola proposicion:
- "esArgumento": true si el texto presenta premisas y una conclusion (marcadores: "por lo tanto", "luego", "en consecuencia", "se concluye", "∴"). false si es un unico enunciado.
- "esProposicion": false si el enunciado principal es pregunta, orden/imperativo, deseo o exclamacion (no tiene valor de verdad); true si es declarativo.
- "claseProposicion": uno de "simple", "conjuncion", "disyuncion", "condicional", "bicondicional", "negacion", "no-proposicion".
  Una proposicion SIMPLE no tiene conectivos. Una COMPUESTA se clasifica por su conectivo principal (y=conjuncion, o=disyuncion, si...entonces=condicional, si y solo si=bicondicional, no=negacion).
  IMPORTANTE: si "esArgumento" es true, "claseProposicion" debe describir la CONCLUSION del argumento (NO toda la formula). Si "esProposicion" es false, usa "no-proposicion".
- "explicacionTipo": breve explicacion (que conectivo principal tiene la conclusion/enunciado, o por que no es proposicion).
Siempre que detectes uno o mas argumentos, completa en cada uno "regla" (nombre de la regla de inferencia: Modus Ponens, Modus Tollens, Silogismo hipotetico, Silogismo disyuntivo, Silogismo categorico, Instanciacion universal, etc., o null) y "valido" (true/false).

2) Decidi si conviene modelarlo con LOGICA PROPOSICIONAL (sin cuantificadores) o LOGICA DE PREDICADOS (si hay "todos/algun/existe/ningun/para todo").
Si es proposicional, escribi una "simbolizacion" con una formula valida usando SOLO estas variables y operadores: letras minusculas, ¬ ∧ ∨ ⊕ → ↔ y parentesis (sera evaluada por un motor de tablas de verdad, asi que debe ser sintacticamente correcta).
Extrae TODOS los argumentos (razonamientos premisas -> conclusion) que encuentres; si hay una regla de inferencia conocida, nombrala (Modus Ponens, Modus Tollens, Silogismo hipotetico, Silogismo disyuntivo, etc.) e indica si es valido.

Devolve EXCLUSIVAMENTE este JSON:
{
  "esArgumento": true|false,
  "esProposicion": true|false,
  "claseProposicion": "simple"|"conjuncion"|"disyuncion"|"condicional"|"bicondicional"|"negacion"|"no-proposicion",
  "explicacionTipo": "breve",
  "tipoLogica": "proposicional" | "predicados",
  "justificacion": "breve por que",
  "proposiciones": [ { "var": "p", "texto": "...", "tipo": "simple" | "compuesta" } ],
  "simbolizacion": "formula proposicional o cadena vacia si es predicados",
  "predicados": [ { "simbolo": "P(x)", "texto": "x es ..." } ],
  "cuantificadores": [ "∀x P(x)" ],
  "argumentos": [ { "premisas": ["..."], "conclusion": "...", "regla": "nombre o null", "valido": true|false } ]
}`;

export async function POST(req: NextRequest) {
  if (!hasGroqKey()) {
    return Response.json(
      { error: "Falta configurar GROQ_API_KEY en el servidor." },
      { status: 503 }
    );
  }

  let body: { mode?: Mode; text?: string; focus?: string };
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "JSON invalido." }, { status: 400 });
  }

  const mode: Mode = body.mode ?? "analizar";
  const focusPred = body.focus === "predicados";

  let system: string;
  let user: string;
  let temperature = 0.6;
  if (mode === "clasificar") {
    system = SYS_CLASIFICAR;
    user = "Genera el set de 8 enunciados ahora.";
    temperature = 0.9;
  } else if (mode === "texto") {
    system = focusPred ? SYS_TEXTO_PRED : SYS_TEXTO;
    user = "Genera un texto nuevo ahora.";
    temperature = 1.0;
  } else {
    const text = (body.text ?? "").slice(0, 2000).trim();
    if (!text)
      return Response.json({ error: "Falta el texto a analizar." }, { status: 400 });
    system = SYS_ANALIZAR;
    user = focusPred
      ? `TEXTO A ANALIZAR:\n${text}\n\nNota: el usuario practica LOGICA DE PREDICADOS. Identifica predicados y cuantificadores, y analiza los argumentos con cuantificadores (silogismos categoricos, instanciacion universal), nombrando la regla y si son validos.`
      : `TEXTO A ANALIZAR:\n${text}`;
    temperature = 0.3;
  }

  try {
    const groq = getGroq();
    const completion = await groq.chat.completions.create({
      model: GROQ_MODEL,
      temperature,
      max_tokens: 1500,
      response_format: { type: "json_object" },
      messages: [
        { role: "system", content: system },
        { role: "user", content: user },
      ],
    });

    const raw = completion.choices[0]?.message?.content ?? "{}";
    let parsed: unknown;
    try {
      parsed = JSON.parse(raw);
    } catch {
      return Response.json(
        { error: "La IA devolvio un formato invalido. Reintenta." },
        { status: 502 }
      );
    }

    return Response.json(sanitize(mode, parsed));
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Error desconocido";
    return Response.json(
      { error: `No se pudo contactar a la IA: ${msg}` },
      { status: 502 }
    );
  }
}

// ---------------- Saneamiento de la salida de la IA ----------------

function sanitize(mode: Mode, data: unknown): Record<string, unknown> {
  const obj = (data ?? {}) as Record<string, unknown>;
  if (mode === "clasificar") {
    const arr = Array.isArray(obj.statements) ? obj.statements : [];
    const statements = arr
      .map((s) => {
        const o = (s ?? {}) as Record<string, unknown>;
        const kind = KINDS.includes(String(o.kind)) ? String(o.kind) : "proposicion";
        return {
          text: String(o.text ?? "").slice(0, 200),
          isProposition: Boolean(o.isProposition),
          kind,
          reason: String(o.reason ?? "").slice(0, 300),
        };
      })
      .filter((s) => s.text);
    return { statements };
  }
  if (mode === "texto") {
    return { text: String(obj.text ?? "").slice(0, 1200) };
  }
  // analizar
  const tipoLogica =
    obj.tipoLogica === "predicados" ? "predicados" : "proposicional";
  const toArr = (v: unknown) => (Array.isArray(v) ? v : []);
  const CLASES = [
    "simple",
    "conjuncion",
    "disyuncion",
    "condicional",
    "bicondicional",
    "negacion",
    "no-proposicion",
  ];
  const esProposicion = Boolean(obj.esProposicion);
  const claseProposicion = CLASES.includes(String(obj.claseProposicion))
    ? String(obj.claseProposicion)
    : esProposicion
      ? "simple"
      : "no-proposicion";
  return {
    esArgumento: Boolean(obj.esArgumento),
    esProposicion,
    claseProposicion,
    explicacionTipo: String(obj.explicacionTipo ?? ""),
    tipoLogica,
    justificacion: String(obj.justificacion ?? ""),
    proposiciones: toArr(obj.proposiciones).map((p) => {
      const o = (p ?? {}) as Record<string, unknown>;
      return {
        var: String(o.var ?? ""),
        texto: String(o.texto ?? ""),
        tipo: o.tipo === "compuesta" ? "compuesta" : "simple",
      };
    }),
    simbolizacion: String(obj.simbolizacion ?? ""),
    predicados: toArr(obj.predicados).map((p) => {
      const o = (p ?? {}) as Record<string, unknown>;
      return { simbolo: String(o.simbolo ?? ""), texto: String(o.texto ?? "") };
    }),
    cuantificadores: toArr(obj.cuantificadores).map((c) => String(c)),
    argumentos: toArr(obj.argumentos).map((a) => {
      const o = (a ?? {}) as Record<string, unknown>;
      return {
        premisas: toArr(o.premisas).map((x) => String(x)),
        conclusion: String(o.conclusion ?? ""),
        regla: o.regla == null ? null : String(o.regla),
        valido: Boolean(o.valido),
      };
    }),
  };
}
