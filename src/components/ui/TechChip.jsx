import { cn } from '../../lib/cn'

export default function TechChip({ icon: Icon, children, className }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-lg border border-line bg-surface-2/60 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide text-muted',
        className,
      )}
    >
      {Icon ? <Icon className="size-3.5 shrink-0" aria-hidden="true" /> : null}
      {children}
    </span>
  )
}
