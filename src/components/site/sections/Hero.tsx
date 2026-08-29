import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

import teamHero from "@/assets/hero4.png";
import { WA } from "../primitives";

export function Hero() {
  return (
    <section
      id="top"
      className="
        relative
        min-h-dvh
        overflow-hidden

        bg-[image:var(--hero-image)]
        bg-no-repeat
        bg-cover
        bg-[position:74%_top]

        md:bg-[position:55%_center]
      "
      style={
        {
          "--hero-image": `url(${teamHero})`,
        } as React.CSSProperties
      }
    >
      {/* =====================================================
          SUBTLE OVERLAY
          Apenas melhora a leitura sem criar um fade artificial.
          ===================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-0

          bg-[linear-gradient(
            90deg,
            rgba(3,15,40,0.72)_0%,
            rgba(3,15,40,0.42)_28%,
            rgba(3,15,40,0.08)_55%,
            transparent_78%
          )]

          md:bg-[linear-gradient(
            90deg,
            rgba(3,15,40,0.88)_0%,
            rgba(3,15,40,0.68)_25%,
            rgba(3,15,40,0.30)_48%,
            rgba(3,15,40,0.06)_70%,
            transparent_90%
          )]
        "
      />

      {/* =====================================================
          MOBILE BOTTOM BLEND
          Não é um fade da imagem: é a própria cor da Hero
          continuando abaixo da área visual da fotografia.
          ===================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-0
          h-[38svh]


          md:hidden
        "
      />

      {/* =====================================================
          GOLD GLOW
          ===================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
          opacity-40
          mix-blend-screen
          bg-[radial-gradient(
            700px_500px_at_72%_35%,
            rgba(210,165,75,0.12),
            transparent_70%
          )]
        "
      />

      {/* =====================================================
          MAIN CONTENT
          ===================================================== */}
      <div
        className="
          relative
          z-10
          container-lux
          flex
          min-h-dvh
          items-end
          pb-10
          pt-[50svh]

          md:items-center
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
          {/* =================================================
              TITLE
              ================================================= */}
          <h1
            className="
              font-serif
              text-[43px]
              leading-[0.96]
              tracking-[-0.025em]
              text-white

              sm:text-5xl
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
              mt-5
              max-w-[500px]
              text-[15px]
              leading-6
              text-white/75

              sm:text-base
              md:mt-6
              md:text-[17px]
              md:leading-relaxed
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
              mt-7
              flex
              w-full
              flex-col
              gap-3

              sm:flex-row
              md:mt-9
              md:w-auto
              md:flex-wrap
              md:items-center
            "
          >
            {/* PRIMARY CTA */}
            <a
              href="/#contacto"
              className="
                group
                relative
                inline-flex
                min-h-[54px]
                w-full
                items-center
                justify-center
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

                sm:w-auto
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

            {/* WHATSAPP */}
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                min-h-[54px]
                w-full
                items-center
                justify-center
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

                sm:w-auto
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

