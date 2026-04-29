const testimonials = [
  {
    name: "Emily Carter",
    flag: "🇺🇸",
    country: "United States",
    level: "Beginner → Intermediate",
    months: 4,
    rating: 5,
    photo: "EC",
    text: "I started knowing absolutely zero Portuguese. Four months later, I had my first real conversation with my Brazilian coworkers without Google Translate. Ana's patience and energy make learning feel like chatting with a friend, not studying.",
  },
  {
    name: "Marcus Weber",
    flag: "🇩🇪",
    country: "Germany",
    level: "Intermediate → Advanced",
    months: 6,
    rating: 5,
    photo: "MW",
    text: "I had studied Portuguese elsewhere but always sounded robotic. Ana taught me how Brazilians actually talk: the contractions, the slang, the rhythm. Now people in Brazil think I've lived there. Incredible!",
  },
  {
    name: "Yuki Tanaka",
    flag: "🇯🇵",
    country: "Japan",
    level: "Zero → Conversational",
    months: 5,
    rating: 5,
    photo: "YT",
    text: "Learning Portuguese from Japan seemed impossible. Ana adapted everything to my schedule and even incorporated Brazilian music I loved. I passed my CELPE-Bras exam on the first try. 100% worth it!",
  },
  {
    name: "Sophie Martin",
    flag: "🇫🇷",
    country: "France",
    level: "Beginner → Fluent",
    months: 8,
    rating: 5,
    photo: "SM",
    text: "Ana is one of those rare teachers who makes you forget you're studying. Her classes are so engaging that I look forward to every single session. My Portuguese went from 'boa tarde' to planning my solo trip to Brazil.",
  },
  {
    name: "James O'Brien",
    flag: "🇬🇧",
    country: "United Kingdom",
    level: "Intermediate → Business Level",
    months: 7,
    rating: 5,
    photo: "JO",
    text: "I needed business-level Portuguese for my work in Brazil. Ana understood exactly what I needed and structured every lesson around real business scenarios. My Brazilian clients noticed the difference immediately.",
  },
  {
    name: "Aiko Patel",
    flag: "🇮🇳",
    country: "India",
    level: "Beginner → Intermediate",
    months: 3,
    rating: 5,
    photo: "AP",
    text: "In just 3 months I can comfortably chat with my partner's family in Brazil. They were shocked at how natural my Portuguese sounds. Ana's personalized approach is unlike anything I've tried before.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "" : "opacity-30"}`}
          fill="var(--color-gold)"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function Avatar({ initials, color }: { initials: string; color: string }) {
  return (
    <div
      className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
      style={{ backgroundColor: color }}
      aria-hidden="true"
    >
      {initials}
    </div>
  );
}

const avatarColors = [
  "#1a3c2e",
  "#2d6a4f",
  "#c0392b",
  "#e8a020",
  "#1a3c2e",
  "#2d6a4f",
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 md:py-28 overflow-hidden"
      style={{ backgroundColor: "var(--color-cream-dark)" }}
    >
      <div className="max-w-5xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
            style={{
              backgroundColor: "var(--color-parchment)",
              color: "var(--color-gold-dark)",
            }}
          >
            Student Stories
          </span>
          <h2
            className="font-[var(--font-display)] text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "var(--color-forest)" }}
          >
            What Students{" "}
            <span className="text-gradient">Are Saying</span>
          </h2>
          <p
            className="text-lg max-w-xl mx-auto leading-relaxed"
            style={{ color: "var(--color-muted)" }}
          >
            Real stories from real students across the globe. No scripts, no
            actors. Just honest experiences.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <article
              key={i}
              className="card-hover p-6 rounded-3xl flex flex-col gap-4 border"
              style={{
                backgroundColor: "var(--color-cream)",
                borderColor: "var(--color-parchment)",
              }}
            >
              {/* Rating */}
              <StarRating rating={t.rating} />

              {/* Quote */}
              <p
                className="text-sm leading-relaxed flex-1"
                style={{ color: "var(--color-ink-soft)" }}
              >
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Footer */}
              <div className="flex items-center gap-3 pt-2 border-t border-[var(--color-parchment)]">
                <Avatar initials={t.photo} color={avatarColors[i]} />
                <div className="flex-1 min-w-0">
                  <p
                    className="font-semibold text-sm truncate"
                    style={{ color: "var(--color-forest)" }}
                  >
                    {t.flag} {t.name}
                  </p>
                  <p
                    className="text-xs truncate"
                    style={{ color: "var(--color-muted)" }}
                  >
                    {t.country} · {t.level}
                  </p>
                </div>
                <span
                  className="shrink-0 text-xs px-2.5 py-1 rounded-full font-semibold"
                  style={{
                    backgroundColor: "var(--color-cream-dark)",
                    color: "var(--color-forest)",
                  }}
                >
                  {t.months}mo
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 md:gap-10">
          {[
            { label: "Google Rating", value: "5.0 ⭐" },
            { label: "Trustpilot", value: "Excellent 🏆" },
            { label: "Total Reviews", value: "180+ 💬" },
          ].map((badge, i) => (
            <div key={i} className="text-center">
              <p
                className="font-[var(--font-display)] text-2xl font-bold"
                style={{ color: "var(--color-forest)" }}
              >
                {badge.value}
              </p>
              <p className="text-xs mt-0.5" style={{ color: "var(--color-muted)" }}>
                {badge.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
