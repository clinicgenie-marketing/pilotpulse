import { CONTACT_HREF } from "@/lib/content";

export type IndustryStat = {
  value: string;
  unit: string;
};

export type IndustryBlock = {
  id: string;
  eyebrow: string;
  heading: readonly string[];
  lead: string;
  featured: IndustryStat;
  facts: readonly IndustryStat[];
  image: string;
  liveAt?: string;
};

export const industriesNav = [
  { id: "logistics", label: "Logistics" },
  { id: "security", label: "Security & Manpower" },
  { id: "recruitment", label: "Recruitment & HR" },
  { id: "retail", label: "Retail & Distribution" },
  { id: "food-service", label: "Food Service & Hospitality" },
  { id: "government", label: "Government & Public Sector" },
] as const;

export const industriesPage = {
  meta: {
    title: "Industries",
    description:
      "Every industry has different workflows. PilotPulse builds a dedicated AI worker for yours, already proven in production across six verticals.",
  },
  hero: {
    titleBefore: "Your industry. ",
    titleHighlight: "Your AI worker.",
    lead: "Every industry has different workflows, different pressures, and different bottlenecks. PilotPulse builds a dedicated AI worker for yours, already proven in production across six verticals.",
    cta: { label: "Get a Demo", href: CONTACT_HREF },
  },
  industries: [
    {
      id: "logistics",
      eyebrow: "Logistics & Delivery",
      heading: ["Order status.", "Locker handoff.", "Without the call queue."],
      lead: "Your AI worker handles customer enquiries about parcels, lockers, and PINs so your operations team can spend less time on routine WhatsApp conversations.",
      featured: { value: "~30%", unit: "AI conversation handling" },
      facts: [
        { value: "S$0.13", unit: "AI runtime cost per conversation" },
        { value: "Under 4 seconds", unit: "Median first response" },
      ],
      image: "/industries/logistics-lockers.jpg",
      liveAt: "Live at Pick Network",
    },
    {
      id: "security",
      eyebrow: "Security & Manpower",
      heading: ["Officer scheduling.", "Payroll questions.", "Operations messages."],
      lead: "Your AI worker handles officer scheduling queries, payroll questions, and routine operations messages, freeing your team to manage what actually needs a human.",
      featured: { value: "S$5,500", unit: "Monthly operational savings" },
      facts: [
        { value: "~1.5 FTE", unit: "Freed for higher value work" },
        { value: "English and Chinese", unit: "Languages live" },
      ],
      image: "/industries/security.jpg",
      liveAt: "Live at Henderson Security",
    },
    {
      id: "recruitment",
      eyebrow: "Recruitment & HR",
      heading: ["Screen candidates.", "In minutes.", "Not days."],
      lead: "Your AI worker screens every applicant the moment they apply, scoring, shortlisting, and scheduling interviews before a human reads a single CV.",
      featured: { value: "Under 3 min", unit: "Candidate suitability decision" },
      facts: [
        { value: "~20 min", unit: "Saved per candidate" },
        { value: "4 roles", unit: "Driver screening flows live" },
      ],
      image: "/industries/recruitment.jpg",
      liveAt: "Live at Call Lade Recruitment",
    },
    {
      id: "retail",
      eyebrow: "Retail & Distribution",
      heading: ["58,000 SKUs.", "One WhatsApp.", "Real time matching."],
      lead: "Your AI worker matches product enquiries to the right SKU across more than 58,000 items in real time, integrated directly into your SAP system.",
      featured: { value: "58,000+", unit: "SKUs matched in real time" },
      facts: [
        { value: "3 offices", unit: "Singapore · Taiwan · China" },
        { value: "SAP", unit: "Live stock and price lookup" },
      ],
      image: "/industries/retail.jpg",
    },
    {
      id: "food-service",
      eyebrow: "Food Service & Hospitality",
      heading: ["Reservations.", "Menus.", "Special requests."],
      lead: "Your AI worker takes reservations, answers menu questions, and handles special requests across multiple outlets in four languages, around the clock.",
      featured: { value: "24/7", unit: "Reservation intake on WhatsApp" },
      facts: [
        { value: "Multi outlet", unit: "Menu and pricing sync" },
        { value: "4 languages", unit: "English · Chinese · Bahasa · Tamil" },
      ],
      image: "/industries/food-service.jpg",
    },
    {
      id: "government",
      eyebrow: "Government & Public Sector",
      heading: ["On premises AI.", "Data cannot leave."],
      lead: "Your AI worker runs entirely on your own infrastructure. No data leaves your environment and no external APIs are required.",
      featured: { value: "Zero", unit: "Data egress to external providers" },
      facts: [
        { value: "On premises", unit: "Qwen3 · Llama 3 · Mistral" },
        { value: "IMDA QWV", unit: "Pre approved vendor for EngageAssist and HireAssist" },
      ],
      image: "/industries/government.jpg",
    },
  ] satisfies IndustryBlock[],
  cta: {
    headingLine1: "Don't see your industry?",
    headingLine2: "Your AI worker can still be built.",
    body: "PilotPulse has also shipped into healthcare, FSI, and AV and events.",
    primaryCta: { label: "Tell Us Your Industry", href: CONTACT_HREF },
  },
};
