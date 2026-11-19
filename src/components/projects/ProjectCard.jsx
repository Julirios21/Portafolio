import { Link } from 'react-router-dom'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa6'
import ProjectCover from '../ui/ProjectCover'
import StatusBadge from '../ui/StatusBadge'
import TechChip from '../ui/TechChip'

export default function ProjectCard({ project }) {
  const visibleStack = project.stack.slice(0, 3)
  const extraStack = project.stack.length - visibleStack.length

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_24px_60px_-30px_rgba(0,0,0,0.45)]">
      <Link
        to={`/proyectos/${project.slug}`}
        className="relative block aspect-[16/10] overflow-hidden border-b border-line"
        aria-label={`Ver el caso de ${project.title}`}
      >
        <ProjectCover
          project={project}
          imageClassName="transition duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute left-3 top-3">
          <StatusBadge status={project.status} className="bg-bg/80 backdrop-blur" />
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-3">
          <p className="truncate font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
            {project.subtitle}
          </p>
          <span className="shrink-0 font-mono text-[10px] text-muted">{project.year}</span>
        </div>

        <h3 className="mt-2 text-xl font-semibold">
          <Link to={`/proyectos/${project.slug}`} className="transition-colors hover:text-accent">
            {project.title}
          </Link>
        </h3>

        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">{project.summary}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {visibleStack.map((tech) => (
            <TechChip key={tech}>{tech}</TechChip>
          ))}
          {extraStack > 0 ? <TechChip>+{extraStack}</TechChip> : null}
        </div>

        <div className="mt-auto flex items-center justify-between gap-3 border-t border-line pt-4">
          <Link
            to={`/proyectos/${project.slug}`}
            className="inline-flex items-center gap-1 text-sm font-medium text-fg transition-colors hover:text-accent"
          >
            Ver caso
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>

          <div className="flex items-center gap-2">
            {project.demo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`Demo de ${project.title}`}
                className="inline-flex size-8 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-accent/40 hover:text-fg"
              >
                <ExternalLink className="size-3.5" aria-hidden="true" />
              </a>
            ) : null}
            {project.repo ? (
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`Repositorio de ${project.title}`}
                className="inline-flex size-8 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-accent/40 hover:text-fg"
              >
                <FaGithub className="size-3.5" aria-hidden="true" />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  )
}
