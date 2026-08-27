import { ArrowRight, MessageCircle } from "lucide-react";
import smile from "@/assets/smile.jpg";
import logo from "@/assets/logo.png";
import team5 from "@/assets/team5.png";

import { Eyebrow, WA } from "../primitives";

export function FinalCTA() {
  return (
    <section className="relative py-24 md:py-36 overflow-hidden">
      <img src={logo} alt="" aria-hidden="true" width={1600} height={1000} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-40" />
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, oklch(0.1 0.006 60 / 0.85), oklch(0.1 0.006 60 / 0.95))" }} />
      <div className="relative container-lux text-center max-w-3xl mx-auto">
        <h2 className="mt-6 font-serif text-5xl md:text-7xl leading-[1.02]">
          O seu novo sorriso <br /><span className="italic text-gradient-gold">começa hoje.</span>
        </h2>
        <p className="mt-6 text-lg text-muted-foreground">Uma equipa premium à sua espera em Luanda. Marque agora e descubra a diferença.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a href="#contacto" className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-gold)] hover:brightness-110 transition">Agendar Consulta <ArrowRight size={16} /></a>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-medium text-white hover:bg-white/10 transition"><MessageCircle size={16} /> WhatsApp</a>
        </div>
      </div>
    </section>
  );
}
