import { motion } from "framer-motion";
import teamImg from "@/assets/team.png";
import teamImg2 from "@/assets/hero4.png";
import { SectionTitle, fadeUp } from "../primitives";

export function Team() {
  return (
    <section className="py-24 md:py-36">
      <div className="container-lux grid gap-14 lg:grid-cols-2 lg:gap-20 items-center">
        <div>
          <SectionTitle
            eyebrow="Equipa"
            title={<>Profissionais que <span className="italic text-gradient-gold">cuidam de si.</span></>}
            subtitle="Uma equipa multidisciplinar unida pelo compromisso com a excelência e o cuidado humano."
          />
          <div className="mt-8 grid grid-cols-2 gap-4 max-w-md">
            {["Dra. Mirian Gomes", "Dr. Aldo Simão"].map((n) => (
              <div key={n} className="rounded-xl border border-border/60 bg-card/40 p-4">
                <div className="text-xs uppercase tracking-widest text-gold">Especialista</div>
                <div className="mt-1 font-serif text-base">{n}</div>
              </div>
            ))}
          </div>
        </div>
        <motion.div {...fadeUp} className="relative">
          <div className="absolute -inset-8 rounded-3xl bg-[var(--gradient-gold)] opacity-15 blur-3xl" />
          <div className="relative rounded-3xl overflow-hidden border border-border/60 bg-card aspect-[4/3]">
            <img src={teamImg2} alt="Equipa da Clínica Dental Gomes" loading="lazy" className="h-full w-full object-cover object-[100%_center]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
