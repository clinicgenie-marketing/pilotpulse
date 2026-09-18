import type { Metadata } from "next";
import { CaseStudiesHeroPanel } from "@/components/pages/CaseStudiesHeroPanel";
import { CaseStudyIndustryCard } from "@/components/pages/CaseStudyIndustryCard";
import { FinalCtaBand } from "@/components/ui/FinalCtaBand";
import { AccentHeading, PageHero } from "@/components/ui/PageHero";
import { caseStudiesPage, caseStudyIndustries } from "@/lib/pages/case-studies";

export const metadata: Metadata = {
  title: caseStudiesPage.meta.title,
  description: caseStudiesPage.meta.description,
};

export default function CaseStudiesPage() {
  const page = caseStudiesPage;

  return (
    <>
      <PageHero
        eyebrow={page.hero.eyebrow}
        title={page.hero.titleHighlight}
        lead={page.hero.lead}
        primaryCta={page.hero.cta}
        secondaryCta={page.hero.secondaryCta}
        aside={<CaseStudiesHeroPanel />}
      />

      <section id="browse" className="section-pad scroll-mt-28 border-b border-line bg-background">
        <div className="container-edge">
          <p className="eyebrow">Industries</p>
          <h2 className="heading-2 mt-3 max-w-[18ch]">
            <AccentHeading text="Choose a vertical." accent="a vertical." />
          </h2>
          <p className="lead mt-4 max-w-[65ch]">
            Each page covers the business challenge, the AI implementation and the outcomes for that industry.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {caseStudyIndustries.map((industry) => (
              <CaseStudyIndustryCard key={industry.id} industry={industry} />
            ))}
          </div>
        </div>
      </section>

      <FinalCtaBand
        heading={
          <>
            <AccentHeading text={page.cta.headingLine1} accent="looks familiar?" />
            <span className="block">
              <AccentHeading text={page.cta.headingLine2} accent="in yours." />
            </span>
          </>
        }
        headingClassName="max-w-[28ch]"
        body={page.cta.body}
        primaryCta={page.cta.primaryCta}
      />
    </>
  );
}
