import { projects } from '../data/portfolioData'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section__header" data-reveal>
        <span className="section__index">§ 03</span>
        <h2>Case Files</h2>
      </div>

      <div className="projects__list">
        {projects.map((project) => (
          <article className="case-card" key={project.id} data-reveal>
            <div className="case-card__meta">
              <span className="case-card__id">Case No. {project.id}</span>
              <span className="case-card__year">{project.year}</span>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul className="case-card__stack">
              {project.stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
            <div className="case-card__links">
              <a href={project.links.live}>Live →</a>
              <a href={project.links.code}>Source →</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}