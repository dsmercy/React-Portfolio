import { motion } from 'framer-motion'
import Button from '../components/Button'
import '../styles/hero.css'

/* ── Animation variants ──────────────────────────────────────── */
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.0, 0.0, 0.2, 1] as const } },
}

/* ── SVG icons (inline — no extra deps) ─────────────────────── */
function IconGitHub() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function IconDownload() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  )
}

function IconArrow() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

/* ── Component ───────────────────────────────────────────────── */
export default function Hero() {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background */}
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-fade" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-32 md:py-40 flex flex-col items-center text-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center gap-6"
        >
          {/* Status badge */}
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-[var(--color-green-dim)] text-[var(--color-green)] border border-[rgba(34,197,94,0.25)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-green)] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-green)]" />
              </span>
              Open to Remote Roles Globally
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={item}
            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[var(--color-text-primary)] leading-[1.08]"
          >
            Daya Shankar
          </motion.h1>

          {/* Title */}
          <motion.p
            variants={item}
            className="text-xl sm:text-2xl font-medium text-[var(--color-accent-light)]"
          >
            Senior Backend Engineer
          </motion.p>

          {/* Tagline */}
          <motion.p
            variants={item}
            className="max-w-xl text-base sm:text-lg text-[var(--color-text-secondary)] leading-relaxed"
          >
            7+ years building production systems across SaaS and industrial IoT —
            microservices, event-driven architecture, and high-performance APIs
            powering 20+ applications at scale.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row items-center gap-3 mt-2"
          >
            <Button variant="primary" onClick={scrollToProjects}>
              View Projects <IconArrow />
            </Button>

            <Button
              variant="ghost"
              href="/React-Portfolio/assets/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconDownload /> Download Resume
            </Button>

            <Button
              variant="ghost"
              href="https://github.com/dsmercy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconGitHub /> GitHub
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
