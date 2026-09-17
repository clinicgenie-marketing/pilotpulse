import type { CSSProperties, ReactNode } from "react";
import { Check, Clock } from "lucide-react";

export type CaseStudyTab = "challenge" | "implementation" | "outcomes";

type ChatMessage = { from: "in" | "out" | "status"; text: string };
type Field = { label: string; value: string };
type Line = { label: string; value: string };
type Row = { name: string; meta: string; tone?: "ok" | "warn" | "risk" };
type Step = {
  label: string;
  meta: string;
  start: string;
  end: string;
  tone?: "primary" | "accent";
};
type InboxItem = { subject: string; meta: string; status: string };
type OverviewRow = { label: string; value: string; tone?: "ok" | "warn" | "risk" };

type Visual =
  | { kind: "inbox"; title: string; items: readonly InboxItem[] }
  | { kind: "overview"; title: string; rows: readonly OverviewRow[] }
  | { kind: "chat"; title: string; messages: readonly ChatMessage[]; handover?: string }
  | { kind: "extract"; title: string; source: string; fields: readonly Field[] }
  | { kind: "quote"; title: string; lines: readonly Line[]; total: string }
  | { kind: "dashboard"; title: string; rows: readonly Row[] }
  | { kind: "timeline"; title: string; steps: readonly Step[] }
  | { kind: "shortlist"; title: string; rows: readonly Row[] }
  | { kind: "field"; title: string; incident: string; updates: readonly string[] };

type StudyVisuals = {
  challenge: Extract<Visual, { kind: "inbox" }>;
  implementation: Exclude<Visual, { kind: "inbox" | "overview" }>;
  outcomes?: Extract<Visual, { kind: "overview" }>;
};

