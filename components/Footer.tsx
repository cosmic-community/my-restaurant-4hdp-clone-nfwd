import Link from 'next/link'
import type { SiteSettings } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface FooterProps {
  settings: SiteSettings | null
}

export default function Footer({ settings }: FooterProps) {
  const brand = getMetafieldValue(settings?.metadata?.brand_name) || 'NKORA'
  const address = getMetafieldValue(settings?.metadata?.address)
  const phone = getMetafieldValue(settings?.metadata?.contact_phone)
  const email = getMetafieldValue(settings?.metadata?.contact_email)
  const hours = getMetafieldValue(settings?.metadata?.hours)
  const instagram = getMetafieldValue(settings?.metadata?.instagram_url)
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink text-cream/80 py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <p className="font-serif text-3xl md:text-4xl text-cream uppercase tracking-widest">
          Where should we wander?
        </p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
          <div className="space-y-3">
            <p className="text-xs tracking-widest uppercase text-accent-soft">
              Explore
            </p>
            <div className="flex flex-col gap-2">
              <Link href="/menu" className="hover:text-cream transition-colors">
                Menu
              </Link>
              <Link href="/locations" className="hover:text-cream transition-colors">
                Locations
              </Link>
              <Link href="/reviews" className="hover:text-cream transition-colors">
                Reviews & Press
              </Link>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-xs tracking-widest uppercase text-accent-soft">
              Find us
            </p>
            {address && <p className="leading-relaxed">{address}</p>}
            {hours && <p className="leading-relaxed">{hours}</p>}
          </div>

          <div className="space-y-3">
            <p className="text-xs tracking-widest uppercase text-accent-soft">
              Reach out
            </p>
            {phone && (
              <a href={`tel:${phone}`} className="block hover:text-cream transition-colors">
                {phone}
              </a>
            )}
            {email && (
              <a href={`mailto:${email}`} className="block hover:text-cream transition-colors">
                {email}
              </a>
            )}
            {instagram && (
              <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-cream transition-colors"
              >
                Instagram
              </a>
            )}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cream/10 text-xs tracking-widest uppercase text-cream/50">
          © {year} {brand}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}