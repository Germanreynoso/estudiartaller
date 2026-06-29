"use client";

import { useEffect, useMemo, useState } from "react";
import { topicsBySubject, allFlashcards } from "@/lib/curriculum/data";
import { useProgress, progressActions } from "@/lib/store/progress";
import { useSubject } from "@/lib/store/subject";
import { shuffle, cn } from "@/lib/utils";

interface Card {
  key: string;
  front: string;
  back: string;
  topicTitle: string;
  box: number;
}

const SESSION_SIZE = 15;

export default function FlashcardsPage() {
  const progress = useProgress();
  const subject = useSubject();
  const [topicFilter, setTopicFilter] = useState<string>("");
  const [session, setSession] = useState<Card[] | null>(null);
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [reviewed, setReviewed] = useState(0);

  const allCards = useMemo<Card[]>(() => {
    return allFlashcards(subject).map((f) => ({
      key: `${f.topicId}:${f.id}`,
      front: f.front,
      back: f.back,
      topicTitle: f.topicTitle,
      box: progress.flashboxes[`${f.topicId}:${f.id}`] ?? 1,
    }));
  }, [progress.flashboxes, subject]);

  // Al cambiar de materia, el filtro por tema (de la otra materia) ya no aplica.
  useEffect(() => {
    setTopicFilter("");
  }, [subject]);

  // Distribucion por caja (1..5).
  const dist = useMemo(() => {
    const d = [0, 0, 0, 0, 0];
    for (const c of allCards) d[c.box - 1]++;
    return d;
  }, [allCards]);

  function startSession() {
    const filtered = topicFilter
      ? allCards.filter((c) => c.topicTitle === topicFilter)
      : allCards;
    // Prioriza cajas bajas (menos sabidas).
    const ordered = shuffle(filtered).sort((a, b) => a.box - b.box);
    setSession(ordered.slice(0, SESSION_SIZE));
    setIdx(0);
    setFlipped(false);
    setReviewed(0);
  }

  function rate(known: boolean) {
    if (!session) return;
    const card = session[idx];
    const nextBox = known ? card.box + 1 : 1;
    progressActions.setFlashbox(card.key, nextBox);
    setReviewed((r) => r + 1);
    if (idx + 1 >= session.length) {
      setSession([...session]); // marca fin (idx fuera de rango)
      setIdx(session.length);
    } else {
      setIdx((i) => i + 1);
      setFlipped(false);
    }
  }

  // ---------- Sesion activa ----------
  if (session && idx < session.length) {
    const card = session[idx];
    return (
      <div className="mx-auto max-w-2xl space-y-4">
        <div className="flex items-center justify-between text-xs text-dim">
          <span>
            tarjeta {idx + 1}/{session.length}
          </span>
          <button className="btn btn-ghost text-xs" onClick={() => setSession(null)}>
            ✕ terminar
          </button>
        </div>
        <div className="bar">
          <span style={{ width: `${(idx / session.length) * 100}%` }} />
        </div>

        <button
          onClick={() => setFlipped((f) => !f)}
          className="term-window block w-full text-left"
          style={{ perspective: "1000px" }}
        >
          <div className="term-titlebar">
            <span className="term-dot" style={{ background: "#fb6f7d" }} />
            <span className="term-dot" style={{ background: "#f6b545" }} />
            <span className="term-dot" style={{ background: "#46e08a" }} />
            <span className="ml-2 text-xs text-dim">
              {flipped ? "definicion" : "concepto"} · caja {card.box}/5
            </span>
          </div>
          <div
            key={flipped ? "b" : "f"}
            className="pop flex min-h-[210px] flex-col items-center justify-center p-7 text-center"
          >
            <span className="mb-2 text-[11px] uppercase tracking-wide text-dim">
              {card.topicTitle}
            </span>
            <span
              className={cn(
                "text-balance",
                flipped ? "text-base text-ink" : "text-xl font-bold glow-cyan"
              )}
            >
              {flipped ? card.back : card.front}
            </span>
            <span className="mt-4 text-xs text-dim">
              {flipped ? "" : "tocar para ver la respuesta"}
            </span>
          </div>
        </button>

        {flipped ? (
          <div className="flex gap-3 fade-up">
            <button
              className="btn flex-1"
              style={{ borderColor: "var(--color-term-red)" }}
              onClick={() => rate(false)}
            >
              ✗ No la sabia
            </button>
            <button className="btn btn-primary flex-1" onClick={() => rate(true)}>
              ✓ La sabia
            </button>
          </div>
        ) : (
          <button
            className="btn w-full"
            onClick={() => setFlipped(true)}
          >
            Mostrar respuesta
          </button>
        )}
      </div>
    );
  }

  // ---------- Fin de sesion ----------
  if (session && idx >= session.length) {
    return (
      <div className="mx-auto max-w-xl space-y-4 text-center">
        <div className="term-card pop p-7">
          <div className="text-4xl">🎴</div>
          <h2 className="mt-2 text-xl font-extrabold glow-green">
            Sesion completa
          </h2>
          <p className="mt-1 text-sm text-muted">
            Repasaste {reviewed} tarjetas. Las que no sabias volveran antes.
          </p>
          <div className="mt-5 flex justify-center gap-3">
            <button className="btn btn-primary" onClick={startSession}>
              ↺ Otra sesion
            </button>
            <button className="btn" onClick={() => setSession(null)}>
              ← Volver
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ---------- Menu ----------
  return (
    <div className="space-y-7">
      <header className="fade-up">
        <h1 className="text-2xl font-extrabold">
          <span className="prompt">study flashcards</span>
        </h1>
        <p className="mt-1 text-sm text-muted">
          Repaso espaciado (sistema Leitner): las tarjetas que dominas aparecen
          cada vez menos.
        </p>
      </header>

      <section className="term-card p-5 fade-up">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <span className="text-sm text-muted">Mazo:</span>
          <select
            value={topicFilter}
            onChange={(e) => setTopicFilter(e.target.value)}
            className="rounded-md border border-border-bright bg-raised px-3 py-2 text-sm outline-none focus:border-term-cyan"
          >
            <option value="">Todos los temas ({allCards.length})</option>
            {topicsBySubject(subject).map((t) => (
              <option key={t.id} value={t.title}>
                {t.number}. {t.title}
              </option>
            ))}
          </select>
          <button className="btn btn-primary" onClick={startSession}>
            ▶ Empezar sesion
          </button>
        </div>

        {/* Distribucion Leitner */}
        <div>
          <div className="mb-2 text-xs text-dim">
            <span className="prompt-comment">dominio de las tarjetas</span>
          </div>
          <div className="grid grid-cols-5 gap-2">
            {dist.map((count, i) => {
              const max = Math.max(...dist, 1);
              return (
                <div key={i} className="text-center">
                  <div className="flex h-20 items-end justify-center">
                    <div
                      className="w-full rounded-t"
                      style={{
                        height: `${(count / max) * 100}%`,
                        minHeight: count > 0 ? "6px" : "0",
                        background:
                          "linear-gradient(180deg,var(--color-term-green),var(--color-term-cyan))",
                      }}
                    />
                  </div>
                  <div className="mt-1 text-xs font-bold">{count}</div>
                  <div className="text-[10px] text-dim">caja {i + 1}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
