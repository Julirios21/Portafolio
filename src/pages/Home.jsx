import PageMeta from '../components/layout/PageMeta'
import About from '../components/sections/About'
import Contact from '../components/sections/Contact'
import Hero from '../components/sections/Hero'
import ProjectsPreview from '../components/sections/ProjectsPreview'
import Skills from '../components/sections/Skills'

export default function Home() {
  return (
    <>
      <PageMeta />
      <Hero />
      <About />
      <ProjectsPreview />
      <Skills />
      <Contact />
    </>
  )
}
