import { MessageCircle } from "lucide-react";
import { WA } from "../primitives";

export function FloatingWA() {
  return (
    <a
      href={WA}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-gold)] hover:brightness-110 transition"
    >
      <MessageCircle size={18} /> <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
