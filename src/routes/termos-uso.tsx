import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { TermsOfService } from "@/components/site/sections/TermsOfService";
import { Footer } from "@/components/site/sections/Footer";
import { FloatingWA } from "@/components/site/sections/FloatingWA";

export const Route = createFileRoute("/termos-uso")({
  component: TermsOfServicePage,
});

function TermsOfServicePage() {
  return (
    <div className="min-h-dvh bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <TermsOfService />
      </main>
      <Footer />
      <FloatingWA />
    </div>
  );
}