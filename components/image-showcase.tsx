import Image from "next/image"
import Link from "next/link"
import { AFRICA_SECTORS } from "@/lib/africa-sectors"

const frames = AFRICA_SECTORS.filter((s) => ["tech", "ai", "iot"].includes(s.id))

export function ImageShowcase() {
  return (
    <section className="relative bg-background" aria-label="Sectors we serve">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {frames.map((frame) => (
          <Link
            key={frame.id}
            href={frame.ctaHref}
            className="group relative block min-h-[14rem] overflow-hidden md:min-h-[18rem] lg:min-h-[20rem]"
          >
            <Image
              src={frame.image}
              alt={frame.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10 transition-opacity duration-500 group-hover:from-black/90" />
            <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#FEA02F]">{frame.shortTitle}</p>
              <p className="mt-1.5 text-base font-semibold text-white md:text-lg">{frame.title}</p>
              <p className="mt-1 text-sm text-white/80 transition-transform duration-500 group-hover:translate-x-1">
                Explore →
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
