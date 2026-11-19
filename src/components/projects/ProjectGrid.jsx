import { cn } from '../../lib/cn'
import ProjectCard from './ProjectCard'

export default function ProjectGrid({ projects, className }) {
  return (
    <div className={cn('grid gap-6 md:grid-cols-2 lg:grid-cols-3', className)}>
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  )
}
