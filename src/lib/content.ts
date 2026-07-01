/**
 * Single source of truth for all PilotPulse homepage copy.
 * Copy is taken from /docs/content.md (British English, hedged subsidy);
 * structure mirrors the design reference exactly (docs/design-spec-pdf.md).
 * Per client direction, the case-study section is omitted.
 */

/** Primary conversion destination for all CTAs. */
export const CONTACT_HREF = "/contact";
/** Blog is hosted separately/externally — wire this to the real URL at launch. */
export const BLOG_HREF = "#";

export const site = {
  name: "PilotPulse",
  domain: "pilotpulse.ai",
  email: "info@pilotpulse.ai",
  phone: "(65) 9876 8216",
  tagline: "Helping businesses move from manual operations to AI-supported execution.",
  positioning: "PilotPulse builds AI where the work actually happens.",
};

/** Sticky header: logo + links + persistent CTA. */
export const nav = {
  links: [
    { label: "Home", href: "/" },
    { label: "Contact Us", href: CONTACT_HREF },
    { label: "About Us", href: "#why" },
  ],
  cta: { label: "Identify your first AI workflow", href: CONTACT_HREF },
};

export const hero = {
  eyebrow: "AI Implementation Partner",
  headlineWhite: "Businesses are already running on AI. Just not",
  headlineGradient: "yours",
  subheadline:
    "Your competitors are automating workflows and cutting response times. Every week you wait, the gap widens.",
  primaryCta: { label: "Identify your first AI workflow", href: CONTACT_HREF },
  secondaryCta: { label: "See real implementations", href: "#clients" },
};

export const credibility = {
  eyebrow: "Partner Programme",
  headingBlue: "IMDA-Approved",
  headingWhite: "Technology Partner",
  body: [
    "PilotPulse is a 2026 Technology Partner for Singapore IMDA's GenAI for Digital Leaders initiative.",
    "Eligible businesses may access up to a 50% government subsidy on approved AI solution suite and customisation services, subject to programme terms and eligibility.",
  ],
  cta: { label: "Learn more", href: CONTACT_HREF },
};

/** Full-width rounded panel — "AI agents can now" + video card. */
export const operations = {
  eyebrow: "Operational AI",
  headingWhite: "AI is changing how",
  headingGradient: "businesses operate",
  sub: "Most companies start with tools. Most AI vendors stop at demos. That is why most AI never makes it into day-to-day work.",
  label: "AI agents can now:",
  bullets: [
    "Handle enquiries instantly, day or night",
    "Process documents without manual entry",
    "Screen candidates before human review",
    "Move information across systems without friction",
  ],
  video: {
    src: "/video/pilotpulse_clinic_3.mp4",
    title: "Customer Follow-Up AI Agent",
    subtitle: "For Healthcare, Aesthetics & Wellness Providers",
  },
  videoLink: { label: "View implementation", href: CONTACT_HREF },
  /** Closing statements — regular white text with bold emphasis phrases, as the reference. */
  bold: [
    {
      pre: "Their teams are not working harder. ",
      strong: "They are working on different things.",
      post: "",
    },
    {
      pre: "PilotPulse helps you move from manual operations to ",
      strong: "AI-supported execution",
      post: ", without disrupting what already works.",
    },
  ],
};

export const capabilities = {
  eyebrow: "Capabilities",
  headingWhite: "AI agents supporting ",
  headingGradient: "real business workflows",
  sub: "Capable of executing tasks across multiple business functions, not just answering questions.",
  cards: [
    {
      eyebrow: "Conversation AI",
      titleGradient: "Conversation AI:",
      title: "Customer Engagement",
      body: "Handles enquiries, recommendations, bookings, confirmations and follow-ups across WhatsApp, email and chat.",
      icon: "/ai-agents/convo-AI-w.png",
      link: { label: "Learn more", href: CONTACT_HREF },
    },
    {
      eyebrow: "Operations",
      titleGradient: "",
      title: "Operations Automation",
      body: "Processes documents, extracts data, prepares quotations, updates systems and coordinates internal workflows.",
      icon: "/ai-agents/operations-auto-w.png",
      link: { label: "Learn more", href: CONTACT_HREF },
    },
    {
      eyebrow: "Decision Support",
      titleGradient: "",
      title: "Decision Support",
      body: "Screens candidates, analyses conversations, surfaces key insights and gives teams structured information for faster, more consistent decisions.",
      icon: "/ai-agents/decision-support-w.png",
      link: { label: "Learn more", href: CONTACT_HREF },
    },
  ],
};

export const why = {
  eyebrow: "Why PilotPulse",
  headingPre: "Built for ",
  headingGradient: "real operational workflows",
  headingPost: "not just AI demos",
  subPlain: "Many vendors stop at prototypes and chatbot experiments.",
  subLead: "PilotPulse focuses on ",
  subGradient: "deploying AI inside real operational workflows.",
  label: "Our approach combines:",
  reasons: [
    {
      eyebrow: "Approach",
      title: "Workflow-First Design",
      body: "AI agents are designed around real business processes — not generic prompts.",
      icon: "/operational/op-workflow-first-design-w.png",
    },
    {
      eyebrow: "Integration",
      title: "Integration with Business Systems",
      body: "AI connects with the tools, databases and communication channels your team already uses, including ERP and CRM.",
      icon: "/operational/op-integration-with-business-systems-w.png",
    },
    {
      eyebrow: "Experience",
      title: "Multi-Industry Implementation Experience",
      body: "Delivered across logistics, recruitment, healthcare, catering, professional services and operational teams.",
      icon: "/operational/op-multi-industry-implementation-experience-w.png",
    },
    {
      eyebrow: "Reliability",
      title: "Production-Ready Reliability",
      body: "Systems are tested, refined and monitored for real operating conditions.",
      icon: "/operational/op-production-ready-reliability-w.png",
    },
  ],
};

