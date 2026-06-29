"use client";

import { useState } from "react";
import { useProgress } from "@/lib/store/progress";
import { useSubject } from "@/lib/store/subject";
import {
  allMatchPairs,
  allTerms,
  allOrderChallenges,
} from "@/lib/curriculum/data";
import type { SubjectId } from "@/lib/curriculum/types";
import MemoryGame from "@/components/games/MemoryGame";
import MatchGame from "@/components/games/MatchGame";
import OrderGame from "@/components/games/OrderGame";
import HangmanGame from "@/components/games/HangmanGame";
import SymbolsGame from "@/components/games/SymbolsGame";

type GameId = "memoria" | "emparejar" | "ordenar" | "ahorcado" | "simbolos";

const GAMES: {
  id: GameId;
  title: string;
  icon: string;
  desc: string;
  color: string;
  /** Si esta presente, el juego solo aparece en esas materias. */
  subjects?: SubjectId[];
}[] = [
  {
    id: "memoria",
    title: "Memoria",
    icon: "🃏",
    desc: "Encontra los pares concepto / definicion dados vuelta.",
    color: "var(--color-term-green)",
  },
  {
    id: "emparejar",
    title: "Emparejar",
    icon: "🔗",
    desc: "Conecta cada concepto con su definicion correcta.",
    color: "var(--color-term-cyan)",
  },
  {
    id: "ordenar",
    title: "Ordenar pasos",
    icon: "🪜",
    desc: "Acomoda los pasos en el orden correcto.",
    color: "var(--color-term-amber)",
  },
  {
    id: "ahorcado",
    title: "Ahorcado",
    icon: "🎯",
    desc: "Adivina el termino clave letra por letra.",
    color: "var(--color-term-magenta)",
  },
  {
    id: "simbolos",
    title: "Simbolos DF",
    icon: "◇",
    desc: "Identifica los simbolos del diagrama de flujo.",
    color: "var(--color-term-blue)",
    subjects: ["taller"],
  },
];

export default function JuegosPage() {
  const [active, setActive] = useState<GameId | null>(null);
  const progress = useProgress();
  const subject = useSubject();
  const exit = () => setActive(null);

  if (active === "memoria")
    return <MemoryGame key={subject} subject={subject} onExit={exit} />;
  if (active === "emparejar")
    return <MatchGame key={subject} subject={subject} onExit={exit} />;
  if (active === "ordenar")
    return <OrderGame key={subject} subject={subject} onExit={exit} />;
  if (active === "ahorcado")
    return <HangmanGame key={subject} subject={subject} onExit={exit} />;
  if (active === "simbolos")
    return <SymbolsGame key={subject} subject={subject} onExit={exit} />;

  // Solo se muestran los juegos disponibles para la materia y con datos.
  const hasPairs = allMatchPairs(subject).length >= 2;
  const hasTerms = allTerms(subject).length > 0;
  const hasOrder = allOrderChallenges(subject).length > 0;
  const available = GAMES.filter((g) => {
    if (g.subjects && !g.subjects.includes(subject)) return false;
    if ((g.id === "memoria" || g.id === "emparejar") && !hasPairs) return false;
    if (g.id === "ordenar" && !hasOrder) return false;
    if (g.id === "ahorcado" && !hasTerms) return false;
    return true;
  });

  return (
    <div className="space-y-7">
      <header className="fade-up">
        <h1 className="text-2xl font-extrabold">
          <span className="prompt">play games</span>
        </h1>
        <p className="mt-1 text-sm text-muted">
          Fija conceptos jugando. Cada partida suma XP.
        </p>
      </header>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {available.map((g, i) => (
          <button
            key={g.id}
            onClick={() => setActive(g.id)}
            className="term-card term-card-hover flex flex-col items-start p-5 text-left fade-up"
            style={{ animationDelay: `${i * 0.04}s` }}
          >
            <div className="flex w-full items-center justify-between">
              <span className="text-3xl" aria-hidden>
                {g.icon}
              </span>
              {(progress.gameBest[`${subject}:${g.id}`] ?? 0) > 0 && (
                <span className="chip">
                  ★ {progress.gameBest[`${subject}:${g.id}`]}
                </span>
              )}
            </div>
            <h2 className="mt-2 font-bold" style={{ color: g.color }}>
              {g.title}
            </h2>
            <p className="mt-1 text-xs leading-relaxed text-muted">{g.desc}</p>
            {(progress.gamesPlayed[`${subject}:${g.id}`] ?? 0) > 0 && (
              <span className="mt-2 text-[11px] text-dim">
                jugado {progress.gamesPlayed[`${subject}:${g.id}`]}x
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
