"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowLeftRight,
  Check,
  FileText,
  IdCard,
  Image as ImageIcon,
  LifeBuoy,
  Mail,
  ReceiptText,
  UserRound,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { WorkflowCard, WorkflowDemoItem, WorkflowStep, WorkflowTool } from "@/lib/workflow-demos";
import { useWorkflowPlayback } from "./useWorkflowPlayback";

const EASE = [0.22, 1, 0.36, 1] as const;

const CARD_ICONS: Record<WorkflowCard["kind"], LucideIcon> = {
  photo: ImageIcon,
  document: FileText,
  record: FileText,
  case: LifeBuoy,
  credential: IdCard,
  email: Mail,
  quote: ReceiptText,
  alert: AlertTriangle,
};

const CARD_LABELS: Record<WorkflowCard["kind"], string> = {
  photo: "Attachment",
  document: "Document",
  record: "Record",
  case: "Case",
  credential: "Credential",
  email: "Email",
  quote: "Quotation",
  alert: "Alert",
};

const BUBBLE_SPRING = { type: "spring", stiffness: 640, damping: 18, mass: 0.5 } as const;

function ToolLine({ tool, onPurple }: { tool: WorkflowTool; onPurple: boolean }) {
  return (
    <span className={`mt-1.5 block text-[11px] ${onPurple ? "text-white/70" : "text-ink-muted"}`}>
      → {tool.name}
      {tool.system ? ` · ${tool.system}` : ""}
    </span>
  );
}

function CardBody({ card }: { card: WorkflowCard }) {
  const Icon = CARD_ICONS[card.kind];
  return (
    <div className="workflow-chat-doc">
      <div className="workflow-chat-doc-head">
        <span className="workflow-chat-doc-glyph" aria-hidden="true">
          <Icon className="h-3.5 w-3.5" />
        </span>
        <span className="workflow-chat-doc-kind">{CARD_LABELS[card.kind]}</span>
      </div>
      <p className="workflow-chat-doc-title">{card.title}</p>
      {card.subtitle ? <p className="workflow-chat-doc-sub">{card.subtitle}</p> : null}
      {card.rows?.length ? (
        <dl className="workflow-chat-doc-rows">
          {card.rows.map((row) => (
            <div key={row.label} className="workflow-chat-doc-row">
              <dt>{row.label}</dt>
              <dd>{row.value}</dd>
            </div>
          ))}
        </dl>
      ) : null}
    </div>
  );
}

function StepRow({
  step,
  stacked,
  instant,
}: {
  step: WorkflowStep;
  stacked: boolean;
  instant: boolean;
}) {
  if (step.kind === "handover") {
    const toHuman = step.direction === "toHuman";
    const Icon = toHuman ? UserRound : ArrowLeftRight;
    return (
      <div className={stacked ? "mt-2 flex justify-center" : "mt-3 flex justify-center"}>
        <motion.p
          className="workflow-chat-handover"
          initial={instant ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.32, ease: EASE }}
        >
          <Icon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          <span>
            {step.text}
            {step.tool?.name ? <span className="workflow-chat-handover-sys"> · {step.tool.name}</span> : null}
          </span>
        </motion.p>
      </div>
    );
  }

  const incoming = step.from === "customer";
  const isCard = step.kind === "card";

  return (
    <div className={`flex ${incoming ? "justify-start" : "justify-end"} ${stacked ? "mt-1.5" : "mt-3"}`}>
      <motion.div
        className={`relative max-w-[78%] text-[14px] leading-relaxed ${
          incoming ? "workflow-chat-in" : "workflow-chat-out"
        } ${isCard ? "workflow-chat-bubble--card px-3 py-3" : "px-4 py-3"}`}
        style={{ transformOrigin: incoming ? "left bottom" : "right bottom" }}
        initial={instant ? false : { opacity: 0, y: 16, scale: 0.68 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={BUBBLE_SPRING}
      >
        {isCard ? <CardBody card={step.card} /> : step.text}
        {step.tool ? <ToolLine tool={step.tool} onPurple={incoming} /> : null}
      </motion.div>
    </div>
  );
}

function TypingBubble() {
  return (
    <div className="mt-3 flex justify-end">
      <div className="workflow-chat-out workflow-chat-typing px-4 py-3" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

export function WorkflowSequence({
  item,
  instant,
  playing,
  hideOutcome,
  onComplete,
  registerReplay,
}: {
  item: WorkflowDemoItem;
  instant: boolean;
  playing: boolean;
  hideOutcome: boolean;
  onComplete: () => void;
  registerReplay?: (replay: () => void) => void;
}) {
  const chatRef = useRef<HTMLDivElement | null>(null);
  const { revealed, complete, typing, completed, replay } = useWorkflowPlayback({
    steps: item.steps,
    resetKey: item.id,
    playing,
    instant,
    timing: item.timing,
    onComplete,
  });

  useEffect(() => {
    registerReplay?.(replay);
  }, [registerReplay, replay]);

  useEffect(() => {
    const node = chatRef.current;
    if (!node) return;
    node.scrollTo({ top: node.scrollHeight, behavior: instant ? "auto" : "smooth" });
  }, [instant, revealed, typing]);

  return (
    <div className={`workflow-demo-panel${hideOutcome ? " workflow-demo-panel--chat-only" : ""}`}>
      <div ref={chatRef} className="workflow-chat h-full overflow-y-auto p-5 pt-14 sm:p-7 sm:pt-16">
        <p className="sr-only">{item.summary}</p>
        <div className="flex flex-col" aria-live="polite" aria-relevant="additions">
          {item.steps.slice(0, revealed).map((step, index) => {
            const previous = item.steps[index - 1];
            const sameSide =
              previous !== undefined &&
              previous.kind !== "handover" &&
              step.kind !== "handover" &&
              previous.from === step.from;
            return (
              <StepRow
                key={`${item.id}-${index}`}
                step={step}
                stacked={sameSide}
                instant={instant}
              />
            );
          })}
          {typing ? <TypingBubble /> : null}
        </div>
      </div>

      {hideOutcome ? null : (
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
            {item.checklist.map((entry) => {
              const revealedItem = completed.has(entry.id);
              return (
                <li
                  key={entry.id}
                  className={`flex items-start gap-2 transition-opacity duration-300 ${
                    revealedItem ? "opacity-100" : "opacity-35"
                  }`}
                >
                  <span
                    className={`mt-0.5 grid size-5 shrink-0 place-items-center rounded-full transition-colors duration-300 ${
                      revealedItem ? "bg-emerald-100 text-emerald-700" : "bg-line text-transparent"
                    }`}
                  >
                    <Check className="h-2.5 w-2.5" strokeWidth={3} aria-hidden="true" />
                  </span>
                  <span>{entry.label}</span>
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
      )}
    </div>
  );
}
