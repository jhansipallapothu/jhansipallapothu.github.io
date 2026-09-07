import Section from './Section'
import { profile } from '../data'

export default function Contact() {
  return (
    <Section id="contact" index="06." title="contact">
      <p>
        I'm open to embedded systems and firmware roles, and always happy to talk about
        real-time systems, automotive protocols, or robotics. Reach out any time.
      </p>
      <div className="contact-links">
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
        <a href={`tel:${profile.phone.replace(/\s+/g, '')}`}>{profile.phone}</a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </Section>
  )
}
