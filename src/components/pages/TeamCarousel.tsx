"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProfileCard } from "@/components/pages/ProfileCard";
import type { TeamPerson } from "@/lib/pages/about";

export function TeamCarousel({
  eyebrow,
  heading,
  lead,
  people,
}: {
  eyebrow: string;
  heading: ReactNode;
  lead: string;
  people: readonly TeamPerson[];
}) {
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateEdges = useCallback(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const max = scroller.scrollWidth - scroller.clientWidth;
    setAtStart(scroller.scrollLeft <= 8);
    setAtEnd(max <= 8 || scroller.scrollLeft >= max - 8);
  }, []);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    updateEdges();
    scroller.addEventListener("scroll", updateEdges, { passive: true });
    window.addEventListener("resize", updateEdges);
    return () => {
      scroller.removeEventListener("scroll", updateEdges);
      window.removeEventListener("resize", updateEdges);
    };
  }, [updateEdges]);

  function scrollByCard(direction: number) {
    const scroller = scrollerRef.current;
    const card = scroller?.querySelector<HTMLElement>(".team-card");
    if (!scroller || !card) return;
    const styles = getComputedStyle(scroller);
    const gap = Number.parseFloat(styles.gap) || Number.parseFloat(styles.columnGap) || 16;
    scroller.scrollBy({
      left: direction * (card.getBoundingClientRect().width + gap),
      behavior: "smooth",
    });
  }

  return (
    <div className="team-carousel">
      <div className="container-edge">
        <div className="team-toolbar">
          <div className="team-copy">
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="heading-2 mt-3">{heading}</h2>
            <p className="lead mt-4">{lead}</p>
          </div>
          <div className="team-nav">
            <button
              type="button"
              className="team-nav-btn"
              aria-label="Previous team member"
              disabled={atStart}
              onClick={() => scrollByCard(-1)}
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
            </button>
            <button
              type="button"
              className="team-nav-btn"
              aria-label="Next team member"
              disabled={atEnd}
              onClick={() => scrollByCard(1)}
            >
              <ChevronRight className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      <ul
        ref={scrollerRef}
        className="team-scroller"
        tabIndex={0}
        aria-label="Team members"
      >
        {people.map((person) => (
          <li key={person.name}>
            <ProfileCard {...person} />
          </li>
        ))}
      </ul>
    </div>
  );
}
