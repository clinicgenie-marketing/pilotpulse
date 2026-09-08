import Image from "next/image";
import { trustedOrgs } from "@/lib/home-content";

export function TrustedLogos() {
  const logos = [...trustedOrgs.logos, ...trustedOrgs.logos];

  return (
    <section aria-label="Trusted organisations" className="border-y border-line/40 bg-surface py-10">
      <div className="container-edge">
        <p className="eyebrow mx-auto whitespace-nowrap text-center text-ink-muted max-sm:text-[0.65rem] max-sm:tracking-[0.08em]">
          {trustedOrgs.eyebrow}
        </p>
        <div className="logo-marquee-row mt-6" tabIndex={0}>
          <div className="logo-marquee-viewport">
            <div className="logo-marquee-track logo-marquee-left flex w-max items-center gap-12">
              {logos.map((logo, index) => {
                const clone = index >= trustedOrgs.logos.length;
                return (
                  <div
                    key={`${logo.src}-${index}`}
                    className={`trusted-logo${clone ? " logo-marquee-clone" : ""}`}
                    aria-hidden={clone}
                  >
                    {logo.src.endsWith(".svg") ? (
                      <img src={logo.src} alt={clone ? "" : logo.name} className="trusted-logo-img" />
                    ) : (
                      <Image
                        src={logo.src}
                        alt={clone ? "" : logo.name}
                        width={220}
                        height={64}
                        className="trusted-logo-img"
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
