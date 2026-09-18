import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { caseStudyWord, industryHref, studyHref, type CaseStudyIndustry } from "@/lib/pages/case-studies";

function studyLabel(title: string) {
  return title.replace(/^Proactive AI /, "Proactive ").replace(/^AI /, "");
}

export function CaseStudyIndustryCard({ industry }: { industry: CaseStudyIndustry }) {
  const href = industryHref(industry.id);
  const count = industry.studies.length;

  return (
    <article className="cs-industry-card">
      <Link href={href} className="cs-industry-photo" aria-hidden="true" tabIndex={-1}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={industry.heroImage}
          alt=""
          style={industry.heroImagePosition ? { objectPosition: industry.heroImagePosition } : undefined}
        />
      </Link>

      <div className="cs-industry-body">
        <div className="cs-industry-top">
          <h2 className="cs-industry-title">
            <Link href={href}>{industry.label}</Link>
          </h2>
          <p className="cs-industry-count">
            {count} {caseStudyWord(count)}
          </p>
        </div>

        <p className="cs-industry-blurb">{industry.blurb}</p>

        <ul className="cs-industry-studies" aria-label={`Studies in ${industry.label}`}>
          {industry.studies.map((study) => (
            <li key={study.id}>
              <Link href={studyHref(industry.id, study.id)}>
                <span>{studyLabel(study.title)}</span>
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>

        <Link href={href} className="cs-industry-cta">
          <span>View all studies</span>
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
