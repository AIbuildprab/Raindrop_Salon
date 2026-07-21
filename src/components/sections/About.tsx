const DETAILS = [
  'Studio-based in Abbotsford, BC',
  'On-location across the Fraser Valley & Lower Mainland',
  '18+ years of bridal experience',
  'Certified esthetician — hair, makeup & skin in one place',
]

export default function About() {
  return (
    <section id="about" className="section-light">
      <div className="section-inner">
        <div className="about-grid">
          <div>
            <span className="eyebrow" data-reveal>About</span>
            <h2 className="section-title" data-reveal>
              Meet<br />
              <em>Jass</em>
            </h2>
            <div className="gold-divider" />
            <p className="about-body" data-reveal>
              Jass is an Abbotsford-based certified esthetician and hair &amp; makeup artist with
              over 18 years of experience making brides shine. Specializing in full glam for South
              Asian weddings, bridal, and celebrations of all kinds, she brings warmth and artistry
              to every look.
            </p>
            <div data-stagger>
              {DETAILS.map(detail => (
                <div key={detail} className="about-detail">
                  <span className="about-detail-icon" aria-hidden="true">✦</span>
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>

          <div data-reveal>
            <div className="about-portrait-placeholder">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="22" r="14" stroke="#B8942E" strokeWidth="1.5" fill="none" />
                <path d="M8 58c0-13.255 10.745-24 24-24s24 10.745 24 24" stroke="#B8942E" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              </svg>
              <span>Portrait of Jass</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
