import Image from "next/image";
import { GradientText } from "@/components/ui/GradientText";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { why } from "@/lib/content";

/** Elevated panel band with 2×2 editorial cards. */
export function WhyPilotPulse() {
  return (
    <section id="why" className="scroll-mt-16 border-y border-hairline bg-panel/60">
      <div className="container-edge py-16 lg:py-24">
        <Reveal className="grid items-end gap-8 lg:grid-cols-2 lg:gap-16">
          <SectionHeader
            eyebrow={why.eyebrow}
            headingWhite={why.headingPre}
            headingGradient={why.headingGradient}
            headingPost={why.headingPost}
            align="left"
          />
          <div className="flex flex-col gap-4 lg:pb-1">
            <p className="text-base leading-relaxed text-ink-body lg:text-lg">
              {why.subPlain}
              <span className="mt-1 block">
                {why.subLead}
                <GradientText>{why.subGradient}</GradientText>
              </span>
            </p>
            <p className="text-sm font-semibold uppercase tracking-wide text-ink-faint">
              {why.label}
            </p>
          </div>
        </Reveal>

        <div className="group/grid mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14">
          {why.reasons.map((reason, i) => (
            <Reveal key={reason.title} delay={(i % 2) * 80} className="h-full">
              <article className="card-why card-interactive flex h-full flex-col rounded-xl p-6 transition-opacity lg:group-hover/grid:opacity-60 lg:hover:!opacity-100 lg:p-8">
                <div className="grid grid-cols-[6rem_1fr] items-start gap-x-4 gap-y-3">
                  <p className="eyebrow text-center">{reason.eyebrow}</p>
                  <div aria-hidden="true" />
                  <Image
                    src={reason.icon}
                    alt=""
                    width={100}
                    height={100}
                    className="card-icon h-24 w-24 justify-self-center object-contain"
                  />
                  <div className="min-w-0 self-center">
                    <h3 className="text-lg font-bold leading-snug text-ink lg:text-xl">
                      {reason.title}
                    </h3>
                    <p className="card-desc mt-2 text-sm leading-relaxed !text-white lg:text-base">
                      {reason.body}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
