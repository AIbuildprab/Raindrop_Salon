import type { LongformDoc } from '../types'

export const laserHairRemoval: LongformDoc = {
  slug: 'laser-hair-removal',
  kind: 'service',
  eyebrow: 'In studio',
  h1: 'Laser Hair Removal',
  h1Italic: 'Abbotsford',
  lede: [
    'Face and body laser at the Abbotsford studio, with a gentlemen’s menu and prices on the page so you can plan a series without waiting for a quote.',
  ],
  relatedAreaSlugs: ['abbotsford', 'mission', 'chilliwack', 'langley', 'surrey'],
  relatedServiceSlugs: ['hair-and-makeup'],
  areasHeading: 'We also serve these areas',
  seoTitle: 'Laser Hair Removal Abbotsford | Face, Body & Gentlemen',
  seoDescription:
    'Laser hair removal in Abbotsford at Raindrops Beauty Salon. Per-area prices for face and body, plus a gentlemen’s menu. Book a consult with Jass.',
  imageAlts: [
    'Laser hair removal treatment room in Abbotsford',
    'Upper lip and face laser appointment at Raindrops Beauty Salon',
    'Client arriving from Mission for a laser series',
    'Abbotsford studio exterior near Thurston Place',
  ],
  blocks: [
    {
      type: 'h2',
      text: 'Why people come here for laser',
    },
    {
      type: 'p',
      parts: [
        'Fewer ingrowns. Less shaving. A studio that will say if your skin and hair are a fit before you start a series. Jass is a certified esthetician. Laser sits next to facials, threading, and waxing in the same chair, so you are not driving across town for one body.',
      ],
    },
    {
      type: 'h2',
      text: 'What it can do',
    },
    {
      type: 'p',
      parts: [
        'Laser goes after pigment in the follicle. Darker hair on lighter-to-medium skin usually responds best. Blonde, grey, and very fine hair often does not. A consult is how we check skin tone, recent sun, and any medication that makes this a bad idea.',
      ],
    },
    {
      type: 'ul',
      items: [
        'It is a series, not one session.',
        'Hair sheds over the following weeks. That is the cycle working.',
        'A little maintenance after the first series is normal.',
        'Do not wax the same area between sessions. Shave as directed.',
      ],
    },
    {
      type: 'h2',
      text: 'Face and body',
    },
    {
      type: 'p',
      parts: [
        'These are the studio prices. If you want a few areas in one visit (full leg plus bikini, for example), we can quote that as a combined appointment.',
      ],
    },
    {
      type: 'table',
      caption: 'Laser hair removal prices',
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
      text: 'Coming from nearby',
    },
    {
      type: 'p',
      parts: [
        'Laser stays at the Abbotsford studio. It is not something we pack up and take to a house. Clients from ',
        { href: '/areas/mission', label: 'Mission' },
        ' often pair a session with something else south of the bridge. People driving from ',
        { href: '/areas/chilliwack', label: 'Chilliwack' },
        ' or ',
        { href: '/areas/langley', label: 'Langley' },
        ' usually like a later afternoon slot. ',
        { href: '/areas/surrey', label: 'Surrey' },
        ' is a longer drive. Series clients tend to pick a weekday and stick with it.',
      ],
    },
    {
      type: 'h2',
      text: 'Before your appointment',
    },
    {
      type: 'ul',
      items: [
        'No sunburn or self-tanner on the area.',
        'Shave as instructed, usually the day before. Do not wax or pluck.',
        'If we are treating the face, pause retinoids and strong acids for a few days.',
        'Come with clean skin. No makeup or deodorant on the treatment area.',
        'Mention new prescriptions, pregnancy, or a recent facial or peel.',
      ],
    },
    {
      type: 'h2',
      text: 'Aftercare',
    },
    {
      type: 'p',
      parts: [
        'The skin can look pink, like a mild sunburn. Cool it, use a simple moisturizer, and keep it out of strong sun. Skip hot yoga, saunas, and picking. If it blisters or hurts in a way that does not feel right, call the studio. Do not wait until the next booked session.',
      ],
    },
    {
      type: 'h2',
      text: 'Laser, waxing, or threading',
    },
    {
      type: 'p',
      parts: [
        'Waxing and threading are still here for brows, last-minute events, and hair that is not a good laser candidate. Plenty of people keep threading for brows and use laser for underarms or legs. If you have a wedding in six weeks, we will not start a new body series and promise a hairless morning. We will pick what can actually be ready by then.',
      ],
    },
    {
      type: 'h2',
      text: 'Same calendar as other visits',
    },
    {
      type: 'p',
      parts: [
        'Facials and ',
        { href: '/services/hair-and-makeup', label: 'hair and makeup' },
        ' can sit on the same calendar as a laser series, just not on the same patch of skin the same day. Some brides start laser months ahead so makeup sits on calmer skin. Ask when you book and Jass will order it.',
      ],
    },
    {
      type: 'h2',
      text: 'Book a consult',
    },
    {
      type: 'p',
      parts: [
        'WhatsApp or call with the areas you care about and a rough sense of your skin and hair colour. You will get a yes, a no, or “come in and we will look.” Appointments are at 3526 Thurston Place.',
      ],
    },
  ],
  faqs: [
    {
      q: 'How many laser sessions will I need?',
      a: [
        'Most people need a series a few weeks apart, then occasional maintenance. Hair grows in cycles, so one session never catches everything.',
      ],
    },
    {
      q: 'Does laser hair removal work on all skin tones?',
      a: [
        'It depends on the contrast between hair and skin, and on settings that are safe for you. A consult is the real answer. We will not treat if it is not appropriate.',
      ],
    },
    {
      q: 'Can I get laser the same week as a facial?',
      a: [
        'Often yes, on different areas or with a bit of space between. Tell Jass both bookings so we are not stacking heat on the same skin.',
      ],
    },
    {
      q: 'Is laser available on location?',
      a: [
        'No. Laser is studio-only in Abbotsford. Hair, makeup, and bridal glam can travel. Laser stays at Thurston Place.',
      ],
    },
    {
      q: 'What should I do if I have a tan?',
      a: [
        'Wait until it fades. Treating recently tanned skin raises the chance of irritation and pigment change.',
      ],
    },
    {
      q: 'Do you treat men’s backs and beards?',
      a: [
        'Yes. Beard, chest, arms, back, and legs are on the gentlemen’s menu with posted prices.',
      ],
    },
    {
      q: 'Does it hurt?',
      a: [
        'Most people say a quick snap or a warm pinch. Face and bikini are more sensitive than legs. We can pause.',
      ],
    },
    {
      q: 'Can I wax between laser sessions?',
      a: [
        'No. Waxing and plucking take away the follicle the laser needs. Shave instead, unless Jass tells you otherwise for a specific area.',
      ],
    },
  ],
}
