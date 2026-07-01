"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useProgress, levelFromXp } from "@/lib/store/progress";
import { useSubject, subjectActions } from "@/lib/store/subject";
import { SUBJECTS } from "@/lib/curriculum/subjects";
import type { SubjectId } from "@/lib/curriculum/types";

const LINKS = [
  { href: "/", label: "inicio", icon: "~" },
  { href: "/temario", label: "temario", icon: "▣" },
  { href: "/quiz", label: "quiz", icon: "?" },
  { href: "/juegos", label: "juegos", icon: "◆" },
  { href: "/flashcards", label: "cards", icon: "▤" },
  { href: "/tutor", label: "tutor", icon: "✦" },
];

// Apartado de practica de logica, solo para Matematicas.
const PRACTICA_LINK = { href: "/practica", label: "logica", icon: "⊢" };

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export default function Nav() {
  const pathname = usePathname();
  const progress = useProgress();
  const { level } = levelFromXp(progress.xp);
  const subject = useSubject();
  const host =
    subject === "matematicas"
      ? "mate@study"
      : subject === "informatica"
        ? "info@study"
        : "tp1@study";
  const links =
    subject === "matematicas" ? [...LINKS, PRACTICA_LINK] : LINKS;

  return (
    <>
      {/* Barra superior */}
      <header className="sticky top-0 z-50 border-b border-border bg-bg/85 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center gap-3 px-4 py-2.5">
          <Link href="/" className="flex shrink-0 items-center gap-2">
            <span className="flex gap-1.5">
              <span className="term-dot" style={{ background: "#fb6f7d" }} />
              <span className="term-dot" style={{ background: "#f6b545" }} />
              <span className="term-dot" style={{ background: "#46e08a" }} />
            </span>
            <span className="text-sm font-bold">
              <span className="text-muted">{host}</span>
              <span className="text-dim">:</span>
              <span className="glow-green">~$</span>
            </span>
          </Link>

          {/* Links inline solo en desktop */}
          <nav className="hidden flex-1 items-center gap-0.5 sm:flex">
            {links.map((l) => {
              const active = isActive(pathname, l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`whitespace-nowrap rounded-md px-2.5 py-1.5 text-[13px] font-semibold transition-colors ${
                    active
                      ? "bg-raised text-ink"
                      : "text-muted hover:bg-raised hover:text-ink"
                  }`}
                >
                  <span className={active ? "glow-green" : "text-dim"} aria-hidden>
                    {l.icon}
                  </span>{" "}
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto flex shrink-0 items-center gap-2.5 text-xs sm:ml-0">
            <select
              value={subject}
              onChange={(e) => subjectActions.set(e.target.value as SubjectId)}
              aria-label="Materia"
              title="Cambiar de materia"
              className="rounded-md border border-border-bright bg-raised px-2 py-1 text-xs font-semibold text-ink outline-none focus:border-term-cyan"
            >
              {SUBJECTS.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.icon} {s.short}
                </option>
              ))}
            </select>
            <span className="chip" title="Racha de dias estudiando">
              🔥 {progress.streak}
            </span>
            <span
              className="chip hidden sm:inline-flex"
              title="Nivel / experiencia"
            >
              <span className="glow-cyan">lvl {level}</span>
            </span>
          </div>
        </div>
      </header>

      {/* Barra inferior tipo app, solo en mobile */}
      <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-bg/95 backdrop-blur sm:hidden">
        <div className="mx-auto flex max-w-6xl items-stretch">
          {links.map((l) => {
            const active = isActive(pathname, l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`flex flex-1 flex-col items-center gap-0.5 py-2 text-[10px] font-semibold transition-colors ${
                  active ? "text-ink" : "text-dim"
                }`}
              >
                <span
                  className={`text-base leading-none ${active ? "glow-green" : ""}`}
                  aria-hidden
                >
                  {l.icon}
                </span>
                {l.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
