import type { ReactNode } from "react";
import { CTAButton } from "@/components/ui/CTAButton";

export function Em({ children }: { children: ReactNode }) {
  return <span className="heading-gradient">{children}</span>;
}

type HeroCta = {
  label: string;
  href: string;
  external?: boolean;
  variant?: "primary" | "secondary";
};

type PageHeroProps = {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  leadSecondary?: ReactNode;
  primaryCta?: HeroCta;
  secondaryCta?: HeroCta;
  aside?: ReactNode;
  children?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  lead,
  leadSecondary,
  primaryCta,
  secondaryCta,
  aside,
  children,
}: PageHeroProps) {
  const copy = (
    <div className={aside ? "max-w-[54ch]" : "max-w-[40rem]"}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h1 className={`heading-hero text-ink ${eyebrow ? "mt-4" : ""}`}>{title}</h1>
      {lead ? <div className="lead mt-5 max-w-[65ch] text-ink">{lead}</div> : null}
      {leadSecondary ? (
        <div className="mt-4 max-w-[65ch] text-base leading-relaxed text-ink">{leadSecondary}</div>
      ) : null}
      {primaryCta || secondaryCta ? (
        <div className="mt-8 flex flex-wrap items-center gap-3">
          {primaryCta ? (
            <CTAButton href={primaryCta.href} external={primaryCta.external}>
              {primaryCta.label}
            </CTAButton>
          ) : null}
          {secondaryCta ? (
            <CTAButton
              href={secondaryCta.href}
              variant={secondaryCta.variant ?? "secondary"}
              external={secondaryCta.external}
            >
              {secondaryCta.label}
            </CTAButton>
          ) : null}
        </div>
      ) : null}
      {children}
    </div>
  );

  return (
    <section className="page-hero border-b border-line">
      <div className="container-edge relative z-10 py-16 md:py-20 lg:py-24">
        {aside ? (
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,36rem)] lg:gap-14">
            {copy}
            <div>{aside}</div>
          </div>
        ) : (
          copy
        )}
      </div>
    </section>
  );
}
