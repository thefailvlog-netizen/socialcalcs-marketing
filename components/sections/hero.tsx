const APP_URL = 'https://app.socialcalcs.com'

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
              padding: '6px 12px',
              border: '1px solid var(--line)',
              borderRadius: 999,
              background: 'var(--card)',
              fontSize: 12.5,
              fontWeight: 600,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              color: 'var(--ink-soft)',
            }}
          >
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
            The bio link for financial pros
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-roboto), serif',
              fontWeight: 700,
              fontSize: 'clamp(42px,5.2vw,72px)',
              lineHeight: 1.0,
              letterSpacing: '-0.035em',
              margin: '22px 0 0',
            }}
          >
            Your bio link,{' '}
            <span style={{ color: 'var(--accent)' }}>built to win clients.</span>
          </h1>

          <p style={{ fontSize: 19, color: 'var(--ink-soft)', maxWidth: 480, margin: '22px 0 0' }}>
            SocialCalcs gives you a polished mini bio site — your license, your contact, all your
            links — with financial calculators built right in. Every number a visitor runs becomes
            a lead and a branded PDF report.
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
              Try it free <span style={{ fontSize: 18 }}>→</span>
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
              background: '#fff',
              border: '1px solid var(--line)',
              borderRadius: 30,
              boxShadow: '0 30px 60px -28px rgba(20,22,28,0.32)',
              overflow: 'hidden',
            }}
          >
            <div style={{ height: 84, background: 'var(--accent)' }} />
            <div style={{ padding: '0 20px 22px', marginTop: -34 }}>
              <div
                style={{
                  width: 68,
                  height: 68,
                  borderRadius: '50%',
                  border: '4px solid #fff',
                  background: 'repeating-linear-gradient(45deg,#ececea,#ececea 5px,#f5f5f2 5px,#f5f5f2 10px)',
                }}
              />
              <div style={{ fontFamily: 'var(--font-space-grotesk), sans-serif', fontWeight: 600, fontSize: 19, marginTop: 12 }}>
                Sarah Jones
              </div>
              <div style={{ fontSize: 12.5, color: 'var(--ink-soft)' }}>Licensed Mortgage Broker · #M12345</div>
              <div style={{ display: 'flex', gap: 7, marginTop: 12, flexWrap: 'wrap' }}>
                {['Email', 'Call', 'sarahjones.ca'].map(chip => (
                  <span
                    key={chip}
                    style={{
                      fontSize: 10.5,
                      fontWeight: 600,
                      color: 'var(--ink-soft)',
                      border: '1px solid var(--line)',
                      borderRadius: 999,
                      padding: '4px 10px',
                    }}
                  >
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
                    background: 'var(--accent)',
                    color: '#fff',
                    borderRadius: 11,
                    padding: '12px 14px',
                    fontSize: 13,
                    fontWeight: 600,
                  }}
                >
                  <span>Mortgage Payment Calculator</span>
                  <span>→</span>
                </div>
                {["Book a consultation", "Today's rate sheet (PDF)"].map(label => (
                  <div
                    key={label}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      border: '1px solid var(--line)',
                      borderRadius: 11,
                      padding: '12px 14px',
                      fontSize: 13,
                      fontWeight: 600,
                    }}
                  >
                    <span>{label}</span>
                    <span style={{ color: 'var(--ink-soft)' }}>→</span>
                  </div>
                ))}
              </div>
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
              boxShadow: '0 18px 36px -16px rgba(20,22,28,0.5)',
              animation: 'floaty 5s ease-in-out infinite',
            }}
          >
            <span
              style={{
                width: 9,
                height: 9,
                borderRadius: '50%',
                background: 'var(--accent)',
                boxShadow: '0 0 0 4px rgba(16,163,127,0.25)',
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
