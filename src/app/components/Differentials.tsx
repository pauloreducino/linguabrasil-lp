const differentials = [
  {
    icon: "🌴",
    title: "Authentically Brazilian",
    description:
      "Learn the Portuguese people actually speak in Brazil: the slang, the rhythm, the culture. Not just textbook language.",
  },
  {
    icon: "📱",
    title: "100% Online & Flexible",
    description:
      "Classes via Google Meet or Zoom, on your schedule. Morning, afternoon, or evening. Whatever fits your life.",
  },
  {
    icon: "✍️",
    title: "Personalized Materials",
    description:
      "No generic textbooks. Every class uses materials crafted specifically around your interests, career, and learning goals.",
  },
  {
    icon: "⚡",
    title: "Fast-Track Progress",
    description:
      "Most students hold their first real conversation within 3 months. Our method is built for results, not passive study.",
  },
  {
    icon: "💚",
    title: "Safe Learning Space",
    description:
      "Mistakes are part of the journey. All levels welcome, from beginners to advanced. Zero judgment, 100% support.",
  },
  {
    icon: "🎵",
    title: "Culture-First Approach",
    description:
      "Brazilian music, films, news, and humor make every lesson engaging. Language is culture. You'll learn both.",
  },
];

export default function Differentials() {
  return (
    <section
      className="py-20 md:py-28"
      style={{ backgroundColor: "var(--color-cream)" }}
    >
      <div className="max-w-5xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
            style={{
              backgroundColor: "var(--color-cream-dark)",
              color: "var(--color-gold-dark)",
            }}
          >
            Why Choose Us
          </span>
          <h2
            className="font-[var(--font-display)] text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "var(--color-forest)" }}
          >
            What Makes Us{" "}
            <span className="text-gradient">Different</span>
          </h2>
          <p
            className="text-lg max-w-xl mx-auto leading-relaxed"
            style={{ color: "var(--color-muted)" }}
          >
            There are many ways to learn Portuguese. Here&apos;s why students
            from 30+ countries choose Língua Brasil.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
          {differentials.map((d, i) => (
            <div
              key={i}
              className="card-hover p-6 rounded-3xl border"
              style={{
                backgroundColor: "var(--color-cream-dark)",
                borderColor: "var(--color-parchment)",
              }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4"
                style={{ backgroundColor: "var(--color-cream)" }}
              >
                {d.icon}
              </div>
              <h3
                className="font-[var(--font-display)] text-xl font-semibold mb-2"
                style={{ color: "var(--color-forest)" }}
              >
                {d.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--color-muted)" }}
              >
                {d.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom banner */}
        <div
          className="mt-12 p-6 md:p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6"
          style={{
            background:
              "linear-gradient(135deg, var(--color-forest) 0%, var(--color-forest-light) 100%)",
          }}
        >
          <div>
            <p className="text-white font-[var(--font-display)] text-2xl font-semibold mb-1">
              Not sure yet? Try before you commit.
            </p>
            <p className="text-white/70 text-base">
              Your first class is completely free. No credit card, no pressure.
            </p>
          </div>
          <a
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5511999999999"}?text=${encodeURIComponent("Olá! Quero agendar minha aula experimental gratuita. 🇧🇷")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-7 py-3.5 rounded-full font-bold text-sm transition-all duration-300 hover:shadow-[var(--shadow-gold)] hover:-translate-y-0.5"
            style={{
              backgroundColor: "var(--color-gold)",
              color: "var(--color-forest-dark)",
            }}
          >
            Book My Free Class →
          </a>
        </div>
      </div>
    </section>
  );
}
