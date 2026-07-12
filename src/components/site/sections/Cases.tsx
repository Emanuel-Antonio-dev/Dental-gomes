import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import casosImg from "@/assets/casos.png";
import { SectionTitle } from "../primitives";

const cases = [
  { title: "Prótese Móvel", desc: "Reabilitação oral funcional e estética." },
  { title: "Aparelho Ortodôntico", desc: "Correção do alinhamento e mordida." },
  { title: "Restaurações Dentárias", desc: "Restauração estética e funcional." },
  { title: "Gengivoplastia", desc: "Contorno gengival harmonioso." },
];

export function Cases() {
  const [emblaRef, embla] = useEmblaCarousel({ align: "start", loop: true });
  return (
    <section id="casos" className="py-24 md:py-36">
      <div className="container-lux">
        <div className="flex items-end justify-between gap-8 flex-wrap">
          <SectionTitle
            eyebrow="Resultados Reais"
            title={<>Transformações que <span className="italic text-gradient-gold">falam por si.</span></>}
            subtitle="Casos clínicos reais realizados na Dental Gomes. Cada tratamento é planeado individualmente e conduzido com ética e rigor."
          />
          <div className="flex gap-2">
            <button onClick={() => embla?.scrollPrev()} aria-label="Anterior" className="h-11 w-11 rounded-full border border-border/60 hover:border-gold/60 inline-flex items-center justify-center transition"><ChevronLeft size={18} /></button>
            <button onClick={() => embla?.scrollNext()} aria-label="Próximo" className="h-11 w-11 rounded-full border border-border/60 hover:border-gold/60 inline-flex items-center justify-center transition"><ChevronRight size={18} /></button>
          </div>
        </div>

        <div className="mt-12 overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {cases.map((c) => (
              <div key={c.title} className="min-w-0 flex-[0_0_88%] sm:flex-[0_0_60%] lg:flex-[0_0_42%]">
                <div className="group rounded-3xl border border-border/60 bg-card/60 overflow-hidden hover:border-gold/40 transition">
                  <div className="aspect-[16/10] overflow-hidden bg-secondary">
                    <img src={casosImg} alt={`Antes e depois — ${c.title}`} loading="lazy" className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-700" />
                  </div>
                  <div className="p-6 flex items-center justify-between">
                    <div>
                      <h3 className="font-serif text-xl">{c.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{c.desc}</p>
                    </div>
                    <span className="text-xs uppercase tracking-widest text-gold">Antes / Depois</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-6 text-xs text-muted-foreground/70">*Imagens ilustrativas de tratamentos reais. Resultados podem variar de acordo com cada caso.</p>
      </div>
    </section>
  );
}
