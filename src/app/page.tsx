import Nav from '@/components/sections/Nav'
import Hero from '@/components/sections/Hero'
import StatsStrip from '@/components/sections/StatsStrip'
import About from '@/components/sections/About'
import BridalSpotlight from '@/components/sections/BridalSpotlight'
import ServicesAccordion from '@/components/sections/ServicesAccordion'
import GalleryGrid from '@/components/sections/GalleryGrid'
import Reviews from '@/components/sections/Reviews'
import FaqAccordion from '@/components/sections/FaqAccordion'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'
import WhatsAppFloat from '@/components/sections/WhatsAppFloat'
import SiteAnimations from '@/components/sections/SiteAnimations'

export default function Home() {
  return (
    <>
      <SiteAnimations />
      <Nav />
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
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
