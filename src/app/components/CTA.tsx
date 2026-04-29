const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5511999999999";
const WA_MESSAGE = encodeURIComponent(
  "Olá Ana! Gostaria de agendar minha aula experimental gratuita de português. 🇧🇷"
);
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

const faqs = [
  {
    q: "How long are the classes?",
    a: "Standard classes are 50 minutes. You can also opt for 25-minute express sessions for focused practice.",
  },
  {
    q: "What platform do we use?",
    a: "Google Meet or Zoom — whatever works best for you. All you need is an internet connection.",
  },
  {
    q: "How quickly will I see results?",
    a: "Most students have their first real conversation within 3 months. Results depend on your commitment, but our method is built to accelerate progress.",
  },
  {
    q: "I'm a complete beginner — is that okay?",
    a: "Absolutely! We love beginners. The method is designed to work from zero, and we move at exactly the pace that's comfortable for you.",
  },
];

export default function CTA() {
  return (
    <>
      {/* Main CTA Section */}
      <section
        id="cta"
        className="py-20 md:py-28 relative overflow-hidden"
        style={{ backgroundColor: "var(--color-cream)" }}
      >
        {/* Decorative background */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <svg
            className="absolute top-0 left-0 w-full"
            viewBox="0 0 1440 80"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0,40 C360,0 1080,80 1440,40 L1440,0 L0,0 Z"
              fill="var(--color-cream-dark)"
            />
          </svg>
        </div>

        <div className="relative max-w-4xl mx-auto px-5">
          {/* Card */}
          <div
            className="relative rounded-[2.5rem] overflow-hidden p-8 md:p-14 text-center shadow-[var(--shadow-warm-lg)]"
            style={{
              backgroundImage:
                "linear-gradient(145deg, rgba(0,40,15,0.88) 0%, rgba(0,60,25,0.80) 100%), url('https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?auto=format&fit=crop&w=1400&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Decorative circles inside card */}
            <div
              className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-20"
              style={{
                background:
                  "radial-gradient(circle, var(--color-gold) 0%, transparent 70%)",
              }}
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full opacity-15"
              style={{
                background:
                  "radial-gradient(circle, var(--color-gold-light) 0%, transparent 70%)",
              }}
              aria-hidden="true"
            />

            {/* Brazilian flag colors accent bar */}
            <div
              className="absolute top-0 left-0 right-0 h-1.5 flex"
              aria-hidden="true"
            >
              <div className="flex-1" style={{ backgroundColor: "#009c3b" }} />
              <div className="flex-1" style={{ backgroundColor: "#ffdf00" }} />
              <div className="flex-1" style={{ backgroundColor: "#002776" }} />
            </div>

            {/* Content */}
            <div className="relative">
              <h2 className="font-[var(--font-display)] text-4xl md:text-5xl font-bold text-white mb-4">
                Your First Class is{" "}
                <span className="text-gradient">Free</span>
              </h2>
              <p className="text-white/75 text-lg md:text-xl max-w-xl mx-auto mb-8 leading-relaxed">
                No commitment. No credit card. Just a friendly 50-minute
                conversation to see if we&apos;re the right fit — and to get
                you speaking Portuguese from day one.
              </p>

              {/* What to expect */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10 text-sm">
                {[
                  "✅ Free 50-min trial class",
                  "✅ Level assessment",
                  "✅ Custom learning plan",
                ].map((item, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full font-medium"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.12)",
                      color: "rgba(255,255,255,0.9)",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* CTA Button */}
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp inline-flex items-center gap-3 px-8 py-5 rounded-2xl text-base font-bold transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(232,160,32,0.5)] active:translate-y-0"
                style={{
                  backgroundColor: "var(--color-gold)",
                  color: "var(--color-forest-dark)",
                }}
              >
                <svg
                  className="w-6 h-6 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.532 5.862L.057 23.886a.5.5 0 00.611.61l6.101-1.524A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818c-1.902 0-3.682-.515-5.204-1.411l-.37-.217-3.862.964.984-3.775-.24-.388A9.799 9.799 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z" />
                </svg>
                Schedule on WhatsApp — It&apos;s Free!
              </a>

              <p className="mt-4 text-white/50 text-sm">
                Usually responds within 1 hour 💬
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        className="pb-20 md:pb-28"
        style={{ backgroundColor: "var(--color-cream)" }}
      >
        <div className="max-w-3xl mx-auto px-5">
          <h2
            className="font-[var(--font-display)] text-3xl md:text-4xl font-bold text-center mb-10"
            style={{ color: "var(--color-forest)" }}
          >
            Common Questions
          </h2>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border"
                style={{
                  backgroundColor: "var(--color-cream-dark)",
                  borderColor: "var(--color-parchment)",
                }}
              >
                <h3
                  className="font-semibold text-base mb-2"
                  style={{ color: "var(--color-forest)" }}
                >
                  {faq.q}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-muted)" }}
                >
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
