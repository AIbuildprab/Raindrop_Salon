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
const UNLOAD_DELAY_MS = 800

/** If iframe onLoad is late/missing (common on mobile), still reveal the player. */
const REVEAL_FALLBACK_MS = 700

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
      { rootMargin: '280px 0px', threshold: 0 },
    )

    // Lower ratio so 2-col mobile cells start sooner while partially visible.
    const viewObserver = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting && entry.intersectionRatio >= 0.25)
      },
      { rootMargin: '48px 0px', threshold: [0, 0.25, 0.5, 0.75] },
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
  const loadedRef = useRef(false)
  const shouldMountRef = useRef(shouldMount)
  shouldMountRef.current = shouldMount

  useEffect(() => {
    if (shouldMount) {
      setMounted(true)
      if (mountedRef.current && loadedRef.current) setReady(true)
      mountedRef.current = true

      // Don't rely only on iframe onLoad — it can be delayed or miss on mobile.
      const fallback = window.setTimeout(() => {
        if (!shouldMountRef.current) return
        loadedRef.current = true
        setReady(true)
      }, REVEAL_FALLBACK_MS)

      return () => window.clearTimeout(fallback)
    }

    setReady(false)
    const timer = window.setTimeout(() => {
      setMounted(false)
      mountedRef.current = false
      loadedRef.current = false
    }, UNLOAD_DELAY_MS)
    return () => window.clearTimeout(timer)
  }, [shouldMount])

  const onReady = useCallback(() => {
    loadedRef.current = true
    if (shouldMountRef.current) setReady(true)
  }, [])

  return { mounted, ready, onReady }
}

function vimeoEmbedSrc(vimeoId: string) {
  // background=1 → muted + autoplay + loop + no chrome (paid plans).
  // Explicit autoplay/muted/loop/playsinline keep free-tier + iOS working when
  // background mode is limited. autopause=0 lets several grid reels play together.
  const params = new URLSearchParams({
    background: '1',
    autoplay: '1',
    muted: '1',
    loop: '1',
    playsinline: '1',
    autopause: '0',
    title: '0',
    byline: '0',
    portrait: '0',
    badge: '0',
    dnt: '1',
    quality: 'auto',
  })
  return `https://player.vimeo.com/video/${vimeoId}?${params.toString()}`
}

function Mp4Cell({ video }: { video: Extract<GalleryVideo, { type: 'mp4' }> }) {
  const { ref, near, inView } = useInViewStages()
  const videoRef = useRef<HTMLVideoElement>(null)
  const [hovered, setHovered] = useState(false)
  const [tapped, setTapped] = useState(false)
  const finePointer = useFinePointer()

  const wantsPlay = finePointer ? hovered || inView : inView || tapped

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
      onClick={() => {
        if (!finePointer) setTapped(v => !v)
      }}
    >
      <video
        ref={videoRef}
        className="ig-cell-image"
        src={
          near || wantsPlay
            ? video.src.includes('/')
              ? `/${video.src}`
              : `/videos/${video.src}`
            : undefined
        }
        poster={
          video.poster
            ? video.poster.startsWith('http')
              ? video.poster
              : `/images/${video.poster}`
            : undefined
        }
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
  const { ref, near, inView } = useInViewStages()
  const [hovered, setHovered] = useState(false)
  const [tapped, setTapped] = useState(false)
  const finePointer = useFinePointer()

  // Desktop: hover or in-view. Touch: in-view, or tap (Low Power Mode / autoplay blocks).
  const wantsPlay = finePointer ? hovered || inView : inView || tapped
  const { mounted, ready, onReady } = useMountedPlayer(wantsPlay)

  const poster =
    video.poster ?? `https://vumbnail.com/${video.vimeoId}.jpg`

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
      onClick={() => {
        if (!finePointer) setTapped(v => !v)
      }}
      role={finePointer ? undefined : 'button'}
      tabIndex={finePointer ? undefined : 0}
      aria-label={finePointer ? undefined : `${video.alt} — tap to play`}
      onKeyDown={
        finePointer
          ? undefined
          : e => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                setTapped(v => !v)
              }
            }
      }
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="ig-cell-poster"
        src={poster}
        alt=""
        loading={near ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={near ? 'low' : undefined}
        aria-hidden="true"
        draggable={false}
      />
      {mounted ? (
        <iframe
          key={video.vimeoId}
          src={vimeoEmbedSrc(video.vimeoId)}
          title={video.alt}
          allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
          referrerPolicy="strict-origin-when-cross-origin"
          onLoad={onReady}
          allowFullScreen
          loading="eager"
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
