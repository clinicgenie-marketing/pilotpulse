import { Linkedin } from "lucide-react";
import type { TeamPerson } from "@/lib/pages/about";

export function ProfileCard({
  name,
  title,
  initials,
  linkedin,
  photo,
  bullets,
}: TeamPerson) {
  return (
    <article className="team-card" tabIndex={0} aria-label={`${name}, ${title}`}>
      <div className="team-card-media">
        {photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={photo} alt="" />
        ) : (
          <div className="team-card-fallback" aria-hidden="true">
            <span>{initials}</span>
          </div>
        )}
      </div>

      {bullets.length > 0 ? (
        <div className="team-card-bio">
          <ul>
            {bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="team-card-plate">
        <div className="team-card-meta">
          <h3 className="team-card-name">{name}</h3>
          <p className="team-card-role">{title}</p>
        </div>
        {linkedin ? (
          <a
            href={linkedin}
            className="team-card-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} on LinkedIn`}
          >
            <Linkedin className="h-4 w-4" strokeWidth={2.25} aria-hidden="true" />
          </a>
        ) : null}
      </div>
    </article>
  );
}
