import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Download, Menu, X } from 'lucide-react'
import { FaGithub } from 'react-icons/fa6'
import { profile } from '../../data/profile'
import { buttonStyles } from '../../lib/buttonStyles'
import { cn } from '../../lib/cn'
import ThemeToggle from '../ui/ThemeToggle'

const routeLinks = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/proyectos', label: 'Proyectos', end: false },
]

const sectionLinks = [
  { to: '/#sobre-mi', label: 'Sobre mí' },
  { to: '/#habilidades', label: 'Habilidades' },
  { to: '/#contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navLinkClass = ({ isActive }) =>
    cn(
      'rounded-full px-3 py-2 text-sm transition-colors',
      isActive ? 'bg-surface-2 text-fg' : 'text-muted hover:text-fg',
    )

  const sectionClass =
    'rounded-full px-3 py-2 text-sm text-muted transition-colors hover:text-fg'

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-bg/80 backdrop-blur-xl">
      <nav className="container-page flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3">
          <span className="flex size-9 items-center justify-center rounded-xl bg-accent font-display text-sm font-bold text-white shadow-[0_8px_24px_-8px_var(--accent)]">
            {profile.initials}
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-sm font-semibold">{profile.shortName}</span>
            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted">
              {profile.role}
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {routeLinks.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.end} className={navLinkClass}>
              {link.label}
            </NavLink>
          ))}
          {sectionLinks.map((link) => (
            <Link key={link.to} to={link.to} className={sectionClass}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Perfil de GitHub"
            className="hidden size-10 items-center justify-center rounded-full border border-line bg-surface text-muted transition-colors hover:border-accent/40 hover:text-fg sm:inline-flex"
          >
            <FaGithub className="size-4" aria-hidden="true" />
          </a>
          <a
            href={profile.cvUrl}
            download
            className={cn(buttonStyles({ variant: 'secondary', size: 'sm' }), 'hidden sm:inline-flex')}
          >
            <Download className="size-4" aria-hidden="true" />
            CV
          </a>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            className="inline-flex size-10 items-center justify-center rounded-full border border-line bg-surface text-muted transition-colors hover:text-fg lg:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-line bg-bg/95 backdrop-blur-xl lg:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {[...routeLinks, ...sectionLinks].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-sm text-muted transition-colors hover:bg-surface-2 hover:text-fg"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={profile.cvUrl}
              download
              onClick={() => setOpen(false)}
              className={cn(buttonStyles({ size: 'sm' }), 'mt-2')}
            >
              <Download className="size-4" aria-hidden="true" />
              Descargar CV
            </a>
          </div>
        </div>
      ) : null}
    </header>
  )
}
