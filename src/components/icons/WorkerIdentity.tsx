import type { WorkerGlyphName } from "@/lib/home-content";

const STROKE = 2.4;
const ENGAGE_SCALE = 0.1021;
const DOCUMENT_SCALE = 0.1143;

const primary = {
  stroke: "var(--pp-primary)",
  strokeWidth: STROKE,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const accent = {
  ...primary,
  stroke: "var(--pp-accent)",
};

function EngageGlyph() {
  return (
    <g className="icon-engage" transform={`translate(1 10.3) scale(${ENGAGE_SCALE})`}>
      <g fill="none" stroke="var(--pp-primary)" strokeWidth={STROKE / ENGAGE_SCALE} strokeLinecap="round" strokeLinejoin="round">
        <path d="M132 55h185c28 0 50 22 50 50v66c0 28-22 50-50 50H203l-61 42 4-42h-14c-28 0-50-22-50-50v-66c0-28 22-50 50-50Z" />
        <rect className="icon-node icon-process" x="8" y="21" width="48" height="48" rx="3" />
        <rect className="icon-node icon-process" x="8" y="108" width="48" height="48" rx="3" />
        <rect className="icon-node icon-process" x="8" y="199" width="48" height="48" rx="3" />
        <rect className="icon-node icon-node-in icon-process" x="407" y="108" width="48" height="48" rx="3" />
        <path className="icon-process" d="M56 45h32l16 17M56 132h26M56 223h32l15-16M367 132h40" />
      </g>
      <g fill="var(--pp-primary)">
        <circle className="icon-dot" cx="168" cy="138" r="17" />
        <circle className="icon-dot" cx="222" cy="138" r="17" />
        <circle className="icon-dot" cx="276" cy="138" r="17" />
      </g>
    </g>
  );
}

function HireGlyph() {
  return (
    <g className="icon-hire">
      <path className="icon-scan icon-process" d="M10 10h6M10 10v6" {...accent} />
      <path className="icon-scan icon-process" d="M38 10h-6M38 10v6" {...accent} />
      <path className="icon-scan icon-process" d="M10 38h6M10 38v-6" {...accent} />
      <path className="icon-scan icon-process" d="M38 38h-6M38 38v-6" {...accent} />
      <circle cx="24" cy="19" r="5" {...primary} />
      <path d="M15.5 34.5c1.1-5 4.1-7.5 8.5-7.5s7.4 2.5 8.5 7.5" {...primary} />
    </g>
  );
}

function DocumentGlyph() {
  return (
    <g className="icon-file" transform={`translate(0.5 6.9) scale(${DOCUMENT_SCALE})`}>
      <g fill="none" stroke="var(--pp-primary)" strokeWidth={STROKE / DOCUMENT_SCALE} strokeLinecap="round" strokeLinejoin="round">
        <path d="M28 28h126l55 56v188H28Z" />
        <path d="M154 28v56h55" />
        <path className="icon-scanline icon-process" d="M67 119h101M67 160h101M67 201h101" />
        <rect className="icon-node icon-node-in icon-process" x="347" y="48" width="49" height="49" rx="3" />
        <rect className="icon-node icon-node-in icon-process" x="347" y="126" width="49" height="49" rx="3" />
        <rect className="icon-node icon-node-in icon-process" x="347" y="221" width="49" height="49" rx="3" />
        <path className="icon-process" d="M209 84h43l47-36h48M209 150h138M209 201h43l47 45h48" />
      </g>
    </g>
  );
}

function ServerGlyph() {
  return (
    <g className="icon-secure">
      <path
        d="M24 8.5 37.5 14.5v10c0 7.8-6 12.2-13.5 14.5C17 36.7 10.5 32.3 10.5 24.5v-10L24 8.5Z"
        {...primary}
      />
      <path className="icon-shield icon-process" d="M24 17.5v9.5M19.5 22.5h9" {...accent} />
    </g>
  );
}

function BriefcaseGlyph() {
  return (
    <g className="icon-cto">
      <path d="M10 32 18.5 21.5 27 26 38 15" {...primary} />
      <circle className="icon-road-node icon-process" cx="10" cy="32" r="2.2" {...accent} />
      <circle className="icon-road-node icon-process" cx="18.5" cy="21.5" r="2.2" {...accent} />
      <circle className="icon-road-node icon-process" cx="27" cy="26" r="2.2" {...accent} />
      <circle className="icon-road-node icon-process" cx="38" cy="15" r="2.2" {...accent} />
    </g>
  );
}

function CompassGlyph() {
  return (
    <g className="icon-audit">
      <g className="icon-audit-lines">
        <path className="icon-line icon-process" d="M8 16H23" {...primary} />
        <path className="icon-line icon-process" d="M8 24H23" {...primary} />
        <path className="icon-line icon-process" d="M8 32H23" {...primary} />
      </g>
      <g className="icon-glass">
        <circle cx="29" cy="24" r="8.8" {...primary} />
        <path className="icon-process" d="M35.2 30.2 41.2 36.2" {...primary} />
      </g>
    </g>
  );
}

function VoiceGlyph() {
  return (
    <g className="icon-voice">
      <path className="icon-arc icon-process" d="M9.86 38.14A20 20 0 0 1 9.86 9.86" {...primary} />
      <circle className="icon-node" cx="9.86" cy="9.86" r="2.15" {...primary} />
      <path className="icon-arc icon-process" d="M38.14 9.86A20 20 0 0 1 38.14 38.14" {...primary} />
      <rect className="icon-node icon-node-in icon-process" x="35.54" y="35.54" width="5.2" height="5.2" rx="0.7" {...primary} />
      <g className="icon-voice-bars" fill="var(--pp-primary)">
        <rect className="icon-wave" x="11.45" y="19.4" width="3.1" height="9.2" rx="1.55" />
        <rect className="icon-wave" x="16.95" y="15.8" width="3.1" height="16.4" rx="1.55" />
        <rect className="icon-wave" x="22.45" y="10.8" width="3.1" height="26.4" rx="1.55" />
        <rect className="icon-wave" x="27.95" y="15.8" width="3.1" height="16.4" rx="1.55" />
        <rect className="icon-wave" x="33.45" y="19.4" width="3.1" height="9.2" rx="1.55" />
      </g>
    </g>
  );
}

const GLYPHS: Record<WorkerGlyphName, () => JSX.Element> = {
  message: EngageGlyph,
  userSearch: HireGlyph,
  file: DocumentGlyph,
  phone: VoiceGlyph,
  server: ServerGlyph,
  briefcase: BriefcaseGlyph,
  compass: CompassGlyph,
};

export function WorkerIdentity({
  name,
  product,
  variant = "frame",
}: {
  name: WorkerGlyphName;
  product: string;
  variant?: "frame" | "tile";
}) {
  const Glyph = GLYPHS[name];
  const tile = variant === "tile";

  return (
    <span className={tile ? "worker-tile" : "worker-frame"}>
      {tile ? null : <span className="worker-orbit" aria-hidden="true" />}
      <svg
        width={tile ? 96 : 40}
        height={tile ? 96 : 40}
        viewBox="0 0 48 48"
        fill="none"
        className="solution-icon relative z-10"
        role="img"
        aria-label={`${product} identity mark`}
      >
        <Glyph />
      </svg>
    </span>
  );
}
