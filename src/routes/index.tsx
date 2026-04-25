import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Demos } from "@/components/site/Demos";
import { Pricing } from "@/components/site/Pricing";
import { HowItWorks } from "@/components/site/HowItWorks";
import { CaseStudies } from "@/components/site/CaseStudies";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { Calendly } from "@/components/Calendly";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
    { title: "NovaVoice AI — AI Chatbots & Voice Agents That Work 24/7" },
      {
        name: "description",
        content: "I build AI chatbots for e-commerce and AI voice receptionists for local businesses. Capture every lead. Book every call. Launch in days.",
      },
      { property: "og:title", content: "NovaVoice AI — AI Chatbots & Voice Agents That Work 24/7" },
      { property: "og:description", content: "Premium AI automation for e-commerce brands and local businesses in the US, UK, and Australia." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <main className="relative">
      <Calendly />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Demos />
      <Pricing />
      <HowItWorks />
      <CaseStudies />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
