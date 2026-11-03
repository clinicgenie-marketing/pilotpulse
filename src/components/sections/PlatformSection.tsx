"use client";

import { useId, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { IcebergIllustration } from "@/components/sections/IcebergIllustration";
import { AccentHeading } from "@/components/ui/PageHero";
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

/**
 * Every layer's title and details are rendered into the same grid cell, so the
 * columns are always as tall as the longest layer and selection never moves the
 * page. Inactive panes are faded out and removed from the accessibility tree.
 */
function Stack({ children }: { children: React.ReactNode }) {
  return <div className="platform-stack">{children}</div>;
}

function Pane({ active, children }: { active: boolean; children: React.ReactNode }) {
  return (
    <div className="platform-pane" data-active={active ? "true" : "false"} aria-hidden={!active}>
      {children}
    </div>
  );
}

function LayerDetails({ layer }: { layer: PlatformLayer }) {
  return (
    <>
      <p className="platform-details-lead">{layer.summary}</p>
      {layer.intro ? <p className="platform-details-body">{layer.intro}</p> : null}
      <ul className="platform-details-list">
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
      {layer.closing ? <p className="platform-details-closing">{layer.closing}</p> : null}
    </>
  );
}

export function PlatformSection() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.16 });
  const show = Boolean(reduceMotion || inView);
  const headingId = "platform-heading";
  const uid = useId();
  const tablistId = `${uid}-layers`;
  const panelId = `${uid}-panel`;
  const tabId = (id: PlatformLayerId) => `${uid}-tab-${id}`;

  // Layer 01 by default. Selection is user-driven only — no automatic rotation.
  const [activeId, setActiveId] = useState<PlatformLayerId>("01");

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
            <AccentHeading text={platformBehind.heading} accent="every Digital Worker" />
          </h2>
          <p className="lead mt-3 platform-lead">{platformBehind.sub}</p>
        </motion.div>

        <motion.div
          className="platform-layout"
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: reduceMotion ? 0 : 0.34, delay: reduceMotion ? 0 : 0.08, ease: EASE }}
        >
          {/* Left — selected layer title */}
          <div className="platform-title-col">
            <p className="platform-col-label">AI architecture layer</p>
            <Stack>
              {platformBehind.layers.map((layer) => (
                <Pane key={layer.id} active={layer.id === activeId}>
                  <p className="platform-title-index" aria-hidden="true">
                    {layer.id}
                  </p>
                  <h3 className="platform-title-text">{layer.title}</h3>
                </Pane>
              ))}
            </Stack>
          </div>

          {/* Centre — iceberg with the five markers */}
          <div className="platform-visual">
            <IcebergIllustration
              activeId={activeId}
              onSelect={setActiveId}
              tablistId={tablistId}
              panelId={panelId}
              tabId={tabId}
            />
          </div>

          {/* Right — selected layer components */}
          <div className="platform-details-col">
            <p className="platform-col-label">Layer components</p>
            <div
              id={panelId}
              role="tabpanel"
              aria-labelledby={tabId(activeId)}
              tabIndex={0}
              className="platform-details-panel"
            >
              <Stack>
                {platformBehind.layers.map((layer) => (
                  <Pane key={layer.id} active={layer.id === activeId}>
                    {/* The bordered box hugs its own content; the shared grid cell
                        keeps the row height constant across layers. */}
                    <div className="platform-details">
                      <LayerDetails layer={layer} />
                    </div>
                  </Pane>
                ))}
              </Stack>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
