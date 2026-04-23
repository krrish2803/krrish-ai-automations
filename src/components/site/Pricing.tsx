import { Check, Shield, RotateCcw, Zap, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

type Plan = {
  name: string;
  setup: string;
  monthly: string;
  features: string[];
  featured?: boolean;
};

const chatbotPlans: Plan[] = [
  {
    name: "Starter",
    setup: "$497",
    monthly: "$297",
    features: [
      "Product Q&A bot",
      "Order status lookup",
      "Basic FAQ handling",
      "Email support",
      "Weekly reports",
    ],
  },
  {
    name: "Professional",
    setup: "$997",
    monthly: "$497",
    featured: true,
    features: [
      "Everything in Starter",
      "Custom brand training",
      "Multi-channel (web + SMS)",
      "Priority support",
      "Monthly strategy call",
    ],
  },
];

const voicePlans: Plan[] = [
  {
    name: "Starter",
    setup: "$497",
    monthly: "$397",
    features: [
      "Inbound call answering",
      "Appointment booking",
      "FAQ & hours info",
      "After-hours coverage",
      "Call transcripts",
    ],
  },
  {
    name: "Professional",
    setup: "$997",
    monthly: "$697",
    featured: true,
    features: [
      "Everything in Starter",
      "Custom voice cloning",
      "CRM/calendar integration",
      "Call recordings",
      "Monthly analytics",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="text-sm font-medium gradient-text uppercase tracking-wider mb-3">
            Pricing
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Simple, transparent. <span className="gradient-text">No surprises.</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Most clients see ROI within 45–60 days. If you don't, you don't pay.
          </p>
        </div>

        {/* Chatbot */}
        <PlanGroup title="🤖 AI Chatbot for E-commerce" plans={chatbotPlans} />

        {/* Voice */}
        <div className="mt-12">
          <PlanGroup title="📞 AI Voice Agent for Local Business" plans={voicePlans} />
        </div>

        {/* Bundle */}
        <div className="mt-12 relative">
          <div className="absolute -inset-1 gradient-brand opacity-30 blur-2xl rounded-3xl" />
          <div className="relative glass-strong rounded-3xl p-8 md:p-10 overflow-hidden">
            <div className="absolute top-6 right-6 inline-flex items-center gap-1.5 px-3 py-1 rounded-full gradient-brand text-white text-xs font-semibold">
              <Star className="h-3 w-3" /> Most Popular
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  💎 Bundle
                </div>
                <h3 className="text-3xl md:text-4xl font-bold">
                  Chatbot + Voice Agent
                </h3>
                <p className="mt-3 text-muted-foreground">
                  Everything you need to automate your entire customer journey.
                  One unified data layer. One person to call.
                </p>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="font-display text-5xl font-bold gradient-text">$797</span>
                  <span className="text-muted-foreground">setup</span>
                </div>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-2xl font-bold">+ $597</span>
                  <span className="text-muted-foreground">/mo</span>
                  <span className="ml-2 px-2 py-0.5 rounded-md bg-emerald-500/15 text-emerald-400 text-xs font-semibold">
                    Save $200/mo
                  </span>
                </div>
                <Button asChild variant="hero" size="lg" className="mt-6">
                  <a href="#contact">Get Started</a>
                </Button>
              </div>
              <ul className="space-y-3">
                {[
                  "Everything in both Professional plans",
                  "Unified customer data across channels",
                  "Priority support + weekly strategy calls",
                  "Custom integrations (Shopify, HubSpot, etc.)",
                  "Dedicated Slack channel",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full gradient-brand">
                      <Check className="h-3.5 w-3.5 text-white" />
                    </span>
                    <span className="text-foreground/90">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Guarantees */}
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          {[
            { icon: Shield, label: "30-Day Money-Back Guarantee" },
            { icon: RotateCcw, label: "No Long-Term Contracts" },
            { icon: Zap, label: "Cancel Anytime" },
          ].map((g) => (
            <div key={g.label} className="glass rounded-full px-5 py-2.5 flex items-center gap-2 text-sm">
              <g.icon className="h-4 w-4 text-[var(--brand)]" />
              {g.label}
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Enterprise custom pricing available · <a href="#contact" className="gradient-text font-semibold">Book a call for a quote →</a>
        </p>
      </div>
    </section>
  );
}

function PlanGroup({ title, plans }: { title: string; plans: Plan[] }) {
  return (
    <div>
      <h3 className="text-xl md:text-2xl font-bold mb-6 text-center">{title}</h3>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`relative rounded-3xl p-8 transition-all ${
              p.featured
                ? "glass-strong glow-ring"
                : "glass hover:-translate-y-1"
            }`}
          >
            {p.featured && (
              <div className="absolute -top-3 left-6 px-3 py-1 rounded-full gradient-brand text-white text-xs font-semibold">
                Recommended
              </div>
            )}
            <div className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              {p.name}
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="font-display text-4xl font-bold">{p.setup}</span>
              <span className="text-muted-foreground text-sm">setup</span>
            </div>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-xl font-semibold gradient-text">+ {p.monthly}</span>
              <span className="text-muted-foreground text-sm">/mo</span>
            </div>
            <div className="my-6 h-px bg-border" />
            <ul className="space-y-3 mb-8">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <Check className="h-4 w-4 text-[var(--brand)] mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <Button asChild variant={p.featured ? "hero" : "outline"} className="w-full">
              <a href="#contact">Get Started</a>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
