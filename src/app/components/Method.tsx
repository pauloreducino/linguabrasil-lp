const steps = [
  {
    number: "01",
    icon: "🎯",
    title: "Personalized Diagnosis",
    description:
      "We start with a free conversation to understand your current level, learning style, goals, and interests. No generic textbook path — your journey is designed for you.",
    highlight: "100% tailored to you",
  },
  {
    number: "02",
    icon: "🗣️",
    title: "Immersive Conversation",
    description:
      "From day one, we speak Portuguese. Real dialogues, authentic cultural content, Brazilian music, podcasts, and videos — because fluency comes from living the language.",
    highlight: "Real language from day 1",
  },
  {
    number: "03",
    icon: "🧠",
    title: "Contextual Grammar",
    description:
      "Grammar is taught in context — the way you actually encounter it in real conversation. No boring drills. Rules make sense because you see how they work in practice.",
    highlight: "Natural, not mechanical",
  },
  {
    number: "04",
    icon: "🔁",
    title: "Constant Feedback Loop",
    description:
      "After each class, you receive personalized notes, vocabulary lists, and micro-exercises. Progress is tracked and the plan evolves as you grow.",
    highlight: "Progress you can measure",
  },
];

export default function Method() {
  return (
    <section
      id="method"
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ backgroundColor: "var(--color-forest)" }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute -top-40 -left-40 w-96 h-96 rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, var(--color-gold) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, var(--color-forest-light) 0%, transparent 70%)",
          }}
        />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-cream) 1px, transparent 1px), linear-gradient(90deg, var(--color-cream) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
            style={{
              backgroundColor: "rgba(232, 160, 32, 0.2)",
              color: "var(--color-gold-light)",
            }}
          >
            Teaching Method
          </span>
          <h2
            className="font-[var(--font-display)] text-4xl md:text-5xl font-bold text-white mb-4"
          >
            The{" "}
            <span className="text-gradient">Língua Brasil</span>
            {" "}Method
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto leading-relaxed">
            A proven 4-step system that has helped 200+ students reach
            conversation fluency faster than any classroom could.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="group relative p-6 md:p-8 rounded-3xl border border-white/10 backdrop-blur-sm transition-all duration-300 hover:border-[var(--color-gold)]/40 hover:-translate-y-1"
              style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
            >
              {/* Number */}
              <span
                className="absolute top-5 right-6 font-[var(--font-display)] text-6xl font-bold opacity-10 select-none"
                style={{ color: "var(--color-gold)" }}
                aria-hidden="true"
              >
                {step.number}
              </span>

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-5"
                style={{ backgroundColor: "rgba(232, 160, 32, 0.15)" }}
              >
                {step.icon}
              </div>

              {/* Content */}
              <h3
                className="font-[var(--font-display)] text-2xl font-semibold text-white mb-3"
              >
                {step.title}
              </h3>
              <p className="text-white/65 text-base leading-relaxed mb-4">
                {step.description}
              </p>

              {/* Highlight pill */}
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
                style={{
                  backgroundColor: "rgba(232, 160, 32, 0.2)",
                  color: "var(--color-gold-light)",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current" aria-hidden="true" />
                {step.highlight}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
