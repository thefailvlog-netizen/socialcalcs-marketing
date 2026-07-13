const APP_URL = 'https://app.socialcalcs.com'

const AvatarSarah = () => (
  <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="34" cy="34" r="34" fill="#E8EDF8"/>
    {/* Hair */}
    <ellipse cx="34" cy="20" rx="16" ry="14" fill="#7B4F2E"/>
    <rect x="18" y="24" width="4" height="18" rx="2" fill="#7B4F2E"/>
    <rect x="46" y="24" width="4" height="18" rx="2" fill="#7B4F2E"/>
    {/* Face */}
    <ellipse cx="34" cy="30" rx="13" ry="14" fill="#F5C9A0"/>
    {/* Eyes */}
    <ellipse cx="29" cy="28" rx="2" ry="2.2" fill="#3B2314"/>
    <ellipse cx="39" cy="28" rx="2" ry="2.2" fill="#3B2314"/>
    {/* Smile */}
    <path d="M29 35 Q34 39 39 35" stroke="#C47A5A" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    {/* Shoulders */}
    <ellipse cx="34" cy="62" rx="18" ry="10" fill="#4F46E5"/>
  </svg>
)

const AvatarMarcus = () => (
  <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="34" cy="34" r="34" fill="#EAF0F8"/>
    {/* Hair */}
    <ellipse cx="34" cy="19" rx="14" ry="11" fill="#1A1A1A"/>
    {/* Face */}
    <ellipse cx="34" cy="31" rx="13" ry="14" fill="#8D5524"/>
    {/* Eyes */}
    <ellipse cx="29.5" cy="28.5" rx="1.8" ry="2" fill="#1A1A1A"/>
    <ellipse cx="38.5" cy="28.5" rx="1.8" ry="2" fill="#1A1A1A"/>
    {/* Smile */}
    <path d="M29 36 Q34 40 39 36" stroke="#6B3A1F" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    {/* Shoulders */}
    <ellipse cx="34" cy="62" rx="18" ry="10" fill="#1E293B"/>
  </svg>
)

const AvatarPriya = () => (
  <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="34" cy="34" r="34" fill="#F5EEF8"/>
    {/* Hair */}
    <ellipse cx="34" cy="19" rx="15" ry="13" fill="#1C1008"/>
    <rect x="17" y="22" width="4" height="22" rx="2" fill="#1C1008"/>
    <rect x="47" y="22" width="4" height="22" rx="2" fill="#1C1008"/>
    {/* Face */}
    <ellipse cx="34" cy="31" rx="13" ry="13.5" fill="#C68642"/>
    {/* Eyes */}
    <ellipse cx="29.5" cy="28.5" rx="1.8" ry="2" fill="#1C1008"/>
    <ellipse cx="38.5" cy="28.5" rx="1.8" ry="2" fill="#1C1008"/>
    {/* Smile */}
    <path d="M29 36 Q34 40 39 36" stroke="#A0522D" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    {/* Shoulders */}
    <ellipse cx="34" cy="62" rx="18" ry="10" fill="#7C3AED"/>
  </svg>
)

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
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 20 }}>
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
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '6px 12px',
                border: '1px solid rgba(79,70,229,0.25)',
                borderRadius: 999,
                background: 'var(--accent-soft)',
                fontSize: 12.5,
                fontWeight: 600,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
              }}
            >
              ✦ Built with AI
            </div>
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-roboto), serif',
              fontWeight: 700,
              fontSize: 'clamp(42px,5.2vw,72px)',
              lineHeight: 1.0,
              letterSpacing: '-0.035em',
              margin: '0 0 0',
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
              href={`${APP_URL}/mortgageman`}
              target="_blank"
              rel="noopener noreferrer"
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
                animation: 'pulse-glow 2.8s ease-in-out infinite',
              }}
            >
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0, animation: 'dot-pulse 2.8s ease-in-out infinite' }} />
              See a live example
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
              boxShadow: '0 30px 60px -28px rgba(20,22,28,0.18)',
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
                  overflow: 'hidden',
                  background: '#E8EDF8',
                }}
              >
                <AvatarSarah />
              </div>
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
                boxShadow: '0 0 0 4px rgba(79,70,229,0.25)',
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
