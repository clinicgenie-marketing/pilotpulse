import Image from "next/image";
import Aurora from "@/components/ui/Aurora";
import { homeTestimonials, type Testimonial } from "@/lib/home-content";

const AURORA_STOPS = ["#4638F5", "#3686F2", "#B9B3FB"];

const COMPANY_LOGOS: Partial<Record<string, string>> = {
  "SFS Pharma Logistics": "/logos/sfs.png",
  "Connect Energy Services": "/logos/connect-energy.png",
  "SuperWorld Electronics": "/logos/superworld.png",
};

const LOOP = [...homeTestimonials, ...homeTestimonials];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative overflow-hidden bg-surface section-pad">
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
            <p className="eyebrow">Client voices</p>
            <h2 className="heading-2 mt-3 text-ink">What our clients say.</h2>
          </div>
        </div>

        <div className="testimonial-marquee mt-12" tabIndex={0}>
          <div className="testimonial-marquee-viewport px-5 md:px-6 lg:px-8">
            <div className="testimonial-marquee-track">
              {LOOP.map((quote, index) => {
                const clone = index >= homeTestimonials.length;
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

function TestimonialCard({ quote, clone }: { quote: Testimonial; clone: boolean }) {
  const logo = COMPANY_LOGOS[quote.company];
  const name = quote.name ?? quote.role;
  const byline = quote.name ? `${quote.role}, ${quote.company}` : quote.company;

  return (
    <article
      className="testimonial-card flex shrink-0 flex-col rounded-card p-7 sm:p-8"
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
      <p className="mt-8 font-display text-5xl leading-none text-primary" aria-hidden="true">
        “
      </p>
      <blockquote className="mt-2 flex-1 text-base leading-relaxed text-ink">
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
