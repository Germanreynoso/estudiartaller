"use client";

import { useState } from "react";
import {
  CLASSIFY_BANK,
  KIND_LABEL,
  type ClassifyStatement,
} from "@/lib/logic/classifyBank";
import { pickRandom, cn } from "@/lib/utils";

const ROUND = 6;

function newRound(): ClassifyStatement[] {
  return pickRandom(CLASSIFY_BANK, ROUND);
}

export default function ClassifyTool() {
  const [items, setItems] = useState<ClassifyStatement[]>(() => newRound());
  const [selected, setSelected] = useState<Set<number>>(new Set());
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function reset(next: ClassifyStatement[]) {
    setItems(next);
    setSelected(new Set());
    setChecked(false);
    setError(null);
  }

  function toggle(i: number) {
    if (checked) return;
    setSelected((prev) => {
      const s = new Set(prev);
      if (s.has(i)) s.delete(i);
      else s.add(i);
      return s;
    });
  }

  async function regenerate() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/practica", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mode: "clasificar" }),
      });
      const data = await res.json();
      if (!res.ok || !Array.isArray(data.statements) || !data.statements.length) {
        setError(data.error ?? "No se pudo generar. Uso el banco local.");
        reset(newRound());
        return;
      }
      reset((data.statements as ClassifyStatement[]).slice(0, ROUND));
    } catch {
      setError("Error de conexion. Uso el banco local.");
      reset(newRound());
    } finally {
      setLoading(false);
    }
  }

  const correct = items.filter(
    (it, i) => selected.has(i) === it.isProposition
  ).length;

  return (
    <div className="space-y-4">
      <p className="text-sm text-muted">
        Marca <strong className="text-ink">solo</strong> los enunciados que son
        proposiciones (los que tienen un valor de verdad V o F). Despues tocá{" "}
        <em>Corregir</em>.
      </p>

      <div className="space-y-2">
        {items.map((it, i) => {
          const sel = selected.has(i);
          const ok = checked && sel === it.isProposition;
          const bad = checked && sel !== it.isProposition;
          return (
            <button
              key={`${it.text}-${i}`}
              onClick={() => toggle(i)}
              disabled={checked}
              className={cn(
                "flex w-full items-start gap-3 rounded-lg border p-3 text-left transition-all",
                bad
                  ? "border-term-red bg-term-red/10"
                  : ok
                    ? "border-term-green/60 bg-term-green/10"
                    : sel
                      ? "border-term-cyan bg-term-cyan/10"
                      : "border-border-bright bg-raised term-card-hover"
              )}
            >
              <span
                className={cn(
                  "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border text-xs font-bold",
                  sel
                    ? "border-term-cyan bg-term-cyan/20 text-term-cyan"
                    : "border-border-bright text-transparent"
                )}
              >
                ✓
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm">{it.text}</span>
                {checked && (
                  <span className="mt-1 block text-xs">
                    <span
                      className={cn(
                        "font-bold",
                        it.isProposition ? "text-term-green" : "text-term-red"
                      )}
                    >
                      {it.isProposition ? "Es proposicion" : "No es proposicion"}
                    </span>
                    <span className="text-dim"> · {KIND_LABEL[it.kind]}</span>
                    <span className="block text-muted">{it.reason}</span>
                  </span>
                )}
              </span>
              {checked && (
                <span className="shrink-0 text-lg">{ok ? "✓" : "✗"}</span>
              )}
            </button>
          );
        })}
      </div>

      {error && <p className="text-xs text-term-amber">{error}</p>}

      <div className="flex flex-wrap items-center gap-3">
        {!checked ? (
          <button className="btn btn-primary" onClick={() => setChecked(true)}>
            Corregir
          </button>
        ) : (
          <span className="text-sm font-bold">
            <span
              style={{
                color:
                  correct === items.length
                    ? "var(--color-term-green)"
                    : "var(--color-term-amber)",
              }}
            >
              {correct}/{items.length} bien clasificados
            </span>
          </span>
        )}
        <button
          className="btn"
          onClick={() => reset(newRound())}
          disabled={loading}
        >
          ↺ Otra ronda
        </button>
        <button
          className="btn"
          onClick={regenerate}
          disabled={loading}
          title="Genera enunciados nuevos con IA"
        >
          {loading ? "generando…" : "✦ Regenerar con IA"}
        </button>
      </div>
    </div>
  );
}
