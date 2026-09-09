import {
  CONTACT_HREF,
  LINKEDIN_HREF,
  STATUS_HREF,
  WHATSAPP_HREF,
  site,
} from "@/lib/content";

export const WHATSAPP_DEMO_HREF =
  "https://wa.me/6598768216?text=Hi%20PilotPulse%2C%20I%27d%20like%20a%20demo";

export type NavLink = {
  label: string;
  href: string;
};

export const homeNav = {
  links: [
    { label: "Your Digital Workforce", href: "/#products" },
    { label: "What a Digital Worker Does", href: "/#dashboard" },
    { label: "Customers", href: "/#testimonials" },
    { label: "Resources", href: "/#community" },
    { label: "Contact", href: CONTACT_HREF },
  ] satisfies NavLink[],
  cta: { label: "Get a Demo", href: CONTACT_HREF },
  status: { label: "Live", href: STATUS_HREF },
};

export const heroContent = {
  lineOne: "Deploying Agentic AI that",
  lineTwoMid: "so your",
  lineThree: "team doesn't have to.",
  pairs: [
    ["executes", "Logistics"],
    ["acts", "Healthcare"],
    ["decides", "F&B"],
    ["manages", "Retail"],
    ["executes", "HR"],
    ["acts", "Operations"],
  ] as const,
  support:
    "PilotPulse designs, deploys and manages AI digital workers that complete real tasks across your existing business systems.",
  primaryCta: { label: "Show Us Your Workflow", href: CONTACT_HREF },
  secondaryCta: { label: "Meet Your Digital Team", href: "/#products" },
  demo: {
    badge: "Live · Locker network",
    request: "Parcel shows delivered but locker 4B is empty. Order #LK-2291.",
    system: "Order database and locker sensors checked",
    action: "Customer redirected to locker 6A. Maintenance ticket raised.",
    outcome: "Resolved without a human in the loop",
  },
};

export const supportBanner = {
  programme: "2026 Technology Partner for Singapore",
  // VERIFY: Confirm the current IMDA GenAI for Digital Leaders partner listing and subsidy wording with the client.
  title: "IMDA's GenAI for Digital Leaders Initiative",
  body: "Eligible businesses may access a 50% government subsidy on our AI solution suite and customisation services, subject to programme terms.",
  cta: { label: "Check eligibility", href: CONTACT_HREF },
};

export const trustedOrgs = {
  eyebrow: "Trusted by SME businesses, enterprises and institution partners",
  logos: [
    { name: "Call Lade", src: "/logos/calllade.png" },
    { name: "Pick Network", src: "/logos/picknetwork.png" },
    { name: "Henderson Security", src: "/logos/henderson.webp" },
    { name: "Connect Energy Services", src: "/logos/connect-energy.png" },
    { name: "SFS Pharma Logistics", src: "/logos/sfs.png" },
    { name: "SuperWorld Electronics", src: "/logos/superworld.png" },
    { name: "Nanyang Polytechnic", src: "/logos/nyp.png" },
    { name: "Singapore Polytechnic", src: "/logos/singapore-poly.png" },
    { name: "Bijan", src: "/logos/bijan.png" },
    { name: "ClinicGenie", src: "/logos/clinic-genie.png" },
    { name: "Lighting Solutions", src: "/logos/lighting-solutions.png" },
    { name: "DTC", src: "/logos/dtc.png" },
    { name: "Skinscape Clinic", src: "/logos/skinscape-clinic.svg" },
    { name: "Skylink Auto", src: "/logos/skylink-auto.svg" },
  ] as const,
};

export type DemoSpeaker = "user" | "worker";

export type DemoMessage = {
  speaker: DemoSpeaker;
  label: string;
  text: string;
  action?: string;
};

export type WorkflowDemoItem = {
  id: string;
  label: string;
  icon: "truck" | "heart" | "userSearch" | "utensils";
  badge: string;
  messages: DemoMessage[];
  actions: string[];
  result: string;
};

