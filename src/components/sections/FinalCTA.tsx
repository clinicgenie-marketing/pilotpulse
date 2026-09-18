import { FinalCtaBand } from "@/components/ui/FinalCtaBand";
import { finalCtaContent } from "@/lib/home-content";

export function FinalCTA() {
  return (
    <FinalCtaBand
      id="get-started"
      eyebrow={finalCtaContent.eyebrow}
      heading={finalCtaContent.heading}
      body={finalCtaContent.body}
      primaryCta={{ ...finalCtaContent.primaryCta, external: true }}
      secondaryCta={{ ...finalCtaContent.secondaryCta, external: true }}
      note={finalCtaContent.note}
    />
  );
}
