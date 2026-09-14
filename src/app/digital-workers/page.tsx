import type { Metadata } from "next";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { AgentWorkflow } from "@/components/sections/AgentWorkflow";
import { IntegrationStrip } from "@/components/sections/IntegrationStrip";
import { SecuritySection } from "@/components/sections/SecuritySection";
import { WorkflowDemo } from "@/components/sections/WorkflowDemo";
import { InnerFinalCta } from "@/components/pages/InnerFinalCta";
import { DigitalWorkersHeroRoster } from "@/components/sections/DigitalWorkersHeroRoster";
import { Em, PageHero } from "@/components/ui/PageHero";
import { digitalWorkforce } from "@/lib/home-content";
import { digitalWorkersPage } from "@/lib/pages/digital-workers";

export const metadata: Metadata = {
  title: digitalWorkersPage.meta.title,
  description: digitalWorkersPage.meta.description,
};

export default function DigitalWorkersPage() {
  const { hero, workflow, security } = digitalWorkersPage;

  return (
    <SiteChrome>
      <PageHero
        eyebrow={hero.eyebrow}
        title={
          <>
            {hero.titleBefore}
            <Em>{hero.titleHighlight}</Em>
          </>
        }
        lead={hero.lead}
        leadSecondary={
          <ul className="flex flex-wrap gap-1.5" aria-label="Highlights">
            {hero.chips.map((chip) => (
              <li key={chip} className="trust-chip">
                {chip}
              </li>
            ))}
          </ul>
        }
        primaryCta={hero.cta}
        secondaryCta={hero.secondaryCta}
        aside={
          <DigitalWorkersHeroRoster
            eyebrow={hero.roster.eyebrow}
            heading={hero.roster.heading}
            workers={digitalWorkforce.workers}
          />
        }
      />
      <WorkflowDemo
        eyebrow={workflow.eyebrow}
        heading={
          <>
            {workflow.headingBefore}
            <span className="heading-gradient">{workflow.headingHighlight}</span>
          </>
        }
        lead={workflow.lead}
      />
      <AgentWorkflow />
      <IntegrationStrip />
      <SecuritySection
        eyebrow={security.eyebrow}
        heading={security.heading}
        headingHighlight={security.headingHighlight}
        items={security.items}
      />
      <InnerFinalCta />
    </SiteChrome>
  );
}
