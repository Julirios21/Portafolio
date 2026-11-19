const baseUrl = import.meta.env.BASE_URL

export const profile = {
  name: 'Julian Esteban Rios Rodriguez',
  shortName: 'Julian Rios',
  initials: 'JR',
  role: 'Desarrollador de Software',
  tagline:
    'Construyo aplicaciones web full-stack con foco en datos, APIs y despliegues contenedorizados.',
  location: 'Colombia',
  education: 'Universidad Libre',
  availability: 'Abierto a oportunidades',
  email: 'julianrios21.jr@gmail.com',
  github: 'https://github.com/Julirios21',
  linkedin: '',
  cvUrl: `${baseUrl}cv.pdf`,
  bio: [
    'Soy desarrollador de software con experiencia construyendo aplicaciones web completas: desde la interfaz hasta la API, la base de datos y el despliegue en producción.',
    'Me interesa el trabajo con datos y APIs, el diseño de backends mantenibles y la automatización de despliegues con contenedores. Disfruto convertir problemas reales en productos claros, medibles y fáciles de usar.',
  ],
  stats: [
    { value: '4', label: 'Proyectos construidos' },
    { value: 'Full-stack', label: 'Frontend y backend' },
    { value: 'DevOps', label: 'Contenedores y despliegue' },
  ],
  focus: [
    {
      title: 'Desarrollo web full-stack',
      description:
        'Interfaces con React y APIs REST construidas con Node.js, Express y Django sobre bases de datos relacionales.',
    },
    {
      title: 'Datos y APIs',
      description:
        'Integración de servicios externos, ingesta de información, persistencia y visualización de datos.',
    },
    {
      title: 'Infraestructura y despliegue',
      description:
        'Contenedores con Podman y Docker, servidores Nginx y despliegues reproducibles en producción.',
    },
  ],
}
