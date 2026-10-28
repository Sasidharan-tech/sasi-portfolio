export default function SectionLabel({ number, children }) {
  return (
    <div className="mb-10 flex items-center gap-4 text-xs uppercase tracking-[0.22em] text-fog">
      <span className="font-mono text-ember">{number}</span>
      <span className="h-px w-8 bg-white/20" />
      <span>{children}</span>
    </div>
  )
}
