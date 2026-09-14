import type { Metadata } from "next";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { LegalLayout } from "@/components/ui/LegalLayout";
import { legalContact, privacyPage } from "@/lib/pages/legal";

export const metadata: Metadata = {
  title: privacyPage.meta.title,
  description: privacyPage.meta.description,
};

export default function PrivacyPage() {
  return (
    <SiteChrome>
      <LegalLayout
        title={privacyPage.title}
        lastUpdated={privacyPage.lastUpdated}
        sections={[
          {
            id: "collect",
            heading: "Information We Collect",
            content: (
              <>
                <p>We may collect the following types of information:</p>
                <ul>
                  <li>
                    <strong>Account Information:</strong> When you register, we collect your name, email address, and
                    other relevant details.
                  </li>
                  <li>
                    <strong>Usage Data:</strong> Information about how you interact with our platform, including IP
                    addresses, browser types, and pages visited.
                  </li>
                  <li>
                    <strong>Support Data:</strong> Information you provide when contacting our support team.
                  </li>
                  <li>
                    <strong>Transaction Data:</strong> Details of any transactions made through our platform.
                  </li>
                </ul>
              </>
            ),
          },
          {
            id: "use",
            heading: "How We Use Your Information",
            content: (
              <>
                <p>Your information is used to:</p>
                <ul>
                  <li>Provide and maintain our services.</li>
                  <li>Improve and personalize user experience.</li>
                  <li>Communicate with you about updates, promotions, and other relevant information.</li>
                  <li>Comply with legal obligations and enforce our terms.</li>
                </ul>
              </>
            ),
          },
          {
            id: "sharing",
            heading: "Data Sharing and Disclosure",
            content: (
              <>
                <p>We do not sell your personal information. We may share your data with:</p>
                <ul>
                  <li>
                    <strong>Service Providers:</strong> Third parties who assist in operating our platform.
                  </li>
                  <li>
                    <strong>Legal Authorities:</strong> When required by law or to protect our rights.
                  </li>
                </ul>
              </>
            ),
          },
          {
            id: "security",
            heading: "Data Security",
            content: (
              <p>
                We implement appropriate security measures to protect your data from unauthorized access, alteration,
                or disclosure. However, no method of transmission over the internet is entirely secure.
              </p>
            ),
          },
          {
            id: "rights",
            heading: "Your Rights",
            content: (
              <>
                <p>Depending on your jurisdiction, you may have rights to:</p>
                <ul>
                  <li>Access the personal data we hold about you.</li>
                  <li>Request correction or deletion of your data.</li>
                  <li>Object to or restrict certain processing activities.</li>
                  <li>Withdraw consent where processing is based on consent.</li>
                </ul>
                <p>
                  To exercise these rights, please contact us at{" "}
                  <a href={`mailto:${legalContact.email}`} className="font-semibold text-primary">
                    {legalContact.email}
                  </a>
                  .
                </p>
              </>
            ),
          },
          {
            id: "cookies",
            heading: "Cookies and Tracking Technologies",
            content: (
              <p>
                Our platform may use cookies and similar technologies to enhance user experience and analyze usage
                patterns. You can manage your cookie preferences through your browser settings.
              </p>
            ),
          },
          {
            id: "changes",
            heading: "Changes to This Summary",
            content: (
              <p>
                We may update this summary periodically. Changes will be posted on this page with an updated revision
                date. Continued use of our platform after changes indicates acceptance of the revised terms.
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
