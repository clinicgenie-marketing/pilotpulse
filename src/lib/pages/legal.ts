import { OFFICE_ADDRESS, LEGAL_UPDATED } from "@/lib/pages/shared";

export const LEGAL_HREF = "/legal";

export const legalContact = {
  company: OFFICE_ADDRESS.company,
  lines: OFFICE_ADDRESS.lines,
  email: "info@pilotpulse.ai",
};

export const legalPage = {
  meta: {
    title: "Terms & Privacy",
    description: "Terms of use and privacy summary for PilotPulse.",
  },
  eyebrow: "Legal",
  title: "Terms & Privacy",
  lastUpdated: LEGAL_UPDATED,
  sections: [
    {
      id: "acceptance",
      n: "01",
      heading: "Acceptance of Terms",
      body: [
        "By accessing or using our platform, you agree to comply with our Terms of Use and this Privacy Summary. If you do not agree, please refrain from using our services.",
      ],
    },
    {
      id: "collect",
      n: "02",
      heading: "Information We Collect",
      body: ["We may collect the following types of information:"],
      items: [
        {
          lead: "Account Information:",
          rest: "When you register, we collect your name, email address, and other relevant details.",
        },
        {
          lead: "Usage Data:",
          rest: "Information about how you interact with our platform, including IP addresses, browser types, and pages visited.",
        },
        {
          lead: "Support Data:",
          rest: "Information you provide when contacting our support team.",
        },
        {
          lead: "Transaction Data:",
          rest: "Details of any transactions made through our platform.",
        },
      ],
    },
    {
      id: "use",
      n: "03",
      heading: "How We Use Your Information",
      body: ["Your information is used to:"],
      items: [
        { rest: "Provide and maintain our services." },
        { rest: "Improve and personalize user experience." },
        { rest: "Communicate with you about updates, promotions, and other relevant information." },
        { rest: "Comply with legal obligations and enforce our terms." },
      ],
    },
    {
      id: "sharing",
      n: "04",
      heading: "Data Sharing and Disclosure",
      body: ["We do not sell your personal information. We may share your data with:"],
      items: [
        {
          lead: "Service Providers:",
          rest: "Third parties who assist in operating our platform.",
        },
        {
          lead: "Legal Authorities:",
          rest: "When required by law or to protect our rights.",
        },
      ],
    },
    {
      id: "security",
      n: "05",
      heading: "Data Security",
      body: [
        "We implement appropriate security measures to protect your data from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet is entirely secure.",
      ],
    },
    {
      id: "rights",
      n: "06",
      heading: "Your Rights",
      body: ["Depending on your jurisdiction, you may have rights to:"],
      items: [
        { rest: "Access the personal data we hold about you." },
        { rest: "Request correction or deletion of your data." },
        { rest: "Object to or restrict certain processing activities." },
        { rest: "Withdraw consent where processing is based on consent." },
      ],
      closing: "To exercise these rights, please contact us at",
    },
    {
      id: "cookies",
      n: "07",
      heading: "Cookies and Tracking Technologies",
      body: [
        "Our platform may use cookies and similar technologies to enhance user experience and analyze usage patterns. You can manage your cookie preferences through your browser settings.",
      ],
    },
    {
      id: "changes",
      n: "08",
      heading: "Changes to This Summary",
      body: [
        "We may update this summary periodically. Changes will be posted on this page with an updated revision date. Continued use of our platform after changes indicates acceptance of the revised terms.",
      ],
    },
    {
      id: "contact",
      n: "09",
      heading: "Contact Us",
      body: ["For questions or concerns regarding this summary or our data practices, please contact:"],
    },
  ],
} as const;
