"use client";

import { useMemo, useState } from "react";
import {
  PREDICATES,
  predicateById,
  predicateLabel,
  evaluatePredicate,
  parseDomain,
} from "@/lib/logic/predicates";
import { cn } from "@/lib/utils";

function VF({ v }: { v: boolean }) {
  return (
    <span className={cn("font-bold", v ? "text-term-green" : "text-term-red")}>
      {v ? "V" : "F"}
    </span>
  );
}

function ResultRow({
  label,
  expansion,
  values,
  result,
}: {
  label: string;
  expansion: string;
  values: boolean[];
  result: boolean;
}) {
  return (
    <div className="term-card p-3">
      <div className="flex items-center justify-between gap-2">
        <span className="font-mono text-sm font-bold text-ink">{label}</span>
        <span
          className="chip font-bold"
          style={{
            color: result
              ? "var(--color-term-green)"
              : "var(--color-term-red)",
          }}
        >
          {result ? "Verdadero" : "Falso"}
        </span>
      </div>
      <div className="mt-1.5 font-mono text-xs text-muted">{expansion}</div>
      <div className="mt-1 font-mono text-sm">
        ={" "}
        {values.map((v, i) => (
          <span key={i}>
            <VF v={v} />
            {i < values.length - 1 ? (
              <span className="text-dim"> {label.includes("∀") ? "∧" : "∨"} </span>
            ) : null}
          </span>
        ))}{" "}
        = <VF v={result} />
      </div>
    </div>
  );
}

export default function PredicateTool() {
  const [domainStr, setDomainStr] = useState("1, 2, 3, 4, 5, 6");
  const [predId, setPredId] = useState("par");
  const [k, setK] = useState(3);

  const def = predicateById(predId);
  const domain = useMemo(() => parseDomain(domainStr), [domainStr]);
  const evalP = useMemo(
    () => evaluatePredicate(def, domain, k),
    [def, domain, k]
  );
  const label = predicateLabel(def, k);

  const pInstances = (neg: boolean) =>
    domain.map((x) => `${neg ? "¬" : ""}P(${x})`);

  return (
    <div className="space-y-4">
      <p className="text-sm text-muted">
        La logica de predicados <strong className="text-ink">no</strong> tiene
        tabla de verdad como la proposicional. Lo correcto es evaluar{" "}
        <span className="font-mono">P(x)</span> en cada elemento de un dominio
        finito: <span className="font-mono">∀x P(x)</span> es la conjuncion y{" "}
        <span className="font-mono">∃x P(x)</span> la disyuncion de esos valores.
      </p>

      {/* Controles */}
      <div className="term-card space-y-3 p-4">
        <div className="flex flex-wrap items-end gap-3">
          <label className="flex-1 text-xs text-dim">
            Dominio (numeros separados por coma)
            <input
              value={domainStr}
              onChange={(e) => setDomainStr(e.target.value)}
              placeholder="1, 2, 3, 4, 5"
              className="mt-1 w-full rounded-md border border-border-bright bg-raised px-3 py-2 font-mono text-sm text-ink outline-none focus:border-term-cyan"
            />
          </label>
          <label className="text-xs text-dim">
            Predicado P(x)
            <select
              value={predId}
              onChange={(e) => setPredId(e.target.value)}
              className="mt-1 block rounded-md border border-border-bright bg-raised px-3 py-2 text-sm text-ink outline-none focus:border-term-cyan"
            >
              {PREDICATES.map((p) => (
                <option key={p.id} value={p.id}>
                  {predicateLabel(p, k)}
                </option>
              ))}
            </select>
          </label>
          {def.needsK && (
            <label className="text-xs text-dim">
              k
              <input
                type="number"
                value={k}
                onChange={(e) => setK(Number(e.target.value) || 0)}
                className="mt-1 block w-20 rounded-md border border-border-bright bg-raised px-3 py-2 font-mono text-sm text-ink outline-none focus:border-term-cyan"
              />
            </label>
          )}
        </div>
        <div className="text-xs text-dim">
          <span className="prompt-comment">
            P(x): {label} · dominio = {"{"} {domain.join(", ")} {"}"}
          </span>
        </div>
      </div>

      {domain.length === 0 ? (
        <div className="term-card border-term-amber/40 p-4 text-sm text-term-amber">
          Ingresa al menos un numero en el dominio.
        </div>
      ) : (
        <>
          {/* Evaluacion por elemento */}
          <div className="term-window overflow-hidden">
            <div className="term-titlebar">
              <span className="term-dot" style={{ background: "#fb6f7d" }} />
              <span className="term-dot" style={{ background: "#f6b545" }} />
              <span className="term-dot" style={{ background: "#46e08a" }} />
              <span className="ml-2 text-xs text-dim">P(x) en el dominio</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-center font-mono text-sm">
                <thead>
                  <tr className="border-b border-border-bright">
                    <th className="px-3 py-2 text-term-cyan">x</th>
                    {evalP.values.map((v) => (
                      <th key={v.x} className="px-3 py-2 text-muted">
                        {v.x}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-3 py-1.5 text-dim">P(x)</td>
                    {evalP.values.map((v) => (
                      <td key={v.x} className="px-3 py-1.5">
                        <VF v={v.value} />
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Cuantificadores */}
          <div className="grid gap-3 sm:grid-cols-2">
            <ResultRow
              label="∀x P(x)"
              expansion={pInstances(false).join(" ∧ ")}
              values={evalP.values.map((v) => v.value)}
              result={evalP.forall}
            />
            <ResultRow
              label="∃x P(x)"
              expansion={pInstances(false).join(" ∨ ")}
              values={evalP.values.map((v) => v.value)}
              result={evalP.exists}
            />
          </div>

          {/* Negaciones (De Morgan para cuantificadores) */}
          <div className="term-card p-4">
            <div className="mb-2 text-sm font-bold text-muted">
              <span className="prompt-comment">negacion de cuantificadores</span>
            </div>
            <ul className="space-y-1.5 font-mono text-sm">
              <li>
                ¬∀x P(x) ≡ ∃x ¬P(x) ={" "}
                <VF v={evalP.existsNeg} />{" "}
                <span className="text-dim">
                  (no todos cumplen = existe al menos uno que no)
                </span>
              </li>
              <li>
                ¬∃x P(x) ≡ ∀x ¬P(x) ={" "}
                <VF v={evalP.forallNeg} />{" "}
                <span className="text-dim">
                  (no existe ninguno = todos no cumplen)
                </span>
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
