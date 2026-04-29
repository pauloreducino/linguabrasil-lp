import Image from "next/image";

const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5511999999999";
const WA_MESSAGE = encodeURIComponent(
  "Olá! Gostaria de agendar minha aula experimental de português. 🇧🇷"
);
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden tropical-bg pt-24 pb-16 md:pt-28 md:pb-24"
      style={{ backgroundColor: "var(--color-cream)" }}
    >
      {/* Background decorative elements */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        {/* Large circle — top right */}
        <div
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, var(--color-gold) 0%, transparent 70%)",
          }}
        />
        {/* Small circle — bottom left */}
        <div
          className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full opacity-8"
          style={{
            background:
              "radial-gradient(circle, var(--color-forest-light) 0%, transparent 70%)",
          }}
        />
        {/* Leaf SVG top left */}
        <svg
          className="absolute top-24 left-4 md:left-12 w-24 h-24 opacity-10 animate-float"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 90 C10 90 20 20 80 10 C80 10 40 50 10 90Z"
            fill="var(--color-forest)"
          />
          <path
            d="M10 90 C25 70 45 55 80 10"
            stroke="var(--color-forest-light)"
            strokeWidth="2"
            fill="none"
          />
        </svg>
        {/* Leaf SVG bottom right */}
        <svg
          className="absolute bottom-16 right-8 md:right-20 w-20 h-20 opacity-10 animate-float delay-300"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ animationDelay: "1.5s" }}
        >
          <path
            d="M90 10 C90 10 80 80 20 90 C20 90 60 50 90 10Z"
            fill="var(--color-gold)"
          />
        </svg>
        {/* Stars/sparkles */}
        {["top-40 left-1/4", "top-60 right-1/3", "bottom-32 left-1/3"].map(
          (pos, i) => (
            <div
              key={i}
              className={`absolute ${pos} w-1.5 h-1.5 rounded-full opacity-40`}
              style={{ backgroundColor: "var(--color-gold)" }}
            />
          )
        )}
      </div>

      <div className="relative max-w-5xl mx-auto px-5 w-full">
        <div className="grid md:grid-cols-2 gap-12 md:gap-8 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1">
            {/* Badge */}
            <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6 border"
              style={{
                backgroundColor: "var(--color-cream-dark)",
                borderColor: "var(--color-gold)",
                color: "var(--color-gold-dark)",
              }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "var(--color-gold)" }} />
              🇧🇷 Online Portuguese School
            </div>

            {/* Headline */}
            <h1
              className="animate-fade-up delay-100 font-[var(--font-display)] text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-[1.1]"
              style={{ color: "var(--color-forest)" }}
            >
              Speak{" "}
              <em className="not-italic text-gradient">Portuguese</em>
              <br />
              with Confidence
            </h1>

            {/* Subheadline */}
            <p
              className="animate-fade-up delay-200 text-lg md:text-xl leading-relaxed mb-8 max-w-md"
              style={{ color: "var(--color-ink-soft)" }}
            >
              Learn Brazilian Portuguese naturally, the way locals actually
              speak, with personalized online lessons from a native teacher
              who truly understands your learning journey.
            </p>

            {/* CTA Buttons */}
            <div className="animate-fade-up delay-300 flex flex-col sm:flex-row gap-4">
              {/* Primary CTA */}
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp inline-flex items-center justify-center gap-3 px-7 py-4 rounded-2xl text-base font-bold text-white shadow-[var(--shadow-gold)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(232,160,32,0.4)] active:translate-y-0"
                style={{ backgroundColor: "var(--color-gold)" }}
              >
                <svg
                  className="w-5 h-5 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.532 5.862L.057 23.886a.5.5 0 00.611.61l6.101-1.524A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818c-1.902 0-3.682-.515-5.204-1.411l-.37-.217-3.862.964.984-3.775-.24-.388A9.799 9.799 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z" />
                </svg>
                Book Free Trial Class
              </a>

              {/* Secondary CTA */}
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl text-base font-semibold border-2 transition-all duration-300 hover:bg-[var(--color-forest)] hover:border-forest text-forest hover:text-white"
                style={{ borderColor: "var(--color-forest)" }}
              >
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>

            {/* Social proof mini */}
            <div className="animate-fade-up delay-400 flex items-center gap-4 mt-8">
              <div className="flex -space-x-2">
                {["🇺🇸", "🇬🇧", "🇩🇪", "🇫🇷"].map((flag, i) => (
                  <span
                    key={i}
                    className="w-9 h-9 rounded-full flex items-center justify-center text-lg border-2 border-[var(--color-cream)]"
                    style={{ backgroundColor: "var(--color-cream-dark)" }}
                  >
                    {flag}
                  </span>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5" fill="var(--color-gold)" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xs" style={{ color: "var(--color-muted)" }}>
                  <span className="font-semibold" style={{ color: "var(--color-ink)" }}>200+ students</span>
                  {" "}from 30+ countries
                </p>
              </div>
            </div>
          </div>

          {/* Image / Visual */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              {/* Decorative ring */}
              <div
                className="absolute inset-0 rounded-[2.5rem] -rotate-6 scale-[1.04] opacity-20"
                style={{ backgroundColor: "var(--color-gold)" }}
                aria-hidden="true"
              />
              <div
                className="absolute inset-0 rounded-[2.5rem] rotate-3 scale-[1.02] opacity-15"
                style={{ backgroundColor: "var(--color-forest-light)" }}
                aria-hidden="true"
              />

              {/* Photo container */}
              <div
                className="relative w-72 h-80 md:w-80 md:h-96 rounded-[2.5rem] overflow-hidden shadow-[var(--shadow-warm-lg)]"
                style={{ backgroundColor: "var(--color-parchment)" }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=640&q=80"
                  alt="Portuguese teacher smiling, ready to help you learn"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 288px, 320px"
                />
                {/* Gradient overlay at bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1/3"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(26,60,46,0.7), transparent)",
                  }}
                />
                {/* Name badge on photo */}
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-[var(--font-display)] text-xl font-semibold">
                    Ana Silva
                  </p>
                  <p className="text-white/80 text-sm">Native Brazilian Teacher</p>
                </div>
              </div>

              {/* Floating badge — rating */}
              <div
                className="absolute -top-4 -right-4 px-4 py-2.5 rounded-2xl shadow-[var(--shadow-warm)] animate-float"
                style={{ backgroundColor: "var(--color-cream)" }}
              >
                <p className="text-xs font-semibold" style={{ color: "var(--color-muted)" }}>
                  Student rating
                </p>
                <p className="font-semibold text-sm" style={{ color: "var(--color-forest)" }}>
                  ⭐ 4.9 / 5.0
                </p>
              </div>

              {/* Floating badge — experience */}
              <div
                className="absolute -bottom-4 -right-4 px-4 py-2.5 rounded-2xl shadow-(--shadow-warm) animate-float"
                style={{ backgroundColor: "var(--color-forest)", animationDelay: "2s" }}
              >
                <p className="text-xs font-semibold text-white/70">Experience</p>
                <p className="font-semibold text-sm text-white">8+ years teaching</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-16"
        >
          <path
            d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
            fill="var(--color-cream-dark)"
          />
        </svg>
      </div>
    </section>
  );
}
