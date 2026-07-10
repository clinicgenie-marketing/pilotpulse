"use client";

import Link from "next/link";
import { useEffect } from "react";
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

  useEffect(() => {
    const pillLogoCount = document.querySelectorAll(".pill-nav .pill-logo").length;
    const headerLogoCount = document.querySelectorAll(".header-outside-logo").length;
    const navItemsCount = document.querySelectorAll(".pill-nav .pill").length;
    const headerContainer = document.querySelector<HTMLElement>(".container-edge");
    const navRoot = document.querySelector<HTMLElement>(".pill-nav-container");
    const outsideLogo = document.querySelector<HTMLElement>(".header-outside-logo");
    const outsideLogoImage = outsideLogo?.querySelector<HTMLImageElement>("img");
    const outsideLogoStyles = outsideLogo ? window.getComputedStyle(outsideLogo) : null;
    const outsideLogoImageStyles = outsideLogoImage ? window.getComputedStyle(outsideLogoImage) : null;
    const headerContainerStyles = headerContainer ? window.getComputedStyle(headerContainer) : null;
    const navRootStyles = navRoot ? window.getComputedStyle(navRoot) : null;

    // #region agent log
    fetch("http://127.0.0.1:7621/ingest/005452c7-7560-49d2-8ba7-6aa3a637ceed", {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "f7629c" },
      body: JSON.stringify({
        sessionId: "f7629c",
        runId: "nav-debug-pre-fix",
        hypothesisId: "H1",
        location: "src/components/layout/Header.tsx:20",
        message: "Header render logo placement snapshot",
        data: { pathname, activeHref, pillLogoCount, headerLogoCount, navItemsCount },
        timestamp: Date.now(),
      }),
    }).catch(() => {});
    // #endregion

    // #region agent log
    fetch("http://127.0.0.1:7621/ingest/005452c7-7560-49d2-8ba7-6aa3a637ceed", {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "f7629c" },
      body: JSON.stringify({
        sessionId: "f7629c",
        runId: "nav-debug-post-fix",
        hypothesisId: "H6",
        location: "src/components/layout/Header.tsx:35",
        message: "Outside logo visual style snapshot",
        data: {
          hasOutsideLogoElement: Boolean(outsideLogo),
          outsideLogoBackground: outsideLogoStyles?.backgroundColor ?? null,
          outsideLogoBorderRadius: outsideLogoStyles?.borderRadius ?? null,
          outsideLogoBoxSize: outsideLogo
            ? { width: Math.round(outsideLogo.getBoundingClientRect().width), height: Math.round(outsideLogo.getBoundingClientRect().height) }
            : null,
          logoImageBoxSize: outsideLogoImage
            ? {
                width: Math.round(outsideLogoImage.getBoundingClientRect().width),
                height: Math.round(outsideLogoImage.getBoundingClientRect().height),
              }
            : null,
          logoImageHeightStyle: outsideLogoImageStyles?.height ?? null,
        },
        timestamp: Date.now(),
      }),
    }).catch(() => {});
    // #endregion

    // #region agent log
    fetch("http://127.0.0.1:7621/ingest/005452c7-7560-49d2-8ba7-6aa3a637ceed", {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "f7629c" },
      body: JSON.stringify({
        sessionId: "f7629c",
        runId: "nav-position-debug",
        hypothesisId: "H7",
        location: "src/components/layout/Header.tsx:49",
        message: "Header layout positions and flex alignment",
        data: {
          viewportWidth: window.innerWidth,
          headerContainerRect: headerContainer
            ? {
                x: Math.round(headerContainer.getBoundingClientRect().x),
                y: Math.round(headerContainer.getBoundingClientRect().y),
                w: Math.round(headerContainer.getBoundingClientRect().width),
                h: Math.round(headerContainer.getBoundingClientRect().height),
              }
            : null,
          navRootRect: navRoot
            ? {
                x: Math.round(navRoot.getBoundingClientRect().x),
                y: Math.round(navRoot.getBoundingClientRect().y),
                w: Math.round(navRoot.getBoundingClientRect().width),
                h: Math.round(navRoot.getBoundingClientRect().height),
              }
            : null,
          outsideLogoRect: outsideLogo
            ? {
                x: Math.round(outsideLogo.getBoundingClientRect().x),
                y: Math.round(outsideLogo.getBoundingClientRect().y),
                w: Math.round(outsideLogo.getBoundingClientRect().width),
                h: Math.round(outsideLogo.getBoundingClientRect().height),
              }
            : null,
          headerJustifyContent: headerContainerStyles?.justifyContent ?? null,
          headerGap: headerContainerStyles?.columnGap ?? null,
          navRootWidthStyle: navRootStyles?.width ?? null,
        },
        timestamp: Date.now(),
      }),
    }).catch(() => {});
    // #endregion
  }, [activeHref, pathname]);

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
          baseColor="#28224B"
          pillColor="#110D3E"
          pillTextColor="#FFFFFF"
          hoveredPillTextColor="#0DA4D5"
          initialLoadAnimation
        />
      </div>
    </header>
  );
}
