"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

export type AnchorItem = {
  id: string;
  label: string;
};

export function AnchorNav({ items, ariaLabel }: { items: readonly AnchorItem[]; ariaLabel: string }) {
  const [active, setActive] = useState(items[0]?.id ?? "");
  const [indicator, setIndicator] = useState({ left: 0, width: 0, bottom: 10, ready: false });
  const railRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((node): node is HTMLElement => Boolean(node));
    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  useLayoutEffect(() => {
    function placeIndicator() {
      const track = trackRef.current;
      const link = listRef.current?.querySelector<HTMLElement>(".anchor-nav-link.is-active");
      const indexEl = link?.querySelector<HTMLElement>(".anchor-nav-index");
      const labelEl = link?.querySelector<HTMLElement>(".anchor-nav-label");
      if (!track || !link || !indexEl || !labelEl) return;

      const trackBox = track.getBoundingClientRect();
      const indexBox = indexEl.getBoundingClientRect();
      const labelBox = labelEl.getBoundingClientRect();
      const linkBox = link.getBoundingClientRect();
      const contentLeft = indexBox.left - trackBox.left;
      const contentWidth = labelBox.right - indexBox.left;
      const width = contentWidth * 0.64;
      const left = contentLeft + (contentWidth - width) / 2;
      const bottom = Math.max(8, trackBox.bottom - linkBox.bottom + 8);
      setIndicator({ left, width, bottom, ready: true });
    }

    placeIndicator();
    const track = trackRef.current;
    if (!track || typeof ResizeObserver === "undefined") return undefined;

    const observer = new ResizeObserver(placeIndicator);
    observer.observe(track);
    window.addEventListener("resize", placeIndicator);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", placeIndicator);
    };
  }, [active, items]);

  useEffect(() => {
    const rail = railRef.current;
    const link = rail?.querySelector<HTMLElement>(".anchor-nav-link.is-active");
    if (!rail || !link) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const railBox = rail.getBoundingClientRect();
    const linkBox = link.getBoundingClientRect();
    const pad = 24;
    if (linkBox.left < railBox.left + pad || linkBox.right > railBox.right - pad) {
      link.scrollIntoView({ inline: "center", block: "nearest", behavior: reduce ? "auto" : "smooth" });
    }
  }, [active]);

  return (
    <nav className="anchor-nav" aria-label={ariaLabel}>
      <div className="container-edge">
        <div className="anchor-nav-rail" ref={railRef}>
          <div className="anchor-nav-track" ref={trackRef}>
            <ul className="anchor-nav-list" ref={listRef}>
              {items.map((item, index) => {
                const current = item.id === active;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className={`anchor-nav-link${current ? " is-active" : ""}`}
                      aria-current={current ? "location" : undefined}
                    >
                      <span className="anchor-nav-index" aria-hidden="true">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="anchor-nav-label">{item.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
            <span
              className={`anchor-nav-indicator${indicator.ready ? " is-ready" : ""}`}
              aria-hidden="true"
              style={{
                width: `${indicator.width}px`,
                bottom: `${indicator.bottom}px`,
                transform: `translateX(${indicator.left}px)`,
              }}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
