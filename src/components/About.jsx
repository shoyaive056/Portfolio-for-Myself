import { about } from '../data/portfolioData'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="section__header" data-reveal>
        <span className="section__index">§ 01</span>
        <h2>About</h2>
      </div>

      <div className="about__grid">
        <div className="about__text" data-reveal>
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <dl className="about__facts" data-reveal>
          {about.facts.map((f) => (
            <div className="about__fact" key={f.label}>
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}