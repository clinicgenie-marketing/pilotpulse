"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { DigitalWorkerProfileCard } from "@/components/sections/DigitalWorkerProfileCard";
import { OnPremisesPanel } from "@/components/sections/OnPremisesPanel";
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
            {digitalWorkforce.heading}
          </h2>
          <p className="lead mt-4 max-w-[54ch] text-ink-muted">{digitalWorkforce.sub}</p>
        </motion.div>

        <ul className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {digitalWorkforce.workers.map((worker, index) => (
            <motion.li
              key={worker.code}
              className="h-full"
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{
                duration: reduceMotion ? 0 : 0.3,
                delay: reduceMotion ? 0 : 0.16 + index * 0.08,
                ease: EASE,
              }}
            >
              <DigitalWorkerProfileCard
                card={{
                  label: "Digital Worker",
                  code: worker.code,
                  name: worker.name,
                  headline: worker.headline,
                  points: worker.points,
                  glyph: worker.glyph,
                }}
              />
            </motion.li>
          ))}

          <motion.li
            id="on-premises"
            className="h-full"
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{
              duration: reduceMotion ? 0 : 0.3,
              delay: reduceMotion ? 0 : 0.48,
              ease: EASE,
            }}
          >
            <OnPremisesPanel content={digitalWorkforce.onPremises} />
          </motion.li>

          {digitalWorkforce.services.map((item, index) => (
            <motion.li
              key={item.name}
              className="h-full"
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{
                duration: reduceMotion ? 0 : 0.3,
                delay: reduceMotion ? 0 : 0.56 + index * 0.08,
                ease: EASE,
              }}
            >
              <DigitalWorkerProfileCard
                card={{
                  label: "Service",
                  name: item.name,
                  headline: item.title,
                  points: item.points,
                  glyph: item.icon === "briefcase" ? "briefcase" : "compass",
                }}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
