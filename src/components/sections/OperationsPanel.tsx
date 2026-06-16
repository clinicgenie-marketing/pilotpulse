import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { operations } from "@/lib/content";

/**
 * Full-width band with large rounded bottom corners. Background brightens
 * uniformly toward a violet bottom edge (sampled #211683). Header block is
 * left-aligned; bullets left, video card right; emphasis statements below.
 */
export function OperationsPanel() {
  return (
    <section className="relative">
      <div
        className="relative overflow-hidden rounded-b-[2.5rem] pb-20 pt-24 sm:rounded-b-[3.5rem] lg:pb-24 lg:pt-32"
        style={{
          background:
            "linear-gradient(180deg, #05002B 0%, #05002B 45%, #272063 86%, #211683 100%)",
        }}
      >
        <div className="container-edge relative">
          <Reveal className="flex flex-col items-start gap-4 text-left">
            <h2 className="heading-2 text-[2rem] sm:text-[2.6rem] lg:text-[3.375rem] lg:leading-[1.2]">
              {operations.headingWhite}{" "}
              <span className="text-[#3385FF]">{operations.headingGradient}</span>
            </h2>
            <p className="max-w-4xl text-[1.125rem] leading-[1.4] text-ink-body lg:text-[1.625rem]">
              {operations.sub}
            </p>
          </Reveal>

          <div className="mt-12 grid items-center gap-10 lg:mt-16 lg:grid-cols-[0.32fr_0.68fr] lg:gap-14">
            {/* Bullets */}
            <Reveal className="flex flex-col gap-6 lg:pl-9">
              <p className="text-[1.125rem] font-normal text-ink lg:text-[1.5rem]">
                {operations.label}
              </p>
              <ul className="flex flex-col gap-6">
                {operations.bullets.map((item) => (
                  <li key={item} className="bullet-interactive flex items-start gap-5 text-ink-body lg:gap-9">
                    <Image
                      src="/images/icon-dot-bullet.png"
                      alt=""
                      width={33}
                      height={32}
                      className="bullet-dot mt-0.5 h-7 w-7 shrink-0 lg:h-8 lg:w-8"
                    />
                    <span className="text-[1.0625rem] leading-[1.2] lg:text-[1.4375rem]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Video card — player UI and carousel arrows are part of the artwork */}
            <Reveal delay={120}>
              <div className="video-interactive overflow-hidden rounded-[1.75rem]">
                <Image
                  src="/images/video-thumb.png"
                  alt={`${operations.video.title} — ${operations.video.subtitle}`}
                  width={1183}
                  height={665}
                  sizes="(min-width: 1024px) 68vw, 92vw"
                  className="h-auto w-full"
                />
              </div>
            </Reveal>
          </div>

          {/* Emphasis statements — regular white with bold phrases */}
          <Reveal className="mt-14 flex max-w-5xl flex-col gap-5 lg:mt-20">
            {operations.bold.map((line) => (
              <p
                key={line.strong}
                className="text-[1.125rem] font-normal leading-[1.35] text-ink lg:text-[1.5rem]"
              >
                {line.pre}
                <strong className="font-bold">{line.strong}</strong>
                {line.post}
              </p>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
