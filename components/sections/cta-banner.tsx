const APP_URL = 'https://app.socialcalcs.com'

export function CtaBanner() {
  return (
    <section style={{ padding: '96px 32px' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
        <h2
          style={{
            fontFamily: 'var(--font-roboto), sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(34px,4.6vw,58px)',
            lineHeight: 1.0,
            letterSpacing: '-0.03em',
            margin: 0,
          }}
        >
          Your bio link could be your best salesperson.
        </h2>
        <p style={{ fontSize: 18, color: 'var(--ink-soft)', margin: '20px auto 0', maxWidth: 520 }}>
          Describe your practice, let AI build your page, and start turning followers into clients
          today.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center', marginTop: 30 }}>
          <a
            href={`${APP_URL}/signup`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'var(--accent)',
              color: '#fff',
              fontWeight: 600,
              fontSize: 16,
              padding: '16px 30px',
              borderRadius: 'var(--r)',
              textDecoration: 'none',
            }}
          >
            Try it now — free <span style={{ fontSize: 18 }}>→</span>
          </a>
        </div>
        <p style={{ fontSize: 13.5, color: 'var(--ink-soft)', marginTop: 16 }}>No credit card required.</p>
      </div>
    </section>
  )
}
