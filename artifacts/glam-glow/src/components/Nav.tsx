export default function Nav() {
  return (
    <nav id="main-nav" role="navigation" aria-label="Main navigation">
      <a href="#hero" className="nav-logo" aria-label="Glam and Glow by Kiran — home">
        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
          <polygon points="19,2 36,19 19,36 2,19" stroke="#B8942E" strokeWidth="1.2" fill="none" />
          <polygon points="19,8 30,19 19,30 8,19" stroke="#B8942E" strokeWidth="0.7" strokeOpacity="0.5" fill="none" />
          <text x="19" y="23" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontSize="9" fontStyle="italic" fill="#B8942E">GG</text>
        </svg>
        <span className="nav-wordmark">
          Glam <span className="amp">&amp;</span> Glow
          <span className="byline">by Kiran</span>
        </span>
      </a>
      <ul className="nav-links">
        {['About', 'Services', 'Gallery', 'Reviews', 'FAQ', 'Contact'].map(item => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
