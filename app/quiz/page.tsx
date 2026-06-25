"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { TOPICS, topicById, allQuestions } from "@/lib/curriculum/data";
import { MODULES } from "@/lib/curriculum/modules";
import { pickRandom } from "@/lib/utils";
import QuizRunner, { QuizQuestion } from "@/components/quiz/QuizRunner";

interface ActiveQuiz {
  questions: QuizQuestion[];
  recordKey: string;
  title: string;
}

function QuizContent() {
  const params = useSearchParams();
  const topicParam = params.get("topic");

  const [active, setActive] = useState<ActiveQuiz | null>(null);
  const [round, setRound] = useState(0);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState<string | null>(null);
  const [aiTopic, setAiTopic] = useState<string>("");

  function start(a: ActiveQuiz) {
    setActive(a);
    setRound((r) => r + 1);
  }

  function startTopic(id: string) {
    const t = topicById(id);
    if (!t) return;
    start({
      questions: t.questions.map((q) => ({
        ...q,
        topicId: t.id,
        topicTitle: t.title,
      })),
      recordKey: t.id,
      title: t.title,
    });
  }

  function startMixed(n: number) {
    start({
      questions: pickRandom(allQuestions(), n),
      recordKey: "mixto",
      title: `Quiz mixto (${n})`,
    });
  }

  async function startAI() {
    setAiLoading(true);
    setAiError(null);
    try {
      const res = await fetch("/api/quiz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topicId: aiTopic || undefined, count: 6 }),
      });
      const data = await res.json();
      if (!res.ok) {
        setAiError(data.error ?? "No se pudo generar el quiz.");
        return;
      }
      const t = aiTopic ? topicById(aiTopic) : null;
      start({
        questions: (data.questions as QuizQuestion[]).map((q) => ({
          ...q,
          topicTitle: t?.title,
          topicId: t?.id,
        })),
        recordKey: "ia",
        title: t ? `IA · ${t.title}` : "Quiz IA",
      });
    } catch {
      setAiError("Error de conexion con la IA.");
    } finally {
      setAiLoading(false);
    }
  }

  // Si llega ?topic=, arranca ese tema directamente.
  useEffect(() => {
    if (topicParam && topicById(topicParam)) startTopic(topicParam);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [topicParam]);

  if (active) {
    return (
      <QuizRunner
        key={round}
        questions={active.questions}
        recordKey={active.recordKey}
        title={active.title}
        onExit={() => setActive(null)}
      />
    );
  }

  return (
    <div className="space-y-7">
      <header className="fade-up">
        <h1 className="text-2xl font-extrabold">
          <span className="prompt">run quiz</span>
        </h1>
        <p className="mt-1 text-sm text-muted">
          Elegi un modo de practica. Tu puntaje suma XP y mantiene la racha.
        </p>
      </header>

      {/* Mixto + IA */}
      <section className="grid gap-3 sm:grid-cols-2 fade-up">
        <div className="term-card p-5">
          <div className="text-lg glow-green" aria-hidden>
            ⚄
          </div>
          <h2 className="mt-1 font-bold">Quiz mixto</h2>
          <p className="mt-1 text-xs text-muted">
            Preguntas al azar de todo el temario ({allQuestions().length}{" "}
            disponibles).
          </p>
          <div className="mt-4 flex gap-2">
            <button className="btn btn-primary" onClick={() => startMixed(10)}>
              10 preguntas
            </button>
            <button className="btn" onClick={() => startMixed(20)}>
              20
            </button>
          </div>
        </div>

        <div className="term-card p-5">
          <div className="text-lg" style={{ color: "var(--color-term-blue)" }}>
            ✦
          </div>
          <h2 className="mt-1 font-bold">Generar con IA</h2>
          <p className="mt-1 text-xs text-muted">
            Preguntas nuevas creadas por el tutor IA (Groq).
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <select
              value={aiTopic}
              onChange={(e) => setAiTopic(e.target.value)}
              className="rounded-md border border-border-bright bg-raised px-3 py-2 text-sm outline-none focus:border-term-cyan"
            >
              <option value="">Todo el temario</option>
              {TOPICS.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.number}. {t.title}
                </option>
              ))}
            </select>
            <button
              className="btn btn-primary"
              onClick={startAI}
              disabled={aiLoading}
            >
              {aiLoading ? "generando…" : "Generar"}
            </button>
          </div>
          {aiError && (
            <p className="mt-2 text-xs text-term-red">{aiError}</p>
          )}
        </div>
      </section>

      {/* Por tema */}
      <section className="fade-up">
        <h2 className="mb-3 text-sm font-bold text-muted">
          <span className="prompt-comment">quiz por tema</span>
        </h2>
        <div className="space-y-4">
          {MODULES.map((m) => {
            const topics = TOPICS.filter((t) => t.module === m.id);
            return (
              <div key={m.id}>
                <div className="mb-2 flex items-center gap-2 text-xs text-dim">
                  <span className="glow-cyan">{m.icon}</span>
                  {m.title}
                </div>
                <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {topics.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => startTopic(t.id)}
                      className="term-card term-card-hover flex items-center justify-between p-3 text-left text-sm"
                    >
                      <span className="min-w-0 truncate">
                        <span className="text-dim">{t.number}.</span> {t.title}
                      </span>
                      <span className="chip shrink-0">{t.questions.length}</span>
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default function QuizPage() {
  return (
    <Suspense fallback={<div className="text-muted">cargando…</div>}>
      <QuizContent />
    </Suspense>
  );
}
