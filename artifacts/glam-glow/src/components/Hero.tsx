export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-atmosphere" aria-hidden="true" />

      <svg
        className="hero-diamond-bg"
        viewBox="0 0 400 400"
        fill="none"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon points="200,0 400,200 200,400 0,200" stroke="#B5A04D" strokeWidth="0.8" strokeOpacity="0.7" fill="none" />
        <polygon points="200,40 360,200 200,360 40,200" stroke="#B5A04D" strokeWidth="0.6" strokeOpacity="0.5" fill="none" />
        <polygon points="200,80 320,200 200,320 80,200" stroke="#B5A04D" strokeWidth="0.4" strokeOpacity="0.3" fill="none" />
        <polygon points="200,120 280,200 200,280 120,200" stroke="#B5A04D" strokeWidth="0.3" strokeOpacity="0.2" fill="none" />
      </svg>

      <div className="hero-content">
        <div className="hero-eyebrow-wrap">
          <span className="eyebrow">Hair &amp; Makeup Artist — Delta, BC</span>
        </div>

        <h1 className="hero-headline">
          <span className="line-mask">
            <span className="line-inner">Every Occasion</span>
          </span>
          <span className="line-mask">
            <span className="line-inner">
              Deserves a <em>Flawless</em>
            </span>
          </span>
          <span className="line-mask">
            <span className="line-inner">Look</span>
          </span>
        </h1>

        <p className="hero-sub">
          Full glam hair &amp; makeup for your Mehndi nights, birthdays, bridal events, and every
          celebration that matters. Personal, polished, and made for you.
        </p>

        <div className="hero-ctas">
          <a href="tel:7788910082" className="btn-gold">
            Call to Book — (778) 891-0082
          </a>
          <a
            href="https://wa.me/17788910082"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glass"
          >
            WhatsApp Kiran
          </a>
        </div>
      </div>

      <div className="hero-badge" aria-label="5.0 stars on Google Reviews">
        <div className="hero-badge-stars" aria-hidden="true">★★★★★</div>
        <div className="hero-badge-text">5.0 on Google Reviews</div>
      </div>
    </section>
  )
}