export const workflowDemos: WorkflowDemoItem[] = [
  {
    id: "logistics",
    label: "Logistics",
    icon: "truck",
    badge: "Live · Locker Network Operator",
    messages: [
      {
        speaker: "user",
        label: "C",
        text: "Hi, my parcel shows delivered but locker 4B is empty. Order #LK-2291.",
      },
      {
        speaker: "worker",
        label: "AI",
        text: "Checking order #LK-2291 now…",
        action: "Order DB queried · Locker status pulled",
      },
      {
        speaker: "worker",
        label: "AI",
        text: "Locker 4B had a sensor fault at 14:32. Your parcel is safe in 6A. Code: 8821. Maintenance flagged automatically.",
        action: "Maintenance ticket raised · Customer notified",
      },
      {
        speaker: "user",
        label: "C",
        text: "Amazing, thank you!",
      },
    ],
    actions: [
      "Queried live order database",
      "Read locker sensor status",
      "Raised maintenance ticket",
      "Resolved without human involvement",
    ],
    result: "~30% of support queries resolved end-to-end",
  },
  {
    id: "healthcare",
    label: "Healthcare",
    icon: "heart",
    badge: "Live · Private Clinic",
    messages: [
      {
        speaker: "user",
        label: "P",
        text: "Hi, I'd like to book Dr Lim for Thursday afternoon.",
      },
      {
        speaker: "worker",
        label: "AI",
        text: "Checking Dr Lim's Thursday availability…",
        action: "Calendar API queried · CRM patient lookup",
      },
      {
        speaker: "worker",
        label: "AI",
        text: "Slots at 2:30pm and 4:00pm. Which works?",
        action: "2 slots retrieved · Patient record matched",
      },
      {
        speaker: "user",
        label: "P",
        text: "2:30pm please.",
      },
      {
        speaker: "worker",
        label: "AI",
        text: "Thursday 2:30pm confirmed. Reminder sent 24h before.",
        action: "Slot booked · Confirmation sent · Reminder scheduled",
      },
    ],
    actions: [
      "Checked live calendar availability",
      "Matched patient record in CRM",
      "Booked and sent confirmation",
      "Scheduled 24h reminder automatically",
    ],
    result: "Zero receptionist time for routine bookings",
  },
  {
    id: "recruitment",
    label: "Recruitment",
    icon: "userSearch",
    badge: "Live · Call Lade Recruitment",
    messages: [
      {
        speaker: "user",
        label: "A",
        text: "Hi, applying for delivery driver. Class 3 licence, 4 years experience.",
      },
      {
        speaker: "worker",
        label: "AI",
        text: "Great — what's your availability to start?",
        action: "Role criteria matched · Screening initiated",
      },
      {
        speaker: "user",
        label: "A",
        text: "Immediately, any shift.",
      },
      {
        speaker: "worker",
        label: "AI",
        text: "You've been shortlisted. Interview booked tomorrow at 10am — details sent to WhatsApp.",
        action: "ATS updated · Interview scheduled · Candidate notified",
      },
    ],
    actions: [
      "Screened against role criteria",
      "Pushed record to ATS",
      "Booked interview in calendar",
      "Decision in under 3 minutes",
    ],
    result: "~20 min saved per candidate",
  },
  {
    id: "fnb",
    label: "Food and Beverage",
    icon: "utensils",
    badge: "Live · Restaurant Group",
    messages: [
      {
        speaker: "user",
        label: "G",
        text: "Table for 6 this Saturday 7pm? One guest is vegetarian.",
      },
      {
        speaker: "worker",
        label: "AI",
        text: "Checking Saturday 7pm for 6…",
        action: "Reservation system queried · Table availability checked",
      },
      {
        speaker: "worker",
        label: "AI",
        text: "Confirmed — table for 6 at 7pm. Vegetarian noted for kitchen. Name for reservation?",
        action: "Dietary flag sent to kitchen system",
      },
      {
        speaker: "user",
        label: "G",
        text: "Lee. Thanks!",
      },
      {
        speaker: "worker",
        label: "AI",
        text: "Booked under Lee — see you Saturday!",
        action: "Reservation saved · Reminder set for Friday",
      },
    ],
    actions: [
      "Checked live reservation availability",
      "Flagged dietary requirement to kitchen",
      "Booked and confirmed end-to-end",
      "Reminder scheduled without staff",
    ],
    result: "Zero phone tag · dietary notes reach kitchen automatically",
  },
];

