import { Check } from "lucide-react";
import { WorkerIdentity } from "@/components/icons/WorkerIdentity";
import type { WorkerGlyphName } from "@/lib/home-content";

export type WorkforceCardModel = {
  label: string;
  code?: string;
  name: string;
  headline: string;
  points: readonly string[];
  glyph: WorkerGlyphName;
};

export function DigitalWorkerProfileCard({
  card,
  headingId,
}: {
  card: WorkforceCardModel;
  headingId?: string;
}) {
  const meta = card.code ? `${card.label} ${card.code.replace("DW-", "")}` : card.label;

  return (
    <article className="workforce-profile flex h-full flex-col">
      <p className="text-xs font-medium uppercase tracking-wider text-ink-muted">{meta}</p>

      <div className="mt-5">
        <WorkerIdentity name={card.glyph} product={card.name} variant="tile" />
      </div>

      <h3 id={headingId} className="card-title-lg mt-5">
        {card.name}
      </h3>
      <p className="mt-1.5 text-base font-semibold text-primary">{card.headline}</p>

      <hr className="workforce-profile-rule mt-6" />

      <ul className="mt-5 flex-1 space-y-1.5">
        {card.points.map((point) => (
          <li key={point} className="flex items-start gap-2 text-base text-ink">
            <span className="workforce-point-tick" aria-hidden="true">
              <Check className="h-2.5 w-2.5" strokeWidth={3} />
            </span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
