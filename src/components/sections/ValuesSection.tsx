import Image from "next/image";
import { GradientText } from "@/components/ui/GradientText";
import { Reveal } from "@/components/ui/Reveal";
import { values } from "@/lib/content";

/**
 * Full-bleed photographic band from the reference — gradient heading left,
 * stacked value items right. Icons keep their full-colour artwork and sit
 * beside the paragraph (the title spans the text column above them).
 */
export function ValuesSection() {
  const last = values.items.length - 1;

  return (
    <section className="relative overflow-hidden">
      <Image
        src="/images/values-bg.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-[35%_center]"
      />
      {/* violet hue-wash over the right side, as the reference */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(80,60,255,0) 35%, rgba(80,60,255,0.28) 70%, rgba(80,60,255,0.38) 100%)",
        }}
      />

      <div className="container-edge relative py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* Heading */}
          <Reveal className="flex max-w-sm flex-col gap-5">
            <h2 className="heading-2 lg:!text-[3.4rem]">
              <GradientText>{values.heading}</GradientText>
            </h2>
            <p className="text-[1.125rem] leading-[1.55] text-white/90 lg:text-[1.5rem]">
              {values.sub}
            </p>
          </Reveal>

          {/* Stacked items */}
          <div className="flex flex-col">
            {values.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 90}>
                <div
                  className={`row-interactive grid grid-cols-[4.5rem_1fr] gap-y-3 border-white/70 lg:grid-cols-[7.125rem_1fr] ${
                    i === 0 ? "pb-8" : "py-8"
                  } ${i === last ? "border-b-0 pb-0" : "border-b"}`}
                >
                  <span aria-hidden="true" />
                  <h3 className="text-2xl font-bold text-white lg:text-[2.125rem]">
                    {item.title}
                  </h3>
                  <Image
                    src={item.icon}
                    alt=""
                    width={48}
                    height={48}
                    className="row-icon mt-1 h-10 w-10 object-contain pl-0 lg:ml-[18px] lg:h-12 lg:w-12"
                  />
                  <p className="text-[1.0625rem] leading-[1.45] text-white/85 lg:text-[1.375rem]">
                    <span className="block font-bold text-white">{item.bold}</span>
                    <span className="block text-justify">{item.body}</span>
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
