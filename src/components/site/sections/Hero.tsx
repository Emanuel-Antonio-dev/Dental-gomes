import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, ChevronDown } from "lucide-react";

import teamHero from "@/assets/hero4.png";
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
            object-[75%_center]   /* mobile: foca mais à direita, evitando rostos no texto */
            scale-[1.02]
            md:object-[55%_center] /* desktop: mais centrado para mostrar a equipa */
          "
        />

        {/* 
          Gradiente principal – mais suave e com transição mais rápida,
          para não encobrir demasiado a imagem.
        */}
        <div
          className="
            absolute inset-0
            bg-[linear-gradient(90deg,
              rgba(4,18,52,0.92)_0%,
              rgba(4,18,52,0.75)_30%,
              rgba(4,18,52,0.4)_55%,
              rgba(4,18,52,0.1)_75%,
              transparent_90%
            )]
          "
        />

        {/* 
          Gradiente vertical – mantém a navbar integrada e escurece a parte inferior.
        */}
        <div
          className="
            absolute inset-0
            bg-[linear-gradient(180deg,
              rgba(3,15,40,0.4)_0%,
              transparent_25%,
              transparent_70%,
              rgba(3,15,40,0.5)_100%
            )]
          "
        />

        {/* Glow dourado subtil – inalterado */}
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
          pb-16
          pt-24        /* reduzido para evitar espaço a mais em mobile */
          md:pb-24
          md:pt-32
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
          {/* Eyebrow – pode ser usado para ícone ou selo */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="mb-5 flex items-center gap-3"
          >
            {/* Se tiver algo, coloque aqui */}
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
              mt-0           /* removido mt-25 */
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
              text-white/80    /* ligeiramente mais claro para melhor contraste */
              md:text-[17px]
            "
          >
            Atendimento humanizado, tecnologia avançada e uma
            equipa de especialistas dedicados ao seu bem-estar.
            Descubra uma nova experiência em medicina dentária
            premium.
          </p>

          {/* =================================================
              CTA – botões centralizados em mobile
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
              justify-start       /* centraliza em mobile */
              gap-3
              md:justify-start     /* volta à esquerda em desktop */
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
                rounded-md
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
                  rounded-md
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
                rounded-md
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
    </section>
  );
}