'use client'

import { useEffect, useRef, useState } from 'react'

export default function AboutPortrait() {
  const frameRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [inView, setInView] = useState(false)

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

  useEffect(() => {
    const node = videoRef.current
    if (!node) return
    if (inView) {
      void node.play().catch(() => {})
    } else {
      node.pause()
    }
  }, [inView])

  return (
    <div ref={frameRef} className="about-portrait-frame">
      <video
        ref={videoRef}
        className="about-portrait-video"
        src="/videos/reception.mp4"
        muted
        loop
        playsInline
        preload={inView ? 'metadata' : 'none'}
        aria-label="Raindrop Beauty Salon studio reception"
      />
    </div>
  )
}
