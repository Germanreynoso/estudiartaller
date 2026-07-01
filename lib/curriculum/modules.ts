import type { Module, SubjectId } from "./types";

// Modulos de estudio. Agrupan los temas por materia.
export const MODULES: Module[] = [
  // ---------- Taller de Programacion I ----------
  {
    id: "fundamentos",
    title: "Fundamentos",
    icon: "▣",
    description:
      "Algoritmo, pseudocodigo, programa, software y diagramas de flujo.",
    subject: "taller",
  },
  {
    id: "paradigmas",
    title: "Paradigmas & Proceso",
    icon: "◆",
    description:
      "Que es programar, paradigmas de programacion y resolucion de problemas.",
    subject: "taller",
  },
  {
    id: "datos",
    title: "Datos & Variables",
    icon: "❮❯",
    description:
      "Dato, informacion, variables, constantes, contadores, tipos y operadores.",
    subject: "taller",
  },
  {
    id: "lenguajes",
    title: "Lenguajes",
    icon: "‹∕›",
    description: "Lenguajes de programacion, sus funciones y sus niveles.",
    subject: "taller",
  },
  {
    id: "estructuras",
    title: "Estructuras de Control",
    icon: "⟳",
    description:
      "Secuencial, decision e iterativas (While-Do / Repeat-Until) y bucles.",
    subject: "taller",
  },

  // ---------- Matematicas ----------
  {
    id: "mat-intro",
    title: "Introduccion",
    icon: "∑",
    description:
      "Que es la matematica para la computacion, su importancia y la logica como base.",
    subject: "matematicas",
  },
  {
    id: "mat-proposicional",
    title: "Logica Proposicional",
    icon: "∧",
    description:
      "Proposiciones, conectivos logicos, tablas de verdad, equivalencias e inferencia.",
    subject: "matematicas",
  },
  {
    id: "mat-predicados",
    title: "Logica de Predicados",
    icon: "∀",
    description:
      "Predicados, cuantificadores universal y existencial, y negacion de cuantificadores.",
    subject: "matematicas",
  },

  // ---------- Informatica ----------
  {
    id: "inf-fundamentos",
    title: "Fundamentos",
    icon: "❖",
    description:
      "Datos e informacion, las TIC y sus elementos, y la alfabetizacion digital.",
    subject: "informatica",
  },
  {
    id: "inf-herramientas",
    title: "Herramientas & Servicios",
    icon: "⚙",
    description:
      "Herramientas ofimaticas, busqueda en internet, la nube y trabajo colaborativo.",
    subject: "informatica",
  },
];

export function moduleById(id: string): Module | undefined {
  return MODULES.find((m) => m.id === id);
}

export function modulesBySubject(subject: SubjectId): Module[] {
  return MODULES.filter((m) => m.subject === subject);
}