export const agentWorkflow = {
  eyebrow: "How it works",
  headingBefore: "What your AI worker does",
  headingAfter: "behind the scenes.",
  sub: "Your AI worker checks systems, takes action, escalates when needed, and closes the loop automatically.",
  steps: [
    {
      title: "Receives the message",
      body: "An enquiry arrives via WhatsApp, email or your website.",
    },
    {
      title: "Understands the request",
      body: "Identifies what the customer needs using the conversation context.",
    },
    {
      title: "Checks your systems",
      body: "Retrieves relevant information from your CRM, calendar or connected tools.",
    },
    {
      title: "Brings in your team when needed",
      body: "Hands over exceptions with the context needed to take over.",
    },
    {
      title: "Completes the task",
      body: "Sends the response and records the outcome in your systems.",
    },
  ] as const,
};

export type SolutionIconName =
  | "message"
  | "userSearch"
  | "file"
  | "phone"
  | "server"
  | "briefcase"
  | "compass";

export type WorkerGlyphName =
  | "message"
  | "userSearch"
  | "file"
  | "phone"
  | "server"
  | "briefcase"
  | "compass";

export type DigitalWorkerProfile = {
  code: "DW-01" | "DW-02" | "DW-03" | "DW-04";
  name: string;
  headline: string;
  points: readonly string[];
  glyph: WorkerGlyphName;
};

export type OnPremisesPanelContent = {
  eyebrow: string;
  name: string;
  heading: string;
  body: string;
  points: readonly string[];
};

export type Solution = {
  name: string;
  title: string;
  role: string;
  points: string[];
  skills: readonly [string, string, string];
  connections: readonly [string, string, string];
  icon: SolutionIconName;
};

export const digitalWorkforce = {
  eyebrow: "Your digital workforce",
  heading: "Meet the AI workers built for real work.",
  sub: "Each PilotPulse Digital Worker is designed for a specific role, connected to your existing systems and supported by human oversight.",
  workers: [
    {
      code: "DW-01",
      name: "EngageAssist",
      headline: "Your AI-powered front desk.",
      points: [
        "WhatsApp · web · email",
        "Drop-in templates per industry",
        "Human handover with full context",
      ],
      glyph: "message",
    },
    {
      code: "DW-02",
      name: "HireAssist",
      headline: "Screen every applicant. Book the right ones.",
      points: [
        "Conversational CV screening",
        "Ranked candidate shortlist",
        "ATS + calendar integration",
      ],
      glyph: "userSearch",
    },
    {
      code: "DW-03",
      name: "AI Document Intelligence",
      headline: "Reads your documents at scale.",
      points: [
        "CV screening & ranking",
        "Invoice / shipping doc extraction",
        "58,000+ product spec catalogue",
      ],
      glyph: "file",
    },
    {
      code: "DW-04",
      name: "Voice AI",
      headline: "AI that handles phone calls.",
      points: ["Identity verification", "Multi-lingual"],
      glyph: "phone",
    },
  ] satisfies DigitalWorkerProfile[],
  onPremises: {
    eyebrow: "Private deployment",
    name: "On-Premises AI",
    heading: "For data that can't leave the building.",
    body: "For data that can't leave the building.",
    points: [
      "Runs entirely on your own servers",
      "Your data never leaves your servers",
      "Government & healthcare-ready",
    ],
  } satisfies OnPremisesPanelContent,
  servicesHeading: "AI Transformation Services",
  services: [
    {
      name: "CTO-as-a-Service",
      title: "Strategic tech leadership without a full-time hire.",
      role: "Strategic tech leadership",
      points: ["AI strategy and roadmap", "AI readiness assessment", "AI tool selection"],
      skills: ["Strategy", "Readiness", "Tools"],
      connections: ["Roadmap", "Assessment", "Selection"],
      icon: "briefcase",
    },
    {
      name: "AI Audit",
      title: "14-day diagnostic. Prioritised AI opportunities.",
      role: "14-day diagnostic",
      points: [
        "Business process review",
        "Prioritised AI opportunities",
        "Concrete implementation plan",
      ],
      skills: ["Review", "Prioritise", "Plan"],
      connections: ["Process", "Opportunities", "Plan"],
      icon: "compass",
    },
  ] satisfies Solution[],
};

