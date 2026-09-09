"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { Menu, X } from "lucide-react";
import { CTAButton } from "@/components/ui/CTAButton";
import { homeNav } from "@/lib/home-content";

export function Header() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-surface/80 backdrop-blur-xl">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-button focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to main content
      </a>

      <div className="container-edge relative flex h-16 items-center justify-between gap-4">
        <Link href="/" aria-label="PilotPulse home" className="header-logo shrink-0">
          <span className="header-logo-mark" aria-hidden="true" />
        </Link>

        <nav
          aria-label="Main"
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 lg:flex"
        >
          {homeNav.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-[13.5px] font-medium text-ink-muted transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <CTAButton href={homeNav.cta.href} size="compact" className="hidden sm:inline-flex">
            {homeNav.cta.label}
          </CTAButton>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-button border border-line bg-surface text-ink lg:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </div>

      {open ? (
        <div
          id={menuId}
          className="border-t border-line bg-surface px-5 py-4 lg:hidden"
        >
          <nav aria-label="Mobile">
            <ul className="flex flex-col gap-1">
              {homeNav.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block rounded-md px-3 py-3 text-sm font-medium text-ink hover:bg-primary-soft hover:text-primary"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-4">
            <CTAButton href={homeNav.cta.href} className="w-full" onClick={() => setOpen(false)}>
              {homeNav.cta.label}
            </CTAButton>
          </div>
        </div>
      ) : null}
    </header>
  );
}