const VISUALS: Record<string, StudyVisuals> = {
  "last-mile-logistics-customer-support": {
    challenge: {
      kind: "inbox",
      title: "Support inbox",
      items: [
        { subject: "Locker 4B empty after delivered", meta: "Delivery · Waiting on systems", status: "Awaiting" },
        { subject: "Where is shipment SIN-4412?", meta: "Status · Multiple systems", status: "Awaiting" },
        { subject: "Damaged parcel photo attached", meta: "Service · Needs operations", status: "Awaiting" },
      ],
    },
    implementation: {
      kind: "chat",
      title: "WhatsApp · Delivery support",
      handover: "Hand to operator",
      messages: [
        { from: "in", text: "Parcel shows delivered but locker 4B is empty." },
        { from: "status", text: "Order checked · Locker sensors read" },
        { from: "out", text: "Locker 4B had a sensor fault. Your parcel is in 6A. Code 8821." },
      ],
    },
    outcomes: {
      kind: "overview",
      title: "Support overview",
      rows: [
        { label: "First-line conversations", value: "Handled", tone: "ok" },
        { label: "Human handover", value: "Available", tone: "ok" },
        { label: "Complex cases", value: "Escalated", tone: "warn" },
      ],
    },
  },
  "freight-forwarder-data-processing": {
    challenge: {
      kind: "inbox",
      title: "Incoming operations",
      items: [
        { subject: "Booking note waiting to be keyed", meta: "Shipment data · Manual update", status: "Queued" },
        { subject: "BL fields not yet validated", meta: "Control tower · Risk of error", status: "Queued" },
        { subject: "Operational system still outdated", meta: "Status · Awaiting clerk", status: "Queued" },
      ],
    },
    implementation: {
      kind: "extract",
      title: "Shipment extract",
      source: "Incoming booking note",
      fields: [
        { label: "BL", value: "SGSIN2409182" },
        { label: "POL / POD", value: "SHA → SIN" },
        { label: "ETD", value: "18 Sep 2026" },
        { label: "Status", value: "Control tower updated" },
      ],
    },
    outcomes: {
      kind: "overview",
      title: "Processing overview",
      rows: [
        { label: "Shipment data", value: "Extracted", tone: "ok" },
        { label: "Control tower", value: "Updated", tone: "ok" },
        { label: "Manual keying", value: "Reduced", tone: "ok" },
      ],
    },
  },
  "air-cargo-quotation-automation": {
    challenge: {
      kind: "inbox",
      title: "Quotation queue",
      items: [
        { subject: "SIN–FRA 245 kg request", meta: "Airline circular · Rate check", status: "Urgent" },
        { subject: "Fuel surcharge may have changed", meta: "Pricing database · Manual", status: "Waiting" },
        { subject: "Customer quote still in draft", meta: "Mark-up · Time-sensitive", status: "Waiting" },
      ],
    },
    implementation: {
      kind: "quote",
      title: "Air cargo quotation",
      lines: [
        { label: "SIN–FRA · 245 kg", value: "USD 2.18 / kg" },
        { label: "Fuel surcharge", value: "USD 0.42 / kg" },
        { label: "Security surcharge", value: "USD 0.18 / kg" },
      ],
      total: "USD 681.10",
    },
    outcomes: {
      kind: "overview",
      title: "Quotation overview",
      rows: [
        { label: "Buy rates", value: "Current", tone: "ok" },
        { label: "Surcharges", value: "Updated", tone: "ok" },
        { label: "Customer draft", value: "Ready", tone: "ok" },
      ],
    },
  },
  "logistics-project-email-intelligence": {
    challenge: {
      kind: "inbox",
      title: "Project inbox",
      items: [
        { subject: "Supplier: cargo received at origin", meta: "Milestone · Buried in thread", status: "Unread" },
        { subject: "Carrier: vessel delayed 2 days", meta: "Exception · Scattered emails", status: "Unread" },
        { subject: "Customer asking for latest ETA", meta: "Action · No single view", status: "Waiting" },
      ],
    },
    implementation: {
      kind: "timeline",
      title: "Delivery control tower",
      steps: [
        { label: "Cargo received at origin", meta: "Email · Supplier", start: "09:00", end: "10:30", tone: "primary" },
        { label: "Vessel delayed 2 days", meta: "Flagged · Carrier", start: "11:00", end: "12:00", tone: "accent" },
        { label: "Revised ETA confirmed", meta: "Customer notified", start: "11:00", end: "12:00", tone: "primary" },
      ],
    },
    outcomes: {
      kind: "overview",
      title: "Project overview",
      rows: [
        { label: "Email threads", value: "Consolidated", tone: "ok" },
        { label: "Delivery risk", value: "Flagged", tone: "warn" },
        { label: "Project status", value: "Visible", tone: "ok" },
      ],
    },
  },
  "ai-demand-planning-inventory": {
    challenge: {
      kind: "inbox",
      title: "Planner inbox",
      items: [
        { subject: "SKU-4412 brake pads running low", meta: "Replenish · When, and how much?", status: "Review" },
        { subject: "Filters may be overstocked", meta: "Working capital · Manual scan", status: "Review" },
        { subject: "Customer forecast not in history", meta: "Exception · Needs planner", status: "Review" },
      ],
    },
    implementation: {
      kind: "dashboard",
      title: "SKU risk board",
      rows: [
        { name: "SKU-4412 Brake pads", meta: "Order now", tone: "risk" },
        { name: "SKU-1180 Filters", meta: "Increase replenishment", tone: "warn" },
        { name: "SKU-9021 Wipers", meta: "Healthy stock", tone: "ok" },
      ],
    },
    outcomes: {
      kind: "overview",
      title: "Planning overview",
      rows: [
        { label: "High-risk SKUs", value: "Highlighted", tone: "warn" },
        { label: "Replenishment", value: "Recommended", tone: "ok" },
        { label: "Planner attention", value: "By exception", tone: "ok" },
      ],
    },
  },
  "ai-patient-engagement": {
    challenge: {
      kind: "inbox",
      title: "Clinic inbox",
      items: [
        { subject: "Is HydraFacial suitable after a peel?", meta: "Treatment · Front desk", status: "Waiting" },
        { subject: "Can I move Thursday with Dr Lim?", meta: "Appointment · Repetitive", status: "Waiting" },
        { subject: "Post-treatment follow-up overdue", meta: "Care · Manual chase", status: "Waiting" },
      ],
    },
    implementation: {
      kind: "chat",
      title: "WhatsApp · Clinic",
      handover: "Hand to clinic staff",
      messages: [
        { from: "in", text: "Is HydraFacial suitable after a peel last week?" },
        { from: "status", text: "Treatment rules checked · Patient record matched" },
        { from: "out", text: "Better to wait 14 days. Thursday 2:30pm is free with Dr Lim." },
      ],
    },
    outcomes: {
      kind: "overview",
      title: "Engagement overview",
      rows: [
        { label: "Patient enquiries", value: "Handled", tone: "ok" },
        { label: "Staff escalation", value: "Available", tone: "ok" },
        { label: "Follow-up", value: "Consistent", tone: "ok" },
      ],
    },
  },
  "ai-patient-assessment": {
    challenge: {
      kind: "inbox",
      title: "Assessment queue",
      items: [
        { subject: "Symptoms plus family history", meta: "Pathway · Not a simple FAQ", status: "Open" },
        { subject: "Prior screening already done", meta: "Branch · Different next step", status: "Open" },
        { subject: "Needs consultation or self-guide?", meta: "Decision rules · Manual", status: "Open" },
      ],
    },
    implementation: {
      kind: "timeline",
      title: "Care pathway",
      steps: [
        { label: "Symptoms and history collected", meta: "Conversational assessment", start: "09:00", end: "10:00", tone: "primary" },
        { label: "Pathway branch applied", meta: "Age · risk · prior screening", start: "10:00", end: "11:00", tone: "accent" },
        { label: "Follow-up recommended", meta: "Book consultation", start: "11:00", end: "12:00", tone: "primary" },
      ],
    },
    outcomes: {
      kind: "overview",
      title: "Navigation overview",
      rows: [
        { label: "Defined pathway", value: "Applied", tone: "ok" },
        { label: "Next action", value: "Clear", tone: "ok" },
        { label: "Clinical judgement", value: "Escalated", tone: "warn" },
      ],
    },
  },
  "ai-patient-counselling": {
    challenge: {
      kind: "inbox",
      title: "Counselling inbox",
      items: [
        { subject: "I know I should go. I’m putting it off.", meta: "Screening · Hesitation", status: "Open" },
        { subject: "Reminder sent, no reply", meta: "Standard message · Not enough", status: "Open" },
        { subject: "Worried about the result", meta: "Barrier · Needs listening", status: "Open" },
      ],
    },
    implementation: {
      kind: "chat",
      title: "Patient counselling",
      handover: "Hand to clinician",
      messages: [
        { from: "in", text: "I know I should go for screening. I’m just putting it off." },
        { from: "out", text: "What feels hardest about booking it — the time, or what the result might show?" },
        { from: "in", text: "Mostly the result. And taking time off work." },
      ],
    },
  },
  "ai-contract-intelligence": {
    challenge: {
      kind: "inbox",
      title: "Contract watchlist",
      items: [
        { subject: "Clause 12.4 EOT notice window", meta: "Deadline · Site delay 9 Sep", status: "At risk" },
        { subject: "Variation order not yet linked", meta: "Email vs contract · Manual", status: "Open" },
        { subject: "Obligation may already be missed", meta: "Commercial · Late visibility", status: "At risk" },
      ],
    },
    implementation: {
      kind: "extract",
      title: "Contract watch",
      source: "Clause 12.4 · EOT notice",
      fields: [
        { label: "Obligation", value: "14-day written notice" },
        { label: "Linked event", value: "Site delay · 9 Sep" },
        { label: "Risk", value: "Notice window closing" },
        { label: "Action", value: "Commercial review" },
      ],
    },
    outcomes: {
      kind: "overview",
      title: "Risk overview",
      rows: [
        { label: "Contractual risk", value: "Flagged earlier", tone: "warn" },
        { label: "EOT / VO items", value: "Monitored", tone: "ok" },
        { label: "Manual review", value: "Reduced", tone: "ok" },
      ],
    },
  },
  "ai-costing-rfq-tender": {
    challenge: {
      kind: "inbox",
      title: "QS inbox",
      items: [
        { subject: "Previous rate for blockwall?", meta: "Historical quotes · Slow search", status: "Queued" },
        { subject: "RFQ still to send to suppliers", meta: "Repetitive · Manual draft", status: "Queued" },
        { subject: "Compare invoices across projects", meta: "SOR · Hard to find", status: "Queued" },
      ],
    },
    implementation: {
      kind: "quote",
      title: "Historical rate lookup",
      lines: [
        { label: "Blockwall · Project A", value: "S$48 / m²" },
        { label: "Blockwall · Project C", value: "S$51 / m²" },
        { label: "Supplier RFQ drafted", value: "3 vendors" },
      ],
      total: "Estimate ready",
    },
    outcomes: {
      kind: "overview",
      title: "Costing overview",
      rows: [
        { label: "Rate lookup", value: "Faster", tone: "ok" },
        { label: "Supplier RFQ", value: "Drafted", tone: "ok" },
        { label: "Historical knowledge", value: "Reusable", tone: "ok" },
      ],
    },
  },
  "ai-drawing-regulatory-compliance": {
    challenge: {
      kind: "inbox",
      title: "Review queue",
      items: [
        { subject: "Level 8 fire plan vs clause 2.3.3", meta: "Drawing · Manual check", status: "Open" },
        { subject: "Escape width may be below minimum", meta: "Spec · Easy to miss", status: "Open" },
        { subject: "Submission pack not yet reviewed", meta: "Approval · Rework risk", status: "Open" },
      ],
    },
    implementation: {
      kind: "extract",
      title: "Drawing review",
      source: "Level 8 fire plan",
      fields: [
        { label: "Check", value: "Escape width vs clause 2.3.3" },
        { label: "Finding", value: "Stair 2 below minimum" },
        { label: "Status", value: "Flag before submission" },
      ],
    },
    outcomes: {
      kind: "overview",
      title: "Compliance overview",
      rows: [
        { label: "Non-compliance", value: "Flagged", tone: "warn" },
        { label: "Manual checking", value: "Reduced", tone: "ok" },
        { label: "Submission issues", value: "Avoided earlier", tone: "ok" },
      ],
    },
  },
  "construction-project-intelligence-hub": {
    challenge: {
      kind: "inbox",
      title: "Project fragments",
      items: [
        { subject: "VO raised in email", meta: "Not linked to BOQ 4.2", status: "Scattered" },
        { subject: "Drawing rev C received", meta: "Contract clause 8.1 · Separate", status: "Scattered" },
        { subject: "Cost impact not yet visible", meta: "QS and commercial · Search", status: "Scattered" },
      ],
    },
    implementation: {
      kind: "timeline",
      title: "Project intelligence",
      steps: [
        { label: "VO raised in email", meta: "Linked to BOQ item 4.2", start: "09:00", end: "10:00", tone: "primary" },
        { label: "Drawing rev C received", meta: "Tied to clause 8.1", start: "10:30", end: "11:30", tone: "accent" },
        { label: "Cost impact flagged", meta: "QS and commercial", start: "13:00", end: "14:00", tone: "primary" },
      ],
    },
    outcomes: {
      kind: "overview",
      title: "Project overview",
      rows: [
        { label: "Documents and comms", value: "Connected", tone: "ok" },
        { label: "Cost and contract risk", value: "Visible", tone: "warn" },
        { label: "Team review", value: "By exception", tone: "ok" },
      ],
    },
  },
  "ai-customer-enquiry-sales": {
    challenge: {
      kind: "inbox",
      title: "Sales inbox",
      items: [
        { subject: "Tasting menu for Saturday, 8 people?", meta: "WhatsApp · Availability", status: "Waiting" },
        { subject: "Price and package question", meta: "Web chat · Delayed reply", status: "Waiting" },
        { subject: "Reservation not yet confirmed", meta: "Conversion · At risk", status: "Waiting" },
      ],
    },
    implementation: {
      kind: "chat",
      title: "WhatsApp · Sales",
      handover: "Hand to reservations",
      messages: [
        { from: "in", text: "Do you have the tasting menu for Saturday, 8 people?" },
        { from: "status", text: "Menu and availability checked" },
        { from: "out", text: "Yes — 8 seats at 7:30pm. Shall I hold the table?" },
      ],
    },
    outcomes: {
      kind: "overview",
      title: "Sales overview",
      rows: [
        { label: "Customer enquiries", value: "Handled", tone: "ok" },
        { label: "Staff handover", value: "Available", tone: "ok" },
        { label: "Bookings", value: "Guided", tone: "ok" },
      ],
    },
  },
  "proactive-ai-customer-engagement": {
    challenge: {
      kind: "inbox",
      title: "Follow-up list",
      items: [
        { subject: "Asked about tasting menu last week", meta: "No outbound yet", status: "Idle" },
        { subject: "Saturday table still open", meta: "Manual chase · Easy to miss", status: "Idle" },
        { subject: "Member promotion not sent", meta: "One-way blast · No reply path", status: "Idle" },
      ],
    },
    implementation: {
      kind: "chat",
      title: "Re-engagement",
      handover: "Hand to reservations",
      messages: [
        { from: "out", text: "You asked about the tasting menu last week. Saturday still has a table at 7:30pm." },
        { from: "in", text: "Still interested. Can we do 8 people?" },
        { from: "status", text: "Lead handed to reservations" },
      ],
    },
    outcomes: {
      kind: "overview",
      title: "Outreach overview",
      rows: [
        { label: "Follow-up", value: "Consistent", tone: "ok" },
        { label: "Qualified interest", value: "Handed over", tone: "ok" },
        { label: "Manual chase", value: "Reduced", tone: "ok" },
      ],
    },
  },
  "ai-product-menu-recommendation": {
    challenge: {
      kind: "inbox",
      title: "Catalogue questions",
      items: [
        { subject: "Dinner for 8, not sure which set", meta: "Occasion · Staff must navigate", status: "Open" },
        { subject: "Budget around S$168", meta: "Preferences · Manual match", status: "Open" },
        { subject: "Wine pairing — optional?", meta: "Cross-sell · Inconsistent", status: "Open" },
      ],
    },
    implementation: {
      kind: "dashboard",
      title: "Recommended for you",
      rows: [
        { name: "Chef’s tasting · 8 pax", meta: "Best match · S$168", tone: "ok" },
        { name: "Set dinner · sharing", meta: "Within budget", tone: "ok" },
        { name: "Wine pairing add-on", meta: "Optional upgrade", tone: "warn" },
      ],
    },
    outcomes: {
      kind: "overview",
      title: "Recommendation overview",
      rows: [
        { label: "Customer fit", value: "Matched", tone: "ok" },
        { label: "Catalogue navigation", value: "Reduced", tone: "ok" },
        { label: "Upgrade options", value: "Offered", tone: "ok" },
      ],
    },
  },
  "ai-enquiry-to-order": {
    challenge: {
      kind: "inbox",
      title: "Order inbox",
      items: [
        { subject: "Catering Thu 18 Sep · 40 pax", meta: "Requirements still incomplete", status: "Open" },
        { subject: "Set B, no nuts — kitchen not told", meta: "Handover · Fragmented", status: "Open" },
        { subject: "Delivery time not confirmed", meta: "Fulfilment · Separate chat", status: "Open" },
      ],
    },
    implementation: {
      kind: "extract",
      title: "Enquiry to order",
      source: "Catering WhatsApp",
      fields: [
        { label: "Event", value: "Thu 18 Sep · 40 pax" },
        { label: "Menu", value: "Set B · no nuts" },
        { label: "Delivery", value: "12:30pm · Level 8" },
        { label: "Status", value: "Sent to kitchen" },
      ],
    },
    outcomes: {
      kind: "overview",
      title: "Order overview",
      rows: [
        { label: "Enquiry to order", value: "Progressed", tone: "ok" },
        { label: "Kitchen handover", value: "Updated", tone: "ok" },
        { label: "Exceptions", value: "Escalated", tone: "warn" },
      ],
    },
  },
  "ai-sales-marketing-lead-management": {
    challenge: {
      kind: "inbox",
      title: "Lead sources",
      items: [
        { subject: "Website tasting enquiry", meta: "Follow-up unknown", status: "Untracked" },
        { subject: "Sep set-lunch campaign lead", meta: "Deposit? · No single view", status: "Untracked" },
        { subject: "Event booth 12 Sep", meta: "Channel · Not attributed", status: "Untracked" },
      ],
    },
    implementation: {
      kind: "dashboard",
      title: "Lead pipeline",
      rows: [
        { name: "Website · tasting enquiry", meta: "Quotation sent", tone: "warn" },
        { name: "Campaign · Sep set lunch", meta: "Deposit received", tone: "ok" },
        { name: "Event booth · 12 Sep", meta: "Needs follow-up", tone: "risk" },
      ],
    },
    outcomes: {
      kind: "overview",
      title: "Pipeline overview",
      rows: [
        { label: "Leads requiring action", value: "Visible", tone: "warn" },
        { label: "Campaign source", value: "Attributed", tone: "ok" },
        { label: "Conversion path", value: "Tracked", tone: "ok" },
      ],
    },
  },
  "ai-marketing-planning": {
    challenge: {
      kind: "inbox",
      title: "Campaign fragments",
      items: [
        { subject: "Set lunch live across 3 brands", meta: "Spreadsheet · Separate teams", status: "Unclear" },
        { subject: "WhatsApp blast to members", meta: "Sales not looped in", status: "Unclear" },
        { subject: "Which campaign produced leads?", meta: "ROAS · Hard to see", status: "Unclear" },
      ],
    },
    implementation: {
      kind: "timeline",
      title: "Campaign calendar",
      steps: [
        { label: "Set lunch · 3 brands", meta: "Live this week", start: "10:30", end: "11:30", tone: "primary" },
        { label: "WhatsApp blast · members", meta: "Tied to 18 leads", start: "11:30", end: "12:30", tone: "accent" },
        { label: "Review ROAS", meta: "Sales + marketing", start: "14:00", end: "15:00", tone: "primary" },
      ],
    },
    outcomes: {
      kind: "overview",
      title: "Campaign overview",
      rows: [
        { label: "Brands and outlets", value: "Coordinated", tone: "ok" },
        { label: "Leads from campaigns", value: "Linked", tone: "ok" },
        { label: "Marketing spend", value: "Reviewable", tone: "ok" },
      ],
    },
  },
  "ai-demand-planning-retail": {
    challenge: {
      kind: "inbox",
      title: "Inventory exceptions",
      items: [
        { subject: "Serum 30ml may stock out", meta: "Lead time · Large SKU range", status: "Review" },
        { subject: "Cleanser moving slowly", meta: "Working capital · Scattered data", status: "Review" },
        { subject: "Gift-set customers to re-engage?", meta: "Customer view · Separate systems", status: "Review" },
      ],
    },
    implementation: {
      kind: "dashboard",
      title: "Inventory exceptions",
      rows: [
        { name: "SKU-2201 Serum 30ml", meta: "Stockout risk", tone: "risk" },
        { name: "SKU-7740 Cleanser", meta: "Slow-moving", tone: "warn" },
        { name: "SKU-3318 Gift set", meta: "Order next week", tone: "ok" },
      ],
    },
    outcomes: {
      kind: "overview",
      title: "Retail overview",
      rows: [
        { label: "Stockout risk", value: "Highlighted", tone: "warn" },
        { label: "Replenishment", value: "Recommended", tone: "ok" },
        { label: "Customer opportunities", value: "Visible", tone: "ok" },
      ],
    },
  },
  "ai-incident-sla-operations": {
    challenge: {
      kind: "inbox",
      title: "Ops WhatsApp",
      items: [
        { subject: "AHU-04 Tower B high temperature", meta: "Incident · Buried in group", status: "Untracked" },
        { subject: "ETA mentioned, not logged", meta: "SLA · Manual watch", status: "Untracked" },
        { subject: "Completion update somewhere above", meta: "Report · Command centre", status: "Untracked" },
      ],
    },
    implementation: {
      kind: "field",
      title: "Incident desk",
      incident: "AHU-04 · Tower B · High temperature",
      updates: ["Reported 14:12", "Acknowledged 14:16", "ETA 14:40 · SLA on track"],
    },
    outcomes: {
      kind: "overview",
      title: "SLA overview",
      rows: [
        { label: "Incidents", value: "Structured", tone: "ok" },
        { label: "SLA timestamps", value: "Tracked", tone: "ok" },
        { label: "Chat monitoring", value: "Reduced", tone: "ok" },
      ],
    },
  },
  "ai-field-service-maintenance": {
    challenge: {
      kind: "inbox",
      title: "Field jobs",
      items: [
        { subject: "Job 1842 AHU-04 assigned", meta: "Ack / ETA not confirmed", status: "Open" },
        { subject: "Before photo in the group chat", meta: "Not tied to the job", status: "Open" },
        { subject: "Rectification complete?", meta: "History · Manual compile", status: "Open" },
      ],
    },
    implementation: {
      kind: "field",
      title: "Work documentation",
      incident: "Job 1842 · AHU-04 rectification",
      updates: ["Arrived 14:38", "Before / after photos attached", "Completed 15:21"],
    },
    outcomes: {
      kind: "overview",
      title: "Field overview",
      rows: [
        { label: "Job progress", value: "Visible", tone: "ok" },
        { label: "Photo evidence", value: "Attached", tone: "ok" },
        { label: "Outstanding work", value: "Identifiable", tone: "warn" },
      ],
    },
  },
  "ai-cv-preparation": {
    challenge: {
      kind: "inbox",
      title: "Incoming CVs",
      items: [
        { subject: "PDF in a different format", meta: "Extract · Rewrite by hand", status: "Queued" },
        { subject: "Client template not applied", meta: "Formatting · Consultant time", status: "Queued" },
        { subject: "Interview notes still separate", meta: "Profile · Inconsistent", status: "Queued" },
      ],
    },
    implementation: {
      kind: "extract",
      title: "CV standardisation",
      source: "Incoming CV · PDF",
      fields: [
        { label: "Role", value: "Operations supervisor" },
        { label: "Years", value: "7 years · logistics" },
        { label: "Template", value: "Client-ready draft" },
      ],
    },
    outcomes: {
      kind: "overview",
      title: "Preparation overview",
      rows: [
        { label: "CV draft", value: "Standardised", tone: "ok" },
        { label: "Recruiter review", value: "Ready", tone: "ok" },
        { label: "Manual formatting", value: "Reduced", tone: "ok" },
      ],
    },
  },
  "ai-cv-matching": {
    challenge: {
      kind: "inbox",
      title: "Screening pile",
      items: [
        { subject: "48 CVs for operations supervisor", meta: "Keyword search · Easy to miss", status: "Manual" },
        { subject: "Relevant experience, different wording", meta: "Criteria · Inconsistent", status: "Manual" },
        { subject: "Shortlist not yet ranked", meta: "Human review · Slow", status: "Manual" },
      ],
    },
    implementation: {
      kind: "shortlist",
      title: "Shortlist",
      rows: [
        { name: "Candidate A", meta: "92% · Interview booked", tone: "ok" },
        { name: "Candidate B", meta: "81% · Shortlisted", tone: "ok" },
        { name: "Candidate C", meta: "74% · Review", tone: "warn" },
      ],
    },
    outcomes: {
      kind: "overview",
      title: "Matching overview",
      rows: [
        { label: "Hiring criteria", value: "Applied", tone: "ok" },
        { label: "Stronger candidates", value: "Surfaced", tone: "ok" },
        { label: "Manual CV review", value: "Reduced", tone: "ok" },
      ],
    },
  },
  "ai-candidate-validation": {
    challenge: {
      kind: "inbox",
      title: "Applicant questions",
      items: [
        { subject: "Do you hold a valid Class 3 licence?", meta: "Asked again by HR", status: "Repeat" },
        { subject: "Can you start night shift next week?", meta: "Eligibility · High volume", status: "Repeat" },
        { subject: "Interview not yet offered", meta: "Screening · Bottleneck", status: "Repeat" },
      ],
    },
    implementation: {
      kind: "chat",
      title: "WhatsApp · Screening",
      handover: "Hand to HR",
      messages: [
        { from: "out", text: "Do you hold a valid Class 3 licence and can you start night shift next week?" },
        { from: "in", text: "Yes, Class 3. I can start Monday night." },
        { from: "status", text: "Eligibility met · Interview offered" },
      ],
    },
    outcomes: {
      kind: "overview",
      title: "Screening overview",
      rows: [
        { label: "Eligibility", value: "Checked first", tone: "ok" },
        { label: "Qualified applicants", value: "Progressed", tone: "ok" },
        { label: "HR interview time", value: "Protected", tone: "ok" },
      ],
    },
  },
  "ai-candidate-onboarding": {
    challenge: {
      kind: "inbox",
      title: "Onboarding follow-up",
      items: [
        { subject: "Offer accepted — documents missing", meta: "NRIC · bank · certs", status: "Chasing" },
        { subject: "Safety briefing not completed", meta: "Reminder · Manual", status: "Chasing" },
        { subject: "Start date questions in WhatsApp", meta: "HR admin · High volume", status: "Chasing" },
      ],
    },
    implementation: {
      kind: "timeline",
      title: "Onboarding tracker",
      steps: [
        { label: "Offer accepted", meta: "Journey started", start: "09:00", end: "10:00", tone: "primary" },
        { label: "Documents received", meta: "NRIC · bank · certs", start: "10:00", end: "11:30", tone: "accent" },
        { label: "Reminder sent", meta: "Safety briefing outstanding", start: "14:00", end: "15:00", tone: "primary" },
      ],
    },
    outcomes: {
      kind: "overview",
      title: "Onboarding overview",
      rows: [
        { label: "Required documents", value: "Collected", tone: "ok" },
        { label: "Outstanding steps", value: "Reminded", tone: "warn" },
        { label: "HR exceptions", value: "Handed over", tone: "ok" },
      ],
    },
  },
};

