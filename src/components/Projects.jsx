import Section from './Section'
import { projects } from '../data'

export default function Projects() {
  return (
    <Section id="projects" index="04." title="projects">
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.name}>
            <div className="project-card__header">
              <h4>{project.name}</h4>
              <span className="project-card__subtitle">{project.subtitle}</span>
            </div>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
