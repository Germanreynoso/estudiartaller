"use client";

import { useSyncExternalStore } from "react";
import { DEFAULT_SUBJECT, isSubjectId } from "@/lib/curriculum/subjects";
import type { SubjectId } from "@/lib/curriculum/types";

// ============================================================
//  Materia activa (persistida en localStorage). Controla que
//  contenido se muestra en todas las pantallas. Espeja el patron
//  de lib/store/progress.ts (useSyncExternalStore + StorageEvent).
// ============================================================

const STORAGE_KEY = "tp1-study-subject";

let state: SubjectId = DEFAULT_SUBJECT;
let hydrated = false;
const listeners = new Set<() => void>();

function load(): SubjectId {
  if (typeof window === "undefined") return DEFAULT_SUBJECT;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return isSubjectId(raw) ? raw : DEFAULT_SUBJECT;
  } catch {
    return DEFAULT_SUBJECT;
  }
}

function ensureHydrated() {
  if (!hydrated && typeof window !== "undefined") {
    state = load();
    hydrated = true;
  }
}

function emit() {
  for (const l of listeners) l();
}

export const subjectActions = {
  set(id: SubjectId) {
    ensureHydrated();
    if (!isSubjectId(id) || id === state) return;
    state = id;
    try {
      localStorage.setItem(STORAGE_KEY, id);
    } catch {
      /* almacenamiento no disponible: se ignora */
    }
    emit();
  },
};

function subscribe(cb: () => void) {
  ensureHydrated();
  listeners.add(cb);
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

function getSnapshot(): SubjectId {
  ensureHydrated();
  return state;
}

function getServerSnapshot(): SubjectId {
  return DEFAULT_SUBJECT;
}

export function useSubject(): SubjectId {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
