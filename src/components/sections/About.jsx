import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  Download,
  GraduationCap,
  Mail,
  MapPin,
} from 'lucide-react'
import { profile } from '../../data/profile'
import { buttonStyles } from '../../lib/buttonStyles'
import Reveal from '../ui/Reveal'
import SectionTitle from '../ui/SectionTitle'

const details = [
  { icon: MapPin, label: 'Ubicación', value: profile.location },
  { icon: GraduationCap, label: 'Educación', value: profile.education },
  { icon: Briefcase, label: 'Enfoque', value: 'Desarrollo full-stack' },
  { icon: CheckCircle2, label: 'Estado', value: profile.availability },
]

export default function About() {
  return (
    <section id="sobre-mi" className="scroll-mt-24 border-t border-line py-20 sm:py-24">
      <div className="container-page grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
        <Reveal>
          <SectionTitle
            eyebrow="Sobre mí"
            title="Código con propósito, productos que se usan."
          />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
            {profile.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {profile.focus.map((item) => (
              <div key={item.title} className="rounded-xl border border-line bg-surface p-4">
                <h3 className="text-sm font-semibold">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">{item.description}</p>
              </div>
            ))}
          </div>

          <Link
            to="/proyectos"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-fg transition-colors hover:text-accent"
          >
            Explorar los proyectos
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-line bg-surface p-6">
            <div className="flex items-center gap-4">
              <span className="flex size-14 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 font-display text-lg font-bold text-accent">
                {profile.initials}
              </span>
              <div>
                <p className="font-display text-lg font-semibold">{profile.name}</p>
                <p className="text-sm text-muted">{profile.role}</p>
              </div>
            </div>

            <dl className="mt-6 space-y-4 border-t border-line pt-6 text-sm">
              {details.map((detail) => {
                const Icon = detail.icon
                return (
                  <div key={detail.label} className="flex items-start gap-3">
                    <Icon className="mt-0.5 size-4 shrink-0 text-accent-2" aria-hidden="true" />
                    <div>
                      <dt className="text-muted">{detail.label}</dt>
                      <dd className="font-medium">{detail.value}</dd>
                    </div>
                  </div>
                )
              })}
            </dl>

            <div className="mt-6 flex flex-wrap gap-2">
              <a
                href={`mailto:${profile.email}`}
                className={buttonStyles({ variant: 'secondary', size: 'sm' })}
              >
                <Mail className="size-4" aria-hidden="true" />
                Contacto
              </a>
              <a href={profile.cvUrl} download className={buttonStyles({ variant: 'ghost', size: 'sm' })}>
                <Download className="size-4" aria-hidden="true" />
                CV
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
