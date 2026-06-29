// Bio site examples section (replaces old "features" grid)
const phones = [
  {
    color: '#10A37F',
    name: 'Sarah Jones',
    role: 'Mortgage Broker · #M12345',
    links: [
      { label: 'Mortgage Payment Calc', filled: true },
      { label: 'Mortgage Penalty Calc', bullet: '#10A37F' },
      { label: 'Book a consultation', plain: true },
    ],
  },
  {
    color: '#5B6CFF',
    name: 'Marcus Lee',
    role: 'Real Estate Agent · #RE8842',
    links: [
      { label: 'Affordability Calculator', filled: true },
      { label: 'Browse my listings', plain: true },
      { label: 'Book a showing', plain: true },
    ],
  },
  {
    color: '#E08A2B',
    name: 'Priya Shah',
    role: 'Financial Advisor · #FA3310',
    links: [
      { label: 'Compound Interest Calc', filled: true },
      { label: 'Investment Scenario Calc', bullet: '#E08A2B' },
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
                boxShadow: '0 24px 48px -28px rgba(20,22,28,0.28)',
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
                    background: 'repeating-linear-gradient(45deg,#ececea,#ececea 5px,#f5f5f2 5px,#f5f5f2 10px)',
                  }}
                />
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
                        border: link.filled ? undefined : '1px solid #e6e6e0',
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
