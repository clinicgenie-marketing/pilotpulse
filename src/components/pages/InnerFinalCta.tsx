import { FinalCtaBand } from "@/components/ui/FinalCtaBand";
import { innerFinalCta } from "@/lib/pages/shared";

export function InnerFinalCta() {
  return (
    <FinalCtaBand
      heading={
        <>
          {innerFinalCta.headingLine1}
          <span className="block">{innerFinalCta.headingLine2}</span>
        </>
      }
      body={innerFinalCta.body}
      primaryCta={innerFinalCta.primaryCta}
      trustChips={innerFinalCta.trustChips}
    />
  );
}
