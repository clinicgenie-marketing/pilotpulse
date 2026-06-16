"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";

const FIELD =
  "w-full rounded-xl border border-hairline bg-white/[0.03] px-4 py-3 text-sm text-ink placeholder:text-ink-faint outline-none transition-colors focus:border-[rgba(140,160,255,0.45)] focus:ring-2 focus:ring-brand-blue/40";
const LABEL = "mb-1.5 block text-sm font-medium text-ink";

/**
 * Demo / consultation request form. This reference build captures input and
 * shows a confirmation; wire `onSubmit` to your CRM webhook or form handler
 * (see README) before launch.
 */
export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="glass card-interactive flex flex-col items-center gap-4 rounded-2xl p-8 text-center sm:p-10">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-panel-tile">
          <CheckCircle2 className="h-7 w-7 text-brand-blue" strokeWidth={1.5} />
        </span>
        <h2 className="text-xl font-bold text-ink">Thank you — we&rsquo;ll be in touch</h2>
        <p className="max-w-sm text-sm leading-relaxed text-ink-body">
          We&rsquo;ll review your workflow and reply within one working day to arrange your
          briefing. No generic demos — just a focused first step.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass card-interactive flex flex-col gap-5 rounded-2xl p-6 sm:p-8" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={LABEL}>
            Full name
          </label>
          <input id="name" name="name" type="text" autoComplete="name" required className={FIELD} placeholder="Jane Tan" />
        </div>
        <div>
          <label htmlFor="email" className={LABEL}>
            Work email
          </label>
          <input id="email" name="email" type="email" autoComplete="email" required className={FIELD} placeholder="jane@company.com" />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className={LABEL}>
            Company
          </label>
          <input id="company" name="company" type="text" autoComplete="organization" className={FIELD} placeholder="Company name" />
        </div>
        <div>
          <label htmlFor="role" className={LABEL}>
            Role <span className="text-ink-faint">(optional)</span>
          </label>
          <input id="role" name="role" type="text" autoComplete="organization-title" className={FIELD} placeholder="Operations Lead" />
        </div>
      </div>

      <div>
        <label htmlFor="workflow" className={LABEL}>
          Which workflow is most painful right now?
        </label>
        <textarea
          id="workflow"
          name="workflow"
          rows={4}
          className={`${FIELD} resize-y`}
          placeholder="e.g. handling repeat customer enquiries on WhatsApp, screening CVs, manual SAP data entry…"
        />
      </div>

      <button type="submit" className="btn-primary group mt-1 w-full sm:w-auto">
        <span>Identify my first AI workflow</span>
        <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
      </button>

      <p className="text-xs leading-relaxed text-ink-faint">
        By submitting, you agree to be contacted about your enquiry. We never share your details.
      </p>
    </form>
  );
}
