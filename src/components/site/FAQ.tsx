import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How long does setup take?",
    a: "5–7 days for chatbots, 7–10 days for voice agents. We'll have you live faster than most agencies even respond to your email.",
  },
  {
    q: "Do I need any technical skills?",
    a: "Not at all. I handle hosting, integrations, training, and updates. You'll get a simple dashboard to monitor performance.",
  },
  {
    q: "What if I'm not satisfied?",
    a: "30-day money-back guarantee. No questions asked. If the AI doesn't fit your business, you get a full refund.",
  },
  {
    q: "Can you integrate with my existing tools?",
    a: "Yes — I work with 50+ tools including Shopify, WooCommerce, Calendly, Google Calendar, HubSpot, Twilio, Slack, and more.",
  },
  {
    q: "What's included in the monthly fee?",
    a: "Hosting, maintenance, model updates, monitoring, and ongoing support. You only pay extra for usage above plan limits (rare).",
  },
  {
    q: "Will the AI sound robotic or annoy my customers?",
    a: "Modern voice models sound human. We custom-tune tone, accent, and pacing to match your brand. Most callers don't realise it's AI.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="text-sm font-medium gradient-text uppercase tracking-wider mb-3">
            FAQ
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Questions, <span className="gradient-text">answered.</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className="glass rounded-2xl px-6 border-0"
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold hover:no-underline py-5">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
