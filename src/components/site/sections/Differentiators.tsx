import { motion } from "framer-motion";
import { Cpu, Leaf, MapPin, ShieldCheck, Sparkles, Users } from "lucide-react";
import { SectionTitle } from "../primitives";

const diffs = [
  { icon: Users, title: "Equipa Qualificada", desc: "Multidisciplinar, com especialistas nas diversas áreas da odontologia." },
  { icon: Cpu, title: "Tecnologia Avançada", desc: "Scanners digitais e sistemas CAD/CAM para próteses de alta precisão." },
  { icon: MapPin, title: "Acessibilidade", desc: "Localização privilegiada, fácil acesso e estacionamento próximo." },
  { icon: Leaf, title: "Atendimento Humanizado", desc: "Ambiente acolhedor que valoriza o seu conforto e tranquilidade." },
  { icon: ShieldCheck, title: "Ambiente Seguro", desc: "Rigorosos protocolos de esterilização e biossegurança." },
  { icon: Sparkles, title: "Experiência Premium", desc: "Cada detalhe pensado para uma jornada verdadeiramente diferenciada." },
];

export function Differentiators() {
  return (
    <section className="py-24 md:py-36 bg-[color:var(--graphite)]/40 border-y border-border/60">
      <div className="container-lux">
        <SectionTitle
          eyebrow="Diferenciais"
          title={<>Por que escolher a <span className="italic text-gradient-gold">Dental Gomes.</span></>}
          center
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {diffs.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.05 }}
              className="flex gap-5 rounded-2xl p-6"
            >
              <div className="shrink-0 inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-gold">
                <d.icon size={18} />
              </div>
              <div>
                <h3 className="font-serif text-xl">{d.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
