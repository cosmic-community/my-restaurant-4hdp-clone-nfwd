import Link from 'next/link'
import { getMenuItems, getMenuCategories, getMetafieldValue } from '@/lib/cosmic'
import MenuItemCard from '@/components/MenuItemCard'
import type { MenuItem } from '@/types'

export const metadata = {
  title: 'Menu — NKORA Café',
}

export default async function MenuPage() {
  const [items, categories] = await Promise.all([
    getMenuItems(),
    getMenuCategories(),
  ])

  const grouped: Record<string, MenuItem[]> = {}
  const uncategorized: MenuItem[] = []

  items.forEach((item) => {
    const cat = item.metadata?.category
    if (cat && cat.id) {
      const existing = grouped[cat.id]
      if (existing) {
        existing.push(item)
      } else {
        grouped[cat.id] = [item]
      }
    } else {
      uncategorized.push(item)
    }
  })

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
          The Menu
        </h1>
      </header>

      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-32 space-y-24">
        {categories.map((cat) => {
          const catItems = grouped[cat.id]
          if (!catItems || catItems.length === 0) {
            return null
          }
          const name = getMetafieldValue(cat.metadata?.name) || cat.title
          const description = getMetafieldValue(cat.metadata?.description)
          return (
            <section key={cat.id}>
              <div className="max-w-2xl">
                <h2 className="font-serif text-3xl md:text-4xl text-ink">{name}</h2>
                {description && (
                  <p className="mt-3 text-ink/60 leading-relaxed">{description}</p>
                )}
              </div>
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
                {catItems.map((item) => (
                  <MenuItemCard key={item.id} item={item} />
                ))}
              </div>
            </section>
          )
        })}

        {uncategorized.length > 0 && (
          <section>
            <h2 className="font-serif text-3xl md:text-4xl text-ink">More</h2>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              {uncategorized.map((item) => (
                <MenuItemCard key={item.id} item={item} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  )
}