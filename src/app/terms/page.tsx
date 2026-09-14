import type { Metadata } from "next";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { LegalLayout } from "@/components/ui/LegalLayout";
import { legalContact, termsPage } from "@/lib/pages/legal";

export const metadata: Metadata = {
  title: termsPage.meta.title,
  description: termsPage.meta.description,
};

export default function TermsPage() {
  return (
    <SiteChrome>
      <LegalLayout
        title={termsPage.title}
        lastUpdated={termsPage.lastUpdated}
        sections={[
          {
            id: "acceptance",
            heading: "Acceptance of Terms",
            content: (
              <p>
                By accessing or using our platform, you agree to comply with our Terms of Use and this Privacy
                Summary. If you do not agree, please refrain from using our services.
              </p>
            ),
          },
          {
            id: "contact",
            heading: "Contact Us",
            content: (
              <>
                <p>For questions or concerns regarding this summary or our data practices, please contact:</p>
                <p>
                  {legalContact.company}
                  <br />
                  {legalContact.lines[0]}
                  <br />
                  {legalContact.lines[1]}
                  <br />
                  Email:{" "}
                  <a href={`mailto:${legalContact.email}`} className="font-semibold text-primary">
                    {legalContact.email}
                  </a>
                </p>
              </>
            ),
          },
        ]}
      />
    </SiteChrome>
  );
}
