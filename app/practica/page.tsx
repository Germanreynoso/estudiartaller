"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import AnalyzeTool from "@/components/practica/AnalyzeTool";
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
        {tab === "analizar" && <AnalyzeTool onUseFormula={useFormula} />}
        {tab === "tabla" && (
          <TruthTableTool formula={formula} setFormula={setFormula} />
        )}
        {tab === "clasificar" && <ClassifyTool />}
        {tab === "predicados" && <PredicateTool />}
      </section>
    </div>
  );
}
