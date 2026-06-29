'use client'

const APP_URL = 'https://app.socialcalcs.com'

interface PricingCardsProps {
  annual: boolean
}

export function PricingCards({ annual }: PricingCardsProps) {
  return (
    <div
      style={{
        maxWidth: 1100,
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
        gap: 20,
        alignItems: 'start',
      }}
    >
      {/* Starter */}
      <div
        style={{
          background: 'var(--card)',
          border: '1px solid var(--line)',
          borderRadius: 18,
          padding: 30,
        }}
      >
        <div style={{ fontFamily: 'var(--font-space-grotesk), sans-serif', fontWeight: 600, fontSize: 18 }}>Starter</div>
        <p style={{ fontSize: 13.5, color: 'var(--ink-soft)', margin: '6px 0 0', minHeight: 38 }}>
          Get your page live and start capturing.
        </p>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, margin: '18px 0 4px' }}>
          <span style={{ fontFamily: 'var(--font-space-grotesk), sans-serif', fontWeight: 700, fontSize: 46, letterSpacing: '-0.03em' }}>$0</span>
          <span style={{ fontSize: 14, color: 'var(--ink-soft)' }}>/forever</span>
        </div>
        <a
          href={`${APP_URL}/signup`}
          style={{
            display: 'block',
            textAlign: 'center',
            margin: '20px 0',
            background: 'var(--bg)',
            color: 'var(--ink)',
            fontWeight: 600,
            fontSize: 15,
            padding: 13,
            borderRadius: 'var(--r)',
            border: '1px solid var(--line)',
            textDecoration: 'none',
          }}
        >
          Start free
        </a>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 11, fontSize: 14, color: 'var(--ink-soft)' }}>
          {[
            'Your mini bio site',
            '2 built-in calculators',
            'Unlimited leads',
            'PDF reports (SocialCalcs badge)',
          ].map(f => (
            <div key={f} style={{ display: 'flex', gap: 10 }}>
              <span style={{ color: 'var(--accent)', fontWeight: 700 }}>✓</span>
              {f}
            </div>
          ))}
        </div>
      </div>

      {/* Pro */}
      <div
        style={{
          position: 'relative',
          background: 'var(--ink)',
          color: '#fff',
          borderRadius: 18,
          padding: 30,
          boxShadow: '0 30px 60px -28px rgba(20,22,28,0.4)',
        }}
      >
        <span
          style={{
            position: 'absolute',
            top: 24,
            right: 24,
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            background: 'var(--accent)',
            color: '#fff',
            borderRadius: 999,
            padding: '5px 12px',
          }}
        >
          Most popular
        </span>
        <div style={{ fontFamily: 'var(--font-space-grotesk), sans-serif', fontWeight: 600, fontSize: 18 }}>Pro</div>
        <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.6)', margin: '6px 0 0', minHeight: 38 }}>
          For the pro who&apos;s serious about pipeline.
        </p>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, margin: '18px 0 4px' }}>
          <span style={{ fontFamily: 'var(--font-space-grotesk), sans-serif', fontWeight: 700, fontSize: 46, letterSpacing: '-0.03em' }}>
            ${annual ? '16' : '20'}
          </span>
          <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)' }}>/mo</span>
        </div>
        <div style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.5)', minHeight: 16 }}>
          {annual ? 'billed $192/year' : 'billed monthly'}
        </div>
        <a
          href={`${APP_URL}/signup`}
          style={{
            display: 'block',
            textAlign: 'center',
            margin: '18px 0 20px',
            background: 'var(--accent)',
            color: '#fff',
            fontWeight: 600,
            fontSize: 15,
            padding: 13,
            borderRadius: 'var(--r)',
            textDecoration: 'none',
          }}
        >
          Start free trial
        </a>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 11, fontSize: 14, color: 'rgba(255,255,255,0.82)' }}>
          {[
            'Everything in Starter',
            'All calculators + unlimited leads',
            'Custom domain & custom CTAs',
            'Your branding on PDFs (no badge)',
            'CRM export & email alerts',
          ].map(f => (
            <div key={f} style={{ display: 'flex', gap: 10 }}>
              <span style={{ color: 'var(--accent)', fontWeight: 700 }}>✓</span>
              {f}
            </div>
          ))}
        </div>
      </div>

      {/* Enterprise */}
      <div
        style={{
          background: 'var(--card)',
          border: '1px solid var(--line)',
          borderRadius: 18,
          padding: 30,
        }}
      >
        <div style={{ fontFamily: 'var(--font-space-grotesk), sans-serif', fontWeight: 600, fontSize: 18 }}>Enterprise</div>
        <p style={{ fontSize: 13.5, color: 'var(--ink-soft)', margin: '6px 0 0', minHeight: 38 }}>
          For teams and brokerages at volume.
        </p>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, margin: '18px 0 4px' }}>
          <span style={{ fontFamily: 'var(--font-space-grotesk), sans-serif', fontWeight: 700, fontSize: 38, letterSpacing: '-0.02em' }}>
            Contact us
          </span>
        </div>
        <div style={{ fontSize: 12.5, color: 'var(--ink-soft)', minHeight: 16 }}>Custom pricing for your team</div>
        <a
          href="mailto:support@socialcalcs.com"
          style={{
            display: 'block',
            textAlign: 'center',
            margin: '18px 0 20px',
            background: 'var(--bg)',
            color: 'var(--ink)',
            fontWeight: 600,
            fontSize: 15,
            padding: 13,
            borderRadius: 'var(--r)',
            border: '1px solid var(--line)',
            textDecoration: 'none',
          }}
        >
          Contact us
        </a>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 11, fontSize: 14, color: 'var(--ink-soft)' }}>
          {[
            'Everything in Pro',
            'Up to 5 team seats',
            'Multiple bio sites',
            'Priority support & API access',
          ].map(f => (
            <div key={f} style={{ display: 'flex', gap: 10 }}>
              <span style={{ color: 'var(--accent)', fontWeight: 700 }}>✓</span>
              {f}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
