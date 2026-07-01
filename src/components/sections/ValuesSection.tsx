import Image from "next/image";
import { Check } from "lucide-react";
import { GradientText } from "@/components/ui/GradientText";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { values } from "@/lib/content";

/** Micron-style photo split band — image left, content panel right. */
export function ValuesSection() {
  return (
    <section className="relative overflow-hidden lg:h-screen lg:max-h-screen">
      <div className="grid lg:h-full lg:min-h-0 lg:grid-cols-[45%_55%]">
        {/* Photo left */}
        <div className="relative min-h-[320px] lg:h-full lg:min-h-0">
          <Image
            src="/hero/our-values-1.png"
            alt=""
            fill
            sizes="50vw"
            className="object-cover object-[0%_center] opacity-100"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 lg:hidden"
            style={{
              background:
                "linear-gradient(180deg, rgba(5,0,43,0.3) 0%, rgba(5,0,43,0.85) 100%)",
            }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-y-0 right-0 hidden w-40 lg:block"
            style={{
              background: "linear-gradient(90deg, transparent 0%, #110D3E 100%)",
            }}
          />
        </div>

        {/* Content panel right */}
        <div className="relative bg-panel/90 px-16 py-16 backdrop-blur-sm lg:flex lg:h-full lg:min-h-0 lg:flex-col lg:justify-center lg:px-10 lg:py-10">
          <Reveal className="mb-10 lg:mb-6">
            <SectionHeader
              eyebrow={values.eyebrow}
              heading={<GradientText>{values.heading}</GradientText>}
              sub={values.sub}
              className="lg:gap-3"
            />
          </Reveal>

          <div className="flex flex-col">
            {values.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 70}>
                <div className="row-interactive flex items-center py-6 lg:py-3">
                  <div className="flex w-24 shrink-0 items-center justify-center lg:w-20">
                    <span
                      aria-hidden="true"
                      className="row-icon inline-flex h-[3.2rem] w-[3.2rem] items-center justify-center rounded-full lg:h-11 lg:w-11"
                      style={{
                        backgroundImage: "linear-gradient(90deg, #1DBBEB 0%, #4DA3FF 45%, #8B7BFF 100%)",
                        boxShadow: "0 10px 24px -14px rgba(77, 163, 255, 0.85)",
                      }}
                    >
                      <Check className="h-5 w-5 text-white" strokeWidth={2.75} />
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-bold text-brand-blue drop-shadow-[0_0_14px_rgba(31,137,255,0.35)] lg:text-lg">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/85 lg:text-base">
                      <span className="block font-semibold text-white">{item.bold}</span>
                      <span className="mt-1 block text-white/50">{item.body}</span>
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
