"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { testimonials } from "@/lib/content";

/**
 * Single wide testimonial card with equal pill carousel dots, exactly as the
 * reference. Auto-advances gently; pauses on hover; respects reduced motion.
 */
export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const paused = useRef(false);
  const quotes = testimonials.quotes;

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      if (!paused.current) setIndex((i) => (i + 1) % quotes.length);
    }, 7000);
    return () => clearInterval(id);
  }, [quotes.length]);

  const active = quotes[index];

  return (
    <section className="py-20 lg:py-24">
      <div className="container-edge">
        <Reveal className="text-center">
          <h2 className="heading-2">{testimonials.heading}</h2>
        </Reveal>

        <Reveal delay={100}>
          <figure
            onMouseEnter={() => (paused.current = true)}
            onMouseLeave={() => (paused.current = false)}
            className="mx-auto mt-10 flex min-h-[27rem] flex-col items-center justify-center gap-12 rounded-3xl border border-white/20 bg-[rgba(21,16,56,0.15)] px-6 py-12 text-center sm:px-14 lg:mt-12 lg:px-24"
            aria-live="polite"
          >
            <blockquote className="max-w-[64.5rem] text-[1.25rem] font-semibold leading-relaxed text-ink sm:text-[1.625rem] lg:text-[2.0625rem] lg:leading-[2.75rem]">
              &ldquo;{active.quote}&rdquo;
            </blockquote>
            <figcaption className="flex flex-col items-center gap-3">
              <span className="text-xl font-bold text-ink lg:text-2xl">{active.name}</span>
              <span className="flex items-center gap-3">
                <Image
                  src={active.logo}
                  alt={active.company}
                  width={110}
                  height={28}
                  className="h-7 w-auto object-contain"
                />
                <span className="text-[1.0625rem] text-ink-body lg:text-[1.1875rem]">
                  {active.role}, {active.company}
                </span>
              </span>
            </figcaption>
          </figure>
        </Reveal>

        {/* dots — equal pills, as the reference */}
        <div className="mt-10 flex items-center justify-center gap-6 lg:mt-16" role="tablist" aria-label="Testimonials">
          {quotes.map((q, i) => (
            <button
              key={q.name}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show testimonial from ${q.name}`}
              onClick={() => setIndex(i)}
              className={`h-2.5 w-14 rounded-full transition-colors duration-300 lg:w-[5.5rem] ${
                i === index ? "bg-ink-body" : "bg-white/40 hover:bg-white/55"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
