"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type ClaseProposicion =
  | "simple"
  | "conjuncion"
  | "disyuncion"
  | "condicional"
  | "bicondicional"
  | "negacion"
  | "no-proposicion";

interface Analysis {
  esProposicion: boolean;
  claseProposicion: ClaseProposicion;
  explicacionTipo: string;
  tipoLogica: "proposicional" | "predicados";
  justificacion: string;
  proposiciones: { var: string; texto: string; tipo: "simple" | "compuesta" }[];
  simbolizacion: string;
  predicados: { simbolo: string; texto: string }[];
  cuantificadores: string[];
  argumentos: {
    premisas: string[];
    conclusion: string;
    regla: string | null;
    valido: boolean;
  }[];
}

const SEED =
  "Si llueve, entonces el suelo se moja. Llueve. Por lo tanto, el suelo se moja.";

const CLASE_INFO: Record<
  ClaseProposicion,
  { label: string; color: string }
> = {
  simple: { label: "Proposicion simple", color: "var(--color-term-cyan)" },
  conjuncion: {
    label: "Compuesta · Conjuncion (∧)",
    color: "var(--color-term-green)",
  },
  disyuncion: {
    label: "Compuesta · Disyuncion (∨)",
    color: "var(--color-term-green)",
  },
  condicional: {
    label: "Compuesta · Condicional (→)",
    color: "var(--color-term-amber)",
  },
  bicondicional: {
    label: "Compuesta · Bicondicional (↔)",
    color: "var(--color-term-amber)",
  },
  negacion: {
    label: "Compuesta · Negacion (¬)",
    color: "var(--color-term-magenta)",
  },
  "no-proposicion": {
    label: "No es una proposicion",
    color: "var(--color-term-red)",
  },
};

