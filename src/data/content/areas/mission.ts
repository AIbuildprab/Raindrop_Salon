import type { LongformDoc } from '../types'

export const mission: LongformDoc = {
  slug: 'mission',
  kind: 'area',
  eyebrow: 'Areas we serve',
  h1: 'Beauty Services',
  h1Italic: 'Mission',
  lede: [
    'Mission is the closest city north of the studio, about 20–30 minutes over the Mission Bridge. Easy for a laser series, a facial, or on-location glam when you do not want to leave town the morning of.',
  ],
  relatedAreaSlugs: ['abbotsford', 'chilliwack', 'langley', 'surrey'],
  relatedServiceSlugs: ['bridal-makeup', 'laser-hair-removal', 'hair-and-makeup'],
  servicesHeading: 'Services we offer here',
  seoTitle: 'Beauty Salon near Mission BC | Raindrops in Abbotsford',
  seoDescription:
    'Bridal makeup, laser, and full glam for Mission, BC. Raindrops Beauty Salon is 20–30 minutes south in Abbotsford. Studio visits or on-location at your home.',
  imageAlts: [
    'Drive from Mission Bridge to Raindrops Beauty Salon',
    'Bridal makeup for a Mission, BC wedding',
    'Laser hair removal series for a Mission client',
    'Hair and makeup in downtown Mission before an event',
  ],
  blocks: [
    {
      type: 'h2',
      text: 'The short hop over the bridge',
    },
    {
      type: 'p',
      parts: [
        'If you live in Mission, you are not “out of area.” Highway 11 to Abbotsford is a normal errand drive. Jass’s studio is at 3526 Thurston Place. People come down for ',
        { href: '/services/laser-hair-removal', label: 'laser' },
        ', brows, facials, and colour, then go home before dinner. Hair and makeup can also come north to you.',
      ],
    },
    {
      type: 'h2',
      text: 'On-location in Mission',
    },
    {
      type: 'p',
      parts: [
        { href: '/services/bridal-makeup', label: 'Bridal mornings' },
        ' and ',
        { href: '/services/hair-and-makeup', label: 'party glam' },
        ' work well in Mission homes in downtown, Hatzic, or closer to the waterfront, especially when family is already gathered and the photographer is not crossing the bridge first. Tell us about stairs, parking, and whether kids will be in the room.',
      ],
    },
    {
      type: 'h2',
      text: 'When the studio is the better choice',
    },
    {
      type: 'p',
      parts: [
        'Laser never travels. Long colour or keratin appointments are calmer in Abbotsford. Bridal trials are often easier in studio light than in a bedroom with one window. Bridge traffic is usually kinder than Surrey’s Highway 1, but Friday afternoons still swell. Leave a buffer.',
      ],
    },
    {
      type: 'h2',
      text: 'Local notes',
    },
    {
      type: 'ul',
      items: [
        'Downtown Mission: short on-location trips, hall events.',
        'Hatzic: add a few minutes. Send the full address.',
        'Stave / lake photos: mention humidity and outdoor time.',
        'Waterfront walks after studio glam: popular for engagement shots.',
      ],
    },
    {
      type: 'h2',
      text: 'Directions from Mission',
    },
    {
      type: 'p',
      parts: [
        'South on Highway 11, then Maps to Raindrops beauty salon ltd. Phone +1 (778) 710-2097. Hours: weekdays 10–7, Saturday 9–6, Sunday by appointment. If the bridge is slow, text. Bridal slots cannot slide an hour without hurting the photographer.',
      ],
    },
    {
      type: 'h2',
      text: 'Book from Mission',
    },
    {
      type: 'p',
      parts: [
        'WhatsApp the service and two or three dates. Same-week threading or a facial is often realistic. Wedding Saturdays are not. If you also have people coming from Chilliwack or Abbotsford, we can split trial (studio) and wedding day (your house).',
      ],
    },
  ],
  faqs: [
    {
      q: 'How far is Raindrops from Mission?',
      a: [
        'About 20–30 minutes south via Highway 11 and the Mission Bridge, depending on where you start.',
      ],
    },
    {
      q: 'Do you come to Mission for makeup?',
      a: [
        'Yes. Bridal and event hair and makeup can be on location. Laser and most skin services stay in Abbotsford.',
      ],
    },
    {
      q: 'Is the bridge a problem for morning appointments?',
      a: [
        'It can slow down at peak times. We build buffer into bridal call times and ask studio clients to leave a little early on Fridays.',
      ],
    },
    {
      q: 'Can Mission clients start a laser series?',
      a: [
        'Yes. The drive is short enough that a consistent weekday slot is realistic.',
      ],
    },
    {
      q: 'Do you serve Hatzic?',
      a: [
        'Yes. Send the address so travel time is accurate.',
      ],
    },
    {
      q: 'Where do I park at the studio?',
      a: [
        'At the Abbotsford studio on Thurston Place. You are not hunting downtown Mission street parking for the appointment itself.',
      ],
    },
    {
      q: 'Can I book a Sunday bridal in Mission?',
      a: [
        'Sunday is by appointment. Many weddings land there. Inquire with the date as soon as you have it.',
      ],
    },
    {
      q: 'Do you have a Mission phone number?',
      a: [
        'One number: +1 (778) 710-2097. WhatsApp is the same line.',
      ],
    },
    {
      q: 'What if I also need attendants done?',
      a: [
        'Share headcount. A Mission house get-ready is often easier than moving everyone over the bridge.',
      ],
    },
  ],
}
