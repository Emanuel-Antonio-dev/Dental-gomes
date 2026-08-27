import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader, SheetClose } from "@/components/ui/sheet";
import logo from "@/assets/logo.png";
import logo2 from "@/assets/dental.png";
import { links } from "./primitives";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="container-lux flex items-center justify-between h-20">
        {/* Logo com link absoluto para a home */}
        <a href="/#top" className="flex items-center gap-3 min-w-0" aria-label="Dental Gomes — início">
          <img src={logo2} alt="Dental Gomes" width={44} height={44} className="h-11 w-11 shrink-0 object-contain" />
          <span className="hidden sm:block font-serif text-lg tracking-wide truncate">
            Dental <span className="text-gradient-gold">Gomes</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Navegação principal">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white hover:text-foreground transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              type="button"
              className="lg:hidden inline-flex items-center justify-center rounded-md w-10 h-10 border border-border/60"
              aria-label="Abrir menu"
            >
              <Menu size={18} />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[85vw] max-w-sm p-0 bg-background/95 backdrop-blur-xl border-l border-border/60 flex flex-col [&>button]:hidden"
          >
            <SheetHeader className="p-6 border-b border-border/60">
              <div className="flex items-center justify-between">
                <a href="/#top" onClick={() => setOpen(false)} className="flex items-center gap-3">
                  <img src={logo2} alt="" width={40} height={40} className="h-10 w-10 object-contain" />
                  <SheetTitle className="font-serif text-lg tracking-wide">
                    Dental <span className="text-gradient-gold">Gomes</span>
                  </SheetTitle>
                </a>
                <SheetClose asChild>
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-md w-10 h-10 border border-border/60"
                    aria-label="Fechar menu"
                  >
                    <X size={18} />
                  </button>
                </SheetClose>
              </div>
            </SheetHeader>

            <nav className="flex-1 overflow-y-auto p-6" aria-label="Navegação mobile">
              <div className="eyebrow mb-4">Navegação</div>
              <ul className="space-y-1">
                {links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block py-3 font-serif text-lg text-foreground/90 hover:text-gold border-b border-border/40 transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}