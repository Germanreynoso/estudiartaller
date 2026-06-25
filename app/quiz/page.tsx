"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { TOPICS, topicById, allQuestions } from "@/lib/curriculum/data";
import { MODULES } from "@/lib/curriculum/modules";
import { pickRandom } from "@/lib/utils";
import { useProgress } from "@/lib/store/progress";
import {
  buildAdaptiveDeck,
  weakTopics,
  reviewCount,
  hasPractice,
} from "@/lib/adaptive";
import QuizRunner, { QuizQuestion } from "@/components/quiz/QuizRunner";

interface ActiveQuiz {
  questions: QuizQuestion[];
  recordKey: string;
  title: string;
}

function masteryColor(m: number): string {
  if (m < 40) return "var(--color-term-red)";
  if (m < 70) return "var(--color-term-amber)";
  return "var(--color-term-green)";
}

function QuizContent() {
  const params = useSearchParams();
  const topicParam = params.get("topic");
  const modoParam = params.get("modo");
  const progress = useProgress();

  const [active, setActive] = useState<ActiveQuiz | null>(null);
  const [round, setRound] = useState(0);
  const [aiLoading, setAiLoading] = useState<string | null>(null);
  const [aiError, setAiError] = useState<string | null>(null);
  const [aiTopic, setAiTopic] = useState<string>("");
  const started = useRef(false);

  const weak = weakTopics(progress, 6);
  const pending = reviewCount(progress);
  const practiced = hasPractice(progress);

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

  function startAdaptive() {
    const { questions } = buildAdaptiveDeck(progress, 12);
    if (!questions.length) return;
    start({
      questions,
      recordKey: "adaptativo",
      title: "Practica adaptativa",
    });
  }

  async function startAI(forTopic?: string) {
    const tid = forTopic ?? aiTopic;
    setAiLoading(tid || "all");
    setAiError(null);
    try {
      const res = await fetch("/api/quiz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topicId: tid || undefined, count: 6 }),
      });
      const data = await res.json();
      if (!res.ok) {
        setAiError(data.error ?? "No se pudo generar el quiz.");
        return;
      }
      const t = tid ? topicById(tid) : null;
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
      setAiLoading(null);
    }
  }

  // Arranque automatico desde ?topic= o ?modo=adaptivo
  useEffect(() => {
    if (started.current) return;
    if (topicParam && topicById(topicParam)) {
      started.current = true;
      startTopic(topicParam);
    } else if (modoParam === "adaptivo") {
      started.current = true;
      startAdaptive();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [topicParam, modoParam, progress]);

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
          Tu rendimiento se guarda: la practica adaptativa refuerza lo que mas
          te cuesta.
        </p>
      </header>

      {/* Practica adaptativa */}
      <section
        className="term-window fade-up"
        style={{ borderColor: "rgba(70,224,138,0.35)" }}
      >
        <div className="term-titlebar">
          <span className="term-dot" style={{ background: "#fb6f7d" }} />
          <span className="term-dot" style={{ background: "#f6b545" }} />
          <span className="term-dot" style={{ background: "#46e08a" }} />
          <span className="ml-2 text-xs text-dim">adaptive --reinforce</span>
        </div>
        <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-bold glow-green">
              ◎ Practica adaptativa
            </h2>
            <p className="mt-1 max-w-md text-sm text-muted">
              Arma un quiz priorizando las preguntas que fallaste y los temas
              donde estas mas flojo.
              {practiced ? (
                <>
                  {" "}
                  Tenes{" "}
                  <span className="text-term-amber">{pending}</span> preguntas
                  para reforzar.
                </>
              ) : (
                <> Hace un par de quizzes y se va calibrando solo.</>
              )}
            </p>
          </div>
          <button
            className="btn btn-primary shrink-0"
            onClick={startAdaptive}
          >
            ▶ Reforzar (12)
          </button>
        </div>
      </section>

      {/* Temas flojos */}
      <section className="fade-up">
        <h2 className="mb-3 text-sm font-bold text-muted">
          <span className="prompt-comment">tus temas flojos</span>
        </h2>
        {weak.length === 0 ? (
          <div className="term-card p-4 text-sm text-muted">
            Todavia no hay datos suficientes. Resolve algunos quizzes y aca van a
            aparecer los temas donde conviene reforzar, ordenados por dominio.
          </div>
        ) : (
          <div className="space-y-2.5">
            {weak.map((t) => (
              <div key={t.id} className="term-card p-3.5">
                <div className="flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <div className="truncate text-sm font-bold">
                      <span className="text-dim">{t.number}.</span> {t.title}
                    </div>
                    <div className="mt-0.5 text-[11px] text-dim">
                      dominio {t.mastery}% · {t.seen}/{t.total} vistas
                      {t.wrong > 0 && (
                        <span className="text-term-red"> · {t.wrong} errores</span>
                      )}
                    </div>
                  </div>
                  <div className="flex shrink-0 gap-2">
                    <button
                      className="btn btn-ghost text-xs"
                      onClick={() => startTopic(t.id)}
                    >
                      practicar
                    </button>
                    <button
                      className="btn text-xs"
                      onClick={() => startAI(t.id)}
                      disabled={aiLoading !== null}
                    >
                      {aiLoading === t.id ? "…" : "✦ IA"}
                    </button>
                  </div>
                </div>
                <div className="bar mt-2.5">
                  <span
                    style={{
                      width: `${t.mastery}%`,
                      background: masteryColor(t.mastery),
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
        {aiError && <p className="mt-2 text-xs text-term-red">{aiError}</p>}
      </section>

      {/* Mixto + IA general */}
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
              onClick={() => startAI()}
              disabled={aiLoading !== null}
            >
              {aiLoading === (aiTopic || "all") ? "generando…" : "Generar"}
            </button>
          </div>
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
