"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import {
  Building2,
  Clock3,
  Headphones,
  Mail,
  MessageCircle,
  MoreHorizontal,
  Truck,
  User,
  UserSearch,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { CTAButton } from "@/components/ui/CTAButton";
import { contactPage, contactWorkflows } from "@/lib/pages/contact";
import { innerFinalCta } from "@/lib/pages/shared";

const WORKFLOW_ICONS: Record<(typeof contactWorkflows)[number], LucideIcon> = {
  "Customer engagement": MessageCircle,
  Recruitment: UserSearch,
  Support: Headphones,
  Logistics: Truck,
  Other: MoreHorizontal,
};

export function DemoForm() {
  const [workflow, setWorkflow] = useState<(typeof contactWorkflows)[number]>(contactWorkflows[0]);
  const form = contactPage.form;

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form onSubmit={onSubmit} className="demo-form" aria-label="Request a demo" noValidate>
      <header className="demo-form-head">
        <p className="eyebrow">{form.eyebrow}</p>
        <h2 className="heading-4 mt-2 text-ink">{form.heading}</h2>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">{form.intro}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {innerFinalCta.trustChips.map((chip) => (
            <li key={chip} className="trust-chip">
              {chip}
            </li>
          ))}
        </ul>
      </header>

      <div className="demo-form-body">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label={form.name} icon={User}>
            <input
              className="pp-input pp-input-icon"
              name="name"
              type="text"
              autoComplete="name"
              placeholder={form.placeholders.name}
            />
          </Field>
          <Field label={form.email} icon={Mail}>
            <input
              className="pp-input pp-input-icon"
              name="email"
              type="email"
              autoComplete="email"
              placeholder={form.placeholders.email}
            />
          </Field>
        </div>

        <Field label={form.company} icon={Building2}>
          <input
            className="pp-input pp-input-icon"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder={form.placeholders.company}
          />
        </Field>

        <fieldset>
          <legend className="mb-2.5 text-sm font-semibold text-ink">{form.workflow}</legend>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {contactWorkflows.map((option) => {
              const active = option === workflow;
              const Icon = WORKFLOW_ICONS[option];
              return (
                <label key={option} className="min-w-0">
                  <input
                    type="radio"
                    name="workflow"
                    value={option}
                    checked={active}
                    onChange={() => setWorkflow(option)}
                    className="sr-only"
                  />
                  <span className={`workflow-chip ${active ? "is-active" : ""}`}>
                    <Icon className="h-3.5 w-3.5 shrink-0" strokeWidth={1.75} aria-hidden="true" />
                    <span className="truncate">{option}</span>
                  </span>
                </label>
              );
            })}
          </div>
        </fieldset>

        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-ink">{form.message}</span>
          <textarea
            className="pp-textarea"
            name="message"
            rows={4}
            placeholder={form.placeholders.message}
          />
        </label>

        <div className="mt-1 space-y-3">
          <CTAButton href={form.demoHref} external className="w-full">
            {form.submit}
          </CTAButton>
          <a
            href={form.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary group w-full"
          >
            <WhatsAppGlyph />
            {form.whatsapp}
          </a>
        </div>

        <p className="demo-form-note">
          <span className="size-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
          <Clock3 className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
          {form.note}
        </p>
      </div>
    </form>
  );
}

function WhatsAppGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.02Zm-7.01 15.24h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.41a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.23 8.23Zm4.51-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.15.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.29Z" />
    </svg>
  );
}

function Field({
  label,
  icon: Icon,
  children,
}: {
  label: string;
  icon: LucideIcon;
  children: ReactNode;
}) {
  return (
    <label className="pp-field block">
      <span className="mb-1.5 block text-sm font-semibold text-ink">{label}</span>
      <span className="pp-field-control">
        <Icon className="pp-field-icon" strokeWidth={1.75} aria-hidden="true" />
        {children}
      </span>
    </label>
  );
}
