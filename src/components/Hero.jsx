import { profile } from '../data/portfolioData'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__inner">
        <p className="eyebrow" data-reveal>
          Personnel File — Engineering Division
        </p>
        <h1 className="hero__name" data-reveal>
          {profile.name}
        </h1>
        <p className="hero__role" data-reveal>
          {profile.role}
        </p>
        <p className="hero__tagline" data-reveal>
          {profile.tagline}
        </p>
        <div className="hero__actions" data-reveal>
          <a className="btn btn--primary" href={profile.resumeUrl}>
            View résumé
          </a>
          <a className="btn btn--ghost" href="#contact">
            Get in touch
          </a>
        </div>
        <p className="hero__location" data-reveal>
          {profile.location}
        </p>
      </div>
      <div className="hero__rule" aria-hidden="true" />
    </section>
  )
}