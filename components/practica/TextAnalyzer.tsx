"use client";

import { useState } from "react";
import AnalysisResult, { type Analysis } from "@/components/practica/AnalysisResult";

export default function TextAnalyzer({
  focus = "general",
  seed = "",
  onUseFormula,
}: {
  focus?: "general" | "predicados";
  seed?: string;
  onUseFormula?: (f: string) => void;
}) {
  const [text, setText] = useState(seed);
  const [analysis, setAnalysis] = useState<Analysis | null>(null);
  const [loadingText, setLoadingText] = useState(false);
  const [loadingAnalyze, setLoadingAnalyze] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function call<T>(extra: object): Promise<T | null> {
    const res = await fetch("/api/practica", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ focus, ...extra }),
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
      <div className="term-card space-y-3 p-4">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={4}
          placeholder={
            focus === "predicados"
              ? "Ej: Todos los hombres son mortales. Socrates es hombre. Por lo tanto, Socrates es mortal."
              : "Escribi o pega un texto a analizar…"
          }
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
        <AnalysisResult analysis={analysis} onUseFormula={onUseFormula} />
      )}
    </div>
  );
}
