"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5511999999999";
const WA_MESSAGE = encodeURIComponent(
  process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ??
    "Olá! Gostaria de agendar minha aula experimental de português. 🇧🇷"
);
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#method", label: "Method" },
    { href: "#testimonials", label: "Testimonials" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--color-cream)]/95 backdrop-blur-md shadow-[var(--shadow-warm)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-5xl mx-auto px-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-2xl">🇧🇷</span>
          <span
            className="font-[var(--font-display)] text-2xl font-semibold tracking-tight"
            style={{ color: "var(--color-forest)" }}
          >
            Língua{" "}
            <span style={{ color: "var(--color-gold)" }}>Brasil</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors duration-200 hover:text-[var(--color-gold)]"
              style={{ color: "var(--color-ink-soft)" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:shadow-[var(--shadow-gold)] hover:-translate-y-0.5 active:translate-y-0"
            style={{ backgroundColor: "var(--color-forest)" }}
          >
            Free Trial Class ✨
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <div className="flex flex-col gap-1.5 w-6">
            <span
              className={`block h-0.5 rounded-full transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
              style={{ backgroundColor: "var(--color-forest)" }}
            />
            <span
              className={`block h-0.5 rounded-full transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
              style={{ backgroundColor: "var(--color-forest)" }}
            />
            <span
              className={`block h-0.5 rounded-full transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
              style={{ backgroundColor: "var(--color-forest)" }}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ backgroundColor: "var(--color-cream)" }}
      >
        <div className="px-5 py-4 flex flex-col gap-4 border-t border-[var(--color-parchment)]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base font-medium py-1"
              style={{ color: "var(--color-ink-soft)" }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 px-5 py-3 rounded-full text-center text-sm font-semibold text-white"
            style={{ backgroundColor: "var(--color-forest)" }}
            onClick={() => setMenuOpen(false)}
          >
            Free Trial Class ✨
          </a>
        </div>
      </div>
    </header>
  );
}
