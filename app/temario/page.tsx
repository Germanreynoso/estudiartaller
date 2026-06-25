"use client";

import Link from "next/link";
import { MODULES } from "@/lib/curriculum/modules";
import { topicsByModule, TOPICS } from "@/lib/curriculum/data";
import { useProgress } from "@/lib/store/progress";

export default function TemarioPage() {
  const progress = useProgress();
  const read = new Set(progress.topicsRead);

  return (
    <div className="space-y-7">
      <header className="fade-up">
        <h1 className="text-2xl font-extrabold">
          <span className="prompt">cat temario.md</span>
        </h1>
        <p className="mt-1 text-sm text-muted">
          {TOPICS.length} temas en {MODULES.length} modulos ·{" "}
          {read.size}/{TOPICS.length} leidos
        </p>
      </header>

      {MODULES.map((m, mi) => {
        const topics = topicsByModule(m.id);
        return (
          <section
            key={m.id}
            id={m.id}
            className="fade-up scroll-mt-20"
            style={{ animationDelay: `${mi * 0.04}s` }}
          >
            <div className="mb-3 flex items-center gap-2">
              <span className="text-lg glow-cyan" aria-hidden>
                {m.icon}
              </span>
              <h2 className="font-bold">{m.title}</h2>
              <span className="chip">{topics.length}</span>
            </div>
            <div className="grid gap-2.5 sm:grid-cols-2">
              {topics.map((t) => {
                const isRead = read.has(t.id);
                return (
                  <Link
                    key={t.id}
                    href={`/temario/${t.id}`}
                    className="term-card term-card-hover flex items-start gap-3 p-3.5"
                  >
                    <span
                      className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border text-xs font-bold ${
                        isRead
                          ? "border-term-green/60 text-term-green"
                          : "border-border-bright text-dim"
                      }`}
                    >
                      {isRead ? "✓" : t.number}
                    </span>
                    <span className="min-w-0">
                      <span className="block font-bold leading-tight">
                        {t.title}
                      </span>
                      <span className="mt-0.5 block text-xs leading-snug text-muted">
                        {t.short}
                      </span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}
