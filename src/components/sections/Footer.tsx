import Image from 'next/image'
import { AREAS } from '@/data/areas'
import { SERVICES } from '@/data/services'
import {
  ADDRESS_FULL,
  BUSINESS_NAME,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  MAPS_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_URL,
} from '@/lib/contact'
import InstagramIcon from '@/components/ui/InstagramIcon'
import WhatsAppIcon from '@/components/ui/WhatsAppIcon'

export default function Footer() {
  return (
    <>
      <div className="footer-glass-band footer-cta-dark">
        <div className="footer-glass-band-inner">
          <div className="footer-glass-band-copy">
            <div className="footer-glass-band-eyebrow">Ready to Shine?</div>
            <h2 className="footer-glass-band-headline">
              Book Your <em>Perfect Look</em> Today
            </h2>
            <p className="footer-cta-sub">
              Experience personal, polished glam for every celebration that matters.
            </p>
          </div>
          <div className="footer-cta-actions">
            <a href={PHONE_TEL} className="btn-gold" aria-label={`Call — ${PHONE_DISPLAY}`}>
              <span className="btn-label-full">Call — {PHONE_DISPLAY}</span>
              <span className="btn-label-short">Call to Book</span>
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glass btn-glass-on-dark"
            >
              <WhatsAppIcon size={18} />
              WhatsApp Jass
            </a>
          </div>
        </div>
      </div>

      <footer>
        <div className="footer-inner">
          <a href="/" className="footer-logo" aria-label="Back to home">
            <Image
              src="/images/raindrop-logo.png"
              alt={BUSINESS_NAME}
              width={120}
              height={120}
              className="footer-logo-img"
            />
          </a>

          <div className="footer-link-cols">
            <nav className="footer-link-col" aria-label="Our main services">
              <h3 className="footer-link-heading">Our main services</h3>
              <ul>
                {SERVICES.map(service => (
                  <li key={service.slug}>
                    <a href={service.href}>{service.name}</a>
                  </li>
                ))}
              </ul>
            </nav>
            <nav className="footer-link-col" aria-label="Areas we serve">
              <h3 className="footer-link-heading">Areas we serve</h3>
              <ul>
                {AREAS.map(area => (
                  <li key={area.slug}>
                    <a href={area.href}>{area.name}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <address className="footer-nap">
            <span className="footer-nap-name">{BUSINESS_NAME}</span>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-ig"
            >
              {ADDRESS_FULL}
            </a>
            <a href={PHONE_TEL} className="footer-ig">
              {PHONE_DISPLAY}
            </a>
          </address>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-ig"
          >
            <InstagramIcon size={14} gradientId="ig-grad-footer" />
            {INSTAGRAM_HANDLE}
          </a>

          <p className="footer-copy">
            &copy; 2026 {BUSINESS_NAME}
          </p>
        </div>
      </footer>
    </>
  )
}
