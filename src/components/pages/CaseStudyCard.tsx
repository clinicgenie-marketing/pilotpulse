import { CaseStudyVisual, type CaseStudyTab } from "@/components/pages/CaseStudyVisual";
import { TickList } from "@/components/pages/SolutionMocks";
import type { CaseStudy } from "@/lib/pages/case-studies";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <article
      id={`${study.id}-panel`}
      className="case-study is-featured"
      role="tabpanel"
      aria-labelledby={study.id}
    >
      <section className="case-study-band is-intro" aria-labelledby={`${study.id}-title`}>
        <div className="case-study-band-copy">
          <h2 className="case-study-title" id={`${study.id}-title`}>
            <span>{study.titleLines[0]}</span>
            <span>{study.titleLines[1]}</span>
          </h2>
          {study.challenge.map((paragraph) => (
            <p key={paragraph} className="case-study-copy">
              {paragraph}
            </p>
          ))}
          <div className="case-study-audience">
            <p className="case-study-industry-label">Who this is for</p>
            <p className="case-study-industry-value">{study.industryCaption}</p>
          </div>
        </div>
        <StudyVisual studyId={study.id} tab="challenge" />
      </section>

      <section className="case-study-band is-implementation" aria-labelledby={`${study.id}-implementation`}>
        <StudyVisual studyId={study.id} tab="implementation" />
        <div className="case-study-band-copy">
          <h3 className="case-study-band-heading" id={`${study.id}-implementation`}>
            <span>AI</span>
            <span>Implementation</span>
          </h3>
          <TickList items={study.implementation} className="case-study-checklist mt-0 space-y-0" />
          {study.implementationNote ? <p className="case-study-note">{study.implementationNote}</p> : null}
        </div>
      </section>

      {study.outcomes ? (
        <section className="case-study-band is-outcomes" aria-labelledby={`${study.id}-outcomes`}>
          <div className="case-study-band-copy">
            <h3 className="case-study-band-heading" id={`${study.id}-outcomes`}>
              <span>Business</span>
              <span>Outcomes</span>
            </h3>
            <TickList items={study.outcomes} className="case-study-checklist mt-0 space-y-0" />
          </div>
          <StudyVisual studyId={study.id} tab="outcomes" />
        </section>
      ) : null}

      {study.note ? <p className="case-study-note">{study.note}</p> : null}
    </article>
  );
}

function StudyVisual({ studyId, tab }: { studyId: string; tab: CaseStudyTab }) {
  return (
    <div className="case-study-band-box">
      <CaseStudyVisual studyId={studyId} tab={tab} />
    </div>
  );
}
