import Image from "next/image";

const credentials = [
  {
    icon: "🎓",
    title: "Degree in Languages",
    desc: "Bachelor's in Portuguese & English Linguistics",
  },
  {
    icon: "🏫",
    title: "Certified Teacher",
    desc: "International language teaching certification",
  },
  {
    icon: "🌐",
    title: "Online Since 2016",
    desc: "Pioneer in online Brazilian Portuguese teaching",
  },
  {
    icon: "💬",
    title: "Polyglot",
    desc: "Speaks English, Spanish & a bit of French",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-20 md:py-28 overflow-hidden"
      style={{ backgroundColor: "var(--color-cream)" }}
    >
      <div className="max-w-5xl mx-auto px-5">
        {/* Section label */}
        <div className="text-center mb-14">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
            style={{
              backgroundColor: "var(--color-cream-dark)",
              color: "var(--color-gold-dark)",
            }}
          >
            About the Teacher
          </span>
          <h2
            className="font-[var(--font-display)] text-4xl md:text-5xl font-bold"
            style={{ color: "var(--color-forest)" }}
          >
            Meet{" "}
            <span className="text-gradient">Ana Silva</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Photo */}
          <div className="relative flex justify-center">
            {/* Decorative blob */}
            <div
              className="absolute inset-0 rounded-[40%_60%_60%_40%/50%_40%_60%_50%] rotate-6 scale-95 opacity-20"
              style={{ backgroundColor: "var(--color-gold-light)" }}
              aria-hidden="true"
            />
            <div
              className="relative w-72 h-96 md:w-80 md:h-[420px] rounded-[40%_60%_60%_40%/50%_40%_60%_50%] overflow-hidden shadow-[var(--shadow-warm-lg)]"
              style={{ backgroundColor: "var(--color-parchment)" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?w=640&q=80"
                alt="Ana Silva — Professional Brazilian Portuguese teacher"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 288px, 320px"
              />
            </div>
            {/* Quote bubble */}
            <div
              className="absolute -bottom-2 -right-2 md:-right-8 max-w-[200px] p-4 rounded-2xl shadow-[var(--shadow-warm)]"
              style={{ backgroundColor: "var(--color-forest)" }}
            >
              <p className="text-white/90 text-sm leading-relaxed italic font-[var(--font-display)]">
                "My goal is for you to feel at home in Portuguese."
              </p>
              <p className="text-white/60 text-xs mt-1">— Ana Silva</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p
              className="text-lg leading-relaxed mb-6"
              style={{ color: "var(--color-ink-soft)" }}
            >
              Olá! I&apos;m Ana, a native Brazilian teacher from São Paulo,
              passionate about helping people from all around the world fall in
              love with Portuguese. I believe language learning should be{" "}
              <strong style={{ color: "var(--color-forest)" }}>
                fun, practical, and deeply personal.
              </strong>
            </p>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "var(--color-muted)" }}
            >
              With over 8 years of experience teaching online, I&apos;ve
              developed a unique immersive method that helps students go from
              complete beginners to confidently having real conversations, much
              faster than traditional approaches.
            </p>

            {/* Credentials grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {credentials.map((c, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-2xl border transition-all duration-300 hover:border-[var(--color-gold)] hover:shadow-[var(--shadow-warm)]"
                  style={{
                    backgroundColor: "var(--color-cream-dark)",
                    borderColor: "var(--color-parchment)",
                  }}
                >
                  <span className="text-2xl shrink-0">{c.icon}</span>
                  <div>
                    <p
                      className="font-semibold text-sm mb-0.5"
                      style={{ color: "var(--color-forest)" }}
                    >
                      {c.title}
                    </p>
                    <p
                      className="text-xs leading-snug"
                      style={{ color: "var(--color-muted)" }}
                    >
                      {c.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
