// Motor EXACTO de tablas de verdad para logica proposicional.
// Tokeniza, parsea (descenso recursivo) y evalua una formula, generando la
// tabla completa con columnas para cada subformula. Sin IA: 100% deterministico.
//
// Operadores aceptados (con alias para que el usuario pueda tipear):
//   ¬  ~  !            negacion
//   ∧  &  *  "and"     conjuncion
//   ∨  |  +  "or"      disyuncion
//   ⊕  "xor"           disyuncion exclusiva
//   →  ->  =>          condicional
//   ↔  <->  <=>        bicondicional
// Variables: letras minusculas (p, q, r, ...). Constantes: V/1/⊤ (verdadero), F/0/⊥ (falso).

export type NodeType =
  | "var"
  | "const"
  | "not"
  | "and"
  | "or"
  | "xor"
  | "imp"
  | "iff";

export interface Node {
  type: NodeType;
  name?: string; // var
  value?: boolean; // const
  a?: Node; // operando unario / izquierdo
  b?: Node; // operando derecho
}

export const MAX_VARS = 5; // 2^5 = 32 filas

const BIN_OP: Partial<Record<NodeType, string>> = {
  and: "∧",
  or: "∨",
  xor: "⊕",
  imp: "→",
  iff: "↔",
};

const PREC: Record<NodeType, number> = {
  iff: 1,
  imp: 2,
  xor: 3,
  or: 4,
  and: 5,
  not: 6,
  var: 7,
  const: 7,
};

/** Reemplaza alias ASCII por los simbolos canonicos. */
export function normalizeFormula(input: string): string {
  return input
    .replace(/<->|<=>/g, "↔")
    .replace(/->|=>/g, "→")
    .replace(/\bxor\b/gi, "⊕")
    .replace(/\band\b/gi, "∧")
    .replace(/\bor\b/gi, "∨")
    .replace(/\bnot\b/gi, "¬")
    .replace(/[~!]/g, "¬")
    .replace(/&&|&|\*/g, "∧")
    .replace(/\|\||\|/g, "∨")
    .replace(/⊤/g, "V")
    .replace(/⊥/g, "F");
}

// ---------------- Tokenizer ----------------

type Token =
  | { t: "var"; name: string }
  | { t: "const"; value: boolean }
  | { t: "op"; op: "¬" | "∧" | "∨" | "⊕" | "→" | "↔" }
  | { t: "lparen" }
  | { t: "rparen" };

function tokenize(src: string): Token[] {
  const tokens: Token[] = [];
  for (let i = 0; i < src.length; i++) {
    const c = src[i];
    if (c === " " || c === "\t" || c === "\n") continue;
    if (c === "(") tokens.push({ t: "lparen" });
    else if (c === ")") tokens.push({ t: "rparen" });
    else if (c === "¬" || c === "∧" || c === "∨" || c === "⊕" || c === "→" || c === "↔")
      tokens.push({ t: "op", op: c });
    else if (c === "V" || c === "1") tokens.push({ t: "const", value: true });
    else if (c === "F" || c === "0") tokens.push({ t: "const", value: false });
    else if (/[a-z]/.test(c)) tokens.push({ t: "var", name: c });
    else throw new Error(`Caracter no valido: "${c}"`);
  }
  return tokens;
}

// ---------------- Parser (descenso recursivo) ----------------

class Parser {
  private pos = 0;
  constructor(private tokens: Token[]) {}

  private peek(): Token | undefined {
    return this.tokens[this.pos];
  }
  private next(): Token | undefined {
    return this.tokens[this.pos++];
  }
  private eat(op: string) {
    const tk = this.peek();
    if (tk && tk.t === "op" && tk.op === op) {
      this.pos++;
      return true;
    }
    return false;
  }

  parse(): Node {
    if (this.tokens.length === 0) throw new Error("Formula vacia.");
    const node = this.parseIff();
    if (this.pos < this.tokens.length)
      throw new Error("Sobran simbolos o faltan operadores.");
    return node;
  }

  private parseIff(): Node {
    let left = this.parseImp();
    while (this.eat("↔")) left = { type: "iff", a: left, b: this.parseImp() };
    return left;
  }
  private parseImp(): Node {
    const left = this.parseXor();
    if (this.eat("→")) return { type: "imp", a: left, b: this.parseImp() }; // asociativo derecha
    return left;
  }
  private parseXor(): Node {
    let left = this.parseOr();
    while (this.eat("⊕")) left = { type: "xor", a: left, b: this.parseOr() };
    return left;
  }
  private parseOr(): Node {
    let left = this.parseAnd();
    while (this.eat("∨")) left = { type: "or", a: left, b: this.parseAnd() };
    return left;
  }
  private parseAnd(): Node {
    let left = this.parseNot();
    while (this.eat("∧")) left = { type: "and", a: left, b: this.parseNot() };
    return left;
  }
  private parseNot(): Node {
    if (this.eat("¬")) return { type: "not", a: this.parseNot() };
    return this.parseAtom();
  }
  private parseAtom(): Node {
    const tk = this.next();
    if (!tk) throw new Error("Se esperaba una variable o '('.");
    if (tk.t === "var") return { type: "var", name: tk.name };
    if (tk.t === "const") return { type: "const", value: tk.value };
    if (tk.t === "lparen") {
      const node = this.parseIff();
      const close = this.next();
      if (!close || close.t !== "rparen")
        throw new Error("Falta cerrar un parentesis ')'.");
      return node;
    }
    throw new Error("Expresion mal formada.");
  }
}

