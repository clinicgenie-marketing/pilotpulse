import { CONTACT_HREF } from "@/lib/content";

export const solutionsNav = [
  { id: "customer-engagement", label: "Customer Engagement" },
  { id: "sales-operations", label: "Sales Operations" },
  { id: "customer-support", label: "Customer Support" },
  { id: "human-resources", label: "Human Resources" },
  { id: "project-management", label: "Project Management" },
  { id: "advanced-capabilities", label: "Advanced AI" },
] as const;

export const solutionsPage = {
  meta: {
    title: "Solutions",
    description:
      "AI that runs the work around every role — scheduling, quotations, screening, and documents, with a human handoff when it matters.",
  },
  hero: {
    eyebrow: "AI Agent Solutions",
    titleBefore: "AI that runs the work ",
    titleHighlight: "around every role.",
    lead: "They schedule, quote, screen, and file from the conversation — then hand work back when a human needs to step in.",
    chips: ["Scheduling", "Quotations", "Screening", "Documents"] as const,
    cta: { label: "Get a Demo", href: CONTACT_HREF },
    secondaryCta: { label: "Browse workflows", href: "#customer-engagement" },
    preview: {
      name: "Dr Lim's Clinic",
      status: "Last online just now",
      initials: "DL",
    },
  },
  engagement: {
    id: "customer-engagement",
    eyebrow: "Customer Engagement",
    headingLine1: "Transforming customer interactions",
    headingLine2: "with intelligent automation",
    lead: "PilotPulse automates meaningful conversations across multiple channels while maintaining your brand's tone and responsiveness.",
    features: [
      {
        title: "Answer pre-sales enquiries",
        body: "Answer questions, recommend products and qualify leads across key channels.",
      },
      {
        title: "Schedule appointments",
        body: "Check availability, book appointments and send confirmations and reminders automatically.",
      },
      {
        title: "Follow up with customers",
        body: "Send timely updates, reminders and follow-ups while keeping every conversation connected.",
      },
    ],
  },
  sales: {
    id: "sales-operations",
    eyebrow: "Sales Operations",
    heading: "Quotations and reporting, built into your workflow",
    blocks: [
      {
        title: "Generate quotations",
        body: "Quotation AI supports live carpark leasing enquiries for Call Lade Enterprises, helping the team respond faster.",
      },
      {
        title: "Assess and report",
        body: "Evaluate your AI readiness, measure what matters and identify gaps and opportunities for improvement.",
      },
    ],
  },
  support: {
    id: "customer-support",
    eyebrow: "Customer Support",
    heading: "Handle volume, keep humans for when it matters.",
    handling: {
      title: "Customer Support Handling",
      body: "Handle support enquiries at scale, triage requests and hand complex cases to your team with the right context.",
    },
    documents: {
      title: "Document Processing",
      lead: "Reads your documents at scale.",
      bullets: [
        "CV screening and ranking",
        "Invoice and shipping document extraction",
        "Product specification catalogue processing",
      ],
      note: "PilotPulse has applied AI Document Intelligence to a catalogue containing more than 58,000 product specifications.",
    },
    stat: {
      eyebrow: "Document Intelligence",
      value: "58,000+",
      unit: "product specifications processed",
    },
  },
  hr: {
    id: "human-resources",
    eyebrow: "Human Resources",
    pull: "Screen every applicant. Book the right ones.",
    recruitment: {
      title: "HR Recruitment & Training",
      bullets: [
        "Conversational CV screening",
        "Ranked candidate shortlist",
        "ATS and calendar integration",
      ],
      body: "In an existing recruitment workflow, the AI screens against role criteria, updates the ATS, books the interview and notifies the candidate. PilotPulse also supports specialist staff training as part of its internal operations capabilities.",
    },
    dataEntry: {
      title: "Data Entry",
      body: "Automate repetitive data entry and connect workflows with company systems to retrieve or update information. PilotPulse currently includes automated data entry among its internal operations capabilities.",
    },
  },
  projects: {
    id: "project-management",
    eyebrow: "Project Management",
    heading: "Project and Important Event Tracking",
    body: "Track conversations across email, WhatsApp and online chats for follow ups. Project Management AI can support time sensitive customer follow ups so important actions remain part of the workflow.",
  },
  advanced: {
    id: "advanced-capabilities",
    eyebrow: "Advanced AI Capabilities",
    headingBefore: "",
    headingHighlight: "Thinking",
    headingAfter: " AI Agents",
    lead: "Thinking AI Agents go beyond answering questions. They can take actions, call APIs, run tools, make decisions across multiple steps and maintain state. Examples already used across PilotPulse deployments include",
    examples: [
      "Looking up a specific parcel using a tracking number",
      "Checking eligibility for a shift swap",
      "Logging an incident report",
      "Routing work to the right human",
      "Checking live stock and pricing information before creating an order",
    ],
  },
  cta: {
    heading: "Ready to Deliver Better Experiences?",
    body: "See how fast, human first automation can work for your business.",
    primaryCta: { label: "Request a Demo", href: CONTACT_HREF },
  },
};
