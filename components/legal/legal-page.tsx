import type { ReactNode } from 'react'

export function LegalPage({
  title,
  updated,
  intro,
  children,
}: {
  title: string
  updated: string
  intro: ReactNode
  children: ReactNode
}) {
  return (
    <div style={{ padding: '72px 32px 96px' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <h1
          style={{
            fontFamily: 'var(--font-roboto), sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(32px,4vw,48px)',
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            margin: 0,
          }}
        >
          {title}
        </h1>
        <p style={{ fontSize: 13.5, color: 'var(--ink-soft)', margin: '14px 0 0' }}>Last updated: {updated}</p>
        <div style={{ fontSize: 16.5, color: 'var(--ink-soft)', margin: '24px 0 0', lineHeight: 1.65 }}>{intro}</div>
        <div style={{ marginTop: 8 }}>{children}</div>
      </div>
    </div>
  )
}

export function Section({ n, heading, children }: { n: number; heading: string; children: ReactNode }) {
  return (
    <section style={{ marginTop: 40 }}>
      <h2
        style={{
          fontFamily: 'var(--font-roboto), sans-serif',
          fontWeight: 700,
          fontSize: 21,
          letterSpacing: '-0.015em',
          margin: '0 0 12px',
          display: 'flex',
          gap: 12,
        }}
      >
        <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-space-grotesk), sans-serif', flexShrink: 0 }}>
          {String(n).padStart(2, '0')}
        </span>
        {heading}
      </h2>
      <div
        style={{
          fontSize: 15.5,
          color: 'var(--ink-soft)',
          lineHeight: 1.7,
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
        }}
      >
        {children}
      </div>
    </section>
  )
}

/** Visually emphasised clause — used for the disclaimers that carry the most weight. */
export function Callout({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        background: 'var(--card)',
        border: '1px solid var(--line)',
        borderLeft: '3px solid var(--accent)',
        borderRadius: 10,
        padding: '16px 18px',
        fontSize: 15,
        lineHeight: 1.65,
      }}
    >
      {children}
    </div>
  )
}

export function List({ items }: { items: ReactNode[] }) {
  return (
    <ul style={{ margin: 0, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
      {items.map((item, i) => (
        <li key={i} style={{ lineHeight: 1.65 }}>
          {item}
        </li>
      ))}
    </ul>
  )
}
