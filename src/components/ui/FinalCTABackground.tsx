"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const MagicRings = dynamic(
  () => import("@/components/ui/MagicRings").then((mod) => ({ default: mod.MagicRings })),
  { ssr: false },
);

function RadialGlowFallback() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-1/2 h-[480px] -translate-y-1/2 opacity-70"
      style={{
        background:
          "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(70,51,255,0.25) 0%, transparent 70%)",
      }}
    />
  );
}

/** Animated WebGL ring background for the Final CTA, with static fallback. */
export function FinalCTABackground() {
  const [reduceMotion, setReduceMotion] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);

    const onChange = (event: MediaQueryListEvent) => {
      setReduceMotion(event.matches);
    };

    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {reduceMotion ? (
        <RadialGlowFallback />
      ) : (
        <>
          <RadialGlowFallback />
          <MagicRings
            color="#0DA4D5"
            colorTwo="#4633FF"
            ringCount={6}
            speed={1}
            attenuation={10}
            lineThickness={2}
            baseRadius={0.35}
            radiusStep={0.1}
            scaleRate={0.1}
            opacity={0.65}
            blur={2}
            noiseAmount={0.08}
            rotation={0}
            ringGap={1.5}
            fadeIn={0.7}
            fadeOut={0.5}
            followMouse={false}
            clickBurst={false}
          />
        </>
      )}
    </div>
  );
}
