"use client";

import { useSyncExternalStore, useCallback } from "react";

// ============================================================
//  Estado de progreso del estudiante (persistido en localStorage)
// ============================================================

export interface QuizStat {
  attempts: number;
  correct: number;
  total: number;
  best: number; // mejor % logrado
}

export interface ProgressState {
  version: number;
  topicsRead: string[];
  quizStats: Record<string, QuizStat>; // clave: topicId | "mixto"
  flashboxes: Record<string, number>; // cardId -> caja Leitner (1..5)
  gamesPlayed: Record<string, number>; // gameId -> veces jugado
  gameBest: Record<string, number>; // gameId -> mejor puntaje
  xp: number;
  streak: number;
  lastStudyDate: string | null; // yyyy-mm-dd local
}

const STORAGE_KEY = "tp1-study-progress";
const VERSION = 1;

const DEFAULT: ProgressState = {
  version: VERSION,
  topicsRead: [],
  quizStats: {},
  flashboxes: {},
  gamesPlayed: {},
  gameBest: {},
  xp: 0,
  streak: 0,
  lastStudyDate: null,
};

let state: ProgressState = DEFAULT;
let hydrated = false;
const listeners = new Set<() => void>();

function todayStr(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(
    d.getDate()
  ).padStart(2, "0")}`;
}

function daysBetween(a: string, b: string): number {
  const da = new Date(a + "T00:00:00");
  const db = new Date(b + "T00:00:00");
  return Math.round((db.getTime() - da.getTime()) / 86400000);
}

function load(): ProgressState {
  if (typeof window === "undefined") return DEFAULT;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...DEFAULT };
    const parsed = JSON.parse(raw) as Partial<ProgressState>;
    return { ...DEFAULT, ...parsed, version: VERSION };
  } catch {
    return { ...DEFAULT };
  }
}

function persist() {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    /* almacenamiento lleno o no disponible: se ignora */
  }
}

function emit() {
  for (const l of listeners) l();
}

function ensureHydrated() {
  if (!hydrated && typeof window !== "undefined") {
    state = load();
    hydrated = true;
  }
}

function set(mutator: (s: ProgressState) => ProgressState) {
  ensureHydrated();
  state = mutator(state);
  persist();
  emit();
}

/** Marca actividad de estudio del dia y actualiza la racha. */
function touchStreak(s: ProgressState): ProgressState {
  const today = todayStr();
  if (s.lastStudyDate === today) return s;
  let streak = 1;
  if (s.lastStudyDate) {
    const diff = daysBetween(s.lastStudyDate, today);
    if (diff === 1) streak = s.streak + 1;
    else if (diff <= 0) streak = s.streak; // mismo dia / reloj raro
    else streak = 1; // se corto la racha
  }
  return { ...s, streak, lastStudyDate: today };
}

// ---------- API publica de mutacion ----------

export const progressActions = {
  markRead(topicId: string) {
    set((s) => {
      const already = s.topicsRead.includes(topicId);
      const next = touchStreak({
        ...s,
        topicsRead: already ? s.topicsRead : [...s.topicsRead, topicId],
        xp: already ? s.xp : s.xp + 10,
      });
      return next;
    });
  },

  recordQuiz(key: string, correct: number, total: number) {
    set((s) => {
      const prev = s.quizStats[key] ?? {
        attempts: 0,
        correct: 0,
        total: 0,
        best: 0,
      };
      const pct = total > 0 ? Math.round((correct / total) * 100) : 0;
      const stat: QuizStat = {
        attempts: prev.attempts + 1,
        correct: prev.correct + correct,
        total: prev.total + total,
        best: Math.max(prev.best, pct),
      };
      return touchStreak({
        ...s,
        quizStats: { ...s.quizStats, [key]: stat },
        xp: s.xp + correct * 5,
      });
    });
  },

  setFlashbox(cardId: string, box: number) {
    set((s) =>
      touchStreak({
        ...s,
        flashboxes: { ...s.flashboxes, [cardId]: Math.max(1, Math.min(5, box)) },
        xp: s.xp + 2,
      })
    );
  },

  recordGame(gameId: string, score: number) {
    set((s) =>
      touchStreak({
        ...s,
        gamesPlayed: {
          ...s.gamesPlayed,
          [gameId]: (s.gamesPlayed[gameId] ?? 0) + 1,
        },
        gameBest: {
          ...s.gameBest,
          [gameId]: Math.max(s.gameBest[gameId] ?? 0, score),
        },
        xp: s.xp + Math.max(0, Math.round(score / 10)),
      })
    );
  },

  reset() {
    set(() => ({ ...DEFAULT }));
  },
};

// ---------- suscripcion para React ----------

function subscribe(cb: () => void) {
  ensureHydrated();
  listeners.add(cb);
  // sincroniza entre pestañas
  const onStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) {
      state = load();
      cb();
    }
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(cb);
    window.removeEventListener("storage", onStorage);
  };
}

function getSnapshot(): ProgressState {
  ensureHydrated();
  return state;
}

function getServerSnapshot(): ProgressState {
  return DEFAULT;
}

export function useProgress() {
  const snap = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return snap;
}

/** Nivel calculado a partir del XP (cada nivel ~100 xp, escalado suave). */
export function levelFromXp(xp: number): { level: number; into: number; need: number } {
  let level = 1;
  let need = 100;
  let remaining = xp;
  while (remaining >= need) {
    remaining -= need;
    level += 1;
    need = Math.round(need * 1.25);
  }
  return { level, into: remaining, need };
}

export { useCallback };
