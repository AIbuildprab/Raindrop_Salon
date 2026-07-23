import Image from 'next/image'
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from '@/lib/contact'
import InstagramIcon from '@/components/ui/InstagramIcon'

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
              WhatsApp Jass
            </a>
          </div>
        </div>
      </div>

      <footer>
        <div className="footer-inner">
          <a href="#hero" className="footer-logo" aria-label="Back to top">
            <Image
              src="/images/raindrop-logo.png"
              alt="Raindrop Beauty Salon"
              width={120}
              height={120}
              className="footer-logo-img"
            />
          </a>

          <a href={PHONE_TEL} className="footer-ig">
            {PHONE_DISPLAY}
          </a>

          <a
            href="https://www.instagram.com/raindrops_beauty_salon/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-ig"
          >
            <InstagramIcon size={14} gradientId="ig-grad-footer" />
            @raindrops_beauty_salon
          </a>

          <p className="footer-copy">
            &copy; 2026 Raindrops Beauty Salon Ltd. Abbotsford, BC.
          </p>
        </div>
      </footer>
    </>
  )
}
