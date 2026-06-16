import Link from "next/link";
import { footer } from "@/lib/content";

const HEAD = "text-[1.3125rem] font-bold text-ink";
const ITEM = "text-[1.0625rem] leading-[1.7] text-ink-body lg:text-[1.25rem] lg:leading-[1.625rem]";

/** Four centred columns + tiny copyright, exactly as the reference. */
export function Footer() {
  return (
    <footer className="relative bg-[#04020E] pb-10 pt-12">
      <div className="container-edge">
        <div className="mx-auto grid max-w-[1030px] grid-cols-2 gap-x-6 gap-y-10 text-center lg:grid-cols-4 lg:gap-x-10">
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
                className={`${ITEM} block transition-colors hover:text-ink`}
              >
                {footer.contact.phone}
              </a>
              <a
                href={`mailto:${footer.contact.email}`}
                className={`${ITEM} block transition-colors hover:text-ink`}
              >
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
                    className={`${ITEM} block transition-colors hover:text-ink`}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`${ITEM} block transition-colors hover:text-ink`}
                  >
                    {link.label}
                  </Link>
                ),
              )}
            </div>
          </nav>
        </div>

        <p className="mt-16 text-center text-[0.9375rem] text-[#AEB0BC]">{footer.copyright}</p>
      </div>
    </footer>
  );
}
