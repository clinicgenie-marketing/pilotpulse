"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { DigitalWorkerOfferingCard } from "@/components/sections/DigitalWorkerOfferingCard";
import { digitalWorkforce } from "@/lib/home-content";

const EASE = [0.22, 1, 0.36, 1] as const;

export function DigitalWorkforce() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.16 });
  const show = Boolean(reduceMotion || inView);
  const headingId = "workforce-heading";

  return (
    <section
      id="products"
      ref={sectionRef}
      aria-labelledby={headingId}
      className="section-pad border-b border-line bg-background"
    >
      <div className="container-edge">
        <motion.div
          className="max-w-2xl"
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: reduceMotion ? 0 : 0.32, ease: EASE }}
        >
          <p className="eyebrow">{digitalWorkforce.eyebrow}</p>
          <h2 id={headingId} className="heading-2 mt-3">
            {digitalWorkforce.headingBefore}{" "}
            <span className="heading-gradient">{digitalWorkforce.headingAccent}</span>
          </h2>
          <p className="lead mt-4 max-w-[54ch] text-ink-muted">{digitalWorkforce.sub}</p>
        </motion.div>

        <ul className="dw-offering-grid mt-12">
          {digitalWorkforce.offerings.map((offering, index) => (
            <motion.li
              key={offering.id}
              className="h-full"
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{
                duration: reduceMotion ? 0 : 0.3,
                delay: reduceMotion ? 0 : 0.16 + index * 0.06,
                ease: EASE,
              }}
            >
              <DigitalWorkerOfferingCard offering={offering} />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
