import Image from "next/image";
import { CTAButton } from "@/components/ui/CTAButton";
import { Reveal } from "@/components/ui/Reveal";
import { credibility } from "@/lib/content";

/**
 * IMDA band, exactly as the reference: phone mockup over a gradient backdrop
 * with a hard bottom edge (the phone is clipped, bottom-aligned with the CTA),
 * heading + copy + partner lockups on the right.
 */
export function CredibilityBanner() {
  return (
    <section id="imda" className="relative pt-10 lg:pt-0">
      <div className="container-edge">
        <div className="grid items-stretch gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Phone mockup on its gradient backdrop — clipped at the band bottom.
              On lg the phone is absolutely positioned so the column height is
              set by the copy column and the overflow crops the phone, exactly
              as the reference. */}
          <Reveal className="relative order-last overflow-hidden lg:order-first lg:h-full lg:min-h-[40rem]">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 top-[38%]"
              style={{
                background:
                  "linear-gradient(180deg, rgba(33,23,128,0) 0%, rgba(33,23,128,0.45) 55%, rgba(33,23,128,0.85) 100%)",
              }}
            />
            <div className="relative mx-auto w-[280px] sm:w-[360px] lg:absolute lg:inset-x-0 lg:top-0 lg:mx-auto lg:w-[432px]">
              <Image
                src="/images/imda-phone.png"
                alt="PilotPulse — IMDA GenAI for Digital Leaders initiative on mobile"
                width={459}
                height={943}
                sizes="(min-width: 1024px) 432px, 360px"
                className="h-auto w-full"
              />
            </div>
          </Reveal>

          {/* Copy */}
          <Reveal delay={100} className="flex flex-col items-start lg:py-1">
            <h2 className="heading-2">
              <span className="block text-brand-accent">{credibility.headingBlue}</span>
              <span className="block font-light">{credibility.headingWhite}</span>
            </h2>

            <div className="mt-9 flex flex-col gap-8">
              {credibility.body.map((para) => (
                <p key={para} className="max-w-[34.5rem] text-justify text-[1.375rem] leading-8 text-ink-body">
                  {para}
                </p>
              ))}
            </div>

            {/* Partner lockups (white) */}
            <div className="flex flex-wrap items-center gap-14 pt-12">
              <Image
                src="/images/logo-imda.png"
                alt="Infocomm Media Development Authority"
                width={213}
                height={55}
                className="h-12 w-auto sm:h-14"
              />
              <Image
                src="/images/logo-singtel.png"
                alt="Singtel"
                width={128}
                height={80}
                className="h-16 w-auto sm:h-20"
              />
            </div>

            <CTAButton href={credibility.cta.href} className="mt-10 !px-7 !py-[1.0625rem] !text-base">
              {credibility.cta.label}
            </CTAButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
