import Section from './Section'
import { skills } from '../data'

export default function Skills() {
  return (
    <Section id="skills" index="03." title="skills">
      <div className="skills-grid">
        {skills.map((group) => (
          <div className="skills-group" key={group.category}>
            <h4>{group.category}</h4>
            <div className="tags">
              {group.items.map((item) => (
                <span className="tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
