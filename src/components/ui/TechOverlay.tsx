type TechOverlayProps = {
  className?: string;
  /** Show radial glow scrim alongside the grid. */
  withGlow?: boolean;
};

/** CSS tech grid + optional radial glow scrim for hero/ops backgrounds. */
export function TechOverlay({ className = "", withGlow = true }: TechOverlayProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 ${className}`.trim()}
    >
      <div className="tech-grid-overlay absolute inset-0" />
      {withGlow && (
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 70% 40%, rgba(31,137,255,0.12) 0%, transparent 65%)",
          }}
        />
      )}
    </div>
  );
}
