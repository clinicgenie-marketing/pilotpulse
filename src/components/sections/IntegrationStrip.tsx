"use client";

import type { CSSProperties } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { CTAButton } from "@/components/ui/CTAButton";
import { IntegrationLogo, INTEGRATION_BRAND } from "@/components/icons/IntegrationLogos";
import { integrations, type IntegrationName } from "@/lib/home-content";

const TILE_SPRING = { type: "spring", stiffness: 360, damping: 32 } as const;

export function IntegrationStrip() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-pad border-b border-line bg-surface">
      <div className="container-edge">
        <div className="max-w-3xl">
          <p className="eyebrow">{integrations.eyebrow}</p>
          <h2 className="heading-2 mt-3 max-w-3xl">{integrations.heading}</h2>
          <p className="lead mt-4 max-w-[54ch]">{integrations.body}</p>
        </div>

        <div className="relative mt-10">
          <IntegrationNetwork />
          <ul className="relative grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4">
            {integrations.names.map((name) => (
              <IntegrationTile key={name} name={name} reduceMotion={reduceMotion} />
            ))}
          </ul>
        </div>

        <div className="integration-callout mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="max-w-[54ch]">
            <p className="heading-4">{integrations.callout.heading}</p>
            <p className="mt-1 text-base leading-relaxed text-ink-muted">{integrations.callout.body}</p>
          </div>
          <CTAButton href={integrations.callout.cta.href} variant="secondary" size="compact" withArrow>
            {integrations.callout.cta.label}
          </CTAButton>
        </div>
      </div>
    </section>
  );
}

function IntegrationTile({
  name,
  reduceMotion,
}: {
  name: IntegrationName;
  reduceMotion: boolean | null;
}) {
  const isCore = integrations.core.includes(name);
  const lift = reduceMotion ? undefined : { y: -3 };

  return (
    <motion.li
      tabIndex={0}
      aria-label={isCore ? `${name}, core connection` : `${name} integration`}
      whileHover={lift}
      whileFocus={lift}
      transition={TILE_SPRING}
      style={{ "--integration-brand": INTEGRATION_BRAND[name] } as CSSProperties}
      className="integration-tile relative flex min-h-36 flex-col items-center justify-center px-4 py-5 outline-none sm:min-h-40"
    >
      {isCore ? (
        <span className="absolute right-2 top-2 rounded-full bg-primary-soft px-2 py-0.5 text-[10.5px] font-semibold uppercase tracking-wider text-primary">
          Core connection
        </span>
      ) : null}
      <span className="relative grid size-14 place-items-center">
        <span className="logo-pulse absolute inset-1 rounded-full" aria-hidden="true" />
        <span className="relative grid place-items-center">
          <IntegrationLogo name={name} />
        </span>
      </span>
      <span className="integration-label mt-4 text-center text-xs font-semibold uppercase leading-snug tracking-wider text-ink-muted">
        {name}
      </span>
    </motion.li>
  );
}

function IntegrationNetwork() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full text-primary opacity-5"
      viewBox="0 0 1200 360"
      fill="none"
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="1">
        <path d="M80 70h140M220 70v90M220 160h180M400 160v80M400 240h220" />
        <path d="M640 80h200M840 80v140M840 220h180" />
        <path d="M160 280h260M980 140v120" />
      </g>
      <g fill="currentColor">
        <circle cx="80" cy="70" r="3.5" />
        <circle cx="220" cy="70" r="3.5" />
        <circle cx="220" cy="160" r="3.5" />
        <circle cx="400" cy="160" r="3.5" />
        <circle cx="400" cy="240" r="3.5" />
        <circle cx="620" cy="240" r="3.5" />
        <circle cx="640" cy="80" r="3.5" />
        <circle cx="840" cy="80" r="3.5" />
        <circle cx="840" cy="220" r="3.5" />
        <circle cx="1020" cy="220" r="3.5" />
        <circle cx="160" cy="280" r="3.5" />
        <circle cx="420" cy="280" r="3.5" />
        <circle cx="980" cy="140" r="3.5" />
        <circle cx="980" cy="260" r="3.5" />
      </g>
    </svg>
  );
}
