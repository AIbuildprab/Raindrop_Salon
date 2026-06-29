const DETAILS = [
  'Studio-based in Delta, BC',
  'On-location across the Lower Mainland',
  'Available for travel',
  'Hair & makeup — one complete glam package',
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
              <em>Kirandeep</em>
            </h2>
            <div className="gold-divider" />
            <p className="about-body" data-reveal>
              Kirandeep Sandhar is a Delta-based hair and makeup artist known for making every
              client feel truly seen. Specializing in full glam for South Asian events, bridal,
              and celebrations of all kinds, she brings warmth and artistry to every look.
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
              <span>Portrait of Kirandeep</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
