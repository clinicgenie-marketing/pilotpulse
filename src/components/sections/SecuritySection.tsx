import { Eye, Lock, MapPin, ScrollText } from "lucide-react";
import { security } from "@/lib/home-content";

const ICONS = [Lock, MapPin, Eye, ScrollText];

export function SecuritySection() {
  return (
    <section id="security" className="border-b border-line bg-background-alt py-14">
      <div className="container-edge flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-sm">
          <p className="eyebrow">{security.eyebrow}</p>
          <h2 className="heading-3 mt-3">
            {security.heading}
            <span className="block">{security.headingLine}</span>
          </h2>
        </div>
        <ul className="grid flex-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {security.items.map((item, index) => {
            const Icon = ICONS[index];
            return (
              <li key={item.title} className="flex flex-col items-start gap-3">
                <Icon className="h-7 w-7 text-primary" aria-hidden="true" />
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
