import type { Metadata } from "next";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { SecuritySection } from "@/components/sections/SecuritySection";
import { InnerFinalCta } from "@/components/pages/InnerFinalCta";
import { DigitalWorkerShowcase } from "@/components/sections/DigitalWorkerShowcase";
import { Em, PageHero } from "@/components/ui/PageHero";
import { digitalWorkforce } from "@/lib/home-content";
import { digitalWorkersPage } from "@/lib/pages/digital-workers";

export const metadata: Metadata = {
  title: digitalWorkersPage.meta.title,
  description: digitalWorkersPage.meta.description,
};

export default function DigitalWorkersPage() {
  const { hero, showcase, security } = digitalWorkersPage;

  return (
    <SiteChrome>
      <PageHero
        align="center"
        backgroundImage="/digital-workers/hero.jpg"
        eyebrow={hero.eyebrow}
        title={
          <>
            {hero.titleBefore}
            <Em>{hero.titleHighlight}</Em>
          </>
        }
        lead={hero.lead}
        leadSecondary={
          <ul className="hero-capability-tiles justify-center" aria-label="Highlights">
            {hero.chips.map((chip) => (
              <li key={chip}>{chip}</li>
            ))}
          </ul>
        }
        primaryCta={hero.cta}
        secondaryCta={hero.secondaryCta}
      />
      <DigitalWorkerShowcase
        id={showcase.id}
        eyebrow={showcase.eyebrow}
        heading={
          <>
            {showcase.headingBefore}
            <span className="heading-gradient">{showcase.headingHighlight}</span>
          </>
        }
        lead={showcase.lead}
        offerings={digitalWorkforce.offerings}
      />
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
