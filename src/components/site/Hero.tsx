import { Button } from "@/components/ui/button";
import { Bot, Phone, Calendar, ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { Link } from "@tanstack/react-router";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-[var(--brand)]/30 blur-3xl animate-blob" />
        <div className="absolute top-20 right-1/4 h-72 w-72 rounded-full bg-[var(--brand-2)]/30 blur-3xl animate-blob" style={{ animationDelay: "4s" }} />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-8 animate-fade-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--brand)] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--brand)]" />
            </span>
            <span className="text-xs font-medium text-foreground/80">
              Available for new projects · US · UK · AU
            </span>
          </div>

          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            I Build <span className="gradient-text">AI Agents</span>
            <br />
            That Work 24/7 For Your Business
          </h1>

          <p
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            AI Chatbots for E-commerce · AI Receptionists for Local Businesses.
            Capture every lead. Book every call. Sleep peacefully.
          </p>

          <div
            className="mt-10 flex flex-col sm:flex-row gap-3 items-center justify-center animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Button asChild variant="hero" size="xl" className="group">
              <Link to="/demo/chatbot">
                <Bot className="h-5 w-5" />
                Try AI Chatbot Demo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="glass" size="xl">
              <Link to="/demo/voice">
                <Phone className="h-5 w-5" />
                Try AI Voice Agent
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl">
              <a href="#contact">
                <Calendar className="h-5 w-5" />
                Book Free Call
              </a>
            </Button>
          </div>

          <div
            className="mt-16 grid grid-cols-3 gap-6 max-w-2xl mx-auto animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            {[
              { v: "24/7", l: "Always On" },
              { v: "5-10", l: "Days to Launch" },
              { v: "30d", l: "Money-Back" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="font-display text-2xl md:text-3xl font-bold gradient-text">
                  {s.v}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex items-center gap-2 text-xs text-muted-foreground">
        <Sparkles className="h-3 w-3" />
        Scroll to explore
      </div>
    </section>
  );
}
