import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { process } from "@/lib/content";

type Step = (typeof process.steps)[number];

function StepCard({ step }: { step: Step }) {
  return (
    <div className="card-process-interactive flex h-full flex-col rounded-xl border border-hairline bg-panel-process p-5">
      <div className="process-step-badge mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-signature text-sm font-bold text-white">
        {step.n}
      </div>
      <div className="mb-4 flex h-16 items-center">
        <Image src={step.icon} alt="" width={64} height={64} className="h-12 w-auto object-contain" />
      </div>
      <h3 className="mb-2 text-base font-bold leading-snug text-ink">{step.title}</h3>
      <p className="body-copy text-sm">{step.body}</p>
    </div>
  );
}

/** Linear horizontal stepper on desktop; vertical timeline on mobile. */
export function ProcessSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="container-edge">
        <Reveal className="mx-auto max-w-3xl">
          <SectionHeader
            eyebrow={process.eyebrow}
            heading={process.heading}
            sub={process.sub}
            align="center"
          />
        </Reveal>

        {/* Desktop: 5-column stepper with connecting line */}
        <div className="relative mt-14 hidden lg:block">
          <div
            aria-hidden="true"
            className="absolute left-[10%] right-[10%] top-9 h-px bg-gradient-to-r from-brand-cyan/20 via-brand-blue/40 to-brand-indigo/20"
          />
          <div className="grid grid-cols-5 gap-4">
            {process.steps.map((step, i) => (
              <Reveal key={step.n} delay={i * 60}>
                <StepCard step={step} />
              </Reveal>
            ))}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="relative mt-10 flex flex-col gap-6 border-l-2 border-brand-indigo/30 pl-6 lg:hidden">
          {process.steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 60}>
              <div className="relative">
                <span className="absolute -left-[calc(1.5rem+5px)] top-0 flex h-3 w-3 rounded-full bg-brand-cyan" />
                <StepCard step={step} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
