import Link from "next/link";
import { caseStudyCount, caseStudyIndustries, industryHref } from "@/lib/pages/case-studies";

export function CaseStudiesHeroPanel() {
  return (
    <aside
      className="support-stat case-studies-hero-panel"
      aria-label={`${caseStudyCount} case studies across six industries`}
    >
      <div className="support-stat-copy">
        <p className="support-stat-label">Across six industries</p>
        <p className="support-stat-value">{caseStudyCount}</p>
        <p className="support-stat-unit">case studies in production workflows</p>
      </div>

      <ul className="case-studies-hero-list">
        {caseStudyIndustries.map((industry) => (
          <li key={industry.id}>
            <Link href={industryHref(industry.id)}>{industry.label}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
