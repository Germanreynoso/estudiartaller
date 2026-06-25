# Taller Prog I · Study Terminal

Web interactiva para estudiar el **1er parcial teórico de Taller de Programación I**
(Tecnicatura Superior en Desarrollo de Software, 1er año). Construida sobre el temario
de la guía de revisión, con tema oscuro estilo terminal/code.

## ✨ Qué incluye

- **Temario completo** — los 22 temas de la guía, con teoría redactada y verificada, esquemas en ASCII y puntos clave.
- **Quizzes** — opción múltiple, verdadero/falso y completar. Por tema, mixto o **generados con IA**. Puntaje, racha y repaso de errores con explicación por IA.
- **5 juegos** — Memoria, Emparejar concepto/definición, Ordenar pasos, Ahorcado de términos e Identificar símbolos de diagrama de flujo.
- **Flashcards** — repaso espaciado (sistema Leitner) con seguimiento de dominio.
- **Tutor IA** — chat en streaming anclado al temario (Groq).
- **Progreso** — XP, niveles, racha y avance por módulo, guardado en `localStorage`.

## 🧱 Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4**
- **Groq SDK** para la IA (server-side)
- Deploy en **Netlify** (`@netlify/plugin-nextjs`)

## 🔐 IA y seguridad de la API key

Las llamadas a Groq salen **solo del servidor** (Route Handlers en `app/api/*`).
La `GROQ_API_KEY` se lee de `process.env` y **nunca se expone al navegador**.

El archivo `.env.local` está en `.gitignore` y no se commitea.

## 🚀 Desarrollo local

```bash
npm install
# crear .env.local a partir del ejemplo y poner tu key de Groq:
#   GROQ_API_KEY=gsk_...
#   GROQ_MODEL=llama-3.3-70b-versatile   (opcional)
npm run dev
# http://localhost:3000
```

Conseguí una API key gratis en https://console.groq.com/keys

## ☁️ Deploy en Netlify

1. Subí el repo a GitHub.
2. En Netlify: **Add new site → Import an existing project** y elegí el repo.
   - Build command: `npm run build`
   - El plugin de Next.js se aplica solo (ver `netlify.toml`).
3. En **Site settings → Environment variables** agregá:
   - `GROQ_API_KEY` = tu key de Groq
   - `GROQ_MODEL` = `llama-3.3-70b-versatile` (opcional)
4. Deploy. Las rutas `app/api/*` se ejecutan como funciones serverless (la key queda del lado del servidor).

> Sin `GROQ_API_KEY` la app funciona igual (temario, quizzes estáticos, juegos y flashcards); solo se desactivan las funciones de IA (tutor, generar quiz y explicar errores), que avisan con un mensaje.

## 📁 Estructura

```
app/
  api/{chat,quiz,explain}/route.ts   # IA server-side (Groq)
  temario/[id]/                      # teoría por tema
  quiz/ juegos/ flashcards/ tutor/   # secciones
components/
  games/                            # 5 juegos
  quiz/ tutor/                      # motor de quiz y chat
lib/
  curriculum/                       # temario (types, data, topics/*, symbols)
  store/progress.ts                 # progreso en localStorage
```

## 📚 Contenido

El temario fue redactado y verificado a partir de la guía oficial del parcial
(`Guia_Revision_1er_Parcial_Teorico_Taller_Prog_1.pdf`). Cada tema vive en su propio
archivo tipado en `lib/curriculum/topics/`.
