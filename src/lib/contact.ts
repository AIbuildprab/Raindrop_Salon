export const PHONE_E164 = '+17787102097'
export const PHONE_DISPLAY = '+1 (778) 710-2097'
export const PHONE_TEL = `tel:${PHONE_E164}`
export const WHATSAPP_URL = 'https://wa.me/17787102097'
export const MAPS_URL =
  'https://www.google.com/maps/place/Raindrops+beauty+salon+ltd/@49.0666403,-122.3467841,17z/data=!3m1!4b1!4m6!3m5!1s0x548435ed04d45315:0xebf8c6a160ae3ef0!8m2!3d49.0666403!4d-122.3467841!16s%2Fg%2F11y0xgyx1j'

/** Prefills a WhatsApp chat with a booking inquiry for a menu service. */
export function whatsappInquireUrl(serviceName: string, category: string) {
  const text = `Hi Jass, I'd like to book ${serviceName} (${category}).`
  return `${WHATSAPP_URL}?text=${encodeURIComponent(text)}`
}
