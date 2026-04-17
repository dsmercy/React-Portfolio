import SectionWrapper from '../components/SectionWrapper'
import { useCopyToClipboard } from '../hooks/useCopyToClipboard'

const EMAIL = 'daya.shankar.dev@gmail.com'

function IconCopy() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
    </svg>
  )
}

function IconCheck() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function IconGitHub() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function IconLinkedIn() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

export default function Contact() {
  const { copied, copy } = useCopyToClipboard()

  return (
    <>
      <SectionWrapper id="contact">
        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)] mb-4">
          Contact
        </p>

        <div className="flex flex-col items-center text-center gap-8 max-w-2xl mx-auto">
          {/* Headline */}
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--color-text-primary)]">
              Let's build something great
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              I'm currently open to senior and lead engineering roles — especially teams
              building production-grade distributed systems. If you've got an interesting
              problem, I'd love to hear about it.
            </p>
          </div>

          {/* Open-to-work badge */}
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-[var(--color-green-dim)] text-[var(--color-green)] border border-[rgba(34,197,94,0.25)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-green)] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-green)]" />
            </span>
            Open to Remote Roles Globally
          </span>

          {/* Email copy row */}
          <div className="flex items-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] px-4 py-3 w-full max-w-sm">
            <span className="flex-1 text-sm text-[var(--color-text-primary)] font-mono text-left truncate">
              {EMAIL}
            </span>
            <button
              onClick={() => copy(EMAIL)}
              aria-label={copied ? 'Copied!' : 'Copy email address'}
              className={[
                'flex items-center gap-1.5 shrink-0 text-xs font-medium px-2.5 py-1.5 rounded-md transition-all duration-200 cursor-pointer',
                copied
                  ? 'text-[var(--color-green)] bg-[var(--color-green-dim)]'
                  : 'text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-border)]',
              ].join(' ')}
            >
              {copied ? <><IconCheck /> Copied!</> : <><IconCopy /> Copy</>}
            </button>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/dsmercy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors"
            >
              <IconGitHub />
              <span>GitHub</span>
            </a>
            <span className="w-px h-4 bg-[var(--color-border)]" aria-hidden="true" />
            <a
              href="https://linkedin.com/in/dayashankar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors"
            >
              <IconLinkedIn />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </SectionWrapper>

      {/* ── Footer ──────────────────────────────── */}
      <footer className="border-t border-[var(--color-border)] py-6 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[var(--color-text-muted)]">
          <span>© {new Date().getFullYear()} Daya Shankar. All rights reserved.</span>
          <span>Built with React, TypeScript &amp; Framer Motion.</span>
        </div>
      </footer>
    </>
  )
}
