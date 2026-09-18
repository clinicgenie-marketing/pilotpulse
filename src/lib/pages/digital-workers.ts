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
    secondaryCta: { label: "See them work", href: "#workers" },
  },
  showcase: {
    id: "workers",
    eyebrow: "The digital team",
    headingBefore: "Six workers. ",
    headingHighlight: "Six jobs.",
    lead: "Choose a Digital Worker to see the job it is built for, the work it handles and where it is already in use.",
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
