import type { Metadata } from "next";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { EcosystemSection } from "@/components/sections/EcosystemSection";
import { InnerFinalCta } from "@/components/pages/InnerFinalCta";
import { ProfileCard } from "@/components/pages/ProfileCard";
import { Em, PageHero } from "@/components/ui/PageHero";
import { YouTubeEmbed } from "@/components/ui/YouTubeEmbed";
import { aboutPage } from "@/lib/pages/about";

export const metadata: Metadata = {
  title: aboutPage.meta.title,
  description: aboutPage.meta.description,
};

export default function AboutPage() {
  const page = aboutPage;

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
        lead={<p className="text-xl font-semibold text-ink">{page.hero.subtitle}</p>}
        leadSecondary={
          <div className="space-y-4">
            {page.hero.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        }
      />

      <section className="section-pad border-b border-line bg-surface">
        <div className="container-edge grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="heading-2">{page.humanFirst.heading}</h2>
            <p className="mt-3 text-xl font-semibold text-ink">{page.humanFirst.subtitle}</p>
          </div>
          <div>
            <p className="lead">{page.humanFirst.body}</p>
            <p className="heading-3 mt-6 text-primary">{page.humanFirst.pull}</p>
          </div>
        </div>
      </section>

      <section className="section-pad border-b border-line bg-background">
        <div className="container-edge">
          <div className="mx-auto max-w-[54rem] text-center">
            <p className="eyebrow">{page.featuredVideo.eyebrow}</p>
            <h2 className="heading-2 mt-3">{page.featuredVideo.heading}</h2>
            <p className="lead mx-auto mt-4 max-w-[54ch]">{page.featuredVideo.lead}</p>
          </div>
          <div className="mx-auto mt-10 max-w-[52rem]">
            <YouTubeEmbed videoId={page.featuredVideo.videoId} title={page.featuredVideo.title} />
          </div>
        </div>
      </section>

      <section className="section-pad border-b border-line bg-primary-soft/60">
        <div className="container-edge grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <p className="lead order-2 lg:order-1">{page.belief.body}</p>
          <div className="order-1 lg:order-2">
            <h2 className="heading-2">{page.belief.heading}</h2>
            <p className="mt-3 text-xl font-semibold text-ink">{page.belief.subtitle}</p>
          </div>
        </div>
      </section>

      <section className="section-pad border-b border-line bg-background">
        <div className="container-edge">
          <div className="mx-auto max-w-[54rem] text-center">
            <p className="eyebrow">{page.team.eyebrow}</p>
            <h2 className="heading-2 mt-3">{page.team.heading}</h2>
            <p className="lead mx-auto mt-4">{page.team.body}</p>
          </div>

          <p className="eyebrow mt-16">{page.leadership.eyebrow}</p>
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {page.leadership.people.map((person) => (
              <li key={person.name}>
                <ProfileCard {...person} />
              </li>
            ))}
          </ul>

          <p className="eyebrow mt-16">{page.advisors.eyebrow}</p>
          <ul className="mx-auto mt-6 grid max-w-3xl gap-4 md:grid-cols-2">
            {page.advisors.people.map((person) => (
              <li key={person.name}>
                <ProfileCard {...person} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <EcosystemSection />
      <InnerFinalCta />
    </SiteChrome>
  );
}
