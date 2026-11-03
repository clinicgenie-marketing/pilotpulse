"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { CTAButton } from "@/components/ui/CTAButton";
import { digitalWorkforce } from "@/lib/home-content";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Compact CTA banner pointing at /digital-workers. The individual Digital Worker
 * cards live on that page (and on /solutions), not here.
 */
export function DigitalWorkforce() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.16 });
  const show = Boolean(reduceMotion || inView);
  const headingId = "workforce-heading";

  return (
    <section
      id="digital-workers"
      ref={sectionRef}
      aria-labelledby={headingId}
      className="section-pad border-b border-line bg-background"
    >
      <div className="container-edge">
        <motion.div
          className="dw-banner"
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: reduceMotion ? 0 : 0.32, ease: EASE }}
        >
          <div className="dw-banner-copy">
            <p className="eyebrow">{digitalWorkforce.eyebrow}</p>
            <h2 id={headingId} className="heading-2 mt-3">
              {digitalWorkforce.headingBefore}{" "}
              <span className="heading-gradient">{digitalWorkforce.headingAccent}</span>
            </h2>
            <p className="lead mt-4 max-w-[46ch] text-ink-muted">{digitalWorkforce.sub}</p>
          </div>
          <CTAButton href={digitalWorkforce.cta.href} withArrow className="dw-banner-cta">
            {digitalWorkforce.cta.label}
          </CTAButton>
        </motion.div>
      </div>
    </section>
  );
}
