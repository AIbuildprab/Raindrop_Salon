"use client"

import { useEffect } from 'react'

export default function SiteAnimations() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const load = async () => {
      const { default: gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      const lineInners = document.querySelectorAll<HTMLElement>('.line-inner')
      const heroSub    = document.querySelector<HTMLElement>('.hero-sub')
      const heroCtas   = document.querySelector<HTMLElement>('.hero-ctas')
      const heroMedia  = document.querySelector<HTMLElement>('.hero-media-image')

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      if (heroMedia) {
        tl.from(heroMedia, { scale: 1.06, opacity: 0.7, duration: 1.8 }, 0)
      }
      lineInners.forEach((line, i) => {
        tl.from(line, { opacity: 0, y: 20, duration: 0.75 }, 0.25 + i * 0.12)
      })
      if (heroSub) {
        tl.from(heroSub, { opacity: 0, y: 16, duration: 0.7 }, 0.6)
      }
      if (heroCtas) {
        tl.from(heroCtas, { opacity: 0, y: 16, duration: 0.7 }, 0.75)
      }

      document.querySelectorAll<HTMLElement>('[data-reveal]').forEach(el => {
        gsap.from(el, {
          opacity: 0,
          y: 32,
          duration: 0.85,
          ease: 'power3.out',
          immediateRender: false,
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            once: true,
          },
        })
      })

      document.querySelectorAll<HTMLElement>('[data-stagger]').forEach(container => {
        const children = Array.from(container.children) as HTMLElement[]
        gsap.from(children, {
          opacity: 0,
          y: 24,
          scale: 0.97,
          duration: 0.75,
          stagger: 0.12,
          ease: 'power3.out',
          immediateRender: false,
          scrollTrigger: {
            trigger: container,
            start: 'top 88%',
            once: true,
          },
        })
      })

      document.querySelectorAll<HTMLElement>('.gold-divider').forEach(el => {
        gsap.from(el, {
          width: 0,
          duration: 0.9,
          ease: 'power3.out',
          immediateRender: false,
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            once: true,
          },
        })
      })

      document.querySelectorAll<HTMLElement>('.review-card').forEach(card => {
        card.addEventListener('mousemove', (e: MouseEvent) => {
          const rect = card.getBoundingClientRect()
          const x = (e.clientX - rect.left) / rect.width  - 0.5
          const y = (e.clientY - rect.top)  / rect.height - 0.5
          gsap.to(card, {
            rotateY: x * 8,
            rotateX: -y * 8,
            transformPerspective: 800,
            duration: 0.3,
            ease: 'power2.out',
          })
        })
        card.addEventListener('mouseleave', () => {
          gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.5, ease: 'power3.out' })
        })
      })
    }

    load()
  }, [])

  return null
}
