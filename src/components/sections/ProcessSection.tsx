import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { process } from "@/lib/content";

type Step = (typeof process.steps)[number];

function StepCard({ step }: { step: Step }) {
  return (
    <div className="card-process-interactive flex h-full flex-col items-center p-6 md:p-8">
      <span className="mb-6 font-display text-3xl text-primary">{step.n}</span>
      <div className="icon-soft-accent mb-4 flex h-16 w-16 items-center justify-center">
        <Image
          src={step.icon}
          alt=""
          width={40}
          height={40}
          className="h-10 w-10 object-contain"
        />
      </div>
      <h3 className="heading-4 mb-2 text-center">{step.title}</h3>
      <p className="body-copy text-center">{step.body}</p>
    </div>
  );
}

export function ProcessSection() {
  return (
    <section className="section-pad">
      <div className="container-edge">
        <Reveal className="mx-auto max-w-3xl">
          <SectionHeader
            eyebrow={process.eyebrow}
            heading={process.heading}
            sub={process.sub}
            align="center"
          />
        </Reveal>

        <div className="mt-14 hidden lg:block">
          <div className="grid grid-cols-5 gap-4">
            {process.steps.map((step, i) => (
              <Reveal key={step.n} delay={i * 60}>
                <StepCard step={step} />
              </Reveal>
            ))}
          </div>
        </div>

        <div className="relative mt-10 flex flex-col gap-6 border-l-2 border-primary-soft pl-6 lg:hidden">
          {process.steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 60}>
              <div className="relative">
                <span className="absolute -left-[calc(1.5rem+5px)] top-0 flex h-3 w-3 rounded-full bg-primary" />
                <StepCard step={step} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