export type IntegrationName =
  | "WhatsApp"
  | "Gmail"
  | "Google Calendar"
  | "Calendly"
  | "Airtable"
  | "Google Sheets"
  | "QuickBooks"
  | "Slack"
  | "HubSpot"
  | "Salesforce"
  | "Notion"
  | "Zapier";

export const integrations = {
  eyebrow: "Integrates with your existing stack",
  heading: "Your digital workers, connected to the tools you already use.",
  body: "PilotPulse digital workers can retrieve information, update records, trigger workflows and complete tasks across your existing business systems.",
  names: [
    "WhatsApp",
    "Gmail",
    "Google Calendar",
    "Calendly",
    "Airtable",
    "Google Sheets",
    "QuickBooks",
    "Slack",
    "HubSpot",
    "Salesforce",
    "Notion",
    "Zapier",
  ] satisfies IntegrationName[],
  core: ["WhatsApp", "Gmail"] as IntegrationName[],
  callout: {
    heading: "Don't see your system?",
    body: "PilotPulse can also connect through APIs, webhooks and custom integrations.",
    cta: { label: "Discuss an integration", href: CONTACT_HREF },
  },
};

export type ResultMetric = {
  context: string;
  numeric: number;
  prefix: string;
  suffix: string;
  description: string;
};

export const results = {
  eyebrow: "Live deployment results",
  heading: "Less manual work. More capacity to move.",
  sub: "PilotPulse Digital Workers are already supporting customer engagement, recruitment and regional operations.",
  qualification:
    "Selected outcomes from live implementations. Results vary depending on workflow, scope and operating environment.",
  metrics: [
    {
      context: "Customer engagement",
      numeric: 30,
      prefix: "~",
      suffix: "%",
      description: "of enquiries handled by AI",
    },
    {
      context: "Recruitment",
      numeric: 20,
      prefix: "~",
      suffix: " min",
      description: "saved for every candidate screened",
    },
    {
      context: "Regional operations",
      numeric: 3,
      prefix: "",
      suffix: " offices",
      description: "supported across Singapore, Taiwan and China",
    },
  ] satisfies ResultMetric[],
};

export type Testimonial = {
  id: string;
  tag: string;
  quote: string;
  excerpt: string;
  name: string | null;
  initials: string;
  role: string;
  company: string;
};

