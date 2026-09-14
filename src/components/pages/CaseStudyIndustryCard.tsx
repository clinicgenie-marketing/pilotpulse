import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { industryHref, type CaseStudyIndustry } from "@/lib/pages/case-studies";

export function CaseStudyIndustryCard({ industry }: { industry: CaseStudyIndustry }) {
  const href = industryHref(industry.id);
  const count = industry.studies.length;

  return (
    <article className="h-full">
      <Link href={href} className="surface-card dest-card dest-card-media h-full text-ink">
        <div className="dest-card-photo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={industry.heroImage} alt="" />
        </div>
        <p className="eyebrow">
          {count} case {count === 1 ? "study" : "studies"}
        </p>
        <h2 className="heading-3 mt-2">{industry.label}</h2>
        <ul className="mt-5 flex-1 space-y-2">
          {industry.studies.map((study) => (
            <li key={study.id} className="text-sm leading-relaxed text-ink-muted">
              {study.title}
            </li>
          ))}
        </ul>
        <span className="text-link mt-6">
          <span>View case studies</span>
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </span>
      </Link>
    </article>
  );
}
