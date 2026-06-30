import Image from 'next/image'
import { GALLERY_IMAGES } from '@/data/gallery-images'

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
          {GALLERY_IMAGES.map((filename, i) => {
            const alt = `Glam & Glow by Kiran — makeup look ${i + 1}`
            return (
              <div key={filename} className="ig-cell">
                <Image
                  src={`/images/${filename}`}
                  alt={alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="ig-cell-image"
                />
                <div className="ig-cell-overlay" aria-hidden="true" />
              </div>
            )
          })}
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
