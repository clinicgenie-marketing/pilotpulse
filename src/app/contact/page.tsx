import type { Metadata } from "next";
import { Linkedin, Mail, Twitter, Youtube } from "lucide-react";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { DemoForm } from "@/components/pages/DemoForm";
import Aurora from "@/components/ui/Aurora";
import { contactPage } from "@/lib/pages/contact";

const AURORA_STOPS = ["#4638F5", "#3686F2", "#B9B3FB"];

export const metadata: Metadata = {
  title: contactPage.meta.title,
  description: contactPage.meta.description,
};

export default function ContactPage() {
  const page = contactPage;

  return (
    <SiteChrome>
      <section className="contact-page">
        <div className="hero-aurora" aria-hidden="true">
          <Aurora
            colorStops={AURORA_STOPS}
            blend={0.5}
            amplitude={1}
            speed={0.5}
            lightMode
          />
        </div>
        <div className="container-edge contact-layout">
          <div className="contact-copy">
            <header className="contact-intro">
              <div>
                <h1 className="contact-intro-title">
                  {page.hero.titleLine1}
                  <br />
                  {page.hero.titleLine2}
                </h1>
                <p className="contact-intro-lead">{page.hero.lead}</p>
                <p className="contact-intro-closing">{page.hero.closing}</p>
              </div>
              <ul className="contact-intro-links">
                {page.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="contact-intro-link"
                      aria-label={link.label}
                      {...(link.href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      <LinkGlyph label={link.label} />
                    </a>
                  </li>
                ))}
              </ul>
            </header>

            <div className="contact-next">
              <h2 className="contact-next-title">{page.next.heading}</h2>
              <p className="contact-next-lead">{page.next.lead}</p>
              <ol className="workflow-timeline contact-next-list">
                {page.next.steps.map((step) => (
                  <li key={step.n} className="workflow-step">
                    <div className="workflow-step-rail">
                      <span className="workflow-step-marker" aria-hidden="true">
                        {step.n}
                      </span>
                    </div>
                    <div>
                      <p className="contact-next-item-title">
                        {step.titleBefore}
                        <span className="heading-gradient">{step.titleHighlight}</span>
                      </p>
                      <p className="contact-next-item-body">{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="contact-form-col">
            <DemoForm />
          </div>
        </div>

        <div className="container-edge contact-details">
          <article className="contact-details-block">
            <h2 className="contact-details-heading">{page.details.office.heading}</h2>
            <p className="contact-details-company">{page.details.office.company}</p>
            <p className="contact-details-lines">
              {page.details.office.lines.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </article>
          <article className="contact-details-block">
            <h2 className="contact-details-heading">{page.details.follow.heading}</h2>
            <p className="contact-details-body">{page.details.follow.body}</p>
            <ul className="contact-follow-links">
              {page.details.follow.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="contact-follow-link"
                    aria-label={link.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FollowGlyph label={link.label} />
                  </a>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    </SiteChrome>
  );
}

function LinkGlyph({ label }: { label: string }) {
  if (label === "LinkedIn") {
    return <Linkedin className="h-4 w-4" strokeWidth={1.75} />;
  }
  if (label === "Email") {
    return <Mail className="h-4 w-4" strokeWidth={1.75} />;
  }
  return <WhatsAppGlyph />;
}

function FollowGlyph({ label }: { label: string }) {
  if (label === "Twitter") {
    return <Twitter className="h-4 w-4" strokeWidth={1.75} />;
  }
  if (label === "YouTube") {
    return <Youtube className="h-4 w-4" strokeWidth={1.75} />;
  }
  return <Linkedin className="h-4 w-4" strokeWidth={1.75} />;
}

function WhatsAppGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.02Zm-7.01 15.24h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.41a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.23 8.23Zm4.51-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.15.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.29Z" />
    </svg>
  );
}
