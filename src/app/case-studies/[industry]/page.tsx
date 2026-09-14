import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyCard } from "@/components/pages/CaseStudyCard";
import { CaseStudyIndustryHero } from "@/components/pages/CaseStudyIndustryHero";
import { FinalCtaBand } from "@/components/ui/FinalCtaBand";
import { caseStudiesPage, caseStudyIndustries, getCaseStudyIndustry } from "@/lib/pages/case-studies";

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
    description: `${count} ${industry.label} case ${count === 1 ? "study" : "studies"} covering the business challenge, AI implementation and outcomes.`,
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
        lead={`${count} case ${count === 1 ? "study" : "studies"} covering the business challenge, the AI implementation and the outcomes.`}
        image={industry.heroImage}
      />
      <section className="border-b border-line bg-background">
        <div className="container-edge">
          {industry.studies.map((study, index) => (
            <CaseStudyCard key={study.id} study={study} industryLabel={industry.label} index={index} />
          ))}
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
