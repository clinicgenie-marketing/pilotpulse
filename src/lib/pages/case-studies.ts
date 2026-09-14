import { CONTACT_HREF } from "@/lib/content";

export type CaseStudy = {
  id: string;
  title: string;
  industryLine: string;
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
        industryLine: "Industry: Last-mile delivery and logistics.",
        challenge: [
          "Customer service teams handle a high volume of enquiries regarding deliveries, shipment status and service requests. Agents often need to search multiple systems and coordinate with operations before responding, resulting in long response times and inconsistent customer experiences.",
        ],
        implementation: [
          "WhatsApp AI assistant serving as the first line of customer support.",
          "Integrated with the logistics management system.",
          "Analyses customer-uploaded images where required (e.g. proof of delivery or damaged goods).",
          "Performs many of the same tasks traditionally handled by a call centre, while seamlessly escalating complex cases to human operators.",
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
        industryLine: "Industry: Freight forwarding and logistics operations.",
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
        industryLine: "Industry: Air cargo and freight forwarding.",
        challenge: [
          "Preparing freight quotations is highly manual and time-sensitive. Operations teams must interpret airline quotation requests, monitor frequent airline circulars for updated buy rates and surcharges, maintain pricing databases, and prepare customer quotations accurately. Missing a rate update or surcharge change can lead to incorrect quotations and margin leakage.",
        ],
        implementation: [
          "Reads airline quotation requests automatically.",
          "Monitors airline circulars for updated freight rates, fuel surcharges, security surcharges and other pricing changes.",
          "Extracts and validates updated pricing information from airline circulars.",
          "Automatically updates internal buy-rate and surcharge databases so quotation workflows always use the latest available rates.",
          "Applies customer-specific mark-ups and commercial pricing rules.",
          "Generates quotation drafts for shippers.",
          "Trained on air cargo terminology, airline pricing structures and freight forwarding quotation logic.",
        ],
        outcomes: [
          "Faster quotation turnaround.",
          "Up-to-date pricing databases with minimal manual maintenance.",
          "Lower risk of quoting outdated airline rates or surcharges.",
          "Improved pricing consistency and margin protection.",
          "Reduced manual effort across both rate maintenance and quotation preparation.",
          "Greater capacity to handle higher quotation volumes without proportional increases in headcount.",
        ],
      },
      {
        id: "logistics-project-email-intelligence",
        title: "Logistics Project Email Intelligence & Delivery Control Tower",
        industryLine: "Industry: Project logistics, freight forwarding and supply chain operations.",
        challenge: [
          "Large logistics projects are coordinated primarily through email between customers, suppliers, carriers and internal teams. Important shipment milestones, delivery updates, delays and action items become scattered across lengthy email threads, making it difficult for project managers to maintain an accurate, real-time view of project progress.",
        ],
        implementation: [
          "Continuously reads project-related emails from customers, suppliers and internal teams.",
          "Understands logistics conversations using AI instead of simple keyword matching.",
          "Extracts key shipment milestones, delivery commitments, delays, exceptions and action items.",
          "Consolidates information across multiple email conversations into a unified project timeline.",
          "Automatically updates a real-time dashboard showing project progress, delivery status, outstanding actions and overall project health.",
          "Proactively flags delivery risks, overdue tasks and potential exceptions requiring operational attention.",
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
        industryLine:
          "Industry: Contract logistics, 3PL, warehousing and distribution operations managing inventory for customers.",
        challenge: [
          "For logistics companies managing customer inventory, the planning problem can be very similar to retail inventory management: how much of each SKU should be replenished, and when?",
          "This is particularly relevant for 3PLs managing inventories such as consumer products, automotive parts, healthcare supplies, electronics, spare parts or operational consumables. For example, Toll Group in Singapore manages inventory across automotive parts, healthcare, e-commerce and other warehousing operations, while ST Logistics provides inventory control, ordering and procurement as part of its integrated supply-chain services. YCH Group similarly operates across consumer & retail, electronics & technology, healthcare and other inventory-intensive sectors. These are examples of the types of logistics operations where such a module could be relevant, not claims that they use this particular solution.",
        ],
        implementation: [
          "Analyses historical SKU consumption, current stock, incoming inventory, lead times and demand patterns.",
          "Forecasts expected demand by SKU, customer, warehouse or product category.",
          "Profiles individual SKUs into risk bands, such as high stockout risk, potential shortage, healthy inventory and excess/slow-moving stock.",
          "Recommends actions such as order now, increase replenishment, maintain planned order, reduce order quantity, defer order or monitor.",
          "Highlights high-risk SKUs requiring immediate planner attention.",
          "Provides a demand-planning dashboard showing current inventory, forecast demand, risk level and recommended action for each SKU.",
          "Allows planners to incorporate upcoming projects, customer forecasts, promotions or other information that historical demand alone may not capture.",
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
    studies: [
      {
        id: "ai-patient-engagement",
        title: "AI Patient Engagement & Customer Service",
        industryLine: "Industry: Clinics, aesthetics, wellness and other patient-facing healthcare services.",
        challenge: [
          "Patients often have detailed questions about treatments, suitability, services and appointments. Front-desk teams spend significant time handling repetitive enquiries and following up with patients.",
        ],
        implementation: [
          "Advanced patient enquiry handling across WhatsApp and other channels.",
          "Specialised service and treatment recommendations based on patient needs.",
          "Proactive follow-ups post treatment to assure patients",
          "Appointment and consultation support.",
          "Integration with clinic systems for relevant patient and appointment information.",
          "Human escalation for enquiries requiring staff attention.",
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
        industryLine: "Industry: Healthcare providers, screening programmes and preventive health.",
        challenge: [
          "Determining the appropriate next step for a patient can involve multiple questions and decision rules. Factors such as symptoms, age, gender, risk profile, family history and previous investigations may lead to different recommendations, making these assessments difficult to handle through simple FAQs or forms.",
        ],
        implementation: [
          "Guides patients conversationally through multi-step assessment flows.",
          "Collects relevant symptoms, risk factors, history and previous screening information.",
          "Applies healthcare-provider-defined decision logic and clinical pathways.",
          "Handles different branches and combinations of patient responses.",
          "Provides the appropriate screening or follow-up guidance based on the assessment.",
          "Directs patients to medical consultation or appointment booking where required.",
          "Escalates cases appropriately rather than replacing clinical judgement.",
        ],
        outcomes: [
          "Consistent application of defined assessment pathways.",
          "Easier patient experience compared with navigating complex forms and guidelines.",
          "Reduced repetitive assessment and administrative workload.",
          "Helps patients understand the appropriate next action.",
          "Enables structured patient navigation at scale.",
        ],
      },
      {
        id: "ai-patient-counselling",
        title: "AI Patient Counselling & Behavioural Engagement",
        industryLine: "Industry: Preventive healthcare, screening and programmes requiring patients to take action.",
        challenge: [
          "Knowing what to do does not necessarily mean a patient will do it. Patients may be worried, hesitant or simply not motivated to attend screening or follow through with a recommended action. Standard reminders and informational messages often do little to understand or address those concerns.",
        ],
        implementation: [
          "Conducts empathetic, conversational engagement with patients.",
          "Uses motivational interviewing principles to understand concerns and barriers.",
          "Uses open questions and reflective responses rather than simply pushing instructions.",
          "Identifies reasons behind hesitation, such as fear, inconvenience or uncertainty.",
          "Provides relevant information while respecting patient choice.",
          "Helps patients articulate their own reasons for taking the recommended health action.",
          "Guides willing patients towards the appropriate next step, such as booking an appointment.",
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
        industryLine: "Industry: Main contractors, subcontractors and construction project teams.",
        challenge: [
          "Construction contracts contain large numbers of obligations, deadlines, variation requirements and contractual conditions. Project teams must continuously relate these requirements to what is actually happening on site and across emails, documents and communications. Important EOT, variation order or contractual risks can therefore be identified too late.",
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
        industryLine: "Industry: Quantity surveyors, contractors and construction commercial teams.",
        challenge: [
          "QS and commercial teams accumulate years of quotations, invoices, schedules of rates and project costing information, but finding and comparing this information manually is slow. Preparing estimates, issuing RFQs and evaluating supplier quotations also requires significant repetitive work.",
        ],
        implementation: [
          "Creates an AI-searchable knowledge base from historical quotations, invoices, SORs and project costs.",
          "Allows QS teams to ask questions such as previous rates for similar works or suppliers who previously quoted an item.",
          "Compares rates across past projects and suppliers.",
          "Uses historical cost information to support estimating.",
          "Automates generation and sending of supplier RFQs.",
          "Supports tender preparation and evaluation using internal costing and supplier information.",
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
        industryLine: "Industry: Developers, consultants, architects and construction project teams.",
        challenge: [
          "Construction teams need to review drawings, specifications and project documents against large numbers of regulatory requirements. Manual checking is time-consuming, and missed requirements can result in resubmissions, approval delays and costly rework.",
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
        industryLine: "Industry: Contractors, developers, consultants and construction project teams.",
        challenge: [
          "Critical construction information is fragmented across contracts, drawings, BOQs, invoices, emails, WhatsApp conversations and different company systems. Teams spend significant time searching for information and manually connecting what happened on site with its contractual, cost and programme implications.",
        ],
        implementation: [
          "Connects information from project documents, communications and existing systems.",
          "Links related contracts, drawings, BOQs, reports, invoices and project events.",
          "Converts unstructured construction information into structured project data.",
          "Connects emails and messages to relevant drawings, contract clauses and site events.",
          "Continuously monitors incoming project information for risks, delays, cost impacts and compliance issues.",
          "Provides a common AI-ready project knowledge layer that can support contract, costing and compliance workflows.",
        ],
        outcomes: [
          "Single source of intelligence across fragmented construction data.",
          "Less time spent searching across documents and communications.",
          "Earlier visibility of project, cost and contractual risks.",
          "Better coordination between project, QS and commercial teams.",
          "Enables teams to manage by exception rather than manually reviewing every project item.",
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
        industryLine: "Industry: Retail, F&B, aesthetics, wellness and other consumer-facing businesses.",
        challenge: [
          "Customers increasingly expect fast, personalised responses across WhatsApp, web chat and other digital channels. Sales and customer service teams spend significant time answering questions about products, services, pricing and availability, while potentially valuable enquiries can be lost when responses are delayed or inconsistent.",
        ],
        implementation: [
          "Handles customer enquiries conversationally across channels such as WhatsApp and web chat.",
          "Understands customer needs rather than relying only on predefined FAQ responses.",
          "Answers detailed questions using approved business information.",
          "Recommends suitable products, services or packages.",
          "Guides customers towards purchases, reservations, appointments or other conversion actions.",
          "Integrates with relevant business systems to retrieve information and complete workflows.",
          "Escalates conversations to staff when human assistance is required.",
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
        industryLine: "Industry: Retail, F&B, aesthetics, wellness and membership-based businesses.",
        challenge: [
          "Most customer engagement is reactive — businesses wait for customers to make an enquiry or return. Sales teams also manually follow up with prospects and existing customers, making it difficult to consistently engage large customer bases at the right time.",
        ],
        implementation: [
          "Proactively engages customers through conversational channels such as WhatsApp.",
          "Follows up with customers after enquiries or at relevant stages of their journey.",
          "Sends personalised reminders and re-engagement messages based on customer context.",
          "Supports targeted campaigns, promotions and customer outreach.",
          "Continues the conversation naturally when customers respond rather than simply sending one-way broadcasts.",
          "Identifies interested customers and guides them towards the appropriate next action.",
          "Hands qualified or higher-value opportunities to staff for personal follow-up.",
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
        industryLine: "Industry: Retail, F&B and businesses with large or complex product/service catalogues.",
        challenge: [
          "Customers may know what they want to achieve without knowing which product, menu, service or package best meets their needs. Staff need to ask questions, understand preferences and manually navigate available offerings before making recommendations.",
        ],
        implementation: [
          "Conversationally understands what the customer is looking for.",
          "Asks relevant questions about preferences, occasion, budget, requirements or constraints.",
          "Matches customer requirements against available products, menus, services or packages.",
          "Explains why particular options may be suitable.",
          "Handles follow-up questions and refines recommendations as requirements change.",
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
        industryLine: "Industry: F&B, catering, retail and businesses handling high volumes of customer orders and enquiries.",
        challenge: [
          "Processing an order often involves much more than answering the initial customer enquiry. Staff need to collect requirements, coordinate internally, confirm orders and manage fulfilment or delivery. Information can become fragmented across conversations and operational systems.",
        ],
        implementation: [
          "Captures and structures requirements from incoming customer enquiries.",
          "Answers common questions and collects information required to progress the order.",
          "Moves qualified enquiries into the appropriate sales or operational workflow.",
          "Coordinates information required for order preparation and fulfilment.",
          "Updates relevant internal systems and teams.",
          "Supports downstream workflows such as delivery planning and customer updates.",
          "Escalates exceptions requiring staff intervention.",
        ],
        outcomes: [
          "Faster progression from enquiry to confirmed order.",
          "Less manual transfer of information between teams.",
          "Reduced administrative workload.",
          "Fewer missed enquiries and operational handover issues.",
          "Better visibility across the enquiry-to-fulfilment journey.",
          "Greater capacity to handle order volume without proportional manpower increases.",
        ],
      },
      {
        id: "ai-sales-marketing-lead-management",
        title: "AI Sales & Marketing Lead Management",
        industryLine: "Industry: F&B groups, hospitality, events, retail and businesses receiving leads from multiple channels.",
        challenge: [
          "Customer leads may arrive from websites, campaigns, events, social channels and sales enquiries. When information is spread across different systems and teams, management has limited visibility into whether leads are being followed up, converted and ultimately generating revenue.",
        ],
        implementation: [
          "Consolidates leads from multiple sources into a central lead management workflow.",
          "Tracks each lead through enquiry, follow-up, quotation, deposit and conversion stages.",
          "Helps sales teams identify leads requiring action.",
          "Provides management visibility into how many leads are being served and converted.",
          "Connects leads back to their originating marketing campaigns or channels.",
          "Tracks deposits and commercial outcomes where relevant.",
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
        industryLine: "Industry: Retail, F&B groups and multi-brand consumer businesses.",
        challenge: [
          "Marketing activities are often planned across spreadsheets, messages and separate teams. It can be difficult to maintain a consolidated view of campaigns across brands and outlets, coordinate activities with sales teams, and understand which campaigns ultimately generate business.",
        ],
        implementation: [
          "Centralises marketing activities into a shared sales and marketing calendar.",
          "Coordinates campaigns across brands, outlets, channels and teams.",
          "Connects campaigns with incoming leads and subsequent customer activity.",
          "Provides visibility into upcoming, active and completed campaigns.",
          "Links marketing activities with sales and conversion information.",
          "Helps management evaluate campaign performance and return on marketing investment.",
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
        industryLine: "Industry: Retailers, distributors and businesses managing large numbers of products and SKUs.",
        challenge: [
          "Retail businesses need to continuously decide what products to order, how much inventory to hold and where sales opportunities exist. These decisions become particularly difficult with large SKU ranges, long purchasing lead times and customer information distributed across different systems.",
        ],
        implementation: [
          "Analyses historical sales, current inventory, incoming stock and demand patterns.",
          "Forecasts demand by SKU, category or other relevant business dimensions.",
          "Identifies potential stockout, excess inventory and slow-moving stock risks.",
          "Recommends replenishment or inventory actions.",
          "Consolidates relevant customer information to provide a clearer customer view.",
          "Identifies potential customer segments and cross-selling opportunities.",
          "Provides dashboards highlighting items and customers requiring attention.",
        ],
        outcomes: [
          "Better advance purchasing and replenishment decisions.",
          "Reduced risk of stockouts and excess inventory.",
          "Improved use of working capital.",
          "Better visibility of customer and inventory opportunities.",
          "More targeted cross-selling and customer engagement.",
          "Allows teams to focus on exceptions and high-value decisions rather than manually reviewing large datasets.",
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
        industryLine: "Industry: Facilities management, integrated facilities management and field services.",
        challenge: [
          "Facilities operations are often coordinated through WhatsApp groups involving command centres, supervisors, technicians and maintenance teams. Important incidents, ETAs, progress updates and completion statuses can become buried across large volumes of messages, leaving command centres to manually track incidents, SLA compliance and prepare reports.",
        ],
        implementation: [
          "Continuously monitors operational WhatsApp conversations.",
          "Automatically identifies new incidents and service requests.",
          "Distinguishes incident reports, acknowledgements, ETAs, progress updates and completion updates.",
          "Extracts key information such as asset/location, timestamps, reporter and incident details.",
          "Consolidates related communications into structured incident records.",
          "Tracks timestamps and status changes required for SLA monitoring.",
          "Automatically populates operational records and data for dashboards and reporting.",
          "Maintains searchable historical incident records.",
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
        industryLine: "Industry: Facilities management, asset maintenance and field-service operations.",
        challenge: [
          "Once an incident is reported, operations teams need to track whether field teams have acknowledged the job, their ETA and arrival, rectification progress and eventual completion.",
          "Before-and-after photographs may also need to be properly associated with each job as evidence of work performed.",
        ],
        implementation: [
          "Tracks each incident from assignment through completion.",
          "Captures field-team acknowledgement, ETA and site arrival.",
          "Monitors rectification progress and completion updates.",
          "Associates each update with the correct incident and asset.",
          "Associates before-and-after photographs with the corresponding maintenance work.",
          "Organises field evidence into the appropriate incident records.",
          "Converts conversations and supporting evidence into structured maintenance histories.",
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
        industryLine: "Industry: Recruitment agencies, staffing companies and HR teams.",
        challenge: [
          "Recruiters receive CVs in many different formats and quality levels. For recruitment and staffing companies, consultants may spend significant time manually extracting candidate information, rewriting profiles and formatting CVs into a consistent company or client-ready template.",
        ],
        implementation: [
          "Reads incoming candidate CVs automatically.",
          "Extracts and structures relevant experience, qualifications, skills and employment history.",
          "Reformats CVs into the company’s standard branded template.",
          "Improves consistency of structure and presentation across candidate profiles.",
          "Can incorporate recruiter interview notes and candidate information collected separately.",
          "Produces a draft for recruiter review and final editing before submission.",
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
        industryLine: "Industry: Recruitment agencies, staffing companies and internal talent acquisition teams.",
        challenge: [
          "Recruiters may need to review large numbers of CVs against multiple open positions. Manual screening is time-consuming, while simple keyword searches can overlook candidates whose experience is relevant but described differently.",
        ],
        implementation: [
          "Reads and understands candidate CVs and job requirements.",
          "Matches candidates against job descriptions and customised hiring criteria.",
          "Evaluates relevant experience, skills, qualifications and other requirements.",
          "Scores or prioritises candidates according to their suitability.",
          "Highlights why a candidate may or may not be suitable for a particular role.",
          "Helps recruiters identify the strongest candidates for human review and shortlisting.",
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
        industryLine: "Industry: Security, logistics, facilities management, manpower services and other high-volume employers.",
        challenge: [
          "Blue-collar and frontline recruitment often involves large numbers of applicants who need to be checked against specific eligibility criteria before an interview. HR teams repeatedly ask candidates the same questions about experience, licences, availability, job requirements and other mandatory conditions.",
        ],
        implementation: [
          "Engages applicants conversationally through WhatsApp.",
          "Answers common questions about the position, requirements and employment conditions.",
          "Collects candidate information using structured screening questions.",
          "Validates candidates against role-specific eligibility and mandatory requirements.",
          "Supports checks of relevant documents and qualifications where required.",
          "Evaluates candidate responses and produces structured screening results for HR.",
          "Identifies suitable candidates and progresses them towards interview.",
          "Supports automated interview scheduling for qualified candidates.",
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
        industryLine: "Industry: Recruitment, staffing, security, logistics and high-volume workforce employers.",
        challenge: [
          "After a candidate accepts a job, HR still needs to collect information and documents, explain onboarding requirements, send reminders and ensure the new hire completes the necessary steps before starting work. This creates substantial administrative work, particularly for companies hiring frontline workers at scale.",
        ],
        implementation: [
          "Automatically starts the onboarding journey once a candidate is hired.",
          "Guides new hires conversationally through required onboarding steps.",
          "Collects required information and documents.",
          "Explains what candidates need to complete before their start date.",
          "Answers common onboarding and employment questions.",
          "Sends reminders for outstanding actions or documents.",
          "Tracks onboarding completion and highlights candidates requiring HR attention.",
          "Hands exceptions or more complex questions back to the HR team.",
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

export function getCaseStudyIndustry(slug: string) {
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
