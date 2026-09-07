import { Arrow } from '@/components/icons'
import { APP_URL } from '@/lib/links'

export function CtaBanner() {
  return (
    <section style={{ padding: '0 clamp(20px, 5vw, 96px) 104px' }}>
      <div
        style={{
          maxWidth: 1248,
          margin: '0 auto',
          background: 'var(--grad)',
          color: '#fff',
          borderRadius: 36,
          padding: 'clamp(48px, 6vw, 88px) clamp(24px, 4vw, 64px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: 22,
        }}
      >
        <h2 style={{ margin: 0, maxWidth: 820, fontWeight: 800, fontSize: 'clamp(36px, 4.5vw, 64px)', lineHeight: 0.96, letterSpacing: '-0.035em' }}>
          Your bio link could be your best salesperson.
        </h2>
        <p style={{ margin: 0, maxWidth: 520, fontSize: 18, lineHeight: 1.5, color: 'rgba(255,255,255,0.88)' }}>
          Describe your practice, let AI build your page, and start turning followers into clients today.
        </p>
        <a
          href={`${APP_URL}/signup`}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 10, height: 58, padding: '0 30px', marginTop: 6, background: '#fff', color: 'var(--accent)', borderRadius: 'var(--pill)', fontSize: 17, fontWeight: 800, textDecoration: 'none' }}
        >
          Try it now — free <Arrow />
        </a>
        <div style={{ fontSize: 14, fontWeight: 600, color: 'rgba(255,255,255,0.75)' }}>No credit card required.</div>
      </div>
    </section>
  )
}
