"use client";

import { useCallback, useId, useLayoutEffect, useState, type KeyboardEvent, type ReactNode } from "react";
import { Check } from "lucide-react";
import { DIGITAL_WORKER_ICONS } from "@/components/sections/digitalWorkerIcons";
import { digitalWorkerOfferingAliases, type DigitalWorkerOffering } from "@/lib/home-content";

function offeringFromHash(offerings: readonly DigitalWorkerOffering[]) {
  const raw = window.location.hash.replace(/^#/, "");
  const hash = digitalWorkerOfferingAliases[raw] ?? raw;
  return offerings.find((offering) => offering.id === hash);
}

function buttonLabel(title: string) {
  return title.replace(/ AI$/, "");
}

function useCaseChips(examples: readonly string[]) {
  const first = examples[0];
  if (!first) return [];

  return first
    .split(/\.\s/)[0]
    .split(/,\s+|\s+and\s+/)
    .map((item) => item.replace(/\.+$/, "").trim())
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
    .filter((item) => item.length >= 4 && item.length <= 40)
    .slice(0, 6);
}

function channelChips(channels?: string) {
  if (!channels) return [];
  return channels.split(" · ").map((item) => item.trim()).filter(Boolean);
}

export function DigitalWorkerShowcase({
  id,
  eyebrow,
  heading,
  lead,
  offerings,
}: {
  id: string;
  eyebrow: string;
  heading: ReactNode;
  lead: string;
  offerings: readonly DigitalWorkerOffering[];
}) {
  const tabIds = useId();
  const headingId = `${tabIds}-heading`;
  const [selectedId, setSelectedId] = useState(offerings[0].id);
  const selected = offerings.find((offering) => offering.id === selectedId) ?? offerings[0];
  const Icon = DIGITAL_WORKER_ICONS[selected.icon];
  const cases = useCaseChips(selected.examples);
  const channels = channelChips(selected.channels);

  useLayoutEffect(() => {
    const applyHash = () => {
      const raw = window.location.hash.replace(/^#/, "");
      const offering = offeringFromHash(offerings);
      if (!offering) return;
      setSelectedId(offering.id);
      if (raw && raw !== offering.id) {
        window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}#${offering.id}`);
      }
      document.getElementById(id)?.scrollIntoView({ block: "start" });
    };

    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, [id, offerings]);

  const select = useCallback((nextId: string) => {
    setSelectedId(nextId);
    const url = `${window.location.pathname}${window.location.search}#${nextId}`;
    window.history.replaceState(null, "", url);
  }, []);

  function onTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const last = offerings.length - 1;
    let next = index;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") next = index === last ? 0 : index + 1;
    else if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = index === 0 ? last : index - 1;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = last;
    else return;

    event.preventDefault();
    const nextOffering = offerings[next];
    select(nextOffering.id);
    document.getElementById(nextOffering.id)?.focus();
  }

  return (
    <section
      id={id}
      className="dw-showcase-section section-pad scroll-mt-28 overflow-visible border-b border-line bg-background"
      aria-labelledby={headingId}
    >
      <div className="container-edge">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="eyebrow">{eyebrow}</p>
          <h2 id={headingId} className="heading-2 mt-3">
            {heading}
          </h2>
          <p className="lead mt-4">{lead}</p>
        </div>

        <div className="dw-showcase">
          <div role="tablist" aria-label="Digital Workers" className="dw-showcase-tabs">
            {offerings.map((offering, index) => {
              const TabIcon = DIGITAL_WORKER_ICONS[offering.icon];
              const isSelected = offering.id === selected.id;

              return (
                <button
                  key={offering.id}
                  id={offering.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls={`${offering.id}-panel`}
                  tabIndex={isSelected ? 0 : -1}
                  className={isSelected ? "dw-showcase-tab is-active" : "dw-showcase-tab"}
                  onClick={() => select(offering.id)}
                  onKeyDown={(event) => onTabKeyDown(event, index)}
                >
                  <TabIcon className="h-3.5 w-3.5" aria-hidden="true" />
                  {buttonLabel(offering.title)}
                </button>
              );
            })}
          </div>

          <article
            key={selected.id}
            id={`${selected.id}-panel`}
            role="tabpanel"
            aria-labelledby={selected.id}
            className="dw-showcase-card"
          >
            <div className="dw-showcase-main">
              <div className="dw-showcase-top">
                <span className="dw-showcase-icon" aria-hidden="true">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <p className="dw-showcase-index">Digital Worker {selected.number}</p>
              </div>
              <h3 className="dw-showcase-title">{selected.title}</h3>
              <p className="dw-showcase-headline">{selected.headline}</p>
              {cases.length > 0 ? (
                <ul className="dw-showcase-chips" aria-label="In use for">
                  {cases.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </div>

            <div className="dw-showcase-detail">
              {selected.does ? (
                <div>
                  <p className="dw-showcase-kicker">What it does</p>
                  <p className="dw-showcase-does">{selected.does}</p>
                </div>
              ) : null}

              <div>
                <p className="dw-showcase-kicker">What it handles</p>
                <ul className="dw-showcase-points">
                  {selected.bullets.map((bullet) => (
                    <li key={bullet}>
                      <span className="dw-showcase-tick" aria-hidden="true">
                        <Check className="h-2.5 w-2.5" strokeWidth={3} />
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {channels.length > 0 ? (
                <div className="dw-showcase-channels">
                  <p className="dw-showcase-kicker">Channels</p>
                  <ul className="dw-showcase-chips">
                    {channels.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
