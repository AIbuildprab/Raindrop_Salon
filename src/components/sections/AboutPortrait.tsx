'use client'

import { useEffect, useRef, useState } from 'react'
import { useMobileLayout } from '@/hooks/use-mobile-layout'
import { playWhenReady } from '@/lib/video-playback'

const POSTER = '/images/about-reception-poster.webp'

export default function AboutPortrait() {
  const isMobileLayout = useMobileLayout()
  const frameRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [nearView, setNearView] = useState(false)
  const [inView, setInView] = useState(false)
  const minRatio = isMobileLayout ? 0.15 : 0.25
  const rootMargin = isMobileLayout ? '160px' : '120px'

  useEffect(() => {
    const el = frameRef.current
    if (!el) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const ratio = entry.intersectionRatio
        setNearView(entry.isIntersecting || ratio > 0)
        setInView(entry.isIntersecting && ratio >= minRatio)
      },
      { rootMargin, threshold: [0, 0.15, 0.25, 0.5] },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [minRatio, rootMargin])

  useEffect(() => {
    const node = videoRef.current
    if (!node) return

    if (!inView) {
      node.pause()
      return
    }

    return playWhenReady(node)
  }, [inView])

  return (
    <div ref={frameRef} className="about-portrait-frame">
      <video
        ref={videoRef}
        className="about-portrait-video"
        src="/videos/reception.mp4"
        poster={POSTER}
        muted
        loop
        playsInline
        autoPlay={inView}
        preload={nearView ? 'metadata' : 'none'}
        aria-label="Raindrop Beauty Salon studio reception"
      />
    </div>
  )
}
