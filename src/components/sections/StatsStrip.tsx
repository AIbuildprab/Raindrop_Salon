const STATS = [
  { value: '5.0', label: 'Google Rated' },
  { value: 'Delta, BC', label: 'Studio Based' },
  { value: 'Travel', label: 'Lower Mainland' },
  { value: 'Full Glam', label: 'Hair & Makeup' },
]

export default function StatsStrip() {
  return (
    <section className="stats-strip" aria-label="Highlights">
      <div className="stats-strip-inner" data-stagger>
        {STATS.map(stat => (
          <div key={stat.label} className="stats-item">
            <div className="stats-value">{stat.value}</div>
            <div className="stats-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
