import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-12 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl gradient-brand">
                <Sparkles className="h-5 w-5 text-white" />
              </span>
              <span className="font-display text-lg font-bold">
                Krrish<span className="gradient-text">.AI</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm">
              AI agents for e-commerce brands and local businesses. Built end-to-end,
              launched in days, supported forever.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold mb-3">Quick Links</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#services" className="hover:text-foreground transition-colors">Services</a></li>
              <li><a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a></li>
              <li><a href="#demos" className="hover:text-foreground transition-colors">Demos</a></li>
              <li><a href="#contact" className="hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold mb-3">Legal</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-muted-foreground">
          <div>© 2026 Krrish. All rights reserved.</div>
          <div>Built with ❤️ in India · Serving 🇺🇸 🇬🇧 🇦🇺</div>
        </div>
      </div>
    </footer>
  );
}
