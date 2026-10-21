import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { CandidateShortlistMock, QuotationMock, TickList } from "@/components/pages/SolutionMocks";
import { DocumentIntelligenceCard } from "@/components/pages/DocumentIntelligenceCard";
import { ThinkingAiOrbit } from "@/components/pages/ThinkingAiOrbit";
import { SolutionsHeroPreview } from "@/components/sections/SolutionsHeroPreview";
import { AnchorNav } from "@/components/ui/AnchorNav";
import { FinalCtaBand } from "@/components/ui/FinalCtaBand";
import { Em, AccentHeading, PageHero } from "@/components/ui/PageHero";
import { digitalWorkforce, type DigitalWorkerOffering } from "@/lib/home-content";
import { solutionsNav, solutionsPage } from "@/lib/pages/solutions";

export const metadata: Metadata = {
  title: solutionsPage.meta.title,
  description: solutionsPage.meta.description,
};

const WORKER_ASIDES: Partial<Record<DigitalWorkerOffering["id"], ReactNode>> = {
  sales: <QuotationMock />,
  recruitment: <CandidateShortlistMock />,
};

function WorkerSection({ offering, wash }: { offering: DigitalWorkerOffering; wash: string }) {
  const aside = WORKER_ASIDES[offering.id];

  return (
    <section id={offering.id} className={`section-pad scroll-mt-28 border-b border-line ${wash}`}>
      <div
        className={`container-edge ${aside ? "grid items-start gap-10 lg:grid-cols-2 lg:gap-16" : "max-w-[72ch]"}`}
      >
        <div>
          <p className="eyebrow">{offering.title}</p>
          <h2 className="heading-2 mt-4">{offering.headline}</h2>
          <p className="mt-4 text-base font-semibold leading-relaxed text-ink">{offering.purpose}</p>
          <p className="lead mt-4">{offering.does}</p>
          <TickList items={offering.bullets} />
          {offering.channels ? (
            <p className="mt-5 text-sm leading-relaxed text-ink-muted">Channels · {offering.channels}</p>
          ) : null}
          <p className="mt-4 text-base leading-relaxed text-ink">
            <span className="font-semibold">Examples. </span>
            {offering.examples.join(" ")}
          </p>
        </div>
        {aside}
      </div>
    </section>
  );
}

export default function SolutionsPage() {
  const page = solutionsPage;
  const retained = page.retained;

  return (
    <SiteChrome>
      <PageHero
        eyebrow={page.hero.eyebrow}
        title={
          <>
            {page.hero.titleBefore}
            <Em>{page.hero.titleHighlight}</Em>
          </>
        }
        lead={page.hero.lead}
        leadSecondary={
          <ul className="hero-capability-tiles" aria-label="Capabilities">
            {page.hero.capabilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        }
        primaryCta={page.hero.cta}
        secondaryCta={page.hero.secondaryCta}
        aside={
          <SolutionsHeroPreview
            name={page.hero.preview.name}
            status={page.hero.preview.status}
            initials={page.hero.preview.initials}
          />
        }
      />
      <AnchorNav items={solutionsNav} ariaLabel="Solutions sections" />

      {digitalWorkforce.offerings.map((offering, index) => (
        <WorkerSection
          key={offering.id}
          offering={offering}
          wash={index % 2 === 0 ? "bg-surface" : "bg-background"}
        />
      ))}

      <section
        id={retained.documents.id}
        className="section-pad scroll-mt-28 border-b border-line bg-surface"
      >
        <div className="container-edge grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,32rem)] lg:gap-16">
          <div>
            <h2 className="heading-2">{retained.documents.title}</h2>
            <p className="mt-2 text-base text-ink">{retained.documents.lead}</p>
            <TickList items={retained.documents.bullets} />
            <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-ink">{retained.documents.note}</p>
            <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-ink">{retained.training}</p>
            <h3 className="mt-8 text-xl font-semibold text-ink">{retained.dataEntry.title}</h3>
            <p className="mt-2 text-base leading-relaxed text-ink">{retained.dataEntry.body}</p>
          </div>
          <DocumentIntelligenceCard
            eyebrow={retained.documents.stat.eyebrow}
            value={retained.documents.stat.value}
            unit={retained.documents.stat.unit}
          />
        </div>
      </section>

      <section id={retained.advanced.id} className="scroll-mt-28 overflow-hidden border-b border-line bg-background">
        <ThinkingAiOrbit
          eyebrow={retained.advanced.eyebrow}
          heading={
            <>
              <span className="heading-gradient">Thinking</span>
              <span> AI Agents</span>
            </>
          }
          lead={retained.advanced.lead}
          examples={retained.advanced.examples}
        />
      </section>

      <FinalCtaBand
        heading={<AccentHeading text={page.cta.heading} accent="Better Experiences?" />}
        body={page.cta.body}
        primaryCta={page.cta.primaryCta}
      />
    </SiteChrome>
  );
}
