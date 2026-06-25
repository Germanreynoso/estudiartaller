"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { progressActions } from "@/lib/store/progress";
import { shuffle, pickRandom, cn } from "@/lib/utils";
import { allTerms } from "@/lib/curriculum/data";

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const MAX_ERRORS = 6;

type Term = { term: string; topicId: string; topicTitle: string };
type Status = "playing" | "won" | "lost";

/** Las 7 etapas del ahorcado ASCII (0 a 6 errores). */
const GALLOWS: string[] = [
  `
 +---+
 |   |
     |
     |
     |
     |
=========`,
  `
 +---+
 |   |
 O   |
     |
     |
     |
=========`,
  `
 +---+
 |   |
 O   |
 |   |
     |
     |
=========`,
  `
 +---+
 |   |
 O   |
/|   |
     |
     |
=========`,
  `
 +---+
 |   |
 O   |
/|\\  |
     |
     |
=========`,
  `
 +---+
 |   |
 O   |
/|\\  |
/    |
     |
=========`,
  `
 +---+
 |   |
 O   |
/|\\  |
/ \\  |
     |
=========`,
];

/** Toma un termino jugable al azar (largo 3..14), distinto del actual si se puede. */
function pickTerm(exclude?: string): Term | null {
  const playable = allTerms().filter(
    (t) => t.term.length >= 3 && t.term.length <= 14
  );
  if (playable.length === 0) return null;
  const pool =
    playable.length > 1 && exclude
      ? playable.filter((t) => t.term !== exclude)
      : playable;
  return pickRandom(pool.length ? pool : playable, 1)[0] ?? null;
}

