import type { Metadata } from "next";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustedLogos } from "@/components/sections/TrustedLogos";
import { WorkflowDemo } from "@/components/sections/WorkflowDemo";
import { AgentWorkflow } from "@/components/sections/AgentWorkflow";
import { DigitalWorkforce } from "@/components/sections/DigitalWorkforce";
import { PlatformSection } from "@/components/sections/PlatformSection";
import { IntegrationStrip } from "@/components/sections/IntegrationStrip";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { PartnershipProcess } from "@/components/sections/PartnershipProcess";
import { SecuritySection } from "@/components/sections/SecuritySection";
import { EcosystemSection } from "@/components/sections/EcosystemSection";
import { LatestUpdates } from "@/components/sections/LatestUpdates";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <SiteChrome>
      <HeroSection />
      <TrustedLogos />
      <WorkflowDemo />
      <AgentWorkflow />
      <DigitalWorkforce />
      <PlatformSection />
      <IntegrationStrip />
      <ResultsSection />
      <TestimonialsSection />
      <PartnershipProcess />
      <SecuritySection />
      <EcosystemSection />
      <LatestUpdates />
      <FinalCTA />
    </SiteChrome>
  );
}
