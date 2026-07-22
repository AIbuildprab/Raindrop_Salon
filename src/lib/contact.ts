export const PHONE_E164 = '+17787102097'
export const PHONE_DISPLAY = '+1 (778) 710-2097'
export const PHONE_TEL = `tel:${PHONE_E164}`
export const WHATSAPP_URL = 'https://wa.me/17787102097'

/** Prefills a WhatsApp chat with a booking inquiry for a menu service. */
export function whatsappInquireUrl(serviceName: string, category: string) {
  const text = `Hi Jass, I'd like to book ${serviceName} (${category}).`
  return `${WHATSAPP_URL}?text=${encodeURIComponent(text)}`
}
