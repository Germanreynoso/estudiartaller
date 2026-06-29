import "./globals.css";
import type { Metadata, Viewport } from "next";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Study Terminal",
  description:
    "Web interactiva para estudiar: temario, quizzes, juegos, flashcards y tutor con IA. Materias: Taller de Programacion I y Matematicas.",
};

export const viewport: Viewport = {
  themeColor: "#080b11",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Nav />
        <main className="mx-auto w-full max-w-6xl px-4 pb-28 pt-6 sm:pt-8">
          {children}
        </main>
        <footer className="border-t border-border px-4 pb-24 pt-6 text-center text-xs text-dim sm:pb-6">
          <span className="prompt-comment">
            Study Terminal — TS en Desarrollo de Software · hecho para estudiar
            (Taller de Programacion I y Matematicas)
          </span>
        </footer>
      </body>
    </html>
  );
}
