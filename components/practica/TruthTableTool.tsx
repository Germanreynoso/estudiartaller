"use client";

import { useMemo, useRef } from "react";
import { buildTruthTable, type Classification } from "@/lib/logic/truthTable";
import { cn } from "@/lib/utils";

const SYMBOLS: { sym: string; hint: string }[] = [
  { sym: "¬", hint: "negacion (no)" },
  { sym: "∧", hint: "conjuncion (y)" },
  { sym: "∨", hint: "disyuncion (o)" },
  { sym: "⊕", hint: "disyuncion exclusiva" },
  { sym: "→", hint: "condicional (si...entonces)" },
  { sym: "↔", hint: "bicondicional (si y solo si)" },
  { sym: "(", hint: "abrir parentesis" },
  { sym: ")", hint: "cerrar parentesis" },
];

const EXAMPLES = [
  "p ∧ q",
  "p → q",
  "¬(p ∧ q)",
  "p ∨ ¬p",
  "(p → q) ∧ (q → r) → (p → r)",
  "p ↔ q",
];

const CLASS_STYLE: Record<Classification, { label: string; color: string }> = {
  tautologia: { label: "Tautologia (siempre V)", color: "var(--color-term-green)" },
  contradiccion: { label: "Contradiccion (siempre F)", color: "var(--color-term-red)" },
  contingencia: { label: "Contingencia (V y F)", color: "var(--color-term-amber)" },
};

function VF({ v, principal }: { v: boolean; principal?: boolean }) {
  return (
    <span
      className={cn(
        "inline-block w-5 text-center font-bold",
        v ? "text-term-green" : "text-term-red",
        principal && "text-base"
      )}
    >
      {v ? "V" : "F"}
    </span>
  );
}

export default function TruthTableTool({
  formula,
  setFormula,
}: {
  formula: string;
  setFormula: (f: string) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const result = useMemo(() => buildTruthTable(formula), [formula]);

  function insert(sym: string) {
    const el = inputRef.current;
    if (!el) {
      setFormula(formula + sym);
      return;
    }
    const start = el.selectionStart ?? formula.length;
    const end = el.selectionEnd ?? formula.length;
    const next = formula.slice(0, start) + sym + formula.slice(end);
    setFormula(next);
    requestAnimationFrame(() => {
      el.focus();
      const pos = start + sym.length;
      el.setSelectionRange(pos, pos);
    });
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-muted">
        Escribi una formula con variables en minuscula (p, q, r) y los conectivos.
        Tambien podes tipear alias: <code>~ &amp; | -&gt; &lt;-&gt;</code>. La tabla
        se calcula sola, con una columna por cada subformula.
      </p>

      {/* Entrada + teclado */}
      <div className="term-card space-y-3 p-4">
        <input
          ref={inputRef}
          value={formula}
          onChange={(e) => setFormula(e.target.value)}
          placeholder="p → (q ∧ ¬r)"
          spellCheck={false}
          className="w-full rounded-md border border-border-bright bg-raised px-3 py-2.5 font-mono text-base outline-none focus:border-term-cyan"
        />
        <div className="flex flex-wrap gap-1.5">
          {SYMBOLS.map((s) => (
            <button
              key={s.sym}
              type="button"
              title={s.hint}
              onClick={() => insert(s.sym)}
              className="btn btn-ghost min-w-9 px-3 py-1.5 font-mono text-base"
            >
              {s.sym}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setFormula("")}
            className="btn btn-ghost ml-auto px-3 py-1.5 text-xs"
          >
            limpiar
          </button>
        </div>
        <div className="flex flex-wrap items-center gap-1.5 text-xs">
          <span className="text-dim">ejemplos:</span>
          {EXAMPLES.map((ex) => (
            <button
              key={ex}
              type="button"
              onClick={() => setFormula(ex)}
              className="chip term-card-hover font-mono"
            >
              {ex}
            </button>
          ))}
        </div>
      </div>

      {/* Resultado */}
      {!formula.trim() ? null : !result.ok ? (
        <div className="term-card border-term-red/40 p-4 text-sm text-term-red">
          ⚠ {result.error}
        </div>
      ) : (
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm text-muted">
              {result.vars.length} variable
              {result.vars.length === 1 ? "" : "s"} ·{" "}
              {result.envRows.length} filas
            </span>
            <span
              className="chip ml-auto font-bold"
              style={{ color: CLASS_STYLE[result.classification].color }}
            >
              {CLASS_STYLE[result.classification].label}
            </span>
          </div>

          <div className="term-window overflow-hidden">
            <div className="term-titlebar">
              <span className="term-dot" style={{ background: "#fb6f7d" }} />
              <span className="term-dot" style={{ background: "#f6b545" }} />
              <span className="term-dot" style={{ background: "#46e08a" }} />
              <span className="ml-2 truncate text-xs text-dim">
                {result.formula}
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-center font-mono text-sm">
                <thead>
                  <tr className="border-b border-border-bright">
                    {result.vars.map((v) => (
                      <th key={v} className="px-3 py-2 text-term-cyan">
                        {v}
                      </th>
                    ))}
                    {result.subLabels.map((label, i) => {
                      const principal = i === result.subLabels.length - 1;
                      return (
                        <th
                          key={label}
                          className={cn(
                            "whitespace-nowrap px-3 py-2",
                            principal
                              ? "bg-overlay text-ink"
                              : "text-muted"
                          )}
                        >
                          {label}
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                  {result.envRows.map((env, ri) => (
                    <tr
                      key={ri}
                      className="border-b border-border/60 last:border-0"
                    >
                      {env.map((val, ci) => (
                        <td key={ci} className="px-3 py-1.5">
                          <VF v={val} />
                        </td>
                      ))}
                      {result.subRows[ri].map((val, ci) => {
                        const principal = ci === result.subRows[ri].length - 1;
                        return (
                          <td
                            key={ci}
                            className={cn("px-3 py-1.5", principal && "bg-overlay")}
                          >
                            <VF v={val} principal={principal} />
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-xs text-dim">
            <span className="prompt-comment">
              la columna resaltada es la principal (define la clasificacion)
            </span>
          </p>
        </div>
      )}
    </div>
  );
}
