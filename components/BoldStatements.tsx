import type { SiteSettings } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface BoldStatementsProps {
  settings: SiteSettings | null
}

export default function BoldStatements({ settings }: BoldStatementsProps) {
  const statements = settings?.metadata?.bold_statements
  const partnerNote =
    getMetafieldValue(settings?.metadata?.partner_note) ||
    'We work closely with independent roasters and local makers who share our values.'

  const display =
    statements && statements.length > 0
      ? statements
      : ['Human', 'Independent', 'Crafted']

  return (
    <section className="py-28 md:py-40 bg-ink text-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="space-y-4 md:space-y-8">
          {display.map((s, i) => (
            <h2
              key={i}
              className="font-serif text-6xl md:text-9xl uppercase tracking-widest leading-none text-cream/95"
            >
              {getMetafieldValue(s)}
            </h2>
          ))}
        </div>
        <p className="mt-16 max-w-xl text-cream/70 text-lg font-light leading-relaxed">
          {partnerNote}
        </p>
      </div>
    </section>
  )
}