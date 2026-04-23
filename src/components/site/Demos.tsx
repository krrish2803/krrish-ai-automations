import { useState, useRef, useEffect } from "react";
import { Bot, Phone, Send, Sparkles, PlayCircle, PauseCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

type Msg = { role: "bot" | "user"; text: string };

const cannedResponses: Record<string, string> = {
  "return": "Easy! Our return policy gives you 30 days from delivery. Just reply 'return' with your order number and I'll start the process — no questions asked.",
  "ship": "Yes! We ship internationally to 40+ countries. Standard delivery is 5–7 business days, express is 2–3. Want me to check rates for your country?",
  "order": "Sure — drop your order number (looks like #1234) and I'll pull up tracking instantly.",
  "recommend": "Love that. Tell me: who's it for, budget range, and any colour preference? I'll suggest 3 perfect options.",
  "default": "Great question! In a real deployment, I'd be trained on your full product catalog, FAQs, and brand voice. Want to see this on your site? Book a free call below 👇",
};

const suggestions = [
  "What's your return policy?",
  "Do you ship internationally?",
  "Where's my order?",
  "Recommend me a product",
];

export function Demos() {
  return (
    <section id="demos" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="text-sm font-medium gradient-text uppercase tracking-wider mb-3">
            Live Demos
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Don't take my word — <span className="gradient-text">try it yourself.</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Two interactive demos. Zero signup. See exactly what your customers will experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <ChatbotDemo />
          <VoiceDemo />
        </div>
      </div>
    </section>
  );
}

function ChatbotDemo() {
  const [messages, setMessages] = useState<Msg[]>([
    { role: "bot", text: "Hey! 👋 I'm a demo AI chatbot for an e-commerce store. Ask me anything below." },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const send = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Msg = { role: "user", text };
    setMessages((m) => [...m, userMsg]);
    setInput("");

    setTimeout(() => {
      const lower = text.toLowerCase();
      const key = Object.keys(cannedResponses).find((k) => lower.includes(k)) || "default";
      setMessages((m) => [...m, { role: "bot", text: cannedResponses[key] }]);
    }, 700);
  };

  return (
    <div className="glass-strong rounded-3xl p-6 md:p-8 shadow-elevated">
      <div className="flex items-center gap-3 mb-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl gradient-brand shadow-glow">
          <Bot className="h-6 w-6 text-white" />
        </div>
        <div>
          <div className="font-bold text-lg">AI Chatbot Demo</div>
          <div className="text-xs text-muted-foreground flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Online · Replies in seconds
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="h-80 overflow-y-auto rounded-2xl bg-background/40 border border-border p-4 space-y-3 mb-4"
      >
        {messages.map((m, i) => (
          <div
            key={i}
            className={`flex ${m.role === "user" ? "justify-end" : "justify-start"} animate-fade-up`}
          >
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${
                m.role === "user"
                  ? "gradient-brand text-white rounded-br-sm"
                  : "bg-surface-elevated text-foreground rounded-bl-sm border border-border"
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mb-3">
        {suggestions.map((s) => (
          <button
            key={s}
            onClick={() => send(s)}
            className="text-xs px-3 py-1.5 rounded-full glass hover:border-[var(--brand)]/60 transition-colors"
          >
            {s}
          </button>
        ))}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          send(input);
        }}
        className="flex gap-2"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message…"
          className="flex-1 rounded-xl bg-background/60 border border-border px-4 py-3 text-sm focus:outline-none focus:border-[var(--brand)] transition-colors"
        />
        <Button type="submit" variant="hero" size="icon">
          <Send className="h-4 w-4" />
        </Button>
      </form>

      <p className="text-xs text-muted-foreground mt-4 text-center">
        Want this on YOUR site? <a href="#contact" className="gradient-text font-semibold">Book a free call →</a>
      </p>
    </div>
  );
}

function VoiceDemo() {
  const [playing, setPlaying] = useState<number | null>(null);

  const samples = [
    { title: "Appointment Booking", desc: "Patient calls a dental clinic at 9 PM", duration: "0:42" },
    { title: "FAQ Handling", desc: "Caller asks about pricing and hours", duration: "0:31" },
    { title: "After-hours Coverage", desc: "Salon receives a booking request at midnight", duration: "0:55" },
  ];

  return (
    <div className="glass-strong rounded-3xl p-6 md:p-8 shadow-elevated">
      <div className="flex items-center gap-3 mb-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl gradient-brand shadow-glow animate-pulse-glow">
          <Phone className="h-6 w-6 text-white" />
        </div>
        <div>
          <div className="font-bold text-lg">AI Voice Agent Demo</div>
          <div className="text-xs text-muted-foreground">Hear real call recordings</div>
        </div>
      </div>

      <a
        href="tel:+15551234567"
        className="block rounded-2xl gradient-brand p-5 text-center mb-5 shadow-glow hover:scale-[1.02] transition-transform"
      >
        <div className="text-xs uppercase tracking-wider text-white/80 font-semibold">Click to call live demo</div>
        <div className="text-2xl font-bold text-white mt-1">📞 +1 (555) 123-4567</div>
        <div className="text-xs text-white/80 mt-1">US toll-free · Talk to the AI now</div>
      </a>

      <div className="space-y-3 mb-4">
        {samples.map((s, i) => (
          <div key={s.title} className="glass rounded-2xl p-4 flex items-center gap-3">
            <button
              onClick={() => setPlaying(playing === i ? null : i)}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full gradient-brand text-white hover:scale-105 transition-transform"
              aria-label={`Play ${s.title}`}
            >
              {playing === i ? <PauseCircle className="h-6 w-6" /> : <PlayCircle className="h-6 w-6" />}
            </button>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-sm">{s.title}</div>
              <div className="text-xs text-muted-foreground truncate">{s.desc}</div>
            </div>
            <div className="text-xs text-muted-foreground shrink-0 font-mono">{s.duration}</div>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-dashed border-border p-4 text-center">
        <Sparkles className="h-4 w-4 inline text-[var(--brand)] mr-1" />
        <span className="text-xs text-muted-foreground">
          Want this for YOUR business? <a href="#contact" className="gradient-text font-semibold">Book a free call →</a>
        </span>
      </div>
    </div>
  );
}
