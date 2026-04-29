import Link from "next/link";

export default function NotFound() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-5 text-center"
      style={{ backgroundColor: "var(--color-cream)" }}
    >
      <span className="text-7xl mb-6">🇧🇷</span>
      <h1
        className="font-[var(--font-display)] text-5xl font-bold mb-4"
        style={{ color: "var(--color-forest)" }}
      >
        Ops! Página não encontrada
      </h1>
      <p className="text-lg mb-8" style={{ color: "var(--color-muted)" }}>
        This page got lost in the Amazon. Let&apos;s head back home!
      </p>
      <Link
        href="/"
        className="px-7 py-3.5 rounded-full font-bold text-white transition-all hover:-translate-y-0.5"
        style={{ backgroundColor: "var(--color-forest)" }}
      >
        ← Back to Home
      </Link>
    </main>
  );
}
