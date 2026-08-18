import { ADDRESS_FULL, BUSINESS_NAME, MAPS_EMBED_URL } from '@/lib/contact'

export default function StudioMap() {
  return (
    <div className="map-wrap seo-map">
      <iframe
        src={MAPS_EMBED_URL}
        title={`${BUSINESS_NAME} — ${ADDRESS_FULL}`}
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  )
}
