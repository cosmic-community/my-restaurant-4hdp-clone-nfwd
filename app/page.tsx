import {
  getSiteSettings,
  getFeaturedMenuItems,
  getLocations,
  getReviewsPress,
} from '@/lib/cosmic'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Mission from '@/components/Mission'
import MenuHighlights from '@/components/MenuHighlights'
import LocationsCarousel from '@/components/LocationsCarousel'
import BoldStatements from '@/components/BoldStatements'
import SocialProof from '@/components/SocialProof'
import Gallery from '@/components/Gallery'
import ClosingCTA from '@/components/ClosingCTA'
import Footer from '@/components/Footer'

export default async function HomePage() {
  const [settings, featuredItems, locations, reviews] = await Promise.all([
    getSiteSettings(),
    getFeaturedMenuItems(),
    getLocations(),
    getReviewsPress(),
  ])

  return (
    <main>
      <Nav settings={settings} />
      <Hero settings={settings} />
      <Mission settings={settings} />
      <MenuHighlights items={featuredItems} />
      <LocationsCarousel locations={locations} />
      <BoldStatements settings={settings} />
      <SocialProof reviews={reviews} />
      <Gallery locations={locations} items={featuredItems} />
      <ClosingCTA settings={settings} />
      <Footer settings={settings} />
    </main>
  )
}