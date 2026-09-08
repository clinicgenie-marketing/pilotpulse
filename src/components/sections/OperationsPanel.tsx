import {
  GlassCard,
  GlassCardContent,
  GlassCardHeader,
  GlassCardTitle,
} from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TextLink } from "@/components/ui/TextLink";
import { operations } from "@/lib/content";

export function OperationsPanel() {
  return (
    <section className="relative bg-feature">
      <div className="relative section-pad">
        <div className="container-edge relative">
          <div className="grid items-center justify-items-center gap-12 lg:grid-cols-[0.38fr_0.62fr] lg:gap-16">
            <Reveal className="flex flex-col gap-8">
              <SectionHeader
                eyebrow={operations.eyebrow}
                headingWhite={operations.headingWhite}
                headingGradient={operations.headingGradient}
                sub={operations.sub}
              />

              <GlassCard className="w-full">
                <GlassCardHeader>
                  <GlassCardTitle>{operations.label}</GlassCardTitle>
                </GlassCardHeader>
                <GlassCardContent>
                  <ol className="flex flex-col gap-1">
                    {operations.bullets.map((item, i) => (
                      <li key={item} className="flex items-start gap-4 py-2.5">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-soft text-xs font-semibold text-primary">
                          {i + 1}
                        </span>
                        <span className="text-base leading-snug text-ink">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ol>
                </GlassCardContent>
              </GlassCard>
            </Reveal>

            <Reveal delay={120}>
              <div className="relative overflow-hidden rounded-card border border-line bg-surface">
                <div className="relative overflow-hidden">
                  <video
                    src={operations.video.src}
                    aria-label={`${operations.video.title} — ${operations.video.subtitle}`}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="h-auto w-full object-cover"
                  />
                </div>
                <div className="relative border-t border-line px-5 py-4">
                  <TextLink href={operations.videoLink.href}>{operations.videoLink.label}</TextLink>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal className="mt-14 lg:mt-20">
            <div className="rounded-card border border-line bg-surface px-6 py-8 text-center lg:px-10">
              {operations.bold.map((line) => (
                <p
                  key={line.strong}
                  className="text-base leading-relaxed text-ink"
                >
                  {line.pre}
                  <strong className="font-semibold">{line.strong}</strong>
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
