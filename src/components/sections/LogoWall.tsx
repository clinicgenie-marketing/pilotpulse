import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { clients } from "@/lib/content";

/** Client logo wall with eyebrow and tighter enterprise grid. */
export function LogoWall() {
  return (
    <section id="clients" aria-label="Clients and partners" className="relative scroll-mt-16 border-y border-hairline bg-panel/40 py-14 lg:py-20">
      {/* Subtle glow band */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/2 h-[400px] -translate-y-1/2 opacity-60"
        style={{
          background:
            "linear-gradient(180deg, rgba(90,80,190,0) 0%, rgba(90,80,190,0.18) 50%, rgba(90,80,190,0) 100%)",
        }}
      />

      <div className="container-edge relative">
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
                        className={`tile-interactive flex h-24 w-24 items-center justify-center rounded-lg border border-hairline bg-[rgba(225,220,255,0.05)] p-3 shadow-sm transition-opacity sm:h-28 sm:w-28 lg:group-hover:opacity-60 lg:hover:!opacity-100 ${
                          idx >= row.length ? "logo-marquee-clone" : ""
                        }`}
                        aria-hidden={idx >= row.length}
                      >
                        <Image
                          src={`/images/${logo}.png`}
                          alt=""
                          width={112}
                          height={112}
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
