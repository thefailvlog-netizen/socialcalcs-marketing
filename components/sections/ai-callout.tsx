const APP_URL = 'https://app.socialcalcs.com'

export function AiCallout() {
  return (
    <section style={{ padding: '72px clamp(20px, 5vw, 32px)' }}>
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          background: 'var(--dark)',
          color: '#fff',
          borderRadius: 24,
          padding: 'clamp(32px, 5vw, 48px) clamp(22px, 4vw, 44px)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(min(320px, 100%),1fr))',
          gap: 44,
          alignItems: 'center',
        }}
      >
        {/* Left */}
        <div>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '5px 12px',
              borderRadius: 999,
              background: 'rgba(41,82,204,0.18)',
              color: 'var(--accent)',
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}
          >
            <span aria-hidden="true">✦</span> Easy to build
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-roboto), sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(28px,3.4vw,42px)',
              lineHeight: 1.05,
              letterSpacing: '-0.025em',
              margin: '16px 0 0',
            }}
          >
            Easy to build — your way.
          </h2>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.66)', margin: '14px 0 0', maxWidth: 440 }}>
            Make your site in a few clicks, right from your phone — no design or tech skills needed.
            Describe your practice and we&apos;ll assemble the page for you. Either way you&apos;re live in
            minutes.
          </p>
          <a
            href={`${APP_URL}/signup`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              marginTop: 24,
              background: 'var(--accent)',
              color: '#fff',
              fontWeight: 600,
              fontSize: 15,
              padding: '13px 22px',
              borderRadius: 'var(--r)',
              textDecoration: 'none',
            }}
          >
            Start building <span style={{ fontSize: 17 }} aria-hidden="true">→</span>
          </a>
        </div>

        {/* Right — two stacked cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: 16,
              padding: 22,
            }}
          >
            <div style={{ fontFamily: 'var(--font-space-grotesk), sans-serif', fontWeight: 700, fontSize: 16, color: '#fff' }}>
              A few clicks on mobile
            </div>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', margin: '6px 0 0' }}>
              Pick your calculators, add your links, publish — all from your phone.
            </p>
          </div>
          <div
            style={{
              position: 'relative',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: 16,
              padding: 22,
            }}
          >
            <span
              style={{
                position: 'absolute',
                top: 18,
                right: 18,
                fontSize: 10.5,
                fontWeight: 600,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.6)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: 999,
                padding: '3px 9px',
              }}
            >
              Coming soon
            </span>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                fontFamily: 'var(--font-space-grotesk), sans-serif',
                fontWeight: 700,
                fontSize: 16,
                color: '#fff',
              }}
            >
              <span style={{ color: 'var(--accent)' }} aria-hidden="true">
                ✦
              </span>
              Your favourite AI tool
            </div>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', margin: '6px 0 0', maxWidth: 300 }}>
              Connect the AI tool you already use and let it build and edit your page for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
