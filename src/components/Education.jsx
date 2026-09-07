import Section from './Section'
import { education } from '../data'

export default function Education() {
  return (
    <Section id="education" index="05." title="education">
      <div className="job">
        <div className="job__header">
          <h4>{education.school}</h4>
          <span className="job__period">{education.period}</span>
        </div>
        <p>{education.degree}</p>
        <p className="muted">CGPA: {education.cgpa}</p>
        <p className="muted">Coursework: {education.coursework}</p>
      </div>
    </Section>
  )
}
