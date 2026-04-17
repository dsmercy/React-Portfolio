import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'
import Badge from '../components/Badge'
import Button from '../components/Button'
import projects from '../data/projects'

function IconGitHub() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function IconExternal() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.0, 0.0, 0.2, 1] }}
      className="group relative rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 flex flex-col gap-5 hover:border-[var(--color-border-glow)] hover:-translate-y-1 transition-all duration-300"
    >
      {/* Top glow on hover */}
      <div
        className="absolute inset-x-0 top-0 h-px rounded-t-xl bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-hidden="true"
      />

      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span
            className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--color-accent-glow)] text-xl shrink-0"
            aria-hidden="true"
          >
            {project.icon}
          </span>
          <h3 className="text-base font-semibold text-[var(--color-text-primary)] leading-snug">
            {project.title}
          </h3>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
        {project.description}
      </p>

      {/* Bullet highlights */}
      <ul className="flex flex-col gap-1.5">
        {project.highlights.map((h) => (
          <li key={h} className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] shrink-0" aria-hidden="true" />
            {h}
          </li>
        ))}
      </ul>

      {/* Footer: tech badges + GitHub link */}
      <div className="flex flex-col gap-3 mt-auto pt-2 border-t border-[var(--color-border)]">
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <Badge key={t} label={t} variant="default" />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs px-3 py-1.5"
          >
            <IconGitHub /> GitHub
          </Button>
          {project.live && (
            <Button
              variant="ghost"
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs px-3 py-1.5"
            >
              <IconExternal /> Live Demo
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)] mb-4">
        Projects
      </p>

      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--color-text-primary)]">
          Things I've built
        </h2>
        <p className="text-sm text-[var(--color-text-muted)] max-w-xs sm:text-right">
          Production-grade projects that solve real problems with AI and modern web tech.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </SectionWrapper>
  )
}
