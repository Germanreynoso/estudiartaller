"use client";

import { useMemo, useRef, useState } from "react";
import { progressActions } from "@/lib/store/progress";
import { shuffle, pickRandom, cn } from "@/lib/utils";
import { FLOWCHART_SYMBOLS } from "@/lib/curriculum/symbols";
import type { SubjectId } from "@/lib/curriculum/types";

const TOTAL = FLOWCHART_SYMBOLS.length;

/** Construye 4 opciones de nombre: la correcta + 3 distractores al azar. */
function buildOptions(correctName: string): string[] {
  const distractors = pickRandom(
    FLOWCHART_SYMBOLS.filter((s) => s.name !== correctName).map((s) => s.name),
    3
  );
  return shuffle([correctName, ...distractors]);
}

export default function SymbolsGame({
  subject,
  onExit,
}: {
  subject: SubjectId;
  onExit: () => void;
}) {
  // Mazo barajado de la ronda actual. Cambiar la "seed" rebaraja todo.
  const [seed, setSeed] = useState(0);
  const deck = useMemo(() => shuffle(FLOWCHART_SYMBOLS), [seed]);

  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const recorded = useRef(false);

  const symbol = deck[idx];
  // Opciones estables por (seed, idx): no se rebarajan al re-renderizar.
  const options = useMemo(
    () => buildOptions(symbol.name),
    [seed, idx] // eslint-disable-line react-hooks/exhaustive-deps
  );

  const answered = picked !== null;
  const correct = answered && picked === symbol.name;

  function pick(name: string) {
    if (answered) return;
    setPicked(name);
    if (name === symbol.name) setScore((s) => s + 1);
  }

  function next() {
    if (idx + 1 >= TOTAL) {
      const finalScore = score * 100;
      if (!recorded.current) {
        recorded.current = true;
        progressActions.recordGame(`${subject}:simbolos`, finalScore);
      }
      setDone(true);
      return;
    }
    setIdx((i) => i + 1);
    setPicked(null);
  }

  function playAgain() {
    setSeed((s) => s + 1);
    setIdx(0);
    setPicked(null);
    setScore(0);
    setDone(false);
    recorded.current = false;
  }

  const progressPct = done
    ? 100
    : ((idx + (answered ? 1 : 0)) / TOTAL) * 100;

  return (
    <div className="mx-auto max-w-2xl">
      <div className="term-window">
        {/* barra de titulo */}
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
          <span className="prompt ml-2 text-xs text-muted">
            flowchart symbols
          </span>
        </div>

        <div className="space-y-4 p-5">
          {!done ? (
            <>
              {/* progreso */}
              <div>
                <div className="mb-1 flex items-center justify-between text-xs text-dim">
                  <span>
                    simbolo {idx + 1}/{TOTAL}
                  </span>
                  <span>
                    <span className="text-term-green">✓ {score}</span> aciertos
                  </span>
                </div>
                <div className="bar">
                  <span style={{ width: `${progressPct}%` }} />
                </div>
              </div>

              {/* arte ASCII */}
              <div
                key={`art-${seed}-${idx}`}
                className="term-card fade-up flex justify-center overflow-x-auto bg-bg p-5"
              >
                <pre className="whitespace-pre text-center font-mono text-sm leading-tight text-term-cyan">
                  {symbol.ascii}
                </pre>
              </div>

              {/* pregunta */}
              <h2 className="text-center text-lg font-bold leading-snug">
                ¿Qué símbolo es?
              </h2>

              {/* opciones */}
              <div className="grid gap-2 sm:grid-cols-2">
                {options.map((name) => {
                  const isPicked = picked === name;
                  const isAnswer = name === symbol.name;
                  let state =
                    "border-border-bright bg-raised hover:border-term-green";
                  if (answered) {
                    if (isAnswer)
                      state =
                        "border-term-green bg-term-green/10 text-term-green";
                    else if (isPicked)
                      state = "border-term-red bg-term-red/10 text-term-red";
                    else state = "border-border opacity-60";
                  }
                  return (
                    <button
                      key={name}
                      disabled={answered}
                      onClick={() => pick(name)}
                      className={cn(
                        "flex w-full items-center gap-2 rounded-lg border px-4 py-3 text-left text-sm transition-all",
                        state
                      )}
                    >
                      <span className="flex-1">{name}</span>
                      {answered && isAnswer && <span>✓</span>}
                      {answered && isPicked && !isAnswer && <span>✗</span>}
                    </button>
                  );
                })}
              </div>

              {/* feedback */}
              {answered && (
                <div
                  className={cn(
                    "fade-up rounded-lg border p-3 text-sm",
                    correct
                      ? "border-term-green/40 bg-term-green/5"
                      : "border-term-red/40 bg-term-red/5"
                  )}
                >
                  <div className="font-bold">
                    {correct ? (
                      <span className="text-term-green">✓ Correcto</span>
                    ) : (
                      <span className="text-term-red">
                        ✗ Es «{symbol.name}»
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-muted">{symbol.description}</p>
                </div>
              )}

              {/* acciones */}
              <div className="flex items-center justify-between gap-2">
                <button className="btn btn-ghost" onClick={onExit}>
                  ← Volver
                </button>
                <button
                  className="btn btn-primary"
                  onClick={next}
                  disabled={!answered}
                >
                  {idx + 1 >= TOTAL ? "Ver resultado →" : "Siguiente →"}
                </button>
              </div>
            </>
          ) : (
            /* pantalla final */
            <div className="pop space-y-5 py-4 text-center">
              <div className="text-xs uppercase tracking-wide text-dim">
                resultado · símbolos
              </div>
              <div>
                <div
                  className="text-5xl font-extrabold glow-green"
                  style={{ color: "var(--color-term-green)" }}
                >
                  {score}/{TOTAL}
                </div>
                <div className="mt-2 text-sm text-muted">
                  puntaje:{" "}
                  <span className="text-term-cyan">{score * 100}</span> pts
                </div>
              </div>

              <div className="mx-auto max-w-xs">
                <div className="bar">
                  <span style={{ width: `${(score / TOTAL) * 100}%` }} />
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                <button className="btn btn-primary" onClick={playAgain}>
                  ↺ Jugar de nuevo
                </button>
                <button className="btn btn-ghost" onClick={onExit}>
                  ← Volver
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
