import Image from "next/image";
import { CTAButton } from "@/components/ui/CTAButton";
import { GradientText } from "@/components/ui/GradientText";
import { Reveal } from "@/components/ui/Reveal";
import { hero } from "@/lib/content";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Orb-in-hand artwork from the reference — bleeds off the right edge */}
      <div
        aria-hidden="true"
        className="pointer-events-none relative mx-auto -mt-4 w-[125%] max-w-none sm:w-[105%] lg:absolute lg:right-[-259px] lg:top-[-40px] lg:mt-0 lg:w-[1456px]"
      >
        <Image
          src="/images/hero-orb-hand.png"
          alt=""
          width={1376}
          height={768}
          priority
          sizes="(min-width: 1024px) 1456px, 110vw"
          className="h-auto w-full"
        />
      </div>

      <div className="container-edge relative">
        <div className="flex max-w-[46rem] flex-col items-start gap-7 pb-20 pt-2 sm:pb-24 lg:pb-24 lg:pt-[23.75rem]">
          <Reveal>
            <h1 className="heading-1">
              {hero.headlineWhite}{" "}
              <GradientText ramp="full" className="block">
                {hero.headlineGradient}
              </GradientText>
            </h1>
          </Reveal>

          <Reveal delay={100}>
            <p className="max-w-[28.5rem] text-justify text-[1.3125rem] leading-8 text-ink-body">
              {hero.subheadline}
            </p>
          </Reveal>

          <Reveal delay={180} className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-8">
            <CTAButton href={hero.primaryCta.href}>{hero.primaryCta.label}</CTAButton>
            <CTAButton href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
            </CTAButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
