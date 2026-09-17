import type { ReactNode } from "react";
import Aurora from "@/components/ui/Aurora";
import { CTAButton } from "@/components/ui/CTAButton";

const AURORA_STOPS = ["#4638F5", "#3686F2", "#B9B3FB"];

type Cta = {
  label: string;
  href: string;
  external?: boolean;
};

type FinalCtaBandProps = {
  id?: string;
  eyebrow?: string;
  heading: ReactNode;
  headingClassName?: string;
  body: string;
  primaryCta: Cta;
  secondaryCta?: Cta;
  note?: string;
  trustChips?: readonly string[];
};

export function FinalCtaBand({
  id,
  eyebrow,
  heading,
  headingClassName,
  body,
  primaryCta,
  secondaryCta,
  note,
  trustChips,
}: FinalCtaBandProps) {
  return (
    <section id={id} className="final-cta-band bg-neutral-900 pt-8 pb-8 md:pb-10 lg:pb-12">
      <div className="w-full px-8">
        <div className="relative overflow-hidden rounded-[1.75rem] bg-surface px-6 py-14 md:rounded-[2rem] md:px-10 md:py-16 lg:rounded-[2.25rem] lg:px-16 lg:py-20">
          <div className="hero-aurora" aria-hidden="true">
            <Aurora colorStops={AURORA_STOPS} blend={0.5} amplitude={1} speed={0.5} lightMode />
          </div>
          <div className="relative z-10 text-center">
            {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
            <h2 className={`heading-cta mx-auto text-ink ${headingClassName ?? "max-w-[20ch]"} ${eyebrow ? "mt-3" : ""}`}>
              {heading}
            </h2>
            <p className="mx-auto mt-4 max-w-[52ch] text-ink-muted">{body}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <CTAButton href={primaryCta.href} external={primaryCta.external}>
                {primaryCta.label}
              </CTAButton>
              {secondaryCta ? (
                <CTAButton href={secondaryCta.href} variant="secondary" external={secondaryCta.external}>
                  {secondaryCta.label}
                </CTAButton>
              ) : null}
            </div>
            {note ? <p className="mt-4 text-[12px] text-ink-muted">{note}</p> : null}
            {trustChips?.length ? (
              <ul className="mt-6 flex flex-wrap items-center justify-center gap-2">
                {trustChips.map((chip) => (
                  <li key={chip} className="trust-chip">
                    {chip}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
