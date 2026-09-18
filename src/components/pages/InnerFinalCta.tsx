import { FinalCtaBand } from "@/components/ui/FinalCtaBand";
import { AccentHeading } from "@/components/ui/PageHero";
import { innerFinalCta } from "@/lib/pages/shared";

export function InnerFinalCta() {
  return (
    <FinalCtaBand
      heading={
        <>
          {innerFinalCta.headingLine1}
          <span className="block">
            <AccentHeading text={innerFinalCta.headingLine2} accent="the pilot." />
          </span>
        </>
      }
      body={innerFinalCta.body}
      primaryCta={innerFinalCta.primaryCta}
      trustChips={innerFinalCta.trustChips}
    />
  );
}
