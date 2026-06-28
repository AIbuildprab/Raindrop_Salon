import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import ServicesAccordion from './components/ServicesAccordion'
import GalleryGrid from './components/GalleryGrid'
import Reviews from './components/Reviews'
import FaqAccordion from './components/FaqAccordion'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import Particles from './components/Particles'
import SiteAnimations from './components/SiteAnimations'

export default function App() {
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
