// Evaluacion de predicados sobre un DOMINIO FINITO. La logica de predicados no
// tiene tabla de verdad como la proposicional: lo correcto es evaluar P(x) para
// cada elemento del dominio y de ahi obtener ∀x P(x) (conjuncion) y ∃x P(x)
// (disyuncion). Todo deterministico.

export interface PredicateDef {
  id: string;
  /** Etiqueta con x; si needsK, usa {k} como marcador. */
  label: string;
  needsK?: boolean;
  test: (x: number, k: number) => boolean;
}

export const PREDICATES: PredicateDef[] = [
  { id: "par", label: "x es par", test: (x) => x % 2 === 0 },
  { id: "impar", label: "x es impar", test: (x) => Math.abs(x % 2) === 1 },
  { id: "primo", label: "x es primo", test: (x) => isPrime(x) },
  { id: "mayor", label: "x > {k}", needsK: true, test: (x, k) => x > k },
  { id: "menor", label: "x < {k}", needsK: true, test: (x, k) => x < k },
  {
    id: "multiplo",
    label: "x es multiplo de {k}",
    needsK: true,
    test: (x, k) => k !== 0 && x % k === 0,
  },
];

export function isPrime(n: number): boolean {
  if (!Number.isInteger(n) || n < 2) return false;
  for (let i = 2; i * i <= n; i++) if (n % i === 0) return false;
  return true;
}

export function predicateById(id: string): PredicateDef {
  return PREDICATES.find((p) => p.id === id) ?? PREDICATES[0];
}

/** Etiqueta del predicado con el parametro k ya sustituido. */
export function predicateLabel(def: PredicateDef, k: number): string {
  return def.needsK ? def.label.replace("{k}", String(k)) : def.label;
}

export interface PredicateEval {
  domain: number[];
  /** Por cada elemento del dominio: su valor de verdad para P(x). */
  values: { x: number; value: boolean }[];
  forall: boolean; // ∀x P(x)
  exists: boolean; // ∃x P(x)
  forallNeg: boolean; // ∀x ¬P(x)
  existsNeg: boolean; // ∃x ¬P(x)
}

export function evaluatePredicate(
  def: PredicateDef,
  domain: number[],
  k: number
): PredicateEval {
  const values = domain.map((x) => ({ x, value: def.test(x, k) }));
  const forall = values.length > 0 && values.every((v) => v.value);
  const exists = values.some((v) => v.value);
  const forallNeg = values.length > 0 && values.every((v) => !v.value);
  const existsNeg = values.some((v) => !v.value);
  return { domain, values, forall, exists, forallNeg, existsNeg };
}

/** Parsea "1, 2, 3" o "1 2 3" a una lista de enteros unicos. */
export function parseDomain(input: string): number[] {
  const nums = input
    .split(/[\s,;]+/)
    .map((s) => s.trim())
    .filter(Boolean)
    .map(Number)
    .filter((n) => Number.isFinite(n));
  return Array.from(new Set(nums));
}
