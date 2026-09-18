"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown, HardHat, HeartPulse, Menu, Store, Truck, Users, Wrench, X, type LucideIcon } from "lucide-react";
import { CTAButton } from "@/components/ui/CTAButton";
import { homeNav, type NavChild, type NavLink } from "@/lib/home-content";

const MENU_ICONS: Record<string, LucideIcon> = {
  logistics: Truck,
  healthcare: HeartPulse,
  construction: HardHat,
  "retail-and-fnb": Store,
  "facilities-management": Wrench,
  "hr-services": Users,
};

function MenuRow({ child }: { child: NavChild }) {
  const Icon = child.icon ? MENU_ICONS[child.icon] : undefined;

  return (
    <>
      {Icon ? (
        <span className="nav-dd-icon" aria-hidden="true">
          <Icon className="h-4 w-4" strokeWidth={1.85} />
        </span>
      ) : null}
      <span className="nav-dd-copy">
        <span className="nav-dd-title">{child.label}</span>
        {child.description ? <span className="nav-dd-desc">{child.description}</span> : null}
      </span>
    </>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const menuId = useId();
  const pathname = usePathname();

  function isActive(href: string) {
    return pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));
  }

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

  useEffect(() => {
    setOpen(false);
    setMobileSection(null);
  }, [pathname]);

  return (
    <header className="site-header sticky top-0 z-50 border-b">
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
          {homeNav.links.map((link) =>
            link.children ? (
              <DesktopDropdown
                key={link.href}
                link={link}
                active={isActive(link.href)}
                isItemActive={isActive}
              />
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-md px-3 py-2 text-[13.5px] font-medium transition-colors hover:text-primary ${
                  isActive(link.href) ? "text-primary" : "text-ink-muted"
                }`}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            ),
          )}
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
        <div id={menuId} className="site-header-menu border-t px-5 py-4 lg:hidden">
          <nav aria-label="Mobile">
            <ul className="flex flex-col gap-1">
              {homeNav.links.map((link) => {
                const active = isActive(link.href);
                if (!link.children) {
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`block rounded-md px-3 py-3 text-sm font-medium hover:bg-primary-soft hover:text-primary ${
                          active ? "bg-primary-soft text-primary" : "text-ink"
                        }`}
                        aria-current={active ? "page" : undefined}
                        onClick={() => setOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                }

                const expanded = mobileSection === link.href;
                return (
                  <li key={link.href}>
                    <div className="flex items-center gap-1">
                      <Link
                        href={link.href}
                        className={`min-w-0 flex-1 rounded-md px-3 py-3 text-sm font-medium hover:bg-primary-soft hover:text-primary ${
                          active ? "bg-primary-soft text-primary" : "text-ink"
                        }`}
                        aria-current={active ? "page" : undefined}
                        onClick={() => setOpen(false)}
                      >
                        {link.label}
                      </Link>
                      <button
                        type="button"
                        className="grid size-10 place-items-center rounded-md text-ink-muted hover:bg-primary-soft hover:text-primary"
                        aria-expanded={expanded}
                        onClick={() => setMobileSection(expanded ? null : link.href)}
                      >
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`}
                          aria-hidden="true"
                        />
                        <span className="sr-only">{expanded ? "Collapse" : "Expand"} {link.label}</span>
                      </button>
                    </div>
                    {expanded ? (
                      <ul className="mb-2 ml-3 border-l border-line pl-3">
                        {link.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className="nav-dd-link"
                              onClick={() => setOpen(false)}
                            >
                              <MenuRow child={child} />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                );
              })}
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

function DesktopDropdown({
  link,
  active,
  isItemActive,
}: {
  link: NavLink;
  active: boolean;
  isItemActive: (href: string) => boolean;
}) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<number | null>(null);

  function clearClose() {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = null;
  }

  function show() {
    clearClose();
    setOpen(true);
  }

  function hide(delay = 120) {
    clearClose();
    closeTimer.current = window.setTimeout(() => {
      setOpen(false);
    }, delay);
  }

  useEffect(() => () => clearClose(), []);

  return (
    <div
      className={`nav-dd${open ? " is-open" : ""}`}
      onMouseEnter={show}
      onMouseLeave={() => hide()}
      onFocus={show}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) hide(0);
      }}
    >
      <Link
        href={link.href}
        className={`nav-dd-trigger ${active ? "text-primary" : "text-ink-muted"}`}
        aria-current={active ? "page" : undefined}
        aria-expanded={open}
        aria-haspopup="true"
      >
        {link.label}
        <ChevronDown className="nav-dd-chevron" aria-hidden="true" />
      </Link>
      <div className="nav-dd-panel" role="menu" aria-label={`${link.label} menu`}>
        <ul className="nav-dd-list">
          {link.children?.map((child) => {
            const current = isItemActive(child.href);
            return (
              <li key={child.href} className="nav-dd-item">
                  <Link
                    href={child.href}
                    className={`nav-dd-link${current ? " is-active" : ""}`}
                    role="menuitem"
                    aria-current={current ? "page" : undefined}
                  >
                    <MenuRow child={child} />
                  </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
