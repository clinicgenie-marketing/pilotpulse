import { ArrowLeft } from "lucide-react";
import { Check } from "lucide-react";

const BOOKING_THREAD = [
  { from: "in", text: "Can I book Thursday 2:30pm with Dr Lim?", time: "10:32 AM" },
  {
    from: "out",
    text: "Thursday 2:30pm is free. Shall I book it and send a confirmation?",
    time: "10:32 AM",
  },
  { from: "status", text: "Calendar checked · CRM record matched" },
  { from: "in", text: "Yes please.", time: "10:33 AM" },
  {
    from: "out",
    text: "Booked. Confirmation sent, reminder scheduled for Wednesday 9am.",
    time: "10:33 AM",
  },
] as const;

export function WhatsAppBookingMock({
  name = "Dr Lim's Clinic",
  status = "Last online just now",
  initials = "DL",
}: {
  name?: string;
  status?: string;
  initials?: string;
} = {}) {
  return (
    <div className="chat-mock" aria-label={`${name} conversation`}>
      <header className="chat-mock-head">
        <span className="chat-mock-back" aria-hidden="true">
          <ArrowLeft strokeWidth={1.75} />
        </span>
        <div className="min-w-0 text-center">
          <p className="truncate text-sm font-semibold text-ink">{name}</p>
          <p className="truncate text-[11px] text-ink-faint">{status}</p>
        </div>
        <span className="chat-mock-avatar" aria-hidden="true">
          {initials}
        </span>
      </header>

      <div className="chat-mock-thread">
        {BOOKING_THREAD.map((item) => {
          if (item.from === "status") {
            return (
              <p key={item.text} className="chat-mock-status">
                {item.text}
              </p>
            );
          }

          const incoming = item.from === "in";
          return (
            <div
              key={`${item.time}-${item.text}`}
              className={`flex flex-col gap-1 ${incoming ? "items-start" : "items-end"}`}
            >
              <p className={incoming ? "chat-bubble-in" : "chat-bubble-out"}>{item.text}</p>
              <time className={`chat-mock-time ${incoming ? "pl-3" : "pr-3"}`}>{item.time}</time>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function QuotationMock() {
  return (
    <div className="quote-ticket-stage">
      <article className="quote-ticket" aria-label="Carpark leasing quotation">
        <header className="quote-ticket-head">
          <div className="min-w-0">
            <span className="quote-ticket-logo" aria-hidden="true" />
            <p className="quote-ticket-kicker">Carpark leasing quotation</p>
          </div>
          <p className="quote-ticket-meta">Drafted by AI worker</p>
        </header>

        <div className="quote-ticket-cols" aria-hidden="true">
          <span>Description</span>
          <span>Subtotal</span>
        </div>

        <ul className="quote-ticket-lines">
          <li>
            <span>Lot B-12, 6 months</span>
            <span>S$1,280 / mo</span>
          </li>
          <li>
            <span>Access cards × 2</span>
            <span>S$40</span>
          </li>
          <li>
            <span>Deposit</span>
            <span>S$1,280</span>
          </li>
          <li className="quote-ticket-total">
            <span>Total</span>
            <span>S$2,600</span>
          </li>
        </ul>

        <p className="quote-ticket-stub">Retrieved from ERP</p>
      </article>
    </div>
  );
}

export { CandidateShortlistMock } from "@/components/pages/CandidateShortlistMock";

export function TickList({
  items,
  className = "",
}: {
  items: readonly string[];
  className?: string;
}) {
  return (
    <ul className={`mt-4 space-y-2 ${className}`.trim()}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 text-base text-ink">
          <span className="check-tick mt-0.5">
            <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
