import Image from "next/image";
import type { IndustryBlock } from "@/lib/pages/industries";

export function IndustrySection({
  industry,
  reverse,
}: {
  industry: IndustryBlock;
  reverse: boolean;
}) {
  const wash = reverse ? "bg-background" : "bg-background-alt";

  return (
    <section
      id={industry.id}
      data-industry-section
      className={`industry-section relative overflow-hidden scroll-mt-28 border-b border-line ${wash}`}
    >
      <Image
        src={industry.image}
        alt=""
        fill
        sizes="100vw"
        className={`pointer-events-none object-cover ${reverse ? "object-left" : "object-right"}`}
        aria-hidden="true"
      />
      <div className={`pointer-events-none absolute inset-0 ${reverse ? "bg-background/80" : "bg-background-alt/80"}`} />
      <div
        className={`pointer-events-none absolute inset-0 ${
          reverse ? "bg-gradient-to-r from-transparent to-background" : "bg-gradient-to-l from-transparent to-background-alt"
        }`}
      />

      <div className="container-edge section-pad relative z-10">
        <div
          className={`grid items-start gap-10 lg:grid-cols-2 lg:gap-16 ${
            reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <div className="max-w-[54ch]">
            <p className="eyebrow">{industry.eyebrow}</p>
            <h2 className="heading-2 mt-4 text-ink">
              {industry.heading.map((line) => (
                <span key={line} className="block whitespace-nowrap">
                  {line}
                </span>
              ))}
            </h2>
            <p className="lead mt-4 text-ink">{industry.lead}</p>
            {industry.liveAt ? (
              <p className="live-dot-line">
                <span className="size-2 rounded-full bg-emerald-400" aria-hidden="true" />
                {industry.liveAt}
              </p>
            ) : null}
          </div>

          <div className="max-w-[36ch]">
            <p className="heading-2 tabular-nums text-primary">{industry.featured.value}</p>
            <p className="mt-2 text-base leading-relaxed text-ink">{industry.featured.unit}</p>
            <ul className="mt-8 space-y-5 border-t border-line pt-6">
              {industry.facts.map((fact) => (
                <li key={`${fact.value}-${fact.unit}`}>
                  <p className="text-lg font-semibold text-ink">{fact.value}</p>
                  <p className="mt-1 text-base leading-relaxed text-ink-muted">{fact.unit}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="industry-section-veil" aria-hidden="true" />
    </section>
  );
}
