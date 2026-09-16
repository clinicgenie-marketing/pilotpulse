"use client";

import { useId, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { IcebergIllustration } from "@/components/sections/IcebergIllustration";
import {
  platformBehind,
  type PlatformBullet,
  type PlatformLayer,
  type PlatformLayerId,
} from "@/lib/home-content";

const EASE = [0.22, 1, 0.36, 1] as const;

function isLeadBullet(bullet: PlatformBullet): bullet is { lead: string; rest: string } {
  return typeof bullet === "object";
}

function LayerPanel({
  layer,
  open,
  panelId,
}: {
  layer: PlatformLayer;
  open: boolean;
  panelId: string;
}) {
  return (
    <div
      id={panelId}
      className="platform-panel"
      data-open={open ? "true" : "false"}
      role="region"
      aria-labelledby={`${panelId}-title`}
      aria-hidden={!open}
    >
      <div className="platform-panel-inner">
        {layer.intro ? <p className="platform-panel-intro">{layer.intro}</p> : null}
        <ul className="platform-panel-list">
          {layer.bullets.map((bullet) =>
            isLeadBullet(bullet) ? (
              <li key={bullet.lead}>
                <strong>{bullet.lead}</strong> {bullet.rest}
              </li>
            ) : (
              <li key={bullet}>{bullet}</li>
            ),
          )}
        </ul>
        {layer.closing ? <p className="platform-panel-closing">{layer.closing}</p> : null}
      </div>
    </div>
  );
}

function LayerRow({
  layer,
  open,
  onToggle,
}: {
  layer: PlatformLayer;
  open: boolean;
  onToggle: (id: PlatformLayerId) => void;
}) {
  const reactId = useId();
  const panelId = `${reactId}-panel`;

  return (
    <li className="platform-row" data-open={open ? "true" : "false"}>
      <h3 className="platform-row-heading" id={`${panelId}-title`}>
        <button
          type="button"
          className="platform-row-trigger"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => onToggle(layer.id)}
        >
          <span className="platform-row-index">{layer.id}</span>
          <span className="platform-row-copy">
            <span className="platform-row-title">{layer.title}</span>
            <span className="platform-row-summary">{layer.summary}</span>
          </span>
          <span className="platform-row-icon" aria-hidden="true">
            {open ? <Minus className="h-4 w-4" strokeWidth={2.25} /> : <Plus className="h-4 w-4" strokeWidth={2.25} />}
          </span>
        </button>
      </h3>
      <LayerPanel layer={layer} open={open} panelId={panelId} />
    </li>
  );
}

export function PlatformSection() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.16 });
  const show = Boolean(reduceMotion || inView);
  const headingId = "platform-heading";
  const [activeId, setActiveId] = useState<PlatformLayerId | null>("01");

  const toggle = (id: PlatformLayerId) => {
    setActiveId((current) => (current === id ? null : id));
  };

  return (
    <section
      id="platform"
      ref={sectionRef}
      aria-labelledby={headingId}
      className="platform-section section-pad border-b border-line"
    >
      <div className="container-edge">
        <motion.div
          className="platform-intro"
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: reduceMotion ? 0 : 0.32, ease: EASE }}
        >
          <p className="eyebrow platform-eyebrow">{platformBehind.eyebrow}</p>
          <h2 id={headingId} className="heading-2 mt-2">
            {platformBehind.heading}
          </h2>
          <p className="lead mt-3 platform-lead">{platformBehind.sub}</p>
        </motion.div>

        <div className="platform-layout">
          <motion.div
            className="platform-visual"
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: reduceMotion ? 0 : 0.34, delay: reduceMotion ? 0 : 0.08, ease: EASE }}
          >
            <IcebergIllustration activeId={activeId} />
          </motion.div>

          <motion.ul
            className="platform-accordion"
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: reduceMotion ? 0 : 0.34, delay: reduceMotion ? 0 : 0.12, ease: EASE }}
          >
            {platformBehind.layers.map((layer) => (
              <LayerRow key={layer.id} layer={layer} open={activeId === layer.id} onToggle={toggle} />
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
