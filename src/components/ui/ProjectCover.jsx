import { CalendarCheck, Flag, HeartPulse, ShoppingCart } from 'lucide-react'
import { cn } from '../../lib/cn'

const coverTheme = {
  health: { icon: HeartPulse, gradient: 'from-rose-500/25 via-orange-500/10' },
  calendar: { icon: CalendarCheck, gradient: 'from-cyan-500/25 via-blue-500/10' },
  flag: { icon: Flag, gradient: 'from-red-600/30 via-accent/10' },
  market: { icon: ShoppingCart, gradient: 'from-violet-500/25 via-fuchsia-500/10' },
}

export default function ProjectCover({ project, className, imageClassName }) {
  if (project.cover) {
    return (
      <img
        src={project.cover}
        alt={project.coverAlt}
        loading="lazy"
        className={cn('size-full object-cover object-top', imageClassName, className)}
      />
    )
  }

  const meta = coverTheme[project.icon] ?? coverTheme.flag
  const Icon = meta.icon

  return (
    <div
      className={cn(
        'absolute inset-0 flex items-center justify-center overflow-hidden bg-surface-2',
        className,
      )}
    >
      <div className={cn('absolute inset-0 bg-gradient-to-br to-transparent', meta.gradient)} />
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden="true" />
      <div className="relative flex flex-col items-center gap-4 px-6 text-center">
        <span className="flex size-16 items-center justify-center rounded-2xl border border-line bg-surface/80 shadow-lg backdrop-blur">
          <Icon className="size-7 text-accent" aria-hidden="true" />
        </span>
        <div>
          <p className="font-display text-2xl font-semibold">{project.title}</p>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
            {project.subtitle}
          </p>
        </div>
      </div>
    </div>
  )
}
