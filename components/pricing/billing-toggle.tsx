'use client'

interface BillingToggleProps {
  annual: boolean
  onChange: (annual: boolean) => void
}

export function BillingToggle({ annual, onChange }: BillingToggleProps) {
  return (
    <div
      style={{
        display: 'inline-flex',
        position: 'relative',
        background: 'var(--card)',
        border: '1px solid var(--line)',
        borderRadius: 999,
        padding: 4,
      }}
    >
      {/* Sliding pill */}
      <div
        style={{
          position: 'absolute',
          top: 4,
          left: 4,
          width: 'calc(50% - 4px)',
          height: 'calc(100% - 8px)',
          borderRadius: 999,
          background: 'var(--ink)',
          transition: 'transform 0.22s ease',
          transform: annual ? 'translateX(100%)' : 'translateX(0)',
        }}
      />
      <button
        onClick={() => onChange(false)}
        style={{
          position: 'relative',
          zIndex: 1,
          border: 'none',
          background: 'transparent',
          cursor: 'pointer',
          fontFamily: 'inherit',
          fontWeight: 600,
          fontSize: 14,
          padding: '9px 22px',
          color: annual ? 'var(--ink-soft)' : '#fff',
          transition: 'color 0.22s ease',
        }}
      >
        Monthly
      </button>
      <button
        onClick={() => onChange(true)}
        style={{
          position: 'relative',
          zIndex: 1,
          border: 'none',
          background: 'transparent',
          cursor: 'pointer',
          fontFamily: 'inherit',
          fontWeight: 600,
          fontSize: 14,
          padding: '9px 22px',
          color: annual ? '#fff' : 'var(--ink-soft)',
          transition: 'color 0.22s ease',
        }}
      >
        Annual <span style={{ color: 'var(--accent)' }}>−20%</span>
      </button>
    </div>
  )
}
