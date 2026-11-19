import vitalNurseCover from '../assets/telecuidadopei.jpg'

export const projects = [
  {
    slug: 'telecuidadopei',
    title: 'TeleCuidaDO PEI',
    subtitle: 'Sistema de gestión hospitalaria',
    status: 'produccion',
    icon: 'health',
    featured: true,
    year: '2024',
    role: 'Desarrollo full-stack',
    summary:
      'Plataforma de gestión hospitalaria con roles de administrador, personal interno y usuario externo, desplegada en producción sobre contenedores.',
    description: [
      'TeleCuidaDO PEI es un sistema de gestión hospitalaria que simula el flujo de trabajo de una institución de salud. La plataforma separa las capacidades según el tipo de usuario para que cada rol acceda únicamente a las funciones que necesita.',
      'El proyecto cubre el registro y la gestión de pacientes, la administración de usuarios y la operación interna del sistema. La aplicación se despliega con Podman y Nginx, usando PostgreSQL como base de datos principal.',
    ],
    features: [
      'Control de acceso por roles: administrador, interno y externo.',
      'Gestión de pacientes y registro de información clínica.',
      'Módulo administrativo para supervisar usuarios y operaciones.',
      'Despliegue en producción con contenedores Podman y Nginx.',
    ],
    challenges: [
      {
        title: 'Separar permisos por rol',
        detail:
          'Diseñé las vistas y los endpoints para que cada rol tuviera un alcance distinto, evitando exponer acciones administrativas a usuarios externos.',
      },
      {
        title: 'Despliegue contenedorizado',
        detail:
          'Coordiné los servicios de frontend, backend, base de datos y proxy inverso para que el entorno fuera reproducible y fácil de reiniciar.',
      },
      {
        title: 'Persistencia relacional',
        detail:
          'Modelé las entidades de pacientes y usuarios en PostgreSQL, cuidando la integridad de los datos y las consultas más frecuentes.',
      },
    ],
    stack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Podman', 'Nginx'],
    cover: vitalNurseCover,
    coverAlt: 'Vista principal de TeleCuidaDO PEI, sistema de gestión hospitalaria',
    demo: 'https://telecuidadopei.unilibre.edu.co/',
    repo: null,
    architecture: [
      { title: 'Cliente', detail: 'Interfaz React servida como aplicación web.' },
      { title: 'API REST', detail: 'Node.js + Express con lógica de negocio y autenticación.' },
      { title: 'Base de datos', detail: 'PostgreSQL para pacientes, usuarios y registros.' },
      { title: 'Infraestructura', detail: 'Contenedores Podman detrás de un proxy Nginx.' },
    ],
  },
  {
    slug: 'reserva-auditorios',
    title: 'Reserva de Auditorios',
    subtitle: 'Backend para la reserva de espacios',
    status: 'prototipo',
    icon: 'calendar',
    featured: false,
    year: '2025',
    role: 'Desarrollo backend',
    summary:
      'Prototipo de backend para la reserva de auditorios de la Universidad Libre: solicitudes, disponibilidad y administración de espacios.',
    description: [
      'Este proyecto explora el problema de reservar espacios compartidos dentro de una universidad. El prototipo se enfoca en el backend: recibir solicitudes, validar disponibilidad y permitir que un administrador gestione las reservas.',
      'La API está construida con Express y PostgreSQL, y se ejecuta en contenedores para replicar el entorno de despliegue de principio a fin.',
    ],
    features: [
      'Registro y consulta de solicitudes de reserva.',
      'Validación de disponibilidad por espacio y franja horaria.',
      'Administración de reservas y cambios de estado.',
      'API REST contenedorizada con PostgreSQL.',
    ],
    challenges: [
      {
        title: 'Evitar conflictos de horario',
        detail:
          'La validación de disponibilidad debe impedir reservas superpuestas sobre el mismo auditorio y detectar solicitudes en curso.',
      },
      {
        title: 'Modelar el ciclo de vida',
        detail:
          'Cada solicitud pasa por estados (pendiente, aprobada, rechazada), lo que exige reglas claras y transiciones controladas.',
      },
      {
        title: 'Prototipo listo para crecer',
        detail:
          'Organicé la API por módulos para poder añadir autenticación, notificaciones y una interfaz web sin reescribir la base.',
      },
    ],
    stack: ['Express', 'Node.js', 'PostgreSQL', 'Nginx', 'Podman'],
    cover: null,
    coverAlt: 'Reserva de Auditorios, backend para la gestión de espacios universitarios',
    demo: null,
    repo: 'https://github.com/Julirios21/Reserva_de_auditorios',
    architecture: [
      { title: 'Cliente', detail: 'Consumidor HTTP de la API (prototipo sin interfaz final).' },
      { title: 'API REST', detail: 'Express con validaciones de disponibilidad y estados.' },
      { title: 'Base de datos', detail: 'PostgreSQL para auditorios, solicitudes y reservas.' },
      { title: 'Infraestructura', detail: 'Contenedores Podman y proxy Nginx.' },
    ],
  },
  {
    slug: 'f1-data-app',
    title: 'F1 Data App',
    subtitle: 'Ingesta y visualización de datos de Fórmula 1',
    status: 'completado',
    icon: 'flag',
    featured: false,
    year: '2025',
    role: 'Desarrollo full-stack',
    summary:
      'Aplicación que consume una API de Fórmula 1, almacena la información y la presenta en una interfaz para explorar pilotos, equipos y carreras.',
    description: [
      'F1 Data App integra una API pública de Fórmula 1 para importar información de carreras, pilotos y equipos. Los datos se guardan localmente para evitar depender de la API en cada consulta y poder mantener un histórico.',
      'Sobre esa información se construye una interfaz de consulta que permite revisar resultados y comparar datos de las temporadas disponibles.',
    ],
    features: [
      'Importación de datos desde una API externa de Fórmula 1.',
      'Persistencia de la información para consultas históricas.',
      'Visualización de pilotos, equipos, carreras y resultados.',
      'Interfaz para explorar y comparar datos por temporada.',
    ],
    challenges: [
      {
        title: 'Normalizar datos externos',
        detail:
          'La API entrega estructuras anidadas que deben transformarse y relacionarse antes de guardarse en la base de datos.',
      },
      {
        title: 'Evitar duplicados en la ingesta',
        detail:
          'La importación debía ser segura al repetirse, actualizando registros existentes en lugar de crear copias.',
      },
      {
        title: 'Consultas eficientes',
        detail:
          'El almacenamiento local permitió responder consultas de pilotos y carreras sin golpear la API en cada interacción.',
      },
    ],
    // TODO: confirmar el stack exacto del repositorio y ajustar esta lista.
    stack: ['JavaScript', 'API REST', 'PostgreSQL'],
    cover: null,
    coverAlt: 'F1 Data App, aplicación de datos de Fórmula 1',
    demo: null,
    repo: 'https://github.com/Julirios21/F1-proyect',
    architecture: [
      { title: 'Ingesta', detail: 'Cliente que consulta la API de Fórmula 1 y transforma la información.' },
      { title: 'Persistencia', detail: 'Almacenamiento local de carreras, pilotos y resultados.' },
      { title: 'Consulta', detail: 'Capa de lectura para explorar temporadas y comparar datos.' },
      { title: 'Interfaz', detail: 'Vistas para navegar equipos, pilotos y carreras.' },
    ],
  },
  {
    slug: 'mercadopi',
    title: 'Mercadopi',
    subtitle: 'Marketplace en desarrollo',
    status: 'desarrollo',
    icon: 'market',
    featured: false,
    year: '2026',
    role: 'Desarrollo full-stack',
    summary:
      'Marketplace en construcción para publicar, descubrir y gestionar productos con una base preparada para crecer.',
    description: [
      'Mercadopi es un marketplace en desarrollo. El objetivo es ofrecer un espacio donde los vendedores puedan publicar productos y los compradores puedan explorarlos de forma clara.',
      'El proyecto avanza por incrementos: primero el catálogo y la publicación de artículos, y después flujos de autenticación y compra.',
    ],
    features: [
      'Exploración de un catálogo de productos.',
      'Publicación y gestión de artículos por parte del vendedor.',
      'Estructura preparada para autenticación y compras.',
      'Desarrollo incremental con funcionalidades en progreso.',
    ],
    challenges: [
      {
        title: 'Definir el dominio',
        detail:
          'Un marketplace requiere separar usuarios, productos, publicaciones y transacciones antes de escribir la primera pantalla.',
      },
      {
        title: 'Diseñar para crecer',
        detail:
          'La arquitectura se plantea para añadir módulos de pago y autenticación sin rehacer el catálogo.',
      },
      {
        title: 'Construir por incrementos',
        detail:
          'El proyecto prioriza entregables funcionales pequeños en lugar de una única entrega grande.',
      },
    ],
    // TODO: confirmar el stack exacto del repositorio y ajustar esta lista.
    stack: ['React', 'API REST', 'PostgreSQL'],
    cover: null,
    coverAlt: 'Mercadopi, marketplace en desarrollo',
    demo: null,
    repo: 'https://github.com/Julirios21/Mercadopi',
    architecture: [
      { title: 'Catálogo', detail: 'Listado y búsqueda de productos publicados.' },
      { title: 'Publicación', detail: 'Gestión de artículos y datos del vendedor.' },
      { title: 'API', detail: 'Endpoints para productos, usuarios y transacciones futuras.' },
      { title: 'Datos', detail: 'Modelo pensado para crecer hacia autenticación y compras.' },
    ],
  },
]

export const getProjectBySlug = (slug) => projects.find((project) => project.slug === slug)
