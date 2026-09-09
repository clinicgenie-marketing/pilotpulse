import Image from "next/image";
import Link from "next/link";
import { homeFooter } from "@/lib/home-content";
import { STATUS_HREF } from "@/lib/content";

const HEAD =
  "text-[13px] font-semibold uppercase tracking-wider text-[color-mix(in_srgb,var(--pp-outline)_48%,#8d8b96)]";
const ITEM = "text-[13px] leading-relaxed text-white/75 transition-colors hover:text-white";

function FooterLink({
  href,
  label,
  external,
}: {
  href: string;
  label: string;
  external?: boolean;
}) {
  if (external || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return (
      <a
        href={href}
        className={ITEM}
        {...(href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={ITEM}>
      {label}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-neutral-900">
      <div className="container-edge py-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(6,minmax(0,1fr))]">
          <div>
            <Link href="/" aria-label="PilotPulse home" className="inline-flex">
              <Image
                src="/brand/PilotPulse-Logo.svg"
                alt="PilotPulse"
                width={180}
                height={32}
                className="h-8 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-3 max-w-[36ch] text-[13px] leading-relaxed text-white/75">
              {homeFooter.blurb}
            </p>
            <a
              href={STATUS_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] text-white/80 hover:text-white"
            >
              <span className="size-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
              {homeFooter.status.label}
            </a>
            <div className="mt-5 flex items-center gap-2">
              {homeFooter.social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="grid size-8 place-items-center rounded-md border border-white/20 bg-white/10 text-white/80 transition-colors hover:border-white/40 hover:text-white"
                >
                  <LinkedInIcon />
                </a>
              ))}
            </div>
          </div>

          {homeFooter.groups.map((group) => (
            <nav key={group.heading} aria-label={group.heading}>
              <p className={HEAD}>{group.heading}</p>
              <ul className="mt-3 space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <FooterLink href={link.href} label={link.label} external={link.external} />
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-y-3 border-t border-white/15 pt-6 text-[13px] text-white/60">
          <p>
            <span className="font-medium uppercase tracking-wider">Singapore HQ:</span>{" "}
            {homeFooter.company.address} ·{" "}
            <a href={`tel:${homeFooter.company.phone.replace(/[^\d+]/g, "")}`} className="hover:text-white">
              {homeFooter.company.phone}
            </a>{" "}
            ·{" "}
            <a href={`mailto:${homeFooter.company.email}`} className="hover:text-white">
              {homeFooter.company.email}
            </a>
          </p>
          <a href={`mailto:${homeFooter.company.securityEmail}`} className="hover:text-white">
            {homeFooter.company.securityEmail}
          </a>
        </div>
        <div className="mt-4 flex flex-col gap-2 text-[13px] text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <span>{homeFooter.copyright}</span>
          <span>{homeFooter.descriptors}</span>
        </div>
      </div>
    </footer>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-3.5" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
