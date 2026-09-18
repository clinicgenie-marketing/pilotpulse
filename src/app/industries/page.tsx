import type { Metadata } from "next";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { IndustrySection } from "@/components/pages/IndustrySection";
import { IndustryStack } from "@/components/pages/IndustryStack";
import { AnchorNav } from "@/components/ui/AnchorNav";
import { FinalCtaBand } from "@/components/ui/FinalCtaBand";
import { Em, AccentHeading, PageHero } from "@/components/ui/PageHero";
import { industriesNav, industriesPage } from "@/lib/pages/industries";

export const metadata: Metadata = {
  title: industriesPage.meta.title,
  description: industriesPage.meta.description,
};

export default function IndustriesPage() {
  const page = industriesPage;

  return (
    <SiteChrome>
      <PageHero
        backgroundImage="/industries/hero.jpg"
        title={
          <>
            {page.hero.titleBefore}
            <Em>{page.hero.titleHighlight}</Em>
          </>
        }
        lead={page.hero.lead}
        primaryCta={page.hero.cta}
      />
      <AnchorNav items={industriesNav} ariaLabel="Industries" />
      <IndustryStack>
        {page.industries.map((industry, index) => (
          <IndustrySection key={industry.id} industry={industry} reverse={index % 2 === 1} />
        ))}
      </IndustryStack>
      <FinalCtaBand
        heading={
          <>
            {page.cta.headingLine1}
            <span className="block whitespace-nowrap">
              <AccentHeading text={page.cta.headingLine2} accent="still be built." />
            </span>
          </>
        }
        headingClassName="max-w-[36ch]"
        body={page.cta.body}
        primaryCta={page.cta.primaryCta}
      />
    </SiteChrome>
  );
}
