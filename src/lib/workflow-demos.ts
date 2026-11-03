/**
 * Workflow showcase content ("In production" on the homepage).
 *
 * This module is content only: no React, no timing logic, no styling. Playback lives in
 * `components/sections/workflow-demo/useWorkflowPlayback.ts` and presentation in
 * `components/sections/workflow-demo/WorkflowSequence.tsx`.
 *
 * A sequence is an ordered list of steps. Each step optionally completes one or more
 * checklist items, which is how "What the AI did" stays in sync with the conversation.
 *
 * Each demo may tune its own pacing via `timing`, and any single step may override its
 * dwell with `dwellMs`, so examples stay independently configurable.
 */

export type WorkflowActor = "customer" | "ai" | "system";

export type WorkflowIcon = "truck" | "plane" | "heart" | "building" | "userSearch" | "hardHat";

/** A compact record/document/quotation card, rendered in the chat column. */
export type WorkflowCard = {
  /** Drives the card label and glyph only — never the bubble colour. */
  kind: "photo" | "document" | "record" | "case" | "credential" | "email" | "quote" | "alert";
  title: string;
  subtitle?: string;
  rows?: { label: string; value: string }[];
};

/** The system/tool a step touched, shown as the small "→" line under the bubble. */
export type WorkflowTool = {
  name: string;
  system?: string;
};

type StepBase = {
  completes?: string[];
  tool?: WorkflowTool;
  /** Override the derived dwell for this step, in ms. */
  dwellMs?: number;
};

export type WorkflowStep =
  | (StepBase & {
      kind: "message";
      from: WorkflowActor;
      text: string;
    })
  | (StepBase & {
      kind: "card";
      from: WorkflowActor;
      card: WorkflowCard;
    })
  | (StepBase & {
      kind: "handover";
      /** `toHuman` = the AI escalates; `toAi` = the AI takes the work back. */
      direction: "toHuman" | "toAi";
      text: string;
    });

export type WorkflowChecklistItem = {
  id: string;
  label: string;
};

/** Per-example pacing. Any omitted field falls back to the shared default. */
export type WorkflowTiming = {
  /** Dwell before the very first step lands. */
  startMs?: number;
  /** Reading-time budget: base + perCharMs * characters, clamped to min/max. */
  baseMs?: number;
  perCharMs?: number;
  minMs?: number;
  maxMs?: number;
  cardMs?: number;
  handoverMs?: number;
  /** How long the finished sequence holds before the showcase advances. */
  holdMs?: number;
};

export type WorkflowDemoItem = {
  id: string;
  label: string;
  icon: WorkflowIcon;
  badge: string;
  /** Short description of the sequence, announced to assistive tech. */
  summary: string;
  steps: WorkflowStep[];
  checklist: WorkflowChecklistItem[];
  result: string;
  timing?: WorkflowTiming;
};

