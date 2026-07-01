"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import "./PillNav.css";

export type PillNavItem = {
  label: string;
  href: string;
  ariaLabel?: string;
};

type PillNavProps = {
  logo?: string;
  logoAlt?: string;
  items: PillNavItem[];
  activeHref?: string;
  className?: string;
  ease?: string;
  baseColor?: string;
  pillColor?: string;
  hoveredPillTextColor?: string;
  pillTextColor?: string;
  onMobileMenuClick?: () => void;
  initialLoadAnimation?: boolean;
};

const isExternalLink = (href: string) =>
  href.startsWith("http://") ||
  href.startsWith("https://") ||
  href.startsWith("//") ||
  href.startsWith("mailto:") ||
  href.startsWith("tel:") ||
  href.startsWith("#");

const isInternalLink = (href: string) => Boolean(href) && !isExternalLink(href);

export default function PillNav({
  logo,
  logoAlt = "Logo",
  items,
  activeHref,
  className = "",
  ease = "power3.easeOut",
  baseColor = "#fff",
  pillColor = "#120F17",
  hoveredPillTextColor = "#120F17",
  pillTextColor,
  onMobileMenuClick,
  initialLoadAnimation = true,
}: PillNavProps) {
  const resolvedPillTextColor = pillTextColor ?? baseColor;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const circleRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const tlRefs = useRef<(gsap.core.Timeline | null)[]>([]);
  const activeTweenRefs = useRef<(gsap.core.Tween | null)[]>([]);
  const logoImgRef = useRef<HTMLImageElement>(null);
  const logoTweenRef = useRef<gsap.core.Tween | null>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const navItemsRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const layout = () => {
      circleRefs.current.forEach((circle) => {
        if (!circle?.parentElement) return;

        const pill = circle.parentElement;
        const rect = pill.getBoundingClientRect();
        const { width: w, height: h } = rect;
        const R = ((w * w) / 4 + h * h) / (2 * h);
        const D = Math.ceil(2 * R) + 2;
        const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
        const originY = D - delta;

        circle.style.width = `${D}px`;
        circle.style.height = `${D}px`;
        circle.style.bottom = `-${delta}px`;

        gsap.set(circle, {
          xPercent: -50,
          scale: 0,
          transformOrigin: `50% ${originY}px`,
        });

        const label = pill.querySelector<HTMLElement>(".pill-label");
        const white = pill.querySelector<HTMLElement>(".pill-label-hover");

        if (label) gsap.set(label, { y: 0 });
        if (white) gsap.set(white, { y: h + 12, opacity: 0 });

        const index = circleRefs.current.indexOf(circle);
        if (index === -1) return;

        tlRefs.current[index]?.kill();
        const tl = gsap.timeline({ paused: true });

        tl.to(circle, { scale: 1.2, xPercent: -50, duration: 2, ease, overwrite: "auto" }, 0);

        if (label) {
          tl.to(label, { y: -(h + 8), duration: 2, ease, overwrite: "auto" }, 0);
        }

        if (white) {
          gsap.set(white, { y: Math.ceil(h + 100), opacity: 0 });
          tl.to(white, { y: 0, opacity: 1, duration: 2, ease, overwrite: "auto" }, 0);
        }

        tlRefs.current[index] = tl;
      });
    };

    layout();

    const onResize = () => layout();
    window.addEventListener("resize", onResize);

    if (document.fonts?.ready) {
      document.fonts.ready.then(layout).catch(() => {});
    }

    const menu = mobileMenuRef.current;
    if (menu) {
      gsap.set(menu, { visibility: "hidden", opacity: 0, scaleY: 1 });
    }

    if (initialLoadAnimation) {
      const logoEl = logoRef.current;
      const navItems = navItemsRef.current;

      if (logoEl) {
        gsap.set(logoEl, { scale: 0 });
        gsap.to(logoEl, {
          scale: 1,
          duration: 0.6,
          ease,
        });
      }

      if (navItems) {
        gsap.set(navItems, { width: 0, overflow: "hidden" });
        gsap.to(navItems, {
          width: "auto",
          duration: 0.6,
          ease,
        });
      }
    }

    return () => window.removeEventListener("resize", onResize);
  }, [items, ease, initialLoadAnimation]);

  const handleEnter = (i: number) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), {
      duration: 0.3,
      ease,
      overwrite: "auto",
    });
  };

  const handleLeave = (i: number) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(0, {
      duration: 0.2,
      ease,
      overwrite: "auto",
    });
  };

  const handleLogoEnter = () => {
    const img = logoImgRef.current;
    if (!img) return;
    logoTweenRef.current?.kill();
    gsap.set(img, { rotate: 0 });
    logoTweenRef.current = gsap.to(img, {
      rotate: 360,
      duration: 0.2,
      ease,
      overwrite: "auto",
    });
  };

  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);

    const hamburger = hamburgerRef.current;
    const menu = mobileMenuRef.current;

    if (hamburger) {
      const lines = hamburger.querySelectorAll<HTMLElement>(".hamburger-line");
      if (newState) {
        gsap.to(lines[0], { rotation: 45, y: 3, duration: 0.3, ease });
        gsap.to(lines[1], { rotation: -45, y: -3, duration: 0.3, ease });
      } else {
        gsap.to(lines[0], { rotation: 0, y: 0, duration: 0.3, ease });
        gsap.to(lines[1], { rotation: 0, y: 0, duration: 0.3, ease });
      }
    }

    if (menu) {
      if (newState) {
        gsap.set(menu, { visibility: "visible" });
        gsap.fromTo(
          menu,
          { opacity: 0, y: 10, scaleY: 1 },
          {
            opacity: 1,
            y: 0,
            scaleY: 1,
            duration: 0.3,
            ease,
            transformOrigin: "top center",
          },
        );
      } else {
        gsap.to(menu, {
          opacity: 0,
          y: 10,
          scaleY: 1,
          duration: 0.2,
          ease,
          transformOrigin: "top center",
          onComplete: () => {
            gsap.set(menu, { visibility: "hidden" });
          },
        });
      }
    }

    onMobileMenuClick?.();
  };

  const cssVars = {
    "--base": baseColor,
    "--pill-bg": pillColor,
    "--hover-text": hoveredPillTextColor,
    "--pill-text": resolvedPillTextColor,
  } as CSSProperties;

  const homeHref = items[0]?.href || "/";
  const hasLogo = Boolean(logo);

  useEffect(() => {
    const logoEl = document.querySelector(".pill-nav .pill-logo");
    const navEl = document.querySelector(".pill-nav");
    const navContainerEl = document.querySelector(".pill-nav-container");
    const navItemsEl = document.querySelector(".pill-nav-items");
    const navRect = navEl?.getBoundingClientRect();
    const navContainerRect = navContainerEl?.getBoundingClientRect();
    const navItemsRect = navItemsEl?.getBoundingClientRect();
    const navStyles = navEl ? window.getComputedStyle(navEl) : null;
    const navItemsStyles = navItemsEl ? window.getComputedStyle(navItemsEl) : null;

    // #region agent log
    fetch("http://127.0.0.1:7621/ingest/005452c7-7560-49d2-8ba7-6aa3a637ceed", {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "f7629c" },
      body: JSON.stringify({
        sessionId: "f7629c",
        runId: "nav-debug-pre-fix",
        hypothesisId: "H2",
        location: "src/components/ui/PillNav.tsx:251",
        message: "PillNav props and DOM logo state",
        data: {
          hasLogo,
          hasLogoDom: Boolean(logoEl),
          homeHref,
          itemsCount: items.length,
          activeHref,
          viewportWidth: window.innerWidth,
          navRect: navRect
            ? { x: Math.round(navRect.x), y: Math.round(navRect.y), w: Math.round(navRect.width), h: Math.round(navRect.height) }
            : null,
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
        hypothesisId: "H8",
        location: "src/components/ui/PillNav.tsx:277",
        message: "PillNav geometric layout snapshot",
        data: {
          hasLogo,
          viewportWidth: window.innerWidth,
          navContainerRect: navContainerRect
            ? {
                x: Math.round(navContainerRect.x),
                y: Math.round(navContainerRect.y),
                w: Math.round(navContainerRect.width),
                h: Math.round(navContainerRect.height),
              }
            : null,
          navRect: navRect
            ? { x: Math.round(navRect.x), y: Math.round(navRect.y), w: Math.round(navRect.width), h: Math.round(navRect.height) }
            : null,
          navItemsRect: navItemsRect
            ? {
                x: Math.round(navItemsRect.x),
                y: Math.round(navItemsRect.y),
                w: Math.round(navItemsRect.width),
                h: Math.round(navItemsRect.height),
              }
            : null,
          navJustifyContent: navStyles?.justifyContent ?? null,
          navItemsWidthStyle: navItemsStyles?.width ?? null,
        },
        timestamp: Date.now(),
      }),
    }).catch(() => {});
    // #endregion
  }, [hasLogo, homeHref, items.length, activeHref]);

  const renderPillLink = (item: PillNavItem, i: number) => {
    const pillClass = `pill${activeHref === item.href ? " is-active" : ""}`;
    const pillContent = (
      <>
        <span
          className="hover-circle"
          aria-hidden="true"
          ref={(el) => {
            circleRefs.current[i] = el;
          }}
        />
        <span className="label-stack">
          <span className="pill-label">{item.label}</span>
          <span className="pill-label-hover" aria-hidden="true">
            {item.label}
          </span>
        </span>
      </>
    );

    if (isInternalLink(item.href)) {
      return (
        <Link
          role="menuitem"
          href={item.href}
          className={pillClass}
          aria-label={item.ariaLabel || item.label}
          onMouseEnter={() => handleEnter(i)}
          onMouseLeave={() => handleLeave(i)}
        >
          {pillContent}
        </Link>
      );
    }

    return (
      <a
        role="menuitem"
        href={item.href}
        className={pillClass}
        aria-label={item.ariaLabel || item.label}
        onMouseEnter={() => handleEnter(i)}
        onMouseLeave={() => handleLeave(i)}
      >
        {pillContent}
      </a>
    );
  };

  const renderMobileLink = (item: PillNavItem) => {
    const linkClass = `mobile-menu-link${activeHref === item.href ? " is-active" : ""}`;
    const closeMenu = () => setIsMobileMenuOpen(false);

    if (isInternalLink(item.href)) {
      return (
        <Link href={item.href} className={linkClass} onClick={closeMenu}>
          {item.label}
        </Link>
      );
    }

    return (
      <a href={item.href} className={linkClass} onClick={closeMenu}>
        {item.label}
      </a>
    );
  };

  return (
    <div className="pill-nav-container">
      <nav className={`pill-nav ${className}`} aria-label="Primary" style={cssVars}>
        {hasLogo &&
          (isInternalLink(homeHref) ? (
            <Link
              className="pill-logo"
              href={homeHref}
              aria-label="Home"
              onMouseEnter={handleLogoEnter}
              role="menuitem"
              ref={logoRef}
            >
              <img src={logo} alt={logoAlt} ref={logoImgRef} />
            </Link>
          ) : (
            <a
              className="pill-logo"
              href={homeHref}
              aria-label="Home"
              onMouseEnter={handleLogoEnter}
              ref={logoRef}
            >
              <img src={logo} alt={logoAlt} ref={logoImgRef} />
            </a>
          ))}

        <div className="pill-nav-items desktop-only" ref={navItemsRef}>
          <ul className="pill-list" role="menubar">
            {items.map((item, i) => (
              <li key={item.href || `item-${i}`} role="none">
                {renderPillLink(item, i)}
              </li>
            ))}
          </ul>
        </div>

        <button
          type="button"
          className="mobile-menu-button mobile-only"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          ref={hamburgerRef}
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </nav>

      <div className="mobile-menu-popover mobile-only" ref={mobileMenuRef} style={cssVars}>
        <ul className="mobile-menu-list">
          {items.map((item, i) => (
            <li key={item.href || `mobile-item-${i}`}>{renderMobileLink(item)}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
