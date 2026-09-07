import Section from './Section'
import { skills } from '../data'

export default function Skills() {
  return (
    <Section id="skills" index="03." title="skills">
      <div className="skills-table">
        {skills.map((group) => (
          <div className="skills-row" key={group.category}>
            <div className="skills-row__label">{group.category}</div>
            <div className="skills-row__value">{group.items.join(', ')}</div>
          </div>
        ))}
      </div>
    </Section>
  )
}