export const homeTestimonials: Testimonial[] = [
  {
    id: "locker",
    tag: "Logistics · Locker Network",
    quote:
      "The agent handles our locker network conversations reliably — integrated to order tracking with the right human handover. Customers can now send photos and the AI reads them and responds promptly.",
    excerpt:
      "The agent handles locker conversations reliably, with order tracking and the right human handover.",
    name: null,
    initials: "NS",
    role: "CEO",
    company: "Locker network operator · Singapore",
  },
  {
    id: "sfs",
    tag: "Logistics · Documents",
    quote:
      "In logistics, constant document handling is a pain. PilotPulse's AI agents handle file processing, data extraction and entry. Our team's productivity and morale have picked up now that they're freed from repetitive work.",
    excerpt:
      "PilotPulse's AI agents handle file processing, data extraction and entry — freeing the team from repetitive work.",
    name: "Roger Chew",
    initials: "RC",
    role: "Group CEO",
    company: "SFS Pharma Logistics",
  },
  {
    id: "security",
    tag: "Security · Shift Operations",
    quote:
      "The AI worker handles shift queries, payroll checks, and leave requests around the clock. Our control room now focuses entirely on operational decisions rather than admin.",
    excerpt:
      "The AI worker handles shift queries, payroll checks and leave requests around the clock.",
    name: null,
    initials: "HS",
    role: "Operations Manager",
    company: "Security services · Singapore",
  },
  {
    id: "connect",
    tag: "Recruitment · Energy",
    quote:
      "PilotPulse helped my management team understand the real impact of AI agents in recruitment. Both our Singapore and overseas teams now benefit from much faster and more accurate processes. Our people can focus on engaging clients and candidates, not admin.",
    excerpt:
      "Singapore and overseas teams now benefit from faster, more accurate recruitment processes.",
    name: "Wayne Chan",
    initials: "WC",
    role: "Group CEO",
    company: "Connect Energy Services",
  },
  {
    id: "recruitment",
    tag: "Recruitment · Screening",
    quote:
      "Two agents in production — recruitment and quotation. The recruitment agent cut ~20 minutes off every candidate engagement; the quotation agent responds to carpark leasing enquiries promptly.",
    excerpt:
      "The recruitment agent cut about 20 minutes off every candidate engagement.",
    name: null,
    initials: "TD",
    role: "Director",
    company: "Recruitment agency · Singapore",
  },
  {
    id: "superworld",
    tag: "Retail · Operations",
    quote:
      "The PilotPulse team guided us patiently through automating a manual SAP workflow. Their solution has freed up my operational team for more valuable tasks and, more importantly, removed the human errors in data updates that previously risked business loss.",
    excerpt:
      "A manual SAP workflow is now automated, freeing the operations team and removing data-entry errors.",
    name: "Adeline Wong",
    initials: "AW",
    role: "General Manager",
    company: "SuperWorld Electronics",
  },
  {
    id: "retail",
    tag: "Retail · Operations",
    quote:
      "PilotPulse guided us through automating a manual workflow. It freed up the ops team for higher-value tasks and removed the data-entry errors that previously cost us real business.",
    excerpt:
      "Automating a manual workflow freed the operations team and removed costly data-entry errors.",
    name: null,
    initials: "AW",
    role: "General Manager",
    company: "Retail operations · Singapore",
  },
];

export const partnershipProcess = {
  eyebrow: "Approach",
  heading: "How we partner with you.",
  sub: "From the first conversation to a live AI worker. We stay with you at every step, ensuring the deployment succeeds and keeps improving.",
  cta: { label: "Show Us Your Workflow", href: CONTACT_HREF },
  steps: [
    {
      n: "01",
      title: "Clarify ROI",
      body: "We start by understanding what success looks like for your business.",
      points: [
        "Increase revenue",
        "Increase manpower productivity",
        "Eliminate staff churn friction",
      ],
    },
    {
      n: "02",
      title: "Design the workflow",
      body: "We map your workflows and define the workflow logic, decision rules, system permissions and human approval points.",
      points: [
        "Handling SOPs and Q&As",
        "Workflow and decision-rule design",
        "Human handover thresholds",
      ],
    },
    {
      n: "03",
      title: "Build into your stack",
      body: "We build and integrate the AI worker into your existing stack.",
      points: [
        "Clear, small prompt context",
        "System integration (CRM, calendar, ERP)",
        "Security and guardrails design",
      ],
    },
    {
      n: "04",
      title: "Iterate in production",
      body: "We run the pilot alongside your team and tune it in real time.",
      points: [
        "Easy feedback interface for your team",
        "Fast enhancements based on live data",
      ],
    },
    {
      n: "05",
      title: "Report what matters",
      body: "We measure what matters to your business, not vanity metrics.",
      points: [
        "Success measures that matter to you",
        "Insights on AI gaps and improvement areas",
      ],
    },
  ],
};

export const security = {
  eyebrow: "Architecture and Security",
  heading: "Built for",
  headingLine: "operational control.",
  items: [
    {
      title: "AES-256 encryption",
      // VERIFY: Confirm AES-256 at rest and in transit is an approved public claim.
      body: "Data encrypted at rest and in transit",
    },
    {
      title: "Singapore-hosted",
      // VERIFY: Confirm all production data remains in Singapore jurisdiction.
      body: "Data stays within Singapore jurisdiction",
    },
    {
      title: "Full audit trail",
      body: "Every agent decision logged and reviewable",
    },
    {
      title: "PDPA-aligned",
      // VERIFY: Confirm “PDPA-aligned” and “IMDA pre-approved vendor” wording with the client.
      body: "Separation of PII · IMDA pre-approved vendor",
    },
  ],
};

