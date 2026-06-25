import type { FlowchartSymbol } from "./types";

// Simbolos convencionales del Diagrama de Flujo (guia, pregunta 2).
// El ASCII se usa en el juego "Identificar simbolos".
export const FLOWCHART_SYMBOLS: FlowchartSymbol[] = [
  {
    id: "terminal",
    name: "Terminal",
    description:
      "Representa el inicio (comienzo) y el final (fin) de un programa.",
    ascii: "   .-----.\n  (  INI  )\n   '-----'",
  },
  {
    id: "entrada-salida",
    name: "Entrada / Salida",
    description:
      "Introduccion de datos en memoria desde perifericos (entrada) o registro de informacion procesada (salida).",
    ascii: "   _______\n  /      /\n /______/",
  },
  {
    id: "proceso",
    name: "Proceso",
    description:
      "Operacion que origina un cambio de valor, formato o posicion de la informacion (calculos, asignaciones).",
    ascii: "  +--------+\n  | x<-a+b |\n  +--------+",
  },
  {
    id: "decision",
    name: "Decision",
    description:
      "Operaciones logicas o de comparacion. Tiene dos salidas (SI / NO). Tambien se usa en estructuras iterativas.",
    ascii: "     /\\\n    /  \\\n   < ?  >\n    \\  /\n     \\/",
  },
  {
    id: "linea-flujo",
    name: "Linea de flujo",
    description:
      "La flecha indica la direccion o el sentido de ejecucion de las operaciones.",
    ascii: "    |\n    |\n    v",
  },
  {
    id: "conector",
    name: "Linea conectora",
    description: "Linea simple que une dos simbolos del diagrama.",
    ascii: "  o--------o",
  },
  {
    id: "impresora",
    name: "Impresora",
    description:
      "Representa la impresora; se usa a veces en lugar del simbolo de entrada/salida.",
    ascii: "  +------+\n  | =[]= |\n  +--^^--+",
  },
  {
    id: "pantalla",
    name: "Pantalla",
    description:
      "Simbolo de pantalla, utilizado en ocasiones como entrada y/o salida.",
    ascii: "  .------.\n  |      |\n  '--||--'",
  },
  {
    id: "teclado",
    name: "Teclado",
    description: "Metodo de entrada de datos: el teclado.",
    ascii: "  +========+\n  |::::::::| \n  +========+",
  },
];
