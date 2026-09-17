export function CaseStudyIndustryHero({
  eyebrow = "Case Studies",
  title,
  lead,
  image,
  imagePosition,
}: {
  eyebrow?: string;
  title: string;
  lead: string;
  image: string;
  imagePosition?: string;
}) {
  return (
    <section className="case-study-hero">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt=""
        className="case-study-hero-image"
        style={imagePosition ? { objectPosition: imagePosition } : undefined}
      />
      <div className="case-study-hero-shade" aria-hidden="true" />
      <div className="container-edge case-study-hero-copy">
        <p className="case-study-hero-kicker">{eyebrow}</p>
        <h1 className="case-study-hero-title">{title}</h1>
        <p className="case-study-hero-lead">{lead}</p>
      </div>
    </section>
  );
}
