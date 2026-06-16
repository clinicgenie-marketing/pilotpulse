import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { clients } from "@/lib/content";

/**
 * Client logo wall — three centred rows of rounded tiles over a broad
 * horizontal glow band centred on the middle row, as the reference.
 */
export function LogoWall() {
  return (
    <section id="clients" aria-label="Clients and partners" className="relative scroll-mt-16 py-12 lg:py-16">
      {/* glow band behind the rows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/2 h-[560px] -translate-y-1/2"
        style={{
          background:
            "linear-gradient(180deg, rgba(90,80,190,0) 0%, rgba(90,80,190,0.28) 50%, rgba(90,80,190,0) 100%)",
        }}
      />
      <div className="relative mx-auto w-full max-w-[1660px] px-4">
        <div className="flex flex-col gap-4 sm:gap-7">
          {clients.rows.map((row, r) => (
            <Reveal key={r} delay={r * 90}>
              <ul className="flex flex-wrap items-center justify-center gap-4 sm:gap-7">
                {row.map((logo) => (
                  <li
                    key={logo}
                    className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-2xl border border-hairline bg-[rgba(225,220,255,0.07)] p-2.5 shadow-[0_2px_6px_0_rgba(70,50,255,0.55)] sm:h-[8.375rem] sm:w-[8.375rem] sm:rounded-[1.75rem] sm:p-4"
                  >
                    <Image
                      src={`/images/${logo}.png`}
                      alt=""
                      width={110}
                      height={110}
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
