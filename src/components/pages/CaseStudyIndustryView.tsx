"use client";

import { useCallback, useId, useLayoutEffect, useState, type KeyboardEvent } from "react";
import { CaseStudyCard } from "@/components/pages/CaseStudyCard";
import { resolveStudySlug, type CaseStudy, type CaseStudyIndustry } from "@/lib/pages/case-studies";

function studyFromHash(studies: readonly CaseStudy[]) {
  const hash = resolveStudySlug(window.location.hash.replace(/^#/, ""));
  return studies.find((study) => study.id === hash);
}

export function CaseStudyIndustryView({ industry }: { industry: CaseStudyIndustry }) {
  const tablistId = useId();
  const [selectedId, setSelectedId] = useState(industry.studies[0].id);

  useLayoutEffect(() => {
    const applyHash = () => {
      const raw = window.location.hash.replace(/^#/, "");
      const next = studyFromHash(industry.studies);
      if (!next) return;
      setSelectedId(next.id);
      if (raw && raw !== next.id) {
        const url = `${window.location.pathname}${window.location.search}#${next.id}`;
        window.history.replaceState(null, "", url);
      }
      document.getElementById(next.id)?.scrollIntoView({ block: "start" });
    };

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

  function onTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
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
    document.getElementById(next.id)?.focus();
  }

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

            return (
              <li key={item.id} role="presentation">
                <button
                  type="button"
                  role="tab"
                  id={item.id}
                  aria-selected={selected}
                  aria-controls={`${item.id}-panel`}
                  tabIndex={selected ? 0 : -1}
                  className={selected ? "is-active" : undefined}
                  onClick={() => select(item.id)}
                  onKeyDown={(event) => onTabKeyDown(event, index)}
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
