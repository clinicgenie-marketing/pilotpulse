"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import PillNav from "@/components/ui/PillNav";
import { nav } from "@/lib/content";

/** Sticky pill navigation with GSAP hover animations. */
export function Header() {
  const pathname = usePathname();

  const activeHref =
    nav.links.find((link) => {
      if (link.href.startsWith("#")) return false;
      if (link.href === "/") return pathname === "/";
      return pathname.startsWith(link.href);
    })?.href ?? (pathname === "/" ? "/" : undefined);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-transparent">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-brand-blue focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white"
      >
        Skip to content
      </a>

      <div className="container-edge flex items-center justify-between py-3 md:py-4">
        <Link
          href="/"
          aria-label="PilotPulse home"
          className="header-outside-logo inline-flex shrink-0 items-center justify-center"
        >
          <img src="/brand/PilotPulse-Logo.svg" alt="PilotPulse.ai" className="h-7 w-auto object-contain" />
        </Link>
        <PillNav
          items={nav.links}
          activeHref={activeHref}
          ease="power2.easeOut"
          baseColor="#E8EDF7"
          pillColor="#FFFFFF"
          pillTextColor="#0B1220"
          hoveredPillTextColor="#0891B2"
          initialLoadAnimation
        />
      </div>
    </header>
  );
}
