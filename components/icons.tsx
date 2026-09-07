// Stroke icons on a 24-box grid. `stroke` defaults to currentColor.
export function Arrow({ size = 18, stroke = 'currentColor' }: { size?: number; stroke?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  )
}

export function External({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17L17 7" />
      <path d="M8 7h9v9" />
    </svg>
  )
}

export function Check({ size = 20, stroke = 'var(--accent)' }: { size?: number; stroke?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="M5 12l5 5L20 7" />
    </svg>
  )
}

/** Section eyebrow — small caps in the accent colour. */
export function Eyebrow({ children, onDark }: { children: React.ReactNode; onDark?: boolean }) {
  return (
    <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: onDark ? 'var(--soft)' : 'var(--accent)' }}>
      {children}
    </div>
  )
}

export const h2Style = {
  margin: 0,
  fontWeight: 800,
  fontSize: 'clamp(34px, 4vw, 58px)',
  lineHeight: 0.98,
  letterSpacing: '-0.03em',
} as const
