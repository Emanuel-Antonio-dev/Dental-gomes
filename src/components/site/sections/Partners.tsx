import { useState, useEffect } from "react";

// Estrutura de dados com nome e caminho do logo
const partners = [
  { name: "HE Farma", logo: "/src/assets/farma.jpg" },
  { name: "Cruz Vermelha", logo: "/src/assets/cruz.jpg" },
  { name: "Mood Sniper", logo: "/src/assets/snipper.jpg" },
  { name: "Pantera Jiu Jitsu", logo: "/src/assets/pantera.png" },
  { name: "Cantinho do Recreio", logo: "/partners/cantinho-recreio.svg" },
];

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

  // Duplica 3 vezes para efeito de loop infinito
  const duplicated = [...partners, ...partners, ...partners];

  // Velocidade mais lenta (quanto maior o número, mais devagar)
  const duration = 40 / slidesPerView; // ajuste conforme preferência

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
                className="flex-shrink-0 px-4 md:px-6 py-2 flex items-center justify-center"
                style={{ width: `${100 / slidesPerView}vw` }}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-12 md:h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Gradientes laterais para suavizar o fade */}
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