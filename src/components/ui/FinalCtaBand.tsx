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
    <section id={id} className="relative overflow-hidden bg-surface py-14 lg:py-20">
      <div className="hero-aurora" aria-hidden="true">
        <Aurora colorStops={AURORA_STOPS} blend={0.5} amplitude={1} speed={0.5} lightMode />
      </div>
      <div className="container-edge relative z-10 text-center">
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
    </section>
  );
}
