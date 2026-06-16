import Image from "next/image";
import { CTAButton } from "@/components/ui/CTAButton";
import { GradientText } from "@/components/ui/GradientText";
import { Reveal } from "@/components/ui/Reveal";
import { finalCta } from "@/lib/content";

/**
 * Centred final CTA: dolphin glyph, two-tone heading, blue bold line, body,
 * buttons. Sits on a uniform vertical fade to near-black that continues
 * through the footer (no radial bloom in the reference).
 */
export function FinalCTA() {
  return (
    <section
      className="group relative py-24 lg:pb-40 lg:pt-28"
      style={{
        background: "linear-gradient(180deg, #0A022C 0%, #05011C 100%)",
      }}
    >
      {/* Radial glow that intensifies on section hover */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/2 h-[480px] -translate-y-1/2 opacity-60 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(70,51,255,0.22) 0%, transparent 70%)",
        }}
      />

      <div className="container-edge relative">
        <Reveal className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
          <Image
            src="/images/glyph-dolphin.png"
            alt=""
            width={136}
            height={136}
            className="animate-glow-pulse h-24 w-24 object-contain lg:h-[8.5rem] lg:w-[8.5rem]"
          />
          <h2 className="heading-cta">
            {finalCta.headingPre}
            <GradientText>{finalCta.headingGradient}</GradientText>
          </h2>
          <p className="text-[1.25rem] font-bold leading-snug text-[#3385FF] lg:text-[1.5625rem]">
            {finalCta.blueLine}
          </p>
          <p className="max-w-[680px] text-[1.125rem] leading-8 text-ink-body lg:text-[1.5625rem]">
            {finalCta.body}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-[1.875rem]">
            <CTAButton href={finalCta.primaryCta.href}>{finalCta.primaryCta.label}</CTAButton>
            <CTAButton href={finalCta.secondaryCta.href} variant="secondary">
              {finalCta.secondaryCta.label}
            </CTAButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
