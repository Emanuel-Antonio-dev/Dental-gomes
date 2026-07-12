import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, ChevronDown, Sparkles } from "lucide-react";
import team2 from "@/assets/team2.png";
import team3 from "@/assets/team3.png";
import { Eyebrow, WA } from "../primitives";

export function Hero() {
  return (
    <section id="top" className="relative min-h-dvh overflow-hidden">
      {/* Imagem com posicionamento focado no centro-direita para mostrar as três pessoas */}
      <div className="absolute inset-0">
        <img
          src={team3}
          alt=""
          aria-hidden="true"
          width={1280}
          height={852}
          fetchPriority="high"
          className="h-full w-full object-cover object-[90%_center] scale-105"        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div
          className="absolute inset-0 opacity-40 mix-blend-overlay"
          style={{
            background:
              "radial-gradient(1200px 600px at 70% 20%, oklch(0.78 0.14 82 / 0.25), transparent 60%)",
          }}
        />
      </div>

      {/* Conteúdo principal */}
      <div className="relative container-lux flex min-h-dvh flex-col justify-center pb-16 pt-32 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          {/* Título com linha animada */}
          <h1 className="mt-6 font-serif text-5xl leading-[1.02] md:text-7xl lg:text-8xl">
            Damos vida
            <br className="hidden md:block" />
            ao seu{" "}
            <span className="relative inline-block">
              <span className="text-gradient-gold italic">sorriso.</span>
              <motion.span
                className="absolute -bottom-1 left-0 h-1 w-full bg-gold/30"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              />
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="mt-6 max-w-xl text-base md:text-lg text-white/80 leading-relaxed">
            Atendimento humanizado, tecnologia avançada e uma equipa de especialistas dedicados
            ao seu bem-estar. Descubra uma nova experiência em medicina dentária premium.
          </p>

          {/* Botões de ação */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="/#contacto"
              className="group relative inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-2xl shadow-gold/30 transition-all hover:shadow-gold/50 hover:scale-105 active:scale-95"
            >
              <span>Agendar Consulta</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              <span className="absolute -inset-1 rounded-full bg-gold/20 blur-lg transition-opacity group-hover:opacity-100 opacity-0" />
            </a>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 backdrop-blur-sm px-8 py-4 text-sm font-medium text-white transition hover:bg-white/10 hover:border-white/50"
            >
              <MessageCircle size={16} />
              <span>Falar no WhatsApp</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Indicador de scroll animado */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={20} strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </section>
  );
}