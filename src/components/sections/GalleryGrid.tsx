"use client"

import { useState } from 'react'
import Image from 'next/image'
import {
  GALLERY_FILTERS,
  GALLERY_IMAGES,
  type GalleryFilter,
} from '@/data/gallery-images'

const FILTER_LABELS: Record<GalleryFilter, string> = {
  all: 'All Work',
  bridal: 'Bridal',
  party: 'Party',
  makeup: 'Makeup',
}

export default function GalleryGrid() {
  const [filter, setFilter] = useState<GalleryFilter>('all')

  const images =
    filter === 'all'
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter(img => img.category === filter)

  return (
    <section id="gallery" className="section-light">
      <div className="section-inner">
        <span className="eyebrow" data-reveal>Gallery</span>
        <h2 className="section-title" data-reveal>
          The <em>Work</em>
        </h2>
        <div className="gold-divider" />

        <div className="gallery-filters" data-reveal role="tablist" aria-label="Filter gallery">
          {GALLERY_FILTERS.map(key => (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={filter === key}
              className={`gallery-filter${filter === key ? ' is-active' : ''}`}
              onClick={() => setFilter(key)}
            >
              {FILTER_LABELS[key]}
            </button>
          ))}
        </div>

        <div className="ig-grid" data-stagger aria-label="Gallery of makeup looks">
          {images.map(image => (
            <div key={image.src} className="ig-cell">
              <Image
                src={`/images/${image.src}`}
                alt={`Raindrop Beauty Salon — ${image.alt}`}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="ig-cell-image"
              />
              <div className="ig-cell-overlay" aria-hidden="true" />
            </div>
          ))}
        </div>

        <div className="ig-cta-wrap" data-reveal>
          <a
            href="https://www.instagram.com/raindrops_beauty_salon/"
            target="_blank"
            rel="noopener noreferrer"
            className="ig-cta"
          >
            Follow @raindrops_beauty_salon on Instagram →
          </a>
        </div>
      </div>
    </section>
  )
}
