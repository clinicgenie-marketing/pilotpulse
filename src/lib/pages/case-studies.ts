import { CONTACT_HREF } from "@/lib/content";

export type CaseStudy = {
  id: string;
  title: string;
  titleLines: readonly [string, string];
  industryCaption: string;
  challenge: readonly string[];
  implementation: readonly string[];
  implementationNote?: string;
  outcomes?: readonly string[];
  note?: string;
};

export type CaseStudyIndustry = {
  id: string;
  label: string;
  heroImage: string;
  heroImagePosition?: string;
  studies: readonly CaseStudy[];
};

export const caseStudyIndustries = [
  {
    id: "logistics",
    label: "Logistics",
    heroImage: "/case-studies/logistics.jpg",
    studies: [
      {
        id: "last-mile-logistics-customer-support",
        title: "Last-Mile Logistics Customer Support",
        titleLines: ["Last-Mile Logistics", "Customer Support"],
        industryCaption: "Last-mile delivery and logistics.",
        challenge: [
          "Customer service teams handle high volumes of delivery and service enquiries, often searching multiple systems before responding. This slows response times and creates inconsistent customer experiences.",
        ],
        implementation: [
          "Serves as the first line of WhatsApp support.",
          "Connects to the logistics management system.",
          "Analyses customer-uploaded images, including delivery and damage photos.",
          "Handles routine enquiries and escalates complex cases to human operators.",
        ],
        outcomes: [
          "24/7 customer support availability.",
          "Faster response times.",
          "Consistent customer service.",
          "Reduced workload for customer service teams.",
          "Allows operational staff to focus on resolving complex customer issues.",
        ],
      },
      {
        id: "freight-forwarder-data-processing",
        title: "Freight Forwarder Data Processing & Operational Updates",
        titleLines: ["Freight Forwarder Data Processing", "& Operational Updates"],
        industryCaption: "Freight forwarding and logistics operations.",
        challenge: [
          "Operations teams spend significant time processing shipping information and manually updating operational systems. This slows operations and increases the risk of human error.",
        ],
        implementation: [
          "Reads logistics-related operational information from incoming workflows.",
          "Extracts and validates required shipment data automatically.",
          "Updates the company’s control tower and operational systems with verified information.",
          "Reduces repetitive manual processing while maintaining data consistency.",
        ],
        outcomes: [
          "Significant reduction in manual data processing.",
          "Higher operational data accuracy.",
          "Faster processing turnaround.",
          "Reduced operational bottlenecks.",
          "Operations teams can focus on exception handling instead of repetitive administration.",
        ],
      },
      {
        id: "air-cargo-quotation-automation",
        title: "Air Cargo Quotation Automation",
        titleLines: ["Air Cargo", "Quotation Automation"],
        industryCaption: "Air cargo and freight forwarding.",
        challenge: [
          "Freight quotations are manual and time-sensitive. Teams must track airline rates and surcharges, update pricing data and prepare accurate quotes, while missed changes can lead to errors and margin leakage.",
        ],
        implementation: [
          "Reads airline quotation requests.",
          "Tracks and validates rate and surcharge updates.",
          "Updates internal pricing databases.",
          "Applies customer-specific mark-ups and pricing rules.",
          "Generates quotation drafts using air-cargo and freight-forwarding logic.",
        ],
        outcomes: [
          "Faster quotation turnaround.",
          "Up-to-date rates and surcharges with less manual maintenance.",
          "Lower risk of outdated pricing.",
          "More consistent pricing and margin control.",
          "Less manual effort from rate updates through to quote preparation.",
          "Supports higher quotation volumes without proportional headcount growth.",
        ],
      },
      {
        id: "logistics-project-email-intelligence",
        title: "Logistics Project Email Intelligence & Delivery Control Tower",
        titleLines: ["Logistics Project Email Intelligence", "& Delivery Control Tower"],
        industryCaption: "Project logistics, freight forwarding and supply chain operations.",
        challenge: [
          "Logistics projects rely on lengthy email threads across customers, suppliers, carriers and internal teams. Important milestones, delays and actions can get buried, making project status difficult to track.",
        ],
        implementation: [
          "Reads project emails from customers, suppliers and internal teams.",
          "Understands logistics conversations beyond simple keyword matching.",
          "Extracts milestones, commitments, delays, exceptions and actions.",
          "Consolidates updates into a unified project timeline.",
          "Updates dashboards with project status, delivery progress and outstanding actions.",
          "Flags delivery risks, overdue tasks and exceptions for review.",
        ],
        outcomes: [
          "Single source of truth across fragmented email communications.",
          "Real-time visibility of project delivery status.",
          "Earlier identification of delays and supply chain risks.",
          "Reduced time spent searching email threads for updates.",
          "Improved coordination between customers, suppliers and internal operations teams.",
          "Enables project managers to focus on resolving issues instead of manually compiling project status reports.",
        ],
      },
      {
        id: "ai-demand-planning-inventory",
        title: "AI Demand Planning & Inventory Optimisation",
        titleLines: ["AI Demand Planning", "& Inventory Optimisation"],
        industryCaption: "Contract logistics, 3PL, warehousing and distribution operations managing inventory for customers.",
        challenge: [
          "3PLs and warehouse teams managing customer inventory must decide what to replenish, when and where. This applies across consumer products, automotive parts, healthcare supplies and electronics. Without a clear view of demand, lead times and stock levels, planners risk stockouts, excess inventory and avoidable manual work.",
        ],
        implementation: [
          "Analyses stock, consumption, lead times and demand patterns.",
          "Forecasts demand by SKU, customer, warehouse and category.",
          "Classifies SKUs by stockout, excess and slow-moving risk.",
          "Recommends replenishment actions and flags high-risk SKUs.",
          "Shows inventory, forecasts, risk levels and recommended actions in one dashboard.",
          "Incorporates upcoming projects, customer forecasts and promotions.",
        ],
        outcomes: [
          "Reduced stockouts and service disruption.",
          "Lower excess and slow-moving inventory.",
          "Better utilisation of working capital and warehouse capacity.",
          "More consistent replenishment decisions across thousands of SKUs.",
          "Earlier identification of changing demand and inventory risks.",
          "Enables planners to manage by exception, concentrating human attention on high-risk SKUs rather than manually reviewing every item.",
        ],
      },
    ],
  },
  {
    id: "healthcare",
    label: "Healthcare",
    heroImage: "/case-studies/healthcare.jpg",
    heroImagePosition: "72% 42%",
    studies: [
      {
        id: "ai-patient-engagement",
        title: "AI Patient Engagement & Customer Service",
        titleLines: ["AI Patient Engagement", "& Customer Service"],
        industryCaption: "Clinics, aesthetics, wellness and other patient-facing healthcare services.",
        challenge: [
          "Patients ask about treatments, suitability and appointments. Front-desk teams spend time answering repetitive enquiries and chasing follow-ups.",
        ],
        implementation: [
          "Handles patient enquiries across WhatsApp and other channels.",
          "Shares service and treatment information using approved clinic guidance.",
          "Sends post-treatment follow-ups.",
          "Supports appointment and consultation booking.",
          "Connects with clinic systems for relevant patient and appointment information.",
          "Escalates complex enquiries to clinic staff.",
        ],
        outcomes: [
          "24/7 patient engagement.",
          "Faster and more consistent responses.",
          "Reduced front-desk workload.",
          "Better conversion from enquiry to consultation or appointment.",
          "More consistent patient follow-up.",
        ],
      },
      {
        id: "ai-patient-assessment",
        title: "AI Patient Assessment & Care Navigation",
        titleLines: ["AI Patient Assessment", "& Care Navigation"],
        industryCaption: "Healthcare providers, screening programmes and preventive health.",
        challenge: [
          "Guiding patients to the right next step can involve multiple questions and decision rules. Symptoms, age, risk profile, family history and previous investigations may all influence the care pathway, making simple FAQs insufficient.",
        ],
        implementation: [
          "Guides patients through structured assessment flows.",
          "Collects symptoms, risk factors and screening history.",
          "Uses provider-defined decision rules and care pathways.",
          "Handles different combinations of patient responses.",
          "Shares approved screening and follow-up information.",
          "Directs patients to consultation or appointment booking when needed.",
        ],
        outcomes: [
          "Applies defined assessment pathways consistently.",
          "Simplifies patient navigation.",
          "Reduces repetitive assessment and administrative work.",
          "Clarifies the next step for patients.",
          "Supports structured patient navigation at scale.",
          "Escalates cases requiring clinical judgement to the care team.",
        ],
      },
      {
        id: "ai-patient-counselling",
        title: "AI Patient Counselling & Behavioural Engagement",
        titleLines: ["AI Patient Counselling", "& Behavioural Engagement"],
        industryCaption: "Preventive healthcare, screening and programmes requiring patients to take action.",
        challenge: [
          "Patients may understand what to do but still hesitate to attend screenings or follow recommended next steps. Standard reminders often do not address the concerns behind that hesitation. Conversation flows can be informed by motivational interviewing principles, using empathy, open questions and reflective listening to support patient autonomy.",
        ],
        implementation: [
          "Engages patients through empathetic conversation.",
          "Uses conversation techniques informed by motivational interviewing principles.",
          "Shares relevant information while respecting patient choice.",
          "Supports willing patients towards next steps, such as booking an appointment.",
        ],
        implementationNote:
          "This is consistent with established motivational interviewing approaches, which emphasise empathy, open-ended questions, affirmations, reflective listening and supporting patient autonomy rather than simply telling someone what to do.",
      },
    ],
  },
  {
    id: "construction",
    label: "Construction",
    heroImage: "/case-studies/construction.jpg",
    studies: [
      {
        id: "ai-contract-intelligence",
        title: "AI Contract Intelligence & Project Risk Monitoring",
        titleLines: ["AI Contract Intelligence", "& Project Risk Monitoring"],
        industryCaption: "Main contractors, subcontractors and construction project teams.",
        challenge: [
          "Construction contracts contain complex obligations, deadlines and variations. Linking them to site events, emails and documents is difficult, so EOT and contractual risks may be identified too late.",
        ],
        implementation: [
          "Reads and understands construction contracts and project documents.",
          "Connects contract clauses with project communications, drawings and site events.",
          "Identifies contractual obligations, deadlines and potential risks.",
          "Monitors issues such as EOTs and variation orders.",
          "Allows teams to ask questions about their contracts in natural language.",
          "Proactively highlights contractual issues requiring attention.",
        ],
        outcomes: [
          "Earlier identification of contractual and commercial risks.",
          "Reduced time spent manually reviewing contracts and project records.",
          "Better management of variation orders and EOT requirements.",
          "Stronger protection of project margins.",
          "Gives project and commercial teams better visibility across each project.",
        ],
      },
      {
        id: "ai-costing-rfq-tender",
        title: "AI Costing, RFQ & Tender Intelligence",
        titleLines: ["AI Costing,", "RFQ & Tender Intelligence"],
        industryCaption: "Quantity surveyors, contractors and construction commercial teams.",
        challenge: [
          "QS and commercial teams spend significant time searching historical quotations, invoices, rate schedules and project costs. Manual estimating, RFQs and supplier comparisons make the process slow and repetitive.",
        ],
        implementation: [
          "Creates a searchable knowledge base from historical quotations, invoices, rate schedules and project costs.",
          "Retrieves previous rates and supplier information for similar work.",
          "Compares rates across past projects and suppliers.",
          "Supports estimating and automates supplier RFQs.",
          "Supports tender preparation and evaluation using internal costing data.",
        ],
        outcomes: [
          "Faster rate lookup and cost estimation.",
          "Reduced RFQ turnaround time.",
          "Less manual work for QS and commercial teams.",
          "Better use of the company’s historical costing knowledge.",
          "More consistent tender and procurement decisions.",
          "Greater capacity without proportional increases in QS headcount.",
        ],
      },
      {
        id: "ai-drawing-regulatory-compliance",
        title: "AI Drawing & Regulatory Compliance Review",
        titleLines: ["AI Drawing & Regulatory", "Compliance Review"],
        industryCaption: "Developers, consultants, architects and construction project teams.",
        challenge: [
          "Construction teams review drawings, specifications and project documents against extensive regulatory requirements. Manual checks can miss issues, causing resubmissions, approval delays and costly rework.",
        ],
        implementation: [
          "Reviews drawings and project documents using AI.",
          "Checks them against relevant regulatory requirements and clauses.",
          "Identifies potential non-compliance, inconsistencies and missing requirements.",
          "Highlights the relevant drawing, document or requirement requiring review.",
          "Alerts project teams to compliance issues before formal submission.",
        ],
        outcomes: [
          "Earlier identification of compliance issues.",
          "Reduced manual checking effort.",
          "Fewer avoidable submission issues.",
          "Faster preparation for regulatory approvals.",
          "Lower risk of costly design changes and rework later in the project.",
        ],
      },
      {
        id: "construction-project-intelligence-hub",
        title: "Construction Project Intelligence Hub",
        titleLines: ["Construction Project", "Intelligence Hub"],
        industryCaption: "Contractors, developers, consultants and construction project teams.",
        challenge: [
          "Construction information is scattered across contracts, drawings, BOQs, invoices, emails, WhatsApp and business systems. Teams spend time searching for updates and linking site events to cost, programme and contract impacts.",
        ],
        implementation: [
          "Connects contracts, drawings, BOQs, reports, invoices, communications and project systems.",
          "Converts unstructured information into structured project data.",
          "Links messages and site events to relevant documents and contract clauses.",
          "Monitors risks, delays, cost impacts and compliance issues.",
          "Creates a shared knowledge layer for contract, costing and compliance workflows.",
        ],
        outcomes: [
          "Creates one source of intelligence across project data.",
          "Reduces time spent searching documents and communications.",
          "Surfaces project, cost and contract risks earlier.",
          "Improves coordination across project, QS and commercial teams.",
          "Helps teams manage by exception instead of reviewing every item manually.",
        ],
      },
    ],
  },
  {
    id: "retail-fnb",
    label: "Retail & F&B",
    heroImage: "/case-studies/retail-fnb.jpg",
    studies: [
      {
        id: "ai-customer-enquiry-sales",
        title: "AI Customer Enquiry & Sales Engagement",
        titleLines: ["AI Customer Enquiry", "& Sales Engagement"],
        industryCaption: "Retail, F&B, aesthetics, wellness and other consumer-facing businesses.",
        challenge: [
          "Customers expect fast, personalised answers across digital channels. Slow or inconsistent replies can cost sales, while teams spend time handling routine questions about products, services, pricing and availability.",
        ],
        implementation: [
          "Handles customer enquiries across WhatsApp, web chat and other channels.",
          "Understands customer needs rather than relying only on predefined FAQ responses.",
          "Provides approved business information and relevant recommendations.",
          "Guides customers towards purchases, reservations, appointments and other next steps.",
          "Connects to business systems to retrieve information and complete workflows.",
          "Escalates conversations to staff when human assistance is needed.",
        ],
        outcomes: [
          "24/7 customer engagement.",
          "Faster and more consistent responses.",
          "Reduced repetitive workload for sales and customer service teams.",
          "Better conversion of enquiries into sales or bookings.",
          "Allows staff to focus on higher-value customer interactions.",
        ],
      },
      {
        id: "proactive-ai-customer-engagement",
        title: "Proactive AI Customer Engagement",
        titleLines: ["Proactive AI", "Customer Engagement"],
        industryCaption: "Retail, F&B, aesthetics, wellness and membership-based businesses.",
        challenge: [
          "Customer engagement is often reactive, with businesses waiting for enquiries or returns. Manual follow-ups make it difficult to reach prospects and customers at the right time, especially at scale.",
        ],
        implementation: [
          "Engages customers proactively across WhatsApp and other channels.",
          "Follows up after enquiries and at key stages.",
          "Sends personalised reminders based on customer context.",
          "Supports targeted campaigns, promotions and outreach.",
          "Continues conversations, identifies interest and hands qualified opportunities to staff.",
        ],
        outcomes: [
          "More consistent customer follow-up.",
          "Increased re-engagement of existing customers and prospects.",
          "Greater ability to personalise outreach at scale.",
          "Reduced manual follow-up workload.",
          "Creates additional opportunities for repeat purchases, bookings and sales.",
        ],
      },
      {
        id: "ai-product-menu-recommendation",
        title: "AI Product, Menu & Package Recommendation",
        titleLines: ["AI Product, Menu", "& Package Recommendation"],
        industryCaption: "Retail, F&B and businesses with large or complex product/service catalogues.",
        challenge: [
          "Customers may know what they want to achieve but not which product, menu or package suits them. Staff must ask questions, understand preferences and search catalogues before making recommendations.",
        ],
        implementation: [
          "Understands customer needs through conversation.",
          "Asks about preferences, occasion, budget and requirements.",
          "Matches needs with relevant products, menus, services or packages.",
          "Explains options and refines recommendations as requirements change.",
          "Guides customers towards enquiry, purchase or booking.",
        ],
        outcomes: [
          "More personalised customer experience.",
          "Faster product discovery and decision-making.",
          "More consistent recommendations across customer-facing teams.",
          "Reduced reliance on staff to manually navigate large catalogues.",
          "Greater opportunities for cross-selling and conversion.",
        ],
      },
      {
        id: "ai-enquiry-to-order",
        title: "AI Enquiry-to-Order & Operations Automation",
        titleLines: ["AI Enquiry-to-Order", "& Operations Automation"],
        industryCaption: "F&B, catering, retail and businesses handling high volumes of customer orders and enquiries.",
        challenge: [
          "Turning enquiries into fulfilled orders requires more than an initial reply. Staff must collect requirements, coordinate teams and confirm fulfilment, often across disconnected conversations and systems.",
        ],
        implementation: [
          "Captures order requirements and answers common questions.",
          "Moves qualified enquiries into sales or operational workflows.",
          "Coordinates order preparation, fulfilment, delivery and customer updates.",
          "Updates relevant internal systems and teams.",
          "Escalates exceptions requiring staff intervention.",
        ],
        outcomes: [
          "Faster progression from enquiry to confirmed order.",
          "Less manual information transfer between teams.",
          "Reduced administrative workload and missed handovers.",
          "Better visibility from enquiry to fulfilment.",
          "Supports higher order volumes without proportional manpower increases.",
        ],
      },
      {
        id: "ai-sales-marketing-lead-management",
        title: "AI Sales & Marketing Lead Management",
        titleLines: ["AI Sales & Marketing", "Lead Management"],
        industryCaption: "F&B groups, hospitality, events, retail and businesses receiving leads from multiple channels.",
        challenge: [
          "Leads arrive through websites, campaigns, events, social channels and sales enquiries. When information is spread across systems and teams, it becomes harder to track follow-ups, conversions and revenue.",
        ],
        implementation: [
          "Consolidates leads from multiple sources into one workflow.",
          "Tracks leads from enquiry through follow-up, quotation, deposit and conversion.",
          "Identifies leads requiring action.",
          "Links leads to their campaigns or channels and tracks commercial outcomes.",
          "Provides dashboards for sales performance and marketing attribution.",
        ],
        outcomes: [
          "Fewer leads falling through the cracks.",
          "More systematic sales follow-up.",
          "Better visibility of the sales pipeline.",
          "Clearer understanding of lead conversion.",
          "Better attribution of revenue to marketing activities.",
          "Enables management to understand which campaigns and channels are actually producing business.",
        ],
      },
      {
        id: "ai-marketing-planning",
        title: "AI Marketing Planning & Campaign Intelligence",
        titleLines: ["AI Marketing Planning", "& Campaign Intelligence"],
        industryCaption: "Retail, F&B groups and multi-brand consumer businesses.",
        challenge: [
          "Marketing activity is often split across spreadsheets, messages and teams. Without one view across brands and outlets, teams struggle to coordinate campaigns and see which ones generate results.",
        ],
        implementation: [
          "Centralises marketing activity in a shared sales and marketing calendar.",
          "Coordinates campaigns across brands, outlets, channels and teams.",
          "Links campaigns to leads and customer activity.",
          "Provides visibility into campaign status and performance.",
          "Connects marketing activity with sales, conversion and ROI insights.",
        ],
        outcomes: [
          "Better coordination between marketing and sales teams.",
          "Clearer visibility of campaigns across the organisation.",
          "Improved marketing attribution.",
          "Better understanding of which campaigns generate leads and revenue.",
          "More data-driven allocation of marketing resources.",
        ],
      },
      {
        id: "ai-demand-planning-retail",
        title: "AI Demand Planning, Customer & Inventory Intelligence",
        titleLines: ["AI Demand Planning, Customer", "& Inventory Intelligence"],
        industryCaption: "Retailers, distributors and businesses managing large numbers of products and SKUs.",
        challenge: [
          "Retailers and distributors must decide what to order, how much stock to hold and where demand exists. Large SKU ranges, long lead times and fragmented customer data make these decisions harder.",
        ],
        implementation: [
          "Analyses sales, inventory, incoming stock and demand patterns.",
          "Forecasts demand by SKU, category and other relevant dimensions.",
          "Flags stockout, excess and slow-moving inventory risks.",
          "Recommends replenishment and inventory actions.",
          "Consolidates customer data to identify segments and cross-selling opportunities.",
          "Provides dashboards highlighting items and customers requiring attention.",
        ],
        outcomes: [
          "Supports better purchasing and replenishment decisions.",
          "Helps reduce stockout and excess-inventory risk.",
          "Supports more efficient use of working capital.",
          "Improves visibility of customer and inventory opportunities.",
          "Enables targeted engagement while helping teams focus on exceptions and higher-value decisions.",
        ],
      },
    ],
  },
  {
    id: "facilities",
    label: "Facilities Management",
    heroImage: "/case-studies/facilities.jpg",
    studies: [
      {
        id: "ai-incident-sla-operations",
        title: "AI Incident, SLA & Operations Intelligence",
        titleLines: ["AI Incident, SLA", "& Operations Intelligence"],
        industryCaption: "Facilities management, integrated facilities management and field services.",
        challenge: [
          "Facilities teams coordinate incidents through WhatsApp groups across command centres, supervisors and technicians. Important incidents, ETAs and completion updates can get buried, making SLA tracking and reporting difficult.",
        ],
        implementation: [
          "Monitors operational WhatsApp conversations and identifies incidents or service requests.",
          "Classifies reports, acknowledgements, ETAs, progress and completion updates.",
          "Extracts key details such as asset, location, timestamps and reporter.",
          "Consolidates communications into structured, searchable incident records.",
          "Tracks SLA status and updates operational dashboards and reports.",
        ],
        outcomes: [
          "Reduced manual monitoring of operational chats.",
          "Improved SLA tracking and visibility.",
          "Fewer incidents and important updates overlooked.",
          "Reduced manual reporting effort.",
          "Faster retrieval of historical incident information.",
          "Greater operational transparency and management visibility.",
        ],
      },
      {
        id: "ai-field-service-maintenance",
        title: "AI Field Service, Maintenance & Work Documentation",
        titleLines: ["AI Field Service, Maintenance", "& Work Documentation"],
        industryCaption: "Facilities management, asset maintenance and field-service operations.",
        challenge: [
          "Once an incident is reported, teams must track acknowledgement, ETA, arrival, rectification and completion. Before-and-after photos also need to be linked to the correct job as evidence of work completed.",
        ],
        implementation: [
          "Tracks incidents from assignment through completion.",
          "Captures team acknowledgement, ETA and site arrival.",
          "Monitors rectification progress and completion updates.",
          "Links updates and before-and-after photos to the correct incident and asset.",
          "Organises conversations and evidence into structured maintenance records.",
        ],
        outcomes: [
          "Real-time visibility of field-service progress.",
          "Reduced manual updating and documentation.",
          "Better coordination between command centres and field teams.",
          "More complete maintenance and work histories.",
          "Easier retrieval of photographic evidence.",
          "Faster identification of outstanding or delayed work.",
        ],
      },
    ],
  },
  {
    id: "hr-services",
    label: "HR Services",
    heroImage: "/case-studies/hr-services.jpg",
    studies: [
      {
        id: "ai-cv-preparation",
        title: "AI CV Preparation & Standardisation",
        titleLines: ["AI CV Preparation", "& Standardisation"],
        industryCaption: "Recruitment agencies, staffing companies and HR teams.",
        challenge: [
          "Recruiters receive CVs in different formats, making it time-consuming to extract information, rewrite profiles and apply consistent templates.",
        ],
        implementation: [
          "Reads incoming CVs automatically.",
          "Extracts and structures experience, qualifications, skills and employment history.",
          "Reformats CVs into client-ready templates.",
          "Incorporates recruiter notes and additional candidate information.",
          "Produces a consistent draft for recruiter review and editing.",
        ],
        outcomes: [
          "Significantly reduces repetitive CV preparation work.",
          "Faster turnaround from candidate receipt to client submission.",
          "More consistent and professional candidate profiles.",
          "Allows recruiters to spend more time engaging candidates and clients.",
          "Enables recruitment teams to process larger candidate volumes.",
        ],
        note: "Based on the CV preparation/formatting workflow implemented for CES.",
      },
      {
        id: "ai-cv-matching",
        title: "AI CV Matching & Candidate Shortlisting",
        titleLines: ["AI CV Matching", "& Candidate Shortlisting"],
        industryCaption: "Recruitment agencies, staffing companies and internal talent acquisition teams.",
        challenge: [
          "Recruiters often review large CV volumes against multiple roles. Manual screening is slow, while keyword searches can miss relevant experience described in different ways.",
        ],
        implementation: [
          "Reads CVs and job requirements.",
          "Matches candidates against role criteria.",
          "Assesses experience, skills, qualifications and other requirements.",
          "Prioritises candidates for recruiter review and explains the match.",
          "Supports shortlisting while keeping final decisions with recruiters.",
        ],
        outcomes: [
          "Faster candidate screening and shortlisting.",
          "More consistent application of hiring criteria.",
          "Reduced manual CV review.",
          "Helps surface suitable candidates from larger candidate pools.",
          "Allows recruiters to concentrate their time on higher-value candidate assessment and engagement.",
        ],
        note: "Based on the CV-to-job matching workflows developed for CES.",
      },
      {
        id: "ai-candidate-validation",
        title: "AI Candidate Validation for High-Volume & Blue-Collar Hiring",
        titleLines: ["AI Candidate Validation for", "High-Volume & Blue-Collar Hiring"],
        industryCaption: "Security, logistics, facilities management, manpower services and other high-volume employers.",
        challenge: [
          "High-volume recruitment requires screening applicants against role-specific criteria before interview. Repeating checks for licences, experience, availability and other requirements creates a heavy workload for HR teams.",
        ],
        implementation: [
          "Engages applicants through WhatsApp.",
          "Answers common questions about roles and requirements.",
          "Collects candidate information through structured questions.",
          "Checks eligibility, documents and qualifications against role criteria.",
          "Summarises responses for HR review.",
          "Flags candidates meeting criteria and supports interview scheduling.",
        ],
        outcomes: [
          "Candidates can be screened before HR spends time interviewing them.",
          "Reduced repetitive HR screening and coordination.",
          "Faster progression of qualified applicants.",
          "More consistent validation of hiring requirements.",
          "Better candidate experience through immediate conversational engagement.",
          "Enables HR teams to manage substantially larger applicant volumes.",
        ],
        note: "Based on blue-collar recruitment workflows for Call Lade and Henderson, including driver/technical and security personnel recruitment.",
      },
      {
        id: "ai-candidate-onboarding",
        title: "AI Candidate Onboarding After Hiring",
        titleLines: ["AI Candidate Onboarding", "After Hiring"],
        industryCaption: "Recruitment, staffing, security, logistics and high-volume workforce employers.",
        challenge: [
          "After a candidate accepts a job, HR still needs to collect documents, explain requirements, send reminders and confirm completion before the start date. At scale, this creates significant administrative work.",
        ],
        implementation: [
          "Starts onboarding once a candidate is hired.",
          "Guides new hires through required steps.",
          "Collects information and documents.",
          "Answers common onboarding and employment questions.",
          "Flags outstanding actions and escalates complex queries to HR.",
        ],
        outcomes: [
          "Reduced manual HR follow-up after hiring.",
          "Faster and more consistent onboarding.",
          "Fewer incomplete documents and outstanding actions.",
          "Better visibility of each new hire’s onboarding status.",
          "Improved experience between job acceptance and commencement.",
          "Enables HR teams to onboard larger frontline workforces efficiently.",
        ],
      },
    ],
  },
] as const satisfies readonly CaseStudyIndustry[];

