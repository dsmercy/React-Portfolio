interface BadgeProps {
  label: string
  variant?: 'default' | 'accent' | 'green'
}

export default function Badge({ label, variant = 'default' }: BadgeProps) {
  const styles: Record<string, string> = {
    default:
      'bg-[var(--color-bg-card)] text-[var(--color-text-secondary)] border border-[var(--color-border)]',
    accent:
      'bg-[var(--color-accent-glow)] text-[var(--color-accent-light)] border border-[var(--color-border-glow)]',
    green:
      'bg-[var(--color-green-dim)] text-[var(--color-green)] border border-[rgba(34,197,94,0.3)]',
  }

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${styles[variant]}`}
    >
      {label}
    </span>
  )
}
