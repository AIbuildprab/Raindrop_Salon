'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
  type CSSProperties,
  type ReactNode,
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

/** Cap concurrent Vimeo iframes — each player is heavy on production networks. */
const MAX_CONCURRENT_PLAYERS = 4
/** Keep a player mounted briefly after leaving view to avoid remount thrash. */
const UNLOAD_DELAY_MS = 450

type PlaybackRequest = { id: string; priority: number }

type PlaybackApi = {
  request: (id: string, priority: number) => void
  release: (id: string) => void
  isAllowed: (id: string) => boolean
  subscribe: (onStoreChange: () => void) => () => void
}

function createPlaybackStore(): PlaybackApi {
  const requests = new Map<string, number>()
  const allowed = new Set<string>()
  const listeners = new Set<() => void>()

  const emit = () => {
    for (const listener of listeners) listener()
  }

  const recompute = () => {
    const ranked = [...requests.entries()]
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .slice(0, MAX_CONCURRENT_PLAYERS)
      .map(([id]) => id)

    const next = new Set(ranked)
    if (next.size === allowed.size && [...next].every(id => allowed.has(id))) return

    allowed.clear()
    for (const id of next) allowed.add(id)
    emit()
  }

  return {
    request(id, priority) {
      if (requests.get(id) === priority) return
      requests.set(id, priority)
      recompute()
    },
    release(id) {
      if (!requests.has(id)) return
      requests.delete(id)
      recompute()
    },
    isAllowed(id) {
      return allowed.has(id)
    },
    subscribe(onStoreChange) {
      listeners.add(onStoreChange)
      return () => listeners.delete(onStoreChange)
    },
  }
}

const PlaybackContext = createContext<PlaybackApi | null>(null)

function PlaybackProvider({ children }: { children: ReactNode }) {
  const store = useMemo(() => createPlaybackStore(), [])
  return <PlaybackContext.Provider value={store}>{children}</PlaybackContext.Provider>
}

function usePlaybackAllowed(id: string, wantsPlay: boolean, priority: number) {
  const store = useContext(PlaybackContext)
  if (!store) throw new Error('usePlaybackAllowed requires PlaybackProvider')

  useEffect(() => {
    if (!wantsPlay) {
      store.release(id)
      return
    }
    store.request(id, priority)
    return () => store.release(id)
  }, [id, wantsPlay, priority, store])

  return useSyncExternalStore(
    store.subscribe,
    () => store.isAllowed(id),
    () => false,
  )
}

/**
 * near  — approaching viewport (warm posters / early claim)
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

  useEffect(() => {
    if (shouldMount) {
      setMounted(true)
      return
    }
    const timer = window.setTimeout(() => {
      setMounted(false)
      setReady(false)
    }, UNLOAD_DELAY_MS)
    return () => window.clearTimeout(timer)
  }, [shouldMount])

  const onReady = useCallback(() => setReady(true), [])

  return { mounted, ready, onReady }
}

function Mp4Cell({
  video,
  cellId,
}: {
  video: Extract<GalleryVideo, { type: 'mp4' }>
  cellId: string
}) {
  const { ref, near, inView } = useInViewStages()
  const videoRef = useRef<HTMLVideoElement>(null)
  const [hovered, setHovered] = useState(false)
  const finePointer = useFinePointer()

  const wantsPlay = hovered || inView
  const priority = hovered ? 100 : inView ? 50 : near ? 10 : 0
  const allowed = usePlaybackAllowed(cellId, wantsPlay, priority)

  useEffect(() => {
    const node = videoRef.current
    if (!node) return
    if (allowed) {
      void node.play().catch(() => {})
    } else {
      node.pause()
    }
  }, [allowed])

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
        src={near || allowed ? `/videos/${video.src}` : undefined}
        poster={video.poster ? `/images/${video.poster}` : undefined}
        muted
        loop
        playsInline
        preload={allowed ? 'auto' : near ? 'metadata' : 'none'}
        aria-label={video.alt}
      />
    </div>
  )
}

function VimeoCell({
  video,
  cellId,
}: {
  video: Extract<GalleryVideo, { type: 'vimeo' }>
  cellId: string
}) {
  const { ref, near, inView } = useInViewStages()
  const [hovered, setHovered] = useState(false)
  const finePointer = useFinePointer()

  // Desktop: prefer hover; still autoplay a capped set while scrolling.
  // Touch: in-view only (no hover).
  const wantsPlay = finePointer ? hovered || inView : inView
  const priority = hovered ? 100 : inView ? 50 : near ? 10 : 0
  const allowed = usePlaybackAllowed(cellId, wantsPlay, priority)
  const { mounted, ready, onReady } = useMountedPlayer(allowed)

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
        loading={near ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={near ? 'low' : undefined}
        aria-hidden="true"
      />
      {mounted ? (
        <iframe
          src={src}
          title={video.alt}
          allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
          referrerPolicy="strict-origin-when-cross-origin"
          loading="lazy"
          onLoad={onReady}
          allowFullScreen
        />
      ) : null}
    </div>
  )
}

function VideoCell({ video, cellId }: { video: GalleryVideo; cellId: string }) {
  if (video.type === 'mp4') {
    return <Mp4Cell video={video} cellId={cellId} />
  }
  return <VimeoCell video={video} cellId={cellId} />
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
          <PlaybackProvider>
            <div className="ig-grid" data-stagger aria-label="Gallery of reels">
              {videos.map((video, i) => {
                const cellId =
                  video.type === 'vimeo' ? `vimeo-${video.vimeoId}` : `mp4-${video.src}-${i}`
                return (
                  <div key={cellId} className="ig-cell">
                    <VideoCell video={video} cellId={cellId} />
                    <div className="ig-cell-overlay" aria-hidden="true" />
                  </div>
                )
              })}
            </div>
          </PlaybackProvider>
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
