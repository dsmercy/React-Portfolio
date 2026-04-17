import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'
import Badge from '../components/Badge'
import skills from '../data/skills'

function SkillCard({
  category,
  icon,
  skills: tags,
  index,
}: {
  category: string
  icon: string
  skills: string[]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.0, 0.0, 0.2, 1],
      }}
      className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5 flex flex-col gap-4 hover:border-[var(--color-border-glow)] transition-colors duration-300"
    >
      {/* Card header */}
      <div className="flex items-center gap-3">
        <span
          className="flex items-center justify-center w-9 h-9 rounded-lg bg-[var(--color-accent-glow)] text-lg"
          aria-hidden="true"
        >
          {icon}
        </span>
        <h3 className="text-sm font-semibold text-[var(--color-text-primary)]">
          {category}
        </h3>
      </div>

      {/* Badge grid */}
      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <Badge key={tag} label={tag} variant="default" />
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      {/* Section label */}
      <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)] mb-4">
        Skills
      </p>

      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--color-text-primary)]">
          My tech stack
        </h2>
        <p className="text-sm text-[var(--color-text-muted)] max-w-xs sm:text-right">
          Tools and technologies I reach for when building production systems.
        </p>
      </div>

      {/* Category cards — 3-col on lg, 2-col on md, 1-col on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((cat, i) => (
          <SkillCard
            key={cat.category}
            category={cat.category}
            icon={cat.icon}
            skills={cat.skills}
            index={i}
          />
        ))}
      </div>
    </SectionWrapper>
  )
}
