import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustedLogos } from "@/components/sections/TrustedLogos";
import { WorkflowDemo } from "@/components/sections/WorkflowDemo";
import { AgentWorkflow } from "@/components/sections/AgentWorkflow";
import { DigitalWorkforce } from "@/components/sections/DigitalWorkforce";
import { IntegrationStrip } from "@/components/sections/IntegrationStrip";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { PartnershipProcess } from "@/components/sections/PartnershipProcess";
import { SecuritySection } from "@/components/sections/SecuritySection";
import { EcosystemSection } from "@/components/sections/EcosystemSection";
import { LatestUpdates } from "@/components/sections/LatestUpdates";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main">
        <HeroSection />
        <TrustedLogos />
        <WorkflowDemo />
        <AgentWorkflow />
        <DigitalWorkforce />
        <IntegrationStrip />
        <ResultsSection />
        <TestimonialsSection />
        <PartnershipProcess />
        <SecuritySection />
        <EcosystemSection />
        <LatestUpdates />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
