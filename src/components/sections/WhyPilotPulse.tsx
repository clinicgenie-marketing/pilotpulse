import Image from "next/image";
import { GradientText } from "@/components/ui/GradientText";
import { Reveal } from "@/components/ui/Reveal";
import { why } from "@/lib/content";

/**
 * Full-width violet wash band — centred two-tone heading, sub with gradient
 * tail, "Our approach combines:" label, 2×2 bordered cards.
 */
export function WhyPilotPulse() {
  return (
    <section id="why" className="relative scroll-mt-10">
      <div
        className="pb-24 pt-20 lg:pb-32 lg:pt-28"
        style={{
          background:
            "linear-gradient(180deg, #261D75 0%, rgba(38,29,117,0.35) 40%, rgba(38,32,100,0) 72%)",
        }}
      >
        <div className="container-edge">
          <Reveal className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
            <h2 className="heading-2">
              {why.headingPre}
              <GradientText>{why.headingGradient}</GradientText>
              <span className="block">{why.headingPost}</span>
            </h2>
            <p className="text-[1.125rem] leading-[1.45] text-ink lg:text-[1.625rem]">
              {why.subPlain}
              <span className="block">
                {why.subLead}
                <GradientText>{why.subGradient}</GradientText>
              </span>
            </p>
            <p className="mt-10 text-[1.125rem] font-normal text-ink lg:mt-24 lg:text-[1.625rem]">
              {why.label}
            </p>
          </Reveal>

          <div className="group/grid mt-10 grid gap-7 lg:mt-14 lg:grid-cols-2">
            {why.reasons.map((reason, i) => (
              <Reveal key={reason.title} delay={(i % 2) * 100} className="h-full">
                <article className="card-why card-interactive flex h-full flex-col p-8 transition-opacity lg:group-hover/grid:opacity-60 lg:hover:!opacity-100 lg:p-14">
                  <div className="flex items-center gap-6">
                    <Image
                      src={reason.icon}
                      alt=""
                      width={56}
                      height={56}
                      className="card-icon h-14 w-14 shrink-0 object-contain"
                    />
                    <h3 className="text-xl font-bold leading-snug text-ink lg:text-[1.625rem]">
                      {reason.title}
                    </h3>
                  </div>
                  <p className="mt-7 text-[1.0625rem] leading-relaxed text-white/95 lg:text-[1.375rem] lg:leading-[2.0625rem]">
                    {reason.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
