import type { ButtonHTMLAttributes } from "react";

type GlassButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

/** Glass-system button using the shared primary/secondary pill styles. */
export function GlassButton({
  variant = "primary",
  className = "",
  children,
  type = "button",
  ...props
}: GlassButtonProps) {
  const variantClass = variant === "primary" ? "btn-primary" : "btn-secondary";
  return (
    <button type={type} className={`${variantClass} ${className}`.trim()} {...props}>
      {children}
    </button>
  );
}
