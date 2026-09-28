'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import type { SiteSettings } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface NavProps {
  settings: SiteSettings | null
}

export default function Nav({ settings }: NavProps) {
  const [scrolled, setScrolled] = useState(false)
  const brand = getMetafieldValue(settings?.metadata?.brand_name) || 'NKORA'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-700 ${
        scrolled ? 'bg-cream/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <Link
          href="/"
          className={`font-serif text-2xl tracking-widest uppercase transition-colors duration-700 ${
            scrolled ? 'text-ink' : 'text-cream'
          }`}
        >
          {brand}
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm tracking-widest uppercase">
          {[
            { label: 'Menu', href: '/menu' },
            { label: 'Locations', href: '/locations' },
            { label: 'Reviews', href: '/reviews' },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`transition-colors duration-300 hover:opacity-60 ${
                scrolled ? 'text-ink' : 'text-cream'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/locations"
            className={`px-5 py-2 rounded-full text-xs tracking-widest uppercase transition-all duration-300 ${
              scrolled
                ? 'bg-ink text-cream hover:bg-accent'
                : 'bg-cream text-ink hover:bg-sand'
            }`}
          >
            Wander In
          </Link>
        </div>

        <Link
          href="/menu"
          className={`md:hidden px-4 py-2 rounded-full text-xs tracking-widest uppercase ${
            scrolled ? 'bg-ink text-cream' : 'bg-cream text-ink'
          }`}
        >
          Menu
        </Link>
      </nav>
    </header>
  )
}