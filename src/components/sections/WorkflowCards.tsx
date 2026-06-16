import Image from "next/image";
import { GradientText } from "@/components/ui/GradientText";
import { Reveal } from "@/components/ui/Reveal";
import { capabilities } from "@/lib/content";

/** Three capability cards — icon, bottom-aligned title (card 1 has a gradient lead line), body. */
export function WorkflowCards() {
  return (
    <section className="py-20 md:py-24 lg:py-28">
      <div className="container-edge">
        <Reveal className="mx-auto flex flex-col items-center gap-5 text-center">
          <h2 className="heading-2">
            {capabilities.headingWhite}{" "}
            <GradientText>{capabilities.headingGradient}</GradientText>
          </h2>
          <p className="text-[1.125rem] text-ink-body lg:text-2xl lg:leading-9">
            {capabilities.sub}
          </p>
        </Reveal>

        <div className="group/grid mt-12 grid gap-7 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {capabilities.cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 100} className="h-full">
              <article className="card-pdf card-interactive flex h-full flex-col p-8 transition-opacity lg:group-hover/grid:opacity-60 lg:hover:!opacity-100">
                <Image
                  src={card.icon}
                  alt=""
                  width={100}
                  height={100}
                  className="card-icon h-[5.75rem] w-auto object-contain object-left"
                />
                <h3 className="mt-7 flex flex-col justify-end text-[1.625rem] font-bold leading-[1.4] text-ink lg:min-h-[9rem] lg:text-[2.0625rem]">
                  {card.titleGradient && (
                    <GradientText className="block">{card.titleGradient}</GradientText>
                  )}
                  <span>{card.title}</span>
                </h3>
                <p className="body-copy mt-4 leading-8">{card.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
