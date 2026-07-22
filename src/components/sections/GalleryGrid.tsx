"use client"

import { useEffect, useRef, useState } from 'react'
import {
  GALLERY_FILTERS,
  GALLERY_VIDEOS,
  type GalleryFilter,
  type GalleryVideo,
} from '@/data/gallery-videos'
import InstagramIcon from '@/components/ui/InstagramIcon'

const FILTER_LABELS: Record<GalleryFilter, string> = {
  all: 'All Work',
  bridal: 'Bridal',
  party: 'Party',
  makeup: 'Makeup',
}

function useInViewPlay(rootMargin = '80px') {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setActive(entry.isIntersecting && entry.intersectionRatio >= 0.35)
      },
      { rootMargin, threshold: [0, 0.35, 0.6] },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [rootMargin])

  return { ref, active }
}

function Mp4Cell({ video }: { video: Extract<GalleryVideo, { type: 'mp4' }> }) {
  const { ref, active } = useInViewPlay()
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const node = videoRef.current
    if (!node) return
    if (active) {
      void node.play().catch(() => {})
    } else {
      node.pause()
    }
  }, [active])

  return (
    <div className="ig-cell-video" ref={ref}>
      <video
        ref={videoRef}
        className="ig-cell-image"
        src={`/videos/${video.src}`}
        poster={video.poster ? `/images/${video.poster}` : undefined}
        muted
        loop
        playsInline
        preload={active ? 'metadata' : 'none'}
        aria-label={video.alt}
      />
    </div>
  )
}

function VideoCell({ video }: { video: GalleryVideo }) {
  const { ref, active } = useInViewPlay()

  if (video.type === 'mp4') {
    return <Mp4Cell video={video} />
  }

  const poster = `https://vumbnail.com/${video.vimeoId}.jpg`
  const src =
    `https://player.vimeo.com/video/${video.vimeoId}` +
    `?background=1&autoplay=1&loop=1&muted=1&autopause=1` +
    `&title=0&byline=0&portrait=0&badge=0&dnt=1`

  return (
    <div className="ig-cell-video" ref={ref}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="ig-cell-poster"
        src={poster}
        alt=""
        loading="lazy"
        decoding="async"
        aria-hidden="true"
      />
      {active ? (
        <iframe
          src={src}
          title={video.alt}
          allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : null}
    </div>
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
              <div
                key={video.type === 'vimeo' ? video.vimeoId : `${video.src}-${i}`}
                className="ig-cell"
              >
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
            <InstagramIcon className="ig-cta-icon" size={18} gradientId="ig-grad-gallery" />
            <span>Follow @raindrops_beauty_salon</span>
            <span className="ig-cta-arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
