import Image from "next/image";
import { GradientText } from "@/components/ui/GradientText";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TextLink } from "@/components/ui/TextLink";
import { capabilities } from "@/lib/content";

export function WorkflowCards() {
  return (
    <section className="section-pad">
      <div className="container-edge">
        <Reveal>
          <SectionHeader
            eyebrow={capabilities.eyebrow}
            headingWhite={capabilities.headingWhite}
            headingGradient={capabilities.headingGradient}
            sub={capabilities.sub}
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 80} className="h-full">
              <article className="card-interactive flex h-full flex-col overflow-hidden p-6 md:p-8">
                <div className="icon-soft mb-6 h-16 w-16">
                  <Image
                    src={card.icon}
                    alt=""
                    width={40}
                    height={40}
                    className="h-10 w-10 object-contain"
                  />
                </div>
                <p className="eyebrow mb-2">{card.eyebrow}</p>
                <h3 className="heading-3">
                  {card.titleGradient && (
                    <GradientText className="block">{card.titleGradient}</GradientText>
                  )}
                  <span>{card.title}</span>
                </h3>
                <p className="body-copy mt-3 flex-1">{card.body}</p>
                <div className="mt-6">
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
