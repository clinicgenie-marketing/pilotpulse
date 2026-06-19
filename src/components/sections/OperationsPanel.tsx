import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TechOverlay } from "@/components/ui/TechOverlay";
import { TextLink } from "@/components/ui/TextLink";
import { operations } from "@/lib/content";

/** Micron-style industrial feature section — split layout with video frame. */
export function OperationsPanel() {
  return (
    <section className="relative border-b border-hairline">
      <div
        className="relative pb-20 pt-16 lg:pb-24 lg:pt-20"
        style={{
          background:
            "linear-gradient(180deg, #05002B 0%, #05002B 45%, #272063 86%, #211683 100%)",
        }}
      >
        <div className="container-edge relative">
          <div className="grid items-start gap-12 lg:grid-cols-[0.38fr_0.62fr] lg:gap-16">
            {/* Left: header + structured bullet rows */}
            <Reveal className="flex flex-col gap-8">
              <SectionHeader
                eyebrow={operations.eyebrow}
                headingWhite={operations.headingWhite}
                headingGradient={operations.headingGradient}
                sub={operations.sub}
              />

              <div>
                <p className="mb-5 text-sm font-semibold uppercase tracking-wide text-ink">
                  {operations.label}
                </p>
                <ol className="flex flex-col gap-4">
                  {operations.bullets.map((item, i) => (
                    <li
                      key={item}
                      className="bullet-interactive flex items-start gap-4 rounded-lg border border-hairline/50 bg-white/[0.02] px-4 py-3 text-ink-body transition-colors hover:text-ink"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-indigo/20 text-xs font-bold text-brand-cyan">
                        {i + 1}
                      </span>
                      <span className="text-base leading-snug lg:text-lg">{item}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>

            {/* Right: video card in elevated frame */}
            <Reveal delay={120}>
              <div className="relative overflow-hidden rounded-xl border border-hairline bg-panel-card">
                <TechOverlay withGlow={false} className="opacity-40" />
                <div className="video-interactive relative overflow-hidden rounded-xl">
                  <Image
                    src="/images/video-thumb.png"
                    alt={`${operations.video.title} — ${operations.video.subtitle}`}
                    width={1183}
                    height={665}
                    sizes="(min-width: 1024px) 62vw, 92vw"
                    className="h-auto w-full"
                  />
                </div>
                <div className="relative border-t border-hairline px-5 py-4">
                  <TextLink href={operations.videoLink.href}>{operations.videoLink.label}</TextLink>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Pull-quote bar */}
          <Reveal className="mt-14 lg:mt-20">
            <div className="rounded-xl border border-hairline bg-white/[0.03] px-6 py-8 lg:px-10">
              {operations.bold.map((line) => (
                <p
                  key={line.strong}
                  className="text-base leading-relaxed text-ink lg:text-lg"
                >
                  {line.pre}
                  <strong className="font-bold">{line.strong}</strong>
                  {line.post}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
