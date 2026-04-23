import { Bot, Phone, Gem, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

const services = [
  {
    icon: Bot,
    badge: "E-commerce",
    title: "AI Chatbots for E-commerce",
    points: [
      "Answer customer questions instantly",
      "Reduce cart abandonment by 30–40%",
      "Boost sales by 20–30%",
      "24/7 support, never miss a lead",
    ],
    demo: "/demo/chatbot",
  },
  {
    icon: Phone,
    badge: "Dental & Medical",
    title: "AI Voice Agents for Dentists",
    points: [
      "Never miss a patient call",
      "Auto-book appointments 24/7",
      "Handle FAQs, emergencies, follow-ups",
      "Sounds professional, always",
    ],
    demo: "/demo/voice",
    featured: true,
  },
  {
    icon: Gem,
    badge: "Salons & Clinics",
    title: "AI Receptionist for Salons",
    points: [
      "Book appointments automatically",
      "Handle multiple calls at once",
      "After-hours coverage included",
      "Plug into your existing tools",
    ],
    demo: "/demo/voice",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="text-sm font-medium gradient-text uppercase tracking-wider mb-3">
            Services
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            One specialist. <span className="gradient-text">Two superpowers.</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Pick what fits your business. Or get both and dominate every channel.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`group relative rounded-3xl p-8 transition-all duration-500 ${
                s.featured
                  ? "glass-strong glow-ring lg:-translate-y-4"
                  : "glass hover:-translate-y-2"
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {s.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-semibold rounded-full gradient-brand text-white">
                  Most Popular
                </div>
              )}

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl gradient-brand shadow-glow mb-6">
                <s.icon className="h-7 w-7 text-white" />
              </div>

              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                {s.badge}
              </div>
              <h3 className="text-2xl font-bold mb-5">{s.title}</h3>

              <ul className="space-y-3 mb-8">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-foreground/85">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--brand)]/15">
                      <Check className="h-3 w-3 text-[var(--brand)]" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-2">
                <Button asChild variant="hero" className="w-full">
                  <Link to={s.demo}>
                    Try Live Demo
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="ghost" className="w-full">
                  <a href="#pricing">View Pricing</a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
