"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav } from "@/lib/content";

/**
 * Compact left-aligned pill header, exactly as the design reference:
 * logo + Home · Contact Us · About Us. No CTA button. Static (not sticky).
 */
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
    <header className="relative z-40 pt-7 sm:pt-[5.9375rem]">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-brand-blue focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white"
      >
        Skip to content
      </a>
      <div className="container-edge">
        <nav
          aria-label="Primary"
          className="inline-flex items-center gap-6 rounded-full bg-panel-nav py-4 pl-7 pr-4 sm:gap-[5.5rem] sm:pr-8"
        >
          <Link href="/" aria-label="PilotPulse — home" className="shrink-0">
            <Image
              src="/images/logo-header.png"
              alt="PilotPulse.ai"
              width={206}
              height={37}
              priority
              className="h-8 w-auto sm:h-9"
            />
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-9 md:flex">
            {nav.links.map((link) => {
              const active =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href) && link.href !== "/";
              return (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`text-[0.9375rem] font-semibold transition-colors ${
                      active ? "text-[#BF7EFF]" : "text-white hover:text-[#BF7EFF]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-ink md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {/* Mobile menu */}
        {open && (
          <div
            id="mobile-menu"
            className="mt-2 inline-flex min-w-[16rem] flex-col gap-1 rounded-3xl bg-panel-nav p-3 md:hidden"
          >
            {nav.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-base font-semibold text-ink-body transition-colors hover:bg-white/5 hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
