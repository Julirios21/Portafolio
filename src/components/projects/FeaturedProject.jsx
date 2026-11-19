import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa6'
import { buttonStyles } from '../../lib/buttonStyles'
import ProjectCover from '../ui/ProjectCover'
import StatusBadge from '../ui/StatusBadge'
import TechChip from '../ui/TechChip'

export default function FeaturedProject({ project }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-line bg-surface">
      <div className="grid lg:grid-cols-[1.1fr_1fr]">
        <Link
          to={`/proyectos/${project.slug}`}
          className="group relative block min-h-[280px] overflow-hidden border-b border-line lg:border-b-0 lg:border-r"
          aria-label={`Ver el caso de ${project.title}`}
        >
          <ProjectCover
            project={project}
            imageClassName="transition duration-700 group-hover:scale-[1.03]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute left-4 top-4">
            <StatusBadge status={project.status} className="bg-bg/80 backdrop-blur" />
          </div>
        </Link>

        <div className="flex flex-col p-6 sm:p-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
            Proyecto destacado · {project.year}
          </p>
          <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">
            <Link
              to={`/proyectos/${project.slug}`}
              className="transition-colors hover:text-accent"
            >
              {project.title}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-muted">{project.subtitle}</p>
          <p className="mt-4 text-sm leading-relaxed text-muted">{project.summary}</p>

          <ul className="mt-5 space-y-2">
            {project.features.slice(0, 3).map((feature) => (
              <li key={feature} className="flex gap-2 text-sm text-muted">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent-2" aria-hidden="true" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.slice(0, 5).map((tech) => (
              <TechChip key={tech}>{tech}</TechChip>
            ))}
          </div>

          <div className="mt-auto flex flex-wrap gap-3 pt-6">
            <Link to={`/proyectos/${project.slug}`} className={buttonStyles({ size: 'sm' })}>
              Ver caso
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            {project.demo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer noopener"
                className={buttonStyles({ variant: 'secondary', size: 'sm' })}
              >
                Demo
                <ExternalLink className="size-4" aria-hidden="true" />
              </a>
            ) : null}
            {project.repo ? (
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer noopener"
                className={buttonStyles({ variant: 'ghost', size: 'sm' })}
              >
                <FaGithub className="size-4" aria-hidden="true" />
                Código
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  )
}
