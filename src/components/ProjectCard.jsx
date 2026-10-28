import { ArrowUpRight } from 'lucide-react'

export default function ProjectCard({ project, onOpen }) {
  return (
    <button className="group text-left" onClick={() => onOpen(project)} aria-label={`View details for ${project.title}`}>
      <div className="relative aspect-[4/3] overflow-hidden bg-[#171717]">
        <img src={project.image} alt={`${project.title} project artwork`} className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70" />
        <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white transition group-hover:border-ember group-hover:bg-ember group-hover:text-ink"><ArrowUpRight size={16} /></span>
        <span className="absolute bottom-4 left-4 text-[10px] uppercase tracking-[0.18em] text-white/70">Personal work</span>
      </div>
      <div className="flex items-start justify-between gap-4 border-b border-white/10 py-5">
        <div>
          <h3 className="font-display text-xl text-paper transition group-hover:text-ember">{project.title}</h3>
          <p className="mt-1 text-sm text-fog">{project.category}</p>
        </div>
        <span className="font-mono text-xs text-fog">{project.year}</span>
      </div>
    </button>
  )
}
