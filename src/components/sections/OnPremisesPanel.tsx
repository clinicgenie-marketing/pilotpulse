import { DigitalWorkerProfileCard } from "@/components/sections/DigitalWorkerProfileCard";
import type { OnPremisesPanelContent } from "@/lib/home-content";

export function OnPremisesPanel({ content }: { content: OnPremisesPanelContent }) {
  return (
    <DigitalWorkerProfileCard
      headingId="on-premises-heading"
      card={{
        label: content.eyebrow,
        name: content.name,
        headline: content.heading,
        points: content.points,
        glyph: "server",
      }}
    />
  );
}
