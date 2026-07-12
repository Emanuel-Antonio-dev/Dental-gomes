import { motion } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";
import { SectionTitle, fadeUp } from "../primitives";

export function About() {
  return (
    <section id="sobre" className="py-24 md:py-36 relative">
      <div className="container-lux">
        <motion.div
          {...fadeUp}
          className="max-w-3xl mx-auto text-center"
        >
          <SectionTitle
            eyebrow="A Clínica"
            title={
              <>
                Uma nova forma de cuidar
                <br />
                <span className="text-gradient-gold italic">do seu sorriso.</span>
              </>
            }
            subtitle="A Dental Gomes nasceu com a missão de oferecer um atendimento odontológico de qualidade, focado no bem-estar e na saúde bucal dos nossos pacientes. Com vasta experiência no mercado, dedicamo-nos a tratamentos personalizados que respeitam a sua individualidade."
            center
          />
        </motion.div>
      </div>
    </section>
  );
}