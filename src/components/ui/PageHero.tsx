import type { ReactNode } from "react";
import Image from "next/image";
import { CTAButton } from "@/components/ui/CTAButton";

export function Em({ children }: { children: ReactNode }) {
  return <span className="heading-gradient">{children}</span>;
}

export function AccentHeading({ text, accent }: { text: string; accent: string }) {
  const index = text.lastIndexOf(accent);
  if (index < 0) return <>{text}</>;

  return (
    <>
      {text.slice(0, index)}
      <Em>{accent}</Em>
      {text.slice(index + accent.length)}
    </>
  );
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
  align?: "left" | "center";
  backgroundImage?: string;
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
  align = "left",
  backgroundImage,
  children,
}: PageHeroProps) {
  const centered = align === "center" && !aside;
  const copy = (
    <div
      className={
        aside
          ? "max-w-[54ch]"
          : centered
            ? "mx-auto max-w-[40rem] text-center"
            : "max-w-[40rem]"
      }
    >
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h1 className={`heading-hero text-ink ${eyebrow ? "mt-4" : ""}`}>{title}</h1>
      {lead ? (
        <div className={`lead mt-5 max-w-[65ch] text-ink ${centered ? "mx-auto" : ""}`}>{lead}</div>
      ) : null}
      {leadSecondary ? (
        <div
          className={`mt-4 max-w-[65ch] text-base leading-relaxed text-ink ${centered ? "mx-auto" : ""}`}
        >
          {leadSecondary}
        </div>
      ) : null}
      {primaryCta || secondaryCta ? (
        <div
          className={`mt-8 flex flex-wrap items-center gap-3 ${centered ? "justify-center" : ""}`}
        >
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
    <section
      className={`page-hero${
        backgroundImage
          ? ` page-hero--photo${centered || aside ? "" : " page-hero--photo-left"}`
          : " border-b border-line"
      }`}
    >
      {backgroundImage ? (
        <>
          <div className="page-hero-photo" aria-hidden="true">
            <Image
              src={backgroundImage}
              alt=""
              fill
              priority
              sizes="100vw"
              className="page-hero-photo-img"
            />
          </div>
          <div className="page-hero-photo-shade" aria-hidden="true" />
        </>
      ) : null}
      <div className="container-edge relative z-10 py-16 md:py-20 lg:py-24">
        {aside ? (
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,36rem)] lg:gap-14">
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
