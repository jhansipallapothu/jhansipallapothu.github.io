import Section from './Section'
import { achievements } from '../data'

export default function About() {
  return (
    <Section id="about" index="01." title="about">
      <p>
        I'm an embedded systems engineer working on vehicle control unit (VCU) firmware for
        electric vehicles — real-time OS integration, hardware-in-the-loop testing, and the
        diagnostic tooling that bridges firmware internals to the people who service the
        vehicles day to day.
      </p>
      <ul className="achievements">
        {achievements.map((a) => (
          <li key={a.title}>
            <strong>{a.title}:</strong> {a.description}
          </li>
        ))}
      </ul>
    </Section>
  )
}
