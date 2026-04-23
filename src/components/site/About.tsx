import krrish from "@/assets/krrish.jpg";

const tools = [
  "Bolna", "Retell AI", "Voiceflow", "Zapier", "Twilio",
  "OpenAI", "Shopify", "Calendly", "Make", "n8n",
];

const stats = [
  { v: "20+", l: "AI Agents Deployed" },
  { v: "$150K+", l: "Client Revenue Generated" },
  { v: "3", l: "Countries Served" },
  { v: "98%", l: "Client Satisfaction" },
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="absolute -inset-4 gradient-brand opacity-20 blur-3xl rounded-full" />
            <div className="relative rounded-3xl overflow-hidden glass-strong p-2 max-w-md mx-auto lg:mx-0">
              <img
                src={krrish}
                alt="Krrish — AI Automation Specialist"
                width={768}
                height={768}
                loading="lazy"
                className="rounded-2xl w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-2 lg:right-10 glass-strong rounded-2xl px-4 py-3 shadow-elevated animate-float">
              <div className="text-xs text-muted-foreground">Based in</div>
              <div className="font-semibold">🇮🇳 India · Working Globally</div>
            </div>
          </div>

          <div>
            <div className="text-sm font-medium gradient-text uppercase tracking-wider mb-3">
              About Me
            </div>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Hey, I'm <span className="gradient-text">Krrish</span>.
              <br />I make AI work for businesses.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              I help e-commerce brands and local businesses automate customer
              communication with AI — so you never miss a lead, even while sleeping.
              From a Shopify chatbot that recovers carts to a voice receptionist that
              books patient appointments at 2 AM, I build it end-to-end.
            </p>

            <div className="mt-8">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                Tools I work with
              </div>
              <div className="flex flex-wrap gap-2">
                {tools.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 text-sm rounded-full glass border border-border/60 hover:border-[var(--brand)]/60 transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.l}
                  className="glass rounded-2xl p-5 hover:border-[var(--brand)]/40 transition-all"
                >
                  <div className="font-display text-3xl font-bold gradient-text">
                    {s.v}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
