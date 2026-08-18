import SiteShell from '@/components/layout/SiteShell'
import JsonLd from '@/components/seo/JsonLd'
import About from '@/components/sections/About'
import BridalSpotlight from '@/components/sections/BridalSpotlight'
import Contact from '@/components/sections/Contact'
import FaqAccordion from '@/components/sections/FaqAccordion'
import GalleryGrid from '@/components/sections/GalleryGrid'
import Hero from '@/components/sections/Hero'
import Reviews from '@/components/sections/Reviews'
import ServicesAccordion from '@/components/sections/ServicesAccordion'
import StatsStrip from '@/components/sections/StatsStrip'
import { homeGraph } from '@/lib/schema'

export default function Home() {
  return (
    <SiteShell overlayHero>
      <JsonLd data={homeGraph()} />
      <main>
        <Hero />
        <StatsStrip />
        <About />
        <BridalSpotlight />
        <ServicesAccordion />
        <GalleryGrid />
        <Reviews />
        <FaqAccordion />
        <Contact />
      </main>
    </SiteShell>
  )
}
