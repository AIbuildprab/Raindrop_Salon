import Nav from '@/components/sections/Nav'
import Hero from '@/components/sections/Hero'
import Marquee from '@/components/sections/Marquee'
import About from '@/components/sections/About'
import ServicesAccordion from '@/components/sections/ServicesAccordion'
import GalleryGrid from '@/components/sections/GalleryGrid'
import Reviews from '@/components/sections/Reviews'
import FaqAccordion from '@/components/sections/FaqAccordion'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'
import WhatsAppFloat from '@/components/sections/WhatsAppFloat'
import Particles from '@/components/sections/Particles'
import SiteAnimations from '@/components/sections/SiteAnimations'

export default function Home() {
  return (
    <>
      <Particles />
      <SiteAnimations />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
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
