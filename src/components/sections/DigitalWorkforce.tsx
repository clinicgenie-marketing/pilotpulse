"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { CTAButton } from "@/components/ui/CTAButton";
import { DIGITAL_WORKER_ICONS } from "@/components/sections/digitalWorkerIcons";
import { digitalWorkforce } from "@/lib/home-content";

const EASE = [0.22, 1, 0.36, 1] as const;

function rosterLabel(title: string) {
  return title.replace(/ AI$/, "");
}

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
          className="dw-roster-head"
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: reduceMotion ? 0 : 0.32, ease: EASE }}
        >
          <div className="dw-roster-copy">
            <p className="eyebrow">{digitalWorkforce.eyebrow}</p>
            <h2 id={headingId} className="heading-2 mt-3">
              {digitalWorkforce.headingBefore}{" "}
              <span className="heading-gradient">{digitalWorkforce.headingAccent}</span>
            </h2>
            <p className="lead mt-4 max-w-[54ch] text-ink-muted">{digitalWorkforce.sub}</p>
          </div>
          <CTAButton href={digitalWorkforce.cta.href} withArrow className="dw-roster-cta">
            {digitalWorkforce.cta.label}
          </CTAButton>
        </motion.div>

        <ul className="dw-roster-grid mt-12">
          {digitalWorkforce.offerings.map((offering, index) => {
            const Icon = DIGITAL_WORKER_ICONS[offering.icon];
            return (
              <motion.li
                key={offering.id}
                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.3,
                  delay: reduceMotion ? 0 : 0.12 + index * 0.05,
                  ease: EASE,
                }}
              >
                <Link href={`/digital-workers#${offering.id}`} className="dw-roster-card">
                  <div className="dw-roster-top">
                    <p className="dw-roster-index">Digital Worker {offering.number}</p>
                    <span className="dw-roster-go" aria-hidden="true">
                      <ArrowUpRight className="h-4 w-4" strokeWidth={2.25} />
                    </span>
                  </div>
                  <span className="dw-roster-icon" aria-hidden="true">
                    <Icon className="h-10 w-10" strokeWidth={1.75} />
                  </span>
                  <h3 className="dw-roster-title">{rosterLabel(offering.title)}</h3>
                  <p className="dw-roster-headline">{offering.headline}</p>
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
