"use client";

import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { CTAButton } from "@/components/ui/CTAButton";
import { latestUpdates, type CommunityStory } from "@/lib/home-content";

const EASE = [0.22, 1, 0.36, 1] as const;

export function CommunityEditorial({ stories }: { stories: CommunityStory[] }) {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });
  const show = Boolean(reduceMotion || inView);
  const headingId = "community-heading";

  return (
    <section
      id="community"
      ref={sectionRef}
      aria-labelledby={headingId}
      className="section-pad border-b border-line bg-background"
    >
      <div className="container-edge">
        <motion.div
          className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: reduceMotion ? 0 : 0.32, ease: EASE }}
        >
          <div className="max-w-2xl">
            <p className="eyebrow">{latestUpdates.eyebrow}</p>
            <h2 id={headingId} className="heading-2 mt-3">
              {latestUpdates.heading}
            </h2>
            <p className="lead mt-3 text-ink-muted">{latestUpdates.sub}</p>
          </div>
          <CTAButton
            href={latestUpdates.linkedIn.href}
            variant="secondary"
            size="compact"
            external
            ariaLabel="Follow PilotPulse on LinkedIn (opens in a new tab)"
          >
            {latestUpdates.linkedIn.label}
          </CTAButton>
        </motion.div>

        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {stories.map((story, index) => (
            <motion.li
              key={story.href}
              className="h-full"
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{
                duration: reduceMotion ? 0 : 0.3,
                delay: reduceMotion ? 0 : 0.12 + index * 0.06,
                ease: EASE,
              }}
            >
              <StoryCard story={story} />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function StoryCard({ story }: { story: CommunityStory }) {
  const meta = story.date ? `${story.category} · ${story.date}` : story.category;

  return (
    <a
      href={story.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${story.title} (opens in a new tab)`}
      className="story-card group flex h-full flex-col rounded-card p-6 outline-none font-sans"
    >
      <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">{meta}</p>
      <h3 className="story-title mt-3 font-sans text-base font-semibold leading-snug text-ink">
        {story.title}
      </h3>
      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink-muted">{story.description}</p>
      <span className="story-arrow mt-auto inline-flex items-center gap-1 pt-6 text-sm font-semibold text-primary">
        View on LinkedIn
        <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
      </span>
    </a>
  );
}
