import type { Metadata } from "next";
import { Linkedin, Mail, MapPin } from "lucide-react";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { DemoForm } from "@/components/pages/DemoForm";
import { Em, PageHero } from "@/components/ui/PageHero";
import { contactPage } from "@/lib/pages/contact";

export const metadata: Metadata = {
  title: contactPage.meta.title,
  description: contactPage.meta.description,
};

export default function ContactPage() {
  const page = contactPage;

  return (
    <SiteChrome>
      <PageHero
        eyebrow="Get a Demo"
        title={
          <>
            {page.hero.titleBefore}
            <Em>{page.hero.titleHighlight}</Em>
            {page.hero.titleAfter}
          </>
        }
        lead={
          <>
            <p>{page.hero.lead}</p>
            <p className="mt-4">{page.hero.closing}</p>
          </>
        }
        aside={<DemoForm />}
      >
        <ul className="mt-8 grid gap-3 sm:grid-cols-3">
          {[
            { n: "01", title: "We listen", body: "One workflow, not a generic pitch." },
            { n: "02", title: "We scope", body: "What systems, what success looks like." },
            { n: "03", title: "We show", body: "A pilot you can actually run." },
          ].map((step) => (
            <li key={step.n} className="contact-step">
              <p className="text-[11px] font-semibold tracking-wider text-primary">{step.n}</p>
              <p className="mt-1 text-sm font-semibold text-ink">{step.title}</p>
              <p className="mt-0.5 text-xs leading-relaxed text-ink-muted">{step.body}</p>
            </li>
          ))}
        </ul>
      </PageHero>

      <section className="section-pad border-b border-line bg-surface">
        <div className="container-edge grid gap-4 md:grid-cols-3">
          <article className="surface-card p-6">
            <span className="grid size-10 place-items-center rounded-lg bg-primary-soft text-primary">
              <Mail className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
            </span>
            <h2 className="mt-4 text-lg font-semibold text-ink">{page.inquiries.heading}</h2>
            <p className="mt-2 text-base leading-relaxed text-ink-muted">{page.inquiries.body}</p>
            <a href={`mailto:${page.inquiries.email}`} className="mt-4 inline-block font-semibold text-primary">
              {page.inquiries.email}
            </a>
          </article>
          <article className="surface-card p-6">
            <span className="grid size-10 place-items-center rounded-lg bg-primary-soft text-primary">
              <MapPin className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
            </span>
            <h2 className="mt-4 text-lg font-semibold text-ink">{page.office.heading}</h2>
            <p className="mt-2 text-base leading-relaxed text-ink">
              {page.office.company}
              <br />
              {page.office.lines.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </article>
          <article className="surface-card p-6">
            <span className="grid size-10 place-items-center rounded-lg bg-primary-soft text-primary">
              <Linkedin className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
            </span>
            <h2 className="mt-4 text-lg font-semibold text-ink">{page.follow.heading}</h2>
            <p className="mt-2 text-base leading-relaxed text-ink-muted">{page.follow.body}</p>
            <a
              href={page.follow.linkedIn.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              {page.follow.linkedIn.label}
            </a>
          </article>
        </div>
      </section>
    </SiteChrome>
  );
}
