import { OFFICE_ADDRESS, LEGAL_UPDATED } from "@/lib/pages/shared";

export const legalContact = {
  company: OFFICE_ADDRESS.company,
  lines: OFFICE_ADDRESS.lines,
  email: "info@pilotpulse.ai",
};

export const termsPage = {
  meta: {
    title: "Terms & Conditions",
    description: "Terms of use for the PilotPulse platform.",
  },
  title: "Terms of Use",
  lastUpdated: LEGAL_UPDATED,
};

export const privacyPage = {
  meta: {
    title: "Privacy Policy",
    description: "How PilotPulse collects, uses and protects information.",
  },
  title: "Privacy Summary",
  lastUpdated: LEGAL_UPDATED,
};
