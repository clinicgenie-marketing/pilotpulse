"use client";

import { useEffect, useState } from "react";

export type AnchorItem = {
  id: string;
  label: string;
};

export function AnchorNav({ items, ariaLabel }: { items: readonly AnchorItem[]; ariaLabel: string }) {
  const [active, setActive] = useState(items[0]?.id ?? "");

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

  return (
    <nav className="anchor-nav" aria-label={ariaLabel}>
      <div className="container-edge">
        <div className="anchor-nav-rail">
          <ul className="anchor-nav-list">
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
        </div>
      </div>
    </nav>
  );
}
