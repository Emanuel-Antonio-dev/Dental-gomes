import { motion } from "framer-motion";
import doctorImg from "@/assets/doctor.png";
import { SectionTitle, fadeUp } from "../primitives";

export function Doctor() {
  return (
    <section id="doutora" className="py-24 md:py-36 bg-[color:var(--graphite)]/40 border-y border-border/60">
      <div className="container-lux grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20 items-center">
        <div>
          <SectionTitle
            eyebrow="Fundadora"
            title={<>Dra. Mirian <span className="italic text-gradient-gold">Gomes</span></>}
            subtitle="Medica dentista com vasta experiência clínica, a Dra. Mirian Gomes lidera a Dental Gomes com uma filosofia clara: unir excelência técnica, tecnologia moderna e uma escuta atenta ao paciente. Cada tratamento é planeado com o rigor da ciência e a sensibilidade de quem entende que um sorriso é único."
          />
          <div className="mt-10 space-y-4">
            {[
              "Formação avançada em estética e reabilitação oral",
              "Especialista em tratamentos personalizados",
              "Abordagem humanizada, do primeiro contacto ao acompanhamento",
            ].map((t) => (
              <motion.div key={t} {...fadeUp} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold" />
                <span className="text-sm md:text-base text-muted-foreground">{t}</span>
              </motion.div>
            ))}
          </div>
          <blockquote className="mt-10 border-l-2 border-gold pl-6 text-lg md:text-xl italic text-foreground/90 font-serif">
            "Cada paciente merece ser recebido como único. O nosso compromisso é devolver não apenas
            saúde bucal, mas a confiança de sorrir sem reservas."
            <footer className="mt-3 text-xs not-italic uppercase tracking-widest text-muted-foreground">
              — Dra. Mirian Gomes
            </footer>
          </blockquote>
        </div>

        <motion.div {...fadeUp} className="relative">
          <div className="absolute -inset-8 rounded-full bg-[var(--gradient-gold)] opacity-15 blur-3xl" />
          <div className="relative overflow-hidden rounded-3xl border border-gold/40 bg-card aspect-[4/5]">
            <img src={doctorImg} alt="Dra. Mirian Gomes" loading="lazy" className="h-full w-full object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
