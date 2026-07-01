"use client";

import Image from "next/image";
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
      <div className="container-edge">
        <Reveal className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            eyebrow={testimonials.eyebrow}
            heading={testimonials.heading}
            align="left"
          />
          <div className="flex shrink-0 items-center gap-2">
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

        <Reveal delay={80}>
          <div className="relative mx-auto h-[26rem] max-w-3xl sm:h-[28rem] lg:h-[30rem]">
            {quotes.map((quote, quoteIndex) => {
              const position = stackPosition(quoteIndex, index, count);
              const isFront = position === 0;

              return (
                <figure
                  key={quote.name}
                  className={`testimonial-stack-card testimonial-stack-card--${position} absolute inset-x-0 top-0 flex min-h-[22rem] flex-col justify-between rounded-3xl border border-hairline bg-panel-card p-6 shadow-glow-soft sm:min-h-[24rem] sm:p-8 lg:p-10 ${
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
                  <figcaption className="mt-6 flex items-center gap-8 sm:mt-8">
                    <div className="relative h-24 w-36 shrink-0 sm:h-28 sm:w-40 lg:h-32 lg:w-44">
                      <Image
                        src={quote.logo}
                        alt={quote.company}
                        fill
                        sizes="(max-width: 1024px) 10rem, 11rem"
                        className="object-contain object-left"
                      />
                    </div>
                    <div className="min-w-0">
                      <span className="block font-bold text-ink">{quote.name}</span>
                      <span className="mt-1 inline-block max-w-full truncate rounded-full border border-hairline px-3 py-0.5 text-xs text-ink-faint sm:max-w-none sm:whitespace-normal">
                        {quote.role}, {quote.company}
                      </span>
                    </div>
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
