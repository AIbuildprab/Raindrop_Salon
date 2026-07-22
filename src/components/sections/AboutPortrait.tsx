'use client'

import { useEffect, useRef, useState } from 'react'
import { useCoarsePointer } from '@/hooks/use-coarse-pointer'

export default function AboutPortrait() {
  const isMobile = useCoarsePointer()
  const frameRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [inView, setInView] = useState(false)
  const [tapped, setTapped] = useState(false)

  useEffect(() => {
    const el = frameRef.current
    if (!el) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting && entry.intersectionRatio >= 0.25)
      },
      { threshold: [0, 0.25, 0.5] },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const shouldPlay = inView && (!isMobile || tapped)

  useEffect(() => {
    const node = videoRef.current
    if (!node) return
    if (shouldPlay) {
      void node.play().catch(() => {})
    } else {
      node.pause()
    }
  }, [shouldPlay])

  const showPlay = isMobile && inView && !tapped

  return (
    <div
      ref={frameRef}
      className="about-portrait-frame"
      onClick={showPlay ? () => setTapped(true) : undefined}
      role={showPlay ? 'button' : undefined}
      tabIndex={showPlay ? 0 : undefined}
      onKeyDown={
        showPlay
          ? e => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                setTapped(true)
              }
            }
          : undefined
      }
    >
      <video
        ref={videoRef}
        className="about-portrait-video"
        src="/videos/reception.mp4"
        muted
        loop
        playsInline
        preload={shouldPlay ? 'metadata' : 'none'}
        aria-label="Raindrop Beauty Salon studio reception"
      />
      {showPlay ? <span className="about-portrait-play" aria-hidden="true" /> : null}
    </div>
  )
}
