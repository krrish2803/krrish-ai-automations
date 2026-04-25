import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border py-12 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-3">
              <span className="font-display text-lg font-bold">
                NovaVoice <span className="gradient-text">AI</span>
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

        <div className="flex gap-4 mt-4">
          <a href="https://www.linkedin.com/in/krrish-yaduka-16aa72293/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            <span>LinkedIn</span>
          </a>
          <a href="https://www.instagram.com/krri.sh8629/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            <span>Instagram</span>
          </a>
          <a href="https://x.com/Krrish629803631" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            <span>Twitter</span>
          </a>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-muted-foreground">
          <div>© 2026 NovaVoice AI. All rights reserved.</div>
          <div>Built with ❤️ in India · Serving 🇺🇸 🇬🇧 🇦🇺</div>
        </div>
      </div>
    </footer>
  );
}
