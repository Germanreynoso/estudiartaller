import "./globals.css";
import type { Metadata, Viewport } from "next";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Taller Prog I · Study Terminal",
  description:
    "Web interactiva para estudiar el 1er parcial teorico de Taller de Programacion I: temario, quizzes, juegos, flashcards y tutor con IA.",
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
            Taller de Programacion I — TS en Desarrollo de Software · hecho para
            estudiar el 1er parcial teorico
          </span>
        </footer>
      </body>
    </html>
  );
}
