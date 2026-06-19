"use client";

import Image from "next/image";
import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { testimonials } from "@/lib/content";

/** Micron-style featured content grid — 1 large + 2 stacked cards. */
export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const quotes = testimonials.quotes;
  const active = quotes[index];
  const others = quotes.filter((_, i) => i !== index);

  return (
    <section className="py-16 lg:py-24">
      <div className="container-edge">
        <Reveal className="mx-auto mb-10 max-w-2xl">
          <SectionHeader
            eyebrow={testimonials.eyebrow}
            heading={testimonials.heading}
            align="center"
          />
        </Reveal>

        {/* Desktop: featured grid */}
        <div className="hidden gap-5 lg:grid lg:grid-cols-[2fr_1fr]">
          <Reveal>
            <figure className="card-interactive flex h-full min-h-[22rem] flex-col justify-between rounded-xl border border-hairline bg-panel-card p-8">
              <blockquote className="text-xl font-semibold leading-relaxed text-ink lg:text-2xl">
                &ldquo;{active.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4 border-t border-hairline pt-6">
                <Image
                  src={active.logo}
                  alt={active.company}
                  width={100}
                  height={28}
                  className="h-7 w-auto object-contain"
                />
                <div>
                  <span className="block font-bold text-ink">{active.name}</span>
                  <span className="text-sm text-ink-body">
                    {active.role}, {active.company}
                  </span>
                </div>
              </figcaption>
            </figure>
          </Reveal>

          <div className="flex flex-col gap-5">
            {others.map((q) => {
              const originalIndex = quotes.indexOf(q);
              return (
                <Reveal key={q.name} delay={80}>
                  <button
                    type="button"
                    onClick={() => setIndex(originalIndex)}
                    className="card-interactive flex flex-1 flex-col rounded-xl border border-hairline bg-panel-card p-6 text-left transition-colors hover:border-brand-blue/40"
                  >
                    <blockquote className="line-clamp-4 text-sm leading-relaxed text-ink-body">
                      &ldquo;{q.quote}&rdquo;
                    </blockquote>
                    <figcaption className="mt-4 flex items-center gap-3">
                      <Image
                        src={q.logo}
                        alt={q.company}
                        width={80}
                        height={24}
                        className="h-5 w-auto object-contain opacity-80"
                      />
                      <span className="text-xs font-semibold text-ink">{q.name}</span>
                    </figcaption>
                  </button>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Mobile: carousel */}
        <Reveal delay={80} className="lg:hidden">
          <figure className="card-interactive rounded-xl border border-hairline bg-panel-card p-6">
            <blockquote className="text-lg font-semibold leading-relaxed text-ink">
              &ldquo;{active.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 flex flex-col gap-2 border-t border-hairline pt-5">
              <Image
                src={active.logo}
                alt={active.company}
                width={100}
                height={28}
                className="h-6 w-auto object-contain"
              />
              <span className="font-bold text-ink">{active.name}</span>
              <span className="text-sm text-ink-body">
                {active.role}, {active.company}
              </span>
            </figcaption>
          </figure>

          <div className="mt-6 flex items-center justify-center gap-4" role="tablist" aria-label="Testimonials">
            {quotes.map((q, i) => (
              <button
                key={q.name}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Show testimonial from ${q.name}`}
                onClick={() => setIndex(i)}
                className={`h-2 w-10 rounded-full transition-colors ${
                  i === index ? "bg-brand-blue" : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
