export default function Footer() {
  return (
    <>
      <div className="footer-glass-band">
        <div className="footer-glass-band-inner">
          <div className="footer-glass-band-copy">
            <div className="footer-glass-band-eyebrow">Ready to Glow?</div>
            <h2 className="footer-glass-band-headline">
              Book Your <em>Perfect Look</em> Today
            </h2>
          </div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <a href="tel:7788910082" className="btn-gold">
              Call — (778) 891-0082
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
      </div>

      <footer>
        <div className="footer-inner">
          <a href="#hero" className="footer-logo" aria-label="Back to top">
            <svg width="30" height="30" viewBox="0 0 38 38" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
              <polygon points="19,2 36,19 19,36 2,19" stroke="#B8942E" strokeWidth="1.2" fill="none" />
              <polygon points="19,8 30,19 19,30 8,19" stroke="#B8942E" strokeWidth="0.7" strokeOpacity="0.5" fill="none" />
              <text x="19" y="23" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontSize="9" fontStyle="italic" fill="#B8942E">GG</text>
            </svg>
            <span className="footer-wordmark">
              Glam <span className="amp">&amp;</span> Glow by Kiran
            </span>
          </a>

          <a
            href="https://www.instagram.com/glamandglow_bykiran/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-ig"
          >
            @glamandglow_bykiran
          </a>

          <p className="footer-copy">
            &copy; 2026 Glam &amp; Glow by Kiran. Delta, BC.
          </p>
        </div>
      </footer>
    </>
  )
}
