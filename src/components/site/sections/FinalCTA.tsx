import { ArrowRight, MessageCircle } from "lucide-react";
import smile from "@/assets/smile.jpg";
import logo from "@/assets/logo.png";
import team5 from "@/assets/team5.png";

import { Eyebrow, WA } from "../primitives";

export function FinalCTA() {
  return (
    <section className="relative py-24 md:py-36 overflow-hidden">
      <img src={logo} alt="" aria-hidden="true" width={1600} height={1000} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-40" />
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, oklch(0.1 0.006 60 / 0.85), oklch(0.1 0.006 60 / 0.95))" }} />
      <div className="relative container-lux text-center max-w-3xl mx-auto">
        <h2 className="mt-6 font-serif text-5xl md:text-7xl leading-[1.02]">
          O seu novo sorriso <br /><span className="italic text-gradient-gold">começa hoje.</span>
        </h2>
        <p className="mt-6 text-lg text-muted-foreground">Uma equipa premium à sua espera em Luanda. Marque agora e descubra a diferença.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
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
                aria-hidden="true"
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
        </div>
      </div>
    </section>
  );
}
