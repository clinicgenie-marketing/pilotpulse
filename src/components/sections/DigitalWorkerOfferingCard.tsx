"use client";

import { useId, useState } from "react";
import { Check, Minus, Plus } from "lucide-react";
import { DIGITAL_WORKER_ICONS } from "@/components/sections/digitalWorkerIcons";
import type { DigitalWorkerOffering } from "@/lib/home-content";

export function DigitalWorkerOfferingCard({ offering }: { offering: DigitalWorkerOffering }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const Icon = DIGITAL_WORKER_ICONS[offering.icon];
  const label = `DIGITAL WORKER ${offering.number}`;

  return (
    <article className="workforce-profile dw-offering-card">
      <div className="dw-offering-main">
        <p className="dw-offering-label">{label}</p>

        <span className="dw-offering-icon" aria-hidden="true">
          <Icon className="h-12 w-12" strokeWidth={1.75} />
        </span>

        <h3 className="dw-offering-title">{offering.title}</h3>
        <p className="dw-offering-headline">{offering.headline}</p>

        <hr className="workforce-profile-rule dw-offering-rule" />

        <ul className="dw-offering-points">
          {offering.bullets.map((bullet) => (
            <li key={bullet}>
              <span className="workforce-point-tick" aria-hidden="true">
                <Check className="h-2.5 w-2.5" strokeWidth={3} />
              </span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        <div className="dw-offering-channels">
          {offering.channels ? (
            <p>
              <span className="dw-offering-channels-label">Channels</span>
              {offering.channels}
            </p>
          ) : null}
        </div>

        <div className="dw-offering-foot">
          <hr className="workforce-profile-rule dw-offering-rule" />
          <button
            type="button"
            className="dw-offering-toggle"
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? (
              <Minus className="h-4 w-4" strokeWidth={2.25} aria-hidden="true" />
            ) : (
              <Plus className="h-4 w-4" strokeWidth={2.25} aria-hidden="true" />
            )}
            {open ? "Hide examples" : "View examples"}
          </button>
        </div>
      </div>

      <div id={panelId} className="dw-offering-examples" hidden={!open}>
        {offering.examples.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
