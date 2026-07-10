"use client";

import { useCallback, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { testimonials } from "@/lib/content";

function stackPosition(quoteIndex: number, activeIndex: number, total: number) {
  return (quoteIndex - activeIndex + total) % total;
}

/** Stacked card carousel — reference-style layout on dark theme. */
export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const quotes = testimonials.quotes;
  const count = quotes.length;

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % count);
  }, [count]);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + count) % count);
  }, [count]);

  return (
    <section className="py-16 lg:py-24" role="region" aria-label="Client testimonials">
      <div className="container-edge flex flex-col gap-[54px]">
        <Reveal>
          <SectionHeader
            eyebrow={testimonials.eyebrow}
            heading={testimonials.heading}
            align="center"
          />
        </Reveal>

        <Reveal delay={80} className="flex flex-col gap-6">
          {/* pb accounts for stacked cards that shift down */}
          <div className="relative mx-auto w-full max-w-3xl pb-8">
            <div className="relative h-[20rem] sm:h-[21rem]">
              {quotes.map((quote, quoteIndex) => {
                const position = stackPosition(quoteIndex, index, count);
                const isFront = position === 0;

                return (
                  <figure
                    key={quote.name}
                    className={`testimonial-stack-card testimonial-stack-card--${position} absolute inset-x-0 top-0 flex h-full flex-col justify-center gap-6 rounded-3xl border border-hairline bg-panel-card p-8 text-center shadow-glow-soft sm:gap-8 sm:p-10 lg:p-14 ${
                      isFront ? "cursor-pointer" : "pointer-events-none"
                    }`}
                    onClick={isFront ? next : undefined}
                    onKeyDown={
                      isFront
                        ? (e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              next();
                            }
                          }
                        : undefined
                    }
                    role={isFront ? "button" : undefined}
                    tabIndex={isFront ? 0 : -1}
                    aria-label={isFront ? `Next testimonial. Current: ${quote.name}` : undefined}
                  >
                    <blockquote
                      className="text-base leading-relaxed text-ink-body sm:text-lg"
                      aria-live={isFront ? "polite" : undefined}
                      aria-atomic="true"
                    >
                      &ldquo;{quote.quote}&rdquo;
                    </blockquote>
                    <figcaption>
                      <span className="block text-lg font-bold text-ink sm:text-xl">{quote.name}</span>
                      <span className="mt-2 inline-block max-w-full rounded-full border border-hairline px-3 py-0.5 text-xs text-ink-faint sm:max-w-none sm:whitespace-normal">
                        {quote.role},{" "}
                        <span className="font-semibold text-ink">{quote.company}</span>
                      </span>
                    </figcaption>
                  </figure>
                );
              })}
            </div>
          </div>

          <div className="flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline text-ink transition-colors hover:border-brand-blue/40 hover:text-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/40"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline text-ink transition-colors hover:border-brand-blue/40 hover:text-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/40"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
