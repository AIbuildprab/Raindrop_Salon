import Image from 'next/image'
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from '@/lib/contact'

const HERO_IMAGE = '/images/imgi_20_734008808_18420432292176458_4019005442892223729_n.jpg'

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-media" aria-hidden="true">
        <Image
          src={HERO_IMAGE}
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-media-image"
        />
        <div className="hero-media-overlay" />
      </div>

      <div className="hero-content">
        <div className="hero-eyebrow-wrap">
          <span className="hero-pill">
            <span className="hero-pill-spark" aria-hidden="true">✦</span>
            Premium Beauty Experience
          </span>
        </div>

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
          <a href={PHONE_TEL} className="btn-gold">
            Call to Book — {PHONE_DISPLAY}
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
    </section>
  )
}
