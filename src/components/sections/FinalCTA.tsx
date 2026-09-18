import { FinalCtaBand } from "@/components/ui/FinalCtaBand";
import { AccentHeading } from "@/components/ui/PageHero";
import { finalCtaContent } from "@/lib/home-content";

export function FinalCTA() {
  return (
    <FinalCtaBand
      id="get-started"
      eyebrow={finalCtaContent.eyebrow}
      heading={<AccentHeading text={finalCtaContent.heading} accent="the pilot." />}
      body={finalCtaContent.body}
      primaryCta={{ ...finalCtaContent.primaryCta, external: true }}
      secondaryCta={{ ...finalCtaContent.secondaryCta, external: true }}
      note={finalCtaContent.note}
    />
  );
}
