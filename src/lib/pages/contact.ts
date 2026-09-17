import { LINKEDIN_HREF, TWITTER_HREF, WHATSAPP_HREF, YOUTUBE_HREF, site } from "@/lib/content";
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
    title: "Get a Demo",
    description: "Start with one pilot. See what it unlocks.",
  },
  hero: {
    titleLine1: "Start with one pilot.",
    titleLine2: "See what it unlocks.",
    lead: "We don’t do generic demos or vague promises. We listen. We scope. We show you what AI can do for your workflows, your team, and your business.",
    closing: "Let’s talk about where you want to start.",
  },
  next: {
    heading: "What happens next?",
    lead: "You’re one conversation closer to a working pilot.",
    steps: [
      {
        n: "01",
        titleBefore: "We’ll ",
        titleHighlight: "listen",
        body: "One workflow, your systems, and what success actually looks like.",
      },
      {
        n: "02",
        titleBefore: "We’ll ",
        titleHighlight: "scope",
        body: "What we connect, what we measure, and what the first week looks like.",
      },
      {
        n: "03",
        titleBefore: "We’ll ",
        titleHighlight: "show",
        body: "A pilot you can run with your team — then decide if it earns the next one.",
      },
    ],
  },
  form: {
    intro: "Write us a few words about the workflow and we’ll come back within",
    introHighlight: "one Singapore business day.",
    name: "Your name",
    email: "Work email",
    company: "Company",
    workflow: "Which workflow",
    optional: "Optional",
    message: "Tell us a little about the work",
    submit: "Get a Demo",
    noteBefore: "If you’d rather email first, write to",
    placeholders: {
      name: "Your name",
      email: "Work email",
      company: "Company",
      workflow: "Which workflow",
      message: "A WhatsApp queue for locker enquiries, or screening drivers as they apply…",
    },
    whatsappHref: WHATSAPP_HREF,
  },
  links: [
    { label: "LinkedIn", href: LINKEDIN_HREF },
    { label: "WhatsApp", href: WHATSAPP_HREF },
    { label: "Email", href: `mailto:${site.email}` },
  ] as const,
  details: {
    office: {
      heading: "Office Address",
      company: OFFICE_ADDRESS.company,
      lines: OFFICE_ADDRESS.lines,
    },
    follow: {
      heading: "Follow Us",
      body: "Stay updated on new pilots, features, and case studies.",
      links: [
        { label: "LinkedIn", href: LINKEDIN_HREF },
        { label: "Twitter", href: TWITTER_HREF },
        { label: "YouTube", href: YOUTUBE_HREF },
      ] as const,
    },
  },
  email: site.email,
};
