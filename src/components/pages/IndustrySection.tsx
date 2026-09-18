import Image from "next/image";
import { Em } from "@/components/ui/PageHero";
import type { IndustryBlock } from "@/lib/pages/industries";

export function IndustrySection({
  industry,
  reverse,
}: {
  industry: IndustryBlock;
  reverse: boolean;
}) {
  const wash = reverse ? "bg-background" : "bg-background-alt";
  const stats = [industry.featured, ...industry.facts];

  return (
    <section
      id={industry.id}
      data-industry-section
      className={`industry-section scroll-mt-28 border-b border-line ${wash}`}
    >
      <div className={`container-edge industry-section-layout${reverse ? " is-reverse" : ""}`}>
        <div className="industry-section-media">
          <Image
            src={industry.image}
            alt=""
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover"
            aria-hidden="true"
          />
        </div>

        <div className="industry-section-body">
          <p className="eyebrow">{industry.eyebrow}</p>
          <h2 className="heading-2 mt-4 text-ink">
            {industry.heading.map((line, index) => (
              <span key={line} className="block">
                {index === industry.heading.length - 1 ? <Em>{line}</Em> : line}
              </span>
            ))}
          </h2>
          <p className="lead mt-4 max-w-[54ch] text-ink">{industry.lead}</p>
          {industry.liveAt ? (
            <p className="live-dot-line">
              <span className="size-2 rounded-full bg-emerald-400" aria-hidden="true" />
              {industry.liveAt}
            </p>
          ) : null}

          <ul className="industry-section-stats">
            {stats.map((stat) => (
              <li key={`${stat.value}-${stat.unit}`}>
                <p className="industry-section-stat-value">{stat.value}</p>
                <p className="industry-section-stat-unit">{stat.unit}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