export const values = {
  eyebrow: "Our Values",
  heading: "Our values",
  sub: "AI adoption should be practical, responsible and outcome-focused.",
  items: [
    {
      title: "Human First",
      bold: "AI should support your people, not replace them.",
      body: "We handle repetitive operational work so teams can focus on judgement, relationships and high-value decisions.",
      icon: "/values/values-01-human-first.png",
    },
    {
      title: "Outcome Focused",
      bold: "AI should deliver measurable operational value.",
      body: "We focus on workflows that reduce manual workload, improve consistency and support faster execution.",
      icon: "/values/values-02-outcome-focused.png",
    },
    {
      title: "Built on Trust",
      bold: "Businesses must stay in control.",
      body: "We design AI systems with transparency, human oversight and reliability built in.",
      icon: "/values/values-03-built-on-trust.png",
    },
    {
      title: "Practical Innovation",
      bold: "AI adoption should be ambitious but usable.",
      body: "We prioritise solutions that work inside real business constraints.",
      icon: "/values/values-04-practical-innovation.png",
    },
  ],
};

export const process = {
  eyebrow: "Our Process",
  heading: "From opportunity to implementation",
  sub: "We work closely with you to identify and deploy high-impact AI workflows. Practically and consultatively.",
  steps: [
    {
      n: "1",
      title: "AI Briefing",
      body: "See where AI workflows can replace manual effort in your operations",
      icon: "/process/process-01-ai-briefing.png",
    },
    {
      n: "2",
      title: "Opportunity Scan",
      body: "Pinpoint the highest-impact workflows and process gaps to automate first",
      icon: "/process/process-02-opportunity-scan.png",
    },
    {
      n: "3",
      title: "Solution Design",
      body: "Map integration requirements, timelines and expected returns",
      icon: "/process/process-03-solution-design-ROI.png",
    },
    {
      n: "4",
      title: "Implementation",
      body: "Deploy AI workflows into your existing operational environment",
      icon: "/process/process-04-implementation-integration.png",
    },
    {
      n: "5",
      title: "Scaling",
      body: "Roll out proven automations across the rest of the organisation",
      icon: "/process/process-05-scale-across-workflows.png",
    },
  ],
};

/** Client logo wall — rows of 9 / 10 / 9, as laid out in the reference. */
export const clients = {
  eyebrow: "Trusted By",
  heading: "Operations teams across industries",
  rows: [
    ["client-01", "client-02", "client-03", "client-04", "client-05", "client-06", "client-07", "client-08", "client-09"],
    ["client-10", "client-11", "client-12", "client-13", "client-14", "client-15", "client-16", "client-17", "client-18", "client-19"],
    ["client-20", "client-21", "client-22", "client-23", "client-24", "client-25", "client-26", "client-27", "client-28"],
  ],
};

export const testimonials = {
  eyebrow: "Client Voices",
  heading: "What our clients say",
  quotes: [
    {
      quote:
        "In logistics, constant document handling is a pain. PilotPulse's AI agents handle file processing, data extraction and entry. Our team's productivity and morale have picked up now that they're freed from repetitive work.",
      name: "Roger Chew",
      role: "Group CEO",
      company: "SFS Pharma Logistics",
      logo: "/images/client-17.png",
      logoStyle: "original",
    },
    {
      quote:
        "PilotPulse helped my management team understand the real impact of AI agents in recruitment. Both our Singapore and overseas teams now benefit from much faster and more accurate processes. Our people can focus on engaging clients and candidates, not admin.",
      name: "Wayne Chan",
      role: "Group CEO",
      company: "Connect Energy Services",
      logo: "/images/client-09.png",
    },
    {
      quote:
        "The PilotPulse team guided us patiently through automating a manual SAP workflow. Their solution has freed up my operational team for more valuable tasks and, more importantly, removed the human errors in data updates that previously risked business loss.",
      name: "Adeline Wong",
      role: "General Manager",
      company: "SuperWorld Electronics",
      logo: "/images/client-11.png",
    },
  ],
};

export const finalCta = {
  eyebrow: "Get Started",
  headingPre: "Start with ",
  headingGradient: "one workflow",
  blueLine: "You do not need to overhaul your entire business.",
  body: "Start with one process. See it work. Measure the impact. Then decide how far to go.",
  primaryCta: { label: "Identify your first AI workflow", href: CONTACT_HREF },
  secondaryCta: { label: "Request a demo", href: CONTACT_HREF },
};

export const footer = {
  location: { heading: "Location", lines: ["60 Paya Lebar Road #07-54", "Singapore 409051"] },
  contact: { heading: "Contact", phone: site.phone, email: site.email },
  hours: { heading: "Opening Hours", lines: ["Mon-Sat: 0900-1800", "Sun & PH: Closed"] },
  sitelinks: {
    heading: "Sitelinks",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "#why" },
      { label: "Blog", href: BLOG_HREF, external: true },
      { label: "Contact Us", href: CONTACT_HREF },
      { label: "Terms & Conditions", href: "#" },
      { label: "Privacy", href: "#" },
    ],
  },
  cta: { label: "Contact Us", href: CONTACT_HREF },
  copyright: "©2026 PilotPulse. All rights reserved.",
  legal: [
    { label: "Terms & Conditions", href: "#" },
    { label: "Privacy", href: "#" },
  ],
};

export const seo = {
  title: "PilotPulse | AI Workflow Automation & Agentic AI in Singapore",
  description:
    "PilotPulse implements agentic AI inside real business operations — automating enquiries, documents and recruitment. IMDA-approved partner. Start with one workflow.",
  h1: "Your business is already running on AI. Just not yours.",
};
