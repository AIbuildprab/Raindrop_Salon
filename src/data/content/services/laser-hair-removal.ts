import type { LongformDoc } from '../types'

export const laserHairRemoval: LongformDoc = {
  slug: 'laser-hair-removal',
  kind: 'service',
  eyebrow: 'Core service',
  h1: 'Laser Hair Removal',
  h1Italic: 'Abbotsford',
  lede: [
    'Laser at Raindrops is a studio service — face, body, and a gentlemen’s menu — with prices posted so you can plan a series without a surprise quote at the chair.',
  ],
  relatedAreaSlugs: ['abbotsford', 'mission', 'chilliwack', 'langley', 'surrey'],
  relatedServiceSlugs: ['hair-and-makeup'],
  areasHeading: 'We also serve these areas',
  seoTitle: 'Laser Hair Removal Abbotsford | Face, Body & Gentlemen',
  seoDescription:
    'Laser hair removal in Abbotsford at Raindrops Beauty Salon. Clear per-area pricing for face and body, plus a gentlemen’s menu. Book a consult with Jass.',
  imageAlts: [
    'Laser hair removal treatment room in Abbotsford',
    'Upper lip and face laser appointment at Raindrops Beauty Salon',
    'Client arriving from Mission for a laser series',
    'Abbotsford studio exterior near Thurston Place',
  ],
  blocks: [
    {
      type: 'h2',
      text: 'Why people book laser here',
    },
    {
      type: 'p',
      parts: [
        'Searchers want fewer ingrowns, less weekly shaving, and a place that will tell them honestly if their skin and hair are a fit. Jass is a certified esthetician — laser sits beside facials, threading, and waxing in the same Abbotsford studio, so you are not bounced between three shops for one body.',
      ],
    },
    {
      type: 'h2',
      text: 'What laser can (and cannot) do',
    },
    {
      type: 'p',
      parts: [
        'Laser targets pigment in the follicle. Darker hair on lighter-to-medium skin usually responds best. Blonde, grey, and very fine vellus hair is a poor candidate. A consult is how we check skin tone, recent sun, and any medication that makes light-based treatment a bad idea.',
      ],
    },
    {
      type: 'ul',
      items: [
        'Expect a series, not a single miracle session.',
        'Hair sheds over the following weeks; that is the cycle, not a fail.',
        'Maintenance sessions are normal after the first series.',
        'Waxing the same area between sessions works against you — shave as directed instead.',
      ],
    },
    {
      type: 'h2',
      text: 'Face and body menu',
    },
    {
      type: 'p',
      parts: [
        'These are the posted studio prices. Combination areas can be quoted if you want a full-leg plus bikini day rather than two separate bookings.',
      ],
    },
    {
      type: 'table',
      caption: 'Laser hair removal — posted prices',
      headers: ['Area', 'Price'],
      rows: [
        ['Full face', '$75'],
        ['Sideburns', '$30'],
        ['Uni brow', '$25'],
        ['Upper lip', '$30'],
        ['Under arms', '$40'],
        ['Half arms', '$150'],
        ['Full arms', '$200'],
        ['Half legs', '$150'],
        ['Full legs', '$250'],
        ['Bikini lines', '$100'],
        ['Brazilian', '$200'],
        ['Belly', '$180'],
        ['Full back', '$200'],
        ['Full body (back, chest, abdomen)', '$450'],
      ],
    },
    {
      type: 'h3',
      text: 'Gentlemen’s laser',
    },
    {
      type: 'table',
      headers: ['Area', 'Price'],
      rows: [
        ['Beard', '$70'],
        ['Chest', '$120'],
        ['Arms', '$230'],
        ['Chest + abdomen', '$280'],
        ['Back', '$280'],
        ['Legs', '$350'],
      ],
    },
    {
      type: 'h2',
      text: 'Who travels in for appointments',
    },
    {
      type: 'p',
      parts: [
        'Laser is done at the Abbotsford studio — it is not an on-location service. Clients from ',
        { href: '/areas/mission', label: 'Mission' },
        ' often pair a session with an errand south of the bridge. ',
        { href: '/areas/chilliwack', label: 'Chilliwack' },
        ' and ',
        { href: '/areas/langley', label: 'Langley' },
        ' clients usually book late afternoon so the drive home is after rush hour. ',
        { href: '/areas/surrey', label: 'Surrey' },
        ' is a longer hop; series clients tend to stack sessions on a consistent weekday.',
      ],
    },
    {
      type: 'h2',
      text: 'How to prepare',
    },
    {
      type: 'ul',
      items: [
        'Avoid sunburn and self-tanner on the area.',
        'Shave the treatment area as instructed (usually 24 hours before) — do not wax or pluck.',
        'Skip retinoids and harsh acids on the face for several days if we are treating facial hair.',
        'Arrive with clean skin, no makeup or deodorant on the treatment zone.',
        'Tell Jass about any new prescriptions, pregnancy, or recent spa treatments.',
      ],
    },
    {
      type: 'h2',
      text: 'Aftercare that actually matters',
    },
    {
      type: 'p',
      parts: [
        'The area can look pink, like a mild sunburn. Cool the skin, use a bland moisturizer, and keep it out of direct sun. No hot yoga, saunas, or picking at follicles. If something feels off — blistering, unusual pain — call the studio instead of waiting for the next booked session.',
      ],
    },
    {
      type: 'h2',
      text: 'Laser vs waxing vs threading',
    },
    {
      type: 'p',
      parts: [
        'Waxing and threading are still on the menu for brows, last-minute events, and hair that is not a laser candidate. Many clients keep threading for brows and use laser for underarms or legs. If you have a wedding in six weeks, we will not start a brand-new body series and promise a hairless morning — we will pick the method that can actually deliver by that date.',
      ],
    },
    {
      type: 'h2',
      text: 'Pairing laser with other studio visits',
    },
    {
      type: 'p',
      parts: [
        'Facials and ',
        { href: '/services/hair-and-makeup', label: 'hair and makeup' },
        ' can live on the same calendar as a laser series, just not on the same patch of skin the same day. Bridal clients sometimes start laser months before the wedding so the makeup sits on calmer skin. Ask when you book — Jass will sequence it.',
      ],
    },
    {
      type: 'h2',
      text: 'Book a consult',
    },
    {
      type: 'p',
      parts: [
        'WhatsApp or call with the areas you care about and your skin-tone / hair-colour basics. You will get an honest yes, no, or “let’s look in person” — and a time at 3526 Thurston Place.',
      ],
    },
  ],
  faqs: [
    {
      q: 'How many laser sessions will I need?',
      a: [
        'Most people need a series spaced several weeks apart, then occasional maintenance. Hair cycles at different times, so one session never catches every follicle.',
      ],
    },
    {
      q: 'Does laser hair removal work on all skin tones?',
      a: [
        'It depends on the contrast between hair and skin, and on the device settings that are safe for you. A consult is the honest answer — we will not treat if it is not appropriate.',
      ],
    },
    {
      q: 'Can I get laser the same week as a facial?',
      a: [
        'Often yes, on different areas or with spacing. Tell Jass both bookings so we do not stack heat and abrasion on the same skin.',
      ],
    },
    {
      q: 'Is laser available on location?',
      a: [
        'No. Laser is studio-only in Abbotsford. Hair, makeup, and bridal glam can travel; laser stays at Thurston Place.',
      ],
    },
    {
      q: 'What should I do if I have a tan?',
      a: [
        'Wait until the tan fades. Treating recently tanned skin raises the risk of irritation and pigment change.',
      ],
    },
    {
      q: 'Do you treat men’s backs and beards?',
      a: [
        'Yes. The gentlemen’s menu lists beard, chest, arms, back, and legs with posted prices.',
      ],
    },
    {
      q: 'Does it hurt?',
      a: [
        'Most people describe a quick snap or warm pinch. Face and bikini are more sensitive than legs. We can pause. We will not numb you into ignoring a real problem.',
      ],
    },
    {
      q: 'Can I wax between laser sessions?',
      a: [
        'No — waxing and plucking remove the follicle target. Shave instead, unless Jass gives you a different instruction for a specific area.',
      ],
    },
  ],
}
