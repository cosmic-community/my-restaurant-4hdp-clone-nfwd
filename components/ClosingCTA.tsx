import Link from 'next/link'
import type { SiteSettings } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface ClosingCTAProps {
  settings: SiteSettings | null
}

export default function ClosingCTA({ settings }: ClosingCTAProps) {
  const email = getMetafieldValue(settings?.metadata?.contact_email)

  return (
    <section className="py-28 md:py-40 bg-bark text-cream">
      <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
        <h2 className="font-serif text-5xl md:text-7xl uppercase tracking-widest leading-none">
          Where should we wander?
        </h2>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            href="/locations"
            className="px-10 py-4 bg-cream text-ink rounded-full text-sm tracking-widest uppercase hover:bg-sand transition-colors duration-300"
          >
            Visit us
          </Link>
          <a
            href={email ? `mailto:${email}` : '#'}
            className="px-10 py-4 border border-cream text-cream rounded-full text-sm tracking-widest uppercase hover:bg-cream hover:text-ink transition-colors duration-300"
          >
            Reach out
          </a>
        </div>
      </div>
    </section>
  )
}