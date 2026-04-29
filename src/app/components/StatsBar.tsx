const stats = [
  { value: "200+", label: "Students Worldwide", icon: "🎓" },
  { value: "30+", label: "Countries Represented", icon: "🌍" },
  { value: "8+", label: "Years of Experience", icon: "⭐" },
  { value: "98%", label: "Satisfaction Rate", icon: "❤️" },
];

export default function StatsBar() {
  return (
    <section
      className="py-10 md:py-14"
      style={{ backgroundColor: "var(--color-cream-dark)" }}
    >
      <div className="max-w-5xl mx-auto px-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <span className="text-3xl mb-2">{stat.icon}</span>
              <span
                className="font-[var(--font-display)] text-3xl md:text-4xl font-bold mb-1"
                style={{ color: "var(--color-forest)" }}
              >
                {stat.value}
              </span>
              <span
                className="text-sm font-medium"
                style={{ color: "var(--color-muted)" }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
