"use client"

import { useEffect, useRef } from 'react'

export default function Particles() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const COUNT = 16
    const particles: HTMLSpanElement[] = []

    for (let i = 0; i < COUNT; i++) {
      const p = document.createElement('span')
      p.className = 'particle'
      const size = Math.random() * 3 + 1.5
      p.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${Math.random() * 100}%;
        bottom: ${Math.random() * -20}%;
        animation-duration: ${14 + Math.random() * 18}s;
        animation-delay: ${Math.random() * 12}s;
      `
      container.appendChild(p)
      particles.push(p)
    }

    return () => {
      particles.forEach(p => p.remove())
    }
  }, [])

  return <div id="particles" ref={ref} aria-hidden="true" />
}
