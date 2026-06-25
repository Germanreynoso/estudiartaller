import type { Module } from "./types";

// Modulos de estudio. Agrupan los temas de la guia del 1er parcial.
export const MODULES: Module[] = [
  {
    id: "fundamentos",
    title: "Fundamentos",
    icon: "▣",
    description:
      "Algoritmo, pseudocodigo, programa, software y diagramas de flujo.",
  },
  {
    id: "paradigmas",
    title: "Paradigmas & Proceso",
    icon: "◆",
    description:
      "Que es programar, paradigmas de programacion y resolucion de problemas.",
  },
  {
    id: "datos",
    title: "Datos & Variables",
    icon: "❮❯",
    description:
      "Dato, informacion, variables, constantes, contadores, tipos y operadores.",
  },
  {
    id: "lenguajes",
    title: "Lenguajes",
    icon: "‹∕›",
    description: "Lenguajes de programacion, sus funciones y sus niveles.",
  },
  {
    id: "estructuras",
    title: "Estructuras de Control",
    icon: "⟳",
    description:
      "Secuencial, decision e iterativas (While-Do / Repeat-Until) y bucles.",
  },
];

export function moduleById(id: string): Module | undefined {
  return MODULES.find((m) => m.id === id);
}
