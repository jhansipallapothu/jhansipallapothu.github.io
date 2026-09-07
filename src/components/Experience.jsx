import Section from './Section'
import { experience } from '../data'

export default function Experience() {
  return (
    <Section id="experience" index="02." title="experience">
      {experience.map((job) => (
        <div className="job" key={job.company}>
          <div className="job__header">
            <h4>
              {job.role} · <span className="job__company">{job.company}</span>
            </h4>
            <span className="job__period">{job.period}</span>
          </div>
          <ul>
            {job.bullets.map((bullet, i) => (
              <li key={i}>{bullet}</li>
            ))}
          </ul>
        </div>
      ))}
    </Section>
  )
}
