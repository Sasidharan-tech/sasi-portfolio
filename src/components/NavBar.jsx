import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const links = ['work', 'about', 'skills', 'showreel', 'contact']

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-white/5 bg-ink/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <button onClick={() => scrollTo('top')} className="font-display text-lg font-bold tracking-tight text-paper">Sasi<span className="text-ember">.</span></button>
        <nav className={`${open ? 'absolute left-0 right-0 top-full flex border-b border-white/10 bg-ink px-6 py-6' : 'hidden'} flex-col gap-5 md:static md:flex md:flex-row md:items-center md:border-0 md:bg-transparent md:p-0`}>
          {links.map((link, index) => <button key={link} onClick={() => scrollTo(link)} className="text-left text-xs uppercase tracking-[0.18em] text-fog transition hover:text-paper md:text-right"><span className="mr-2 font-mono text-ember">0{index + 1}</span>{link}</button>)}
          <a href="mailto:sasidharan.m2004@gmail.com" className="text-left text-xs uppercase tracking-[0.18em] text-paper transition hover:text-ember md:ml-4">Let&apos;s talk ↗</a>
        </nav>
        <button className="text-paper md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button>
      </div>
    </header>
  )
}
