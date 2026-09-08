import Image from "next/image";
import { GradientText } from "@/components/ui/GradientText";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { why } from "@/lib/content";

export function WhyPilotPulse() {
  return (
    <section id="why" className="scroll-mt-16 bg-background-alt">
      <div className="container-edge section-pad">
        <Reveal className="grid items-end gap-8 lg:grid-cols-2 lg:gap-16">
          <SectionHeader
            eyebrow={why.eyebrow}
            headingWhite={why.headingPre}
            headingGradient={why.headingGradient}
            headingPost={why.headingPost}
            align="left"
          />
          <div className="flex flex-col gap-4 lg:pb-1">
            <p className="max-w-[70ch] text-base leading-relaxed text-ink-muted">
              {why.subPlain}
              <span className="mt-1 block">
                {why.subLead}
                <GradientText>{why.subGradient}</GradientText>
              </span>
            </p>
            <p className="eyebrow">{why.label}</p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14">
          {why.reasons.map((reason, i) => (
            <Reveal key={reason.title} delay={(i % 2) * 80} className="h-full">
              <article className="card-interactive flex h-full flex-col p-6 md:p-8">
                <div className="icon-soft mb-5 h-14 w-14">
                  <Image
                    src={reason.icon}
                    alt=""
                    width={36}
                    height={36}
                    className="h-9 w-9 object-contain"
                  />
                </div>
                <p className="eyebrow mb-2">{reason.eyebrow}</p>
                <h3 className="heading-3">{reason.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-ink-muted">
                  {reason.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
