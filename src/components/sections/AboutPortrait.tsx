'use client'

import { useEffect, useRef, useState } from 'react'

const POSTER = '/images/about-reception-poster.webp'

function playWhenReady(video: HTMLVideoElement) {
  if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
    void video.play().catch(() => {})
    return () => {}
  }

  const onReady = () => {
    void video.play().catch(() => {})
  }

  video.addEventListener('loadeddata', onReady, { once: true })
  video.addEventListener('canplay', onReady, { once: true })
  video.load()

  return () => {
    video.removeEventListener('loadeddata', onReady)
    video.removeEventListener('canplay', onReady)
  }
}

export default function AboutPortrait() {
  const frameRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [nearView, setNearView] = useState(false)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = frameRef.current
    if (!el) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const ratio = entry.intersectionRatio
        setNearView(entry.isIntersecting || ratio > 0)
        setInView(entry.isIntersecting && ratio >= 0.25)
      },
      { rootMargin: '120px', threshold: [0, 0.25, 0.5] },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

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
        preload={nearView ? 'metadata' : 'none'}
        aria-label="Raindrop Beauty Salon studio reception"
      />
    </div>
  )
}
