import { Avatar, type PersonId } from '@/components/avatars'
import { Eyebrow, h2Style } from '@/components/icons'
import { DEMO_URL } from '@/lib/links'

type Card = {
  person: PersonId
  name: string
  role: string
  background: string
  border?: string
  color: string
  subtle: string
  primaryBg: string
  primaryColor: string
  rowBg: string
  rowColor: string
  ring: string
  links: [string, string, string]
}

const cards: Card[] = [
  {
    person: 'denise',
    name: 'Denise Carter',
    role: 'Mortgage Broker · #M88214',
    background: 'var(--grad)',
    color: '#fff',
    subtle: 'rgba(255,255,255,0.85)',
    primaryBg: '#fff',
    primaryColor: 'var(--accent)',
    rowBg: 'rgba(255,255,255,0.16)',
    rowColor: '#fff',
    ring: 'rgba(255,255,255,0.35)',
    links: ['Mortgage Payment Calc', 'Mortgage Penalty Calc', 'Book a consultation'],
  },
  {
    person: 'marcus',
    name: 'Marcus Lee',
    role: 'Real Estate Agent · #RE8842',
    background: 'var(--ink)',
    color: '#fff',
    subtle: 'rgba(255,255,255,0.7)',
    primaryBg: 'var(--accent)',
    primaryColor: '#fff',
    rowBg: 'rgba(255,255,255,0.1)',
    rowColor: '#fff',
    ring: 'rgba(255,255,255,0.2)',
    links: ['Affordability Calculator', 'Browse my listings', 'Book a showing'],
  },
  {
    person: 'arjun',
    name: 'Arjun Shah',
    role: 'Financial Advisor · #FA3310',
    background: '#fff',
    border: '1px solid var(--line)',
    color: 'var(--ink)',
    subtle: 'var(--ink-soft)',
    primaryBg: 'var(--ink)',
    primaryColor: '#fff',
    rowBg: 'var(--tint)',
    rowColor: 'var(--ink)',
    ring: 'var(--tint)',
    links: ['Compound Interest Calc', 'Investment Scenario Calc', 'Book an intro call'],
  },
]

export function BioExamples() {
  return (
    <section id="bio" style={{ background: 'var(--pale)', padding: '104px clamp(20px, 5vw, 96px)' }}>
      <div style={{ maxWidth: 1248, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 52 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 720 }}>
          <Eyebrow>Your mini bio site</Eyebrow>
          <h2 style={h2Style}>More than a link in bio. Your whole practice on one page.</h2>
          <p style={{ margin: 0, fontSize: 17.5, lineHeight: 1.55, color: 'var(--ink-soft)' }}>
            Your headshot, name, licence, contact details, and every important link — fully customizable to match your brand.
          </p>
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignSelf: 'flex-start',
              alignItems: 'center',
              gap: 10,
              marginTop: 6,
              minHeight: 48,
              padding: '0 22px',
              background: '#fff',
              border: '1px solid rgba(31,80,210,0.35)',
              borderRadius: 'var(--pill)',
              fontSize: 15,
              fontWeight: 700,
              color: 'var(--ink)',
              textDecoration: 'none',
              animation: 'pulse-glow 2.8s ease-in-out infinite',
            }}
          >
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent)', animation: 'dot-pulse 2.8s ease-in-out infinite' }} />
            See a real one — Mike&apos;s live page →
          </a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))', gap: 24 }}>
          {cards.map(c => (
            <div
              key={c.name}
              style={{ background: c.background, border: c.border, color: c.color, borderRadius: 32, padding: '32px 26px 26px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, textAlign: 'center' }}
            >
              <div style={{ width: 96, height: 96, borderRadius: '50%', overflow: 'hidden', border: `5px solid ${c.ring}` }}>
                <Avatar person={c.person} size={96} />
              </div>
              <div style={{ fontWeight: 800, fontSize: 22, marginTop: 4 }}>{c.name}</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: c.subtle }}>{c.role}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: '100%', marginTop: 10 }}>
                {c.links.map((label, i) => (
                  <div
                    key={label}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: 46,
                      background: i === 0 ? c.primaryBg : c.rowBg,
                      color: i === 0 ? c.primaryColor : c.rowColor,
                      borderRadius: 'var(--pill)',
                      fontSize: 14,
                      fontWeight: i === 0 ? 800 : 700,
                    }}
                  >
                    {label}
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