export default function HangmanGame({ onExit }: { onExit: () => void }) {
  const [current, setCurrent] = useState<Term | null>(null);
  const [guessed, setGuessed] = useState<Set<string>>(new Set());
  const [errors, setErrors] = useState(0);

  const word = current?.term ?? "";
  const letters = useMemo(
    () => Array.from(new Set(word.split(""))),
    [word]
  );

  const status: Status = !current
    ? "playing"
    : errors >= MAX_ERRORS
    ? "lost"
    : letters.every((l) => guessed.has(l))
    ? "won"
    : "playing";

  const score =
    status === "won"
      ? 100 + (MAX_ERRORS - errors) * 50 + word.length * 10
      : 0;

  // ---------- Inicializacion / nueva palabra ----------
  const newWord = useCallback((excludeTerm?: string) => {
    setCurrent(pickTerm(excludeTerm));
    setGuessed(new Set());
    setErrors(0);
  }, []);

  useEffect(() => {
    newWord();
  }, [newWord]);

  // ---------- Registrar score al ganar (una sola vez por palabra) ----------
  useEffect(() => {
    if (status === "won") {
      progressActions.recordGame("ahorcado", score);
    }
    // Solo dispara cuando la palabra cambia de estado a ganada.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, word]);

  // ---------- Procesar una letra ----------
  const playLetter = useCallback(
    (letter: string) => {
      if (status !== "playing") return;
      if (guessed.has(letter)) return;
      setGuessed((prev) => {
        const next = new Set(prev);
        next.add(letter);
        return next;
      });
      if (!word.includes(letter)) {
        setErrors((e) => e + 1);
      }
    },
    [status, guessed, word]
  );

  // ---------- Teclado fisico ----------
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const k = e.key.toUpperCase();
      if (k.length === 1 && k >= "A" && k <= "Z") {
        playLetter(k);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [playLetter]);

  if (!current) {
    return (
      <div className="term-card p-6 text-center text-muted">
        No hay terminos disponibles para jugar.
        <div className="mt-4">
          <button className="btn btn-ghost" onClick={onExit}>
            ← Volver
          </button>
        </div>
      </div>
    );
  }

  const display = word.split("").map((ch) => (guessed.has(ch) ? ch : "_"));
  const livesLeft = MAX_ERRORS - errors;
  const gallowsColor =
    status === "lost" ? "text-term-red" : "text-term-amber";

  return (
    <div className="mx-auto max-w-2xl space-y-4">
      {/* Ventana terminal */}
      <div className="term-window fade-up">
        <div className="term-titlebar">
          <span className="term-dot" style={{ background: "#fb6f7d" }} />
          <span className="term-dot" style={{ background: "#f6b545" }} />
          <span className="term-dot" style={{ background: "#46e08a" }} />
          <span className="ml-2 text-xs text-muted">
            <span className="prompt">hangman</span>
            <span className="cursor" />
          </span>
        </div>

        <div className="space-y-5 p-5 sm:p-6">
          {/* Pista + vidas */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="chip" style={{ color: "var(--color-term-cyan)" }}>
              Tema: {current.topicTitle}
            </span>
            <span className="text-xs text-dim">
              errores {errors}/{MAX_ERRORS} ·{" "}
              <span
                className={cn(
                  livesLeft <= 2 ? "text-term-red" : "text-term-green"
                )}
              >
                {livesLeft} vidas
              </span>
            </span>
          </div>

          {/* Ahorcado ASCII */}
          <div className="flex justify-center">
            <pre
              className={cn(
                "rounded-lg border border-border bg-bg px-6 py-3 text-center text-[13px] leading-tight sm:text-sm",
                gallowsColor,
                status === "lost" && "shake"
              )}
              aria-hidden="true"
            >
              {GALLOWS[Math.min(errors, MAX_ERRORS)]}
            </pre>
          </div>

          {/* Palabra */}
          <div
            className="flex flex-wrap justify-center gap-x-2 gap-y-3 font-mono text-3xl font-extrabold tracking-widest sm:text-4xl"
            aria-label="palabra"
          >
            {display.map((ch, i) => {
              const revealed = ch !== "_";
              const lostReveal = status === "lost" && !revealed;
              return (
                <span
                  key={i}
                  className={cn(
                    "inline-flex w-6 justify-center border-b-2 pb-1 sm:w-7",
                    revealed
                      ? "border-transparent text-term-green pop"
                      : lostReveal
                      ? "border-term-red/50 text-term-red"
                      : "border-border-bright text-dim"
                  )}
                >
                  {lostReveal ? word[i] : ch === "_" ? " " : ch}
                </span>
              );
            })}
          </div>

          {/* Estado */}
          {status === "won" && (
            <div className="pop rounded-lg border border-term-green/40 bg-term-green/5 p-4 text-center">
              <div className="text-lg font-extrabold glow-green">
                ✓ ¡Adivinaste!
              </div>
              <div className="mt-1 text-sm text-muted">
                La palabra era <strong className="text-ink">{word}</strong> ·{" "}
                <span className="text-term-amber">+{score} pts</span>
              </div>
            </div>
          )}

          {status === "lost" && (
            <div className="fade-up rounded-lg border border-term-red/40 bg-term-red/5 p-4 text-center">
              <div className="text-lg font-extrabold text-term-red">
                ✗ Te quedaste sin intentos
              </div>
              <div className="mt-1 text-sm text-muted">
                La palabra era{" "}
                <strong className="text-term-red">{word}</strong>
              </div>
            </div>
          )}

          {/* Teclado en pantalla */}
          <div className="grid grid-cols-7 gap-1.5 sm:grid-cols-9">
            {ALPHABET.map((letter) => {
              const used = guessed.has(letter);
              const inWord = word.includes(letter);
              const playable = status === "playing" && !used;
              let tone =
                "border-border-bright bg-raised text-ink hover:border-term-green";
              if (used) {
                tone = inWord
                  ? "border-term-green/50 bg-term-green/10 text-term-green"
                  : "border-term-red/40 bg-term-red/10 text-term-red opacity-60";
              } else if (status !== "playing") {
                tone = "border-border bg-raised text-dim opacity-50";
              }
              return (
                <button
                  key={letter}
                  type="button"
                  disabled={!playable}
                  onClick={() => playLetter(letter)}
                  aria-label={`letra ${letter}`}
                  className={cn(
                    "rounded-md border py-2 text-sm font-bold transition-all",
                    "disabled:cursor-not-allowed",
                    tone
                  )}
                >
                  {letter}
                </button>
              );
            })}
          </div>

          {/* Acciones */}
          <div className="flex flex-wrap justify-center gap-3 pt-1">
            <button
              type="button"
              className={cn("btn", status !== "playing" && "btn-primary")}
              onClick={() => newWord(word)}
            >
              ↺ Otra palabra
            </button>
            <button type="button" className="btn btn-ghost" onClick={onExit}>
              ← Volver
            </button>
          </div>

          {/* Hint */}
          <p className="text-center text-xs text-dim">
            <span className="prompt-comment">
              escribi o tocá una letra · {MAX_ERRORS} errores máximo
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
