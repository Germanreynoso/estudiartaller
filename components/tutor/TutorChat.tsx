"use client";

import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { topicById } from "@/lib/curriculum/data";
import Markdown from "@/components/Markdown";

interface Msg {
  role: "user" | "assistant";
  content: string;
}

const SUGGESTIONS = [
  "Explicame la diferencia entre While-Do y Repeat-Until",
  "Dame un ejemplo de contador y uno de acumulador",
  "Cual es la prioridad de los operadores aritmeticos?",
  "Que diferencia hay entre dato e informacion?",
];

export default function TutorChat() {
  const params = useSearchParams();
  const topicId = params.get("topic") ?? undefined;
  const topic = topicId ? topicById(topicId) : null;

  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  async function send(text: string) {
    const content = text.trim();
    if (!content || loading) return;
    const history: Msg[] = [...messages, { role: "user", content }];
    setMessages([...history, { role: "assistant", content: "" }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history, topicId }),
      });

      if (!res.ok || !res.body) {
        const err = await res.json().catch(() => ({}));
        setMessages((m) => {
          const copy = [...m];
          copy[copy.length - 1] = {
            role: "assistant",
            content: `⚠️ ${err.error ?? "No se pudo conectar con la IA."}`,
          };
          return copy;
        });
        return;
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let acc = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        acc += decoder.decode(value, { stream: true });
        setMessages((m) => {
          const copy = [...m];
          copy[copy.length - 1] = { role: "assistant", content: acc };
          return copy;
        });
      }
    } catch {
      setMessages((m) => {
        const copy = [...m];
        copy[copy.length - 1] = {
          role: "assistant",
          content: "⚠️ Error de conexion.",
        };
        return copy;
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="mx-auto flex max-w-3xl flex-col"
      style={{ height: "calc(100dvh - 150px)", minHeight: "440px" }}
    >
      <header className="mb-3 fade-up">
        <h1 className="text-2xl font-extrabold">
          <span className="prompt">tutor --chat</span>
        </h1>
        <p className="mt-1 text-sm text-muted">
          Profe virtual de la materia (powered by Groq).
          {topic && (
            <>
              {" "}
              Contexto:{" "}
              <span className="chip" style={{ color: "var(--color-term-cyan)" }}>
                {topic.title}
              </span>
            </>
          )}
        </p>
      </header>

      <div
        ref={scrollRef}
        className="term-card min-h-0 flex-1 space-y-4 overflow-y-auto p-4 sm:p-5"
      >
        {messages.length === 0 ? (
          <div className="flex h-full flex-col items-center justify-center text-center">
            <div className="text-3xl" style={{ color: "var(--color-term-blue)" }}>
              ✦
            </div>
            <p className="mt-2 max-w-sm text-sm text-muted">
              Preguntame lo que quieras del temario. Te respondo con ejemplos y
              pseudocodigo.
            </p>
            <div className="mt-4 flex flex-col gap-2">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="term-card term-card-hover px-3 py-2 text-left text-sm"
                >
                  <span className="text-term-green">▸</span> {s}
                </button>
              ))}
            </div>
          </div>
        ) : (
          messages.map((m, i) => (
            <div
              key={i}
              className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] rounded-lg border px-4 py-2.5 text-sm ${
                  m.role === "user"
                    ? "border-term-cyan/40 bg-term-cyan/10"
                    : "border-border bg-raised"
                }`}
              >
                {m.role === "assistant" ? (
                  m.content ? (
                    <Markdown>{m.content}</Markdown>
                  ) : (
                    <span className="text-dim">
                      pensando<span className="cursor" />
                    </span>
                  )
                ) : (
                  <span className="whitespace-pre-wrap">{m.content}</span>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      <form
        className="mt-3 flex gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          send(input);
        }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="escribi tu pregunta…"
          className="flex-1 rounded-lg border border-border-bright bg-raised px-4 py-3 text-sm outline-none focus:border-term-cyan"
        />
        <button className="btn btn-primary" disabled={loading || !input.trim()}>
          {loading ? "…" : "Enviar"}
        </button>
      </form>
    </div>
  );
}
