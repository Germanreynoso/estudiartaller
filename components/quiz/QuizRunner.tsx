"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import type { Question } from "@/lib/curriculum/types";
import { progressActions } from "@/lib/store/progress";
import { normalize, shuffle, cn } from "@/lib/utils";

export type QuizQuestion = Question & {
  topicId?: string;
  topicTitle?: string;
};

interface Props {
  questions: QuizQuestion[];
  recordKey: string;
  title: string;
  onExit?: () => void;
}

export default function QuizRunner({
  questions,
  recordKey,
  title,
  onExit,
}: Props) {
  // Pool activo (permite "reintentar errores" sin desmontar).
  const [pool, setPool] = useState<QuizQuestion[]>(questions);
  const deck = useMemo(() => shuffle(pool), [pool]);
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [text, setText] = useState("");
  const [checked, setChecked] = useState(false);
  const [results, setResults] = useState<boolean[]>([]);
  const [done, setDone] = useState(false);
  const [ai, setAi] = useState<string | null>(null);
  const [aiLoading, setAiLoading] = useState(false);
  const recorded = useRef(false);

  const q = deck[idx];
  const total = deck.length;
  const correctCount = results.filter(Boolean).length;

  function resetWith(qs: QuizQuestion[]) {
    setPool(qs);
    setIdx(0);
    setResults([]);
    setDone(false);
    setPicked(null);
    setText("");
    setChecked(false);
    setAi(null);
    recorded.current = false;
  }

  useEffect(() => {
    if (done && !recorded.current) {
      recorded.current = true;
      progressActions.recordQuiz(recordKey, correctCount, total);
    }
  }, [done, correctCount, total, recordKey]);

  if (!q && !done) {
    return (
      <div className="term-card p-6 text-center text-muted">
        No hay preguntas disponibles.
      </div>
    );
  }

  function isCorrect(): boolean {
    if (!q) return false;
    if (q.type === "fill") {
      const norm = normalize(text);
      return q.accepted.some((a) => normalize(a) === norm);
    }
    return picked === q.answerIndex;
  }

  function check() {
    if (checked || !q) return;
    if (q.type === "fill" && !text.trim()) return;
    if (q.type !== "fill" && picked === null) return;
    setChecked(true);
    setResults((r) => [...r, isCorrect()]);
  }

  function nextQ() {
    setAi(null);
    setChecked(false);
    setPicked(null);
    setText("");
    if (idx + 1 >= total) setDone(true);
    else setIdx((i) => i + 1);
  }

  async function explainWithAI() {
    if (!q || aiLoading) return;
    setAiLoading(true);
    setAi("");
    try {
      const correctText =
        q.type === "fill" ? q.accepted[0] ?? "" : q.options[q.answerIndex];
      const userText =
        q.type === "fill"
          ? text
          : picked !== null
          ? q.options[picked]
          : "(en blanco)";
      const res = await fetch("/api/explain", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: q.prompt,
          userAnswer: userText,
          correctAnswer: correctText,
          topicTitle: q.topicTitle,
        }),
      });
      const data = await res.json();
      setAi(
        res.ok
          ? data.explanation
          : data.error ?? "No se pudo obtener la explicacion."
      );
    } catch {
      setAi("Error de conexion al pedir la explicacion.");
    } finally {
      setAiLoading(false);
    }
  }

  // ---------- Pantalla de resultados ----------
  if (done) {
    const pct = total ? Math.round((correctCount / total) * 100) : 0;
    const wrong = deck.filter((_, i) => !results[i]);
    const verdict =
      pct >= 90
        ? { t: "Excelente 🏆", c: "var(--color-term-green)" }
        : pct >= 70
        ? { t: "Muy bien 👏", c: "var(--color-term-cyan)" }
        : pct >= 50
        ? { t: "Vas bien, segui 💪", c: "var(--color-term-amber)" }
        : { t: "A repasar 📚", c: "var(--color-term-red)" };

    return (
      <div className="mx-auto max-w-2xl space-y-5">
        <div className="term-card pop p-6 text-center">
          <div className="text-xs uppercase tracking-wide text-dim">
            resultado · {title}
          </div>
          <div
            className="my-2 text-5xl font-extrabold"
            style={{ color: verdict.c, textShadow: `0 0 24px ${verdict.c}55` }}
          >
            {pct}%
          </div>
          <div className="font-bold">{verdict.t}</div>
          <div className="mt-1 text-sm text-muted">
            {correctCount} de {total} correctas · +{correctCount * 5} XP
          </div>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            {wrong.length > 0 && (
              <button
                className="btn btn-primary"
                onClick={() => resetWith(wrong)}
              >
                ↻ Reintentar errores ({wrong.length})
              </button>
            )}
            <button className="btn" onClick={() => resetWith([...questions])}>
              ↺ Nueva ronda
            </button>
            {onExit && (
              <button className="btn btn-ghost" onClick={onExit}>
                ← Volver
              </button>
            )}
          </div>
        </div>

        {wrong.length > 0 && (
          <div className="term-card p-4">
            <h3 className="mb-2 text-sm font-bold text-muted">
              <span className="prompt-comment">para repasar</span>
            </h3>
            <ul className="space-y-3">
              {wrong.map((w, i) => (
                <li key={i} className="text-sm">
                  <div className="font-semibold">{w.prompt}</div>
                  <div className="mt-0.5 text-term-green">
                    ✓{" "}
                    {w.type === "fill"
                      ? w.accepted[0]
                      : w.options[w.answerIndex]}
                  </div>
                  {w.explanation && (
                    <div className="mt-0.5 text-xs text-muted">
                      {w.explanation}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }

  // ---------- Pantalla de pregunta ----------
  const correct = isCorrect();
  const diffColor =
    q.difficulty === "facil"
      ? "var(--color-term-green)"
      : q.difficulty === "media"
      ? "var(--color-term-amber)"
      : "var(--color-term-red)";

  return (
    <div className="mx-auto max-w-2xl space-y-4">
      {/* progreso */}
      <div>
        <div className="mb-1 flex items-center justify-between text-xs text-dim">
          <span>
            {title} · pregunta {idx + 1}/{total}
          </span>
          <span>
            ✓ {correctCount} correctas
          </span>
        </div>
        <div className="bar">
          <span style={{ width: `${((idx + (checked ? 1 : 0)) / total) * 100}%` }} />
        </div>
      </div>

      <div
        key={idx}
        className={cn("term-card p-5 fade-up", checked && !correct && "shake")}
      >
        <div className="mb-3 flex items-center gap-2">
          <span className="chip" style={{ color: diffColor }}>
            {q.difficulty}
          </span>
          <span className="chip">
            {q.type === "mc"
              ? "opcion multiple"
              : q.type === "vf"
              ? "verdadero / falso"
              : "completar"}
          </span>
        </div>

        <h2 className="text-lg font-bold leading-snug">{q.prompt}</h2>

        {/* opciones */}
        {q.type !== "fill" ? (
          <div className="mt-4 space-y-2">
            {q.options.map((opt, i) => {
              const isPicked = picked === i;
              const isAnswer = i === q.answerIndex;
              let state = "border-border-bright bg-raised hover:border-term-green";
              if (checked) {
                if (isAnswer)
                  state = "border-term-green bg-term-green/10 text-term-green";
                else if (isPicked)
                  state = "border-term-red bg-term-red/10 text-term-red";
                else state = "border-border opacity-60";
              } else if (isPicked) {
                state = "border-term-cyan bg-term-cyan/10";
              }
              return (
                <button
                  key={i}
                  disabled={checked}
                  onClick={() => setPicked(i)}
                  className={cn(
                    "flex w-full items-center gap-3 rounded-lg border px-4 py-3 text-left text-sm transition-all",
                    state
                  )}
                >
                  <span className="font-mono text-xs text-dim">
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span className="flex-1">{opt}</span>
                  {checked && isAnswer && <span>✓</span>}
                  {checked && isPicked && !isAnswer && <span>✗</span>}
                </button>
              );
            })}
          </div>
        ) : (
          <div className="mt-4">
            <input
              autoFocus
              value={text}
              disabled={checked}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && check()}
              placeholder="escribi tu respuesta..."
              className={cn(
                "w-full rounded-lg border bg-raised px-4 py-3 text-sm outline-none transition-colors",
                checked
                  ? correct
                    ? "border-term-green text-term-green"
                    : "border-term-red text-term-red"
                  : "border-border-bright focus:border-term-cyan"
              )}
            />
            {checked && !correct && (
              <p className="mt-2 text-sm text-term-green">
                Respuesta correcta: {q.accepted[0]}
              </p>
            )}
          </div>
        )}

        {/* feedback */}
        {checked && (
          <div className="mt-4 fade-up">
            <div
              className={cn(
                "rounded-lg border p-3 text-sm",
                correct
                  ? "border-term-green/40 bg-term-green/5"
                  : "border-term-red/40 bg-term-red/5"
              )}
            >
              <div className="font-bold">
                {correct ? "✓ Correcto" : "✗ Incorrecto"}
              </div>
              {q.explanation && (
                <p className="mt-1 text-muted">{q.explanation}</p>
              )}
            </div>

            {!correct && (
              <div className="mt-3">
                {ai === null ? (
                  <button
                    className="btn btn-ghost text-xs"
                    onClick={explainWithAI}
                    disabled={aiLoading}
                  >
                    ✦ Explicame con IA
                  </button>
                ) : (
                  <div className="rounded-lg border border-term-blue/30 bg-term-blue/5 p-3 text-sm">
                    <div className="mb-1 text-xs font-bold text-term-blue">
                      ✦ Tutor IA
                    </div>
                    {aiLoading && !ai ? (
                      <span className="text-muted">pensando…</span>
                    ) : (
                      <p className="whitespace-pre-wrap text-muted">{ai}</p>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* acciones */}
        <div className="mt-5 flex justify-end gap-2">
          {!checked ? (
            <button
              className="btn btn-primary"
              onClick={check}
              disabled={q.type === "fill" ? !text.trim() : picked === null}
            >
              Responder
            </button>
          ) : (
            <button className="btn btn-primary" onClick={nextQ}>
              {idx + 1 >= total ? "Ver resultados →" : "Siguiente →"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
