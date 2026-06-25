import Groq from "groq-sdk";

// Cliente Groq. SOLO se ejecuta del lado del servidor (Route Handlers).
// La API key vive en process.env y nunca llega al bundle del cliente.

export const GROQ_MODEL = process.env.GROQ_MODEL || "llama-3.3-70b-versatile";

let cached: Groq | null = null;

export function getGroq(): Groq {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    throw new Error(
      "GROQ_API_KEY no esta configurada. Agregala en .env.local (local) o en las variables de entorno de Netlify."
    );
  }
  if (!cached) cached = new Groq({ apiKey });
  return cached;
}

export function hasGroqKey(): boolean {
  return Boolean(process.env.GROQ_API_KEY);
}
