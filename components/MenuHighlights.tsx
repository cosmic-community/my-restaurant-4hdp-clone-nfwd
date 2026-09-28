import Link from 'next/link'
import type { MenuItem } from '@/types'
import MenuItemCard from '@/components/MenuItemCard'

interface MenuHighlightsProps {
  items: MenuItem[]
}

export default function MenuHighlights({ items }: MenuHighlightsProps) {
  const featured = items.slice(0, 3)

  if (featured.length === 0) {
    return null
  }

  return (
    <section className="py-28 md:py-36 bg-sand/40">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-2xl">
          <span className="text-xs tracking-ultra uppercase text-accent">
            What we serve
          </span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-ink leading-tight">
            Thoughtfully sourced, prepared to order
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {featured.map((item) => (
            <MenuItemCard key={item.id} item={item} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/menu"
            className="inline-block px-8 py-3 bg-ink text-cream rounded-full text-sm tracking-widest uppercase hover:bg-accent transition-colors duration-300"
          >
            Explore the full menu
          </Link>
        </div>
      </div>
    </section>
  )
}