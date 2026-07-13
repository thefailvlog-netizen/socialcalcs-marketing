const AvatarSarah = () => (
  <svg width="60" height="60" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="34" cy="34" r="34" fill="#E8EDF8"/>
    <ellipse cx="34" cy="20" rx="16" ry="14" fill="#7B4F2E"/>
    <rect x="18" y="24" width="4" height="18" rx="2" fill="#7B4F2E"/>
    <rect x="46" y="24" width="4" height="18" rx="2" fill="#7B4F2E"/>
    <ellipse cx="34" cy="30" rx="13" ry="14" fill="#F5C9A0"/>
    <ellipse cx="29" cy="28" rx="2" ry="2.2" fill="#3B2314"/>
    <ellipse cx="39" cy="28" rx="2" ry="2.2" fill="#3B2314"/>
    <path d="M29 35 Q34 39 39 35" stroke="#C47A5A" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    <ellipse cx="34" cy="62" rx="18" ry="10" fill="#4F46E5"/>
  </svg>
)

const AvatarMarcus = () => (
  <svg width="60" height="60" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="34" cy="34" r="34" fill="#EAF0F8"/>
    <ellipse cx="34" cy="19" rx="14" ry="11" fill="#1A1A1A"/>
    <ellipse cx="34" cy="31" rx="13" ry="14" fill="#8D5524"/>
    <ellipse cx="29.5" cy="28.5" rx="1.8" ry="2" fill="#1A1A1A"/>
    <ellipse cx="38.5" cy="28.5" rx="1.8" ry="2" fill="#1A1A1A"/>
    <path d="M29 36 Q34 40 39 36" stroke="#6B3A1F" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    <ellipse cx="34" cy="62" rx="18" ry="10" fill="#1E293B"/>
  </svg>
)

const AvatarPriya = () => (
  <svg width="60" height="60" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="34" cy="34" r="34" fill="#F5EEF8"/>
    <ellipse cx="34" cy="19" rx="15" ry="13" fill="#1C1008"/>
    <rect x="17" y="22" width="4" height="22" rx="2" fill="#1C1008"/>
    <rect x="47" y="22" width="4" height="22" rx="2" fill="#1C1008"/>
    <ellipse cx="34" cy="31" rx="13" ry="13.5" fill="#C68642"/>
    <ellipse cx="29.5" cy="28.5" rx="1.8" ry="2" fill="#1C1008"/>
    <ellipse cx="38.5" cy="28.5" rx="1.8" ry="2" fill="#1C1008"/>
    <path d="M29 36 Q34 40 39 36" stroke="#A0522D" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    <ellipse cx="34" cy="62" rx="18" ry="10" fill="#7C3AED"/>
  </svg>
)

const phones = [
  {
    color: '#4F46E5',
    Avatar: AvatarSarah,
    name: 'Sarah Jones',
    role: 'Mortgage Broker · #M12345',
    links: [
      { label: 'Mortgage Payment Calc', filled: true },
      { label: 'Mortgage Penalty Calc', bullet: '#4F46E5' },
      { label: 'Book a consultation', plain: true },
    ],
  },
  {
    color: '#0F172A',
    Avatar: AvatarMarcus,
    name: 'Marcus Lee',
    role: 'Real Estate Agent · #RE8842',
    links: [
      { label: 'Affordability Calculator', filled: true },
      { label: 'Browse my listings', plain: true },
      { label: 'Book a showing', plain: true },
    ],
  },
  {
    color: '#7C3AED',
    Avatar: AvatarPriya,
    name: 'Priya Shah',
    role: 'Financial Advisor · #FA3310',
    links: [
      { label: 'Compound Interest Calc', filled: true },
      { label: 'Investment Scenario Calc', bullet: '#7C3AED' },
      { label: 'Book an intro call', plain: true },
    ],
  },
]

export function BioExamples() {
  return (
    <section id="bio" style={{ padding: '88px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ maxWidth: 660 }}>
          <div
            style={{
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
            }}
          >
            Your mini bio site
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-roboto), serif',
              fontWeight: 700,
              fontSize: 'clamp(30px,3.6vw,46px)',
              lineHeight: 1.04,
              letterSpacing: '-0.025em',
              margin: '12px 0 0',
            }}
          >
            More than a link in bio. Your whole practice on one page.
          </h2>
          <p style={{ fontSize: 17, color: 'var(--ink-soft)', margin: '16px 0 0' }}>
            Your headshot, name, license and credentials, contact details, and every important
            link — fully customizable to match your brand. Pick your colors, reorder your links,
            and embed live calculators anywhere on the page.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 24 }}>
            <a
              href="https://app.socialcalcs.com/mortgageman"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                padding: '12px 22px',
                background: 'var(--card)',
                border: '1px solid rgba(79,70,229,0.35)',
                borderRadius: 'var(--r)',
                fontSize: 14,
                fontWeight: 600,
                color: 'var(--ink)',
                textDecoration: 'none',
                animation: 'pulse-glow 2.8s ease-in-out infinite',
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: 'var(--accent)',
                  flexShrink: 0,
                  animation: 'dot-pulse 2.8s ease-in-out infinite',
                }}
              />
              See a live example →
            </a>
            <a
              href="https://app.socialcalcs.com/signup"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                padding: '12px 22px',
                background: 'var(--accent)',
                borderRadius: 'var(--r)',
                fontSize: 14,
                fontWeight: 600,
                color: '#fff',
                textDecoration: 'none',
              }}
            >
              Build yours with AI →
            </a>
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
            gap: 24,
            marginTop: 48,
            justifyItems: 'center',
          }}
        >
          {phones.map(phone => (
            <div
              key={phone.name}
              style={{
                width: '100%',
                maxWidth: 270,
                background: '#fff',
                border: '1px solid var(--line)',
                borderRadius: 28,
                boxShadow: '0 24px 48px -28px rgba(20,22,28,0.18)',
                overflow: 'hidden',
              }}
            >
              <div style={{ height: 74, background: phone.color }} />
              <div style={{ padding: '0 18px 20px', marginTop: -30 }}>
                <div
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: '50%',
                    border: '4px solid #fff',
                    overflow: 'hidden',
                    background: '#f0f0f0',
                  }}
                >
                  <phone.Avatar />
                </div>
                <div style={{ fontFamily: 'var(--font-space-grotesk), sans-serif', fontWeight: 600, fontSize: 17, marginTop: 10 }}>
                  {phone.name}
                </div>
                <div style={{ fontSize: 11.5, color: 'var(--ink-soft)' }}>{phone.role}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 14 }}>
                  {phone.links.map(link => (
                    <div
                      key={link.label}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        background: link.filled ? phone.color : undefined,
                        color: link.filled ? '#fff' : undefined,
                        border: link.filled ? undefined : '1px solid #e8eaf0',
                        borderRadius: 10,
                        padding: '10px 12px',
                        fontSize: 12,
                        fontWeight: 600,
                      }}
                    >
                      <span>{link.label}</span>
                      {link.filled && <span>→</span>}
                      {link.bullet && <span style={{ color: link.bullet }}>•</span>}
                      {link.plain && <span style={{ color: 'var(--ink-soft)' }}>→</span>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
