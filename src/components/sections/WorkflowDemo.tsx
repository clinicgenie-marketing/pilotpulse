"use client";

import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react";
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

export function WorkflowDemo() {
  const reduceMotion = useReducedMotion();
  const [activeId, setActiveId] = useState(workflowDemos[0].id);
  const [userStopped, setUserStopped] = useState(false);
  const [paused, setPaused] = useState(false);
  const tabIds = useId();
  const sectionRef = useRef<HTMLElement | null>(null);
  const active = workflowDemos.find((item) => item.id === activeId) ?? workflowDemos[0];

  useEffect(() => {
    if (reduceMotion || userStopped || paused) return undefined;
    const timer = window.setInterval(() => {
      setActiveId((current) => {
        const index = workflowDemos.findIndex((item) => item.id === current);
        return workflowDemos[(index + 1) % workflowDemos.length].id;
      });
    }, 6000);
    return () => window.clearInterval(timer);
  }, [paused, reduceMotion, userStopped]);

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
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!sectionRef.current?.contains(event.relatedTarget as Node | null)) {
          setPaused(false);
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
            Not a chatbot. Your AI worker takes action — across WhatsApp, email and web — checking
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
          <div className="workflow-demo-card">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active.id}
                id={`${tabIds}-panel-${active.id}`}
                role="tabpanel"
                aria-labelledby={`${tabIds}-${active.id}`}
                initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="h-full"
              >
                <DemoPanel item={active} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function DemoPanel({ item }: { item: WorkflowDemoItem }) {
  return (
    <div className="workflow-demo-panel">
      <div className="workflow-chat h-full overflow-y-auto p-5 sm:p-7">
        <p className="mb-6 inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-[10.5px] font-medium text-white/90">
          <span className="size-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
          {item.badge}
        </p>
        <div className="flex flex-col">
          {item.messages.map((message, index) => {
            const incoming = message.speaker === "user";
            const stacked = item.messages[index - 1]?.speaker === message.speaker;
            return (
              <div
                key={`${item.id}-${index}`}
                className={`flex ${incoming ? "justify-start" : "justify-end"} ${stacked ? "mt-1.5" : "mt-3"}`}
              >
                <div className={`relative max-w-[78%] px-4 py-3 text-[14px] leading-relaxed ${incoming ? "workflow-chat-in" : "workflow-chat-out"}`}>
                  {message.text}
                  {message.action ? (
                    <span className={`mt-1.5 block text-[11px] ${incoming ? "text-white/70" : "text-ink-muted"}`}>
                      → {message.action}
                    </span>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="space-y-3 overflow-y-auto bg-surface p-6">
        <p className="font-sans text-[11px] font-semibold uppercase tracking-wider text-ink-muted">
          What the AI did
        </p>
        <ul className="space-y-2 text-[12.5px] text-ink">
          {item.actions.map((action) => (
            <li key={action} className="flex items-start gap-2">
              <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-700">
                <Check className="h-2.5 w-2.5" strokeWidth={3} aria-hidden="true" />
              </span>
              <span>{action}</span>
            </li>
          ))}
        </ul>
        <p className="mt-2 rounded-lg bg-background-alt p-3 text-[11.5px] text-ink-muted">
          {item.result}
        </p>
      </div>
    </div>
  );
}
