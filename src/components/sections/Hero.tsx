import Image from 'next/image'
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from '@/lib/contact'

const HERO_BG = '/images/hero-bg.png'
const LOGO = '/images/raindrop-logo-512.webp'

export default function Hero() {
  return (
    <section id="hero" className="hero-brand">
      <div className="hero-media" aria-hidden="true">
        <picture>
          <source media="(max-width: 768px)" srcSet="/images/hero-bg-mobile.webp" type="image/webp" />
          <source srcSet="/images/hero-bg.webp" type="image/webp" />
          <img
            src={HERO_BG}
            alt=""
            className="hero-media-image"
            fetchPriority="high"
            decoding="async"
          />
        </picture>
        <div className="hero-media-overlay" />
      </div>

      <div className="hero-logo-mark" aria-hidden="true">
        <Image
          src={LOGO}
          alt=""
          width={512}
          height={512}
          sizes="(max-width: 600px) 88vw, (max-width: 900px) 78vw, 680px"
          loading="lazy"
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
