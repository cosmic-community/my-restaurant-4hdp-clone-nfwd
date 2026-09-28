import type { Metadata } from 'next'
import './globals.css'
import { getSiteSettings, getMetafieldValue } from '@/lib/cosmic'
import CosmicBadge from '@/components/CosmicBadge'

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings()
  const brand = getMetafieldValue(settings?.metadata?.brand_name) || 'Café'
  const tagline = getMetafieldValue(settings?.metadata?.hero_intro) || 'Speciality coffee, considered cups.'
  return {
    title: `${brand} — Speciality Coffee`,
    description: tagline,
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>☕</text></svg>" />
        {/* Console capture script for dashboard debugging */}
        <script src="/dashboard-console-capture.js" />
              <script defer src="https://insights.cosmicinsights.dev/script.js" data-project="6a362ab25b2ac5cef3df8fbf"></script>
      </head>
      <body className="font-sans antialiased">
        {children}
        <CosmicBadge bucketSlug={bucketSlug} />
      </body>
    </html>
  )
}