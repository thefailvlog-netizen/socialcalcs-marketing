import Link from 'next/link'
import { DEMO_URL } from '@/lib/links'

export function Footer() {
  return (
    <footer style={{ background: 'var(--dark)', color: '#fff', padding: '56px clamp(20px, 5vw, 32px) 36px' }}>
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(220px, 100%), 1fr))',
          gap: 40,
        }}
      >
        {/* Brand */}
        <div style={{ maxWidth: 300 }}>
          <span
            style={{
              fontFamily: 'var(--font-roboto), sans-serif',
              fontWeight: 900,
              fontStyle: 'italic',
              letterSpacing: '-0.02em',
              fontSize: 22,
            }}
          >
            Social<span style={{ color: 'var(--accent)' }}>Calcs</span>
          </span>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', margin: '14px 0 0' }}>
            The bio link for mortgage brokers, real estate agents, and financial pros.
          </p>
        </div>

        {/* Product */}
        <div>
          <div style={{ fontSize: 12.5, fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>
            Product
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 14 }}>
            {[
              { label: 'Bio site', href: '/#bio' },
              { label: 'Tools', href: '/#tools' },
              { label: 'Embed', href: '/#embed' },
              { label: 'Pricing', href: '/pricing' },
            ].map(({ label, href }) => (
              <Link key={label} href={href} style={{ fontSize: 14.5, color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>
                {label}
              </Link>
            ))}
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 7,
                fontSize: 14.5,
                color: '#fff',
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: 'var(--accent)',
                  flexShrink: 0,
                }}
              />
              Live demo
            </a>
          </div>
        </div>

        {/* Support */}
        <div>
          <div style={{ fontSize: 12.5, fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>
            Support
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 14 }}>
            {[
              { label: 'Contact us', href: 'mailto:support@socialcalcs.com' },
              { label: 'Privacy policy', href: '/privacy' },
              { label: 'Terms of service', href: '/terms' },
            ].map(({ label, href }) => (
              <a key={label} href={href} style={{ fontSize: 14.5, color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          maxWidth: 1200,
          margin: '40px auto 0',
          paddingTop: 24,
          borderTop: '1px solid rgba(255,255,255,0.12)',
          fontSize: 13,
          color: 'rgba(255,255,255,0.45)',
        }}
      >
        © 2026 SocialCalcs. All rights reserved.
      </div>
    </footer>
  )
}
