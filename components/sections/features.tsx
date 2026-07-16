import { Avatar, type PersonId } from '@/components/avatars'

const phones: {
  background: string
  primaryText: string
  person: PersonId
  name: string
  role: string
  links: { label: string; primary?: boolean; glyph?: string }[]
}[] = [
  {
    background: '#2952CC',
    primaryText: '#2952CC',
    person: 'denise',
    name: 'Denise Carter',
    role: 'Mortgage Broker · #M88214',
    links: [
      { label: 'Mortgage Payment Calc', primary: true },
      { label: 'Mortgage Penalty Calc', glyph: '•' },
      { label: 'Book a consultation', glyph: '→' },
    ],
  },
  {
    background: 'linear-gradient(160deg,#5B6CF5,#8A5CF0)',
    primaryText: '#6E4FE0',
    person: 'marcus',
    name: 'Marcus Lee',
    role: 'Real Estate Agent · #RE8842',
    links: [
      { label: 'Affordability Calculator', primary: true },
      { label: 'Browse my listings', glyph: '→' },
      { label: 'Book a showing', glyph: '→' },
    ],
  },
  {
    background: '#0E7C86',
    primaryText: '#0E7C86',
    person: 'arjun',
    name: 'Arjun Shah',
    role: 'Financial Advisor · #FA3310',
    links: [
      { label: 'Compound Interest Calc', primary: true },
      { label: 'Investment Scenario Calc', glyph: '•' },
      { label: 'Book an intro call', glyph: '→' },
    ],
  },
]

const chipStyle = {
  fontSize: 9.5,
  fontWeight: 600,
  color: '#fff',
  border: '1px solid rgba(255,255,255,0.45)',
  borderRadius: 999,
  padding: '3px 10px',
} as const

export function BioExamples() {
  return (
    <section
      id="bio"
      style={{
        padding: '80px clamp(20px, 5vw, 32px)',
        background: 'var(--sand)',
        borderTop: '1px solid var(--line)',
        borderBottom: '1px solid var(--line)',
      }}
    >
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
              fontFamily: 'var(--font-roboto), sans-serif',
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
            gridTemplateColumns: 'repeat(auto-fit,minmax(min(240px, 100%),1fr))',
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
                background: phone.background,
                borderRadius: 28,
                boxShadow: '0 24px 48px -28px rgba(13,21,18,0.3)',
                overflow: 'hidden',
                padding: '26px 18px 20px',
                textAlign: 'center',
                color: '#fff',
              }}
            >
              <div
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: '50%',
                  border: '4px solid rgba(255,255,255,0.85)',
                  overflow: 'hidden',
                  background: 'rgba(255,255,255,0.2)',
                  margin: '0 auto',
                }}
              >
                <Avatar person={phone.person} size={60} />
              </div>
              <div style={{ fontFamily: 'var(--font-space-grotesk), sans-serif', fontWeight: 600, fontSize: 17, marginTop: 10 }}>
                {phone.name}
              </div>
              <div style={{ fontSize: 11.5, color: 'rgba(255,255,255,0.78)' }}>{phone.role}</div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginTop: 10 }}>
                <span style={chipStyle}>Email</span>
                <span style={chipStyle}>Call</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 14 }}>
                {phone.links.map(link => (
                  <div
                    key={link.label}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      background: link.primary ? '#fff' : 'rgba(255,255,255,0.16)',
                      color: link.primary ? phone.primaryText : '#fff',
                      borderRadius: 10,
                      padding: '10px 12px',
                      fontSize: 12,
                      fontWeight: 600,
                    }}
                  >
                    <span>{link.label}</span>
                    <span
                      style={link.primary ? undefined : { color: 'rgba(255,255,255,0.7)' }}
                      aria-hidden="true"
                    >
                      {link.primary ? '→' : link.glyph}
                    </span>
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
