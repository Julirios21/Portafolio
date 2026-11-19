import { cn } from './cn'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50'

const variants = {
  primary:
    'bg-accent text-white shadow-[0_10px_30px_-12px_var(--accent)] hover:bg-accent/90',
  secondary:
    'border border-line bg-surface text-fg hover:border-accent/50 hover:bg-surface-2',
  ghost: 'text-muted hover:bg-surface-2 hover:text-fg',
}

const sizes = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-base',
}

export function buttonStyles({ variant = 'primary', size = 'md', className } = {}) {
  return cn(base, variants[variant], sizes[size], className)
}
