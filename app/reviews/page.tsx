import Link from 'next/link'
import { getReviewsPress } from '@/lib/cosmic'
import ReviewCard from '@/components/ReviewCard'

export const metadata = {
  title: 'Reviews & Press — NKORA Café',
}

export default async function ReviewsPage() {
  const reviews = await getReviewsPress()

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
          Reviews & Press
        </h1>
        <p className="mt-4 text-ink/60">100% honest & transparent — see for yourself.</p>
      </header>

      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-32 grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </main>
  )
}