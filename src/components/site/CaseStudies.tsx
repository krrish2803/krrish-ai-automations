import { TrendingUp, MapPin } from "lucide-react";

const cases = [
  {
    flag: "🇺🇸",
    type: "E-commerce",
    name: "Fashion brand · NYC",
    metric: "+28%",
    metricLabel: "conversion rate",
    points: ["35% reduction in support tickets", "ROI in 32 days"],
  },
  {
    flag: "🇬🇧",
    type: "Dental Clinic",
    name: "Dental practice · London",
    metric: "80%",
    metricLabel: "fewer missed calls",
    points: ["45 new bookings in first month", "ROI in 21 days"],
  },
  {
    flag: "🇦🇺",
    type: "Salon & Spa",
    name: "Luxury salon · Sydney",
    metric: "60%",
    metricLabel: "appointments auto-booked",
    points: ["After-hours calls handled 24/7", "ROI in 28 days"],
  },
];

export function CaseStudies() {
  return (
    <section id="results" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="text-sm font-medium gradient-text uppercase tracking-wider mb-3">
            Projected Results
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Real businesses. <span className="gradient-text">Real impact.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Based on benchmarks from comparable AI deployments. Your mileage may exceed.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <div
              key={c.name}
              className="glass rounded-3xl p-8 hover:-translate-y-2 hover:border-[var(--brand)]/50 transition-all"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl">{c.flag}</span>
                <span className="px-3 py-1 rounded-full glass text-xs font-semibold">
                  {c.type}
                </span>
              </div>

              <div className="font-display text-5xl md:text-6xl font-bold gradient-text leading-none">
                {c.metric}
              </div>
              <div className="mt-2 text-sm text-muted-foreground uppercase tracking-wider">
                {c.metricLabel}
              </div>

              <div className="my-6 h-px bg-border" />

              <div className="flex items-center gap-2 text-sm font-semibold mb-4">
                <MapPin className="h-4 w-4 text-[var(--brand)]" />
                {c.name}
              </div>

              <ul className="space-y-2">
                {c.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-foreground/80">
                    <TrendingUp className="h-4 w-4 text-[var(--brand-2)] mt-0.5 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
