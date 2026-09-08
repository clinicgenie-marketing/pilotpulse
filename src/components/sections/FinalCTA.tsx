import Aurora from "@/components/ui/Aurora";
import { CTAButton } from "@/components/ui/CTAButton";
import { finalCtaContent } from "@/lib/home-content";

const AURORA_STOPS = ["#4638F5", "#3686F2", "#B9B3FB"];

export function FinalCTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-surface py-14 lg:py-20">
      <div className="hero-aurora" aria-hidden="true">
        <Aurora
          colorStops={AURORA_STOPS}
          blend={0.5}
          amplitude={1}
          speed={0.5}
          lightMode
        />
      </div>
      <div className="container-edge relative z-10 text-center">
        <p className="eyebrow">{finalCtaContent.eyebrow}</p>
        <h2 className="heading-cta mx-auto mt-3 max-w-[20ch] text-ink">{finalCtaContent.heading}</h2>
        <p className="mx-auto mt-4 max-w-[52ch] text-ink-muted">{finalCtaContent.body}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <CTAButton href={finalCtaContent.primaryCta.href} external>
            {finalCtaContent.primaryCta.label}
          </CTAButton>
          <CTAButton href={finalCtaContent.secondaryCta.href} variant="secondary" external>
            {finalCtaContent.secondaryCta.label}
          </CTAButton>
        </div>
        <p className="mt-4 text-[12px] text-ink-muted">{finalCtaContent.note}</p>
      </div>
    </section>
  );
}
