"use client";

import { useEffect, useRef, type ReactNode } from "react";

const FOCUS_MARGIN = "-30% 0px -55% 0px";
const FOCUS_THRESHOLDS = [0, 0.1, 0.25, 0.4, 0.55, 0.75, 1];

export function IndustryStack({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stack = rootRef.current;
    if (!stack || typeof IntersectionObserver === "undefined") return undefined;

    const sections = [...stack.querySelectorAll<HTMLElement>("[data-industry-section]")];
    if (!sections.length) return undefined;

    const ratios = new Map<string, number>();
    let focusedId = "";

    function apply(nextId: string, armed: boolean) {
      if (nextId === focusedId && stack.classList.contains("is-armed") === armed) return;
      focusedId = nextId;
      stack.classList.toggle("is-armed", armed);
      sections.forEach((section) => {
        section.classList.toggle("is-focused", armed && section.id === nextId);
      });
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        }

        let bestId = "";
        let bestRatio = 0;
        for (const [id, ratio] of ratios) {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        }

        if (bestId) {
          apply(bestId, true);
          return;
        }

        const first = sections[0].getBoundingClientRect();
        const last = sections[sections.length - 1].getBoundingClientRect();
        const inStack = first.top < window.innerHeight * 0.45 && last.bottom > window.innerHeight * 0.4;
        apply(inStack ? focusedId || sections[0].id : "", inStack);
      },
      { rootMargin: FOCUS_MARGIN, threshold: FOCUS_THRESHOLDS },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={rootRef} className="industry-stack">
      {children}
    </div>
  );
}
