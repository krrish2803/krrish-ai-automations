import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { openCalendly } from "@/components/Calendly";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Demos", href: "/#demos" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Results", href: "/#results" },
  { label: "FAQ", href: "/#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 md:px-6 py-3 transition-all ${
            scrolled ? "glass-strong shadow-card" : ""
          }`}
        >
          <Link to="/" className="font-display text-lg font-bold tracking-tight">
            NovaVoice <span className="gradient-text">AI</span>
          </Link>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="hero" size="sm" onClick={openCalendly}>
              Book a Free Call
            </Button>
          </div>

          <button
            className="md:hidden rounded-lg p-2 text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {open && (
          <div className="md:hidden mt-2 glass-strong rounded-2xl p-4 animate-fade-up">
            <div className="flex flex-col gap-1">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-sm text-foreground/80 hover:text-foreground hover:bg-white/5 rounded-lg"
                >
                  {l.label}
                </a>
              ))}
              <Button variant="hero" className="mt-2" onClick={() => { setOpen(false); openCalendly(); }}>
                Book a Free Call
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
