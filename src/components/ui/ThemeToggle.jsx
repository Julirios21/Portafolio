import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../../context/theme'
import { cn } from '../../lib/cn'

export default function ThemeToggle({ className }) {
  const { isDark, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Activar tema claro' : 'Activar tema oscuro'}
      title={isDark ? 'Activar tema claro' : 'Activar tema oscuro'}
      className={cn(
        'inline-flex size-10 items-center justify-center rounded-full border border-line bg-surface text-muted transition-colors hover:border-accent/40 hover:text-fg',
        className,
      )}
    >
      {isDark ? (
        <Sun className="size-4" aria-hidden="true" />
      ) : (
        <Moon className="size-4" aria-hidden="true" />
      )}
    </button>
  )
}