export type PartnerLogo = {
  src: string;
  alt: string;
};

export type EcosystemCard = {
  name: string;
  category: string;
  title: string;
  body: string;
  logos: PartnerLogo[];
};

export const ecosystem = {
  eyebrow: "Partnerships & programmes",
  headingBefore: "Working across Singapore’s",
  headingAccent: "AI ecosystem.",
  sub: "Technology programmes, education partnerships and industry collaborations supporting practical AI adoption.",
  featuredHeading: "Featured programme partnerships",
  supportingHeading: "Education & ecosystem collaborations",
  featured: [
    {
      name: "IMDA",
      category: "Government · Technology programme",
      title: "GenAI x Digital Leaders Technology Partner",
      body: "Supporting eligible SMEs exploring practical AI implementation.",
      logos: [{ src: "/partners/imda.svg", alt: "IMDA" }],
    },
    {
      name: "Singtel",
      category: "Telecommunications · SME programme",
      title: "Singtel AI.dea Technology Partner",
      body: "Supporting structured AI proof-of-concept initiatives for SMEs.",
      logos: [{ src: "/partners/singtel.svg", alt: "Singtel" }],
    },
    {
      name: "IMDA DLAB and EY-Parthenon",
      category: "Government · Innovation programme",
      title: "IMDA DLAB Programme Participant",
      body: "Selected for a programme focused on practical AI applications for SMEs.",
      logos: [
        { src: "/partners/imda.svg", alt: "IMDA" },
        { src: "/partners/ey.svg", alt: "EY-Parthenon" },
      ],
    },
  ] satisfies EcosystemCard[],
  supporting: [
    {
      name: "Temasek Polytechnic",
      category: "Education · Implementation",
      title: "AI Implementation and Training Collaboration",
      body: "Supporting applied AI projects and workforce training.",
      logos: [{ src: "/partners/temasek-polytechnic.svg", alt: "Temasek Polytechnic" }],
    },
    {
      name: "Nanyang Polytechnic",
      category: "Education · Innovation",
      title: "AI Catalyst Programme Technology Partner",
      body: "Contributing technology capabilities to applied AI innovation.",
      logos: [{ src: "/logos/nyp.png", alt: "Nanyang Polytechnic" }],
    },
    {
      name: "ITE and Dell Technologies",
      category: "Education · Technology",
      title: "AI Centre of Excellence Project Partner",
      body: "Supporting SME AI adoption initiatives through the ITE and Dell ecosystem.",
      logos: [
        { src: "/partners/ite.webp", alt: "ITE" },
        { src: "/partners/dell.webp", alt: "Dell Technologies" },
      ],
    },
    {
      name: "Civil Service College",
      category: "Knowledge sharing",
      title: "Invited Speaker on SME AI Adoption",
      body: "Sharing practical approaches to AI implementation and adoption.",
      logos: [{ src: "/partners/csc.png", alt: "Civil Service College" }],
    },
  ] satisfies EcosystemCard[],
};

export type CommunityStory = {
  category: string;
  title: string;
  description: string;
  href: string;
  date?: string;
};

