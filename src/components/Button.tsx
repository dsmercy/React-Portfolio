import type { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'ghost'
  href?: string
  onClick?: () => void
  target?: string
  rel?: string
  className?: string
}

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  target,
  rel,
  className = '',
}: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]'

  const styles: Record<string, string> = {
    primary:
      'bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-light)] shadow-lg shadow-[var(--color-accent-glow)]',
    ghost:
      'bg-transparent text-[var(--color-text-secondary)] border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:text-[var(--color-text-primary)]',
  }

  const cls = `${base} ${styles[variant]} ${className}`

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={cls}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={cls}>
      {children}
    </button>
  )
}
