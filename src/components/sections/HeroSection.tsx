import Image from "next/image";
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
      {/* Background: orb + tech overlay */}
      <HeroParallax
        depth={0.15}
        className="pointer-events-none absolute inset-0 flex items-center justify-end"
      >
        <div aria-hidden="true" className="relative h-full w-full lg:w-[75%]">
          <TechOverlay />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, #05002B 0%, rgba(5,0,43,0.85) 35%, rgba(5,0,43,0.2) 70%, transparent 100%)",
            }}
          />
          <div className="animate-hero-float absolute right-[-10%] top-1/2 w-[130%] -translate-y-1/2 lg:right-[-5%] lg:w-[110%]">
            <Image
              src="/images/hero-orb-hand.png"
              alt=""
              width={1376}
              height={768}
              priority
              sizes="(min-width: 1024px) 75vw, 130vw"
              className="h-auto w-full opacity-90"
            />
          </div>
        </div>
      </HeroParallax>

      {/* Foreground copy */}
      <div className="container-edge relative flex min-h-[88vh] items-center">
        <HeroParallax depth={0.05} className="max-w-xl py-20 lg:py-28">
          <Reveal className="flex flex-col items-start gap-6">
            <Eyebrow>{hero.eyebrow}</Eyebrow>
            <h1 className="heading-1">
              {hero.headlineWhite}{" "}
              <GradientText ramp="full" className="block">
                {hero.headlineGradient}
              </GradientText>
            </h1>
            <p className="max-w-lg text-lg leading-relaxed text-ink-body">
              {hero.subheadline}
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
              <CTAButton href={hero.primaryCta.href} display withArrow>
                {hero.primaryCta.label}
              </CTAButton>
              <TextLink href={hero.secondaryCta.href}>{hero.secondaryCta.label}</TextLink>
            </div>
          </Reveal>
        </HeroParallax>
      </div>
    </section>
  );
}
