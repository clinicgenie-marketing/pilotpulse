import { Check } from "lucide-react";
import { partnershipProcess } from "@/lib/home-content";
import { CTAButton } from "@/components/ui/CTAButton";

export function PartnershipProcess() {
  return (
    <section className="section-pad border-b border-line bg-surface">
      <div className="container-edge">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[640px]">
            <p className="eyebrow">{partnershipProcess.eyebrow}</p>
            <h2 className="heading-2 mt-3">{partnershipProcess.heading}</h2>
            <p className="lead mt-4 text-ink-muted">{partnershipProcess.sub}</p>
          </div>
          <CTAButton href={partnershipProcess.cta.href} withArrow>
            {partnershipProcess.cta.label}
          </CTAButton>
        </div>

        <ol className="mt-12 divide-y divide-line">
          {partnershipProcess.steps.map((step) => (
            <li
              key={step.n}
              className="grid items-baseline gap-4 py-8 first:pt-0 last:pb-0 md:grid-cols-[3rem_minmax(0,1fr)] md:gap-8 lg:grid-cols-[3rem_minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-12"
            >
              <p className="font-sans text-sm font-semibold tabular-nums tracking-wider text-ink-muted md:leading-[calc(1.3*var(--pp-heading-leading))]">
                {step.n}
              </p>
              <div>
                <h3 className="card-title text-accent">{step.title}</h3>
                <p className="mt-2 max-w-[46ch] text-base leading-relaxed text-ink-muted">
                  {step.body}
                </p>
              </div>
              <ul className="space-y-2 self-start md:col-start-2 lg:col-start-3">
                {step.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-base text-ink">
                    <span className="workforce-point-tick" aria-hidden="true">
                      <Check className="h-2.5 w-2.5" strokeWidth={3} />
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
