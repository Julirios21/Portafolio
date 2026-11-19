import { skillGroups } from '../../data/skills'
import Reveal from '../ui/Reveal'
import SectionTitle from '../ui/SectionTitle'

export default function Skills() {
  return (
    <section
      id="habilidades"
      className="scroll-mt-24 border-y border-line bg-surface/40 py-20 sm:py-24"
    >
      <div className="container-page">
        <SectionTitle
          align="center"
          eyebrow="Habilidades"
          title="Herramientas con las que construyo"
          description="Un stack que cubre el ciclo completo: interfaz, API, base de datos y despliegue."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {skillGroups.map((group, index) => {
            const GroupIcon = group.icon
            return (
              <Reveal key={group.title} delay={index * 0.08}>
                <div className="h-full rounded-2xl border border-line bg-surface p-6">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <GroupIcon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{group.title}</h3>
                  <p className="mt-1 text-sm text-muted">{group.description}</p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => {
                      const ItemIcon = item.icon
                      return (
                        <li key={item.name}>
                          <span className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-surface-2/60 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide text-muted transition-colors hover:border-accent/40 hover:text-fg">
                            <ItemIcon className="size-3.5 shrink-0" aria-hidden="true" />
                            {item.name}
                          </span>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
