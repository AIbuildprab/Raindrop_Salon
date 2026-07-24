'use client'

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type CSSProperties,
} from 'react'
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

/** Keep a player mounted briefly after leaving view to avoid remount thrash. */
const UNLOAD_DELAY_MS = 600

/**
 * near  — approaching viewport (warm posters / early load)
 * inView — enough of the cell is visible to autoplay
 */
function useInViewStages() {
  const ref = useRef<HTMLDivElement>(null)
  const [near, setNear] = useState(false)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    const nearObserver = new IntersectionObserver(
      ([entry]) => setNear(entry.isIntersecting),
      { rootMargin: '320px 0px', threshold: 0 },
    )

    const viewObserver = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting && entry.intersectionRatio >= 0.4)
      },
      { rootMargin: '40px 0px', threshold: [0, 0.4, 0.65] },
    )

    nearObserver.observe(el)
    viewObserver.observe(el)
    return () => {
      nearObserver.disconnect()
      viewObserver.disconnect()
    }
  }, [])

  return { ref, near, inView }
}

function useFinePointer() {
  return useSyncExternalStore(
    onChange => {
      const mq = window.matchMedia('(hover: hover) and (pointer: fine)')
      mq.addEventListener('change', onChange)
      return () => mq.removeEventListener('change', onChange)
    },
    () => window.matchMedia('(hover: hover) and (pointer: fine)').matches,
    () => false,
  )
}

function useMountedPlayer(shouldMount: boolean) {
  const [mounted, setMounted] = useState(false)
  const [ready, setReady] = useState(false)
  const mountedRef = useRef(false)

  useEffect(() => {
    if (shouldMount) {
      setMounted(true)
      // Returning during unload grace — same iframe is still in the DOM.
      if (mountedRef.current) setReady(true)
      mountedRef.current = true
      return
    }
    // Show poster immediately — don't wait for unload or blank Vimeo frames show through.
    setReady(false)
    const timer = window.setTimeout(() => {
      setMounted(false)
      mountedRef.current = false
    }, UNLOAD_DELAY_MS)
    return () => window.clearTimeout(timer)
  }, [shouldMount])

  const onReady = useCallback(() => setReady(true), [])

  return { mounted, ready, onReady }
}

function Mp4Cell({ video }: { video: Extract<GalleryVideo, { type: 'mp4' }> }) {
  const { ref, near, inView } = useInViewStages()
  const videoRef = useRef<HTMLVideoElement>(null)
  const [hovered, setHovered] = useState(false)
  const finePointer = useFinePointer()

  const wantsPlay = hovered || inView

  useEffect(() => {
    const node = videoRef.current
    if (!node) return
    if (wantsPlay) {
      void node.play().catch(() => {})
    } else {
      node.pause()
    }
  }, [wantsPlay])

  return (
    <div
      className="ig-cell-video"
      ref={ref}
      style={
        video.focusY != null
          ? ({ '--gallery-focus-y': `${video.focusY}%` } as CSSProperties)
          : undefined
      }
      onMouseEnter={() => finePointer && setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <video
        ref={videoRef}
        className="ig-cell-image"
        src={near || wantsPlay ? `/videos/${video.src}` : undefined}
        poster={video.poster ? `/images/${video.poster}` : undefined}
        muted
        loop
        playsInline
        preload={wantsPlay ? 'auto' : near ? 'metadata' : 'none'}
        aria-label={video.alt}
      />
    </div>
  )
}

function VimeoCell({ video }: { video: Extract<GalleryVideo, { type: 'vimeo' }> }) {
  const { ref, inView } = useInViewStages()
  const [hovered, setHovered] = useState(false)
  const finePointer = useFinePointer()

  // Desktop: hover or in-view; touch: in-view only.
  const wantsPlay = finePointer ? hovered || inView : inView
  const { mounted, ready, onReady } = useMountedPlayer(wantsPlay)

  const poster =
    video.poster ?? `https://vumbnail.com/${video.vimeoId}.jpg`
  const src =
    `https://player.vimeo.com/video/${video.vimeoId}` +
    `?background=1&autoplay=1&loop=1&muted=1&autopause=1` +
    `&title=0&byline=0&portrait=0&badge=0&dnt=1&quality=auto`

  return (
    <div
      className={`ig-cell-video${ready ? ' is-playing' : ''}`}
      ref={ref}
      style={
        video.focusY != null
          ? ({ '--gallery-focus-y': `${video.focusY}%` } as CSSProperties)
          : undefined
      }
      onMouseEnter={() => finePointer && setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="ig-cell-poster"
        src={poster}
        alt=""
        loading="eager"
        decoding="async"
        aria-hidden="true"
      />
      {mounted ? (
        <iframe
          src={src}
          title={video.alt}
          allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
          referrerPolicy="strict-origin-when-cross-origin"
          onLoad={onReady}
          allowFullScreen
        />
      ) : null}
    </div>
  )
}

function VideoCell({ video }: { video: GalleryVideo }) {
  if (video.type === 'mp4') {
    return <Mp4Cell video={video} />
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
            {videos.map((video, i) => {
              const cellId =
                video.type === 'vimeo' ? `vimeo-${video.vimeoId}` : `mp4-${video.src}-${i}`
              return (
                <div key={cellId} className="ig-cell">
                  <VideoCell video={video} />
                  <div className="ig-cell-overlay" aria-hidden="true" />
                </div>
              )
            })}
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
