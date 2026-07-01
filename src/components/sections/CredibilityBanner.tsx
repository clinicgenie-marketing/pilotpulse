import Image from "next/image";
import { GradientText } from "@/components/ui/GradientText";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TextLink } from "@/components/ui/TextLink";
import { credibility } from "@/lib/content";

/** Micron-style split feature band — IMDA credibility. */
export function CredibilityBanner() {
  return (
    <section id="imda" className="border-y border-hairline bg-panel">
      <div className="container-edge py-16 lg:py-24">
        <div className="grid items-start gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch lg:gap-16">
          {/* IMDA lady image — height matches copy column; image anchored to bottom */}
          <Reveal className="h-full">
            <div className="relative h-full min-h-[250px] overflow-hidden rounded-xl border border-hairline bg-panel-card lg:min-h-10">
              <Image
                src="/hero/IMDA-empty.png"
                alt="PilotPulse IMDA GenAI for Digital Leaders initiative on mobile"
                fill
                sizes="(min-width: 1024px) 100vw"
                className="origin-bottom scale-110 object-contain object-bottom"
              />
            </div>
          </Reveal>

          {/* Copy */}
          <Reveal delay={100} className="flex flex-col gap-8">
            <SectionHeader
              eyebrow={credibility.eyebrow}
              heading={
                <>
                  <span className="block">
                    <GradientText ramp="full">{credibility.headingBlue}</GradientText>
                  </span>
                  <span className="block font-light">{credibility.headingWhite}</span>
                </>
              }
            />

            <div className="flex flex-col gap-6">
              {credibility.body.map((para) => (
                <p key={para} className="text-base leading-relaxed text-ink-body lg:text-lg">
                  {para}
                </p>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-10">
              <Image
                src="/images/logo-imda.png"
                alt="Infocomm Media Development Authority"
                width={213}
                height={55}
                className="h-10 w-auto opacity-80 transition-all duration-300 hover:scale-105 hover:opacity-100 sm:h-12"
              />
              <Image
                src="/images/logo-singtel.png"
                alt="Singtel"
                width={128}
                height={80}
                className="h-14 w-auto opacity-80 transition-all duration-300 hover:scale-105 hover:opacity-100 sm:h-16"
              />
            </div>

            <TextLink href={credibility.cta.href}>{credibility.cta.label}</TextLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
