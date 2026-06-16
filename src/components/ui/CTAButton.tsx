import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type CTAButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  withArrow?: boolean;
  external?: boolean;
  ariaLabel?: string;
};

/**
 * Polished pill CTA. Renders a Next.js Link for internal/anchor hrefs and a
 * safe external anchor for absolute URLs (or when `external` is set).
 */
export function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
  withArrow = false,
  external = false,
  ariaLabel,
}: CTAButtonProps) {
  const classes = `${variant === "primary" ? "btn-primary" : "btn-secondary"} group ${className}`.trim();

  const content = (
    <>
      <span>{children}</span>
      {withArrow && (
        <ArrowRight
          className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1"
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
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-label={ariaLabel}>
      {content}
    </Link>
  );
}
