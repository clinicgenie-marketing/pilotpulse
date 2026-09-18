import Image from "next/image";
import Aurora from "@/components/ui/Aurora";
import { AccentHeading } from "@/components/ui/PageHero";
import { homeTestimonials, type Testimonial } from "@/lib/home-content";

const AURORA_STOPS = ["#4638F5", "#3686F2", "#B9B3FB"];

const COMPANY_LOGOS: Partial<Record<string, string>> = {
  "SFS Pharma Logistics": "/logos/sfs.png",
  "Connect Energy Services": "/logos/connect-energy.png",
  "SuperWorld Electronics": "/logos/superworld.png",
};

type TestimonialsSectionProps = {
  id?: string;
  eyebrow?: string;
  heading?: string;
  quotes?: readonly Testimonial[];
  className?: string;
};

export function TestimonialsSection({
  id = "testimonials",
  eyebrow = "Client voices",
  heading = "What our clients say.",
  quotes = homeTestimonials,
  className = "",
}: TestimonialsSectionProps = {}) {
  const loop = [...quotes, ...quotes];

  return (
    <section id={id} className={`relative overflow-hidden bg-surface section-pad${className ? ` ${className}` : ""}`}>
      <div className="hero-aurora" aria-hidden="true">
        <Aurora
          colorStops={AURORA_STOPS}
          blend={0.5}
          amplitude={1}
          speed={0.5}
          lightMode
        />
      </div>
      <div className="relative z-10">
        <div className="container-edge">
          <div className="max-w-[640px]">
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="heading-2 mt-3 text-ink">
              <AccentHeading text={heading} accent="our clients say." />
            </h2>
          </div>
        </div>

        <div className="testimonial-marquee mt-12" tabIndex={0}>
          <div className="testimonial-marquee-viewport px-5 md:px-6 lg:px-8">
            <div className="testimonial-marquee-track">
              {loop.map((quote, index) => {
                const clone = index >= quotes.length;
                return (
                  <TestimonialCard
                    key={`${quote.id}-${index}`}
                    quote={quote}
                    clone={clone}
                  />
                );
              })}
            </div>
          </div>
          <div className="container-edge mt-8">
            <div className="testimonial-marquee-progress" aria-hidden="true">
              <span />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuoteMark() {
  return (
    <svg
      className="testimonial-card-mark"
      viewBox="0 0 86 70"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M0 0h34v28L10 70H0V0Z" />
      <path d="M48 0h34v28L58 70H48V0Z" />
    </svg>
  );
}

function TestimonialCard({ quote, clone }: { quote: Testimonial; clone: boolean }) {
  const logo = COMPANY_LOGOS[quote.company];
  const name = quote.name ?? quote.role;
  const byline = quote.name ? `${quote.role}, ${quote.company}` : quote.company;

  return (
    <article
      className="testimonial-card flex shrink-0 flex-col p-7 sm:p-8"
      aria-hidden={clone}
    >
      {logo ? (
        <Image
          src={logo}
          alt={clone ? "" : quote.company}
          width={160}
          height={40}
          className="h-8 w-auto max-w-[140px] object-contain object-left"
        />
      ) : (
        <p className="text-[13px] font-semibold text-ink">{quote.company}</p>
      )}
      <QuoteMark />
      <blockquote className="mt-2 flex-1 text-[16px] leading-relaxed text-ink-muted">
        {quote.quote}
      </blockquote>
      <footer className="mt-8">
        <p className="text-[12px] font-semibold uppercase leading-[1.75] tracking-[0.12em] text-ink">
          {name}
        </p>
        <p className="mt-1 text-[11px] uppercase leading-[1.75] tracking-[0.12em] text-ink-muted">
          {byline}
        </p>
      </footer>
    </article>
  );
}
