import Image from "next/image";
import { Check } from "lucide-react";
import { GradientText } from "@/components/ui/GradientText";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { values } from "@/lib/content";

export function ValuesSection() {
  return (
    <section className="relative overflow-hidden bg-background lg:min-h-[720px]">
      <div className="grid lg:min-h-[720px] lg:grid-cols-[45%_55%]">
        <div className="relative min-h-[320px] lg:min-h-0">
          <Image
            src="/hero/our-values-1.png"
            alt=""
            fill
            sizes="50vw"
            className="object-cover object-[0%_center]"
          />
        </div>

        <div className="relative bg-surface px-6 py-16 md:px-10 lg:flex lg:flex-col lg:justify-center lg:px-12 lg:py-16">
          <Reveal className="mb-10 lg:mb-8">
            <SectionHeader
              eyebrow={values.eyebrow}
              heading={
                <>
                  {values.headingWhite}
                  <GradientText>{values.headingGradient}</GradientText>
                  {values.headingPost}
                </>
              }
              sub={values.sub}
              className="lg:gap-3"
            />
          </Reveal>

          <div className="flex flex-col gap-2">
            {values.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 70}>
                <div className="row-interactive flex items-start gap-4 px-3 py-4">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-soft"
                  >
                    <Check className="h-5 w-5 text-primary" strokeWidth={2} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="heading-4">{item.title}</h3>
                    <p className="mt-2 text-base leading-relaxed text-ink-muted">
                      <span className="block font-semibold text-ink">{item.bold}</span>
                      <span className="mt-1 block">{item.body}</span>
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
