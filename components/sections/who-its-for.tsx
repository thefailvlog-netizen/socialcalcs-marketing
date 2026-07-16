const personas = [
  {
    title: 'Mortgage brokers',
    bullets: [
      'Turn your Instagram bio into a working lead form.',
      'Send a calculator link instead of a generic rate sheet.',
      'Every calculation captures their contact automatically.',
    ],
  },
  {
    title: 'Real estate agents',
    bullets: [
      'Give buyers an affordability calculator tied to your brand.',
      'Embed your microsite link in every listing.',
      'Capture buyer leads before they find another agent.',
    ],
  },
  {
    title: 'Financial advisors',
    comingSoon: true,
    bullets: [
      'Share retirement and investment calculators from your bio.',
      'Capture leads from LinkedIn automatically.',
      'Branded tools that position you as the expert.',
    ],
  },
]

export function WhoItsFor() {
  return (
    <section style={{ padding: '80px clamp(20px, 5vw, 32px)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ maxWidth: 620 }}>
          <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--accent)' }}>
            {"Who it's for"}
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-roboto), sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(30px,3.6vw,46px)',
              lineHeight: 1.04,
              letterSpacing: '-0.025em',
              margin: '12px 0 0',
            }}
          >
            If you sell with numbers, this is your edge.
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(min(300px, 100%),1fr))',
            gap: 20,
            marginTop: 46,
          }}
        >
          {personas.map(({ title, bullets, comingSoon }) => (
            <div
              key={title}
              style={{
                position: 'relative',
                background: 'var(--card)',
                border: '1px solid var(--line)',
                borderRadius: 'var(--r)',
                padding: 28,
              }}
            >
              {comingSoon && (
                <span
                  style={{
                    position: 'absolute',
                    top: 18,
                    right: 18,
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    color: 'var(--ink-soft)',
                    border: '1px solid var(--line)',
                    borderRadius: 999,
                    padding: '4px 10px',
                  }}
                >
                  Coming soon
                </span>
              )}
              <h3
                style={{
                  fontFamily: 'var(--font-roboto), sans-serif',
                  fontWeight: 600,
                  fontSize: 20,
                  margin: '0 0 16px',
                }}
              >
                {title}
              </h3>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 11,
                  opacity: comingSoon ? 0.72 : 1,
                }}
              >
                {bullets.map(b => (
                  <div key={b} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--accent)', fontWeight: 700 }} aria-hidden="true">
                      ✓
                    </span>
                    <span style={{ fontSize: 14.5, color: 'var(--ink-soft)' }}>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
