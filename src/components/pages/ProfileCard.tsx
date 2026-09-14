export function ProfileCard({
  name,
  title,
  initials,
  bullets,
}: {
  name: string;
  title: string;
  initials: string;
  bullets: readonly string[];
}) {
  return (
    <article className="profile-card flex h-full flex-col p-6">
      <div className="grid aspect-square max-h-40 w-full place-items-center rounded-[12px] bg-primary-soft">
        <span className="heading-2 text-primary">{initials}</span>
      </div>
      <h3 className="mt-5 text-xl font-semibold text-ink">{name}</h3>
      <p className="mt-1 text-sm font-semibold text-primary">{title}</p>
      <ul className="mt-4 space-y-2 text-base leading-relaxed text-ink">
        {bullets.map((bullet) => (
          <li key={bullet}>• {bullet}</li>
        ))}
      </ul>
    </article>
  );
}