// ---------------- Render con parentesis minimos ----------------

export function nodeToString(n: Node, parentPrec = 0): string {
  if (n.type === "var") return n.name!;
  if (n.type === "const") return n.value ? "V" : "F";
  if (n.type === "not") return "¬" + nodeToString(n.a!, PREC.not);
  const p = PREC[n.type];
  const s = `${nodeToString(n.a!, p)} ${BIN_OP[n.type]} ${nodeToString(n.b!, p)}`;
  return p < parentPrec ? `(${s})` : s;
}

// ---------------- Evaluacion ----------------

function evalNode(n: Node, env: Record<string, boolean>): boolean {
  switch (n.type) {
    case "var":
      return env[n.name!];
    case "const":
      return n.value!;
    case "not":
      return !evalNode(n.a!, env);
    case "and":
      return evalNode(n.a!, env) && evalNode(n.b!, env);
    case "or":
      return evalNode(n.a!, env) || evalNode(n.b!, env);
    case "xor":
      return evalNode(n.a!, env) !== evalNode(n.b!, env);
    case "imp":
      return !evalNode(n.a!, env) || evalNode(n.b!, env);
    case "iff":
      return evalNode(n.a!, env) === evalNode(n.b!, env);
  }
}

// ---------------- Variables y subformulas ----------------

function collectVars(n: Node, acc: string[]) {
  if (n.type === "var") {
    if (!acc.includes(n.name!)) acc.push(n.name!);
  } else {
    if (n.a) collectVars(n.a, acc);
    if (n.b) collectVars(n.b, acc);
  }
}

function size(n: Node): number {
  if (n.type === "var" || n.type === "const") return 1;
  return 1 + (n.a ? size(n.a) : 0) + (n.b ? size(n.b) : 0);
}

function collectSubformulas(n: Node, map: Map<string, Node>) {
  if (n.type === "var" || n.type === "const") return;
  if (n.a) collectSubformulas(n.a, map);
  if (n.b) collectSubformulas(n.b, map);
  const key = nodeToString(n);
  if (!map.has(key)) map.set(key, n);
}

// ---------------- API publica ----------------

export type Classification = "tautologia" | "contradiccion" | "contingencia";

export interface TruthTableOk {
  ok: true;
  formula: string; // formula normalizada renderizada
  vars: string[];
  /** Etiquetas de columnas de subformulas; la ultima es la columna principal. */
  subLabels: string[];
  /** Por fila: valores de las variables (en orden de `vars`). */
  envRows: boolean[][];
  /** Por fila: valores de cada subformula (en orden de `subLabels`). */
  subRows: boolean[][];
  classification: Classification;
}

export interface TruthTableErr {
  ok: false;
  error: string;
}

export type TruthTableResult = TruthTableOk | TruthTableErr;

export function buildTruthTable(input: string): TruthTableResult {
  const raw = (input ?? "").trim();
  if (!raw) return { ok: false, error: "Escribi una formula." };

  let ast: Node;
  try {
    const norm = normalizeFormula(raw);
    const tokens = tokenize(norm);
    ast = new Parser(tokens).parse();
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "Formula invalida." };
  }

  const vars: string[] = [];
  collectVars(ast, vars);
  if (vars.length > MAX_VARS)
    return {
      ok: false,
      error: `Demasiadas variables (${vars.length}). El maximo es ${MAX_VARS}.`,
    };

  // Subformulas ordenadas por tamano ascendente; la formula completa queda ultima.
  const subMap = new Map<string, Node>();
  collectSubformulas(ast, subMap);
  const subNodes = Array.from(subMap.values()).sort((a, b) => size(a) - size(b));
  // Garantiza que la principal (formula completa) sea la ultima.
  const principalKey = nodeToString(ast);
  const ordered = subNodes.filter((n) => nodeToString(n) !== principalKey);
  ordered.push(ast);
  const subLabels = ordered.map((n) => nodeToString(n));

  const n = vars.length;
  const total = 1 << n; // 2^n (1 fila si no hay variables)
  const envRows: boolean[][] = [];
  const subRows: boolean[][] = [];

  for (let i = 0; i < total; i++) {
    const env: Record<string, boolean> = {};
    const envRow: boolean[] = [];
    for (let v = 0; v < n; v++) {
      // V primero: bit 0 => true. La primera variable es la mas significativa.
      const bit = (i >> (n - 1 - v)) & 1;
      const val = bit === 0;
      env[vars[v]] = val;
      envRow.push(val);
    }
    envRows.push(envRow);
    subRows.push(ordered.map((node) => evalNode(node, env)));
  }

  // Clasificacion segun la columna principal (ultima).
  const principalCol = subRows.map((r) => r[r.length - 1]);
  const allTrue = principalCol.every(Boolean);
  const allFalse = principalCol.every((v) => !v);
  const classification: Classification = allTrue
    ? "tautologia"
    : allFalse
      ? "contradiccion"
      : "contingencia";

  return {
    ok: true,
    formula: principalKey,
    vars,
    subLabels,
    envRows,
    subRows,
    classification,
  };
}
