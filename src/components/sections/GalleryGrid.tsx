"use client"

import { useState } from 'react'
import {
  GALLERY_FILTERS,
  GALLERY_VIDEOS,
  type GalleryFilter,
  type GalleryVideo,
} from '@/data/gallery-videos'

const FILTER_LABELS: Record<GalleryFilter, string> = {
  all: 'All Work',
  bridal: 'Bridal',
  party: 'Party',
  makeup: 'Makeup',
}

function VideoCell({ video }: { video: GalleryVideo }) {
  if (video.type === 'vimeo') {
    const src =
      `https://player.vimeo.com/video/${video.vimeoId}` +
      `?background=1&autoplay=1&loop=1&muted=1&autopause=0` +
      `&title=0&byline=0&portrait=0&badge=0`
    return (
      <div className="ig-cell-video">
        <iframe
          src={src}
          title={video.alt}
          allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          loading="lazy"
        />
      </div>
    )
  }

  return (
    <video
      className="ig-cell-image"
      src={`/videos/${video.src}`}
      poster={video.poster ? `/images/${video.poster}` : undefined}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={video.alt}
    />
  )
}

export default function GalleryGrid() {
  const [filter, setFilter] = useState<GalleryFilter>('all')

  const videos =
    filter === 'all'
      ? GALLERY_VIDEOS
      : GALLERY_VIDEOS.filter(v => v.category === filter)

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

        {videos.length > 0 ? (
          <div className="ig-grid" data-stagger aria-label="Gallery of reels">
            {videos.map((video, i) => (
              <div key={`${video.type}-${i}`} className="ig-cell">
                <VideoCell video={video} />
                <div className="ig-cell-overlay" aria-hidden="true" />
              </div>
            ))}
          </div>
        ) : (
          <p className="gallery-empty" data-reveal>
            New reels coming soon — follow along on Instagram for the latest looks.
          </p>
        )}

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
