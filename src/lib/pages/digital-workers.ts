import { CONTACT_HREF } from "@/lib/content";

export const digitalWorkersPage = {
  meta: {
    title: "Digital Workers",
    description:
      "Dedicated AI workers for each role, connected to your systems and supported by human oversight.",
  },
  hero: {
    eyebrow: "Digital Workers",
    titleBefore: "A dedicated AI worker ",
    titleHighlight: "for each role.",
    lead: "Each PilotPulse Digital Worker is designed for a specific job, connected to your existing systems, and supported by human oversight.",
    chips: ["In production", "WhatsApp · email · web", "Human oversight"] as const,
    cta: { label: "Get a Demo", href: CONTACT_HREF },
    secondaryCta: { label: "See them work", href: "#dashboard" },
    roster: {
      eyebrow: "Your digital team",
      heading: "Dedicated roles, already live.",
    },
  },
  workflow: {
    eyebrow: "In production",
    headingBefore: "Agentic AI across every ",
    headingHighlight: "workflow.",
    lead: "Not a chatbot. Your AI worker takes action across WhatsApp, email, and web, checking systems, booking slots, escalating intelligently, and closing the loop without your team lifting a finger.",
  },
  security: {
    eyebrow: "Architecture and security",
    heading: "Built for",
    headingHighlight: "real business use",
    items: [
      { title: "AES 256 encryption", body: "Data encrypted at rest and in transit" },
      { title: "Singapore hosted", body: "Data stays within Singapore jurisdiction" },
      { title: "Full audit trail", body: "Every agent decision logged and reviewable" },
      { title: "PDPA aligned", body: "Separation of PII" },
      {
        title: "On premises deployment",
        body: "Inference can run on your own servers with no data egress",
      },
    ],
  },
};
