"use client";

import { useState, useRef } from "react";
import { progressActions } from "@/lib/store/progress";
import { shuffle, pickRandom, cn } from "@/lib/utils";
import { allOrderChallenges } from "@/lib/curriculum/data";
import type { SubjectId } from "@/lib/curriculum/types";

type Challenge = { id: string; title: string; steps: string[] };

/** Baraja asegurando que el orden resultante difiera del correcto (si es posible). */
function shuffledDifferent(steps: string[]): string[] {
  if (steps.length < 2) return [...steps];
  let out = shuffle(steps);
  let guard = 0;
  while (out.every((s, i) => s === steps[i]) && guard < 12) {
    out = shuffle(steps);
    guard++;
  }
  return out;
}

export default function OrderGame({
  subject,
  onExit,
}: {
  subject: SubjectId;
  onExit: () => void;
}) {
  // Pool de retos jugables (>= 3 pasos) de la materia activa.
  const pool = useRef<Challenge[]>(
    allOrderChallenges(subject).filter((c) => c.steps.length >= 3)
  );

  // Estado del reto actual + orden barajado inicial.
  const [challenge, setChallenge] = useState<Challenge | null>(() => {
    const picked = pickRandom(pool.current, 1)[0] ?? null;
    return picked ?? null;
  });
  const [order, setOrder] = useState<string[]>(() =>
    challenge ? shuffledDifferent(challenge.steps) : []
  );

  const [checked, setChecked] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [won, setWon] = useState(false);
  const [score, setScore] = useState(0);
  const recorded = useRef(false);

  if (!challenge) {
    return (
      <div className="mx-auto max-w-2xl">
        <div className="term-card p-6 text-center text-muted">
          No hay retos de ordenar disponibles.
          <div className="mt-4">
            <button className="btn btn-ghost" onClick={onExit}>
              ← Volver
            </button>
          </div>
        </div>
      </div>
    );
  }

  const correct = challenge.steps;
  // Estado por posicion: correcto si coincide con el orden esperado.
  const posCorrect = order.map((s, i) => s === correct[i]);
  const allCorrect = posCorrect.every(Boolean);

  function move(from: number, dir: -1 | 1) {
    if (won) return;
    const to = from + dir;
    if (to < 0 || to >= order.length) return;
    setOrder((cur) => {
      const next = [...cur];
      [next[from], next[to]] = [next[to], next[from]];
      return next;
    });
    setChecked(false); // mover invalida la verificacion previa
  }

  function verify() {
    if (won) return;
    const n = attempts + 1;
    setAttempts(n);
    setChecked(true);
    const ok = order.every((s, i) => s === correct[i]);
    if (ok && !recorded.current) {
      recorded.current = true;
      const sc = Math.max(50, 500 - (n - 1) * 60);
      setScore(sc);
      setWon(true);
      progressActions.recordGame(`${subject}:ordenar`, sc);
    }
  }

  function loadChallenge(c: Challenge) {
    setChallenge(c);
    setOrder(shuffledDifferent(c.steps));
    setChecked(false);
    setAttempts(0);
    setWon(false);
    setScore(0);
    recorded.current = false;
  }

  function otherChallenge() {
    const others = pool.current.filter((c) => c.id !== challenge!.id);
    const next = pickRandom(others.length ? others : pool.current, 1)[0];
    if (next) loadChallenge(next);
  }

  const hasOthers = pool.current.length > 1;

  return (
    <div className="mx-auto max-w-2xl space-y-4">
      {/* Ventana terminal */}
      <div className="term-window fade-up">
        <div className="term-titlebar">
          <span className="term-dot" style={{ background: "var(--color-term-red)" }} />
          <span className="term-dot" style={{ background: "var(--color-term-amber)" }} />
          <span className="term-dot" style={{ background: "var(--color-term-green)" }} />
          <span className="ml-2 text-xs text-dim">
            <span className="prompt">sort steps</span>
          </span>
        </div>

        <div className="space-y-4 p-5">
          {/* Consigna */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <div className="prompt-comment text-xs">
                ordena los pasos del algoritmo
              </div>
              <h2 className="text-lg font-bold leading-snug">
                Ordená los pasos de:{" "}
                <span className="glow-cyan">{challenge.title}</span>
              </h2>
            </div>
            <span className="chip">
              {attempts} {attempts === 1 ? "intento" : "intentos"}
            </span>
          </div>

          {/* Lista de pasos */}
          <ul className={cn("space-y-2", checked && !allCorrect && "shake")}>
            {order.map((step, i) => {
              const isFirst = i === 0;
              const isLast = i === order.length - 1;
              const ok = posCorrect[i];

              const stateCls = checked
                ? ok
                  ? "border-term-green bg-term-green/10"
                  : "border-term-red bg-term-red/10"
                : "border-border";

              const numColor = checked
                ? ok
                  ? "var(--color-term-green)"
                  : "var(--color-term-red)"
                : "var(--color-term-cyan)";

              return (
                <li
                  key={`${step}-${i}`}
                  className={cn(
                    "term-card flex items-center gap-3 p-3 transition-all",
                    !won && "term-card-hover",
                    stateCls
                  )}
                >
                  {/* Numero de posicion */}
                  <span
                    className="grid h-7 w-7 shrink-0 place-items-center rounded-md border text-sm font-bold"
                    style={{
                      color: numColor,
                      borderColor: numColor,
                      background: "var(--color-overlay)",
                    }}
                  >
                    {i + 1}
                  </span>

                  {/* Texto del paso */}
                  <span className="flex-1 text-sm leading-snug">{step}</span>

                  {checked && (
                    <span
                      className="text-sm font-bold"
                      style={{
                        color: ok
                          ? "var(--color-term-green)"
                          : "var(--color-term-red)",
                      }}
                    >
                      {ok ? "✓" : "✗"}
                    </span>
                  )}

                  {/* Controles subir/bajar */}
                  <div className="flex flex-col gap-1">
                    <button
                      className="btn btn-ghost px-2 py-0.5 text-xs"
                      onClick={() => move(i, -1)}
                      disabled={isFirst || won}
                      aria-label="Subir paso"
                      title="Subir"
                    >
                      ▲
                    </button>
                    <button
                      className="btn btn-ghost px-2 py-0.5 text-xs"
                      onClick={() => move(i, 1)}
                      disabled={isLast || won}
                      aria-label="Bajar paso"
                      title="Bajar"
                    >
                      ▼
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>

          {/* Feedback de verificacion (sin ganar todavia) */}
          {checked && !won && (
            <div className="fade-up rounded-lg border border-term-red/40 bg-term-red/5 p-3 text-sm">
              <span className="font-bold text-term-red">✗ Aún no</span>{" "}
              <span className="text-muted">
                — {posCorrect.filter(Boolean).length}/{order.length} en su lugar.
                Seguí moviendo y verificá de nuevo.
              </span>
            </div>
          )}

          {/* Estado ganado */}
          {won && (
            <div className="pop rounded-lg border border-term-green/40 bg-term-green/5 p-4 text-center">
              <div className="text-3xl font-extrabold glow-green">
                ¡Ordenado! 🏆
              </div>
              <div className="mt-1 text-sm text-muted">
                Resuelto en {attempts}{" "}
                {attempts === 1 ? "intento" : "intentos"} · +{score} pts
              </div>
            </div>
          )}

          {/* Acciones */}
          <div className="flex flex-wrap justify-end gap-2 pt-1">
            <button className="btn btn-ghost" onClick={onExit}>
              ← Volver
            </button>
            {won ? (
              hasOthers && (
                <button className="btn btn-primary" onClick={otherChallenge}>
                  ↺ Otro reto
                </button>
              )
            ) : (
              <button className="btn btn-primary" onClick={verify}>
                Verificar
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
