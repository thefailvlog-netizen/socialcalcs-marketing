import Link from 'next/link'

export function Footer() {
  return (
    <footer style={{ background: 'var(--dark)', color: '#fff', padding: '56px 32px 36px' }}>
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 40,
        }}
      >
        {/* Col 1: Logo + tagline */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
            <div
              style={{
                width: 30,
                height: 30,
                borderRadius: 8,
                background: 'rgba(255,255,255,0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 15,
                fontFamily: 'var(--font-roboto), serif',
                fontWeight: 900,
                fontStyle: 'italic',
              }}
            >
              <span style={{ color: '#fff' }}>S</span>
              <span style={{ color: 'var(--accent)' }}>C</span>
            </div>
            <span
              style={{
                fontFamily: 'var(--font-roboto), serif',
                fontWeight: 700,
                fontSize: 15,
                color: '#fff',
              }}
            >
              Social<span style={{ color: 'var(--accent)' }}>Calcs</span>
            </span>
          </div>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, maxWidth: 260 }}>
            The bio link for mortgage brokers, real estate agents, and financial pros.
          </p>
        </div>

        {/* Col 2: Product */}
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 14 }}>
            Product
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Bio site', href: '/#bio' },
              { label: 'Tools', href: '/#tools' },
              { label: 'Pricing', href: '/pricing' },
            ].map(({ label, href }) => (
              <Link key={label} href={href} style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', textDecoration: 'none' }}>
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Col 3: Support */}
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 14 }}>
            Support
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Contact us', href: 'mailto:support@socialcalcs.com' },
              { label: 'Privacy policy', href: '/privacy' },
              { label: 'Terms of service', href: '/terms' },
            ].map(({ label, href }) => (
              <a key={label} href={href} style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', textDecoration: 'none' }}>
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          maxWidth: 1200,
          margin: '36px auto 0',
          paddingTop: 24,
          borderTop: '1px solid rgba(255,255,255,0.1)',
          fontSize: 13,
          color: 'rgba(255,255,255,0.35)',
        }}
      >
        © 2026 SocialCalcs. All rights reserved.
      </div>
    </footer>
  )
}
