import type { ReviewPress } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface ReviewCardProps {
  review: ReviewPress
}

export default function ReviewCard({ review }: ReviewCardProps) {
  const quote = getMetafieldValue(review.metadata?.quote)
  const source = getMetafieldValue(review.metadata?.author_source)
  const type = getMetafieldValue(review.metadata?.type)
  const link = getMetafieldValue(review.metadata?.source_link)

  const content = (
    <div className="h-full p-8 bg-cream rounded-sm border border-clay/30 flex flex-col">
      {type && (
        <span className="text-[10px] tracking-widest uppercase text-accent">
          {type}
        </span>
      )}
      <p className="mt-4 font-serif text-xl text-ink leading-snug flex-1">
        “{quote}”
      </p>
      {source && (
        <p className="mt-6 text-sm text-ink/60 tracking-wide">— {source}</p>
      )}
    </div>
  )

  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full transition-transform duration-300 hover:-translate-y-1"
      >
        {content}
      </a>
    )
  }

  return content
}