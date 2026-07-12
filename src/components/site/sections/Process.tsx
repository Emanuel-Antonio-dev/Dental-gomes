import { motion } from "framer-motion";
import { SectionTitle } from "../primitives";

const steps = [
  { n: "01", t: "Agendamento", d: "Contacto simples via formulário, telefone ou WhatsApp." },
  { n: "02", t: "Avaliação", d: "Análise clínica detalhada e plano de tratamento personalizado." },
  { n: "03", t: "Tratamento", d: "Procedimentos com tecnologia moderna e conforto." },
  { n: "04", t: "Acompanhamento", d: "Acompanhamento contínuo para resultados duradouros." },
];

export function Process() {
  return (
    <section className="py-24 md:py-36">
      <div className="container-lux">
        <SectionTitle
          eyebrow="Processo"
          title={<>Uma jornada <span className="italic text-gradient-gold">clara e cuidadosa.</span></>}
          center
        />
        <div className="mt-16 relative">
          <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
          <div className="grid gap-10 md:grid-cols-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative text-center md:text-left"
              >
                <div className="relative inline-flex items-center justify-center h-16 w-16 rounded-full border border-gold/40 bg-background text-gold font-serif text-lg mx-auto md:mx-0">
                  {s.n}
                </div>
                <h3 className="mt-5 font-serif text-xl">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
