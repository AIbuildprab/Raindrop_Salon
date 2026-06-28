import { useEffect } from 'react'

export default function SiteAnimations() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll<HTMLElement>('.line-inner').forEach(el => {
        el.style.transform = 'translateY(0)'
      })
      document.querySelectorAll<HTMLElement>('.hero-sub, .hero-ctas, .hero-badge, .hero-eyebrow-wrap').forEach(el => {
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      })
      return
    }

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
        tl.to(heroDiamond, { opacity: 0.09, scale: 1, rotate: 0, duration: 1.4 }, 0)
      }
      if (eyebrow) {
        tl.to(eyebrow, { opacity: 1, y: 0, duration: 0.7 }, 0.3)
      }
      lineInners.forEach((line, i) => {
        tl.to(line, { yPercent: 0, duration: 0.85 }, 0.5 + i * 0.12)
      })
      if (heroSub) {
        tl.to(heroSub, { opacity: 1, y: 0, duration: 0.7 }, 0.95)
      }
      if (heroCtas) {
        tl.to(heroCtas, { opacity: 1, y: 0, duration: 0.7 }, 1.1)
      }
      if (heroBadge) {
        tl.to(heroBadge, { opacity: 1, duration: 0.7 }, 1.3)
      }

      document.querySelectorAll<HTMLElement>('[data-reveal]').forEach(el => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            once: true,
          },
        })
      })

      document.querySelectorAll<HTMLElement>('[data-stagger]').forEach(container => {
        const children = Array.from(container.children) as HTMLElement[]
        gsap.to(children, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.75,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 88%',
            once: true,
          },
        })
      })

      document.querySelectorAll<HTMLElement>('.gold-divider').forEach(el => {
        gsap.to(el, {
          width: 120,
          duration: 0.9,
          ease: 'power3.out',
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
