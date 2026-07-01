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
  className?: string;
};

/** Eyebrow + two-tone heading + optional sub — Micron-style section intro. */
export function SectionHeader({
  eyebrow,
  headingWhite,
  headingGradient,
  headingPost,
  heading,
  sub,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`section-intro flex flex-col gap-4 ${alignClass} ${className}`.trim()}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="heading-2">
        {heading ? (
          heading
        ) : (
          <>
            {headingWhite}
            {headingGradient && <GradientText>{headingGradient}</GradientText>}
            {headingPost && <span className="block">{headingPost}</span>}
          </>
        )}
      </h2>
      {sub && <p className="lead max-w-3xl whitespace-pre-line">{sub}</p>}
    </div>
  );
}
