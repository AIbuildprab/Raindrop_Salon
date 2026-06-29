"use client"

import { useEffect } from 'react'

export default function SiteAnimations() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const load = async () => {
      const { default: gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      const heroDiamond = document.querySelector<HTMLElement>('.hero-diamond-bg')
      const eyebrow     = document.querySelector<HTMLElement>('.hero-eyebrow-wrap')
      const lineInners  = document.querySelectorAll<HTMLElement>('.line-inner')
      const heroSub     = document.querySelector<HTMLElement>('.hero-sub')
      const heroCtas    = document.querySelector<HTMLElement>('.hero-ctas')
      const heroBadge   = document.querySelector<HTMLElement>('.hero-badge')

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      if (heroDiamond) {
        tl.from(heroDiamond, { opacity: 0, scale: 0.92, duration: 1.6 }, 0)
      }
      if (eyebrow) {
        tl.from(eyebrow, { opacity: 0, y: 16, duration: 0.7 }, 0.15)
      }
      lineInners.forEach((line, i) => {
        tl.from(line, { opacity: 0, y: 20, duration: 0.75 }, 0.3 + i * 0.12)
      })
      if (heroSub) {
        tl.from(heroSub, { opacity: 0, y: 16, duration: 0.7 }, 0.7)
      }
      if (heroCtas) {
        tl.from(heroCtas, { opacity: 0, y: 16, duration: 0.7 }, 0.85)
      }
      if (heroBadge) {
        tl.from(heroBadge, { opacity: 0, duration: 0.6 }, 1.0)
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

      const nav = document.querySelector('#main-nav')
      if (nav) {
        ScrollTrigger.create({
          start: 60,
          onEnter:     () => nav.classList.add('scrolled'),
          onLeaveBack: () => nav.classList.remove('scrolled'),
        })
      }
    }

    load()
  }, [])

  return null
}
