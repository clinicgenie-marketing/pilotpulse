import type { ReactNode } from "react";

type GradientTextProps = {
  children: ReactNode;
  /**
   * Gradient ramp, as sampled from the reference:
   * - "full":  cyan→blue→indigo — the hero headline line
   * - "short": blue→indigo — section heading keywords (short phrases never
   *   reach back to the cyan start in the reference)
   */
  ramp?: "full" | "short";
  className?: string;
};

const RAMPS: Record<NonNullable<GradientTextProps["ramp"]>, string> = {
  full: "linear-gradient(90deg, #0DA4D5 0%, #1F89FF 50%, #4633FF 100%)",
  short: "linear-gradient(90deg, #2E7FF7 0%, #4633FF 100%)",
};

/**
 * Gradient-filled keyword text. Rendered inline-block + w-fit so the gradient
 * maps to the text ink (the last glyph reaches the terminal indigo) rather
 * than stretching across the parent box.
 */
export function GradientText({ children, ramp = "short", className = "" }: GradientTextProps) {
  return (
    <span
      className={`inline-block w-fit bg-clip-text text-transparent ${className}`.trim()}
      style={{ backgroundImage: RAMPS[ramp] }}
    >
      {children}
    </span>
  );
}
