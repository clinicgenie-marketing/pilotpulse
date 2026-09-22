import type { Metadata } from "next";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { EcosystemSection } from "@/components/sections/EcosystemSection";
import { InnerFinalCta } from "@/components/pages/InnerFinalCta";
import { TeamCarousel } from "@/components/pages/TeamCarousel";
import { Em, AccentHeading, PageHero } from "@/components/ui/PageHero";
import { YouTubeEmbed } from "@/components/ui/YouTubeEmbed";
import { CONTACT_HREF } from "@/lib/content";
import { aboutPage } from "@/lib/pages/about";
import "./about.css";

export const metadata: Metadata = {
  title: aboutPage.meta.title,
  description: aboutPage.meta.description,
};

function HighlightedLine({ text, highlight }: { text: string; highlight: string }) {
  const index = text.indexOf(highlight);
  if (index < 0) return <p>{text}</p>;

  return (
    <p>
      {text.slice(0, index)}
      <mark className="about-intro-highlight">{highlight}</mark>
      {text.slice(index + highlight.length)}
    </p>
  );
}

export default function AboutPage() {
  const page = aboutPage;

  return (
    <SiteChrome>
      <div className="about-page">
        <PageHero
        backgroundImage="/about/hero.jpg"
        eyebrow={page.hero.eyebrow}
        title={
          <>
            {page.hero.titleBefore}
            <br />
            <Em>{page.hero.titleHighlight}</Em>
          </>
        }
        lead={page.hero.subtitle}
        primaryCta={{ label: "Get a Demo", href: CONTACT_HREF }}
        secondaryCta={page.hero.secondaryCta}
      />

      <section className="about-intro section-pad border-b border-line bg-surface">
        <div className="container-edge about-split">
          <div>
            <h2 className="heading-2">
              AI that understands <Em>how your business runs</Em>
            </h2>
          </div>
          <div className="about-intro-copy">
            <p>{page.hero.paragraphs[0]}</p>
            <HighlightedLine
              text={page.hero.paragraphs[1]}
              highlight="redesign businesses"
            />
            <HighlightedLine
              text={page.hero.paragraphs[2]}
              highlight="help your teams"
            />
          </div>
        </div>
      </section>

      <section
        id="our-story"
        className="about-story section-pad scroll-mt-28 border-b border-line bg-primary-soft/60"
      >
        <div className="container-edge about-split about-story-split">
          <div className="about-story-copy">
            <p className="eyebrow">{page.featuredVideo.eyebrow}</p>
            <h2 className="heading-2 mt-3">
              We Believe AI That <Em>Makes Work Better</Em>
            </h2>
            <p className="mt-3 text-xl font-semibold text-ink">{page.belief.subtitle}</p>
            <p className="lead mt-5">{page.belief.body}</p>
          </div>
          <div className="about-story-video">
            <div className="about-story-media">
              <YouTubeEmbed videoId={page.featuredVideo.videoId} title={page.featuredVideo.title} />
            </div>
            <h3 className="heading-3 about-story-caption">
              <AccentHeading text={page.featuredVideo.heading} accent="people trust" />
            </h3>
            <p className="lead">{page.featuredVideo.lead}</p>
          </div>
        </div>
      </section>

      <section className="about-human section-pad border-b border-line bg-background">
        <div className="container-edge about-split">
          <div>
            <h2 className="heading-2">
              Human-First. <Em>Outcome-Driven.</Em>
            </h2>
            <p className="mt-3 text-xl font-semibold text-ink">{page.humanFirst.subtitle}</p>
          </div>
          <div>
            <p className="lead">{page.humanFirst.body}</p>
            <p className="heading-3 about-human-pull">
              <span className="heading-gradient">{page.humanFirst.pull}</span>
            </p>
          </div>
        </div>
      </section>

      <section className="about-team team-section section-pad border-b border-line bg-background">
        <TeamCarousel
          eyebrow={page.team.eyebrow}
          heading={<AccentHeading text={page.team.heading} accent="operational clarity" />}
          lead={page.team.body}
          people={[...page.leadership.people, ...page.advisors.people]}
        />
      </section>

      <EcosystemSection />
      <InnerFinalCta />
      </div>
    </SiteChrome>
  );
}
