"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { WorkflowStep, WorkflowTiming } from "@/lib/workflow-demos";

/**
 * Shared pacing defaults. Any example can override these through its own `timing`
 * block, and any single step through `dwellMs`, so examples stay independently
 * configurable without the content module knowing about timers.
 */
export const DEFAULT_TIMING: Required<WorkflowTiming> = {
  startMs: 420,
  baseMs: 560,
  perCharMs: 26,
  minMs: 700,
  maxMs: 2600,
  cardMs: 1500,
  handoverMs: 1200,
  holdMs: 2800,
};

export function resolveTiming(timing?: WorkflowTiming): Required<WorkflowTiming> {
  return timing ? { ...DEFAULT_TIMING, ...timing } : DEFAULT_TIMING;
}

/** Dwell before the step at `index` is revealed, in ms. */
export function stepDwellMs(
  step: WorkflowStep | undefined,
  index: number,
  timing: Required<WorkflowTiming>,
): number {
  if (!step) return timing.minMs;
  if (step.dwellMs !== undefined) return step.dwellMs;
  if (index === 0) return timing.startMs;
  if (step.kind === "card") return timing.cardMs;
  if (step.kind === "handover") return timing.handoverMs;
  const chars = step.text.length;
  return Math.min(timing.maxMs, Math.max(timing.minMs, timing.baseMs + chars * timing.perCharMs));
}

type Options = {
  steps: WorkflowStep[];
  /** Resetting key — changing it rewinds the sequence (the active example id). */
  resetKey: string;
  /** False while off-screen or paused: the sequence holds where it is. */
  playing: boolean;
  /** Reduced motion: reveal everything at once and never animate. */
  instant: boolean;
  timing?: WorkflowTiming;
  onComplete?: () => void;
};

export type WorkflowPlayback = {
  /** Number of steps revealed so far. */
  revealed: number;
  complete: boolean;
  /** True while the next step is an AI/system reply that has not landed yet. */
  typing: boolean;
  /** Set of checklist ids completed by the revealed steps. */
  completed: Set<string>;
  replay: () => void;
};

export function useWorkflowPlayback({
  steps,
  resetKey,
  playing,
  instant,
  timing,
  onComplete,
}: Options): WorkflowPlayback {
  const total = steps.length;
  // Memoised: a fresh object each render would restart the pending timer forever.
  const resolved = useMemo(() => resolveTiming(timing), [timing]);
  // Always start empty so server and first client render agree; the effect below
  // fills the sequence in immediately when reduced motion is on.
  const [revealed, setRevealed] = useState(0);
  const completeRef = useRef(false);

  // Switching example (or motion mode) clears every revealed step and checklist
  // state; the pending timer below is torn down by its own cleanup.
  useEffect(() => {
    setRevealed(instant ? total : 0);
    completeRef.current = false;
  }, [resetKey, instant, total]);

  useEffect(() => {
    if (instant || !playing || revealed >= total) return undefined;
    const timer = window.setTimeout(
      () => setRevealed((count) => count + 1),
      stepDwellMs(steps[revealed], revealed, resolved),
    );
    return () => window.clearTimeout(timer);
  }, [instant, playing, revealed, steps, total, resolved]);

  const complete = revealed >= total;

  useEffect(() => {
    if (!complete || completeRef.current) return;
    completeRef.current = true;
    onComplete?.();
  }, [complete, onComplete]);

  const next = steps[revealed];
  const typing =
    !instant && playing && !complete && !!next && next.kind !== "handover" && next.from !== "customer";

  const completed = new Set<string>();
  for (const step of steps.slice(0, revealed)) {
    step.completes?.forEach((id) => completed.add(id));
  }

  const replay = useCallback(() => {
    completeRef.current = false;
    setRevealed(0);
  }, []);

  return { revealed, complete, typing, completed, replay };
}
