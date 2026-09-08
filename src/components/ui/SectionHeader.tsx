import type { ReactNode } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { GradientText } from "@/components/ui/GradientText";

type SectionHeaderProps = {
  eyebrow?: string;
  headingWhite?: string;
  headingGradient?: string;
  headingPost?: string;
  heading?: ReactNode;
  sub?: string;
  align?: "left" | "center";
  tone?: "default" | "inverse";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  headingWhite,
  headingGradient,
  headingPost,
  heading,
  sub,
  align = "left",
  tone = "default",
  className = "",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "items-center text-center" : "items-start text-left";
  const headingClass = tone === "inverse" ? "heading-2 text-white" : "heading-2";
  const subClass = tone === "inverse" ? "lead max-w-3xl whitespace-pre-line text-white/85" : "lead max-w-3xl whitespace-pre-line";
  const highlightTone = tone === "inverse" ? "inverse" : "primary";

  return (
    <div className={`section-intro flex flex-col gap-4 ${alignClass} ${className}`.trim()}>
      {eyebrow && (
        <Eyebrow className={tone === "inverse" ? "text-white/80" : undefined}>{eyebrow}</Eyebrow>
      )}
      <h2 className={headingClass}>
        {heading ? (
          heading
        ) : (
          <>
            {headingWhite}
            {headingGradient && <GradientText tone={highlightTone}>{headingGradient}</GradientText>}
            {headingPost && <span className="block">{headingPost}</span>}
          </>
        )}
      </h2>
      {sub && <p className={subClass}>{sub}</p>}
    </div>
  );
}