export function CaseStudyVisual({ studyId, tab }: { studyId: string; tab: CaseStudyTab }) {
  const pack = VISUALS[studyId];
  if (!pack) return null;

  const visual = tab === "challenge" ? pack.challenge : tab === "outcomes" ? pack.outcomes : pack.implementation;
  if (!visual) return null;

  return (
    <figure
      className={`case-study-visual is-${tab}${visual.kind === "quote" ? " is-quote" : ""}${
        visual.kind === "extract" && visual.title === "Shipment extract" ? " is-shipment" : ""
      }`}
      aria-hidden="true"
    >
      {visual.kind === "inbox" ? <InboxVisual visual={visual} /> : null}
      {visual.kind === "overview" ? <OverviewVisual visual={visual} /> : null}
      {visual.kind === "chat" ? <ChatVisual visual={visual} /> : null}
      {visual.kind === "extract" ? <ExtractVisual visual={visual} /> : null}
      {visual.kind === "quote" ? <QuoteVisual visual={visual} /> : null}
      {visual.kind === "dashboard" || visual.kind === "shortlist" ? <BoardVisual visual={visual} /> : null}
      {visual.kind === "timeline" ? <TimelineVisual visual={visual} /> : null}
      {visual.kind === "field" ? <FieldVisual visual={visual} /> : null}
    </figure>
  );
}

