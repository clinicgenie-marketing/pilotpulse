"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ecosystem, type EcosystemCard, type PartnerLogo } from "@/lib/home-content";

const EASE = [0.22, 1, 0.36, 1] as const;

function PartnerLogos({
  logos,
  heightClass,
}: {
  logos: PartnerLogo[];
  heightClass: string;
}) {
  return (
    <div className={`flex items-center gap-3 ${heightClass}`}>
      {logos.map((logo) => (
        <Image
          key={logo.src}
          src={logo.src}
          alt={logo.alt}
          width={200}
          height={64}
          className="h-full w-auto max-w-[9rem] object-contain object-left"
        />
      ))}
    </div>
  );
}

function PartnerCard({
  item,
  featured = false,
}: {
  item: EcosystemCard;
  featured?: boolean;
}) {
  return (
    <article className="partner-card flex h-full flex-col">
      <div className={featured ? "mb-5 h-14" : "mb-4 h-10"}>
        <PartnerLogos logos={item.logos} heightClass={featured ? "h-14" : "h-10"} />
      </div>
      <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">{item.category}</p>
      <h4 className="partner-title mt-3">{item.title}</h4>
      <p className="mt-3 text-base leading-relaxed text-ink-muted">{item.body}</p>
    </article>
  );
}

export function EcosystemSection() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });
  const show = Boolean(reduceMotion || inView);
  const headingId = "partnerships-heading";

  return (
    <section
      id="partnerships"
      ref={sectionRef}
      aria-labelledby={headingId}
      className="section-pad border-b border-line bg-surface"
    >
      <div className="container-edge">
        <motion.div
          className="mb-10 max-w-2xl"
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: reduceMotion ? 0 : 0.32, ease: EASE }}
        >
          <p className="eyebrow">{ecosystem.eyebrow}</p>
          <h2 id={headingId} className="heading-2 mt-3">
            {ecosystem.headingBefore}{" "}
            <span className="heading-gradient">{ecosystem.headingAccent}</span>
          </h2>
          <p className="lead mt-4 max-w-[54ch] text-ink-muted">{ecosystem.sub}</p>
        </motion.div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
            {ecosystem.featuredHeading}
          </h3>
          <ul className="partner-row partner-row-3 mt-6">
            {ecosystem.featured.map((item, index) => (
              <motion.li
                key={item.title}
                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.3,
                  delay: reduceMotion ? 0 : 0.16 + index * 0.08,
                  ease: EASE,
                }}
              >
                <PartnerCard item={item} featured />
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="mt-12">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
            {ecosystem.supportingHeading}
          </h3>
          <ul className="partner-row partner-row-4 mt-6">
            {ecosystem.supporting.map((item, index) => (
              <motion.li
                key={item.title}
                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.28,
                  delay: reduceMotion ? 0 : 0.4 + index * 0.07,
                  ease: EASE,
                }}
              >
                <PartnerCard item={item} />
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
