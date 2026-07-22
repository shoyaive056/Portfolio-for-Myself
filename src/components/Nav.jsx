import { profile } from '../data/portfolioData'
import { useActiveSection } from '../hooks/useActiveSection'

const sections = [
  { id: 'hero', label: 'Profile' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Case Files' },
  { id: 'experience', label: 'Record' },
  { id: 'contact', label: 'Contact' },
]

export default function Nav() {
  const active = useActiveSection(sections.map((s) => s.id))

  const handleClick = (e, id) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="tab-nav" aria-label="Section navigation">
      
      {/* FIXED */}
      <a
        className="tab-nav__brand"
        href="#hero"
        onClick={(e) => handleClick(e, 'hero')}
      >
        {profile.name
          .split(' ')
          .map((w) => w[0])
          .join('')}
      </a>

      <ul>
        {sections.map((s) => (
          <li key={s.id}>
            
            {/* FIXED */}
            <a
              href={`#${s.id}`}
              onClick={(e) => handleClick(e, s.id)}
              className={active === s.id ? 'is-active' : ''}
            >
              <span className="tab-nav__mark" aria-hidden="true" />
              {s.label}
            </a>

          </li>
        ))}
      </ul>
    </nav>
  )
}