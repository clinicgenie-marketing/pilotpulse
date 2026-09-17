"use client";

import { useState, type FormEvent } from "react";
import { Rocket } from "lucide-react";
import { contactPage, contactWorkflows } from "@/lib/pages/contact";

export function DemoForm() {
  const [workflow, setWorkflow] = useState("");
  const form = contactPage.form;

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const selectedWorkflow = String(data.get("workflow") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const lines = [
      "Hi PilotPulse, I'd like a demo.",
      name ? `Name: ${name}` : "",
      email ? `Email: ${email}` : "",
      company ? `Company: ${company}` : "",
      selectedWorkflow ? `Workflow: ${selectedWorkflow}` : "",
      message ? `Details: ${message}` : "",
    ].filter(Boolean);

    window.open(
      `${form.whatsappHref}?text=${encodeURIComponent(lines.join("\n"))}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <form onSubmit={onSubmit} className="demo-form" aria-label="Request a demo" noValidate>
      <div className="demo-form-intro">
        <span className="demo-form-intro-icon" aria-hidden="true">
          <Rocket className="h-4 w-4" strokeWidth={1.75} />
        </span>
        <p className="demo-form-intro-copy">
          {form.intro} <strong>{form.introHighlight}</strong>
        </p>
      </div>

      <div className="demo-form-fields">
        <div>
          <label htmlFor="demo-name" className="sr-only">
            {form.name}
          </label>
          <input
            id="demo-name"
            className="pp-input"
            name="name"
            type="text"
            autoComplete="name"
            placeholder={form.placeholders.name}
          />
        </div>
        <div>
          <label htmlFor="demo-email" className="sr-only">
            {form.email}
          </label>
          <input
            id="demo-email"
            className="pp-input"
            name="email"
            type="email"
            autoComplete="email"
            placeholder={form.placeholders.email}
          />
        </div>
        <div>
          <label htmlFor="demo-company" className="sr-only">
            {form.company}
          </label>
          <input
            id="demo-company"
            className="pp-input"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder={form.placeholders.company}
          />
        </div>
        <div>
          <label htmlFor="demo-workflow" className="sr-only">
            {form.workflow}
          </label>
          <select
            id="demo-workflow"
            className={`pp-input pp-select ${workflow ? "" : "is-placeholder"}`}
            name="workflow"
            value={workflow}
            onChange={(event) => setWorkflow(event.target.value)}
          >
            <option value="" disabled>
              {form.placeholders.workflow}
            </option>
            {contactWorkflows.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <p className="demo-form-optional">{form.optional}</p>
      <div>
        <label htmlFor="demo-message" className="sr-only">
          {form.message}
        </label>
        <textarea
          id="demo-message"
          className="pp-textarea"
          name="message"
          rows={4}
          placeholder={form.placeholders.message}
        />
      </div>

      <button type="submit" className="btn-primary group mt-1 w-full">
        <Rocket
          className="h-4 w-4 transition-transform duration-[180ms] ease-out group-hover:-translate-y-1 group-hover:translate-x-1"
          strokeWidth={2}
          aria-hidden="true"
        />
        <span>{form.submit}</span>
      </button>

      <p className="demo-form-note">
        {form.noteBefore}{" "}
        <a href={`mailto:${contactPage.email}`}>{contactPage.email}</a>
      </p>
    </form>
  );
}
