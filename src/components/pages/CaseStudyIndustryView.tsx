"use client";

import { useCallback, useEffect, useId, useState } from "react";
import { CaseStudyCard } from "@/components/pages/CaseStudyCard";
import type { CaseStudy, CaseStudyIndustry } from "@/lib/pages/case-studies";

function studyFromHash(studies: readonly CaseStudy[]) {
  const hash = window.location.hash.replace(/^#/, "");
  return studies.find((study) => study.id === hash) ?? studies[0];
}

export function CaseStudyIndustryView({ industry }: { industry: CaseStudyIndustry }) {
  const tablistId = useId();
  const [selectedId, setSelectedId] = useState(industry.studies[0].id);

  useEffect(() => {
    const applyHash = () => setSelectedId(studyFromHash(industry.studies).id);
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, [industry.studies]);

  const select = useCallback((id: string) => {
    setSelectedId(id);
    const url = `${window.location.pathname}${window.location.search}#${id}`;
    window.history.replaceState(null, "", url);
  }, []);

  const selectedIndex = Math.max(
    0,
    industry.studies.findIndex((study) => study.id === selectedId),
  );
  const study = industry.studies[selectedIndex];

  return (
    <>
      <nav className="case-study-jump" aria-label={`Studies in ${industry.label}`}>
        <p className="case-study-jump-label">In this industry</p>
        <ul
          className="case-study-jump-list"
          role="tablist"
          aria-label={industry.label}
          id={tablistId}
        >
          {industry.studies.map((item, index) => {
            const selected = item.id === study.id;
            const tabId = `${item.id}-tab`;

            return (
              <li key={item.id} role="presentation">
                <button
                  type="button"
                  role="tab"
                  id={tabId}
                  aria-selected={selected}
                  aria-controls={item.id}
                  tabIndex={selected ? 0 : -1}
                  className={selected ? "is-active" : undefined}
                  onClick={() => select(item.id)}
                  onKeyDown={(event) => {
                    if (
                      event.key !== "ArrowRight" &&
                      event.key !== "ArrowLeft" &&
                      event.key !== "Home" &&
                      event.key !== "End"
                    ) {
                      return;
                    }

                    event.preventDefault();
                    const last = industry.studies.length - 1;
                    const nextIndex =
                      event.key === "Home"
                        ? 0
                        : event.key === "End"
                          ? last
                          : event.key === "ArrowRight"
                            ? (index + 1) % industry.studies.length
                            : (index - 1 + industry.studies.length) % industry.studies.length;
                    const next = industry.studies[nextIndex];
                    select(next.id);
                    document.getElementById(`${next.id}-tab`)?.focus();
                  }}
                >
                  {item.title}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
      <CaseStudyCard key={study.id} study={study} />
    </>
  );
}
