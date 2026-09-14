import { CONTACT_HREF, LINKEDIN_HREF, WHATSAPP_HREF } from "@/lib/content";
import { WHATSAPP_DEMO_HREF } from "@/lib/home-content";
import { OFFICE_ADDRESS } from "@/lib/pages/shared";

export const contactWorkflows = [
  "Customer engagement",
  "Recruitment",
  "Support",
  "Logistics",
  "Other",
] as const;

export const contactPage = {
  meta: {
    title: "Contact",
    description: "Start with one pilot. See what it unlocks.",
  },
  hero: {
    titleBefore: "Start with ",
    titleHighlight: "one pilot.",
    titleAfter: " See what it unlocks.",
    lead: "We don't do generic demos or vague promises. We listen. We scope. We show you what AI can do for your workflows, your team, and your business.",
    closing: "Let's talk about where you want to start.",
  },
  form: {
    eyebrow: "Request a demo",
    heading: "Tell us the workflow.",
    intro: "Share a little context. We'll come back with a practical place to start.",
    name: "Name",
    email: "Work email",
    company: "Company",
    workflow: "Which workflow should we look at first?",
    message: "Tell us a little about the work",
    submit: "Get a Demo",
    whatsapp: "WhatsApp PilotPulse",
    note: "We will get back to you within one Singapore business day.",
    placeholders: {
      name: "Jane Tan",
      email: "jane@company.com",
      company: "Your company",
      message: "A WhatsApp queue for locker enquiries, or screening drivers as they apply…",
    },
    demoHref: WHATSAPP_DEMO_HREF,
    whatsappHref: WHATSAPP_HREF,
  },
  inquiries: {
    heading: "General Inquiries",
    body: "Have a question about our AI assistants, funding eligibility, or partnership opportunities? Reach out. We'll get back to you within 1–2 business days.",
    email: "info@pilotpulse.ai",
  },
  office: {
    heading: "Office Address",
    company: OFFICE_ADDRESS.company,
    lines: OFFICE_ADDRESS.lines,
  },
  follow: {
    heading: "Follow Us",
    body: "Stay updated on new pilots, features, and case studies.",
    linkedIn: { label: "LinkedIn", href: LINKEDIN_HREF },
  },
  contactHref: CONTACT_HREF,
};
