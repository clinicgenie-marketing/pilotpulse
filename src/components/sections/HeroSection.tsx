import { CTAButton } from "@/components/ui/CTAButton";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { GradientText } from "@/components/ui/GradientText";
import { HeroParallax } from "@/components/ui/HeroParallax";
import { Reveal } from "@/components/ui/Reveal";
import { TextLink } from "@/components/ui/TextLink";
import { hero } from "@/lib/content";

export function HeroSection() {
  return (
    <section className="relative flex h-svh min-h-svh flex-col overflow-hidden bg-[#020A3A]">
      <div className="container-edge relative flex flex-1 items-center pt-16 md:pt-20">
        <div className="grid w-full items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <HeroParallax depth={0.05} className="flex max-w-xl items-center">
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

          <HeroParallax depth={0.08} className="flex items-center justify-center lg:justify-end">
            <Reveal delay={80} className="w-full">
              <div className="animate-hero-float relative">
                <video
                  src="/hero/pilotpulse-hero-side.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover"
                />
                {/* Soft edge fade into hero bg to hide video compression outline */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0"
                  style={{
                    backgroundImage: [
                      "linear-gradient(to right, #020A3A 0%, transparent 5%)",
                      "linear-gradient(to left, #020A3A 0%, transparent 5%)",
                      "linear-gradient(to bottom, #020A3A 0%, transparent 5%)",
                      "linear-gradient(to top, #020A3A 0%, transparent 5%)",
                    ].join(", "),
                  }}
                />
              </div>
            </Reveal>
          </HeroParallax>
        </div>
      </div>
    </section>
  );
}
