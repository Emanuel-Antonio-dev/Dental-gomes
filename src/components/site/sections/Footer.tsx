import { Facebook, Instagram, MessageCircle } from "lucide-react";
import logo from "@/assets/dental.png";
import { WA } from "../primitives";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-[color:var(--ink)]">
      <div className="container-lux py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Dental Gomes" width={44} height={44} className="h-11 w-11 object-contain" />
            <div className="font-serif text-xl">Dental <span className="text-gradient-gold">Gomes</span></div>
          </div>
          <p className="mt-5 max-w-sm text-sm text-muted-foreground leading-relaxed">
            Clínica de medicina dentária premium em Luanda. Damos vida ao seu sorriso com tecnologia
            moderna e atendimento humanizado.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="https://instagram.com/Dental.gomes" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/60 hover:border-gold/60 hover:text-gold transition"><Instagram size={16} /></a>
            <a href="https://facebook.com/DentalGomes" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/60 hover:border-gold/60 hover:text-gold transition"><Facebook size={16} /></a>
            <a href={WA} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/60 hover:border-gold/60 hover:text-gold transition"><MessageCircle size={16} /></a>
          </div>
        </div>
        <div>
          <div className="eyebrow">Contacto</div>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li>(+244) 927 917 779</li>
            <li>(+244) 926 714 367</li>
            <li>Clinicadentalgomes@gmail.com</li>
            <li>Viana, Luanda Sul</li>
          </ul>
        </div>
        <div>
          <div className="eyebrow">Navegação</div>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li><a href="/#sobre" className="hover:text-gold transition">Sobre</a></li>
            <li><a href="/#especialidades" className="hover:text-gold transition">Especialidades</a></li>
            <li><a href="/#casos" className="hover:text-gold transition">Resultados</a></li>
            <li><a href="/#contacto" className="hover:text-gold transition">Agendamento</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container-lux py-6 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Clínica Dental Gomes. Todos os direitos reservados.</div>
          <div className="flex gap-6">
            <a href="/politica-privacidade" className="hover:text-gold transition">Política de Privacidade</a>
            <a href="/termos-uso" className="hover:text-gold transition">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}