const defaultDescription =
  'Portafolio de Julian Rios Rodriguez, desarrollador de software full-stack. Proyectos de gestión hospitalaria, reserva de auditorios, datos de Fórmula 1 y marketplaces.'

export default function PageMeta({ title, description = defaultDescription }) {
  const fullTitle = title
    ? `${title} — Julian Rios`
    : 'Julian Rios | Desarrollador de Software'

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="es_CO" />
    </>
  )
}
