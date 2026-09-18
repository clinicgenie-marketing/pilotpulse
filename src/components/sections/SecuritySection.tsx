import { Eye, Lock, MapPin, ScrollText, Server } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { security } from "@/lib/home-content";

const DEFAULT_ICONS = [Lock, MapPin, Eye, ScrollText];

export type SecurityItem = {
  title: string;
  body: string;
  icon?: LucideIcon;
};

type SecuritySectionProps = {
  id?: string;
  eyebrow?: string;
  heading?: string;
  headingLine?: string;
  headingHighlight?: string;
  items?: SecurityItem[];
};

export function SecuritySection({
  id = "security",
  eyebrow = security.eyebrow,
  heading = security.heading,
  headingLine = security.headingLine,
  headingHighlight,
  items = security.items,
}: SecuritySectionProps) {
  const icons = items.length > 4 ? [Lock, MapPin, ScrollText, Eye, Server] : DEFAULT_ICONS;
  const gridClass =
    items.length >= 5
      ? "grid flex-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
      : "grid flex-1 gap-6 sm:grid-cols-2 lg:grid-cols-4";

  return (
    <section id={id} className="border-b border-line bg-background-alt py-14">
      <div className="container-edge flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-sm">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="heading-3 mt-3">
            {headingHighlight ? (
              <>
                {heading} <span className="heading-gradient">{headingHighlight}</span>
              </>
            ) : (
              <>
                {heading}
                <span className="block heading-gradient">{headingLine}</span>
              </>
            )}
          </h2>
        </div>
        <ul className={gridClass}>
          {items.map((item, index) => {
            const Icon = item.icon ?? icons[index] ?? Lock;
            const tiled = items.length >= 5;
            return (
              <li key={item.title} className="flex flex-col items-start gap-3">
                {tiled ? (
                  <span className="grid size-10 place-items-center rounded-lg bg-primary-soft">
                    <Icon className="h-5 w-5 text-primary" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                ) : (
                  <Icon className="h-7 w-7 text-primary" aria-hidden="true" />
                )}
                <div>
                  <p className="text-base font-semibold text-ink">{item.title}</p>
                  <p className="mt-0.5 text-sm text-ink-muted">{item.body}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
