# Portafolio de Julian Rios

Portafolio profesional construido con React 19, Vite, Tailwind CSS v4 y React Router.

## Stack

- React 19 + Vite 8
- Tailwind CSS v4
- React Router v7
- Motion (animaciones)
- Lucide + React Icons (iconos)
- React 19 metadata (`<title>` y `<meta>` por página)

## Desarrollo

```bash
npm install
npm run dev
```

## Scripts

```bash
npm run dev       # servidor de desarrollo
npm run build     # build de producción en dist/
npm run preview   # previsualizar el build
npm run lint      # ESLint
npm run deploy    # publicar en GitHub Pages (rama gh-pages)
```

## Estructura

```text
src/
  components/
    layout/      Navbar, Footer, Layout, ScrollToTop, PageMeta
    projects/    FeaturedProject, ProjectCard, ProjectGrid
    sections/    Hero, About, ProjectsPreview, Skills, Contact
    ui/          Button, StatusBadge, TechChip, SectionTitle, Reveal...
  context/       Tema claro/oscuro persistido
  data/          profile.js, projects.js, skills.js
  pages/         Home, Projects, ProjectDetail, NotFound
  lib/           Utilidades (cn, estilos de botón)
```

## Contenido editable

- `src/data/profile.js`: nombre, bio, contacto, CV y redes.
- `src/data/projects.js`: proyectos, stack, enlaces, capturas y contenido de detalle.
- `src/data/skills.js`: grupos de habilidades e iconos.
- `public/cv.pdf`: archivo del CV descargable.
- `public/favicon.svg`: favicon.

Los proyectos sin captura usan una portada generada con gradientes. Para añadir una imagen,
importa el archivo desde `src/assets` y asígnalo al campo `cover` del proyecto.

## Deploy en GitHub Pages

El proyecto está configurado con `base: '/Portafolio_basico/'` en `vite.config.js`.

1. `npm run deploy` genera el build y publica la rama `gh-pages`.
2. En GitHub, configura Pages para servir desde la rama `gh-pages`.
3. `public/404.html` implementa el fallback de rutas SPA y `public/.nojekyll` evita el
   procesamiento de Jekyll.

Si cambias el nombre del repositorio, actualiza `base` en `vite.config.js` y `homepage`
en `package.json`.
