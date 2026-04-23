import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Krrish set up our chatbot in a week. It now handles 70% of customer questions automatically and our cart recovery is up massively. Wish we'd done this a year ago.",
    name: "Sarah M.",
    business: "DTC Apparel Founder",
    location: "Brooklyn, NY",
    initials: "SM",
  },
  {
    quote:
      "The voice agent picks up every after-hours call. We booked 30+ extra appointments in our first month. It pays for itself ten times over.",
    name: "Dr. James W.",
    business: "Dental Practice",
    location: "Manchester, UK",
    initials: "JW",
  },
  {
    quote:
      "I was skeptical AI could match our front-desk vibe. The voice cloning is uncanny — clients don't realise. Best ops decision I've made.",
    name: "Aisha P.",
    business: "Salon Owner",
    location: "Sydney, AU",
    initials: "AP",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="text-sm font-medium gradient-text uppercase tracking-wider mb-3">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Trusted by <span className="gradient-text">growing businesses</span> worldwide.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="glass rounded-3xl p-8 relative hover:-translate-y-1 transition-all"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-[var(--brand)]/20" />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-[var(--brand-2)] text-[var(--brand-2)]" />
                ))}
              </div>
              <p className="text-foreground/90 leading-relaxed">"{t.quote}"</p>
              <div className="mt-6 flex items-center gap-3 pt-6 border-t border-border">
                <div className="flex h-11 w-11 items-center justify-center rounded-full gradient-brand text-white font-bold text-sm">
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {t.business} · {t.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
