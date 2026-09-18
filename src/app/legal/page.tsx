import type { Metadata } from "next";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { LegalLayout } from "@/components/ui/LegalLayout";
import { legalContact, legalPage } from "@/lib/pages/legal";

export const metadata: Metadata = {
  title: legalPage.meta.title,
  description: legalPage.meta.description,
};

export default function LegalPage() {
  const page = legalPage;
  const mail = (
    <a href={`mailto:${legalContact.email}`} className="font-semibold text-primary">
      {legalContact.email}
    </a>
  );

  return (
    <SiteChrome>
      <LegalLayout
        eyebrow={page.eyebrow}
        title={page.title}
        lastUpdated={page.lastUpdated}
        sections={page.sections.map((section) => ({
          id: section.id,
          n: section.n,
          heading: section.heading,
          content: (
            <>
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {"items" in section && section.items ? (
                <ul>
                  {section.items.map((item) => (
                    <li key={"lead" in item && item.lead ? item.lead : item.rest}>
                      {"lead" in item && item.lead ? <strong>{item.lead}</strong> : null}
                      {"lead" in item && item.lead ? ` ${item.rest}` : item.rest}
                    </li>
                  ))}
                </ul>
              ) : null}
              {section.id === "rights" && "closing" in section && section.closing ? (
                <p>
                  {section.closing} {mail}.
                </p>
              ) : null}
              {section.id === "contact" ? (
                <p>
                  {legalContact.company}
                  <br />
                  {legalContact.lines[0]}
                  <br />
                  {legalContact.lines[1]}
                  <br />
                  Email: {mail}
                </p>
              ) : null}
            </>
          ),
        }))}
      />
    </SiteChrome>
  );
}
