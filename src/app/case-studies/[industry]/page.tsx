import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { CaseStudyIndustryHero } from "@/components/pages/CaseStudyIndustryHero";
import { CaseStudyIndustryView } from "@/components/pages/CaseStudyIndustryView";
import { FinalCtaBand } from "@/components/ui/FinalCtaBand";
import { AccentHeading } from "@/components/ui/PageHero";
import {
  caseStudiesPage,
  caseStudyIndustries,
  caseStudyWord,
  getCaseStudyIndustry,
  getIndustrySlugRedirect,
} from "@/lib/pages/case-studies";

type IndustryParams = {
  industry: string;
};

export function generateStaticParams() {
  return caseStudyIndustries.map((industry) => ({ industry: industry.id }));
}

export function generateMetadata({ params }: { params: IndustryParams }): Metadata {
  const redirected = getIndustrySlugRedirect(params.industry);
  if (redirected) return { title: "Case Studies" };

  const industry = getCaseStudyIndustry(params.industry);
  if (!industry) return { title: "Case Studies" };

  const count = industry.studies.length;
  return {
    title: `${industry.label} Case Studies`,
    description: `${count} ${industry.label} case ${caseStudyWord(count)} covering the business challenge, AI implementation and outcomes.`,
  };
}

export default function CaseStudyIndustryPage({ params }: { params: IndustryParams }) {
  const redirected = getIndustrySlugRedirect(params.industry);
  if (redirected) redirect(`/case-studies/${redirected}`);

  const industry = getCaseStudyIndustry(params.industry);
  if (!industry) notFound();

  const count = industry.studies.length;
  const page = caseStudiesPage;

  return (
    <>
      <CaseStudyIndustryHero
        title={industry.label}
        lead={`${count} case ${caseStudyWord(count)} covering the business challenge, the AI implementation and the outcomes.`}
        image={industry.heroImage}
        imagePosition={industry.heroImagePosition}
      />
      <section className="bg-background">
        <div className="container-edge">
          <CaseStudyIndustryView industry={industry} />
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
