"use client";

import { useEffect } from "react";
import Link from "next/link";
import type { Topic } from "@/lib/curriculum/types";
import { topicsBySubject, subjectOfTopic } from "@/lib/curriculum/data";
import { moduleById } from "@/lib/curriculum/modules";
import { useProgress, progressActions } from "@/lib/store/progress";
import { subjectActions } from "@/lib/store/subject";

export default function TopicView({ topic }: { topic: Topic }) {
  const progress = useProgress();
  const isRead = progress.topicsRead.includes(topic.id);
  const mod = moduleById(topic.module);

  // Navegacion prev/next dentro de la misma materia (no cruza a la otra).
  const siblings = topicsBySubject(subjectOfTopic(topic));
  const idx = siblings.findIndex((t) => t.id === topic.id);
  const prev = idx > 0 ? siblings[idx - 1] : null;
  const next = idx < siblings.length - 1 ? siblings[idx + 1] : null;

  // Al abrir un tema por enlace directo, sincroniza la materia activa.
  useEffect(() => {
    subjectActions.set(subjectOfTopic(topic));
  }, [topic]);

  return (
    <article className="mx-auto max-w-3xl space-y-6">
      <nav className="flex items-center gap-2 text-xs text-dim fade-up">
        <Link href="/temario" className="hover:text-ink">
          temario
        </Link>
        <span>/</span>
        {mod && (
          <>
            <Link
              href={`/temario#${mod.id}`}
              className="hover:text-ink"
            >
              {mod.title}
            </Link>
            <span>/</span>
          </>
        )}
        <span className="text-muted">{topic.id}</span>
      </nav>

      <header className="fade-up">
        <div className="flex items-center gap-2">
          <span className="chip">tema {topic.number}</span>
          {mod && <span className="chip">{mod.title}</span>}
          {isRead && (
            <span className="chip" style={{ color: "var(--color-term-green)" }}>
              ✓ leido
            </span>
          )}
        </div>
        <h1 className="mt-2 text-2xl font-extrabold sm:text-3xl">
          {topic.title}
        </h1>
        <p className="mt-1 text-sm text-muted">{topic.short}</p>
      </header>

      {/* Puntos clave */}
      <section className="term-card fade-up p-4">
        <h2 className="mb-2 text-sm font-bold text-muted">
          <span className="prompt-comment">puntos clave</span>
        </h2>
        <ul className="space-y-1.5">
          {topic.keyPoints.map((k, i) => (
            <li key={i} className="flex gap-2 text-sm">
              <span className="text-term-green">▸</span>
              <span>{k}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Teoria */}
      <section className="term-window fade-up">
        <div className="term-titlebar">
          <span className="term-dot" style={{ background: "#fb6f7d" }} />
          <span className="term-dot" style={{ background: "#f6b545" }} />
          <span className="term-dot" style={{ background: "#46e08a" }} />
          <span className="ml-2 text-xs text-dim">{topic.id}.md</span>
        </div>
        <div className="p-5 sm:p-6">
          <MarkdownClient text={topic.theory} />
        </div>
      </section>

      {/* Acciones */}
      <section className="flex flex-wrap gap-3 fade-up">
        <button
          className={`btn ${isRead ? "" : "btn-primary"}`}
          onClick={() => progressActions.markRead(topic.id)}
          disabled={isRead}
        >
          {isRead ? "✓ Marcado como leido" : "Marcar como leido (+10 XP)"}
        </button>
        <Link href={`/quiz?topic=${topic.id}`} className="btn">
          ? Quiz de este tema
        </Link>
        <Link href={`/tutor?topic=${topic.id}`} className="btn">
          ✦ Preguntarle al tutor
        </Link>
      </section>

      {/* Navegacion prev/next */}
      <nav className="flex items-stretch justify-between gap-3 border-t border-border pt-5 fade-up">
        {prev ? (
          <Link
            href={`/temario/${prev.id}`}
            className="term-card term-card-hover min-w-0 flex-1 p-3 text-left"
          >
            <span className="text-xs text-dim">◀ anterior</span>
            <span className="mt-0.5 block truncate text-sm font-bold">
              {prev.title}
            </span>
          </Link>
        ) : (
          <span className="flex-1" />
        )}
        {next ? (
          <Link
            href={`/temario/${next.id}`}
            className="term-card term-card-hover min-w-0 flex-1 p-3 text-right"
          >
            <span className="text-xs text-dim">siguiente ▶</span>
            <span className="mt-0.5 block truncate text-sm font-bold">
              {next.title}
            </span>
          </Link>
        ) : (
          <span className="flex-1" />
        )}
      </nav>
    </article>
  );
}

// Markdown se importa de forma dinamica para mantener este componente liviano.
import Markdown from "@/components/Markdown";
function MarkdownClient({ text }: { text: string }) {
  return <Markdown>{text}</Markdown>;
}
