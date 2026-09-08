import type { ButtonHTMLAttributes } from "react";

type GlassButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "accent";
};

const VARIANT_CLASS = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  accent: "btn-accent",
} as const;

export function GlassButton({
  variant = "primary",
  className = "",
  children,
  type = "button",
  ...props
}: GlassButtonProps) {
  return (
    <button type={type} className={`${VARIANT_CLASS[variant]} ${className}`.trim()} {...props}>
      {children}
    </button>
  );
}
