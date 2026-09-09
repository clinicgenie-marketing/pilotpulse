"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { SupportBanner } from "@/components/sections/SupportBanner";
import Aurora from "@/components/ui/Aurora";
import { CTAButton } from "@/components/ui/CTAButton";
import { heroContent } from "@/lib/home-content";

const SLOT_EASE = [0.22, 1, 0.36, 1] as const;
const AURORA_STOPS = ["#4638F5", "#3686F2", "#B9B3FB"];

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion) return undefined;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % heroContent.pairs.length);
    }, 2800);
    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  const [verb, industry] = heroContent.pairs[index];

  return (
    <section className="relative -mt-16 flex min-h-svh flex-col overflow-hidden bg-surface">
      <div className="hero-aurora" aria-hidden="true">
        <Aurora
          colorStops={AURORA_STOPS}
          blend={0.5}
          amplitude={1}
          speed={0.5}
          lightMode
        />
      </div>
      <div className="container-edge relative z-10 flex flex-1 flex-col pb-10 pt-16 text-center lg:pb-12">
        <div className="flex w-full flex-1 flex-col items-center justify-center py-10">
          <h1 className="heading-hero w-full">
            <span className="block text-neutral-700">{heroContent.lineOne}</span>
            <span className="mt-2 flex w-full justify-center">
              <motion.span
                className="inline-flex items-baseline justify-center whitespace-nowrap"
                layout
                transition={{ duration: reduceMotion ? 0 : 0.45, ease: SLOT_EASE }}
              >
                <RotatingSlot current={verb} reduceMotion={reduceMotion} />
                <span className="hero-mid text-neutral-700">{heroContent.lineTwoMid}</span>
                <RotatingSlot current={industry} reduceMotion={reduceMotion} />
              </motion.span>
            </span>
            <span className="mt-2 block text-neutral-700">{heroContent.lineThree}</span>
          </h1>
          <p className="lead mx-auto mt-6 max-w-[52ch]">{heroContent.support}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <CTAButton href={heroContent.primaryCta.href} withArrow>
              {heroContent.primaryCta.label}
            </CTAButton>
            <CTAButton href={heroContent.secondaryCta.href} variant="secondary">
              {heroContent.secondaryCta.label}
            </CTAButton>
          </div>
        </div>
        <SupportBanner />
      </div>
    </section>
  );
}

function RotatingSlot({
  current,
  reduceMotion,
}: {
  current: string;
  reduceMotion: boolean | null;
}) {
  return (
    <motion.span
      className="relative inline-block text-primary"
      layout
      transition={{ duration: reduceMotion ? 0 : 0.45, ease: SLOT_EASE }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={current}
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: 0.28, ease: SLOT_EASE }}
          className="relative inline-block whitespace-nowrap font-bold"
        >
          {current}
          {reduceMotion ? null : (
            <span
              aria-hidden="true"
              className="hero-word-sweep pointer-events-none absolute left-0 top-0 whitespace-nowrap font-bold"
            >
              {current}
            </span>
          )}
        </motion.span>
      </AnimatePresence>
    </motion.span>
  );
}
