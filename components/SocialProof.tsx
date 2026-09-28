import Link from 'next/link'
import type { ReviewPress } from '@/types'
import ReviewCard from '@/components/ReviewCard'

interface SocialProofProps {
  reviews: ReviewPress[]
}

export default function SocialProof({ reviews }: SocialProofProps) {
  if (reviews.length === 0) {
    return null
  }

  const display = reviews.slice(0, 3)

  return (
    <section className="py-28 md:py-36 bg-sand/40">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs tracking-ultra uppercase text-accent">
            What they say
          </span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-ink">
            See for yourself
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {display.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/reviews"
            className="inline-block px-8 py-3 border border-ink text-ink rounded-full text-sm tracking-widest uppercase hover:bg-ink hover:text-cream transition-colors duration-300"
          >
            Read all reviews & press
          </Link>
        </div>
      </div>
    </section>
  )
}