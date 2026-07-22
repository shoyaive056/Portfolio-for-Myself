import { contact, profile } from '../data/portfolioData'

export default function Contact() {
  return (
    <section id="contact" className="section section--contact">
      <div className="section__header" data-reveal>
        <span className="section__index">§ 05</span>
        <h2>{contact.heading}</h2>
      </div>

      <div className="contact__card" data-reveal>
        <p>{contact.body}</p>
        <a className="contact__email" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <div className="contact__socials">
          {profile.socials.map((s) => (
            <a key={s.label} href={s.url} target="_blank" rel="noreferrer">
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}