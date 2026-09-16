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

export function IcebergIllustration({ activeId }: { activeId: PlatformLayerId | null }) {
  const { iceberg } = platformBehind;

  return (
    <div className="platform-iceberg">
      <div className="platform-iceberg-art">
        <Image
          src="/platform/iceberg-lowpoly.jpg"
          alt=""
          width={688}
          height={864}
          className="platform-iceberg-image"
          sizes="(min-width: 900px) 36vw, min(100vw, 22rem)"
        />
        <div className="platform-iceberg-label platform-iceberg-label-above">
          <p className="platform-iceberg-kicker">{iceberg.aboveTitle}</p>
          <p className="platform-iceberg-support">{iceberg.aboveBody}</p>
        </div>
        <p className="platform-iceberg-label platform-iceberg-label-below">
          <span className="platform-iceberg-kicker">{iceberg.belowTitle}</span>
        </p>
        <ol className="platform-iceberg-markers" aria-hidden="true">
          {MARKERS.map((marker) => (
            <li
              key={marker.id}
              className="platform-marker"
              data-active={activeId === marker.id ? "true" : "false"}
              style={{ top: marker.top }}
            >
              {marker.id}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
