import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'
import experience from '../data/experience'

function TimelineItem({
  role,
  index,
  isLast,
}: {
  role: (typeof experience)[number]
  index: number
  isLast: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -24 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.15, ease: [0.0, 0.0, 0.2, 1] }}
      className="relative flex gap-6 md:gap-8"
    >
      {/* ── Timeline spine ─────────────────────── */}
      <div className="flex flex-col items-center shrink-0">
        {/* Dot */}
        <div className="relative z-10 flex items-center justify-center w-4 h-4 mt-1 rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-bg-primary)]">
          <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
        </div>
        {/* Vertical line (hidden for last item) */}
        {!isLast && (
          <div className="w-px flex-1 mt-2 bg-gradient-to-b from-[var(--color-accent)] to-[var(--color-border)]" />
        )}
      </div>

      {/* ── Card ───────────────────────────────── */}
      <div className="pb-10 flex flex-col gap-3 w-full">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
          <div>
            <h3 className="text-base font-semibold text-[var(--color-text-primary)]">
              {role.title}
            </h3>
            <p className="text-sm font-medium text-[var(--color-accent-light)]">
              {role.company}
            </p>
          </div>
          <div className="flex flex-col sm:items-end gap-0.5">
            <span className="text-xs text-[var(--color-text-muted)] font-medium">
              {role.period}
            </span>
            <span className="text-xs text-[var(--color-text-muted)]">
              {role.location}
            </span>
          </div>
        </div>

        {/* Bullet points */}
        <ul className="flex flex-col gap-2 mt-1">
          {role.bullets.map((b) => (
            <li key={b} className="flex items-start gap-2.5 text-sm text-[var(--color-text-secondary)] leading-relaxed">
              <span className="mt-2 h-1 w-1 rounded-full bg-[var(--color-accent)] shrink-0" aria-hidden="true" />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)] mb-4">
        Experience
      </p>

      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--color-text-primary)]">
          Where I've worked
        </h2>
        <p className="text-sm text-[var(--color-text-muted)] max-w-xs sm:text-right">
          5+ years building production systems across AI, SaaS, and contract work.
        </p>
      </div>

      {/* Timeline */}
      <div className="max-w-3xl">
        {experience.map((role, i) => (
          <TimelineItem
            key={role.company + role.period}
            role={role}
            index={i}
            isLast={i === experience.length - 1}
          />
        ))}
      </div>
    </SectionWrapper>
  )
}
