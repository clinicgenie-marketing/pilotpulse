import Image from "next/image";
import { supportBanner } from "@/lib/home-content";

export function SupportBanner() {
  return (
    <aside aria-label="Government support" className="mt-12 w-full lg:mt-18">
      <div className="support-banner-card flex flex-col items-center gap-5 rounded-card border border-line bg-surface px-6 py-6 shadow-glow-purple sm:flex-row sm:items-center sm:gap-8 sm:px-8">
        <Image
          src="/partners/imda.webp"
          alt="Infocomm Media Development Authority"
          width={730}
          height={184}
          className="h-14 w-auto shrink-0 rounded-lg sm:h-16"
        />
        <div className="flex-1 text-center sm:text-left">
          <p className="text-base font-semibold leading-snug text-ink">{supportBanner.programme}</p>
          <p className="text-base font-semibold leading-snug text-ink">{supportBanner.title}</p>
          <p className="mt-1.5 text-base text-ink-muted">{supportBanner.body}</p>
        </div>
      </div>
    </aside>
  );
}
