import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { CredibilityBanner } from "@/components/sections/CredibilityBanner";
import { OperationsPanel } from "@/components/sections/OperationsPanel";
import { WorkflowCards } from "@/components/sections/WorkflowCards";
import { WhyPilotPulse } from "@/components/sections/WhyPilotPulse";
import { ValuesSection } from "@/components/sections/ValuesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { LogoWall } from "@/components/sections/LogoWall";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main">
        <HeroSection />
        <CredibilityBanner />
        <OperationsPanel />
        <WorkflowCards />
        <WhyPilotPulse />
        <ValuesSection />
        <ProcessSection />
        <LogoWall />
        <TestimonialsSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
