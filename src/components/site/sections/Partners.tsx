import { useState, useEffect } from "react";

const partners = ["HE Farma", "Cruz Vermelha", "Mood Sniper", "Pantera Jiu Jitsu", "Cantinho do Recreio"];

export function Partners() {
  const [slidesPerView, setSlidesPerView] = useState(4);

  // Responsividade: quantos parceiros visíveis por vez
  useEffect(() => {
    const updateSlides = () => {
      const width = window.innerWidth;
      if (width >= 1024) setSlidesPerView(4);
      else if (width >= 768) setSlidesPerView(3);
      else if (width >= 480) setSlidesPerView(2);
      else setSlidesPerView(1);
    };
    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  // Duplica 3 vezes para loop infinito
  const duplicated = [...partners, ...partners, ...partners];

  // Velocidade mais lenta: quanto maior o número, mais devagar
  // Ajuste este valor para controlar a velocidade (ex: 40 = mais lento)
  const duration = 40 / slidesPerView; // antes era 25, agora 40

  return (
    <section className="py-20 border-y border-border/60 bg-[color:var(--graphite)]/30">
      <div className="container-lux">
        <div className="text-center eyebrow">Parceiros institucionais</div>

        <div
          className="relative mt-8 overflow-hidden"
          onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = "paused")}
          onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = "running")}
        >
          <div
            className="flex whitespace-nowrap"
            style={{
              animation: `marquee ${duration}s linear infinite`,
              width: "max-content",
            }}
          >
            {duplicated.map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-6 md:px-8 py-2"
                style={{ width: `${100 / slidesPerView}vw` }}
              >
                <span className="font-serif text-lg md:text-xl text-muted-foreground/70 hover:text-gold transition-colors">
                  {partner}
                </span>
              </div>
            ))}
          </div>

          {/* Gradientes laterais para suavizar */}
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[color:var(--graphite)]/30 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[color:var(--graphite)]/30 to-transparent pointer-events-none" />
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-${100 / 3}%); }
        }
      `}</style>
    </section>
  );
}