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
              <ul className="flex flex-wrap items-center justify-center gap-3 sm:gap-5">
                {row.map((logo) => (
                  <li
                    key={logo}
                    className="tile-interactive flex h-16 w-16 items-center justify-center rounded-lg border border-hairline bg-[rgba(225,220,255,0.05)] p-2 shadow-sm transition-opacity sm:h-20 sm:w-20 lg:group-hover:opacity-60 lg:hover:!opacity-100"
                  >
                    <Image
                      src={`/images/${logo}.png`}
                      alt=""
                      width={80}
                      height={80}
                      className="h-full w-full object-contain"
                    />
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
