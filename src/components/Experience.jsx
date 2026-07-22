import { experience } from '../data/portfolioData'

export default function Experience() {
  return (
    <section id="experience" className="section section--muted">
      <div className="section__header" data-reveal>
        <span className="section__index">§ 04</span>
        <h2>Record of Employment</h2>
      </div>

      <ol className="timeline">
        {experience.map((role) => (
          <li className="timeline__item" key={role.role + role.company} data-reveal>
            <div className="timeline__marker" aria-hidden="true" />
            <div className="timeline__content">
              <div className="timeline__head">
                <h3>{role.role}</h3>
                <span className="timeline__period">{role.period}</span>
              </div>
              <p className="timeline__company">{role.company}</p>
              <ul>
                {role.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}