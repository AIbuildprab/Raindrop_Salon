import Footer from '@/components/sections/Footer'
import Nav from '@/components/sections/Nav'
import SiteAnimations from '@/components/sections/SiteAnimations'
import WhatsAppFloat from '@/components/sections/WhatsAppFloat'

type SiteShellProps = {
  children: React.ReactNode
  overlayHero?: boolean
}

export default function SiteShell({ children, overlayHero = false }: SiteShellProps) {
  return (
    <>
      <SiteAnimations />
      <Nav overlayHero={overlayHero} />
      {children}
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
