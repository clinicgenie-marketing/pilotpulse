import type { ReactNode } from "react";

export type LegalSection = {
  id: string;
  heading: string;
  content: ReactNode;
};

export function LegalLayout({
  eyebrow = "Legal",
  title,
  lastUpdated,
  sections,
}: {
  eyebrow?: string;
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
}) {
  return (
    <section className="section-pad bg-background">
      <div className="container-edge grid gap-12 lg:grid-cols-[220px_minmax(0,68ch)] lg:gap-16">
        <aside className="hidden lg:block">
          <nav className="sticky top-24" aria-label="On this page">
            <ul className="space-y-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`} className="text-sm font-medium text-ink-muted hover:text-primary">
                    {section.heading}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <article className="legal-prose">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="heading-1 mt-4">{title}</h1>
          <p className="mt-3 text-sm text-ink-muted">{lastUpdated}</p>
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="legal-section scroll-mt-28">
              <h2>{section.heading}</h2>
              {section.content}
            </section>
          ))}
        </article>
      </div>
    </section>
  );
}
