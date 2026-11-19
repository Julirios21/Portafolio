import { useState } from 'react'
import PageMeta from '../components/layout/PageMeta'
import ProjectGrid from '../components/projects/ProjectGrid'
import Reveal from '../components/ui/Reveal'
import SectionTitle from '../components/ui/SectionTitle'
import { projects } from '../data/projects'
import { cn } from '../lib/cn'

const statusOptions = [
  { value: 'todos', label: 'Todos' },
  { value: 'produccion', label: 'Producción' },
  { value: 'completado', label: 'Completados' },
  { value: 'prototipo', label: 'Prototipos' },
  { value: 'desarrollo', label: 'En desarrollo' },
]

export default function Projects() {
  const [filter, setFilter] = useState('todos')
  const availableStatuses = new Set(projects.map((project) => project.status))
  const filters = statusOptions.filter(
    (option) => option.value === 'todos' || availableStatuses.has(option.value),
  )
  const filteredProjects =
    filter === 'todos' ? projects : projects.filter((project) => project.status === filter)

  return (
    <>
      <PageMeta
        title="Proyectos"
        description="Proyectos de Julian Rios: gestión hospitalaria, reserva de auditorios, datos de Fórmula 1 y un marketplace en desarrollo."
      />

      <section className="relative overflow-hidden border-b border-line">
        <div className="absolute inset-0 -z-10 bg-grid opacity-30" aria-hidden="true" />
        <div className="container-page py-16 sm:py-20">
          <SectionTitle
            eyebrow="Portafolio"
            title="Proyectos construidos de punta a punta"
            description="Aplicaciones donde he trabajado la interfaz, la API, la base de datos y el despliegue. Explora el detalle de cada caso."
          />

          <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filtrar proyectos por estado">
            {filters.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => setFilter(option.value)}
                aria-pressed={filter === option.value}
                className={cn(
                  'rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-wide transition-colors',
                  filter === option.value
                    ? 'border-accent/50 bg-accent/10 text-fg'
                    : 'border-line bg-surface text-muted hover:border-accent/30 hover:text-fg',
                )}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container-page">
          <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
            {filteredProjects.length} {filteredProjects.length === 1 ? 'proyecto' : 'proyectos'}
          </p>

          <Reveal>
            <ProjectGrid projects={filteredProjects} />
          </Reveal>

          {filteredProjects.length === 0 ? (
            <p className="rounded-2xl border border-line bg-surface p-10 text-center text-muted">
              No hay proyectos con este estado todavía.
            </p>
          ) : null}
        </div>
      </section>
    </>
  )
}
