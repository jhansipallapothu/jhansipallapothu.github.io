import { profile } from '../data'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <p className="hero__eyebrow">
        <span className="dot" /> available for opportunities
      </p>
      <h1>
        {profile.name}
        <span className="cursor">_</span>
      </h1>
      <h2>{profile.title}</h2>
      <p className="hero__tagline">{profile.tagline}</p>
      <p className="hero__meta">{profile.location}</p>
      <div className="hero__actions">
        <a className="btn btn--primary" href="#contact">
          Get in touch
        </a>
        <a className="btn" href="#projects">
          View projects
        </a>
      </div>
    </section>
  )
}
