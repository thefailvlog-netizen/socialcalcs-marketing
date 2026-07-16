import { Avatar } from '@/components/avatars'

const APP_URL = 'https://app.socialcalcs.com'

const chipStyle = {
  fontSize: 10.5,
  fontWeight: 600,
  color: '#fff',
  border: '1px solid rgba(255,255,255,0.45)',
  borderRadius: 999,
  padding: '4px 10px',
} as const

const softRowStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  background: 'rgba(255,255,255,0.16)',
  color: '#fff',
  borderRadius: 11,
  padding: '12px 14px',
  fontSize: 13,
  fontWeight: 600,
} as const

export function Hero() {
  return (
    <section style={{ padding: '80px 32px 70px' }}>
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(400px,1fr))',
          gap: 56,
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
              padding: '6px 13px',
              border: '1px solid var(--line)',
              borderRadius: 999,
              background: 'var(--card)',
              fontSize: 12.5,
              fontWeight: 700,
              letterSpacing: '0.03em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
            }}
          >
            <span aria-hidden="true">✦</span>Easy to build
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-roboto), sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(42px,5.2vw,72px)',
              lineHeight: 1.0,
              letterSpacing: '-0.035em',
              margin: '20px 0 0',
            }}
          >
            Your bio link, <span style={{ color: 'var(--accent)' }}>built to win clients.</span>
          </h1>

          <p style={{ fontSize: 19, color: 'var(--ink-soft)', maxWidth: 480, margin: '22px 0 0' }}>
            SocialCalcs gives you a polished mini bio site — your license, your contact, all your
            links — with financial calculators built right in. Describe your practice and let AI
            assemble the whole page. Every number a visitor runs becomes a lead and a branded PDF
            report.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 30 }}>
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
                padding: '15px 26px',
                borderRadius: 'var(--r)',
                textDecoration: 'none',
              }}
            >
              Try it free <span style={{ fontSize: 18 }} aria-hidden="true">→</span>
            </a>
            <a
              href="#bio"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'var(--card)',
                color: 'var(--ink)',
                fontWeight: 600,
                fontSize: 16,
                padding: '15px 24px',
                borderRadius: 'var(--r)',
                border: '1px solid var(--line)',
                textDecoration: 'none',
              }}
            >
              See examples
            </a>
          </div>

          <p style={{ fontSize: 13.5, color: 'var(--ink-soft)', marginTop: 18 }}>
            No credit card. Live in an afternoon. Cancel anytime.
          </p>
        </div>

        {/* Right — bio phone mockup */}
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
          <div
            style={{
              width: '100%',
              maxWidth: 300,
              background: 'var(--accent)',
              borderRadius: 30,
              boxShadow: '0 30px 60px -28px rgba(13,21,18,0.34)',
              overflow: 'hidden',
              padding: '30px 22px 24px',
              textAlign: 'center',
              color: '#fff',
            }}
          >
            <div
              style={{
                width: 68,
                height: 68,
                borderRadius: '50%',
                border: '4px solid rgba(255,255,255,0.85)',
                overflow: 'hidden',
                background: 'rgba(255,255,255,0.2)',
                margin: '0 auto',
              }}
            >
              <Avatar person="sarah" size={68} />
            </div>
            <div style={{ fontFamily: 'var(--font-space-grotesk), sans-serif', fontWeight: 600, fontSize: 19, marginTop: 12 }}>
              Sarah Jones
            </div>
            <div style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.78)' }}>Licensed Mortgage Broker · #M12345</div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 7, marginTop: 12 }}>
              {['Email', 'Call', 'sarahjones.ca'].map(chip => (
                <span key={chip} style={chipStyle}>
                  {chip}
                </span>
              ))}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 9, marginTop: 16 }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: '#fff',
                  color: 'var(--accent)',
                  borderRadius: 11,
                  padding: '12px 14px',
                  fontSize: 13,
                  fontWeight: 600,
                }}
              >
                <span>Mortgage Payment Calculator</span>
                <span aria-hidden="true">→</span>
              </div>
              {['Book a consultation', "Today's rate sheet (PDF)"].map(label => (
                <div key={label} style={softRowStyle}>
                  <span>{label}</span>
                  <span style={{ color: 'rgba(255,255,255,0.7)' }} aria-hidden="true">
                    →
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Floating toast */}
          <div
            style={{
              position: 'absolute',
              bottom: 6,
              right: -6,
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              background: 'var(--ink)',
              color: '#fff',
              padding: '12px 16px',
              borderRadius: 12,
              boxShadow: '0 18px 36px -16px rgba(13,21,18,0.5)',
              animation: 'floaty 5s ease-in-out infinite',
            }}
          >
            <span
              style={{
                width: 9,
                height: 9,
                borderRadius: '50%',
                background: 'var(--accent)',
                boxShadow: '0 0 0 4px rgba(41,82,204,0.25)',
                flexShrink: 0,
              }}
            />
            <div>
              <div style={{ fontSize: 13, fontWeight: 600 }}>New lead captured</div>
              <div style={{ fontSize: 11.5, opacity: 0.6 }}>jordan.m@email.com · just now</div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust line */}
      <div style={{ maxWidth: 1100, margin: '64px auto 0', textAlign: 'center' }}>
        <span
          style={{
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            color: 'var(--ink-soft)',
          }}
        >
          Trusted by mortgage brokers &amp; real estate agents across North America
        </span>
      </div>
    </section>
  )
}
