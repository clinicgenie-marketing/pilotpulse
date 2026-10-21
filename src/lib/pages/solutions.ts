import { CONTACT_HREF } from "@/lib/content";
import { digitalWorkforce } from "@/lib/home-content";

export const solutionsNav = digitalWorkforce.offerings.map((offering) => ({
  id: offering.id,
  label: offering.title,
}));

export const solutionsPage = {
  meta: {
    title: "Solutions",
    description:
      "AI that runs the work around every role: scheduling, quotations, screening, and documents, with a human handoff when it matters.",
  },
  hero: {
    eyebrow: "AI Agent Solutions",
    titleBefore: "AI that runs the work ",
    titleHighlight: "around every role.",
    lead: "They schedule, quote, screen, and file from the conversation. Then hand work back when a human needs to step in.",
    capabilities: ["Scheduling", "Quotations", "Screening", "Documents"] as const,
    cta: { label: "Get a Demo", href: CONTACT_HREF },
    secondaryCta: { label: "Browse workflows", href: "#customer-engagement" },
    preview: {
      name: "Dr Lim's Clinic",
      status: "Last online just now",
      initials: "DL",
    },
  },
  retained: {
    documents: {
      id: "document-processing",
      title: "Document Processing",
      lead: "Reads your documents at scale.",
      bullets: [
        "CV screening and ranking",
        "Invoice and shipping document extraction",
        "Product specification catalogue processing",
      ],
      note: "PilotPulse has applied AI Document Intelligence to a catalogue containing more than 58,000 product specifications.",
      stat: {
        eyebrow: "Document Intelligence",
        value: "58,000+",
        unit: "product specifications processed",
      },
    },
    training:
      "PilotPulse also supports specialist staff training as part of its internal operations capabilities.",
    dataEntry: {
      title: "Data Entry",
      body: "Automate repetitive data entry and connect workflows with company systems to retrieve or update information. PilotPulse currently includes automated data entry among its internal operations capabilities.",
    },
    advanced: {
      id: "advanced",
      eyebrow: "Advanced AI Capabilities",
      lead: "Thinking AI Agents go beyond answering questions. They can take actions, call APIs, run tools, make decisions across multiple steps and maintain state. Examples already used across PilotPulse deployments include",
      examples: [
        "Looking up a specific parcel using a tracking number",
        "Checking eligibility for a shift swap",
        "Logging an incident report",
        "Routing work to the right human",
        "Checking live stock and pricing information before creating an order",
      ],
    },
  },
  cta: {
    heading: "Ready to Deliver Better Experiences?",
    body: "See how fast, human first automation can work for your business.",
    primaryCta: { label: "Request a Demo", href: CONTACT_HREF },
  },
};
