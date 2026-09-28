import type { SiteSettings } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface MissionProps {
  settings: SiteSettings | null
}

export default function Mission({ settings }: MissionProps) {
  const mission =
    getMetafieldValue(settings?.metadata?.mission_statement) ||
    'We believe a cup of coffee is more than a ritual — it is a quiet invitation to pause. Everything we serve is considered, crafted, and rooted in genuine connection.'

  return (
    <section id="about-us" className="py-28 md:py-40 bg-cream">
      <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
        <span className="text-xs tracking-ultra uppercase text-accent">
          About us
        </span>
        <p className="mt-8 font-serif text-2xl md:text-4xl leading-snug text-ink">
          {mission}
        </p>
      </div>
    </section>
  )
}