import { CTAButton } from "@/components/ui/CTAButton";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { GradientText } from "@/components/ui/GradientText";
import { HeroParallax } from "@/components/ui/HeroParallax";
import { Reveal } from "@/components/ui/Reveal";
import { TechOverlay } from "@/components/ui/TechOverlay";
import { TextLink } from "@/components/ui/TextLink";
import { hero } from "@/lib/content";

export function HeroSection() {
  return (
    <section className="relative min-h-[88vh] overflow-hidden">
      <HeroParallax depth={0.12} className="pointer-events-none absolute inset-0">
        <div aria-hidden="true" className="relative h-full w-full">
          <TechOverlay />
          <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,#05002B_0%,rgba(5,0,43,0.92)_35%,rgba(5,0,43,0.72)_100%)]" />
        </div>
      </HeroParallax>

      <div className="container-edge relative min-h-[88vh] py-14 lg:py-20">
        <div className="grid min-h-[72vh] items-center gap-12 lg:grid-cols-2 lg:gap-14">
          <HeroParallax depth={0.05} className="max-w-xl">
            <Reveal className="flex flex-col items-start gap-6">
              <Eyebrow>{hero.eyebrow}</Eyebrow>
              <h1 className="heading-1">
                {hero.headlineWhite} <GradientText ramp="full">{hero.headlineGradient}</GradientText>
              </h1>
              <p className="max-w-lg text-lg leading-relaxed text-ink-body">{hero.subheadline}</p>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                <CTAButton href={hero.primaryCta.href} display withArrow>
                  {hero.primaryCta.label}
                </CTAButton>
                <TextLink href={hero.secondaryCta.href}>{hero.secondaryCta.label}</TextLink>
              </div>
            </Reveal>
          </HeroParallax>

          <HeroParallax depth={0.08}>
            <Reveal delay={80}>
              <div className="animate-hero-float relative overflow-hidden rounded-3xl border border-hairline bg-panel-card/40 shadow-glow-soft">
                <video
                  src="/hero/pilotpulse-hero-side.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </HeroParallax>
        </div>
      </div>
    </section>
  );
}
