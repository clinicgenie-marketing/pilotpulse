import type { HTMLAttributes } from "react";

function cn(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

/** Frosted glass surface — translucent navy, hairline border, backdrop blur. */
export function GlassCard({ className = "", children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("glass card-interactive overflow-hidden", className)} {...props}>
      {children}
    </div>
  );
}

export function GlassCardHeader({ className = "", children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex flex-col gap-1.5 px-5 pb-2 pt-5", className)} {...props}>
      {children}
    </div>
  );
}

export function GlassCardTitle({ className = "", children, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={cn("text-base font-semibold text-ink", className)} {...props}>
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
    <p className={cn("text-sm leading-relaxed text-ink-body", className)} {...props}>
      {children}
    </p>
  );
}

export function GlassCardContent({ className = "", children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("px-5 py-4", className)} {...props}>
      {children}
    </div>
  );
}

export function GlassCardFooter({ className = "", children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex items-center gap-3 border-t border-hairline px-5 py-4", className)}
      {...props}
    >
      {children}
    </div>
  );
}
