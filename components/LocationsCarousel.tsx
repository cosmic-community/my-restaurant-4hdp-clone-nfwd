import Link from 'next/link'
import type { Location } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface LocationsCarouselProps {
  locations: Location[]
}

export default function LocationsCarousel({ locations }: LocationsCarouselProps) {
  if (locations.length === 0) {
    return null
  }

  return (
    <section className="py-28 md:py-36 bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between gap-6">
          <div>
            <span className="text-xs tracking-ultra uppercase text-accent">
              Locations
            </span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl text-ink">
              Where should we wander?
            </h2>
          </div>
          <Link
            href="/locations"
            className="hidden md:inline-block text-sm tracking-widest uppercase text-ink hover:opacity-60 transition-opacity"
          >
            Visit us →
          </Link>
        </div>
      </div>

      <div className="mt-12 flex gap-6 overflow-x-auto no-scrollbar px-6 md:px-10 pb-4">
        {locations.map((loc) => {
          const name = getMetafieldValue(loc.metadata?.name) || loc.title
          const photo = loc.metadata?.photo?.imgix_url
          return (
            <Link
              key={loc.id}
              href="/locations"
              className="group shrink-0 w-72 md:w-80"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-sm bg-clay/30">
                {photo ? (
                  <img
                    src={`${photo}?w=800&h=1000&fit=crop&auto=format,compress`}
                    alt={name}
                    width={400}
                    height={500}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-clay text-5xl">
                    📍
                  </div>
                )}
              </div>
              <h3 className="mt-4 font-serif text-2xl text-ink tracking-wide">
                {name}
              </h3>
            </Link>
          )
        })}
      </div>
    </section>
  )
}