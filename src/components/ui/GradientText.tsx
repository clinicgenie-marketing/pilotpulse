import type { ReactNode } from "react";

type GradientTextProps = {
  children: ReactNode;
  /** Solid highlight colour — style guide allows one short phrase only. */
  tone?: "primary" | "accent" | "inverse";
  className?: string;
  /** Kept for existing call sites; ignored in favour of a single colour. */
  ramp?: "full" | "short";
};

const TONES: Record<NonNullable<GradientTextProps["tone"]>, string> = {
  primary: "heading-accent",
  accent: "heading-accent",
  inverse: "text-white",
};

/**
 * Highlights one short phrase in a heading. Uses a solid brand colour,
 * never a full-heading gradient.
 */
export function GradientText({
  children,
  tone = "primary",
  className = "",
}: GradientTextProps) {
  return (
    <span className={`inline-block w-fit ${TONES[tone]} ${className}`.trim()}>
      {children}
    </span>
  );
}
