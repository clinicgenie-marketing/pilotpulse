import type { ReactNode } from "react";
import type { SolutionIconName } from "@/lib/home-content";

type IconProps = {
  className?: string;
  size?: number;
};

const SIZE = 24;
const SW = 2.4;

function Mark({
  children,
  className,
  size = SIZE,
}: {
  children: ReactNode;
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      overflow="visible"
      className={`solution-icon ${className ?? ""}`.trim()}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const primary = {
  stroke: "var(--pp-primary)",
  strokeWidth: SW,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function MessageIcon({ className, size }: IconProps) {
  return (
    <Mark size={size} className={`icon-engage ${className ?? ""}`}>
      <circle className="icon-node icon-process" cx="3.4" cy="8.2" r="1.15" {...primary} />
      <circle className="icon-node icon-process" cx="3.4" cy="12" r="1.15" {...primary} />
      <circle className="icon-node icon-process" cx="3.4" cy="15.8" r="1.15" {...primary} />
      <path d="M8.2 6.8h11.2v8.4h-5.4L8.2 18.4V6.8Z" {...primary} />
      <path className="icon-process" d="M10.6 10h6.2M10.6 12.6h4.2" {...primary} />
    </Mark>
  );
}

function UserSearchIcon({ className, size }: IconProps) {
  return (
    <Mark size={size} className={`icon-hire ${className ?? ""}`}>
      <path className="icon-scan icon-process" d="M4.4 4.4h3.2M4.4 4.4v3.2" {...primary} />
      <path className="icon-scan icon-process" d="M19.6 4.4h-3.2M19.6 4.4v3.2" {...primary} />
      <path className="icon-scan icon-process" d="M4.4 19.6h3.2M4.4 19.6v-3.2" {...primary} />
      <path className="icon-scan icon-process" d="M19.6 19.6h-3.2M19.6 19.6v-3.2" {...primary} />
      <circle cx="12" cy="9.2" r="2.5" {...primary} />
      <path d="M8.2 17.2c.5-2.4 1.9-3.6 3.8-3.6s3.3 1.2 3.8 3.6" {...primary} />
    </Mark>
  );
}

function FileIcon({ className, size }: IconProps) {
  return (
    <Mark size={size} className={`icon-file ${className ?? ""}`}>
      <path d="M7.2 4.2h6.2L16.8 7.6v12.2H7.2V4.2Z" {...primary} />
      <path d="M13.4 4.2v3.4h3.4" {...primary} />
      <path className="icon-scanline icon-process" d="M9.2 9.2h5.8" {...primary} />
    </Mark>
  );
}

function PhoneIcon({ className, size }: IconProps) {
  return (
    <Mark size={size} className={`icon-voice ${className ?? ""}`}>
      <circle cx="12" cy="12" r="8" {...primary} />
      <path className="icon-wave icon-process" d="M9.2 14.2v-4.4" {...primary} />
      <path className="icon-wave icon-process" d="M12 15.6V8.4" {...primary} />
      <path className="icon-wave icon-process" d="M14.8 14.2v-4.4" {...primary} />
    </Mark>
  );
}

function ServerIcon({ className, size }: IconProps) {
  return (
    <Mark size={size} className={`icon-secure ${className ?? ""}`}>
      <path
        d="M12 3.8 19.2 7v5.4c0 4.2-3.2 6.6-7.2 7.8-4-1.2-7.2-3.6-7.2-7.8V7L12 3.8Z"
        {...primary}
      />
      <path className="icon-shield icon-process" d="M12 8.2v5.2M9.8 10.8h4.4" {...primary} />
    </Mark>
  );
}

function BriefcaseIcon({ className, size }: IconProps) {
  return (
    <Mark size={size} className={`icon-cto ${className ?? ""}`}>
      <path d="M4.4 16.4 9.2 10.6 14 13.2 19.6 7.2" {...primary} />
      <circle className="icon-road-node icon-process" cx="4.4" cy="16.4" r="1.25" {...primary} />
      <circle className="icon-road-node icon-process" cx="9.2" cy="10.6" r="1.25" {...primary} />
      <circle className="icon-road-node icon-process" cx="14" cy="13.2" r="1.25" {...primary} />
      <circle className="icon-road-node icon-process" cx="19.6" cy="7.2" r="1.25" {...primary} />
    </Mark>
  );
}

function CompassIcon({ className, size }: IconProps) {
  return (
    <Mark size={size} className={`icon-audit ${className ?? ""}`}>
      <path d="M3.6 8.2h6.2M3.6 12h4.8M3.6 15.8h5.4" {...primary} />
      <g className="icon-glass">
        <circle cx="15.4" cy="11.2" r="4.2" {...primary} />
        <path className="icon-process" d="M18.4 14.4 21 17.2" {...primary} />
      </g>
    </Mark>
  );
}

const ICONS: Record<SolutionIconName, (props: IconProps) => JSX.Element> = {
  message: MessageIcon,
  userSearch: UserSearchIcon,
  file: FileIcon,
  phone: PhoneIcon,
  server: ServerIcon,
  briefcase: BriefcaseIcon,
  compass: CompassIcon,
};

export function SolutionIcon({
  name,
  className,
  size,
}: {
  name: SolutionIconName;
  className?: string;
  size?: number;
}) {
  const Icon = ICONS[name];
  return <Icon className={className} size={size} />;
}
