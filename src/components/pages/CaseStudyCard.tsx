"use client";

import { useState } from "react";
import { CaseStudyVisual, type CaseStudyTab } from "@/components/pages/CaseStudyVisual";
import { TickList } from "@/components/pages/SolutionMocks";
import type { CaseStudy } from "@/lib/pages/case-studies";

const TABS: { id: CaseStudyTab; label: string }[] = [
  { id: "challenge", label: "Business challenge" },
  { id: "implementation", label: "AI implementation" },
  { id: "outcomes", label: "Business outcomes" },
];

const TITLE_BREAKS: Record<string, readonly [string, string]> = {
  "Last-Mile Logistics Customer Support": ["Last-Mile Logistics", "Customer Support"],
  "Air Cargo Quotation Automation": ["Air Cargo", "Quotation Automation"],
  "Construction Project Intelligence Hub": ["Construction Project", "Intelligence Hub"],
  "Proactive AI Customer Engagement": ["Proactive AI", "Customer Engagement"],
  "AI Candidate Onboarding After Hiring": ["AI Candidate Onboarding", "After Hiring"],
};

function CaseStudyTitle({ title }: { title: string }) {
  const named = TITLE_BREAKS[title];
  if (named) {
    return (
      <>
        {named[0]}
        <span className="block">{named[1]}</span>
      </>
    );
  }

  const amp = title.lastIndexOf(" & ");
  if (amp !== -1) {
    return (
      <>
        {title.slice(0, amp)}
        <span className="block">& {title.slice(amp + 3)}</span>
      </>
    );
  }

  return <>{title}</>;
}

export function CaseStudyCard({
  study,
  industryLabel,
  index = 0,
}: {
  study: CaseStudy;
  industryLabel: string;
  index?: number;
}) {
  const [tab, setTab] = useState<CaseStudyTab>("challenge");
  const supportNotes = [study.implementationNote, study.note].filter(Boolean);
  const tabs = study.outcomes ? TABS : TABS.filter((item) => item.id !== "outcomes");

  return (
    <article id={study.id} className="case-study scroll-mt-36">
      <header className="case-study-head">
        <p className="case-study-kicker">
          {industryLabel} · Case study
        </p>
        <h2 className="case-study-title">
          <CaseStudyTitle title={study.title} />
        </h2>
        <p className="case-study-industry">{study.industryLine}</p>
      </header>

      <div
        className={`case-study-panel${index % 2 === 1 ? " is-flipped" : ""}`}
        id={`${study.id}-panel`}
        role="tabpanel"
        aria-labelledby={`${study.id}-${tab}-tab`}
      >
        <div className="case-study-visual-column">
          <div className="case-study-tabs" role="tablist" aria-label={`${study.title} sections`}>
            {tabs.map((item) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                id={`${study.id}-${item.id}-tab`}
                aria-selected={tab === item.id}
                aria-controls={`${study.id}-panel`}
                className={`case-study-tab${tab === item.id ? " is-active" : ""}`}
                onClick={() => setTab(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="case-study-visual-slot">
            <CaseStudyVisual studyId={study.id} tab={tab} />
            <p className="case-study-visual-caption">Illustrative interface</p>
          </div>
        </div>
        <div className="case-study-copy-slot">
          {tab === "challenge"
            ? study.challenge.map((paragraph) => (
                <p key={paragraph} className="case-study-copy">
                  {paragraph}
                </p>
              ))
            : null}
          {tab === "implementation" ? (
            <TickList items={study.implementation} className="case-study-checklist mt-0 space-y-0" />
          ) : null}
          {tab === "outcomes" && study.outcomes ? (
            <TickList items={study.outcomes} className="case-study-checklist mt-0 space-y-0" />
          ) : null}
        </div>
      </div>

      {supportNotes.map((note) => (
        <p key={note} className="case-study-note">
          {note}
        </p>
      ))}
    </article>
  );
}
