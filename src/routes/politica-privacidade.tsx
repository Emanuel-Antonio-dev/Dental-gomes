import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { PrivacyPolicy } from "@/components/site/sections/PrivacyPolicy";
import { Footer } from "@/components/site/sections/Footer";
import { FloatingWA } from "@/components/site/sections/FloatingWA";

export const Route = createFileRoute("/politica-privacidade")({
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <div className="min-h-dvh bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <PrivacyPolicy />
      </main>
      <Footer />
      <FloatingWA />
    </div>
  );
}