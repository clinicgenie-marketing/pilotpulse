import Image from "next/image";
import { GradientText } from "@/components/ui/GradientText";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TextLink } from "@/components/ui/TextLink";
import { credibility } from "@/lib/content";

export function CredibilityBanner() {
  return (
    <section id="imda" className="border-y border-line bg-background-alt">
      <div className="container-edge section-pad">
        <div className="grid items-start gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch lg:gap-16">
          <Reveal className="h-full">
            <div className="relative h-full min-h-[250px] overflow-hidden rounded-card border border-line bg-surface lg:min-h-10">
              <Image
                src="/hero/IMDA-empty.png"
                alt="PilotPulse IMDA GenAI for Digital Leaders initiative on mobile"
                fill
                sizes="(min-width: 1024px) 100vw"
                className="relative z-10 origin-bottom scale-110 object-contain object-bottom"
              />
            </div>
          </Reveal>

          <Reveal delay={100} className="flex flex-col gap-8">
            <SectionHeader
              eyebrow={credibility.eyebrow}
              heading={
                <>
                  <span className="block">
                    <GradientText>{credibility.headingBlue}</GradientText>
                  </span>
                  <span className="block">{credibility.headingWhite}</span>
                </>
              }
            />

            <div className="flex max-w-[70ch] flex-col gap-6">
              {credibility.body.map((para) => (
                <p key={para} className="text-base leading-relaxed text-ink-muted">
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
                className="h-10 w-auto sm:h-12"
              />
              <Image
                src="/images/logo-singtel.png"
                alt="Singtel"
                width={128}
                height={80}
                className="h-14 w-auto sm:h-16"
              />
            </div>

            <TextLink href={credibility.cta.href}>{credibility.cta.label}</TextLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
