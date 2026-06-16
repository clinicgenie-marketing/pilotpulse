import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { process } from "@/lib/content";

type Step = (typeof process.steps)[number];

function StepText({ n, title, body }: Step) {
  return (
    <div className="flex flex-col gap-2.5 bg-panel-process p-8">
      <div className="flex items-start gap-4">
        <span className="process-step-badge mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#4633FF] text-xl font-bold text-white transition-[filter] duration-300">
          {n}
        </span>
        <h3 className="text-2xl font-bold leading-snug text-ink">{title}</h3>
      </div>
      <p className="body-copy">{body}</p>
    </div>
  );
}

/** Side-column step: flat icon band on top, text panel below — one unified card. */
function StepCard({ step, bandClass = "h-[10.625rem]" }: { step: Step; bandClass?: string }) {
  return (
    <div className="card-process-interactive flex h-full flex-col overflow-hidden rounded-2xl">
      <div
        className={`process-icon-band flex shrink-0 grow items-center justify-center bg-[#353065] transition-colors duration-300 ${bandClass}`}
      >
        <Image src={step.icon} alt="" width={140} height={140} className="h-[7rem] w-auto object-contain" />
      </div>
      <StepText {...step} />
    </div>
  );
}

/** Middle step: text on top, large icon floating on the same dark card. */
function MiddleCard({ step }: { step: Step }) {
  return (
    <div className="card-process-interactive flex flex-col overflow-hidden rounded-2xl bg-panel-process">
      <StepText {...step} />
      <div className="process-icon-band flex items-center justify-center px-8 pb-10 pt-2 transition-colors duration-300">
        <Image src={step.icon} alt="" width={220} height={220} className="h-[12rem] w-auto object-contain" />
      </div>
    </div>
  );
}

/** Faint dashed path linking the five process steps on desktop. */
function ProcessConnector() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
      viewBox="0 0 1200 900"
      preserveAspectRatio="none"
      fill="none"
    >
      <path
        d="M 180 120 C 180 280, 580 200, 600 420 S 1020 520, 1020 680 C 1020 780, 180 680, 180 820"
        stroke="rgba(99,141,255,0.25)"
        strokeWidth="2"
        strokeDasharray="8 12"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Five-step process in the reference's staggered 3-column layout:
 * col 1 = card(tile+1), card(tile+2) · col 2 (offset down) = card(3+icon) ·
 * col 3 = card(tile+4), card(tile+5).
 */
export function ProcessSection() {
  const [s1, s2, s3, s4, s5] = process.steps;

  return (
    <section className="py-20 md:py-24 lg:py-28">
      <div className="container-edge">
        <Reveal className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
          <h2 className="heading-2">{process.heading}</h2>
          <p className="lead">{process.sub}</p>
        </Reveal>

        {/* Desktop: staggered 3-column layout */}
        <div className="relative hidden lg:mt-[5.5rem] lg:grid lg:grid-cols-3 lg:gap-6">
          <ProcessConnector />

          <Reveal className="relative z-10 flex flex-col gap-6">
            <StepCard step={s1} />
            <StepCard step={s2} bandClass="h-[13.5rem]" />
          </Reveal>

          <Reveal delay={120} className="relative z-10 lg:mt-[12.5rem]">
            <MiddleCard step={s3} />
          </Reveal>

          <Reveal delay={200} className="relative z-10 flex flex-col gap-6">
            <StepCard step={s4} />
            <StepCard step={s5} bandClass="h-[13.5rem]" />
          </Reveal>
        </div>

        {/* Mobile / tablet: simple ordered list */}
        <div className="mt-12 flex flex-col gap-8 lg:hidden">
          {process.steps.map((step) =>
            step.n === "3" ? (
              <Reveal key={step.n}>
                <MiddleCard step={step} />
              </Reveal>
            ) : (
              <Reveal key={step.n}>
                <StepCard step={step} />
              </Reveal>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