function VisualHead({ title }: { title: string }) {
  return (
    <header className="case-study-visual-head">
      <span className="case-study-visual-dot" aria-hidden="true" />
      <span>{title}</span>
    </header>
  );
}

function inboxStatusTone(status: string): "ok" | "warn" | "risk" | undefined {
  const value = status.toLowerCase();
  if (["urgent", "at risk", "unread", "risk"].some((term) => value.includes(term))) return "risk";
  if (["ready", "updated", "current", "handled", "complete"].some((term) => value.includes(term))) {
    return "ok";
  }
  if (
    ["waiting", "queued", "review", "open", "manual", "awaiting", "chasing", "idle", "untracked"].some((term) =>
      value.includes(term),
    )
  ) {
    return "warn";
  }
  return undefined;
}

function ListRowStatus({
  children,
  tone,
}: {
  children: string;
  tone?: "ok" | "warn" | "risk";
}) {
  return (
    <span className={`case-study-row-pill${tone ? ` is-${tone}` : ""}`}>
      <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
      {children}
    </span>
  );
}

function ListRow({
  primary,
  secondary,
  status,
  tone,
}: {
  primary: string;
  secondary?: string;
  status: string;
  tone?: "ok" | "warn" | "risk";
}) {
  return (
    <li className="case-study-list-row">
      <div className="case-study-row-copy">
        <p>{primary}</p>
        {secondary ? <p>{secondary}</p> : null}
      </div>
      <ListRowStatus tone={tone}>{status}</ListRowStatus>
    </li>
  );
}

