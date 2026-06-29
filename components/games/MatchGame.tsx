"use client";

import { useState, useEffect, useCallback } from "react";
import { progressActions } from "@/lib/store/progress";
import { shuffle, pickRandom, cn } from "@/lib/utils";
import { allMatchPairs } from "@/lib/curriculum/data";
import type { SubjectId } from "@/lib/curriculum/types";

type Pair = { term: string; definition: string; topicId: string };

const ROUND_SIZE = 5;

/** Crea una nueva ronda: 5 pares, con las definiciones barajadas aparte. */
function makeRound(subject: SubjectId): { pairs: Pair[]; defs: Pair[] } {
  const pairs = pickRandom(allMatchPairs(subject), ROUND_SIZE);
  return { pairs, defs: shuffle(pairs) };
}

export default function MatchGame({
  subject,
  onExit,
}: {
  subject: SubjectId;
  onExit: () => void;
}) {
  const [round, setRound] = useState<{ pairs: Pair[]; defs: Pair[] }>(() =>
    makeRound(subject)
  );
  // Indice del concepto (columna izquierda) seleccionado.
  const [selectedTerm, setSelectedTerm] = useState<number | null>(null);
  // term -> definition emparejados (usamos el texto del term como clave).
  const [matched, setMatched] = useState<Set<string>>(new Set());
  // Definicion que esta "temblando" por error momentaneo.
  const [wrongDef, setWrongDef] = useState<string | null>(null);
  const [errors, setErrors] = useState(0);
  const [done, setDone] = useState(false);
  const [score, setScore] = useState(0);

  const totalPairs = round.pairs.length;
  const matchedCount = matched.size;

  const newRound = useCallback(() => {
    setRound(makeRound(subject));
    setSelectedTerm(null);
    setMatched(new Set());
    setWrongDef(null);
    setErrors(0);
    setDone(false);
    setScore(0);
  }, [subject]);

  // Si cambia la materia, reinicia con pares de la nueva materia.
  useEffect(() => {
    newRound();
  }, [newRound]);

  // Detecta fin de ronda y registra el puntaje una sola vez.
  useEffect(() => {
    if (totalPairs > 0 && matchedCount === totalPairs && !done) {
      const finalScore = Math.max(50, 600 - errors * 40);
      setScore(finalScore);
      setDone(true);
      progressActions.recordGame(`${subject}:emparejar`, finalScore);
    }
  }, [matchedCount, totalPairs, errors, done, subject]);

  // Limpia el feedback de error tras la animacion.
  useEffect(() => {
    if (wrongDef === null) return;
    const t = setTimeout(() => setWrongDef(null), 420);
    return () => clearTimeout(t);
  }, [wrongDef]);

  function pickTerm(i: number) {
    if (done) return;
    if (matched.has(round.pairs[i].term)) return;
    setSelectedTerm((cur) => (cur === i ? null : i));
  }

  function pickDef(def: Pair) {
    if (done || selectedTerm === null) return;
    if (matched.has(def.term)) return;
    const term = round.pairs[selectedTerm];
    if (def.term === term.term) {
      // Acierto.
      setMatched((prev) => {
        const next = new Set(prev);
        next.add(term.term);
        return next;
      });
      setSelectedTerm(null);
    } else {
      // Error: feedback y deseleccion.
      setErrors((e) => e + 1);
      setWrongDef(def.term);
      setSelectedTerm(null);
    }
  }

  const pct = totalPairs ? Math.round((matchedCount / totalPairs) * 100) : 0;

  // ---------- Pantalla de exito ----------
  if (done) {
    const verdict =
      errors === 0
        ? { t: "Perfecto, sin errores 🏆", c: "var(--color-term-green)" }
        : errors <= 2
        ? { t: "Muy bien 👏", c: "var(--color-term-cyan)" }
        : errors <= 5
        ? { t: "Bien, segui practicando 💪", c: "var(--color-term-amber)" }
        : { t: "A repasar los conceptos 📚", c: "var(--color-term-red)" };

    return (
      <div className="mx-auto max-w-2xl">
        <div className="term-card pop p-6 text-center">
          <div className="text-xs uppercase tracking-wide text-dim">
            resultado · emparejar
          </div>
          <div
            className="my-2 text-5xl font-extrabold"
            style={{ color: verdict.c, textShadow: `0 0 24px ${verdict.c}55` }}
          >
            {score}
          </div>
          <div className="font-bold" style={{ color: verdict.c }}>
            {verdict.t}
          </div>
          <div className="mt-1 text-sm text-muted">
            {totalPairs}/{totalPairs} pares · {errors}{" "}
            {errors === 1 ? "error" : "errores"}
          </div>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <button className="btn btn-primary" onClick={newRound}>
              ↺ Jugar de nuevo
            </button>
            <button className="btn btn-ghost" onClick={onExit}>
              ← Volver
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ---------- Pantalla de juego ----------
  return (
    <div className="mx-auto max-w-3xl space-y-4">
      {/* cabecera */}
      <div className="term-window fade-up">
        <div className="term-titlebar">
          <span
            className="term-dot"
            style={{ background: "var(--color-term-red)" }}
          />
          <span
            className="term-dot"
            style={{ background: "var(--color-term-amber)" }}
          />
          <span
            className="term-dot"
            style={{ background: "var(--color-term-green)" }}
          />
          <span className="ml-2 text-xs text-muted">
            <span className="prompt">match</span> concepto ↔ definicion
          </span>
        </div>

        <div className="p-4 sm:p-5">
          {/* metricas + progreso */}
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-2">
              <span className="chip" style={{ color: "var(--color-term-green)" }}>
                ✓ {matchedCount}/{totalPairs} pares
              </span>
              <span
                className="chip"
                style={{
                  color:
                    errors > 0
                      ? "var(--color-term-red)"
                      : "var(--color-muted)",
                }}
              >
                ✗ {errors} {errors === 1 ? "error" : "errores"}
              </span>
            </div>
            <span className="prompt-comment hidden sm:inline">
              elegi un concepto y luego su definicion
            </span>
          </div>

          <div className="bar mb-4">
            <span style={{ width: `${pct}%` }} />
          </div>

          {/* dos columnas */}
          <div className="grid grid-cols-2 gap-2 sm:gap-4">
            {/* columna conceptos */}
            <div className="space-y-2">
              <div className="mb-1 text-[11px] uppercase tracking-wide text-dim">
                conceptos
              </div>
              {round.pairs.map((p, i) => {
                const isMatched = matched.has(p.term);
                const isSelected = selectedTerm === i;
                return (
                  <button
                    key={p.term}
                    disabled={isMatched}
                    onClick={() => pickTerm(i)}
                    className={cn(
                      "flex w-full items-center gap-2 rounded-lg border px-2.5 py-2 text-left text-xs leading-snug transition-all sm:px-3 sm:text-sm",
                      isMatched
                        ? "cursor-default border-term-green/50 bg-term-green/10 text-term-green"
                        : isSelected
                        ? "border-term-cyan bg-term-cyan/10 text-ink glow-cyan"
                        : "border-border-bright bg-raised text-ink hover:border-term-cyan"
                    )}
                  >
                    <span className="font-mono text-[10px] text-dim sm:text-xs">
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span className="flex-1 break-words font-semibold">
                      {p.term}
                    </span>
                    {isMatched && <span className="shrink-0">✓</span>}
                  </button>
                );
              })}
            </div>

            {/* columna definiciones */}
            <div className="space-y-2">
              <div className="mb-1 text-[11px] uppercase tracking-wide text-dim">
                definiciones
              </div>
              {round.defs.map((d) => {
                const isMatched = matched.has(d.term);
                const isWrong = wrongDef === d.term;
                const clickable = selectedTerm !== null && !isMatched && !done;
                return (
                  <button
                    key={d.term}
                    disabled={isMatched}
                    onClick={() => pickDef(d)}
                    className={cn(
                      "flex w-full items-start gap-2 rounded-lg border px-2.5 py-2 text-left text-xs leading-snug transition-all sm:px-3 sm:text-sm",
                      isMatched
                        ? "cursor-default border-term-green/50 bg-term-green/10 text-term-green"
                        : isWrong
                        ? "shake border-term-red bg-term-red/10 text-term-red"
                        : clickable
                        ? "border-border-bright bg-raised text-ink hover:border-term-cyan"
                        : "border-border bg-raised text-muted"
                    )}
                  >
                    <span className="flex-1 break-words [overflow-wrap:anywhere]">
                      {d.definition}
                    </span>
                    {isMatched && <span className="shrink-0">✓</span>}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* acciones */}
      <div className="flex flex-wrap justify-between gap-2">
        <button className="btn btn-ghost" onClick={onExit}>
          ← Volver
        </button>
        <button className="btn" onClick={newRound}>
          ↺ Nueva ronda
        </button>
      </div>
    </div>
  );
}
