import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { projects } from '../../data/projects'
import { buttonStyles } from '../../lib/buttonStyles'
import FeaturedProject from '../projects/FeaturedProject'
import ProjectGrid from '../projects/ProjectGrid'
import Reveal from '../ui/Reveal'
import SectionTitle from '../ui/SectionTitle'

export default function ProjectsPreview() {
  const featured = projects.find((project) => project.featured) ?? projects[0]
  const rest = projects.filter((project) => project.slug !== featured.slug)

  return (
    <section id="proyectos" className="scroll-mt-24 py-20 sm:py-24">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionTitle
            eyebrow="Proyectos"
            title="Trabajo que puedes explorar"
            description="Cada proyecto incluye el problema, la solución, el stack y los retos técnicos que enfrenté."
          />
          <Link
            to="/proyectos"
            className={buttonStyles({ variant: 'secondary', size: 'sm' })}
          >
            Todos los proyectos
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <Reveal className="mt-10">
          <FeaturedProject project={featured} />
        </Reveal>

        <ProjectGrid projects={rest} className="mt-6" />
      </div>
    </section>
  )
}
