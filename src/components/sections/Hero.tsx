import Image from 'next/image'
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from '@/lib/contact'

const HERO_BG = '/images/hero-bg.png'
const LOGO = '/images/raindrop-logo.png'

export default function Hero() {
  return (
    <section id="hero" className="hero-brand">
      <div className="hero-media" aria-hidden="true">
        <Image
          src={HERO_BG}
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-media-image"
        />
        <div className="hero-media-overlay" />
      </div>

      <div className="hero-logo-mark" aria-hidden="true">
        <Image
          src={LOGO}
          alt=""
          width={900}
          height={900}
          priority
          className="hero-logo-mark-img"
        />
      </div>

      <div className="hero-content">
        <h1 className="hero-headline">
          <span className="line-mask">
            <span className="line-inner">Raindrop</span>
          </span>
          <span className="line-mask">
            <span className="line-inner">
              <em>Beauty Salon</em>
            </span>
          </span>
        </h1>

        <p className="hero-sub">
          Certified esthetician with 18+ years making brides shine. Full glam hair &amp; makeup for
          weddings, Mehndi nights, and every celebration that matters — personal, polished, and made for you.
        </p>

        <div className="hero-ctas">
          <a href={PHONE_TEL} className="btn-gold" aria-label={`Call to Book — ${PHONE_DISPLAY}`}>
            <span className="btn-label-full">Call to Book — {PHONE_DISPLAY}</span>
            <span className="btn-label-short">Call to Book</span>
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glass"
          >
            WhatsApp Jass
          </a>
        </div>
      </div>
    </section>
  )
}
