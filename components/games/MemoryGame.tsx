"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { progressActions } from "@/lib/store/progress";
import { shuffle, pickRandom, cn } from "@/lib/utils";
import { allMatchPairs } from "@/lib/curriculum/data";
import type { SubjectId } from "@/lib/curriculum/types";

const PAIR_COUNT = 6; // 6 pares => 12 cartas
const FLIP_BACK_MS = 850;
const DEF_MAX = 70;

type CardKind = "concepto" | "definicion";

interface Card {
  id: string; // identificador unico de carta
  pairId: number; // pares con el mismo pairId hacen match
  kind: CardKind;
  text: string;
  topicId: string;
}

function buildDeck(subject: SubjectId): Card[] {
  const pairs = pickRandom(allMatchPairs(subject), PAIR_COUNT);
  const cards: Card[] = [];
  pairs.forEach((p, i) => {
    cards.push({
      id: `${i}-c`,
      pairId: i,
      kind: "concepto",
      text: p.term,
      topicId: p.topicId,
    });
    cards.push({
      id: `${i}-d`,
      pairId: i,
      kind: "definicion",
      text: p.definition,
      topicId: p.topicId,
    });
  });
  return shuffle(cards);
}

function truncate(s: string, max: number): string {
  const clean = s.trim();
  return clean.length > max ? clean.slice(0, max).trimEnd() + "…" : clean;
}

