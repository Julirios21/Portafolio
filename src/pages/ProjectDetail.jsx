import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, CheckCircle2, ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa6'
import PageMeta from '../components/layout/PageMeta'
import ProjectCover from '../components/ui/ProjectCover'
import Reveal from '../components/ui/Reveal'
import StatusBadge from '../components/ui/StatusBadge'
import TechChip from '../components/ui/TechChip'
import { getProjectBySlug, projects } from '../data/projects'
import { buttonStyles } from '../lib/buttonStyles'
import NotFound from './NotFound'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  if (!project) {
    return <NotFound />
  }

  const index = projects.findIndex((item) => item.slug === project.slug)
  const nextProject = projects[(index + 1) % projects.length]
  const coverUrl = project.demo
    ? project.demo.replace(/^https?:\/\//, '').replace(/\/$/, '')
    : project.repo.replace(/^https?:\/\//, '')

  return (
    <>
      <PageMeta title={project.title} description={project.summary} />

      <div className="container-page py-10 sm:py-14">
        <Link
          to="/proyectos"
          className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-fg"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Todos los proyectos
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3">
              <StatusBadge status={project.status} />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                {project.year} · {project.role}
              </span>
            </div>

            <h1 className="mt-5 text-4xl font-semibold sm:text-5xl">{project.title}</h1>
            <p className="mt-2 text-lg text-muted">{project.subtitle}</p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
              {project.summary}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <TechChip key={tech}>{tech}</TechChip>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.demo ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer noopener"
                  className={buttonStyles()}
                >
                  <ExternalLink className="size-4" aria-hidden="true" />
                  Ver demo
                </a>
              ) : null}
              {project.repo ? (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer noopener"
                  className={buttonStyles({ variant: 'secondary' })}
                >
                  <FaGithub className="size-4" aria-hidden="true" />
                  Repositorio
                </a>
              ) : null}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_30px_80px_-50px_rgba(0,0,0,0.8)]">
              <div className="flex h-10 items-center gap-2 border-b border-line bg-surface-2 px-4">
                <span className="size-2.5 rounded-full bg-red-400/80" aria-hidden="true" />
                <span className="size-2.5 rounded-full bg-amber-400/80" aria-hidden="true" />
                <span className="size-2.5 rounded-full bg-emerald-400/80" aria-hidden="true" />
                <span className="ml-2 flex-1 truncate rounded-md bg-bg/70 px-2 py-1 font-mono text-[10px] text-muted">
                  {coverUrl}
                </span>
              </div>
              <div className="relative aspect-[16/10] overflow-hidden">
                <ProjectCover project={project} />
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="space-y-14">
            <section>
              <h2 className="text-xl font-semibold">El proyecto</h2>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
                {project.description.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold">Características clave</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-3 rounded-xl border border-line bg-surface p-4 text-sm text-muted"
                  >
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent-2" aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold">Arquitectura técnica</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {project.architecture.map((step, stepIndex) => (
                  <div key={step.title} className="rounded-xl border border-line bg-surface p-5">
                    <span className="font-mono text-[10px] text-accent">
                      {String(stepIndex + 1).padStart(2, '0')}
                    </span>
                    <h3 className="mt-2 font-display text-base font-semibold">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{step.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold">Retos y aprendizajes</h2>
              <div className="mt-5 space-y-4">
                {project.challenges.map((challenge) => (
                  <div key={challenge.title} className="rounded-xl border border-line bg-surface p-5">
                    <h3 className="font-display text-base font-semibold">{challenge.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{challenge.detail}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-line bg-surface p-6">
              <h2 className="text-sm font-semibold">Ficha del proyecto</h2>
              <dl className="mt-5 space-y-3 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-muted">Rol</dt>
                  <dd className="text-right font-medium">{project.role}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted">Año</dt>
                  <dd className="text-right font-medium">{project.year}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted">Estado</dt>
                  <dd className="text-right">
                    <StatusBadge status={project.status} />
                  </dd>
                </div>
              </dl>

              <div className="mt-5 border-t border-line pt-5">
                <p className="mb-2 text-xs text-muted">Stack</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <TechChip key={tech}>{tech}</TechChip>
                  ))}
                </div>
              </div>

              {project.demo || project.repo ? (
                <div className="mt-6 flex flex-col gap-2">
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer noopener"
                      className={buttonStyles({ size: 'sm' })}
                    >
                      <ExternalLink className="size-4" aria-hidden="true" />
                      Ver demo
                    </a>
                  ) : null}
                  {project.repo ? (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer noopener"
                      className={buttonStyles({ variant: 'secondary', size: 'sm' })}
                    >
                      <FaGithub className="size-4" aria-hidden="true" />
                      Repositorio
                    </a>
                  ) : null}
                </div>
              ) : null}
            </div>
          </aside>
        </div>

        <div className="mt-16 border-t border-line pt-8">
          <Link
            to={`/proyectos/${nextProject.slug}`}
            className="group flex items-center justify-between gap-6 rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-accent/40"
          >
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                Siguiente proyecto
              </p>
              <p className="mt-2 font-display text-xl font-semibold transition-colors group-hover:text-accent">
                {nextProject.title}
              </p>
              <p className="mt-1 text-sm text-muted">{nextProject.subtitle}</p>
            </div>
            <ArrowRight
              className="size-5 shrink-0 text-muted transition group-hover:translate-x-1 group-hover:text-accent"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </>
  )
}
