import Image from "next/image";
import { CTAButton } from "@/components/ui/CTAButton";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { GradientText } from "@/components/ui/GradientText";
import { HeroParallax } from "@/components/ui/HeroParallax";
import { Reveal } from "@/components/ui/Reveal";
import { TechOverlay } from "@/components/ui/TechOverlay";
import { TextLink } from "@/components/ui/TextLink";
import { hero } from "@/lib/content";
import { Video } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[88vh] overflow-hidden">
      {/* Background: orb + tech overlay */}
      <HeroParallax
        depth={0.15}
        className="pointer-events-none absolute inset-0"
      >
        <div aria-hidden="true" className="relative h-full w-full">
          <TechOverlay />
          <div
            className="absolute inset-0 z-10"
            style={{
              background:
                "linear-gradient(90deg, #05002B 0%, rgba(5,0,43,0.88) 28%, rgba(5,0,43,0.35) 52%, transparent 72%)",
            }}
          />
          <div className="animate-hero-float absolute inset-0 flex items-center justify-end">
            <video
              src="/hero/pilotpulse-hero.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="object-cover object-right opacity-90 scale-[0.65] origin-right"
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