export const latestUpdates = {
  eyebrow: "From the field",
  heading: "Built in practice. Shared in the open.",
  sub: "Deployment notes, product thinking and ecosystem updates from the PilotPulse team.",
  linkedIn: { label: "Follow PilotPulse on LinkedIn ↗", href: LINKEDIN_HREF },
  stories: [
    {
      category: "Build log",
      title: "From scoping call to production.",
      description:
        "Behind the scenes of how a real business workflow becomes a working PilotPulse Digital Worker.",
      href: "https://www.linkedin.com/posts/activity-7462886298559778819-cwda",
    },
    {
      category: "Field notes",
      title: "What deploying AI workers really takes.",
      description: "Lessons from turning business processes into reliable production workflows.",
      href: "https://www.linkedin.com/posts/pilotpulse-ai_our-founder-chong-kian-s-sharing-stories-activity-7459977705158201344-ei4Y",
    },
    {
      category: "Ecosystem",
      title: "PilotPulse and the GenAI x Digital Leaders initiative.",
      description: "How PilotPulse is supporting practical AI adoption for Singapore SMEs.",
      href: "https://www.linkedin.com/posts/pilotpulse-ai_we-are-honored-to-be-invited-by-imda-and-activity-7451619476195942400-zo-e",
    },
    {
      category: "Perspective",
      title: "Making human judgement more valuable.",
      description:
        "Why successful AI transformation removes repetitive work while keeping people in control.",
      href: "https://www.linkedin.com/posts/pilotpulse-ai_aitransformation-singapore-makinghumanirreplaceable-activity-7364098745212260352-soe9",
    },
    {
      category: "Events",
      title: "PilotPulse at AIFA 2026.",
      description:
        "Connecting with the founders, enterprises and programme partners shaping the next phase of AI adoption.",
      href: "https://www.linkedin.com/posts/pilotpulse-ai_aifa2026-activity-7421420314011705345-mSRs",
    },
  ] satisfies CommunityStory[],
};

export const finalCtaContent = {
  eyebrow: "Get in touch",
  heading: "Tell us the workflow. We’ll bring the pilot.",
  body: "Show us where repetitive work is slowing your team down. We will help you identify a practical place to begin.",
  primaryCta: { label: "Show Us Your Workflow", href: WHATSAPP_DEMO_HREF },
  secondaryCta: { label: "WhatsApp PilotPulse", href: WHATSAPP_HREF },
  note: "We’ll get back to you within one Singapore business day.",
};

export type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type FooterGroup = {
  heading: string;
  links: FooterLink[];
};

export const homeFooter = {
  blurb:
    "Dedicated AI workers, built and run by PilotPulse. Deployed across Singapore SME and enterprise operations.",
  // VERIFY: Confirm “thirteen industries” before using that claim in public copy.
  status: { label: "All systems operational", href: STATUS_HREF },
  social: [{ label: "LinkedIn", href: LINKEDIN_HREF }],
  groups: [
    {
      heading: "Your Digital Workforce",
      links: [
        { label: "EngageAssist", href: "/#products" },
        { label: "HireAssist", href: "/#products" },
        { label: "AI Document Intelligence", href: "/#products" },
        { label: "Voice AI", href: "/#products" },
      ],
    },
    {
      heading: "Services",
      links: [
        { label: "On-Premises AI", href: "/#products" },
        { label: "CTO-as-a-Service", href: "/#products" },
        { label: "AI Audit", href: "/#products" },
      ],
    },
    {
      heading: "Customers",
      links: [
        { label: "What AI workers deliver", href: "/#results" },
        { label: "Client voices", href: "/#testimonials" },
      ],
    },
    {
      heading: "Resources",
      links: [
        { label: "Latest from PilotPulse", href: "/#community" },
        { label: "LinkedIn", href: LINKEDIN_HREF, external: true },
      ],
    },
    {
      heading: "Trust",
      links: [
        { label: "Architecture and security", href: "/#security" },
        { label: "System status", href: STATUS_HREF, external: true },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "Partnerships", href: "/#partnerships" },
        { label: "Contact", href: CONTACT_HREF },
        { label: "WhatsApp", href: WHATSAPP_HREF, external: true },
        { label: "Careers", href: "mailto:careers@pilotpulse.ai" },
      ],
    },
  ] satisfies FooterGroup[],
  company: {
    // VERIFY: Confirm Goldhill Plaza as the public headquarters address.
    address: "51 Goldhill Plaza, #14-01, Singapore 308900",
    phone: site.phone,
    email: site.email,
    adminEmail: "techadmin@pilotpulse.ai",
    securityEmail: "security@pilotpulse.ai",
  },
  copyright: "© 2026 PilotPulse Pte Ltd",
  descriptors: "IMDA Quick Win Vendor · Singtel SME AI partner · ITE AI CoE",
};
