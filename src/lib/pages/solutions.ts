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
    heading: "Transforming customer interactions with intelligent automation",
    lead: "PilotPulse automates meaningful conversations across multiple channels while maintaining your brand's tone and responsiveness.",
    features: [
      {
        title: "Pre Sales Enquiries",
        body: "Automate frequently asked questions and product recommendations using AI agents tuned to your business. Engage customers across WhatsApp, email, social media and web chat with consistent communication across each touchpoint.",
      },
      {
        title: "Appointment Scheduling",
        body: "Check live calendar availability and match customer records in your CRM. Available slots can be presented during the conversation. Once selected, the appointment is booked, confirmation is sent and a reminder is scheduled automatically.",
      },
      {
        title: "Proactive, Personalised Customer Follow Up",
        body: "Stay top of mind with customers through personalised nudges, reminders and updates. PilotPulse can also track conversations across email, WhatsApp and online chats for follow ups.",
      },
    ],
  },
  sales: {
    id: "sales-operations",
    eyebrow: "Sales Operations",
    heading: "Quotation, assessment and reporting in the flow of work.",
    blocks: [
      {
        title: "Quotation Generation",
        body: "PilotPulse has deployed Quotation AI as part of live business operations. For Call Lade Enterprises, the Quotation AI supports carpark leasing enquiries and enables the team to respond promptly.",
      },
      {
        title: "Assessment & Reporting",
        body: "PilotPulse supports AI readiness assessment and custom reporting. Reporting focuses on the success measures that matter to your business, together with insights on AI gaps and areas for improvement.",
      },
    ],
  },
  support: {
    id: "customer-support",
    eyebrow: "Customer Support",
    heading: "Handle volume, keep humans for when it matters.",
    handling: {
      title: "Customer Support Handling",
      body: "Handle customer enquiries at volume while keeping human support available when it matters. Customer Support AI can triage support tickets, while built in workflows allow conversations to move smoothly to human agents when deeper care is required.",
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
