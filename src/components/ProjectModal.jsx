import { ArrowUpRight, X } from 'lucide-react'

export default function ProjectModal({ project, onClose }) {
  if (!project) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md" role="dialog" aria-modal="true" aria-label={`${project.title} project details`} onClick={onClose}>
      <div className="relative grid max-h-[90vh] w-full max-w-5xl overflow-auto rounded-sm border border-white/10 bg-[#151515] lg:grid-cols-[1.1fr_0.9fr]" onClick={(event) => event.stopPropagation()}>
        <button className="absolute right-4 top-4 z-10 rounded-full border border-white/20 bg-black/50 p-2 text-white transition hover:border-ember hover:text-ember" onClick={onClose} aria-label="Close project details">
          <X size={18} />
        </button>
        <div className="aspect-[4/3] bg-black lg:aspect-auto">
          <img src={project.image} alt={`${project.title} project artwork`} className="h-full w-full object-cover" />
        </div>
        <div className="flex flex-col justify-center p-8 sm:p-12">
          <p className="mb-3 font-mono text-xs tracking-[0.2em] text-ember">{project.id} / {project.year}</p>
          <h3 className="font-display text-4xl font-medium tracking-tight text-paper">{project.title}</h3>
          <p className="mt-5 leading-7 text-fog">{project.description}</p>
          <div className="mt-8 border-t border-white/10 pt-5">
            <p className="text-xs uppercase tracking-[0.18em] text-fog">Tools & workflow</p>
            <p className="mt-3 text-sm text-paper">{project.software.join('  /  ')}</p>
          </div>
          <p className="mt-10 flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-fog"><ArrowUpRight size={14} className="text-ember" /> Personal portfolio work</p>
        </div>
      </div>
    </div>
  )
}
