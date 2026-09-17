import type { Metadata } from "next";
import Image from "next/image";
import { Calendar, MessageCircle, RefreshCw } from "lucide-react";
import { SiteChrome } from "@/components/layout/SiteChrome";
import {
  CandidateShortlistMock,
  QuotationMock,
  TickList,
} from "@/components/pages/SolutionMocks";
import { DocumentIntelligenceCard } from "@/components/pages/DocumentIntelligenceCard";
import { ThinkingAiOrbit } from "@/components/pages/ThinkingAiOrbit";
import { SolutionsHeroPreview } from "@/components/sections/SolutionsHeroPreview";
import { AnchorNav } from "@/components/ui/AnchorNav";
import { FinalCtaBand } from "@/components/ui/FinalCtaBand";
import { Em, PageHero } from "@/components/ui/PageHero";
import { solutionsNav, solutionsPage } from "@/lib/pages/solutions";

export const metadata: Metadata = {
  title: solutionsPage.meta.title,
  description: solutionsPage.meta.description,
};

const ENGAGEMENT_ICONS = [MessageCircle, Calendar, RefreshCw] as const;

export default function SolutionsPage() {
  const page = solutionsPage;

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
          <ul className="flex flex-wrap gap-1.5" aria-label="Highlights">
            {page.hero.chips.map((chip) => (
              <li key={chip} className="trust-chip">
                {chip}
              </li>
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

      <section id={page.engagement.id} className="section-pad scroll-mt-28 border-b border-line bg-surface">
        <div className="container-edge">
          <p className="eyebrow">{page.engagement.eyebrow}</p>
          <h2 className="heading-2 mt-4">
            {page.engagement.headingLine1}
            <span className="block">{page.engagement.headingLine2}</span>
          </h2>
          <p className="lead mt-4 max-w-[65ch]">{page.engagement.lead}</p>
          <ul className="mt-12 grid gap-8 md:grid-cols-3">
            {page.engagement.features.map((feature, index) => {
              const Icon = ENGAGEMENT_ICONS[index];
              return (
                <li key={feature.title}>
                  <span className="grid size-10 place-items-center rounded-lg bg-primary-soft">
                    <Icon className="h-5 w-5 text-primary" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <h3 className="mt-3 text-xl font-semibold text-ink">{feature.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-ink">{feature.body}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section id={page.sales.id} className="section-pad scroll-mt-28 border-b border-line bg-background">
        <div className="container-edge grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <QuotationMock />
          <div>
            <p className="eyebrow">{page.sales.eyebrow}</p>
            <h2 className="heading-2 mt-4">{page.sales.heading}</h2>
            <div className="mt-8 space-y-8">
              {page.sales.blocks.map((block) => (
                <div key={block.title}>
                  <h3 className="text-xl font-semibold text-ink">{block.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-ink">{block.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id={page.support.id} className="section-pad scroll-mt-28 border-b border-line bg-surface">
        <div className="container-edge">
          <p className="eyebrow">{page.support.eyebrow}</p>
          <h2 className="heading-2 mt-4 max-w-[22ch]">{page.support.heading}</h2>
          <div className="mt-10 max-w-[65ch]">
            <h3 className="text-xl font-semibold text-ink">{page.support.handling.title}</h3>
            <p className="mt-2 text-base leading-relaxed text-ink">{page.support.handling.body}</p>
          </div>
          <div className="mt-12 grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,32rem)] lg:gap-16">
            <div>
              <h3 className="text-xl font-semibold text-ink">{page.support.documents.title}</h3>
              <p className="mt-2 text-base text-ink">{page.support.documents.lead}</p>
              <TickList items={page.support.documents.bullets} />
              <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-ink">
                {page.support.documents.note}
              </p>
            </div>
            <DocumentIntelligenceCard
              eyebrow={page.support.stat.eyebrow}
              value={page.support.stat.value}
              unit={page.support.stat.unit}
            />
          </div>
        </div>
      </section>

      <section id={page.hr.id} className="section-pad scroll-mt-28 border-b border-line bg-background">
        <div className="container-edge">
          <p className="eyebrow">{page.hr.eyebrow}</p>
          <h2 className="heading-3 mt-4 max-w-[22ch] text-primary">{page.hr.pull}</h2>
          <div className="mt-10 grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,28rem)] lg:gap-16">
            <div>
              <h3 className="text-xl font-semibold text-ink">{page.hr.recruitment.title}</h3>
              <TickList items={page.hr.recruitment.bullets} />
              <p className="mt-4 text-base leading-relaxed text-ink">{page.hr.recruitment.body}</p>
            </div>
            <CandidateShortlistMock />
          </div>
          <div className="mt-12 max-w-[65ch]">
            <h3 className="text-xl font-semibold text-ink">{page.hr.dataEntry.title}</h3>
            <p className="mt-2 text-base leading-relaxed text-ink">{page.hr.dataEntry.body}</p>
          </div>
        </div>
      </section>

      <section id={page.projects.id} className="section-pad scroll-mt-28 border-b border-line bg-surface">
        <div className="container-edge grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Image
            src="/solutions/follow-up.png"
            alt="Follow-ups created from WhatsApp, email, and chat conversations"
            width={1536}
            height={1024}
            className="h-auto w-full"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          <div>
            <p className="eyebrow">{page.projects.eyebrow}</p>
            <h2 className="heading-2 mt-4">{page.projects.heading}</h2>
            <p className="lead mt-4">{page.projects.body}</p>
          </div>
        </div>
      </section>

      <section id={page.advanced.id} className="scroll-mt-28 overflow-hidden border-b border-line bg-background">
        <ThinkingAiOrbit
          eyebrow={page.advanced.eyebrow}
          heading={
            <>
              <span>Thinking</span>
              <span>AI Agents</span>
            </>
          }
          lead={page.advanced.lead}
          examples={page.advanced.examples}
        />
      </section>

      <FinalCtaBand
        heading={page.cta.heading}
        body={page.cta.body}
        primaryCta={page.cta.primaryCta}
      />
    </SiteChrome>
  );
}
