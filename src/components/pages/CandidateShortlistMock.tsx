"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const CANDIDATES = [
  { rank: "01", name: "Candidate A", initials: "CA", score: "92%", status: "Interview booked" },
  { rank: "02", name: "Candidate B", initials: "CB", score: "81%", status: "Shortlisted" },
  { rank: "03", name: "Candidate C", initials: "CC", score: "74%", status: "Review" },
] as const;

const ROTATE_MS = 3200;
const FLIP = [0.22, 1, 0.36, 1] as const;
const COUNT = CANDIDATES.length;

export function CandidateShortlistMock() {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [flipping, setFlipping] = useState(false);

  function goTo(next: number) {
    if (flipping || next === index) return;
    if (reduceMotion) {
      setIndex(next);
      return;
    }
    setFlipping(true);
    window.setTimeout(() => {
      setIndex(next);
      setFlipping(false);
    }, 420);
  }

  function flipNext() {
    goTo((index + 1) % COUNT);
  }

  useEffect(() => {
    if (reduceMotion || paused || flipping) return undefined;
    const timer = window.setInterval(() => {
      goTo((index + 1) % COUNT);
    }, ROTATE_MS);
    return () => window.clearInterval(timer);
  }, [flipping, index, paused, reduceMotion]);

  return (
    <div
      className="shortlist-deck"
      aria-label="Ranked candidate shortlist"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {CANDIDATES.map((candidate, candidateIndex) => {
        const slot = (candidateIndex - index + COUNT) % COUNT;
        const front = slot === 0;
        const lifting = front && flipping;

        return (
          <motion.button
            key={candidate.rank}
            type="button"
            className="shortlist-deck-card"
            aria-current={front ? "true" : undefined}
            aria-label={`${candidate.name}, ${candidate.score}, ${candidate.status}`}
            disabled={flipping}
            onClick={() => (front ? flipNext() : goTo(candidateIndex))}
            initial={false}
            animate={
              lifting
                ? { x: 0, y: -52, rotateX: -82, scale: 1, opacity: 0, zIndex: 5 }
                : {
                    x: slot * 10,
                    y: slot * -8,
                    rotateX: 0,
                    scale: 1 - slot * 0.015,
                    opacity: 1 - slot * 0.16,
                    zIndex: COUNT - slot,
                  }
            }
            transition={{ duration: reduceMotion ? 0 : lifting ? 0.42 : 0.34, ease: FLIP }}
            style={{ transformOrigin: "bottom center" }}
          >
            <div className="flex items-start justify-between gap-4">
              <p className="shortlist-deck-score">{candidate.score}</p>
              <span className="shortlist-deck-avatar" aria-hidden="true">
                {candidate.initials}
              </span>
            </div>
            <p className="shortlist-deck-name">{candidate.name}</p>
            <div className="mt-5 flex items-end justify-between gap-3">
              <p className="shortlist-deck-status">“{candidate.status}”</p>
              <p className="shortlist-deck-rank">{candidate.rank}</p>
            </div>
          </motion.button>
        );
      })}
    </div>
  );
}
