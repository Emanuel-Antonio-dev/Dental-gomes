import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/sections/Hero";
import { About } from "@/components/site/sections/About";
import { Doctor } from "@/components/site/sections/Doctor";
import { Specialties } from "@/components/site/sections/Specialties";
import { Differentiators } from "@/components/site/sections/Differentiators";
import { Cases } from "@/components/site/sections/Cases";
import { Testimonials } from "@/components/site/sections/Testimonials";
import { Team } from "@/components/site/sections/Team";
import { Partners } from "@/components/site/sections/Partners";
import { Process } from "@/components/site/sections/Process";
import { FAQ } from "@/components/site/sections/FAQ";
import { Contact } from "@/components/site/sections/Contact";
import { FinalCTA } from "@/components/site/sections/FinalCTA";
import { Footer } from "@/components/site/sections/Footer";
import { FloatingWA } from "@/components/site/sections/FloatingWA";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preload", as: "image", href: hero, fetchpriority: "high" } as never,
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="min-h-dvh bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Doctor />
        <Specialties />
        <Differentiators />
        <Cases />
        <Testimonials />
        <Team />
        {/* <Partners /> */}
        <Process />
        <FAQ />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWA />
    </div>
  );
}
