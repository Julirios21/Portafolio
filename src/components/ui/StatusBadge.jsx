import { cn } from '../../lib/cn'

const statusMap = {
  produccion: {
    label: 'Producción',
    dot: 'bg-emerald-500',
    styles: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
  },
  completado: {
    label: 'Completado',
    dot: 'bg-sky-500',
    styles: 'border-sky-500/30 bg-sky-500/10 text-sky-600 dark:text-sky-400',
  },
  prototipo: {
    label: 'Prototipo',
    dot: 'bg-amber-500',
    styles: 'border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400',
  },
  desarrollo: {
    label: 'En desarrollo',
    dot: 'bg-violet-500',
    styles: 'border-violet-500/30 bg-violet-500/10 text-violet-600 dark:text-violet-400',
  },
}

export default function StatusBadge({ status, className }) {
  const meta = statusMap[status] ?? statusMap.desarrollo

  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em]',
        meta.styles,
        className,
      )}
    >
      <span className={cn('size-1.5 rounded-full', meta.dot)} aria-hidden="true" />
      {meta.label}
    </span>
  )
}
