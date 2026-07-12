import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "../ContactForm";
import { SectionTitle } from "../primitives";

export function Contact() {
  return (
    <section id="contacto" className="py-24 md:py-36">
      <div className="container-lux grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div>
          <SectionTitle
            eyebrow="Agendamento"
            title={<>Marque a sua <span className="italic text-gradient-gold">consulta.</span></>}
            subtitle="Preencha o formulário e a nossa equipa entrará em contacto para confirmar o seu horário. Preferimos responder o mais rápido possível."
          />
          <div className="mt-10 space-y-4">
            {[
              { i: Phone, t: "(+244) 927 917 779 · 926 714 367 · 924 313 104" },
              { i: Mail, t: "Clinicadentalgomes@gmail.com" },
              { i: MapPin, t: "Projecto Morar, ao lado da escola Comandante Loy — Viana, Luanda" },
              { i: Clock, t: "Segunda a Sábado" },
            ].map((c) => (
              <div key={c.t} className="flex items-start gap-4">
                <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 text-gold shrink-0"><c.i size={16} /></span>
                <span className="text-sm md:text-base text-muted-foreground">{c.t}</span>
              </div>
            ))}
          </div>
          {/* <div className="mt-10 rounded-3xl overflow-hidden border border-border/60 aspect-[4/3]">
            <iframe
              title="Localização Clínica Dental Gomes"
              src="https://www.google.com/maps?q=Viana+Luanda+Angola&output=embed"
              loading="lazy"
              className="h-full w-full grayscale contrast-125"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div> */}
        </div>
        <div className="rounded-3xl border border-border/60 bg-card/60 p-6 md:p-10 h-fit shadow-[var(--shadow-elegant)]">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
