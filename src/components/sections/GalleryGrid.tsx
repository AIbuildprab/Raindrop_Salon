"use client"

import { useEffect, useRef, useState, useSyncExternalStore, type CSSProperties } from 'react'
import {
  GALLERY_FILTERS,
  GALLERY_VIDEOS,
  type GalleryFilter,
  type GalleryVideo,
} from '@/data/gallery-videos'
import InstagramIcon from '@/components/ui/InstagramIcon'
import {
  getInViewRootMargin,
  getInViewThreshold,
  useMobileLayout,
} from '@/hooks/use-mobile-layout'
import {
  clearEmbedInterest,
  galleryPosterPath,
  getActiveEmbedCount,
  hasEmbedSlot,
  subscribeEmbedSlots,
  updateEmbedInterest,
} from '@/lib/gallery-embeds'
import { playWhenReady, vimeoEmbedSrc } from '@/lib/video-playback'

const FILTER_LABELS: Record<GalleryFilter, string> = {
  all: 'All Work',
  bridal: 'Bridal',
  party: 'Party',
  makeup: 'Makeup',
}

function useInViewPlay() {
  const isMobileLayout = useMobileLayout()
  const ref = useRef<HTMLDivElement>(null)
  const [state, setState] = useState({ inView: false, ratio: 0 })
  const minRatio = getInViewThreshold(isMobileLayout)
  const rootMargin = getInViewRootMargin(isMobileLayout)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const ratio = entry.intersectionRatio
        const inView = entry.isIntersecting && ratio >= minRatio
        setState({
          inView,
          ratio: entry.isIntersecting ? ratio : 0,
        })
      },
      { rootMargin, threshold: [0, 0.15, 0.25, 0.35, 0.5, 0.75, 1] },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [minRatio, rootMargin])

  return { ref, ...state }
}

function useEmbedSlot(id: string, inView: boolean, ratio: number) {
  useSyncExternalStore(subscribeEmbedSlots, getActiveEmbedCount, () => 0)

  useEffect(() => {
    if (inView && ratio > 0) {
      updateEmbedInterest(id, ratio)
    } else {
      clearEmbedInterest(id)
    }
    return () => clearEmbedInterest(id)
  }, [id, inView, ratio])

  return inView && hasEmbedSlot(id)
}

function Mp4Cell({ video, cellId }: { video: Extract<GalleryVideo, { type: 'mp4' }>; cellId: string }) {
  const { ref, inView, ratio } = useInViewPlay()
  const videoRef = useRef<HTMLVideoElement>(null)
  const hasSlot = useEmbedSlot(cellId, inView, ratio)

  useEffect(() => {
    const node = videoRef.current
    if (!node) return
    if (!hasSlot) {
      node.pause()
      return
    }
    return playWhenReady(node)
  }, [hasSlot])

  return (
    <div className={`ig-cell-video${hasSlot ? ' is-playing' : ''}`} ref={ref}>
      <video
        ref={videoRef}
        className="ig-cell-image"
        src={`/videos/${video.src}`}
        poster={video.poster ? `/images/${video.poster}` : undefined}
        muted
        loop
        playsInline
        autoPlay={hasSlot}
        preload={inView ? 'metadata' : 'none'}
        aria-label={video.alt}
      />
    </div>
  )
}

function VimeoCell({ video }: { video: Extract<GalleryVideo, { type: 'vimeo' }> }) {
  const isMobileLayout = useMobileLayout()
  const { ref, inView, ratio } = useInViewPlay()
  const hasSlot = useEmbedSlot(video.vimeoId, inView, ratio)
  const [isPlaying, setIsPlaying] = useState(false)
  const playTimerRef = useRef<number | null>(null)

  const poster = video.poster ?? galleryPosterPath(video.vimeoId)
  const src = vimeoEmbedSrc(video.vimeoId, isMobileLayout)

  useEffect(() => {
    if (!hasSlot) {
      setIsPlaying(false)
      if (playTimerRef.current !== null) {
        window.clearTimeout(playTimerRef.current)
        playTimerRef.current = null
      }
    }
  }, [hasSlot])

  useEffect(() => {
    return () => {
      if (playTimerRef.current !== null) {
        window.clearTimeout(playTimerRef.current)
      }
    }
  }, [])

  const handleIframeLoad = () => {
    if (playTimerRef.current !== null) {
      window.clearTimeout(playTimerRef.current)
    }
    playTimerRef.current = window.setTimeout(() => {
      setIsPlaying(true)
      playTimerRef.current = null
    }, isMobileLayout ? 900 : 500)
  }

  return (
    <div
      className={`ig-cell-video${isPlaying ? ' is-playing' : ''}${isMobileLayout ? ' ig-cell-video--inline' : ''}`}
      ref={ref}
      style={
        video.focusY != null
          ? ({ '--gallery-focus-y': `${video.focusY}%` } as CSSProperties)
          : undefined
      }
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="ig-cell-poster"
        src={poster}
        alt=""
        loading="lazy"
        decoding="async"
        aria-hidden="true"
        onError={e => {
          e.currentTarget.src = `https://vumbnail.com/${video.vimeoId}.jpg`
        }}
      />
      {hasSlot ? (
        <iframe
          src={src}
          title={video.alt}
          className="ig-vimeo-frame"
          allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          onLoad={handleIframeLoad}
        />
      ) : null}
    </div>
  )
}

function VideoCell({ video, cellId }: { video: GalleryVideo; cellId: string }) {
  if (video.type === 'mp4') {
    return <Mp4Cell video={video} cellId={cellId} />
  }
  return <VimeoCell video={video} />
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
                <VideoCell
                  video={video}
                  cellId={video.type === 'vimeo' ? video.vimeoId : `${video.src}-${i}`}
                />
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
