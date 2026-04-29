const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5511999999999";
const WA_MESSAGE = encodeURIComponent(
  "Olá! Gostaria de mais informações sobre as aulas de português."
);
const IG_HANDLE = process.env.NEXT_PUBLIC_INSTAGRAM_HANDLE ?? "linguabrasil";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden"
      style={{ backgroundColor: "var(--color-forest-dark)" }}
    >
      {/* Top wave */}
      <div className="pointer-events-none" aria-hidden="true">
        <svg
          viewBox="0 0 1440 60"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-12"
        >
          <path
            d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z"
            fill="var(--color-cream)"
          />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-5 pt-10 pb-8">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🇧🇷</span>
              <span className="font-[var(--font-display)] text-2xl font-semibold text-white">
                Língua <span style={{ color: "var(--color-gold)" }}>Brasil</span>
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Authentic Brazilian Portuguese lessons for curious people worldwide.
              Let&apos;s make the world speak Portuguese.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              <a
                href={`https://instagram.com/${IG_HANDLE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                aria-label="Follow us on Instagram"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                aria-label="Contact us on WhatsApp"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.532 5.862L.057 23.886a.5.5 0 00.611.61l6.101-1.524A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818c-1.902 0-3.682-.515-5.204-1.411l-.37-.217-3.862.964.984-3.775-.24-.388A9.799 9.799 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5">
              {[
                { href: "#about", label: "About Ana" },
                { href: "#method", label: "Our Method" },
                { href: "#testimonials", label: "Student Stories" },
                { href: "#cta", label: "Book Free Class" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 text-sm transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Contact
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href={`https://wa.me/${WA_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/60 text-sm hover:text-white transition-colors"
              >
                <span>💬</span>
                <span>WhatsApp · Chat with Ana</span>
              </a>
              <a
                href={`https://instagram.com/${IG_HANDLE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/60 text-sm hover:text-white transition-colors"
              >
                <span>📸</span>
                <span>@{IG_HANDLE}</span>
              </a>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <span>🕐</span>
                <span>Responds within 1 hour</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="border-t mb-6"
          style={{ borderColor: "rgba(255,255,255,0.1)" }}
        />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p className="text-white/40">
            © {currentYear} Língua Brasil. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-white/40">
            <span>Made with</span>
            <span>💚</span>
            <span>in Brazil 🇧🇷</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
