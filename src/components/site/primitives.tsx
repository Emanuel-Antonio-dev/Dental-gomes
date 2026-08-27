import { motion } from "framer-motion";
import type { ReactNode } from "react";

export const WA =
  "https://wa.me/244927917779?text=Ol%C3%A1%20Dental%20Gomes%2C%20gostaria%20de%20agendar%20uma%20consulta";

export const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-3">
      <span className="h-px w-8 bg-gold" />
      <span className="eyebrow">{children}</span>
    </div>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  center = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <motion.div {...fadeUp} className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {/* {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : ""} */}
      <h2 className="mt-5 font-serif text-4xl md:text-5xl leading-[1.05]">{title}</h2>
      {subtitle && (
        <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">{subtitle}</p>
      )}
    </motion.div>
  );
}

export const links = [
  { href: "/#sobre", label: "Sobre" },
  { href: "/#especialidades", label: "Especialidades" },
  { href: "/#casos", label: "Casos" },
  { href: "/#depoimentos", label: "Depoimentos" },
  { href: "/#contacto", label: "Contacto" },
];

