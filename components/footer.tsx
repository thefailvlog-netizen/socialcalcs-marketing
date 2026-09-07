import Link from 'next/link'
import { DEMO_URL } from '@/lib/links'
import { LEGAL_ENTITY, BRAND } from '@/lib/company'

const linkStyle = { fontSize: 14.5, color: 'rgba(255,255,255,0.8)', textDecoration: 'none' } as const
const headStyle = { fontSize: 12.5, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)' } as const

export function Footer() {
  return (
    <footer style={{ background: 'var(--grad-dark)', color: '#fff', padding: '64px clamp(20px, 5vw, 96px) 40px' }}>
      <div style={{ maxWidth: 1248, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 40 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(220px, 100%), 1fr))', gap: 40 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 320 }}>
            <div style={{ fontWeight: 800, fontSize: 23, letterSpacing: '-0.02em' }}>
              Social<span style={{ color: 'var(--soft)' }}>Calcs</span>
            </div>
            <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.5, color: 'rgba(255,255,255,0.6)' }}>
              The bio link for mortgage brokers, real estate agents, and financial pros.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={headStyle}>Product</div>
            {[
              { label: 'Bio site', href: '/#bio' },
              { label: 'Tools', href: '/#tools' },
              { label: 'Embed', href: '/#embed' },
              { label: 'Pricing', href: '/pricing' },
            ].map(({ label, href }) => (
              <Link key={label} href={href} style={linkStyle}>
                {label}
              </Link>
            ))}
            <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" style={{ ...linkStyle, fontWeight: 700, color: 'var(--soft)' }}>
              Live demo
            </a>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={headStyle}>Support</div>
            {[
              { label: 'Contact us', href: 'mailto:support@socialcalcs.com' },
              { label: 'Privacy policy', href: '/privacy' },
              { label: 'Terms of service', href: '/terms' },
            ].map(({ label, href }) => (
              <a key={label} href={href} style={linkStyle}>
                {label}
              </a>
            ))}
          </div>
        </div>

        <div style={{ paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.12)', fontSize: 13, lineHeight: 1.5, color: 'rgba(255,255,255,0.45)' }}>
          {/* LEGAL_ENTITY already ends in a period. */}
          © 2026 {LEGAL_ENTITY} All rights reserved. {BRAND} is a product of {LEGAL_ENTITY}
        </div>
      </div>
    </footer>
  )
}
