"use client";

import { useState, useEffect } from "react";

const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5511999999999";
const WA_MESSAGE = encodeURIComponent(
  "Olá Ana! Gostaria de agendar minha aula experimental gratuita. 🇧🇷"
);
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(() => setShowTooltip(true), 500);
    const hideTimer = setTimeout(() => setShowTooltip(false), 5000);
    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-6 right-5 z-50 flex items-center gap-3"
      style={{ animation: "fadeUp 0.5s cubic-bezier(0.22,1,0.36,1) both" }}
    >
      {/* Tooltip */}
      <div
        className={`transition-all duration-300 ${
          showTooltip
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-4 pointer-events-none"
        }`}
      >
        <div
          className="px-4 py-2.5 rounded-2xl shadow-[var(--shadow-warm)] text-sm font-medium whitespace-nowrap"
          style={{
            backgroundColor: "var(--color-cream)",
            color: "var(--color-forest)",
          }}
        >
          Book your free class! 🇧🇷
          {/* Arrow */}
          <div
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-2 h-2 rotate-45"
            style={{ backgroundColor: "var(--color-cream)" }}
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Button */}
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp and book a free Portuguese class"
        className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-[0_4px_24px_rgba(37,211,102,0.5)] transition-all duration-300 hover:scale-110 hover:shadow-[0_8px_32px_rgba(37,211,102,0.6)] active:scale-95"
        style={{ backgroundColor: "#25D366" }}
      >
        {/* Pulse ring */}
        <span
          className="absolute inset-0 rounded-full"
          style={{
            backgroundColor: "#25D366",
            animation: "pulse-ring 2.5s ease-out infinite",
          }}
          aria-hidden="true"
        />
        <svg
          className="relative w-7 h-7 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.532 5.862L.057 23.886a.5.5 0 00.611.61l6.101-1.524A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818c-1.902 0-3.682-.515-5.204-1.411l-.37-.217-3.862.964.984-3.775-.24-.388A9.799 9.799 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z" />
        </svg>
      </a>
    </div>
  );
}
