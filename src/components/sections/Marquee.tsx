const ITEMS = [
  'Hair Styling', 'Full Glam Makeup', 'Bridal Packages',
  'Mehndi Night Glam', 'Jaggo Events', 'Birthday Glam',
  'South Asian Weddings', 'On-Location Services', 'Abbotsford BC',
]

const repeated = [...ITEMS, ...ITEMS]

export default function Marquee() {
  return (
    <div className="marquee-strip" aria-hidden="true">
      <div className="marquee-track-wrap">
        <div className="marquee-track">
          {repeated.map((item, i) => (
            <span key={i} className="marquee-item">
              {item}
              <span className="dot">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