function ListRows({ children }: { children: ReactNode }) {
  return <ul className="case-study-list-rows">{children}</ul>;
}

function InboxVisual({ visual }: { visual: Extract<Visual, { kind: "inbox" }> }) {
  return (
    <>
      <VisualHead title={visual.title} />
      <ListRows>
        {visual.items.map((item) => (
          <ListRow
            key={item.subject}
            primary={item.subject}
            secondary={item.meta}
            status={item.status}
            tone={inboxStatusTone(item.status)}
          />
        ))}
      </ListRows>
    </>
  );
}

function OverviewVisual({ visual }: { visual: Extract<Visual, { kind: "overview" }> }) {
  return (
    <>
      <VisualHead title={visual.title} />
      <ListRows>
        {visual.rows.map((row) => (
          <ListRow
            key={row.label}
            primary={row.label}
            status={row.value}
            tone={row.tone}
          />
        ))}
      </ListRows>
    </>
  );
}

function ChatVisual({ visual }: { visual: Extract<Visual, { kind: "chat" }> }) {
  return (
    <>
      <VisualHead title={visual.title} />
      <div className="case-study-visual-body case-study-visual-chat">
        {visual.messages.map((item) =>
          item.from === "status" ? (
            <p key={item.text} className="case-study-visual-status">
              {item.text}
            </p>
          ) : (
            <p key={item.text} className={item.from === "in" ? "case-study-visual-in" : "case-study-visual-out"}>
              {item.text}
            </p>
          ),
        )}
        {visual.handover ? (
          <p className="case-study-visual-handover">{visual.handover}</p>
        ) : null}
      </div>
    </>
  );
}

