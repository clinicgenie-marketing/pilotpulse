import Image from "next/image";
import Link from "next/link";
import { CTAButton } from "@/components/ui/CTAButton";
import { footer, site } from "@/lib/content";

const HEAD = "text-sm font-bold uppercase tracking-wide text-ink";
const ITEM = "text-sm leading-relaxed text-ink-body transition-colors hover:text-ink";

/** Micron-style two-tier footer: main band + legal bar. */
export function Footer() {
  return (
    <footer className="relative border-t border-hairline bg-[#04020E]">
      <div className="container-edge py-14 lg:py-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          {/* Logo + tagline */}
          <div className="max-w-xs">
            <Image
              src="/images/logo-header.png"
              alt="PilotPulse.ai"
              width={206}
              height={37}
              className="h-8 w-auto"
            />
            <p className="mt-4 text-sm leading-relaxed text-ink-body">{site.tagline}</p>
          </div>

          {/* Link columns */}
          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-4 lg:gap-10">
            <div className="flex flex-col gap-3">
              <h3 className={HEAD}>{footer.location.heading}</h3>
              <address className="not-italic">
                {footer.location.lines.map((line) => (
                  <span key={line} className={`${ITEM} block`}>
                    {line}
                  </span>
                ))}
              </address>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className={HEAD}>{footer.contact.heading}</h3>
              <div>
                <a
                  href={`tel:${footer.contact.phone.replace(/[^0-9+]/g, "")}`}
                  className={`${ITEM} block`}
                >
                  {footer.contact.phone}
                </a>
                <a href={`mailto:${footer.contact.email}`} className={`${ITEM} block`}>
                  {footer.contact.email}
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className={HEAD}>{footer.hours.heading}</h3>
              <div>
                {footer.hours.lines.map((line) => (
                  <span key={line} className={`${ITEM} block`}>
                    {line}
                  </span>
                ))}
              </div>
            </div>

            <nav aria-label="Footer" className="flex flex-col gap-3">
              <h3 className={HEAD}>{footer.sitelinks.heading}</h3>
              <div>
                {footer.sitelinks.links.map((link) =>
                  link.external ? (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${ITEM} block`}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link key={link.label} href={link.href} className={`${ITEM} block`}>
                      {link.label}
                    </Link>
                  ),
                )}
              </div>
            </nav>
          </div>

          {/* Contact CTA */}
          <div className="shrink-0 lg:pt-1">
            <CTAButton href={footer.cta.href} size="compact" display>
              {footer.cta.label}
            </CTAButton>
          </div>
        </div>
      </div>

      {/* Legal bar */}
      <div className="border-t border-hairline">
        <div className="container-edge flex flex-col items-start justify-between gap-3 py-5 sm:flex-row sm:items-center">
          <p className="text-xs text-ink-faint">{footer.copyright}</p>
          <div className="flex gap-6">
            {footer.legal.map((link) => (
              <Link key={link.label} href={link.href} className="text-xs text-ink-faint transition-colors hover:text-ink-body">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
