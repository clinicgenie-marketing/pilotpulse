import type { ReactNode } from "react";

type EyebrowProps = {
  children: ReactNode;
  className?: string;
};

/** Uppercase category label — Micron-style section eyebrow. */
export function Eyebrow({ children, className = "" }: EyebrowProps) {
  return (
    <p className={`eyebrow ${className}`.trim()}>{children}</p>
  );
}