function extractField(fields: readonly Field[], label: string) {
  return fields.find((field) => field.label === label)?.value ?? "";
}

function ExtractVisual({ visual }: { visual: Extract<Visual, { kind: "extract" }> }) {
  if (visual.title === "Shipment extract") {
    return <ShipmentExtract visual={visual} />;
  }

  return (
    <>
      <VisualHead title={visual.title} />
      <div className="case-study-visual-body">
        <p className="case-study-visual-source">{visual.source}</p>
        <dl className="case-study-visual-fields">
          {visual.fields.map((field) => (
            <div key={field.label}>
              <dt>{field.label}</dt>
              <dd>{field.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </>
  );
}

function ShipmentExtract({ visual }: { visual: Extract<Visual, { kind: "extract" }> }) {
  const bl = extractField(visual.fields, "BL");
  const route = extractField(visual.fields, "POL / POD");
  const etd = extractField(visual.fields, "ETD");
  const status = extractField(visual.fields, "Status");
  const tone = inboxStatusTone(status) ?? "ok";

  return (
    <div className="case-study-visual-body case-study-shipment-wrap">
      <article className="case-study-shipment">
        <div className="case-study-shipment-top">
          <div>
            <p className="case-study-shipment-kicker">BL</p>
            <p className="case-study-shipment-id">{bl}</p>
          </div>
          {status ? (
            <span className={`case-study-shipment-status is-${tone}`}>{status}</span>
          ) : null}
        </div>
        <div className="case-study-shipment-route">
          <span className="case-study-shipment-pin" />
          <div>
            <p className="case-study-shipment-label">POL / POD</p>
            <p className="case-study-shipment-value">{route}</p>
            {etd ? (
              <p className="case-study-shipment-date">
                <span>ETD</span> {etd}
              </p>
            ) : null}
          </div>
        </div>
      </article>
    </div>
  );
}

function QuoteVisual({ visual }: { visual: Extract<Visual, { kind: "quote" }> }) {
  return (
    <>
      <VisualHead title={visual.title} />
      <div className="case-study-visual-body">
        <dl className="case-study-receipt">
          {visual.lines.map((line) => (
            <div key={line.label} className="case-study-receipt-row">
              <dt>{line.label}</dt>
              <dd>{line.value}</dd>
            </div>
          ))}
          <div className="case-study-receipt-row is-total">
            <dt>Total</dt>
            <dd>{visual.total}</dd>
          </div>
        </dl>
      </div>
    </>
  );
}

function BoardVisual({
  visual,
}: {
  visual: Extract<Visual, { kind: "dashboard" | "shortlist" }>;
}) {
  return (
    <>
      <VisualHead title={visual.title} />
      <ListRows>
        {visual.rows.map((row) => (
          <ListRow
            key={row.name}
            primary={row.name}
            status={row.meta}
            tone={row.tone}
          />
        ))}
      </ListRows>
    </>
  );
}

function parseMinutes(time: string) {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

function hourLabel(hour: number) {
  const wrapped = ((hour % 24) + 24) % 24;
  if (wrapped === 12) return "Noon";
  if (wrapped === 0) return "12 AM";
  if (wrapped < 12) return `${wrapped} AM`;
  return `${wrapped - 12} PM`;
}

function formatClock(time: string) {
  const [hours, minutes] = time.split(":").map(Number);
  if (hours === 12 && minutes === 0) return "Noon";
  const suffix = hours >= 12 ? "PM" : "AM";
  const hour12 = hours % 12 || 12;
  if (minutes === 0) return `${hour12} ${suffix}`;
  return `${hour12}:${String(minutes).padStart(2, "0")} ${suffix}`;
}

type LaidOutStep = Step & {
  startM: number;
  endM: number;
  col: number;
  cols: number;
};

function layoutTimeline(steps: readonly Step[]) {
  const timed: LaidOutStep[] = steps.map((step) => ({
    ...step,
    startM: parseMinutes(step.start),
    endM: parseMinutes(step.end),
    col: 0,
    cols: 1,
  }));

  const columnEnds: number[] = [];
  for (const event of [...timed].sort((a, b) => a.startM - b.startM || a.endM - b.endM)) {
    let col = columnEnds.findIndex((end) => end <= event.startM);
    if (col === -1) {
      col = columnEnds.length;
      columnEnds.push(event.endM);
    } else {
      columnEnds[col] = event.endM;
    }
    event.col = col;
  }

  for (const event of timed) {
    let maxCol = event.col;
    for (const other of timed) {
      if (event.startM < other.endM && other.startM < event.endM) {
        maxCol = Math.max(maxCol, other.col);
      }
    }
    event.cols = maxCol + 1;
  }

  const minStart = Math.min(...timed.map((step) => step.startM));
  const maxEnd = Math.max(...timed.map((step) => step.endM));
  const startHour = Math.floor(minStart / 60);
  const endHour = Math.max(Math.ceil(maxEnd / 60), startHour + 3);

  return { events: timed, startHour, endHour };
}

function TimelineVisual({ visual }: { visual: Extract<Visual, { kind: "timeline" }> }) {
  const { events, startHour, endHour } = layoutTimeline(visual.steps);
  const hours = Array.from({ length: endHour - startHour + 1 }, (_, index) => startHour + index);
  const rangeStart = startHour * 60;
  const rangeMinutes = (endHour - startHour) * 60;

  return (
    <>
      <VisualHead title={visual.title} />
      <div className="case-study-calendar">
        <ol className="case-study-calendar-hours">
          {hours.map((hour, index) => (
            <li key={hour} className={index === hours.length - 1 ? "is-end" : undefined}>
              <span>{hourLabel(hour)}</span>
              <span />
            </li>
          ))}
        </ol>
        <div className="case-study-calendar-lane">
          {events.map((event) => {
            const top = ((event.startM - rangeStart) / rangeMinutes) * 100;
            const height = ((event.endM - event.startM) / rangeMinutes) * 100;
            return (
              <article
                key={event.label}
                className={`case-study-cal-event is-${event.tone ?? "primary"}`}
                style={
                  {
                    top: `${top}%`,
                    height: `calc(${height}% - 3px)`,
                    left: `calc(${(event.col / event.cols) * 100}% + 2px)`,
                    width: `calc(${(1 / event.cols) * 100}% - 4px)`,
                  } as CSSProperties
                }
              >
                <p>{event.label}</p>
                <p>
                  <Clock className="h-3 w-3" strokeWidth={2.25} aria-hidden="true" />
                  {formatClock(event.start)} – {formatClock(event.end)}
                </p>
                <p>{event.meta}</p>
              </article>
            );
          })}
        </div>
      </div>
    </>
  );
}

function FieldVisual({ visual }: { visual: Extract<Visual, { kind: "field" }> }) {
  return (
    <>
      <VisualHead title={visual.title} />
      <div className="case-study-visual-body">
        <p className="case-study-visual-source">{visual.incident}</p>
        <ListRows>
          {visual.updates.map((update) => {
            const [primary, status = "Logged"] = update.split(" · ");
            return (
              <ListRow
                key={update}
                primary={primary}
                status={status}
                tone={status.toLowerCase().includes("track") ? "ok" : undefined}
              />
            );
          })}
        </ListRows>
      </div>
    </>
  );
}
