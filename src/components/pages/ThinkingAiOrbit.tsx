import { FileText, Package, Route, ShieldAlert, Shuffle } from "lucide-react";
import type { CSSProperties, ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

const ICONS: LucideIcon[] = [Package, Shuffle, ShieldAlert, Route, FileText];

const VIEW_W = 1440;
const VIEW_H = 720;
const CX = 1220;
const CY = 380;
const CORE_R = 175;

function point(radius: number, deg: number) {
  const rad = (deg * Math.PI) / 180;
  return {
    x: CX + radius * Math.cos(rad),
    y: CY - radius * Math.sin(rad),
  };
}

const RINGS = [250, 400, 560, 740, 920] as const;

const NODES = [
  { r: 740, deg: 158, featured: false, label: "above" },
  { r: 560, deg: 172, featured: true, label: "above" },
  { r: 400, deg: 145, featured: false, label: "above" },
  { r: 720, deg: 200, featured: false, label: "below" },
  { r: 400, deg: 210, featured: false, label: "below" },
] as const;

export function ThinkingAiOrbit({
  eyebrow,
  heading,
  lead,
  examples,
}: {
  eyebrow: string;
  heading: ReactNode;
  lead: string;
  examples: readonly string[];
}) {
  return (
    <div className="thinking-orbit">
      <div className="container-edge thinking-orbit-copy">
        <p className="eyebrow">{eyebrow}</p>
        <p className="thinking-orbit-lead">{lead}</p>
      </div>

      <div className="thinking-orbit-stage">
        <div
          className="thinking-orbit-canvas"
          style={
            {
              "--orbit-cx": `${(CX / VIEW_W) * 100}%`,
              "--orbit-cy": `${(CY / VIEW_H) * 100}%`,
              "--orbit-core": `${((CORE_R * 2) / VIEW_W) * 100}%`,
            } as CSSProperties
          }
        >
          <svg
            className="thinking-orbit-svg"
            viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
            fill="none"
            aria-hidden="true"
          >
            <clipPath id="thinking-orbit-clip">
              <rect x="0" y="0" width={CX} height={VIEW_H} />
            </clipPath>
            <g clipPath="url(#thinking-orbit-clip)">
              {RINGS.map((radius) => (
                <circle key={radius} cx={CX} cy={CY} r={radius} />
              ))}
            </g>
          </svg>

          <ul className="thinking-orbit-nodes">
            {examples.map((example, index) => {
              const layout = NODES[index] ?? NODES[0];
              const Icon = ICONS[index] ?? Package;
              const { x, y } = point(layout.r, layout.deg);
              const featuredClass = layout.featured ? " thinking-orbit-node--featured" : "";
              const labelClass = layout.label === "below" ? " thinking-orbit-node--below" : "";
              return (
                <li
                  key={example}
                  className={`thinking-orbit-node${featuredClass}${labelClass}`}
                  style={{ left: `${(x / VIEW_W) * 100}%`, top: `${(y / VIEW_H) * 100}%` }}
                >
                  <span className="thinking-orbit-dot" aria-hidden="true">
                    <Icon className="h-3.5 w-3.5" strokeWidth={1.75} />
                  </span>
                  <p>{example}</p>
                </li>
              );
            })}
          </ul>

          <div className="thinking-orbit-core">
            <h2 className="thinking-orbit-core-title">{heading}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
