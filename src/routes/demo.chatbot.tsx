import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Bot, Send, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/demo/chatbot")({
  head: () => ({
    meta: [
      { title: "AI Chatbot Demo — NovaVoice AI" },
      { name: "description", content: "Try a live AI chatbot for e-commerce. See how it answers product, shipping, and order questions in real time." },
      { property: "og:title", content: "AI Chatbot Demo — NovaVoice AI" },
      { property: "og:description", content: "Live interactive AI chatbot demo for e-commerce stores." },
    ],
  }),
  component: ChatbotDemoPage,
});

type Msg = { role: "bot" | "user"; text: string };

const cannedResponses: Record<string, string> = {
  "return": "Easy! Our return policy gives you 30 days from delivery. Just reply with your order number and I'll start the process.",
  "ship": "Yes! We ship internationally to 40+ countries. Standard 5–7 business days, express 2–3.",
  "order": "Sure — drop your order number (looks like #1234) and I'll pull up tracking.",
  "recommend": "Love that. Tell me: who's it for, budget range, and colour preference? I'll suggest 3 perfect options.",
  "price": "Our products range from $29 to $249. What category are you exploring?",
  "size": "Happy to help! Tell me your usual size and the product you're eyeing — I'll match the right fit.",
  "default": "Great question! In a real deployment I'd be trained on your full catalog and brand voice. Want this on your site?",
};

const scenarios = [
  "What's your return policy?",
  "Do you ship to Australia?",
  "Where's my order #1234?",
  "Recommend me a product under $100",
  "What size should I get?",
  "Do you have a discount code?",
];

function ChatbotDemoPage() {
  const [messages, setMessages] = useState<Msg[]>([
    { role: "bot", text: "Hey! 👋 I'm a demo AI chatbot for an e-commerce store. Try asking anything below — or click a suggestion." },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const send = (text: string) => {
    if (!text.trim()) return;
    setMessages((m) => [...m, { role: "user", text }]);
    setInput("");
    setTimeout(() => {
      const lower = text.toLowerCase();
      const key = Object.keys(cannedResponses).find((k) => lower.includes(k)) || "default";
      setMessages((m) => [...m, { role: "bot", text: cannedResponses[key] }]);
    }, 600);
  };

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" /> Back home
        </Link>

        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-4">
            <Sparkles className="h-3.5 w-3.5 text-[var(--brand)]" />
            <span className="text-xs font-medium">Live Interactive Demo</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold">
            Try Our <span className="gradient-text">AI Chatbot</span>
          </h1>
          <p className="mt-3 text-muted-foreground">
            See exactly what your customers will experience. No signup required.
          </p>
        </div>

        <div className="glass-strong rounded-3xl p-6 md:p-8 shadow-elevated">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl gradient-brand shadow-glow">
              <Bot className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="font-bold text-lg">Acme Store Assistant</div>
              <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" /> Online
              </div>
            </div>
          </div>

          <div ref={scrollRef} className="h-[420px] overflow-y-auto rounded-2xl bg-background/40 border border-border p-4 space-y-3 mb-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"} animate-fade-up`}>
                <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${
                  m.role === "user"
                    ? "gradient-brand text-white rounded-br-sm"
                    : "bg-surface-elevated text-foreground rounded-bl-sm border border-border"
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mb-3">
            {scenarios.map((s) => (
              <button key={s} onClick={() => send(s)} className="text-xs px-3 py-1.5 rounded-full glass hover:border-[var(--brand)]/60 transition-colors">
                {s}
              </button>
            ))}
          </div>

          <form onSubmit={(e) => { e.preventDefault(); send(input); }} className="flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message…"
              className="flex-1 rounded-xl bg-background/60 border border-border px-4 py-3 text-sm focus:outline-none focus:border-[var(--brand)]"
            />
            <Button type="submit" variant="hero" size="icon"><Send className="h-4 w-4" /></Button>
          </form>
        </div>

        <div className="mt-10 text-center">
          <Button asChild variant="hero" size="xl">
            <Link to="/" hash="contact">Want this on YOUR site? Book a Free Call →</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
