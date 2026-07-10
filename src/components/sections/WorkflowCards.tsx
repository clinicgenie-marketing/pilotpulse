import Image from "next/image";
import { GradientText } from "@/components/ui/GradientText";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TextLink } from "@/components/ui/TextLink";
import { capabilities } from "@/lib/content";

/** Micron-style icon solutions row + compact featured tiles. */
export function WorkflowCards() {
  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="container-edge">
        <Reveal>
          <SectionHeader
            eyebrow={capabilities.eyebrow}
            headingWhite={capabilities.headingWhite}
            headingGradient={capabilities.headingGradient}
            sub={capabilities.sub}
          />
        </Reveal>

        {/* Desktop: icon solutions row with hairline dividers */}
        <Reveal delay={80} className="mt-12 hidden lg:grid lg:grid-cols-3 lg:divide-x lg:divide-hairline">
          {capabilities.cards.map((card) => (
            <div key={card.title} className="flex flex-col gap-5 px-8 first:pl-0 last:pr-0">
              <Image
                src={card.icon}
                alt=""
                width={100}
                height={100}
                className="card-icon h-24 w-24 object-contain"
              />
              <div>
                <p className="eyebrow mb-2">{card.eyebrow}</p>
                <h3 className="text-xl font-bold text-ink">
                  {card.titleGradient && (
                    <GradientText className="block">{card.titleGradient}</GradientText>
                  )}
                  <span>{card.title}</span>
                </h3>
              </div>
              <p className="body-copy flex-1">{card.body}</p>
              <TextLink href={card.link.href}>{card.link.label}</TextLink>
            </div>
          ))}
        </Reveal>

        {/* Mobile / tablet: compact featured tiles */}
        <div className="group/grid mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:hidden">
          {capabilities.cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 80} className="h-full">
              <article className="card-pdf card-interactive flex h-full flex-col overflow-hidden transition-opacity lg:group-hover/grid:opacity-60 lg:hover:!opacity-100">
                <div className="flex items-center justify-center border-b border-hairline bg-panel-tile/40 px-6 py-8">
                  <Image
                    src={card.icon}
                    alt=""
                    width={100}
                    height={100}
                    className="card-icon h-24 w-24 object-contain"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <p className="eyebrow">{card.eyebrow}</p>
                  <h3 className="text-lg font-bold text-ink">{card.title}</h3>
                  <p className="body-copy flex-1 text-sm">{card.body}</p>
                  <TextLink href={card.link.href}>{card.link.label}</TextLink>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
