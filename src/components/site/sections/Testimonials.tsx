import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Quote, Star } from "lucide-react";
import { SectionTitle } from "../primitives";

const testimonials = [
  { 
    name: "Ivan dos Santos", 
    text: "O atendimento na Dental Gomes superou as minhas expectativas. Todos são muito atenciosos e o resultado do meu tratamento ficou incrível!",
    rating: 5,
    date: "2024"
  },
  { 
    name: "Maria Correia", 
    text: "Há muito tempo que não sabia o que era sorrir, mas a Dental Gomes deu vida ao meu sorriso.",
    rating: 5,
    date: "2024"
  },
  { 
    name: "Silvia Francisco", 
    text: "Depois de anos com problemas gengivais, encontrei uma equipa de confiança que resolveu o meu problema com rapidez e eficiência.",
    rating: 5,
    date: "2024"
  },
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: "center",
    containScroll: "trimSnaps" 
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Autoplay
  const startAutoplay = useCallback(() => {
    if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
    autoplayTimerRef.current = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, 4000); // 4 segundos
  }, [emblaApi]);

  const stopAutoplay = useCallback(() => {
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
      autoplayTimerRef.current = null;
    }
  }, []);

  // Sincroniza índice
  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    setSelectedIndex(emblaApi.selectedScrollSnap());
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  // Gerencia autoplay
  useEffect(() => {
    if (!emblaApi) return;
    if (isPaused) {
      stopAutoplay();
    } else {
      startAutoplay();
    }
    return () => stopAutoplay();
  }, [emblaApi, isPaused, startAutoplay, stopAutoplay]);

  return (
    <section id="depoimentos" className="py-24 md:py-36 bg-[color:var(--graphite)]/40 border-y border-border/60">
      <div className="container-lux">
        <SectionTitle
          eyebrow="Depoimentos"
          title={<>Sorrisos que <span className="italic text-gradient-gold">contam histórias.</span></>}
          center
        />

        <div 
          className="relative mt-14 max-w-5xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.name} 
                  className="min-w-0 flex-[0_0_100%] md:flex-[0_0_50%] px-3"
                >
                  <div className="rounded-2xl border border-border/40 bg-card/60 p-6 md:p-8 h-full backdrop-blur-sm transition-all hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5">
                    {/* Cabeçalho com rating */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="font-serif text-base md:text-lg font-semibold text-foreground">
                          {testimonial.name}
                        </div>
                        <div className="text-xs text-muted-foreground/60 mt-0.5">
                          {testimonial.date}
                        </div>
                      </div>
                      <div className="flex gap-0.5 text-gold shrink-0">
                        {Array.from({ length: 5 }).map((_, k) => (
                          <Star 
                            key={k} 
                            size={14} 
                            fill={k < testimonial.rating ? "currentColor" : "none"}
                            className={k < testimonial.rating ? "text-gold" : "text-border"}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Citação */}
                    <div className="mt-4 relative">
                      <Quote 
                        className="absolute -top-1 -left-1 text-gold/20" 
                        size={20} 
                      />
                      <p className="pl-5 font-serif text-sm md:text-base leading-relaxed text-foreground/80 italic">
                        "{testimonial.text}"
                      </p>
                    </div>

                    {/* Linha decorativa */}
                    <div className="mt-5 pt-4 border-t border-border/30">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground/50">
                        <span>★</span>
                        <span className="font-medium">Paciente verificado</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                aria-label={`Ver depoimento ${index + 1}`}
                className={`
                  h-1.5 rounded-full transition-all duration-500
                  ${selectedIndex === index 
                    ? "w-8 bg-gold" 
                    : "w-2 bg-border hover:bg-gold/50"}
                `}
              />
            ))}
          </div>

          {/* Indicador de autoplay (sutil) */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] tracking-widest text-muted-foreground/30 uppercase">
            {isPaused ? "Pausado" : "● Rolando"}
          </div>
        </div>
      </div>
    </section>
  );
}