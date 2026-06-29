import Image from "next/image";
import { GradientText } from "@/components/ui/GradientText";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { values } from "@/lib/content";

/** Micron-style photo split band — image left, content panel right. */
export function ValuesSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid lg:grid-cols-[45%_55%]">
        {/* Photo left */}
        <div className="relative min-h-[320px] lg:min-h-[600px]">
          <Image
            src="/hero/our-values-1.png"
            alt=""
            fill
            sizes="50vw"
            className="object-cover object-[0%_center] opacity-40"
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
        <div className="relative ml-6 bg-panel/90 px-16 py-16 backdrop-blur-sm lg:px-10 lg:py-25">
          <Reveal className="mb-10">
            <SectionHeader
              eyebrow={values.eyebrow}
              heading={<GradientText>{values.heading}</GradientText>}
              sub={values.sub}
            />
          </Reveal>

          <div className="flex flex-col">
            {values.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 70}>
                <div
                  className={`row-interactive flex items-center border-white/20 py-6 ${
                    i < values.items.length - 1 ? "border-b" : ""
                  }`}
                >
                  <div className="flex w-24 shrink-0 items-center justify-center">
                    <Image
                      src="/tick.png"
                      alt=""
                      width={110}
                      height={110}
                      className="row-icon h-[3.2rem] w-[3.2rem] object-contain"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-bold text-white lg:text-xl">{item.title}</h3>
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