export const workflowDemos: WorkflowDemoItem[] = [
  {
    id: "logistics",
    label: "Logistics · Customer Support",
    icon: "truck",
    badge: "Live · Last-mile delivery",
    summary:
      "A parcel-collection enquiry on WhatsApp after hours: the AI worker checks the parcel, opens a case, hands over to a human operator, then takes the chat back.",
    checklist: [
      { id: "workflow", label: "Started the parcel-collection workflow" },
      { id: "record", label: "Found the customer record" },
      { id: "tracking", label: "Read the tracking number from the screenshot" },
      { id: "status", label: "Checked the parcel status in the logistics system" },
      { id: "case", label: "Opened a case with the photo and timestamp attached" },
      { id: "handover", label: "Handed the chat to a human operator" },
      { id: "takeback", label: "Took the chat back and retrieved the collection PIN" },
    ],
    steps: [
      {
        kind: "message",
        from: "customer",
        text: "Hi, I'd like to collect my parcel.",
      },
      {
        kind: "message",
        from: "system",
        text: "I'm currently gathering the data — I'll update you soon.",
        tool: { name: "Starts the parcel-collection workflow" },
        completes: ["workflow"],
      },
      {
        kind: "message",
        from: "ai",
        text: "Hi Tian Yee, happy to help. Could you share your tracking ID so I can look it up?",
        tool: { name: "Finds the customer record", system: "Customer records" },
        completes: ["record"],
      },
      {
        kind: "card",
        from: "customer",
        card: {
          kind: "photo",
          title: "Parcel collection card",
          subtitle: "Screenshot sent by the customer",
          rows: [{ label: "Tracking ID", value: "TESTLZSGD1012425499" }],
        },
      },
      {
        kind: "message",
        from: "system",
        text: "Processing now — I'll provide an update shortly.",
        tool: { name: "Reads the tracking number from the screenshot", system: "Image analysis" },
        completes: ["tracking"],
      },
      {
        kind: "card",
        from: "ai",
        card: {
          kind: "record",
          title: "Parcel status",
          rows: [
            { label: "Tracking ID", value: "…425499" },
            { label: "Deposited by", value: "Logistics service provider" },
            { label: "Deposited at", value: "23 Sep, 2:02 pm" },
          ],
        },
        tool: { name: "Checks the parcel status", system: "Logistics system" },
        completes: ["status"],
      },
      {
        kind: "card",
        from: "customer",
        card: {
          kind: "photo",
          title: "Locker photo",
          subtitle: "Compartment open at collection",
        },
      },
      {
        kind: "message",
        from: "customer",
        text: "I see an empty compartment.",
      },
      {
        kind: "message",
        from: "ai",
        text: "I'm sorry the compartment was empty. Could you tell me the date and time you tried to collect?",
        tool: { name: "Checks the photo — compartment is empty", system: "Image analysis" },
      },
      {
        kind: "message",
        from: "customer",
        text: "Now.",
      },
      {
        kind: "message",
        from: "ai",
        text: "Thank you. I've noted the attempt at 9:22 pm today. I'm escalating this to our customer support team and a representative will be in touch shortly.",
      },
      {
        kind: "card",
        from: "ai",
        card: {
          kind: "case",
          title: "Support case opened",
          rows: [
            { label: "Issue", value: "Empty compartment" },
            { label: "Attempted", value: "9:22 pm, 9 Sep" },
            { label: "Attached", value: "Locker photo · parcel status" },
          ],
        },
        tool: { name: "Opens a case with every detail attached", system: "Case management" },
        completes: ["case"],
      },
      {
        kind: "handover",
        direction: "toHuman",
        text: "Handed over to a human operator",
        tool: { name: "Support queue" },
        completes: ["handover"],
      },
      {
        kind: "message",
        from: "customer",
        text: "Never mind, suddenly can already.",
      },
      {
        kind: "message",
        from: "customer",
        text: "What is my PIN?",
      },
      {
        kind: "handover",
        direction: "toAi",
        text: "AI takes the chat back from the human queue",
        tool: { name: "Guardian" },
      },
      {
        kind: "card",
        from: "ai",
        card: {
          kind: "credential",
          title: "Collection PIN",
          rows: [
            { label: "Tracking ID", value: "TESTLZSGD1012425499" },
            { label: "PIN", value: "432136" },
          ],
        },
        tool: { name: "Retrieves the collection PIN", system: "Logistics system" },
        completes: ["takeback"],
      },
    ],
    result: "~30% of support conversations handled with zero human touch. Example figures from a live deployment, rounded.",
  },
  {
    id: "logistics-quotation",
    label: "Logistics · Quotation",
    icon: "plane",
    badge: "Air cargo quotations",
    summary:
      "An air freight rate request worked into a sendable quote: the AI reads the request, picks which airlines to ask, resolves what each price includes, and flags anything uncertain for the team.",
    checklist: [
      { id: "request", label: "Read the request and set the pricing region" },
      { id: "airlines", label: "Chose which airlines to ask, and why" },
      { id: "inclusive", label: "Worked out what Turkish Cargo's all-in price covers" },
      { id: "extras", label: "Added the charges ANA Cargo leaves out" },
      { id: "quote", label: "Built both options into one quote" },
      { id: "review", label: "Flagged anything uncertain for the team to check" },
    ],
    steps: [
      {
        kind: "card",
        from: "customer",
        card: {
          kind: "email",
          title: "Air freight · Singapore to Houston",
          subtitle: "Appreciate your advice on rate and flight details to IAH",
          rows: [
            { label: "Route", value: "SIN → IAH" },
            { label: "Cargo", value: "1 pallet · 38x125x97" },
            { label: "Weight", value: "2,780 kg" },
          ],
        },
      },
      {
        kind: "message",
        from: "ai",
        text: "Reading the request. Pricing region is Americas (Area 1) — that decides which extra charges apply.",
        tool: { name: "Reads the request", system: "Pricing regions" },
        completes: ["request"],
      },
      {
        kind: "card",
        from: "ai",
        card: {
          kind: "record",
          title: "Airlines to ask",
          subtitle: "Weighed past prices, relationship, reliability, fresh comparison and space",
          rows: [
            { label: "Turkish Cargo", value: "Ask · best value, dependable" },
            { label: "ANA Cargo", value: "Ask · fresh price to compare" },
            { label: "Emirates SkyCargo", value: "Skip · higher past prices here" },
            { label: "Cathay Cargo", value: "Skip · no space this week" },
          ],
        },
        tool: { name: "Chooses the airlines to approach", system: "Rate history" },
        completes: ["airlines"],
      },
      {
        kind: "card",
        from: "customer",
        card: {
          kind: "email",
          title: "Turkish Cargo · RE: Rate request",
          subtitle: "SIN/IAH GCR, stackable",
          rows: [{ label: "1000kg", value: "$5.80 all-in" }],
        },
      },
      {
        kind: "message",
        from: "ai",
        text: "\"All-in\" covers fuel and security. The paperwork fee still applies, and the Minsk-only fee doesn't apply to this route.",
        tool: { name: "Checks what the price includes", system: "Charge rules" },
      },
      {
        kind: "card",
        from: "ai",
        card: {
          kind: "quote",
          title: "Turkish Cargo",
          subtitle: "All charges included",
          rows: [
            { label: "Fuel and security", value: "Included" },
            { label: "Paperwork fee", value: "+ SGD 5.00" },
            { label: "Fee for Minsk only", value: "Skipped" },
            { label: "Price to quote, with margin", value: "SGD 5.90/kg" },
          ],
        },
        completes: ["inclusive"],
      },
      {
        kind: "card",
        from: "customer",
        card: {
          kind: "email",
          title: "ANA Cargo · RE: Rate request",
          subtitle: "Our adhoc rates at $3.00++ for your quote and subject to space",
        },
      },
      {
        kind: "message",
        from: "ai",
        text: "\"++\" means extra charges on top, so fuel, security and paperwork all need adding.",
        tool: { name: "Adds the missing charges", system: "Charge rules" },
      },
      {
        kind: "card",
        from: "ai",
        card: {
          kind: "quote",
          title: "ANA Cargo",
          subtitle: "Plus extra charges",
          rows: [
            { label: "Fuel charge", value: "+ SGD 1.60/kg" },
            { label: "Security charge", value: "+ SGD 0.18/kg" },
            { label: "Paperwork fee", value: "+ SGD 4.00" },
            { label: "Base price, with margin", value: "SGD 3.10/kg" },
          ],
        },
        completes: ["extras"],
      },
      {
        kind: "card",
        from: "ai",
        card: {
          kind: "document",
          title: "Quote ready to send",
          subtitle: "Both airlines side by side, every charge shown",
          rows: [
            { label: "Turkish Cargo", value: "SGD 5.90/kg · all-in" },
            { label: "ANA Cargo", value: "SGD 3.10/kg · plus extras" },
          ],
        },
        tool: { name: "Prepares the quote", system: "Quotation" },
        completes: ["quote"],
      },
      {
        kind: "handover",
        direction: "toHuman",
        text: "Anything uncertain is flagged for your team to check",
        tool: { name: "Quote review" },
        completes: ["review"],
      },
    ],
    result: "Under a minute from airline replies to a finished quote, ready for your team to send.",
  },
  {
    id: "healthcare",
    label: "Healthcare",
    icon: "heart",
    badge: "Patient enquiry & counselling",
    summary:
      "A late-night treatment enquiry answered from the clinic knowledge base, then a screening conversation where the patient pushes back and the AI listens rather than persuades.",
    checklist: [
      { id: "menu", label: "Searched the treatment menu" },
      { id: "packages", label: "Compared packages against what's in each one" },
      { id: "refusal", label: "Recognised a refusal and its reason" },
      { id: "listen", label: "Listened and asked gently, without pushing" },
      { id: "respect", label: "Respected the patient's choice" },
      { id: "handover", label: "Left the next step with the patient and the clinic team" },
    ],
    steps: [
      {
        kind: "message",
        from: "customer",
        text: "My skin's been really dull lately and I've got some old acne scars.",
      },
      {
        kind: "card",
        from: "ai",
        card: {
          kind: "document",
          title: "Treatments that can help",
          rows: [
            { label: "Pico Laser", value: "Acne scars, pigmentation, rejuvenation" },
            { label: "Medical Grade Facials", value: "Radiance and texture" },
          ],
        },
        tool: { name: "Searched treatment menu", system: "Knowledge base" },
        completes: ["menu"],
      },
      {
        kind: "message",
        from: "customer",
        text: "Which package includes Pico laser but excludes Sylfirm?",
      },
      {
        kind: "message",
        from: "ai",
        text: "That would be Glow Plus. It includes Pico Laser Toning along with the Medical Grade Facial and LED therapy, but does not include Sylfirm X or any injectable components.",
        tool: { name: "Compared all packages", system: "Package rules" },
        completes: ["packages"],
      },
      {
        kind: "message",
        from: "customer",
        text: "My friend did every test and still died. Screening just makes you a patient sooner.",
      },
      {
        kind: "message",
        from: "ai",
        text: "I'm sorry about your friend. That kind of loss stays with you, and it makes sense that screening would feel pointless or even harmful after seeing that.",
        tool: { name: "Recognised a refusal and its reason", system: "Screening" },
        completes: ["refusal"],
      },
      {
        kind: "message",
        from: "ai",
        text: "You don't have to decide anything today, and it's completely your choice. If you're open to it, what feels like the hardest part for you?",
        tool: { name: "Listened and asked gently", system: "Counselling model" },
        completes: ["listen"],
      },
      {
        kind: "message",
        from: "customer",
        text: "Don't be brave or tell me what she would want for me. My friend lost her normal life to appointments and fear.",
      },
      {
        kind: "message",
        from: "ai",
        text: "I hear you. That is its own kind of grief, and it is not something to be talked out of. I am not going to push you toward anything — you know your own life best. I am just here if you have questions, whenever that feels right.",
        tool: { name: "Respected her choice", system: "Counselling model" },
        completes: ["respect"],
      },
      {
        kind: "message",
        from: "customer",
        text: "I guess not testing makes me feel uncertain, but it also lets me feel healthy.",
      },
      {
        kind: "message",
        from: "ai",
        text: "That makes a lot of sense. Both of those things are real, and only you can weigh them. There is no right answer here, and no rush.",
      },
      {
        kind: "message",
        from: "customer",
        text: "An at-home first step sounds less disruptive, but I'm not ready to promise I'll finish it. I'll let you know when I'm ready.",
      },
      {
        kind: "handover",
        direction: "toHuman",
        text: "Choice recorded — the patient decides when, the clinic team picks it up",
        tool: { name: "Patient registry" },
        completes: ["handover"],
      },
    ],
    result: "60–80% of patient messages handled by AI. Example figures from the source demo, rounded.",
  },
  {
    id: "facilities",
    label: "Facilities Management",
    icon: "building",
    badge: "Operations tracker",
    summary:
      "A power failure alert, an ETA and an arrival note are told apart in a busy operations WhatsApp group, opened as one incident record, and closed with before and after evidence inside SLA.",
    checklist: [
      { id: "capture", label: "Told the alert apart from the group chatter" },
      { id: "open", label: "Opened one incident record and started the SLA clock" },
      { id: "ack", label: "Logged the contractor's ETA and arrival" },
      { id: "evidence", label: "Filed field photos as before and after evidence" },
      { id: "rectify", label: "Recorded the action taken and closed the SLA" },
      { id: "summary", label: "Completed the structured record for reporting" },
    ],
    steps: [
      {
        kind: "card",
        from: "customer",
        card: {
          kind: "alert",
          title: "RCMS power supply failure",
          subtitle: "Posted into the operations WhatsApp group",
          rows: [
            { label: "RCMS ID", value: "0130864877" },
            { label: "Location", value: "Pioneer Rd · BS24679" },
            { label: "Detected", value: "11:40" },
          ],
        },
        tool: { name: "Told apart from the group chatter", system: "WhatsApp groups" },
        completes: ["capture"],
      },
      {
        kind: "card",
        from: "ai",
        card: {
          kind: "record",
          title: "INC-22039-B17 opened",
          subtitle: "West power supply failure — Bus Shelter B17",
          rows: [
            { label: "Location", value: "B17 · Jalan Ahmad Ibrahim" },
            { label: "Reported", value: "11:40" },
            { label: "SLA target", value: "60 min response" },
          ],
        },
        tool: { name: "Opens the incident and starts the SLA clock", system: "Incident tracker" },
        completes: ["open"],
      },
      {
        kind: "message",
        from: "customer",
        text: "Eta?",
      },
      {
        kind: "message",
        from: "customer",
        text: "30 mins",
      },
      {
        kind: "message",
        from: "ai",
        text: "ETA 30 mins logged, acknowledged by AndyL (contractor). Status: Acknowledged.",
        tool: { name: "Logs the ETA against the incident", system: "SLA engine" },
      },
      {
        kind: "message",
        from: "customer",
        text: "Arrived",
      },
      {
        kind: "message",
        from: "ai",
        text: "Arrival 11:41 recorded. Status: On site.",
        tool: { name: "Records arrival", system: "SLA engine" },
        completes: ["ack"],
      },
      {
        kind: "card",
        from: "customer",
        card: {
          kind: "photo",
          title: "Field photos",
          subtitle: "Shelter, pole and RCCB panel on arrival",
        },
      },
      {
        kind: "card",
        from: "ai",
        card: {
          kind: "record",
          title: "Evidence filed",
          rows: [
            { label: "Before", value: "3 photos · 11:41–11:43" },
            { label: "After", value: "2 photos · 11:43" },
          ],
        },
        tool: { name: "Matches photos to the incident", system: "Photo store" },
        completes: ["evidence"],
      },
      {
        kind: "message",
        from: "customer",
        text: "Feedback: Power supply failure detected. Action: on arrival RCCB trip. Reset back done. Rectification 16/09/2026 — 1145hrs.",
      },
      {
        kind: "card",
        from: "ai",
        card: {
          kind: "record",
          title: "Rectified — closed within SLA",
          rows: [
            { label: "Action taken", value: "RCCB reset" },
            { label: "Rectified", value: "11:45" },
            { label: "Time to rectify", value: "4 min" },
            { label: "SLA", value: "Closed in 5 min of 60" },
          ],
        },
        tool: { name: "Closes the SLA clock", system: "SLA engine" },
        completes: ["rectify"],
      },
      {
        kind: "message",
        from: "customer",
        text: "@PilotPulse analyze and extract issue",
      },
      {
        kind: "card",
        from: "ai",
        card: {
          kind: "document",
          title: "Issue summary",
          subtitle: "Structured record, ready to report on",
          rows: [
            { label: "Messages", value: "14 → 1 record" },
            { label: "Manual entry", value: "None" },
            { label: "Report", value: "SLA-ready" },
            { label: "Search by", value: "Asset · date · type" },
          ],
        },
        tool: { name: "Completes the structured record", system: "Reporting / exports" },
        completes: ["summary"],
      },
    ],
    result:
      "Command-centre logging drops from about 2.0 FTE to about 0.2 FTE of spot-checking. Example figures from the source demo.",
  },
  {
    id: "recruitment",
    label: "Recruitment",
    icon: "userSearch",
    badge: "CV matching & preparation",
    summary:
      "A live role pulled from the ATS, every applicant scored against one weighted rubric with the evidence quoted back, then the shortlisted CV rebuilt in the agency template for the consultant to approve.",
    checklist: [
      { id: "ats", label: "Connected to the ATS and pulled the live role" },
      { id: "criteria", label: "Extracted weighted criteria from the job description" },
      { id: "validate", label: "Validated the rubric at 100% before scoring" },
      { id: "score", label: "Scored the pipeline against the same rubric" },
      { id: "evidence", label: "Quoted the evidence and named the gaps" },
      { id: "review", label: "Put the draft in front of the consultant" },
      { id: "deliver", label: "Rebuilt the CV in the agency template and wrote it back" },
    ],
    steps: [
      {
        kind: "message",
        from: "customer",
        text: "Rank the applicants for Senior Manager, Digital & Social.",
      },
      {
        kind: "message",
        from: "ai",
        text: "Connected to your ATS. Live role found, shortlist returned with its current status — nothing downloaded, nothing re-uploaded.",
        tool: { name: "ats.connect() · jobs.search()", system: "ATS" },
        completes: ["ats"],
      },
      {
        kind: "card",
        from: "ai",
        card: {
          kind: "document",
          title: "Criteria from the job description",
          subtitle: "Ten weighted criteria — the weightings are yours",
          rows: [
            { label: "Digital and MarTech experience", value: "20%" },
            { label: "Technical expertise", value: "18%" },
            { label: "MarTech strategy", value: "15%" },
            { label: "Leadership and team management", value: "10%" },
            { label: "Coding and development", value: "3%" },
          ],
        },
        tool: { name: "jd.extract_criteria()", system: "Job description" },
        completes: ["criteria"],
      },
      {
        kind: "message",
        from: "ai",
        text: "Rubric validated at 100%. It will not rank a pipeline against a broken rubric.",
        tool: { name: "Validates the rubric", system: "Scoring rubric" },
        completes: ["validate"],
      },
      {
        kind: "card",
        from: "ai",
        card: {
          kind: "record",
          title: "Ranked against one rubric",
          rows: [
            { label: "Vanessa Toh", value: "72" },
            { label: "Chloe Ng", value: "22" },
            { label: "Brian Lim", value: "Not scored yet" },
          ],
        },
        tool: { name: "score.run(candidates, rubric)", system: "Candidate records" },
        completes: ["score"],
      },
      {
        kind: "message",
        from: "customer",
        text: "Why did Vanessa score where she did?",
      },
      {
        kind: "card",
        from: "ai",
        card: {
          kind: "document",
          title: "Evaluation · Vanessa Toh",
          subtitle: "Score, weight and the evidence behind both",
          rows: [
            { label: "Digital and MarTech experience", value: "75 · 20%" },
            { label: "Technical expertise", value: "82 · 18%" },
            { label: "MarTech strategy", value: "68 · 15%" },
            { label: "Leadership and team management", value: "55 · 10%" },
            { label: "Final score", value: "71.79" },
          ],
        },
        tool: { name: "evaluate.per_criterion()", system: "Scoring rubric" },
      },
      {
        kind: "card",
        from: "ai",
        card: {
          kind: "case",
          title: "Gaps named explicitly",
          rows: [
            { label: "Leadership", value: "No evidence of managing people" },
            { label: "Strategy", value: "Operational rather than strategic" },
            { label: "Coding", value: "Python listed as basic, no project" },
            { label: "Channel", value: "No mobile app marketing" },
          ],
        },
        completes: ["evidence"],
      },
      {
        kind: "message",
        from: "ai",
        text: "Moderately matched for this role — or a better fit for a Senior Specialist position. Judged against this job, not in general.",
      },
      {
        kind: "handover",
        direction: "toHuman",
        text: "Draft ready for recruiter review — your consultant edits and approves",
        tool: { name: "Client delivery" },
        completes: ["review"],
      },
      {
        kind: "message",
        from: "customer",
        text: "Approved. Format it for the client.",
      },
      {
        kind: "card",
        from: "ai",
        card: {
          kind: "document",
          title: "CV rebuilt in your template",
          subtitle: "The candidate's own wording, restructured — not regenerated",
          rows: [
            { label: "Sections", value: "Experience · education · certifications" },
            { label: "Interview notes", value: "Merged in" },
            { label: "Exported", value: "PDF and DOCX" },
            { label: "ATS record", value: "Updated" },
          ],
        },
        tool: { name: "template.apply() · ats.update_candidate()", system: "Agency template · ATS" },
        completes: ["deliver"],
      },
    ],
    result:
      "Every applicant scored on one rubric, and about 20 minutes saved on each CV formatted. Example figures from the source demo.",
  },
  {
    id: "construction",
    label: "Construction",
    icon: "hardHat",
    badge: "QS costing",
    summary:
      "A plain-language rate question answered with its source, then a subcontractor claim checked against the attached evidence before submission, assessed by the QS on record, and carried through to payment advice.",
    checklist: [
      { id: "rates", label: "Answered the rate question with year and source" },
      { id: "claim", label: "Checked every claim item against its evidence" },
      { id: "flag", label: "Flagged the figure contradicted by a file" },
      { id: "fix", label: "Took the corrected claim with the record attached" },
      { id: "qs", label: "Put the evidence position in front of the QS" },
      { id: "decision", label: "Recorded the QS assessment and the reason" },
      { id: "payment", label: "Generated payment advice and updated the cost report" },
    ],
    steps: [
      {
        kind: "message",
        from: "customer",
        text: "What did we price rebar at in 2025?",
      },
      {
        kind: "card",
        from: "ai",
        card: {
          kind: "record",
          title: "Mild steel rod reinforcement",
          subtitle: "Every rate with its year, project and source page",
          rows: [
            { label: "8 mm dia · SB154", value: "3.70 / kg" },
            { label: "10 mm dia · SB023A", value: "3.20 / kg" },
            { label: "16 mm dia · SB025A", value: "3.10 / kg" },
            { label: "Source", value: "HDB-SOR-2025.pdf" },
          ],
        },
        tool: { name: "Searches the rate library", system: "Rates & benchmarks" },
        completes: ["rates"],
      },
      {
        kind: "card",
        from: "customer",
        card: {
          kind: "document",
          title: "Subcontractor claim · drafted",
          subtitle: "HVAC works, drafted in the subcontractor's own portal",
          rows: [
            { label: "AHU supply & installation", value: "87.5%" },
            { label: "Ductwork supply & install", value: "80%" },
            { label: "Insulation & lagging", value: "70%" },
            { label: "Other HVAC works", value: "58.6%" },
          ],
        },
      },
      {
        kind: "message",
        from: "ai",
        text: "Checking every work item against the files attached to it, before this is sent.",
        tool: { name: "Checks the claim against its evidence", system: "Document control" },
        completes: ["claim"],
      },
      {
        kind: "card",
        from: "ai",
        card: {
          kind: "case",
          title: "Contradicted by a file",
          subtitle: "Ductwork supply & install",
          rows: [
            { label: "Claimed", value: "S$248,000 · 80%" },
            { label: "File supports", value: "S$230,000 · 74.2%" },
            { label: "Source", value: "Ductwork_Measurement_Aug26.xlsx r11" },
          ],
        },
        completes: ["flag"],
      },
      {
        kind: "card",
        from: "ai",
        card: {
          kind: "case",
          title: "Not supported yet",
          subtitle: "AHU supply & installation",
          rows: [
            { label: "Evidence", value: "Site photo of a suspended unit" },
            { label: "Missing", value: "Inspection record for the claimed level" },
          ],
        },
      },
      {
        kind: "message",
        from: "customer",
        text: "Fixed and the inspection record is attached. Submitting now.",
        tool: { name: "Corrected claim accepted", system: "Procurement & payment" },
        completes: ["fix"],
      },
      {
        kind: "handover",
        direction: "toHuman",
        text: "Over to the QS — every claimed percentage arrives with its evidence position",
        tool: { name: "QS review" },
        completes: ["qs"],
      },
      {
        kind: "card",
        from: "customer",
        card: {
          kind: "record",
          title: "QS assessment",
          subtitle: "The AI advises, the QS decides — reason recorded",
          rows: [
            { label: "HVAC installation", value: "73.8% → 70%" },
            { label: "Electrical containment", value: "60% → 55%" },
            { label: "Plumbing and sanitary", value: "47% → 45%" },
            { label: "Reason", value: "Items without evidence" },
          ],
        },
        completes: ["decision"],
      },
      {
        kind: "message",
        from: "ai",
        text: "Assessment recorded and sent up the approval ladder: QS assessed → PM verified → Manager → Certified.",
        tool: { name: "Routes for approval", system: "Approval ladder" },
      },
      {
        kind: "card",
        from: "ai",
        card: {
          kind: "document",
          title: "Payment advice",
          rows: [
            { label: "Value of work done", value: "S$1,200,500" },
            { label: "Less retention 10%", value: "−S$109,000" },
            { label: "Less previous payments", value: "−S$804,600" },
            { label: "Less back-charge", value: "−S$1,500" },
          ],
        },
        tool: { name: "Generates payment advice · cost report updates live", system: "Cost control" },
        completes: ["payment"],
      },
    ],
    result: "Thirty minutes of digging for a rate becomes under two. Example figures from the source demo.",
  },
];