export default function AnalyzeTool({
  onUseFormula,
}: {
  onUseFormula: (f: string) => void;
}) {
  const [text, setText] = useState(SEED);
  const [analysis, setAnalysis] = useState<Analysis | null>(null);
  const [loadingText, setLoadingText] = useState(false);
  const [loadingAnalyze, setLoadingAnalyze] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function call<T>(body: object): Promise<T | null> {
    const res = await fetch("/api/practica", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    if (!res.ok) {
      setError(data.error ?? "No se pudo contactar con la IA.");
      return null;
    }
    return data as T;
  }

  async function regenerate() {
    setLoadingText(true);
    setError(null);
    setAnalysis(null);
    const data = await call<{ text: string }>({ mode: "texto" });
    if (data?.text) setText(data.text);
    setLoadingText(false);
  }

  async function analyze() {
    if (!text.trim()) return;
    setLoadingAnalyze(true);
    setError(null);
    const data = await call<Analysis>({ mode: "analizar", text });
    if (data) setAnalysis(data);
    setLoadingAnalyze(false);
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-muted">
        Pega o genera un texto y analizalo: la IA decide si conviene{" "}
        <strong className="text-ink">logica proposicional</strong> o{" "}
        <strong className="text-ink">de predicados</strong>, extrae las
        proposiciones/predicados, los simboliza y saca los argumentos. Si es
        proposicional, podes mandar la formula al motor de tablas de verdad.
      </p>

      <div className="term-card space-y-3 p-4">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={4}
          placeholder="Escribi o pega un texto a analizar…"
          className="w-full resize-y rounded-md border border-border-bright bg-raised px-3 py-2.5 text-sm outline-none focus:border-term-cyan"
        />
        <div className="flex flex-wrap gap-2">
          <button
            className="btn btn-primary"
            onClick={analyze}
            disabled={loadingAnalyze || loadingText || !text.trim()}
          >
            {loadingAnalyze ? "analizando…" : "Analizar"}
          </button>
          <button
            className="btn"
            onClick={regenerate}
            disabled={loadingText || loadingAnalyze}
            title="Genera un texto nuevo con IA"
          >
            {loadingText ? "generando…" : "✦ Regenerar texto"}
          </button>
        </div>
      </div>

      {error && <p className="text-xs text-term-red">⚠ {error}</p>}

      {analysis && (
        <div className="space-y-3">
          {/* Tipo de proposicion (lo que pediste: que clase de proposicion es) */}
          <div
            className="term-card p-4"
            style={{
              borderColor: `${CLASE_INFO[analysis.claseProposicion].color}66`,
            }}
          >
            <div className="text-xs uppercase tracking-wide text-dim">
              Tipo de proposicion
            </div>
            <div
              className="mt-1 text-xl font-extrabold"
              style={{ color: CLASE_INFO[analysis.claseProposicion].color }}
            >
              {CLASE_INFO[analysis.claseProposicion].label}
            </div>
            <div className="mt-1 text-sm text-muted">
              {analysis.esProposicion
                ? "Tiene valor de verdad (V o F)."
                : "No tiene valor de verdad: es una pregunta, orden, deseo o exclamacion."}
              {analysis.explicacionTipo ? ` ${analysis.explicacionTipo}` : ""}
            </div>
          </div>

          {/* Tipo de logica */}
          <div className="term-card p-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm text-muted">Tipo de logica:</span>
              <span
                className="chip font-bold"
                style={{
                  color:
                    analysis.tipoLogica === "predicados"
                      ? "var(--color-term-magenta)"
                      : "var(--color-term-cyan)",
                }}
              >
                {analysis.tipoLogica === "predicados"
                  ? "∀ Logica de predicados"
                  : "∧ Logica proposicional"}
              </span>
            </div>
            {analysis.justificacion && (
              <p className="mt-2 text-sm text-muted">{analysis.justificacion}</p>
            )}
          </div>

          {/* Proposiciones */}
          {analysis.proposiciones.length > 0 && (
            <div className="term-card p-4">
              <h3 className="mb-2 text-sm font-bold text-muted">
                <span className="prompt-comment">proposiciones</span>
              </h3>
              <ul className="space-y-1 text-sm">
                {analysis.proposiciones.map((p, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="font-mono font-bold text-term-cyan">
                      {p.var}
                    </span>
                    <span className="text-muted">:</span>
                    <span className="flex-1">{p.texto}</span>
                    <span className="chip shrink-0 text-[10px]">{p.tipo}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Predicados y cuantificadores */}
          {(analysis.predicados.length > 0 ||
            analysis.cuantificadores.length > 0) && (
            <div className="term-card p-4">
              <h3 className="mb-2 text-sm font-bold text-muted">
                <span className="prompt-comment">predicados y cuantificadores</span>
              </h3>
              <ul className="space-y-1 font-mono text-sm">
                {analysis.predicados.map((p, i) => (
                  <li key={`p${i}`}>
                    <span className="font-bold text-term-magenta">
                      {p.simbolo}
                    </span>
                    <span className="text-muted"> : {p.texto}</span>
                  </li>
                ))}
                {analysis.cuantificadores.map((c, i) => (
                  <li key={`c${i}`} className="text-ink">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Simbolizacion proposicional + puente a tabla */}
          {analysis.simbolizacion && (
            <div className="term-card p-4">
              <h3 className="mb-2 text-sm font-bold text-muted">
                <span className="prompt-comment">simbolizacion</span>
              </h3>
              <div className="flex flex-wrap items-center gap-3">
                <code className="rounded bg-overlay px-2 py-1 font-mono text-base text-ink">
                  {analysis.simbolizacion}
                </code>
                {analysis.tipoLogica === "proposicional" && (
                  <button
                    className="btn btn-primary text-xs"
                    onClick={() => onUseFormula(analysis.simbolizacion)}
                  >
                    → Ver tabla de verdad
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Argumentos */}
          {analysis.argumentos.length > 0 && (
            <div className="term-card p-4">
              <h3 className="mb-2 text-sm font-bold text-muted">
                <span className="prompt-comment">
                  argumentos (premisas → conclusion)
                </span>
              </h3>
              <div className="space-y-3">
                {analysis.argumentos.map((a, i) => (
                  <div
                    key={i}
                    className="rounded-lg border border-border p-3 text-sm"
                  >
                    <ul className="space-y-0.5">
                      {a.premisas.map((pr, j) => (
                        <li key={j} className="text-muted">
                          <span className="text-dim">P{j + 1}.</span> {pr}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-1 border-t border-border pt-1">
                      <span className="text-dim">∴ </span>
                      <span className="font-semibold">{a.conclusion}</span>
                    </div>
                    <div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
                      {a.regla && <span className="chip">{a.regla}</span>}
                      <span
                        className={cn(
                          "chip font-bold",
                          a.valido ? "text-term-green" : "text-term-red"
                        )}
                      >
                        {a.valido ? "✓ valido" : "✗ no valido"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
