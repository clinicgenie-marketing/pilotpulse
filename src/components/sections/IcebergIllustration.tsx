"use client";

import Image from "next/image";
import type { PlatformLayerId } from "@/lib/home-content";
import { platformBehind } from "@/lib/home-content";

/**
 * Marker coordinates are percentages of the 1024x1024 source image box, not of the
 * section, so they track the artwork at every scale. Measured against the asset:
 * the waterline sits at ~28.6% and the submerged body runs from ~29% to ~88%.
 */
const WATERLINE_PCT = 28.6;

const MARKERS: { id: PlatformLayerId; top: number; left: number }[] = [
  { id: "01", top: 18.5, left: 49 }, // exposed peak, clearly above the waterline
  { id: "02", top: 36, left: 49 },
  { id: "03", top: 49.5, left: 49 },
  { id: "04", top: 63, left: 49 },
  { id: "05", top: 76.5, left: 49 },
];

export function IcebergIllustration({
  activeId,
  onSelect,
  tablistId,
  panelId,
  tabId,
}: {
  activeId: PlatformLayerId;
  onSelect: (id: PlatformLayerId) => void;
  tablistId: string;
  panelId: string;
  tabId: (id: PlatformLayerId) => string;
}) {
  const { layers } = platformBehind;

  function onKeyDown(event: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    const last = MARKERS.length - 1;
    let next = index;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") next = index === last ? 0 : index + 1;
    else if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = index === 0 ? last : index - 1;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = last;
    else return;

    event.preventDefault();
    const target = MARKERS[next].id;
    onSelect(target);
    // Focus follows selection, so the selected control keeps keyboard focus.
    document.getElementById(tabId(target))?.focus();
  }

  return (
    <div className="platform-iceberg">
      <div className="platform-iceberg-art">
        <Image
          src="/platform/iceberg-lowpoly.jpg"
          alt="Iceberg diagram: one layer visible above the waterline, four layers below it."
          width={1024}
          height={1024}
          className="platform-iceberg-image"
          sizes="(min-width: 1024px) 32vw, min(100vw, 24rem)"
        />
        <div
          className="platform-iceberg-markers"
          role="tablist"
          id={tablistId}
          aria-label="AI architecture layers"
          aria-orientation="vertical"
        >
          {MARKERS.map((marker, index) => {
            const layer = layers.find((item) => item.id === marker.id);
            const active = activeId === marker.id;

            return (
              <button
                key={marker.id}
                id={tabId(marker.id)}
                type="button"
                role="tab"
                className="platform-marker"
                style={{ top: `${marker.top}%`, left: `${marker.left}%` }}
                data-active={active ? "true" : "false"}
                data-submerged={marker.top > WATERLINE_PCT ? "true" : "false"}
                aria-selected={active}
                aria-controls={panelId}
                tabIndex={active ? 0 : -1}
                onClick={() => onSelect(marker.id)}
                onKeyDown={(event) => onKeyDown(event, index)}
              >
                <span className="platform-marker-number">{marker.id}</span>
                <span className="sr-only">{layer ? `: ${layer.title}` : ""}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
