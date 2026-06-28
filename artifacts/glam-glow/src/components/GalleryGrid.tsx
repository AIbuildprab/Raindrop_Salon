const GALLERY_LABELS = Array.from({ length: 8 }, (_, i) => `Glam & Glow by Kiran — look ${i + 1}`)

export default function GalleryGrid() {
  return (
    <section id="gallery" className="section-light">
      <div className="section-inner">
        <span className="eyebrow" data-reveal>Gallery</span>
        <h2 className="section-title" data-reveal>
          The <em>Work</em>
        </h2>
        <div className="gold-divider" />

        <div className="ig-grid" data-stagger aria-label="Gallery of makeup looks">
          {GALLERY_LABELS.map((label, i) => (
            <div key={i} className="ig-cell">
              <div className="ig-cell-placeholder" aria-label={label}>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="7" width="32" height="24" rx="2" stroke="#B5A04D" strokeWidth="1.5" fill="none" />
                  <circle cx="12" cy="15" r="3" stroke="#B5A04D" strokeWidth="1.2" fill="none" />
                  <path d="M2 25l9-7 7 5 5-4 11 8" stroke="#B5A04D" strokeWidth="1.2" strokeLinejoin="round" fill="none" />
                </svg>
              </div>
              <div className="ig-cell-overlay" aria-hidden="true" />
            </div>
          ))}
        </div>

        <div className="ig-cta-wrap" data-reveal>
          <a
            href="https://www.instagram.com/glamandglow_bykiran/"
            target="_blank"
            rel="noopener noreferrer"
            className="ig-cta"
          >
            Follow @glamandglow_bykiran on Instagram →
          </a>
        </div>
      </div>
    </section>
  )
}
