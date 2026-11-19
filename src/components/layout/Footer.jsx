import { Link } from 'react-router-dom'
import { Download, Mail } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { profile } from '../../data/profile'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line bg-surface/40">
      <div className="container-page flex flex-col gap-8 py-12 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <Link to="/" className="font-display text-lg font-semibold">
            {profile.name}
          </Link>
          <p className="mt-3 text-sm leading-relaxed text-muted">{profile.tagline}</p>
        </div>

        <div className="flex flex-col gap-3 text-sm">
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted">
            Enlaces
          </p>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 text-muted transition-colors hover:text-fg"
          >
            <FaGithub className="size-4" aria-hidden="true" /> GitHub
          </a>
          {profile.linkedin ? (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 text-muted transition-colors hover:text-fg"
            >
              <FaLinkedin className="size-4" aria-hidden="true" /> LinkedIn
            </a>
          ) : null}
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 text-muted transition-colors hover:text-fg"
          >
            <Mail className="size-4" aria-hidden="true" /> Correo
          </a>
          <a
            href={profile.cvUrl}
            download
            className="inline-flex items-center gap-2 text-muted transition-colors hover:text-fg"
          >
            <Download className="size-4" aria-hidden="true" /> Descargar CV
          </a>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {profile.name}. Todos los derechos reservados.
          </p>
          <p className="font-mono">Construido con React, Vite y Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  )
}
