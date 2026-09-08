import type { HTMLAttributes } from "react";

function cn(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

/** White surface card — border, 16px radius, optional hover glow when interactive. */
export function GlassCard({ className = "", children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("surface-card overflow-hidden p-6 md:p-8", className)} {...props}>
      {children}
    </div>
  );
}

export function GlassCardHeader({ className = "", children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)} {...props}>
      {children}
    </div>
  );
}

export function GlassCardTitle({ className = "", children, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={cn("heading-4", className)} {...props}>
      {children}
    </h3>
  );
}

export function GlassCardDescription({
  className = "",
  children,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("text-base leading-relaxed text-ink-muted", className)} {...props}>
      {children}
    </p>
  );
}

export function GlassCardContent({ className = "", children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("pt-4", className)} {...props}>
      {children}
    </div>
  );
}

export function GlassCardFooter({ className = "", children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("mt-4 flex items-center gap-3 border-t border-line pt-4", className)} {...props}>
      {children}
    </div>
  );
}
