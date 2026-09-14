import type { Metadata } from "next";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { InnerFinalCta } from "@/components/pages/InnerFinalCta";
import { LatestUpdates } from "@/components/sections/LatestUpdates";

export const metadata: Metadata = {
  title: "Resources",
  description: "Deployment notes, product thinking and ecosystem updates from the PilotPulse team.",
};

export default function ResourcesPage() {
  return (
    <SiteChrome>
      <LatestUpdates />
      <InnerFinalCta />
    </SiteChrome>
  );
}
