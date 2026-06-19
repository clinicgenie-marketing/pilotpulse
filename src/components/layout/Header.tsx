"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { CTAButton } from "@/components/ui/CTAButton";
import { nav } from "@/lib/content";

/** Micron-style sticky full-width header with persistent CTA. */
export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const handler = (e: MediaQueryListEvent) => e.matches && setOpen(false);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-base/90 backdrop-blur-md">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-brand-blue focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white"
      >
        Skip to content
      </a>

      <div className="container-edge flex h-16 items-center justify-between gap-4">
        <Link href="/" aria-label="PilotPulse — home" className="shrink-0">
          <Image
            src="/images/logo-header.png"
            alt="PilotPulse.ai"
            width={206}
            height={37}
            priority
            className="h-7 w-auto sm:h-8"
          />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-8">
            {nav.links.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href) && link.href !== "/";
              return (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`text-sm font-semibold transition-colors ${
                      active ? "text-brand-cyan" : "text-ink-body hover:text-ink"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <CTAButton href={nav.cta.href} size="compact" display className="hidden lg:inline-flex">
            {nav.cta.label}
          </CTAButton>
        </nav>

        {/* Mobile: CTA + hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <CTAButton href={nav.cta.href} size="compact" display className="!px-4 !py-2">
            Get started
          </CTAButton>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-ink"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          className="border-t border-hairline bg-base/95 px-5 py-4 backdrop-blur-md md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {nav.links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-base font-semibold text-ink-body transition-colors hover:bg-white/5 hover:text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
