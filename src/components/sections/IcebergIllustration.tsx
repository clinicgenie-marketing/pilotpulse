"use client";

import Image from "next/image";
import type { PlatformLayerId } from "@/lib/home-content";
import { platformBehind } from "@/lib/home-content";

const MARKERS: { id: PlatformLayerId; top: string }[] = [
  { id: "01", top: "38%" },
  { id: "02", top: "50%" },
  { id: "03", top: "62%" },
  { id: "04", top: "74%" },
  { id: "05", top: "86%" },
];

export function IcebergIllustration({
  activeId,
  onSelect,
}: {
  activeId: PlatformLayerId | null;
  onSelect: (id: PlatformLayerId) => void;
}) {
  const { iceberg, layers } = platformBehind;

  return (
    <div className="platform-iceberg">
      <div className="platform-iceberg-labels">
        <p className="platform-iceberg-kicker">{iceberg.aboveTitle}</p>
        <p className="platform-iceberg-support">{iceberg.aboveBody}</p>
        <p className="platform-iceberg-kicker platform-iceberg-below-title">{iceberg.belowTitle}</p>
      </div>
      <div className="platform-iceberg-art">
        <Image
          src="/platform/iceberg-lowpoly.jpg"
          alt=""
          width={688}
          height={864}
          className="platform-iceberg-image"
          sizes="(min-width: 900px) 36vw, min(100vw, 22rem)"
        />
        <ol className="platform-iceberg-markers">
          {MARKERS.map((marker) => {
            const layer = layers.find((item) => item.id === marker.id);
            const active = activeId === marker.id;

            return (
              <li key={marker.id} className="platform-marker-slot" style={{ top: marker.top }}>
                <button
                  type="button"
                  className="platform-marker"
                  data-active={active ? "true" : "false"}
                  aria-pressed={active}
                  aria-label={`Show layer ${marker.id}${layer ? `: ${layer.title}` : ""}`}
                  onClick={() => onSelect(marker.id)}
                >
                  {marker.id}
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
