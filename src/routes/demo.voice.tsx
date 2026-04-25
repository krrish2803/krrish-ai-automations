import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Phone, PlayCircle, PauseCircle, Sparkles, Mic } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/demo/voice")({
  head: () => ({
    meta: [
      { title: "AI Voice Agent Demo — NovaVoice AI" },
      { name: "description", content: "Hear our AI voice agent in action. Sample appointment booking, FAQ handling, and after-hours calls." },
      { property: "og:title", content: "AI Voice Agent Demo — NovaVoice AI" },
      { property: "og:description", content: "Live AI voice receptionist demo for dentists, salons, and clinics." },
    ],
  }),
  component: VoiceDemoPage,
});

const samples = [
  { title: "Appointment Booking", desc: "Patient calls a dental clinic at 9 PM to book a cleaning", duration: "0:42", scenario: "AI: 'Hi, thanks for calling Smile Dental. I can help you book an appointment — what day works best?'" },
  { title: "FAQ Handling", desc: "Caller asks about pricing and opening hours", duration: "0:31", scenario: "AI: 'We're open Monday to Friday, 9am to 6pm. Cleanings start at $99. Anything else?'" },
  { title: "After-hours Booking", desc: "Salon receives a booking request at midnight", duration: "0:55", scenario: "AI: 'No problem — I can book your colour appointment. What's your name and preferred stylist?'" },
  { title: "Emergency Routing", desc: "Patient describes urgent dental pain", duration: "0:38", scenario: "AI: 'That sounds urgent. I'm transferring you to our on-call dentist now — please hold.'" },
];

function VoiceDemoPage() {
  const [playing, setPlaying] = useState<number | null>(null);

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" /> Back home
        </Link>

        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-4">
            <Sparkles className="h-3.5 w-3.5 text-[var(--brand)]" />
            <span className="text-xs font-medium">Live Voice Demo</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold">
            Hear Our <span className="gradient-text">AI Voice Agent</span>
          </h1>
          <p className="mt-3 text-muted-foreground">
            Real recordings. Real conversations. Most callers don't realise it's AI.
          </p>
        </div>

        <a href="tel:+14695272509" className="block rounded-3xl gradient-brand p-8 text-center mb-8 shadow-glow hover:scale-[1.02] transition-transform">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-wider text-white/80 font-semibold mb-2">
            <Phone className="h-4 w-4" /> Click to call live demo
          </div>
          <div className="text-3xl md:text-4xl font-bold text-white">+1 469 527 2509</div>
          <div className="text-sm text-white/80 mt-2">US toll-free · Talk to the AI right now</div>
        </a>

        <div className="space-y-4 mb-10">
          <h2 className="text-xl font-bold">Sample call recordings</h2>
          {samples.map((s, i) => (
            <div key={s.title} className="glass-strong rounded-2xl p-5">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setPlaying(playing === i ? null : i)}
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full gradient-brand text-white hover:scale-105 transition-transform shadow-glow"
                  aria-label={`Play ${s.title}`}
                >
                  {playing === i ? <PauseCircle className="h-7 w-7" /> : <PlayCircle className="h-7 w-7" />}
                </button>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold">{s.title}</div>
                  <div className="text-sm text-muted-foreground">{s.desc}</div>
                </div>
                <div className="text-xs text-muted-foreground font-mono shrink-0">{s.duration}</div>
              </div>
              {playing === i && (
                <div className="mt-4 pt-4 border-t border-border animate-fade-up">
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-brand shrink-0">
                      <Mic className="h-4 w-4 text-white" />
                    </div>
                    <div className="text-sm text-foreground/90 italic">{s.scenario}</div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="hero" size="xl">
            <Link to="/" hash="contact">Want this for YOUR business? Book a Free Call →</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