function fmtTime(secs: number): string {
  const m = Math.floor(secs / 60);
  const s = secs % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function MemoryGame({
  subject,
  onExit,
}: {
  subject: SubjectId;
  onExit: () => void;
}) {
  const [deck, setDeck] = useState<Card[]>([]);
  const [flipped, setFlipped] = useState<number[]>([]); // indices volteados (max 2)
  const [matched, setMatched] = useState<Set<number>>(new Set()); // pairIds resueltos
  const [moves, setMoves] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [locked, setLocked] = useState(false); // bloquea clicks durante el flip-back
  const [started, setStarted] = useState(false); // arranca el timer al primer click
  const [won, setWon] = useState(false);

  const recorded = useRef(false);
  const flipTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Mazo inicial (lazy initializer en efecto: es client component).
  useEffect(() => {
    setDeck(buildDeck(subject));
  }, [subject]);

  const newGame = useCallback(() => {
    if (flipTimer.current) clearTimeout(flipTimer.current);
    setDeck(buildDeck(subject));
    setFlipped([]);
    setMatched(new Set());
    setMoves(0);
    setSeconds(0);
    setLocked(false);
    setStarted(false);
    setWon(false);
    recorded.current = false;
  }, [subject]);

  const totalPairs = deck.length / 2;
  const isWon = totalPairs > 0 && matched.size === totalPairs;
  const score = Math.max(50, 1200 - moves * 25 - seconds * 3);

  // Timer.
  useEffect(() => {
    if (!started || won) return;
    const t = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(t);
  }, [started, won]);

  // Deteccion de victoria + registro unico.
  useEffect(() => {
    if (isWon && !won) {
      setWon(true);
      if (!recorded.current) {
        recorded.current = true;
        progressActions.recordGame(`${subject}:memoria`, score);
      }
    }
  }, [isWon, won, score, subject]);

  // Limpieza del timer de flip-back al desmontar.
  useEffect(() => {
    return () => {
      if (flipTimer.current) clearTimeout(flipTimer.current);
    };
  }, []);

  function handleFlip(index: number) {
    if (locked || won) return;
    if (flipped.includes(index)) return;
    const card = deck[index];
    if (!card || matched.has(card.pairId)) return;
    if (!started) setStarted(true);

    const next = [...flipped, index];
    setFlipped(next);

    if (next.length === 2) {
      setMoves((m) => m + 1);
      const [a, b] = next;
      if (deck[a].pairId === deck[b].pairId) {
        // Match: revelar y limpiar seleccion.
        setMatched((prev) => {
          const s = new Set(prev);
          s.add(deck[a].pairId);
          return s;
        });
        setFlipped([]);
      } else {
        // Fallo: bloquear y dar vuelta tras un instante.
        setLocked(true);
        flipTimer.current = setTimeout(() => {
          setFlipped([]);
          setLocked(false);
        }, FLIP_BACK_MS);
      }
    }
  }

  // ---------- Pantalla de victoria ----------
  if (won) {
    return (
      <div className="mx-auto max-w-2xl space-y-5">
        <div className="term-card pop p-6 text-center">
          <div className="text-xs uppercase tracking-wide text-dim">
            partida completada · memoria
          </div>
          <div
            className="my-2 text-5xl font-extrabold glow-green"
            style={{ textShadow: "0 0 24px rgba(70,224,138,0.5)" }}
          >
            {score}
          </div>
          <div className="font-bold text-term-green">¡Memoria de acero! 🧠</div>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-2 text-sm">
            <span className="chip" style={{ color: "var(--color-term-cyan)" }}>
              {moves} movimientos
            </span>
            <span className="chip" style={{ color: "var(--color-term-amber)" }}>
              ⏱ {fmtTime(seconds)}
            </span>
            <span className="chip" style={{ color: "var(--color-term-green)" }}>
              {totalPairs} pares
            </span>
          </div>
          <div className="mt-3 text-xs text-muted">
            <span className="prompt-comment">
              score = max(50, 1200 − movimientos·25 − segundos·3)
            </span>
          </div>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <button className="btn btn-primary" onClick={newGame}>
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

  // ---------- Tablero ----------
  return (
    <div className="mx-auto max-w-3xl space-y-4">
      {/* Cabecera tipo ventana terminal */}
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
          <span className="ml-2 text-xs text-dim">memory.game</span>
        </div>

        <div className="p-4 sm:p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-bold">
                <span className="prompt glow-green">memory</span>
              </h2>
              <p className="mt-0.5 text-xs text-muted">
                Encontrá cada{" "}
                <span className="text-term-cyan">concepto</span> con su{" "}
                <span className="text-term-magenta">definición</span>.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <span
                className="chip"
                style={{ color: "var(--color-term-cyan)" }}
              >
                ⇄ {moves} mov
              </span>
              <span
                className="chip"
                style={{ color: "var(--color-term-amber)" }}
              >
                ⏱ {fmtTime(seconds)}
              </span>
              <button className="btn btn-ghost text-xs" onClick={newGame}>
                ↺ Reiniciar
              </button>
              <button className="btn btn-ghost text-xs" onClick={onExit}>
                ← Volver
              </button>
            </div>
          </div>

          {/* Progreso de pares */}
          <div className="mt-3">
            <div className="mb-1 flex items-center justify-between text-xs text-dim">
              <span>parejas encontradas</span>
              <span>
                {matched.size}/{totalPairs || PAIR_COUNT}
              </span>
            </div>
            <div className="bar">
              <span
                style={{
                  width: `${
                    totalPairs ? (matched.size / totalPairs) * 100 : 0
                  }%`,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Grilla de cartas */}
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4">
        {deck.map((card, index) => {
          const isMatched = matched.has(card.pairId);
          const isFlipped = flipped.includes(index) || isMatched;
          const isConcept = card.kind === "concepto";

          return (
            <button
              key={card.id}
              onClick={() => handleFlip(index)}
              disabled={locked || isMatched}
              aria-label={isFlipped ? card.text : "carta oculta"}
              className={cn(
                "group relative flex aspect-[3/4] flex-col overflow-hidden rounded-lg border p-2.5 text-left transition-all duration-200 sm:aspect-[4/5] sm:p-3",
                isMatched
                  ? "border-term-green bg-term-green/10 pop"
                  : isFlipped
                  ? cn(
                      "fade-up",
                      isConcept
                        ? "border-term-cyan bg-term-cyan/10"
                        : "border-term-magenta bg-term-magenta/10"
                    )
                  : "term-card term-card-hover cursor-pointer border-border-bright bg-raised"
              )}
            >
              {isFlipped ? (
                <>
                  <span
                    className={cn(
                      "chip self-start text-[10px]",
                      isMatched
                        ? "text-term-green"
                        : isConcept
                        ? "text-term-cyan"
                        : "text-term-magenta"
                    )}
                  >
                    {isConcept ? "concepto" : "definicion"}
                  </span>
                  <span
                    className={cn(
                      "mt-1.5 flex-1 overflow-hidden text-xs leading-snug sm:text-sm",
                      isMatched
                        ? "text-term-green"
                        : "text-ink",
                      isConcept ? "font-bold" : "font-normal"
                    )}
                  >
                    {isConcept ? card.text : truncate(card.text, DEF_MAX)}
                  </span>
                  {isMatched && (
                    <span className="self-end text-sm text-term-green">✓</span>
                  )}
                </>
              ) : (
                <span className="flex flex-1 items-center justify-center text-2xl font-bold text-dim transition-colors group-hover:text-term-green sm:text-3xl">
                  ?
                </span>
              )}
            </button>
          );
        })}

        {/* Placeholder mientras carga el mazo (evita salto de layout). */}
        {deck.length === 0 &&
          Array.from({ length: PAIR_COUNT * 2 }).map((_, i) => (
            <div
              key={`ph-${i}`}
              className="aspect-[3/4] animate-pulse rounded-lg border border-border bg-panel sm:aspect-[4/5]"
            />
          ))}
      </div>

      <p className="text-center text-xs text-dim">
        <span className="prompt-comment">
          máximo 2 cartas a la vez · cada intento suma un movimiento
        </span>
      </p>
    </div>
  );
}
