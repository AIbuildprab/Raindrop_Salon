export const LEGAL_NAME = 'Raindrops beauty salon ltd'
export const BRAND_NAME = 'Raindrops Beauty Salon'
/** Legal NAP name — used in footer address and schema legalName. */
export const BUSINESS_NAME = LEGAL_NAME
export const ARTIST_NAME = 'Jass'

export const ADDRESS_LINE = '3526 Thurston Place'
export const ADDRESS_LOCALITY = 'Abbotsford'
export const ADDRESS_REGION = 'BC'
export const POSTAL_CODE = 'V2T 6Y1'
export const ADDRESS_COUNTRY = 'CA'
export const CITY_LINE = `${ADDRESS_LOCALITY}, ${ADDRESS_REGION} ${POSTAL_CODE}`
export const ADDRESS_FULL = `${ADDRESS_LINE}, ${CITY_LINE}`
export const ADDRESS_SHORT = `${ADDRESS_LINE}, ${ADDRESS_LOCALITY}, ${ADDRESS_REGION}`
export const STUDIO_DISPLAY_NAME = 'Raindrops Beauty Salon Ltd'

export const GEO = {
  latitude: 49.0666403,
  longitude: -122.3467841,
} as const

export const PHONE_E164 = '+17787102097'
export const PHONE_DISPLAY = '+1 (778) 710-2097'
export const PHONE_TEL = `tel:${PHONE_E164}`
export const WHATSAPP_URL = 'https://wa.me/17787102097'

export const INSTAGRAM_HANDLE = '@raindrops_beauty_salon'
export const INSTAGRAM_URL = 'https://www.instagram.com/raindrops_beauty_salon/'

export const MAPS_URL =
  'https://www.google.com/maps/place/Raindrops+beauty+salon+ltd/@49.0666403,-122.3467841,17z/data=!3m1!4b1!4m6!3m5!1s0x548435ed04d45315:0xebf8c6a160ae3ef0!8m2!3d49.0666403!4d-122.3467841!16s%2Fg%2F11y0xgyx1j'

export const MAPS_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2614.0523136829183!2d-122.34935902360463!3d49.06664027136113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548435ed04d45315%3A0xebf8c6a160ae3ef0!2sRaindrops%20beauty%20salon%20ltd!5e0!3m2!1sen!2suk!4v1787007681959!5m2!1sen!2suk'

export const HOURS_DISPLAY = [
  { days: 'Mon–Fri', hours: '10:00 AM – 7:00 PM' },
  { days: 'Sat', hours: '9:00 AM – 6:00 PM' },
  { days: 'Sun', hours: 'By appointment' },
] as const

export const HOURS_SHORT = [
  { days: 'Mon–Fri', hours: '10am – 7pm' },
  { days: 'Sat', hours: '9am – 6pm' },
  { days: 'Sun', hours: 'by appointment' },
] as const

export const GOOGLE_RATING = '5.0'
export const GOOGLE_REVIEW_COUNT = 7

export const OPENING_HOURS = [
  {
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '10:00',
    closes: '19:00',
  },
  {
    dayOfWeek: ['Saturday'],
    opens: '09:00',
    closes: '18:00',
  },
] as const

/** Prefills a WhatsApp chat with a booking inquiry for a menu service. */
export function whatsappInquireUrl(serviceName: string, category: string) {
  const text = `Hi Jass, I'd like to book ${serviceName} (${category}).`
  return `${WHATSAPP_URL}?text=${encodeURIComponent(text)}`
}

/** Prefills a WhatsApp chat from the contact service dropdown. */
export function whatsappTopicUrl(topic: string) {
  const text = `Hi Jass, I'd like to book ${topic}.`
  return `${WHATSAPP_URL}?text=${encodeURIComponent(text)}`
}
