"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { WorkerIdentity } from "@/components/icons/WorkerIdentity";
import type { DigitalWorkerProfile } from "@/lib/home-content";

const ROTATE_MS = 3200;

export function DigitalWorkersHeroRoster({
  heading,
  workers,
}: {
  eyebrow?: string;
  heading: string;
  workers: readonly DigitalWorkerProfile[];
}) {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = workers.length;
  const current = workers[index];
  const previous = workers[(index - 1 + count) % count];
  const next = workers[(index + 1) % count];

  useEffect(() => {
    if (reduceMotion || paused || count < 2) return undefined;
    const timer = window.setInterval(() => {
      setIndex((value) => (value + 1) % count);
    }, ROTATE_MS);
    return () => window.clearInterval(timer);
  }, [count, paused, reduceMotion]);

  return (
    <div
      className="dw-stack"
      aria-label={heading}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <button
        type="button"
        className="dw-stack-card dw-stack-card--back"
        onClick={() => setIndex((index - 1 + count) % count)}
      >
        {previous.name}
      </button>

      <span className="dw-stack-joint" aria-hidden="true" />

      <div className="dw-stack-card dw-stack-card--active" aria-current="true">
        <p className="sr-only" aria-live="polite">
          {current.name}
        </p>
        <div className="min-w-0">
          <p className="dw-stack-name">{current.name}</p>
          <span className="dw-stack-rule" aria-hidden="true" />
        </div>
        <span className="dw-stack-icon" aria-hidden="true">
          <WorkerIdentity name={current.glyph} product={current.name} variant="tile" />
        </span>
      </div>

      <span className="dw-stack-joint" aria-hidden="true" />

      <button
        type="button"
        className="dw-stack-card dw-stack-card--back"
        onClick={() => setIndex((index + 1) % count)}
      >
        {next.name}
      </button>
    </div>
  );
}
