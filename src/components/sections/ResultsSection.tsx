"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { results, type ResultMetric } from "@/lib/home-content";

const EASE = [0.22, 1, 0.36, 1] as const;

export function ResultsSection() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.28 });
  const show = Boolean(reduceMotion || inView);

  return (
    <section
      id="results"
      ref={sectionRef}
      className="section-pad border-b border-line bg-background"
    >
      <div className="container-edge">
        <motion.div
          className="max-w-2xl"
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: reduceMotion ? 0 : 0.32, ease: EASE }}
        >
          <p className="eyebrow">{results.eyebrow}</p>
          <h2 className="heading-2 mt-3">{results.heading}</h2>
          <p className="lead mt-4 text-ink-muted">{results.sub}</p>
        </motion.div>

        <motion.div
          className="relative mt-10 origin-left border-t border-line"
          initial={reduceMotion ? false : { scaleX: 0 }}
          animate={show ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.32, delay: reduceMotion ? 0 : 0.18, ease: EASE }}
          aria-hidden="true"
        >
          <span className="absolute left-0 top-0 h-0.5 w-16 -translate-y-px bg-primary" />
        </motion.div>

        <ul className="mt-8 grid grid-cols-1 divide-y divide-line md:grid-cols-3 md:divide-x md:divide-y-0">
          {results.metrics.map((metric, index) => (
            <li key={metric.context} className="py-6 md:px-8 md:py-0 md:first:pl-0 md:last:pr-0">
              <MetricStat
                metric={metric}
                active={show}
                delay={reduceMotion ? 0 : 0.28 + index * 0.09}
                reduceMotion={reduceMotion}
              />
            </li>
          ))}
        </ul>

        <motion.p
          className="mt-8 max-w-2xl text-base leading-relaxed text-ink-muted"
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          transition={{ duration: reduceMotion ? 0 : 0.28, delay: reduceMotion ? 0 : 0.62, ease: EASE }}
        >
          {results.qualification}
        </motion.p>
      </div>
    </section>
  );
}

function MetricStat({
  metric,
  active,
  delay,
  reduceMotion,
}: {
  metric: ResultMetric;
  active: boolean;
  delay: number;
  reduceMotion: boolean | null;
}) {
  const [value, setValue] = useState(reduceMotion ? metric.numeric : 0);
  const finalLabel = `${metric.prefix}${metric.numeric}${metric.suffix} ${metric.description}`;

  useEffect(() => {
    if (reduceMotion) {
      setValue(metric.numeric);
      return undefined;
    }
    if (!active) return undefined;

    const duration = 620;
    const startAt = performance.now() + delay * 1000;
    let frame = 0;

    function tick(now: number) {
      if (now < startAt) {
        frame = requestAnimationFrame(tick);
        return;
      }
      const progress = Math.min((now - startAt) / duration, 1);
      setValue(Math.round(metric.numeric * progress));
      if (progress < 1) frame = requestAnimationFrame(tick);
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, delay, metric.numeric, reduceMotion]);

  return (
    <article>
      <p className="sr-only">
        {metric.context}. {finalLabel}
      </p>
      <motion.div
        aria-hidden="true"
        initial={reduceMotion ? false : { opacity: 0, y: 10 }}
        animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: reduceMotion ? 0 : 0.3, delay, ease: EASE }}
      >
        <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
          {metric.context}
        </p>
        <p className="heading-1 mt-3 whitespace-nowrap tabular-nums">
          <span className="text-ink-muted">{metric.prefix}</span>
          <span className="text-primary">{value}</span>
          <span className="text-ink-muted">{metric.suffix}</span>
        </p>
        <p className="mt-3 max-w-[28ch] text-base leading-relaxed text-ink-muted">{metric.description}</p>
      </motion.div>
    </article>
  );
}
