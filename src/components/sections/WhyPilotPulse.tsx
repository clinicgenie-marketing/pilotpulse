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
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          <SectionHeader
            eyebrow={why.eyebrow}
            headingWhite={why.headingPre}
            headingGradient={why.headingGradient}
            headingPost={why.headingPost}
            align="center"
          />
          <p className="text-base leading-relaxed text-ink-body lg:text-lg">
            {why.subPlain}
            <span className="mt-1 block">
              {why.subLead}
              <GradientText>{why.subGradient}</GradientText>
            </span>
          </p>
          <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-ink-faint">
            {why.label}
          </p>
        </Reveal>

        <div className="group/grid mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14">
          {why.reasons.map((reason, i) => (
            <Reveal key={reason.title} delay={(i % 2) * 80} className="h-full">
              <article className="card-why card-interactive flex h-full flex-col rounded-xl p-6 transition-opacity lg:group-hover/grid:opacity-60 lg:hover:!opacity-100 lg:p-8">
                <p className="eyebrow mb-3">{reason.eyebrow}</p>
                <div className="flex items-center gap-4">
                  <Image
                    src={reason.icon}
                    alt=""
                    width={100}
                    height={100}
                    className="card-icon h-24 w-24 shrink-0 object-contain"
                  />
                  <h3 className="text-lg font-bold leading-snug text-ink lg:text-xl">
                    {reason.title}
                  </h3>
                </div>
                <p className="card-desc mt-4 text-sm leading-relaxed !text-white lg:text-base">
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
