import type { ReactNode } from "react";

type GradientTextProps = {
  children: ReactNode;
  /**
   * Gradient ramp, as sampled from the reference:
   * - "full":  cyan→blue→periwinkle — the hero headline line
   * - "short": blue→lavender — section heading keywords (short phrases never
   *   reach back to the cyan start in the reference)
   */
  ramp?: "full" | "short";
  className?: string;
};

const RAMPS: Record<NonNullable<GradientTextProps["ramp"]>, string> = {
  full: "linear-gradient(90deg, #1DBBEB 0%, #4DA3FF 45%, #8B7BFF 100%)",
  short: "linear-gradient(90deg, #4DA3FF 0%, #9B8AFF 100%)",
};

const GLOW =
  "drop-shadow(0 0 6px rgba(45, 196, 255, 0.55)) drop-shadow(0 0 14px rgba(77, 163, 255, 0.35))";

/**
 * Gradient-filled keyword text. Rendered inline-block + w-fit so the gradient
 * maps to the text ink (the last glyph reaches the terminal stop) rather
 * than stretching across the parent box.
 */
export function GradientText({ children, ramp = "short", className = "" }: GradientTextProps) {
  return (
    <span
      className={`inline-block w-fit bg-clip-text text-transparent ${className}`.trim()}
      style={{ backgroundImage: RAMPS[ramp], filter: GLOW }}
    >
      {children}
    </span>
  );
}
