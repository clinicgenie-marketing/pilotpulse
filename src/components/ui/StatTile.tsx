type StatTileProps = {
  label?: string;
  value: string;
  unit: string;
  chips?: readonly string[];
  source?: string;
  stacked?: { value: string; unit: string }[];
  tone?: "default" | "onPurple";
};

export function StatTile({
  label,
  value,
  unit,
  chips,
  source,
  stacked,
  tone = "default",
}: StatTileProps) {
  const onPurple = tone === "onPurple";

  return (
    <article className={`stat-tile h-full ${onPurple ? "stat-tile-on-purple" : ""}`}>
      {label ? <p className="mb-3 text-sm font-semibold text-ink">{label}</p> : null}
      <p className="heading-3 tabular-nums text-ink">{value}</p>
      <p className={`mt-2 text-base leading-relaxed ${onPurple ? "text-ink" : "text-ink"}`}>{unit}</p>
      {stacked?.map((item) => (
        <div key={`${item.value}-${item.unit}`} className="mt-4 border-t border-line pt-4">
          <p className="heading-3 tabular-nums text-ink">{item.value}</p>
          <p className="mt-2 text-base leading-relaxed text-ink">{item.unit}</p>
        </div>
      ))}
      {chips?.length ? (
        <ul className="mt-3 flex flex-wrap gap-1.5">
          {chips.map((chip) => (
            <li key={chip} className="stat-chip">
              {chip}
            </li>
          ))}
        </ul>
      ) : null}
      {source ? <p className="mt-3 text-sm text-ink-muted">{source}</p> : null}
    </article>
  );
}
