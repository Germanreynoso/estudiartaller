"use client";

import { cn } from "@/lib/utils";

export type ClaseProposicion =
  | "simple"
  | "conjuncion"
  | "disyuncion"
  | "condicional"
  | "bicondicional"
  | "negacion"
  | "no-proposicion";

export interface Argumento {
  premisas: string[];
  conclusion: string;
  regla: string | null;
  valido: boolean;
}

export interface Analysis {
  esArgumento: boolean;
  esProposicion: boolean;
  claseProposicion: ClaseProposicion;
  explicacionTipo: string;
  tipoLogica: "proposicional" | "predicados";
  justificacion: string;
  proposiciones: { var: string; texto: string; tipo: "simple" | "compuesta" }[];
  simbolizacion: string;
  predicados: { simbolo: string; texto: string }[];
  cuantificadores: string[];
  argumentos: Argumento[];
}

const CLASE_INFO: Record<ClaseProposicion, { label: string; color: string }> = {
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

export default function AnalysisResult({
  analysis,
  onUseFormula,
}: {
  analysis: Analysis;
  onUseFormula?: (f: string) => void;
}) {
  const clase = CLASE_INFO[analysis.claseProposicion];
  const conclusion =
    analysis.argumentos[analysis.argumentos.length - 1]?.conclusion ?? "";

  return (
    <div className="space-y-3">
      {/* Tipo: argumento o proposicion */}
      <div className="term-card p-4" style={{ borderColor: `${clase.color}66` }}>
        {analysis.esArgumento ? (
          <>
            <div className="text-xs uppercase tracking-wide text-dim">
              Tipo de razonamiento
            </div>
            <div
              className="mt-1 text-xl font-extrabold"
              style={{ color: "var(--color-term-amber)" }}
            >
              Es un argumento (razonamiento)
            </div>
            <div className="mt-1 text-sm text-muted">
              Tiene premisas y una conclusion. La{" "}
              <strong className="text-ink">conclusion</strong>
              {conclusion ? (
                <>
                  {" "}
                  (&laquo;{conclusion}&raquo;)
                </>
              ) : null}{" "}
              es:{" "}
              <span className="font-bold" style={{ color: clase.color }}>
                {clase.label}
              </span>
              .{analysis.explicacionTipo ? ` ${analysis.explicacionTipo}` : ""}
            </div>
          </>
        ) : (
          <>
            <div className="text-xs uppercase tracking-wide text-dim">
              Tipo de proposicion
            </div>
            <div
              className="mt-1 text-xl font-extrabold"
              style={{ color: clase.color }}
            >
              {clase.label}
            </div>
            <div className="mt-1 text-sm text-muted">
              {analysis.esProposicion
                ? "Tiene valor de verdad (V o F)."
                : "No tiene valor de verdad: es una pregunta, orden, deseo o exclamacion."}
              {analysis.explicacionTipo ? ` ${analysis.explicacionTipo}` : ""}
            </div>
          </>
        )}
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
                <span className="font-mono font-bold text-term-cyan">{p.var}</span>
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
                <span className="font-bold text-term-magenta">{p.simbolo}</span>
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

      {/* Simbolizacion + puente a tabla */}
      {analysis.simbolizacion && (
        <div className="term-card p-4">
          <h3 className="mb-2 text-sm font-bold text-muted">
            <span className="prompt-comment">simbolizacion</span>
          </h3>
          <div className="flex flex-wrap items-center gap-3">
            <code className="rounded bg-overlay px-2 py-1 font-mono text-base text-ink">
              {analysis.simbolizacion}
            </code>
            {analysis.tipoLogica === "proposicional" && onUseFormula && (
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

      {/* Argumentos: siempre con regla + validez */}
      {analysis.argumentos.length > 0 && (
        <div className="term-card p-4">
          <h3 className="mb-2 text-sm font-bold text-muted">
            <span className="prompt-comment">
              argumentos (premisas → conclusion)
            </span>
          </h3>
          <div className="space-y-3">
            {analysis.argumentos.map((a, i) => (
              <div key={i} className="rounded-lg border border-border p-3 text-sm">
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
                  <span className="chip">
                    regla: {a.regla ? a.regla : "sin regla estandar"}
                  </span>
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
  );
}
