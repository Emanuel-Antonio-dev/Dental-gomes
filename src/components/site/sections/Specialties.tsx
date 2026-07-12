import { motion } from "framer-motion";
import { Baby, HeartPulse, Scissors, Smile, Sparkles, Wrench } from "lucide-react";
import { SectionTitle } from "../primitives";

const specialties = [
  { icon: Wrench, title: "Ortodontia", desc: "Tratamentos com aparelhos convencionais e invisíveis (Invisalign)." },
  { icon: Baby, title: "Odontopediatria", desc: "Atendimento especializado para crianças com prevenção e cuidado infantil." },
  { icon: Smile, title: "Próteses Dentárias", desc: "Confecção de próteses fixas e removíveis com técnicas modernas." },
  { icon: Sparkles, title: "Estética Dentária", desc: "Branqueamento, restaurações estéticas, piercing dentário e fechamento de diastema." },
  { icon: HeartPulse, title: "Periodontia", desc: "Tratamento de doenças gengivais como gengivite e periodontite." },
  { icon: Scissors, title: "Endodontia", desc: "Tratamento de canal com técnicas minimamente invasivas." },
];

export function Specialties() {
  return (
    <section id="especialidades" className="py-24 md:py-36">
      <div className="container-lux">
        <SectionTitle
          eyebrow="Especialidades"
          title={<>Cuidado completo <span className="italic text-gradient-gold">em cada detalhe.</span></>}
          subtitle="Uma equipa multidisciplinar oferece tratamentos abrangentes, com tecnologia moderna e um plano personalizado para cada sorriso."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {specialties.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/60 p-8 hover:border-gold/50 transition-all duration-500 hover:-translate-y-1"
            >
              <div
                className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{ background: "radial-gradient(circle, oklch(0.78 0.14 82 / 0.2), transparent 70%)" }}
              />
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-gold/40 bg-gold/5 text-gold">
                  <s.icon size={22} />
                </div>
                <h3 className="mt-6 font-serif text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-6 hairline w-16 group-hover:w-24 transition-all duration-500" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
