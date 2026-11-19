import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Download } from 'lucide-react'
import { FaGithub } from 'react-icons/fa6'
import heroBackdrop from '../../assets/image.jpg'
import { profile } from '../../data/profile'
import { projects } from '../../data/projects'
import { buttonStyles } from '../../lib/buttonStyles'
import StatusBadge from '../ui/StatusBadge'

export default function Hero() {
  const featured = projects.find((project) => project.featured) ?? projects[0]

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-20 bg-grid opacity-40 dark:opacity-20" aria-hidden="true" />
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center opacity-0 dark:opacity-25"
        style={{ backgroundImage: `url(${heroBackdrop})` }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-bg/50 via-bg/80 to-bg"
        aria-hidden="true"
      />
      <div
        className="absolute -left-40 top-0 -z-10 size-[30rem] rounded-full bg-accent/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -right-32 top-40 -z-10 size-[26rem] rounded-full bg-accent-2/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-page grid min-h-[calc(100vh-4rem)] items-center gap-14 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-400">
            <span className="size-1.5 rounded-full bg-emerald-500 motion-safe:animate-pulse" aria-hidden="true" />
            {profile.availability}
          </span>

          <h1 className="mt-6 text-5xl font-semibold leading-[0.95] sm:text-6xl xl:text-7xl">
            Julian Rios
            <span className="block text-gradient">Rodriguez</span>
          </h1>
          <p className="mt-5 font-mono text-xs uppercase tracking-[0.28em] text-muted">
            {profile.role} · Full-stack
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{profile.tagline}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/proyectos" className={buttonStyles({ size: 'lg' })}>
              Ver proyectos
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <a
              href={profile.cvUrl}
              download
              className={buttonStyles({ variant: 'secondary', size: 'lg' })}
            >
              <Download className="size-4" aria-hidden="true" />
              Descargar CV
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              className={buttonStyles({ variant: 'ghost', size: 'lg' })}
            >
              <FaGithub className="size-4" aria-hidden="true" />
              GitHub
            </a>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-line pt-6">
            {profile.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-xl font-semibold sm:text-2xl">{stat.value}</dt>
                <dd className="mt-1 text-xs text-muted">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div
            className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-accent/20 via-transparent to-accent-2/20 blur-2xl"
            aria-hidden="true"
          />
          <Link
            to={`/proyectos/${featured.slug}`}
            className="group block overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_30px_80px_-40px_rgba(0,0,0,0.7)]"
          >
            <div className="flex h-10 items-center gap-2 border-b border-line bg-surface-2 px-4">
              <span className="size-2.5 rounded-full bg-red-400/80" aria-hidden="true" />
              <span className="size-2.5 rounded-full bg-amber-400/80" aria-hidden="true" />
              <span className="size-2.5 rounded-full bg-emerald-400/80" aria-hidden="true" />
              <span className="ml-2 flex-1 truncate rounded-md bg-bg/70 px-2 py-1 font-mono text-[10px] text-muted">
                telecuidadopei.unilibre.edu.co
              </span>
            </div>
            <div className="relative aspect-[16/11] overflow-hidden">
              {featured.cover ? (
                <img
                  src={featured.cover}
                  alt={featured.coverAlt}
                  className="size-full object-cover object-top transition duration-700 group-hover:scale-[1.03]"
                />
              ) : null}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute left-4 top-4">
                <StatusBadge status={featured.status} className="bg-bg/85 backdrop-blur" />
              </div>
              <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-4">
                <div>
                  <p className="font-display text-lg font-semibold text-white">{featured.title}</p>
                  <p className="text-xs text-white/70">
                    {featured.subtitle} · {featured.year}
                  </p>
                </div>
                <ArrowUpRight className="size-5 text-white/80" aria-hidden="true" />
              </div>
            </div>
          </Link>

          <div className="absolute -bottom-5 -right-2 hidden rounded-2xl border border-line bg-surface/90 px-4 py-3 shadow-xl backdrop-blur sm:block">
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted">
              Stack destacado
            </p>
            <p className="mt-1 text-sm font-medium">React · Express · PostgreSQL</p>
          </div>
          <div className="absolute -left-3 top-1/3 hidden rounded-full border border-line bg-surface/90 px-3 py-1.5 font-mono text-[10px] text-muted shadow-lg backdrop-blur md:block">
            Podman + Nginx
          </div>
        </div>
      </div>
    </section>
  )
}
