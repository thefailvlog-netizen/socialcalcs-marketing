'use client'

import type { CSSProperties } from 'react'

const APP_URL = 'https://app.socialcalcs.com'

interface PricingCardsProps {
  annual: boolean
}

const cardBase: CSSProperties = {
  background: 'var(--card)',
  border: '1px solid var(--line)',
  borderRadius: 18,
  padding: 28,
}

const priceStyle: CSSProperties = {
  fontFamily: 'var(--font-space-grotesk), sans-serif',
  fontWeight: 700,
  fontSize: 44,
  letterSpacing: '-0.03em',
}

const tierName: CSSProperties = {
  fontFamily: 'var(--font-space-grotesk), sans-serif',
  fontWeight: 600,
  fontSize: 18,
}

const outlinedButton: CSSProperties = {
  display: 'block',
  textAlign: 'center',
  margin: '16px 0 20px',
  background: 'var(--bg)',
  color: 'var(--ink)',
  fontWeight: 600,
  fontSize: 15,
  padding: 13,
  borderRadius: 'var(--r)',
  border: '1px solid var(--line)',
  textDecoration: 'none',
}

function Features({ items, onDark }: { items: string[]; onDark?: boolean }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 11,
        fontSize: 14,
        color: onDark ? 'rgba(255,255,255,0.82)' : 'var(--ink-soft)',
      }}
    >
      {items.map(f => (
        <div key={f} style={{ display: 'flex', gap: 10 }}>
          <span style={{ color: 'var(--accent)', fontWeight: 700, flexShrink: 0 }} aria-hidden="true">
            ✓
          </span>
          {f}
        </div>
      ))}
    </div>
  )
}

export function PricingCards({ annual }: PricingCardsProps) {
  return (
    <div
      style={{
        maxWidth: 1220,
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))',
        gap: 18,
        alignItems: 'start',
      }}
    >
      {/* Starter */}
      <div style={cardBase}>
        <div style={tierName}>Starter</div>
        <p style={{ fontSize: 13.5, color: 'var(--ink-soft)', margin: '6px 0 0', minHeight: 38 }}>
          Get your page live and start capturing.
        </p>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, margin: '18px 0 4px' }}>
          <span style={priceStyle}>$0</span>
          <span style={{ fontSize: 14, color: 'var(--ink-soft)' }}>/forever</span>
        </div>
        <div style={{ fontSize: 12.5, color: 'var(--ink-soft)', minHeight: 16 }}>Free forever</div>
        <a href={`${APP_URL}/signup`} style={outlinedButton}>
          Start free
        </a>
        <Features
          items={[
            '1 mini bio site',
            'Up to 3 customizable calculators',
            'Unlimited leads',
            'PDF reports (SocialCalcs badge)',
            'Email alerts for new leads',
          ]}
        />
      </div>

      {/* Pro */}
      <div
        style={{
          position: 'relative',
          background: 'var(--ink)',
          color: '#fff',
          borderRadius: 18,
          padding: 28,
          boxShadow: '0 30px 60px -28px rgba(13,21,18,0.4)',
        }}
      >
        <span
          style={{
            position: 'absolute',
            top: 22,
            right: 22,
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
        <div style={tierName}>Pro</div>
        <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.6)', margin: '6px 0 0', minHeight: 38 }}>
          For the pro who&apos;s serious about pipeline.
        </p>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, margin: '18px 0 4px' }}>
          <span style={priceStyle}>${annual ? '16' : '20'}</span>
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
            margin: '16px 0 20px',
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
        <Features
          onDark
          items={[
            'Everything in Starter',
            'Up to 3 bio sites',
            'Up to 10 different calculators',
            'Embed your calculators anywhere',
            'Your branding on PDFs (no badge)',
            'AI-enabled builder — build & edit with your favourite AI tool',
          ]}
        />
      </div>

      {/* Pro Teams */}
      <div style={cardBase}>
        <div style={tierName}>Pro Teams</div>
        <p style={{ fontSize: 13.5, color: 'var(--ink-soft)', margin: '6px 0 0', minHeight: 38 }}>
          For brokerages running as a team.
        </p>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, margin: '18px 0 4px' }}>
          <span style={priceStyle}>${annual ? '13' : '16'}</span>
          <span style={{ fontSize: 14, color: 'var(--ink-soft)' }}>/seat/mo</span>
        </div>
        <div style={{ fontSize: 12.5, color: 'var(--accent)', fontWeight: 600, minHeight: 16 }}>
          20% off Pro, per seat
        </div>
        <a href={`${APP_URL}/signup`} style={outlinedButton}>
          Start a team
        </a>
        <Features items={['Everything in Pro', 'Every seat gets the volume discount', 'Minimum 5 seats']} />
      </div>

      {/* Enterprise */}
      <div style={cardBase}>
        <div style={tierName}>Enterprise</div>
        <p style={{ fontSize: 13.5, color: 'var(--ink-soft)', margin: '6px 0 0', minHeight: 38 }}>
          For large teams with custom needs.
        </p>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, margin: '18px 0 4px' }}>
          <span style={{ ...priceStyle, fontSize: 38, letterSpacing: '-0.02em' }}>Contact us</span>
        </div>
        <div style={{ fontSize: 12.5, color: 'var(--ink-soft)', minHeight: 16 }}>Custom pricing for your org</div>
        <a href="mailto:support@socialcalcs.com" style={outlinedButton}>
          Contact us
        </a>
        <Features
          items={[
            'Everything in Pro Teams',
            'Custom calculators & features like CRM connectivity',
            'Priority support & API access',
          ]}
        />
      </div>
    </div>
  )
}
