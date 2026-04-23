import { Calendar, Hammer, Rocket, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: Calendar,
    n: "01",
    title: "Book a Free Demo Call",
    desc: "15-min call. We map your customer flow and pick the right AI agent for your business.",
  },
  {
    icon: Hammer,
    n: "02",
    title: "I Build Your Custom Agent",
    desc: "5–7 days for chatbot, 7–10 days for voice. Trained on your brand, products, and FAQs.",
  },
  {
    icon: Rocket,
    n: "03",
    title: "Launch & Get Results",
    desc: "Go live in one click. I handle hosting, monitoring, updates — you watch leads roll in.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="text-sm font-medium gradient-text uppercase tracking-wider mb-3">
            How it works
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            From kickoff to launch in <span className="gradient-text">under 10 days.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-16 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-[var(--brand)]/40 to-transparent" />

          {steps.map((s, i) => (
            <div
              key={s.n}
              className="relative glass rounded-3xl p-8 hover:-translate-y-2 transition-all"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl gradient-brand shadow-glow mb-6 relative">
                <s.icon className="h-6 w-6 text-white" />
                <span className="absolute -top-2 -right-2 text-xs font-bold bg-background border border-border rounded-full h-7 w-7 flex items-center justify-center">
                  {s.n}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="hero" size="xl">
            <a href="#contact">
              Book Your Free Demo Call <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
