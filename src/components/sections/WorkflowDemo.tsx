"use client";

import { useCallback, useEffect, useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { Building2, HardHat, Heart, Pause, Play, Plane, RotateCcw, Truck, UserSearch } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { workflowDemos, type WorkflowIcon } from "@/lib/workflow-demos";
import { WorkflowSequence } from "./workflow-demo/WorkflowSequence";
import { resolveTiming } from "./workflow-demo/useWorkflowPlayback";

const ICONS: Record<WorkflowIcon, LucideIcon> = {
  truck: Truck,
  plane: Plane,
  heart: Heart,
  building: Building2,
  userSearch: UserSearch,
  hardHat: HardHat,
};

type WorkflowDemoProps = {
  id?: string;
  eyebrow?: string;
  heading?: ReactNode;
  lead?: string;
  defaultTab?: string;
  hideHeader?: boolean;
  hideTabs?: boolean;
  hideOutcome?: boolean;
  compact?: boolean;
};

export function WorkflowDemo({
  id = "in-production",
  eyebrow = "In production",
  heading,
  lead,
  defaultTab,
  hideHeader = false,
  hideTabs = false,
  hideOutcome = false,
  compact = false,
}: WorkflowDemoProps = {}) {
  const reduceMotion = useReducedMotion();
  const [activeId, setActiveId] = useState(defaultTab ?? workflowDemos[0].id);
  const [paused, setPaused] = useState(false);
  const [playbackDone, setPlaybackDone] = useState(false);
  // The reduced-motion preference is only knowable on the client, so it must not
  // change the first render or hydration mismatches.
  const [mounted, setMounted] = useState(false);
  const tabIds = useId();
  const cardRef = useRef<HTMLDivElement | null>(null);
  const replayRef = useRef<(() => void) | null>(null);
  const inView = useInView(cardRef, { amount: 0.32, margin: "0px 0px -8% 0px" });
  const active = workflowDemos.find((item) => item.id === activeId) ?? workflowDemos[0];
  const instant = mounted && Boolean(reduceMotion);
  // Off-screen or paused sequences hold where they are.
  const playing = instant || (inView && !paused);
  const holdMs = resolveTiming(active.timing).holdMs;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setPlaybackDone(false);
  }, [activeId]);

  // Auto-advance to the next industry once the current sequence has held.
  useEffect(() => {
    if (hideTabs || instant || paused || !inView || !playbackDone) return undefined;
    const timer = window.setTimeout(() => {
      setActiveId((current) => {
        const index = workflowDemos.findIndex((item) => item.id === current);
        return workflowDemos[(index + 1) % workflowDemos.length].id;
      });
    }, holdMs);
    return () => window.clearTimeout(timer);
  }, [hideTabs, holdMs, instant, inView, paused, playbackDone]);

  const markPlaybackDone = useCallback(() => {
    setPlaybackDone(true);
  }, []);

  const registerReplay = useCallback((replay: () => void) => {
    replayRef.current = replay;
  }, []);

  function selectTab(nextId: string) {
    setActiveId(nextId);
  }

  function onTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const last = workflowDemos.length - 1;
    let next = index;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") next = index === last ? 0 : index + 1;
    else if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = index === 0 ? last : index - 1;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = last;
    else return;

    event.preventDefault();
    selectTab(workflowDemos[next].id);
    document.getElementById(`${tabIds}-${workflowDemos[next].id}`)?.focus();
  }

  function replayActive() {
    setPlaybackDone(false);
    setPaused(false);
    replayRef.current?.();
  }

  const headingNode = heading ?? (
    <>
      Agentic AI across every <span className="heading-gradient">workflow.</span>
    </>
  );
  const leadText =
    lead ??
    "Not a chatbot. Your AI worker takes action across WhatsApp, email and web, checking systems, booking slots, escalating intelligently and closing the loop.";

  const card = (
    <div className={compact ? "" : "overflow-visible px-4"}>
      <div ref={cardRef} className="workflow-demo-wrap">
        <p className="workflow-live-pill">
          <span className="workflow-live-dot size-2 rounded-full bg-emerald-500" aria-hidden="true" />
          {active.badge}
        </p>
        {instant ? null : (
          <div className="workflow-controls">
            <button
              type="button"
              className="workflow-control-btn"
              aria-pressed={paused}
              onClick={() => setPaused((value) => !value)}
            >
              {paused ? (
                <Play className="h-3.5 w-3.5" aria-hidden="true" />
              ) : (
                <Pause className="h-3.5 w-3.5" aria-hidden="true" />
              )}
              <span className="sr-only">{paused ? "Resume the sequence" : "Pause the sequence"}</span>
            </button>
            <button type="button" className="workflow-control-btn" onClick={replayActive}>
              <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="sr-only">Replay this sequence</span>
            </button>
          </div>
        )}
        <div className="workflow-demo-card">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active.id}
              id={`${tabIds}-panel-${active.id}`}
              role="tabpanel"
              aria-labelledby={`${tabIds}-${active.id}`}
              initial={instant ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={instant ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="h-full"
            >
              <WorkflowSequence
                item={active}
                instant={instant}
                playing={playing}
                hideOutcome={hideOutcome}
                onComplete={markPlaybackDone}
                registerReplay={registerReplay}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );

  if (compact) return card;

  return (
    <section id={id} className="section-pad overflow-visible border-b border-line bg-background">
      <div className="container-edge">
        {hideHeader ? null : (
          <div className="mx-auto mb-10 max-w-[760px] text-center">
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="heading-2 mt-3">{headingNode}</h2>
            <p className="lead mt-4">{leadText}</p>
          </div>
        )}

        {hideTabs ? null : (
          <div
            role="tablist"
            aria-label="Industry workflow examples"
            className="mb-8 flex flex-wrap justify-center gap-2"
          >
            {workflowDemos.map((item, index) => {
              const Icon = ICONS[item.icon];
              const selected = item.id === activeId;
              return (
                <button
                  key={item.id}
                  id={`${tabIds}-${item.id}`}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls={`${tabIds}-panel-${item.id}`}
                  tabIndex={selected ? 0 : -1}
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[12.5px] font-medium transition-colors duration-[200ms] ${
                    selected
                      ? "border-primary bg-primary text-white"
                      : "border-line bg-surface text-ink-muted hover:border-primary/40 hover:text-ink"
                  }`}
                  onClick={() => selectTab(item.id)}
                  onKeyDown={(event) => onTabKeyDown(event, index)}
                >
                  <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                  {item.label}
                </button>
              );
            })}
          </div>
        )}

        {card}
      </div>
    </section>
  );
}
