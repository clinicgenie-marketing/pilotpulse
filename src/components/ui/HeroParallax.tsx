"use client";

import { useEffect, useRef, type ReactNode } from "react";

type HeroParallaxProps = {
  children: ReactNode;
  /** Multiplier applied to scrollY for this layer (e.g. 0.15 for orb, 0.05 for text). */
  depth?: number;
  className?: string;
};

/**
 * Lightweight scroll-linked parallax wrapper. Translates children vertically
 * based on scroll position to create depth between hero layers. Disabled when
 * the user prefers reduced motion.
 */
export function HeroParallax({ children, depth = 0.1, className = "" }: HeroParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return;

    let ticking = false;

    function update() {
      if (!el) return;
      const offset = window.scrollY * depth;
      el.style.transform = `translateY(${offset}px)`;
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    update();

    return () => window.removeEventListener("scroll", onScroll);
  }, [depth]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
