import { Link } from 'react-router-dom'
import PageMeta from '../components/layout/PageMeta'
import { buttonStyles } from '../lib/buttonStyles'

export default function NotFound() {
  return (
    <section className="relative overflow-hidden">
      <PageMeta
        title="Página no encontrada"
        description="La página que buscas no existe en el portafolio de Julian Rios."
      />
      <div className="absolute inset-0 -z-10 bg-grid opacity-30" aria-hidden="true" />
      <div className="container-page flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">Error 404</p>
        <p className="mt-4 text-7xl font-semibold text-gradient sm:text-8xl">404</p>
        <h1 className="mt-4 text-2xl font-semibold sm:text-3xl">Esta página no existe</h1>
        <p className="mt-3 max-w-md text-base leading-relaxed text-muted">
          El enlace puede estar roto o la página se movió. Vuelve al inicio o explora los
          proyectos.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/" className={buttonStyles()}>
            Volver al inicio
          </Link>
          <Link to="/proyectos" className={buttonStyles({ variant: 'secondary' })}>
            Ver proyectos
          </Link>
        </div>
      </div>
    </section>
  )
}
