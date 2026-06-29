"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import TextAnalyzer from "@/components/practica/TextAnalyzer";
import TruthTableTool from "@/components/practica/TruthTableTool";
import ClassifyTool from "@/components/practica/ClassifyTool";
import PredicateTool from "@/components/practica/PredicateTool";

type Tab = "analizar" | "tabla" | "clasificar" | "predicados";

const TABS: { id: Tab; label: string; icon: string }[] = [
  { id: "analizar", label: "Analizar texto", icon: "✦" },
  { id: "tabla", label: "Tabla de verdad", icon: "⊟" },
  { id: "clasificar", label: "¿Es proposicion?", icon: "✓" },
  { id: "predicados", label: "Predicados (∀ ∃)", icon: "∀" },
];

const SEED_GENERAL =
  "Si llueve, entonces el suelo se moja. Llueve. Por lo tanto, el suelo se moja.";
const SEED_PRED =
  "Todos los hombres son mortales. Socrates es un hombre. Por lo tanto, Socrates es mortal.";

export default function PracticaPage() {
  const [tab, setTab] = useState<Tab>("analizar");
  const [formula, setFormula] = useState("p → (q ∧ ¬r)");

  function useFormula(f: string) {
    setFormula(f);
    setTab("tabla");
  }

  return (
    <div className="space-y-6">
      <header className="fade-up">
        <h1 className="text-2xl font-extrabold">
          <span className="prompt">logic --practice</span>
        </h1>
        <p className="mt-1 text-sm text-muted">
          Detecta si un texto es logica proposicional o de predicados, saca sus
          argumentos y arma tablas de verdad exactas.
        </p>
      </header>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 fade-up">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={cn(
              "rounded-lg border px-3 py-2 text-sm font-semibold transition-colors",
              tab === t.id
                ? "border-term-cyan bg-term-cyan/10 text-ink"
                : "border-border-bright bg-raised text-muted hover:text-ink"
            )}
          >
            <span className="mr-1" aria-hidden>
              {t.icon}
            </span>
            {t.label}
          </button>
        ))}
      </div>

      <section className="fade-up" style={{ animationDelay: "0.05s" }}>
        {tab === "analizar" && (
          <div className="space-y-4">
            <p className="text-sm text-muted">
              Pega o genera un texto y analizalo: la IA dice si es{" "}
              <strong className="text-ink">una proposicion</strong> (y de que
              tipo) o <strong className="text-ink">un argumento</strong>, decide
              si conviene logica proposicional o de predicados, lo simboliza y
              saca los argumentos con su regla de inferencia y validez. Si es
              proposicional, podes mandar la formula al motor de tablas de verdad.
            </p>
            <TextAnalyzer
              focus="general"
              seed={SEED_GENERAL}
              onUseFormula={useFormula}
            />
          </div>
        )}

        {tab === "tabla" && (
          <TruthTableTool formula={formula} setFormula={setFormula} />
        )}

        {tab === "clasificar" && <ClassifyTool />}

        {tab === "predicados" && (
          <div className="space-y-8">
            <PredicateTool />
            <div className="space-y-3 border-t border-border pt-6">
              <h2 className="text-sm font-bold text-muted">
                <span className="prompt-comment">
                  analizar un texto con cuantificadores
                </span>
              </h2>
              <p className="text-sm text-muted">
                Pega (o genera) un texto con cuantificadores y se analizan sus{" "}
                <strong className="text-ink">argumentos</strong>: predicados,
                cuantificadores, premisas → conclusion, regla de inferencia y si
                es valido.
              </p>
              <TextAnalyzer
                focus="predicados"
                seed={SEED_PRED}
                onUseFormula={useFormula}
              />
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
