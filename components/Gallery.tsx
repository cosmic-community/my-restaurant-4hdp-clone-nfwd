import type { Location, MenuItem } from '@/types'

interface GalleryProps {
  locations: Location[]
  items: MenuItem[]
}

export default function Gallery({ locations, items }: GalleryProps) {
  const images: { url: string; alt: string }[] = []

  locations.forEach((loc) => {
    const url = loc.metadata?.photo?.imgix_url
    if (url) images.push({ url, alt: loc.title })
  })
  items.forEach((item) => {
    const url = item.metadata?.featured_image?.imgix_url
    if (url) images.push({ url, alt: item.title })
  })

  if (images.length === 0) {
    return null
  }

  return (
    <section className="py-28 md:py-36 bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center">
          <span className="text-xs tracking-ultra uppercase text-accent">
            Gallery
          </span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-ink">
            Moments we treasure
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {images.slice(0, 8).map((img, i) => (
            <div
              key={i}
              className={`overflow-hidden rounded-sm ${
                i % 5 === 0 ? 'row-span-2 aspect-[3/4]' : 'aspect-square'
              }`}
            >
              <img
                src={`${img.url}?w=700&h=700&fit=crop&auto=format,compress`}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}