import Link from 'next/link'
import type { SiteSettings } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface HeroProps {
  settings: SiteSettings | null
}

export default function Hero({ settings }: HeroProps) {
  const tagline = getMetafieldValue(settings?.metadata?.hero_tagline) || 'CONSIDERED CUPS'
  const intro =
    getMetafieldValue(settings?.metadata?.hero_intro) ||
    'A collective of speciality coffee shops with a focus on quality and simplicity. We serve considered cups that invite pause and perspective.'
  const ctaLabel = getMetafieldValue(settings?.metadata?.hero_cta_label) || 'Wander in'
  const bg = settings?.metadata?.hero_background?.imgix_url

  return (
    <section className="relative min-h-screen flex items-end">
      <div className="absolute inset-0">
        {bg ? (
          <img
            src={`${bg}?w=2400&h=1600&fit=crop&auto=format,compress`}
            alt={tagline}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-bark" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-ink/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pb-20 md:pb-28 w-full">
        <h1 className="font-serif text-cream text-5xl md:text-8xl uppercase tracking-widest leading-none animate-fadeUp">
          {tagline}
        </h1>
        <p className="mt-8 max-w-xl text-cream/90 text-lg md:text-xl font-light leading-relaxed animate-fadeUp">
          {intro}
        </p>
        <Link
          href="#about-us"
          className="inline-block mt-10 px-8 py-3 bg-cream text-ink rounded-full text-sm tracking-widest uppercase hover:bg-sand transition-colors duration-300 animate-fadeUp"
        >
          {ctaLabel}
        </Link>
      </div>
    </section>
  )
}