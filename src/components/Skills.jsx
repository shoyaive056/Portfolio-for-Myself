import { skillGroups } from '../data/portfolioData'

export default function Skills() {
  return (
    <section id="skills" className="section section--muted">
      <div className="section__header" data-reveal>
        <span className="section__index">§ 02</span>
        <h2>Skills</h2>
      </div>

      <div className="skills__grid">
        {skillGroups.map((group) => (
          <div className="skills__group" key={group.title} data-reveal>
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}