import { Calendar, MessageCircle, Mail, Phone, Linkedin, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="relative rounded-[2rem] overflow-hidden glass-strong p-8 md:p-16 shadow-elevated">
          <div className="absolute inset-0 -z-10">
            <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-[var(--brand)]/30 blur-3xl animate-blob" />
            <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-[var(--brand-2)]/30 blur-3xl animate-blob" style={{ animationDelay: "5s" }} />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-sm font-medium gradient-text uppercase tracking-wider mb-3">
                Let's talk
              </div>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Ready to <span className="gradient-text">automate</span> your business?
              </h2>
              <p className="mt-5 text-lg text-muted-foreground">
                Book a free 15-min demo call. I'll show you exactly how an AI agent
                fits into your business — and what kind of ROI to expect.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button asChild variant="hero" size="xl">
                  <a href="https://calendly.com" target="_blank" rel="noreferrer">
                    <Calendar className="h-5 w-5" />
                    Book Free Demo Call
                  </a>
                </Button>
                <Button asChild variant="glass" size="xl">
                  <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer">
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp
                  </a>
                </Button>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm">
                <a href="mailto:hello@krrish.ai" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                  <Mail className="h-4 w-4 text-[var(--brand)]" /> hello@krrish.ai
                </a>
                <a href="tel:+919999999999" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                  <Phone className="h-4 w-4 text-[var(--brand)]" /> +91 99999 99999
                </a>
              </div>

              <div className="mt-6 flex items-center gap-3">
                {[
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                  { icon: Twitter, href: "#", label: "Twitter" },
                  { icon: Instagram, href: "#", label: "Instagram" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl glass hover:border-[var(--brand)]/60 hover:text-[var(--brand)] transition-colors"
                  >
                    <s.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Calendly placeholder card */}
            <div className="glass rounded-2xl p-6 md:p-8 border border-border">
              <div className="flex items-center gap-3 mb-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl gradient-brand">
                  <Calendar className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Free Strategy Call</div>
                  <div className="text-xs text-muted-foreground">15 min · Zoom · No pitch</div>
                </div>
              </div>

              <div className="space-y-3 text-sm text-foreground/80 mb-6">
                {[
                  "Diagnose your customer-flow bottlenecks",
                  "Pick the right AI agent for your business",
                  "Get a custom ROI projection",
                  "Decide if we're a fit (no pressure)",
                ].map((p) => (
                  <div key={p} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full gradient-brand shrink-0" />
                    {p}
                  </div>
                ))}
              </div>

              <Button asChild variant="hero" className="w-full" size="lg">
                <a href="https://calendly.com" target="_blank" rel="noreferrer">
                  Pick a Time →
                </a>
              </Button>
              <p className="text-xs text-muted-foreground text-center mt-3">
                Slots open this week · Limited availability
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
