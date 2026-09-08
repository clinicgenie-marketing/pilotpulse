import Link from "next/link";
import { ArrowRight, Rocket } from "lucide-react";
import type { ReactNode } from "react";

type CTAButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "accent" | "inverse" | "ghost";
  className?: string;
  withArrow?: boolean;
  external?: boolean;
  ariaLabel?: string;
  size?: "default" | "compact";
  display?: boolean;
  onClick?: () => void;
};

const VARIANT_CLASS = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  accent: "btn-accent",
  inverse: "btn-inverse",
  ghost: "btn-ghost",
} as const;

function isGetADemo(children: ReactNode) {
  return typeof children === "string" && children.trim() === "Get a Demo";
}

export function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
  withArrow = false,
  external = false,
  ariaLabel,
  size = "default",
  display = false,
  onClick,
}: CTAButtonProps) {
  const sizeClass = size === "compact" ? "btn-compact" : "";
  const displayClass = display ? "" : "";
  const showRocket = isGetADemo(children);
  const classes =
    `${VARIANT_CLASS[variant]} group ${sizeClass} ${displayClass} ${className}`.trim();
  const iconClass = size === "compact" ? "h-3.5 w-3.5" : "h-4 w-4";

  const content = (
    <>
      {showRocket ? (
        <Rocket
          className={`${iconClass} transition-transform duration-[180ms] ease-out group-hover:-translate-y-1 group-hover:translate-x-1`}
          strokeWidth={2}
          aria-hidden="true"
        />
      ) : null}
      <span>{children}</span>
      {withArrow && (
        <ArrowRight
          className={`${iconClass} transition-transform duration-[180ms] ease-out group-hover:translate-x-1`}
          aria-hidden="true"
        />
      )}
    </>
  );

  const isExternal = external || /^https?:\/\//.test(href);

  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-label={ariaLabel} onClick={onClick}>
      {content}
    </Link>
  );
}
