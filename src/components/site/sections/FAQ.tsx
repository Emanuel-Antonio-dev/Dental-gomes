import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionTitle } from "../primitives";

const faqs = [
  { q: "Como agendar a minha primeira consulta?", a: "Pode agendar através do formulário nesta página, pelo WhatsApp ou telefone. A nossa equipa entrará em contacto para confirmar o horário." },
  { q: "Trabalham com aparelhos invisíveis (Invisalign)?", a: "Sim. Oferecemos tratamentos ortodônticos com aparelhos convencionais e alinhadores invisíveis, com plano personalizado." },
  { q: "Fazem tratamento infantil?", a: "Sim, temos odontopediatria especializada, com uma abordagem lúdica e acolhedora para crianças." },
  { q: "Como funciona o branqueamento dentário?", a: "Após avaliação clínica, indicamos o protocolo mais adequado — em consultório ou combinado com uso domiciliar — sempre com segurança." },
  { q: "Onde fica a clínica?", a: "Estamos em Luanda Sul (Viana), no Projecto Morar, ao lado da escola Comandante Loy." },
  { q: "Aceitam consultas ao sábado?", a: "Sim, atendemos em horários alargados. Consulte a disponibilidade ao entrar em contacto." },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-36 bg-[color:var(--graphite)]/40 border-y border-border/60">
      <div className="container-lux max-w-4xl">
        <SectionTitle
          eyebrow="Perguntas Frequentes"
          title={<>Tudo o que precisa <span className="italic text-gradient-gold">de saber.</span></>}
          center
        />
        <Accordion type="single" collapsible className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`i-${i}`} className="border border-border/60 rounded-2xl bg-card/50 px-6 data-[state=open]:border-gold/40">
              <AccordionTrigger className="text-left font-serif text-lg hover:no-underline py-5">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
