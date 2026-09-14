import { CONTACT_HREF } from "@/lib/content";

export const OFFICE_ADDRESS = {
  company: "PilotPulse Pte Ltd",
  lines: ["51 Goldhill Plaza, #14-01", "Singapore 308900"] as const,
  singleLine: "51 Goldhill Plaza, #14-01, Singapore 308900",
};

export const innerFinalCta = {
  headingLine1: "Tell us the workflow.",
  headingLine2: "We will bring the pilot.",
  body: "We will get back to you within one Singapore business day.",
  primaryCta: { label: "Get a Demo", href: CONTACT_HREF },
  trustChips: ["IMDA pre approved", "Singapore hosted", "PDPA aligned"] as const,
};

export const LEGAL_UPDATED = "Last updated 9 September 2026";
