import { ArrowDown, ArrowUpRight, Download, Mail, MapPin, Phone, Play, Sparkles } from 'lucide-react'
import { useState } from 'react'
import NavBar from './components/NavBar'
import ProjectCard from './components/ProjectCard'
import ProjectModal from './components/ProjectModal'
import SectionLabel from './components/SectionLabel'
import { categories, projects } from './data/projects'

function App() {
  const [filter, setFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)
  const visibleProjects = filter === 'All' ? projects : projects.filter((project) => project.category === filter)

  return (
    <div id="top" className="min-h-screen overflow-hidden bg-ink text-paper">
      <NavBar />
      <main>
        <section className="relative flex min-h-screen items-end px-6 pb-16 pt-32 lg:px-10 lg:pb-20">
          <div className="absolute inset-0 hero-grid opacity-50" />
          <div className="pointer-events-none absolute right-[-12%] top-[12%] h-[70vw] w-[70vw] max-h-[850px] max-w-[850px] rounded-full bg-ember/10 blur-[120px]" />
          <div className="relative z-10 mx-auto w-full max-w-7xl">
            <div className="mb-20 flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-fog"><span className="h-2 w-2 rounded-full bg-ember shadow-[0_0_16px_#ef6b3b]" /> Available for opportunities · 2024—25</div>
            <p className="mb-5 font-mono text-xs tracking-[0.2em] text-ember">/ 01 — 3D ARTIST & VFX</p>
            <h1 className="max-w-5xl font-display text-[clamp(3.25rem,9vw,7.5rem)] font-medium leading-[0.84] tracking-[-0.07em]">Sasidharan</h1>
            <div className="mt-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <p className="max-w-sm text-base leading-7 text-fog">Building visual worlds through modelling, light, and compositing. Based in Salem, Tamil Nadu.</p>
              <div className="flex gap-3"><button onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })} className="rounded-full bg-ember px-6 py-3 text-sm font-medium text-ink transition hover:bg-paper">Explore my work <ArrowDown className="ml-2 inline" size={16} /></button><a href="/resume.pdf" download className="rounded-full border border-white/20 px-6 py-3 text-sm text-paper transition hover:border-ember hover:text-ember">Resume <Download className="ml-2 inline" size={15} /></a></div>
            </div>
          </div>
          <div className="absolute bottom-8 right-6 hidden font-mono text-[10px] uppercase tracking-[0.2em] text-fog lg:block">Scroll to explore ↓</div>
        </section>

        <section id="work" className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-40">
          <SectionLabel number="02">Selected work</SectionLabel>
          <div className="mb-12 flex flex-col justify-between gap-8 md:flex-row md:items-end"><h2 className="max-w-xl font-display text-5xl tracking-[-0.05em] text-paper md:text-7xl">A few frames<br /><span className="text-white/35">from the process.</span></h2><p className="max-w-xs text-sm leading-6 text-fog">A growing selection of personal studies and experiments. Replace these sample placeholders with your own work.</p></div>
          <div className="mb-10 flex flex-wrap gap-2 border-y border-white/10 py-4">{categories.map((category) => <button key={category} onClick={() => setFilter(category)} className={`rounded-full px-4 py-2 text-xs transition ${filter === category ? 'bg-paper text-ink' : 'text-fog hover:text-paper'}`}>{category}</button>)}</div>
          <div className="grid gap-x-6 gap-y-12 md:grid-cols-2">{visibleProjects.map((project) => <ProjectCard key={project.id} project={project} onOpen={setSelectedProject} />)}</div>
        </section>

        <section id="about" className="border-y border-white/10 bg-[#111112] px-6 py-28 lg:px-10 lg:py-36">
          <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.8fr_1.2fr]"><div><SectionLabel number="03">About me</SectionLabel><div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-fog"><Sparkles size={15} className="text-ember" /> Curious by default</div></div><div><h2 className="max-w-3xl font-display text-4xl leading-tight tracking-[-0.04em] text-paper md:text-6xl">I like making things feel <span className="text-ember">real.</span></h2><div className="mt-10 grid gap-8 text-base leading-7 text-fog md:grid-cols-2"><p>I&apos;m a Computer Science student and an emerging 3D artist from Salem, Tamil Nadu. My practice sits at the intersection of technical problem solving and visual storytelling.</p><p>I work primarily in Blender, with basic Maya skills and hands-on practice in rotoscoping and compositing using Silhouette. I&apos;m currently looking for a Junior 3D Artist, Artist Trainee, or VFX Artist opportunity.</p></div><a href="mailto:sasidharan.m2004@gmail.com" className="mt-10 inline-flex items-center gap-2 border-b border-ember pb-2 text-sm text-paper transition hover:text-ember">Start a conversation <ArrowUpRight size={16} /></a></div></div>
        </section>

        <section id="skills" className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36"><SectionLabel number="04">Toolkit</SectionLabel><div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]"><h2 className="font-display text-5xl tracking-[-0.05em] md:text-7xl">Tools I use<br /><span className="text-white/35">to think visually.</span></h2><div className="grid grid-cols-2 border-t border-white/10 sm:grid-cols-3">{['Blender', 'Autodesk Maya', 'Silhouette', '3D Modelling', 'Rotoscoping', 'Compositing fundamentals', 'Python & scripting'].map((skill, i) => <div key={skill} className="border-b border-white/10 py-5 pr-4 text-sm text-fog"><span className="mr-3 font-mono text-xs text-ember">0{i + 1}</span>{skill}</div>)}</div></div></section>

        <section id="showreel" className="px-6 pb-28 lg:px-10 lg:pb-36"><div className="mx-auto max-w-7xl"><SectionLabel number="05">Showreel</SectionLabel><div className="relative flex min-h-[420px] items-center justify-center overflow-hidden bg-[#151515]"><img src="/images/showreel-placeholder.svg" alt="Showreel video placeholder" className="absolute inset-0 h-full w-full object-cover opacity-70" /><div className="relative z-10 text-center"><button className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-ember text-ink transition hover:scale-110 hover:bg-paper" aria-label="Showreel placeholder"><Play fill="currentColor" size={24} /></button><p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-paper">Your showreel goes here</p><p className="mt-3 text-sm text-fog">Replace this placeholder with a YouTube or Vimeo URL.</p></div></div></div></section>

        <section id="contact" className="border-t border-white/10 bg-ember px-6 py-24 text-ink lg:px-10 lg:py-32"><div className="mx-auto max-w-7xl"><SectionLabel number="06">Contact</SectionLabel><div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-end"><div><h2 className="max-w-3xl font-display text-6xl font-medium leading-[0.9] tracking-[-0.06em] md:text-8xl">Let&apos;s make<br />something.</h2><a href="mailto:sasidharan.m2004@gmail.com" className="mt-8 inline-block border-b border-ink pb-2 text-lg">sasidharan.m2004@gmail.com</a></div><div className="space-y-4 text-sm"><p className="flex items-center gap-3"><Phone size={16} /> +91 6382379827</p><p className="flex items-center gap-3"><MapPin size={16} /> Salem, Tamil Nadu, India</p><p className="flex items-center gap-3"><Mail size={16} /> Open to junior opportunities</p></div></div></div></section>
      </main>
      <footer className="flex flex-col justify-between gap-3 bg-ember px-6 pb-8 text-xs text-ink/70 sm:flex-row lg:px-10"><span>© {new Date().getFullYear()} Sasidharan M</span><span>Designed & built with intent</span></footer>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  )
}

export default App
