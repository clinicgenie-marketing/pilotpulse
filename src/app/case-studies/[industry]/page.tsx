import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyIndustryHero } from "@/components/pages/CaseStudyIndustryHero";
import { CaseStudyIndustryView } from "@/components/pages/CaseStudyIndustryView";
import { FinalCtaBand } from "@/components/ui/FinalCtaBand";
import { caseStudiesPage, caseStudyIndustries, caseStudyWord, getCaseStudyIndustry } from "@/lib/pages/case-studies";

type IndustryParams = {
  industry: string;
};

export function generateStaticParams() {
  return caseStudyIndustries.map((industry) => ({ industry: industry.id }));
}

export function generateMetadata({ params }: { params: IndustryParams }): Metadata {
  const industry = getCaseStudyIndustry(params.industry);
  if (!industry) return { title: "Case Studies" };

  const count = industry.studies.length;
  return {
    title: `${industry.label} Case Studies`,
    description: `${count} ${industry.label} case ${caseStudyWord(count)} covering the business challenge, AI implementation and outcomes.`,
  };
}

export default function CaseStudyIndustryPage({ params }: { params: IndustryParams }) {
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
            {page.cta.headingLine1}
            <span className="block">{page.cta.headingLine2}</span>
          </>
        }
        headingClassName="max-w-[28ch]"
        body={page.cta.body}
        primaryCta={page.cta.primaryCta}
      />
    </>
  );
}
