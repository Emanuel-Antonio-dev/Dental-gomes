import { motion } from "framer-motion";
import {
  ArrowRight,
  MessageCircle,
  ChevronDown,
} from "lucide-react";

import teamHero from "@/assets/hero3.png";
import { WA } from "../primitives";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-dvh overflow-hidden bg-[#061636]"
    >
      {/* =====================================================
          BACKGROUND / TEAM IMAGE
          ===================================================== */}
      <div className="absolute inset-0">
        <img
          src={teamHero}
          alt="Equipa da Clínica Dental Gomes"
          width={1920}
          height={1080}
          fetchPriority="high"
          className="
            absolute inset-0
            h-full w-full
            object-cover
            object-[80%_center]
            scale-[1.02]
            md:object-[60%_center]
            
          "
        />

        {/* 
          Gradiente principal:
          - muito forte à esquerda para garantir leitura
          - desaparece progressivamente sobre a equipa
        */}
        <div
          className="
            absolute inset-0
            bg-[linear-gradient(90deg,
              rgba(4,18,52,1)_0%,
              rgba(4,18,52,0.98)_25%,
              rgba(4,18,52,0.82)_42%,
              rgba(4,18,52,0.35)_58%,
              rgba(4,18,52,0)_78%
            )]
          "
        />

        {/* 
          Pequeno reforço vertical para manter a navbar
          integrada com a hero.
        */}
        <div
          className="
            absolute inset-0
            bg-[linear-gradient(180deg,
              rgba(3,15,40,0.45)_0%,
              transparent_20%,
              transparent_75%,
              rgba(3,15,40,0.35)_100%
            )]
          "
        />

        {/* Glow dourado muito subtil */}
        <div
          className="
            absolute inset-0
            opacity-40
            mix-blend-screen
            bg-[radial-gradient(
              700px_500px_at_72%_35%,
              rgba(210,165,75,0.12),
              transparent_70%
            )]
          "
        />
      </div>

      {/* =====================================================
          MAIN CONTENT
          ===================================================== */}
      <div
        className="
          relative z-10
          container-lux
          flex min-h-dvh
          items-center
          pb-20
          pt-32
          md:pb-24
        "
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            w-full
            max-w-[520px]
            lg:max-w-[560px]
          "
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="mb-5 flex items-center gap-3"
          >
          </motion.div>

          {/* =================================================
              TITLE
              ================================================= */}
          <h1
            className="
              font-serif
              text-5xl
              leading-[0.98]
              tracking-[-0.025em]
              text-white
              sm:text-6xl
              md:text-7xl
              lg:text-[76px]
            "
          >
            Damos vida
            <br />

            ao seu{" "}
            <span className="relative inline-block">
              <span className="text-gradient-gold italic">
                sorriso.
              </span>

              <motion.span
                className="
                  absolute
                  -bottom-1
                  left-0
                  h-px
                  w-full
                  origin-left
                  bg-gold/50
                "
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  delay: 0.7,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            </span>
          </h1>

          {/* =================================================
              DESCRIPTION
              ================================================= */}
          <p
            className="
              mt-6
              max-w-[500px]
              text-base
              leading-relaxed
              text-white/75
              md:text-[17px]
            "
          >
            Atendimento humanizado, tecnologia avançada e uma
            equipa de especialistas dedicados ao seu bem-estar.
            Descubra uma nova experiência em medicina dentária
            premium.
          </p>

          {/* =================================================
              CTA
              ================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              duration: 0.8,
            }}
            className="
              mt-9
              flex
              flex-wrap
              items-center
              gap-3
            "
          >
            {/* Primary */}
            <a
              href="/#contacto"
              className="
                group
                relative
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-primary
                px-7
                py-3.5
                text-sm
                font-semibold
                text-primary-foreground
                shadow-2xl
                shadow-gold/20
                transition-all
                duration-300
                hover:scale-[1.03]
                hover:shadow-gold/40
                active:scale-[0.98]
              "
            >
              <span>Agendar Consulta</span>

              <ArrowRight
                size={16}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />

              <span
                className="
                  absolute
                  -inset-1
                  rounded-full
                  bg-gold/20
                  blur-xl
                  opacity-0
                  transition-opacity
                  group-hover:opacity-100
                "
              />
            </a>

            {/* WhatsApp */}
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/25
                bg-white/[0.06]
                px-7
                py-3.5
                text-sm
                font-medium
                text-white
                backdrop-blur-md
                transition-all
                duration-300
                hover:border-white/40
                hover:bg-white/10
              "
            >
              <MessageCircle size={16} />

              <span>Falar no WhatsApp</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* =====================================================
          SCROLL INDICATOR
          ===================================================== */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.4,
          duration: 1,
        }}
        className="
          absolute
          bottom-8
          left-1/2
          z-10
          flex
          -translate-x-1/2
          flex-col
          items-center
          gap-2
          text-white/35
        "
      >
        <span
          className="
            text-[9px]
            uppercase
            tracking-[0.35em]
          "
        >
          Explore
        </span>

        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          }}
        >
          <ChevronDown
            size={18}
            strokeWidth={1.5}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}