import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { clients } from "@/lib/content";

export function LogoWall() {
  return (
    <section id="clients" aria-label="Clients and partners" className="relative scroll-mt-16 bg-background-alt">
      <div className="container-edge section-pad relative">
        <Reveal className="mx-auto mb-10 max-w-2xl">
          <SectionHeader
            eyebrow={clients.eyebrow}
            heading={clients.heading}
            align="center"
          />
        </Reveal>

        <div className="group flex flex-col gap-3 sm:gap-5">
          {clients.rows.map((row, r) => (
            <Reveal key={r} delay={r * 70}>
              <div className="logo-marquee-row">
                <div className="logo-marquee-viewport">
                  <ul
                    className={`logo-marquee-track flex w-max flex-nowrap items-center gap-3 sm:gap-5 ${
                      r % 2 === 0 ? "logo-marquee-left" : "logo-marquee-right"
                    }`}
                  >
                    {[...row, ...row].map((logo, idx) => (
                      <li
                        key={`${logo}-${idx}`}
                        className={`tile-interactive flex h-32 w-32 items-center justify-center p-4 sm:h-40 sm:w-40 ${
                          idx >= row.length ? "logo-marquee-clone" : ""
                        }`}
                        aria-hidden={idx >= row.length}
                      >
                        <Image
                          src={`/images/${logo}.png`}
                          alt=""
                          width={160}
                          height={160}
                          className="h-full w-full object-contain"
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
