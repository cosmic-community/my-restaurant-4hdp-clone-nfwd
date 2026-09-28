import type { MenuItem } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface MenuItemCardProps {
  item: MenuItem
}

export default function MenuItemCard({ item }: MenuItemCardProps) {
  const name = getMetafieldValue(item.metadata?.name) || item.title
  const story = getMetafieldValue(item.metadata?.story)
  const price = getMetafieldValue(item.metadata?.price)
  const image = item.metadata?.featured_image?.imgix_url
  const dietary = item.metadata?.dietary_info

  return (
    <article className="group">
      <div className="aspect-[4/5] overflow-hidden rounded-sm bg-clay/30">
        {image ? (
          <img
            src={`${image}?w=800&h=1000&fit=crop&auto=format,compress`}
            alt={name}
            width={400}
            height={500}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-clay text-5xl">
            ☕
          </div>
        )}
      </div>

      <div className="mt-5">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-serif text-2xl text-ink">{name}</h3>
          {price && (
            <span className="text-accent text-sm tracking-wide">{price}</span>
          )}
        </div>
        {story && (
          <p className="mt-2 text-ink/70 text-sm leading-relaxed">{story}</p>
        )}
        {dietary && dietary.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {dietary.map((d) => (
              <span
                key={getMetafieldValue(d)}
                className="text-[10px] tracking-widest uppercase px-2 py-1 bg-cream text-accent rounded-full border border-clay/40"
              >
                {getMetafieldValue(d)}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}