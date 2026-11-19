import { Download, Mail } from 'lucide-react'
import { FaGithub } from 'react-icons/fa6'
import { profile } from '../../data/profile'
import { buttonStyles } from '../../lib/buttonStyles'
import Reveal from '../ui/Reveal'

export default function Contact() {
  return (
    <section id="contacto" className="scroll-mt-24 py-20 sm:py-24">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-line bg-surface px-6 py-12 sm:px-10 lg:px-14">
            <div
              className="absolute -right-20 -top-20 size-72 rounded-full bg-accent/10 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-24 left-10 size-72 rounded-full bg-accent-2/10 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent">
                  Contacto
                </p>
                <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                  ¿Trabajamos en algo juntos?
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
                  Estoy abierto a oportunidades de desarrollo full-stack, prácticas
                  profesionales y proyectos donde pueda aportar en producto, datos e
                  infraestructura.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={`mailto:${profile.email}`}
                    className={buttonStyles({ size: 'lg' })}
                  >
                    <Mail className="size-4" aria-hidden="true" />
                    Escríbeme
                  </a>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className={buttonStyles({ variant: 'secondary', size: 'lg' })}
                  >
                    <FaGithub className="size-4" aria-hidden="true" />
                    GitHub
                  </a>
                  <a
                    href={profile.cvUrl}
                    download
                    className={buttonStyles({ variant: 'ghost', size: 'lg' })}
                  >
                    <Download className="size-4" aria-hidden="true" />
                    Descargar CV
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-line bg-surface-2/60 p-6 font-mono text-sm">
                <p className="text-[10px] uppercase tracking-[0.24em] text-muted">
                  Disponibilidad
                </p>
                <p className="mt-3 flex items-center gap-2 text-fg">
                  <span
                    className="size-2 rounded-full bg-emerald-500 motion-safe:animate-pulse"
                    aria-hidden="true"
                  />
                  {profile.availability}
                </p>

                <div className="mt-5 space-y-2 border-t border-line pt-5 text-xs text-muted">
                  <p className="flex justify-between gap-4">
                    <span>Ubicación</span>
                    <span className="text-fg">{profile.location}</span>
                  </p>
                  <p className="flex justify-between gap-4">
                    <span>Correo</span>
                    <span className="truncate text-fg">{profile.email}</span>
                  </p>
                  <p className="flex justify-between gap-4">
                    <span>Modalidad</span>
                    <span className="text-fg">Remoto / Híbrido</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
