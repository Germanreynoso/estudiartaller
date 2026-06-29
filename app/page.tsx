"use client";

import Link from "next/link";
import { modulesBySubject } from "@/lib/curriculum/modules";
import { topicsByModule, topicsBySubject } from "@/lib/curriculum/data";
import { useProgress, levelFromXp } from "@/lib/store/progress";
import { useSubject } from "@/lib/store/subject";
import { subjectById } from "@/lib/curriculum/subjects";
import { reviewCount } from "@/lib/adaptive";

const ACTIONS = [
  {
    href: "/temario",
    icon: "▣",
    title: "Temario",
    desc: "Teoria completa de cada tema",
    color: "var(--color-term-cyan)",
  },
  {
    href: "/quiz",
    icon: "?",
    title: "Quiz",
    desc: "Autoevaluacion + IA",
    color: "var(--color-term-green)",
  },
  {
    href: "/juegos",
    icon: "◆",
    title: "Juegos",
    desc: "Modos para fijar conceptos",
    color: "var(--color-term-amber)",
  },
  {
    href: "/flashcards",
    icon: "▤",
    title: "Flashcards",
    desc: "Repaso espaciado",
    color: "var(--color-term-magenta)",
  },
  {
    href: "/tutor",
    icon: "✦",
    title: "Tutor IA",
    desc: "Chat para tus dudas",
    color: "var(--color-term-blue)",
  },
];

export default function HomePage() {
  const progress = useProgress();
  const subject = useSubject();
  const { level, into, need } = levelFromXp(progress.xp);
  const subjectTopics = topicsBySubject(subject);
  const subjectTitle = subjectById(subject)?.title ?? "la materia";
  const readCount = subjectTopics.filter((t) =>
    progress.topicsRead.includes(t.id)
  ).length;
  const totalPct = subjectTopics.length
    ? Math.round((readCount / subjectTopics.length) * 100)
    : 0;
  const nextTopic = subjectTopics.find(
    (t) => !progress.topicsRead.includes(t.id)
  );
  const pending = reviewCount(progress, subject);

  return (
    <div className="space-y-7">
      {/* Hero */}
      <section className="term-window fade-up">
        <div className="term-titlebar">
          <span className="term-dot" style={{ background: "#fb6f7d" }} />
          <span className="term-dot" style={{ background: "#f6b545" }} />
          <span className="term-dot" style={{ background: "#46e08a" }} />
          <span className="ml-2 text-xs text-dim">study-terminal — bash</span>
        </div>
        <div className="p-5 sm:p-7">
          <p className="text-sm text-muted">
            <span className="prompt">whoami</span>
          </p>
          <h1 className="mt-1 text-2xl font-extrabold sm:text-3xl">
            Estudiante de <span className="glow-green">{subjectTitle}</span>
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-muted">
            Plataforma interactiva para preparar el{" "}
            <strong className="text-ink">parcial</strong>: teoria, quizzes,
            juegos, flashcards y un tutor con IA. Cambia de materia desde el
            selector de la barra superior.
            <span className="cursor" />
          </p>

          {/* stats */}
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <Stat label="nivel" value={`${level}`} accent />
            <Stat label="XP" value={`${progress.xp}`} />
            <Stat label="racha" value={`${progress.streak} 🔥`} />
            <Stat
              label="temas leidos"
              value={`${readCount}/${subjectTopics.length}`}
            />
          </div>

          {/* level bar */}
          <div className="mt-4">
            <div className="mb-1 flex justify-between text-xs text-dim">
              <span>progreso al nivel {level + 1}</span>
              <span>
                {into}/{need} XP
              </span>
            </div>
            <div className="bar">
              <span style={{ width: `${Math.round((into / need) * 100)}%` }} />
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {nextTopic ? (
              <Link href={`/temario/${nextTopic.id}`} className="btn btn-primary">
                ▶ Continuar: {nextTopic.title}
              </Link>
            ) : (
              <Link href="/quiz" className="btn btn-primary">
                ✓ Temario completo — ir al Quiz
              </Link>
            )}
            <Link href="/quiz" className="btn">
              Quiz rapido
            </Link>
            <Link href="/tutor" className="btn">
              Preguntarle al tutor
            </Link>
          </div>
        </div>
      </section>

      {/* Repaso recomendado */}
      {pending > 0 && (
        <Link
          href="/quiz?modo=adaptivo"
          className="term-card term-card-hover flex items-center justify-between gap-3 p-4 fade-up"
          style={{ borderColor: "rgba(246,181,69,0.4)" }}
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl" aria-hidden>
              ◎
            </span>
            <div>
              <div className="font-bold">
                Repaso recomendado{" "}
                <span className="text-term-amber">({pending})</span>
              </div>
              <div className="text-xs text-muted">
                Tenes preguntas para reforzar segun tus errores. Practica
                adaptativa →
              </div>
            </div>
          </div>
          <span className="btn btn-primary shrink-0">▶ Reforzar</span>
        </Link>
      )}

      {/* Modulos */}
      <section className="fade-up" style={{ animationDelay: "0.05s" }}>
        <h2 className="mb-3 text-sm font-bold text-muted">
          <span className="prompt-comment">progreso por modulo</span>
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {modulesBySubject(subject).map((m) => {
            const topics = topicsByModule(m.id);
            const read = topics.filter((t) =>
              progress.topicsRead.includes(t.id)
            ).length;
            const pct = topics.length
              ? Math.round((read / topics.length) * 100)
              : 0;
            return (
              <Link
                key={m.id}
                href={`/temario#${m.id}`}
                className="term-card term-card-hover block p-4"
              >
                <div className="flex items-start justify-between">
                  <span className="text-xl glow-cyan" aria-hidden>
                    {m.icon}
                  </span>
                  <span className="chip">
                    {read}/{topics.length}
                  </span>
                </div>
                <h3 className="mt-2 font-bold">{m.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted">
                  {m.description}
                </p>
                <div className="bar mt-3">
                  <span style={{ width: `${pct}%` }} />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Acciones */}
      <section className="fade-up" style={{ animationDelay: "0.1s" }}>
        <h2 className="mb-3 text-sm font-bold text-muted">
          <span className="prompt-comment">modos de estudio</span>
        </h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {ACTIONS.map((a) => (
            <Link
              key={a.href}
              href={a.href}
              className="term-card term-card-hover flex flex-col items-center p-4 text-center"
            >
              <span
                className="text-2xl"
                style={{ color: a.color, textShadow: `0 0 18px ${a.color}55` }}
                aria-hidden
              >
                {a.icon}
              </span>
              <span className="mt-2 text-sm font-bold">{a.title}</span>
              <span className="mt-0.5 text-[11px] leading-tight text-muted">
                {a.desc}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Total */}
      <section
        className="term-card fade-up p-4"
        style={{ animationDelay: "0.15s" }}
      >
        <div className="mb-1 flex items-center justify-between text-xs text-dim">
          <span className="prompt-comment">avance total del temario</span>
          <span>{totalPct}%</span>
        </div>
        <div className="bar">
          <span style={{ width: `${totalPct}%` }} />
        </div>
      </section>
    </div>
  );
}

function Stat({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div className="term-card px-3 py-2.5">
      <div className="text-[11px] uppercase tracking-wide text-dim">{label}</div>
      <div
        className={`text-lg font-extrabold ${accent ? "glow-green" : "text-ink"}`}
      >
        {value}
      </div>
    </div>
  );
}
