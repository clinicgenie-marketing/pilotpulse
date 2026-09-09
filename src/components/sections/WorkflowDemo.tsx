"use client";

import { useCallback, useEffect, useId, useRef, useState, type KeyboardEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check, Heart, Truck, UserSearch, UtensilsCrossed } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { workflowDemos, type WorkflowDemoItem } from "@/lib/home-content";

const ICONS: Record<WorkflowDemoItem["icon"], LucideIcon> = {
  truck: Truck,
  heart: Heart,
  userSearch: UserSearch,
  utensils: UtensilsCrossed,
};

const MESSAGE_START_MS = 420;
const MESSAGE_STEP_MS = 880;
const HOLD_MS = 2800;
const EASE = [0.22, 1, 0.36, 1] as const;

function actionUnlockCount(item: WorkflowDemoItem, visible: number) {
  const actionMessages = item.messages.filter((message) => message.action);
  if (visible <= 0 || actionMessages.length === 0) return 0;
  const seen = item.messages.slice(0, visible).filter((message) => message.action).length;
  return Math.round((seen / actionMessages.length) * item.actions.length);
}

export function WorkflowDemo() {
  const reduceMotion = useReducedMotion();
  const [activeId, setActiveId] = useState(workflowDemos[0].id);
  const [userStopped, setUserStopped] = useState(false);
  const [holdRotate, setHoldRotate] = useState(false);
  const [playbackDone, setPlaybackDone] = useState(false);
  const tabIds = useId();
  const sectionRef = useRef<HTMLElement | null>(null);
  const active = workflowDemos.find((item) => item.id === activeId) ?? workflowDemos[0];
  const instant = Boolean(reduceMotion);

  useEffect(() => {
    setPlaybackDone(false);
  }, [activeId]);

  useEffect(() => {
    if (instant || userStopped || holdRotate || !playbackDone) return undefined;
    const timer = window.setTimeout(() => {
      setActiveId((current) => {
        const index = workflowDemos.findIndex((item) => item.id === current);
        return workflowDemos[(index + 1) % workflowDemos.length].id;
      });
    }, HOLD_MS);
    return () => window.clearTimeout(timer);
  }, [instant, holdRotate, playbackDone, userStopped]);

  const markPlaybackDone = useCallback(() => {
    setPlaybackDone(true);
  }, []);

  function selectTab(id: string, fromUser: boolean) {
    setActiveId(id);
    if (fromUser) setUserStopped(true);
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
    selectTab(workflowDemos[next].id, true);
    document.getElementById(`${tabIds}-${workflowDemos[next].id}`)?.focus();
  }

  return (
    <section
      id="dashboard"
      ref={sectionRef}
      className="section-pad overflow-visible border-b border-line bg-background"
      onMouseEnter={() => setHoldRotate(true)}
      onMouseLeave={() => setHoldRotate(false)}
      onFocusCapture={() => setHoldRotate(true)}
      onBlurCapture={(event) => {
        if (!sectionRef.current?.contains(event.relatedTarget as Node | null)) {
          setHoldRotate(false);
        }
      }}
    >
      <div className="container-edge">
        <div className="mx-auto mb-10 max-w-[760px] text-center">
          <p className="eyebrow">In production</p>
          <h2 className="heading-2 mt-3">
            Agentic AI across every <span className="heading-gradient">workflow.</span>
          </h2>
          <p className="lead mt-4">
            Not a chatbot. Your AI worker takes action across WhatsApp, email and web, checking
            systems, booking slots, escalating intelligently and closing the loop.
          </p>
        </div>

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
                onClick={() => selectTab(item.id, true)}
                onKeyDown={(event) => onTabKeyDown(event, index)}
              >
                <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                {item.label}
              </button>
            );
          })}
        </div>

        <div className="overflow-visible px-4">
          <div className="workflow-demo-wrap">
            <p className="workflow-live-pill">
              <span className="workflow-live-dot size-2 rounded-full bg-emerald-500" aria-hidden="true" />
              {active.badge}
            </p>
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
                <DemoPanel item={active} instant={instant} onComplete={markPlaybackDone} />
              </motion.div>
            </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DemoPanel({
  item,
  instant,
  onComplete,
}: {
  item: WorkflowDemoItem;
  instant: boolean;
  onComplete: () => void;
}) {
  const chatRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(instant ? item.messages.length : 0);
  const unlocked = instant ? item.actions.length : actionUnlockCount(item, visible);
  const complete = visible >= item.messages.length;

  useEffect(() => {
    setVisible(instant ? item.messages.length : 0);
  }, [item.id, instant, item.messages.length]);

  useEffect(() => {
    if (instant || visible >= item.messages.length) return undefined;
    const timer = window.setTimeout(
      () => setVisible((count) => count + 1),
      visible === 0 ? MESSAGE_START_MS : MESSAGE_STEP_MS,
    );
    return () => window.clearTimeout(timer);
  }, [instant, item.id, item.messages.length, visible]);

  useEffect(() => {
    if (complete) onComplete();
  }, [complete, onComplete]);

  useEffect(() => {
    const node = chatRef.current;
    if (!node) return;
    node.scrollTo({ top: node.scrollHeight, behavior: instant ? "auto" : "smooth" });
  }, [instant, visible]);

  return (
    <div className="workflow-demo-panel">
      <div ref={chatRef} className="workflow-chat h-full overflow-y-auto p-5 pt-14 sm:p-7 sm:pt-16">
        <div className="flex flex-col" aria-live="polite" aria-relevant="additions">
          {item.messages.slice(0, visible).map((message, index) => {
            const incoming = message.speaker === "user";
            const stacked = item.messages[index - 1]?.speaker === message.speaker;
            return (
              <div
                key={`${item.id}-${index}`}
                className={`flex ${incoming ? "justify-start" : "justify-end"} ${stacked ? "mt-1.5" : "mt-3"}`}
              >
                <motion.div
                  className={`relative max-w-[78%] px-4 py-3 text-[14px] leading-relaxed ${incoming ? "workflow-chat-in" : "workflow-chat-out"}`}
                  style={{ transformOrigin: incoming ? "left bottom" : "right bottom" }}
                  initial={instant ? false : { opacity: 0, y: 16, scale: 0.68 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ type: "spring", stiffness: 640, damping: 18, mass: 0.5 }}
                >
                  {message.text}
                  {message.action ? (
                    <span className={`mt-1.5 block text-[11px] ${incoming ? "text-white/70" : "text-ink-muted"}`}>
                      → {message.action}
                    </span>
                  ) : null}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
      <motion.div
        className="workflow-outcome space-y-3"
        initial={instant ? false : { opacity: 0, x: -72 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: EASE, delay: 0.12 }}
      >
        <p className="font-sans text-[11px] font-semibold uppercase tracking-wider text-ink-muted">
          What the AI did
        </p>
        <ul className="space-y-2 text-[12.5px] text-ink">
          {item.actions.map((action, index) => {
            const revealed = index < unlocked;
            return (
              <li
                key={action}
                className={`flex items-start gap-2 transition-opacity duration-300 ${revealed ? "opacity-100" : "opacity-35"}`}
              >
                <span
                  className={`mt-0.5 grid size-5 shrink-0 place-items-center rounded-full transition-colors duration-300 ${
                    revealed ? "bg-emerald-100 text-emerald-700" : "bg-line text-transparent"
                  }`}
                >
                  <Check className="h-2.5 w-2.5" strokeWidth={3} aria-hidden="true" />
                </span>
                <span>{action}</span>
              </li>
            );
          })}
        </ul>
        <p
          className={`mt-2 rounded-lg bg-background-alt p-3 text-[11.5px] text-ink-muted transition-opacity duration-300 ${
            complete ? "opacity-100" : "opacity-40"
          }`}
        >
          {item.result}
        </p>
      </motion.div>
    </div>
  );
}
