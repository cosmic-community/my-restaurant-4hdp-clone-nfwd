import Link from 'next/link'
import { getLocations, getMetafieldValue } from '@/lib/cosmic'

export const metadata = {
  title: 'Locations — NKORA Café',
}

export default async function LocationsPage() {
  const locations = await getLocations()

  return (
    <main className="bg-cream min-h-screen">
      <header className="pt-32 pb-16 px-6 md:px-10 max-w-7xl mx-auto">
        <Link
          href="/"
          className="text-xs tracking-widest uppercase text-accent hover:opacity-60"
        >
          ← Back
        </Link>
        <h1 className="mt-6 font-serif text-5xl md:text-7xl uppercase tracking-widest text-ink">
          Locations
        </h1>
      </header>

      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-32 grid grid-cols-1 md:grid-cols-2 gap-12">
        {locations.map((loc) => {
          const name = getMetafieldValue(loc.metadata?.name) || loc.title
          const address = getMetafieldValue(loc.metadata?.address)
          const hours = getMetafieldValue(loc.metadata?.hours)
          const photo = loc.metadata?.photo?.imgix_url
          const mapsLink = getMetafieldValue(loc.metadata?.maps_link)

          return (
            <article key={loc.id} className="group">
              <div className="aspect-[16/10] overflow-hidden rounded-sm bg-clay/30">
                {photo ? (
                  <img
                    src={`${photo}?w=1200&h=750&fit=crop&auto=format,compress`}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-clay text-5xl">
                    📍
                  </div>
                )}
              </div>
              <h2 className="mt-6 font-serif text-3xl text-ink tracking-wide">{name}</h2>
              {address && <p className="mt-3 text-ink/70">{address}</p>}
              {hours && <p className="mt-1 text-ink/50 text-sm">{hours}</p>}
              {mapsLink && (
                <a
                  href={mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-sm tracking-widest uppercase text-accent hover:opacity-60"
                >
                  Get directions →
                </a>
              )}
            </article>
          )
        })}
      </div>
    </main>
  )
}