export function getCaseStudyIndustry(slug: string): CaseStudyIndustry | undefined {
  return caseStudyIndustries.find((industry) => industry.id === slug);
}

export function industryHref(slug: string) {
  return `/case-studies/${slug}`;
}

export function studyHref(industryId: string, studyId: string) {
  return `/case-studies/${industryId}#${studyId}`;
}

export function caseStudyWord(count: number) {
  return count === 1 ? "study" : "studies";
}

export const caseStudiesNav = caseStudyIndustries.map((industry) => ({
  id: industry.id,
  label: industry.label,
  href: industryHref(industry.id),
}));

export const caseStudiesMenu = caseStudyIndustries.map((industry) => ({
  label: industry.label,
  href: industryHref(industry.id),
}));

export const caseStudyCount = caseStudyIndustries.reduce((total, industry) => total + industry.studies.length, 0);

export const caseStudiesPage = {
  meta: {
    title: "Case Studies",
    description:
      "Case studies of PilotPulse digital workers across logistics, healthcare, construction, retail and F&B, facilities management and HR services.",
  },
  hero: {
    eyebrow: "From live operations",
    titleBefore: "",
    titleHighlight: "Case Studies",
    lead: "Six industries. Twenty-five workflows. Each study covers the business challenge, the AI implementation and the outcomes.",
    cta: { label: "Get a Demo", href: CONTACT_HREF },
    secondaryCta: { label: "Browse industries", href: "#industries" },
  },
  cta: {
    headingLine1: "See a workflow that looks familiar?",
    headingLine2: "We can pilot it in yours.",
    body: "Tell us the process that is taking the most time. We will map the worker and the first outcome.",
    primaryCta: { label: "Get a Demo", href: CONTACT_HREF },
  },
};
