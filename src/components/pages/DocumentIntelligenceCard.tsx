export function DocumentIntelligenceCard({
  eyebrow,
  value,
  unit,
  marker,
}: {
  eyebrow: string;
  value: string;
  unit: string;
  marker?: string;
}) {
  const peak = marker ?? value.replace(/,000\+?$/, "k").replace(/\+$/, "");
  return (
    <aside className="support-stat" aria-label={`${value} ${unit}`}>
      <div className="support-stat-copy">
        <p className="support-stat-label">{eyebrow}</p>
        <p className="support-stat-value">{value}</p>
        <p className="support-stat-unit">{unit}</p>
      </div>

      <span className="support-stat-menu" aria-hidden="true">
        <span />
        <span />
        <span />
      </span>

      <svg
        className="support-stat-chart"
        viewBox="0 0 280 168"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M0 118 C28 116 42 72 58 78 S92 132 112 118 S148 38 176 48 S228 96 252 78 S272 70 280 66"
          stroke="var(--pp-primary)"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        <path
          d="M176 8 V160"
          stroke="var(--pp-outline)"
          strokeOpacity="0.45"
          strokeWidth="1.25"
          strokeDasharray="3 5"
        />
        <g transform="translate(176 48)">
          <circle r="7" fill="var(--pp-surface)" stroke="var(--pp-accent)" strokeWidth="3" />
          <rect x="-34" y="-32" width="36" height="20" rx="10" fill="var(--pp-text)" />
          <text
            x="-16"
            y="-18"
            textAnchor="middle"
            fill="var(--pp-white)"
            fontSize="11"
            fontWeight="600"
            fontFamily="var(--pp-font-body), Inter, sans-serif"
          >
            {peak}
          </text>
        </g>
      </svg>
    </aside>
  );
}
