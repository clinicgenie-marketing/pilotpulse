import type { ReactNode } from "react";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { CaseStudiesTabs } from "@/components/pages/CaseStudiesTabs";

export default function CaseStudiesLayout({ children }: { children: ReactNode }) {
  return (
    <SiteChrome>
      <CaseStudiesTabs />
      {children}
    </SiteChrome>
  );
}
