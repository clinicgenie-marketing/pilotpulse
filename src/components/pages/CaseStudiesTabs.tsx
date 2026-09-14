"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { caseStudyIndustries, industryHref } from "@/lib/pages/case-studies";

export function CaseStudiesTabs() {
  const pathname = usePathname();

  return (
    <nav className="case-studies-tabs" aria-label="Case study industries">
      <div className="container-edge">
        <ul className="case-studies-tabs-list">
          {caseStudyIndustries.map((industry) => {
            const href = industryHref(industry.id);
            const current = pathname === href;

            return (
              <li key={industry.id}>
                <Link
                  href={href}
                  className={`case-studies-tabs-link${current ? " is-active" : ""}`}
                  aria-current={current ? "page" : undefined}
                >
                  {industry.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
