import { CTAButton } from "@/components/ui/CTAButton";
import { FinalCTABackground } from "@/components/ui/FinalCTABackground";
import { GradientText } from "@/components/ui/GradientText";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { finalCta } from "@/lib/content";

/** Micron-style closing band — centred copy, primary + ghost CTA. */
export function FinalCTA() {
  return (
    <section
      className="relative border-t border-hairline py-20 lg:py-28"
      style={{
        background: "linear-gradient(180deg, #0A022C 0%, #05011C 100%)",
      }}
    >
      <FinalCTABackground />

      <div className="container-edge relative z-10">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <SectionHeader
            eyebrow={finalCta.eyebrow}
            heading={
              <>
                {finalCta.headingPre}
                <GradientText>{finalCta.headingGradient}</GradientText>
              </>
            }
            align="center"
          />
          <p className="text-lg font-bold leading-snug text-brand-accent lg:text-xl">
            {finalCta.blueLine}
          </p>
          <p className="max-w-xl text-base leading-relaxed text-ink-body lg:text-lg">
            {finalCta.body}
          </p>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
            <CTAButton href={finalCta.primaryCta.href} display withArrow>
              {finalCta.primaryCta.label}
            </CTAButton>
            <CTAButton href={finalCta.secondaryCta.href} variant="secondary" display>
              {finalCta.secondaryCta.label}
            </CTAButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
