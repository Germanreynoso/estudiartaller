import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-md py-16 text-center">
      <div className="term-card p-8">
        <div className="text-5xl font-extrabold glow-green">404</div>
        <p className="mt-3 text-sm text-muted">
          <span className="prompt-comment">
            command not found: esa pagina no existe
          </span>
        </p>
        <Link href="/" className="btn btn-primary mt-6">
          ← Volver al inicio
        </Link>
      </div>
    </div>
  );
}
