'use client'

import { useState } from 'react'

type Device = 'desktop' | 'tablet' | 'mobile'

const DEVICE_WIDTH: Record<Device, string> = {
  desktop: '1000px',
  tablet: '768px',
  mobile: '390px',
}

const DeviceIcon = ({ device }: { device: Device }) => {
  if (device === 'desktop') {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="3" y="4" width="18" height="12" rx="1.5" />
        <line x1="8" y1="20" x2="16" y2="20" />
        <line x1="12" y1="16" x2="12" y2="20" />
      </svg>
    )
  }
  if (device === 'tablet') {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="5" y="3" width="14" height="18" rx="1.8" />
        <line x1="11" y1="18" x2="13" y2="18" />
      </svg>
    )
  }
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <line x1="11" y1="18" x2="13" y2="18" />
    </svg>
  )
}

const DEVICES: Device[] = ['desktop', 'tablet', 'mobile']

const bullets = [
  'Works on WordPress, Squarespace, Webflow, or custom sites.',
  'Matches your fonts and colors automatically.',
  'Every embed feeds the same lead dashboard.',
]

export function EmbedAnywhere() {
  const [device, setDevice] = useState<Device>('desktop')

  return (
    <section id="embed" style={{ padding: '88px clamp(20px, 5vw, 32px)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ maxWidth: 660 }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
            }}
          >
            <span style={{ background: 'rgba(41,82,204,0.14)', borderRadius: 999, padding: '3px 9px' }}>New</span>
            Embed anywhere
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-roboto), sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(30px,3.6vw,46px)',
              lineHeight: 1.04,
              letterSpacing: '-0.025em',
              margin: '14px 0 0',
            }}
          >
            Put your calculators on any website.
          </h2>
          <p style={{ fontSize: 17, color: 'var(--ink-soft)', margin: '16px 0 0' }}>
            Design a calculator once, then drop it into your own website, blog, or listing pages
            with a single line of code. It keeps your branding — and keeps capturing leads —
            wherever it lives.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(min(300px, 100%),1fr))',
            gap: '18px 40px',
            marginTop: 26,
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
            {bullets.map(b => (
              <div key={b} style={{ display: 'flex', gap: 11, alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--accent)', fontWeight: 700 }} aria-hidden="true">
                  ✓
                </span>
                <span style={{ fontSize: 15.5, color: 'var(--ink-soft)' }}>{b}</span>
              </div>
            ))}
          </div>
          <div>
            <div
              style={{
                background: 'var(--ink)',
                borderRadius: 12,
                padding: '16px 18px',
                fontFamily: 'var(--font-space-grotesk), monospace',
                fontSize: 13,
                color: 'rgba(255,255,255,0.9)',
                overflowX: 'auto',
              }}
            >
              <span style={{ color: 'rgba(255,255,255,0.4)' }}>&lt;iframe</span>{' '}
              <span style={{ color: '#7fd4b4' }}>src</span>=
              <span style={{ color: '#e6c07b' }}>&quot;app.socialcalcs.com/embed/…&quot;</span>
              <span style={{ color: 'rgba(255,255,255,0.4)' }}>&gt;&lt;/iframe&gt;</span>
            </div>
            <p style={{ fontSize: 13.5, color: 'var(--ink-soft)', margin: '14px 0 0' }}>
              One line of code. No plugins, no developer.
            </p>
          </div>
        </div>

        {/* Device simulator */}
        <div
          style={{
            marginTop: 40,
            background: 'var(--sand)',
            border: '1px solid var(--line)',
            borderRadius: 20,
            padding: '24px 20px 30px',
          }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 14 }}>
            <div style={{ fontFamily: 'var(--font-space-grotesk), sans-serif', fontWeight: 600, fontSize: 14, color: 'var(--ink-soft)' }}>
              Live preview · see how it looks on any screen
            </div>
            <div
              style={{
                display: 'inline-flex',
                background: 'var(--card)',
                border: '1px solid var(--line)',
                borderRadius: 999,
                padding: 4,
                gap: 2,
              }}
            >
              {DEVICES.map(d => (
                <button
                  key={d}
                  onClick={() => setDevice(d)}
                  aria-pressed={device === d}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 7,
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    fontWeight: 600,
                    fontSize: 13,
                    padding: '8px 16px',
                    borderRadius: 999,
                    textTransform: 'capitalize',
                    background: device === d ? 'var(--ink)' : 'transparent',
                    color: device === d ? '#fff' : 'var(--ink-soft)',
                    transition: 'background 0.18s ease, color 0.18s ease',
                  }}
                >
                  <DeviceIcon device={d} />
                  {d}
                </button>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 22, display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                width: '100%',
                maxWidth: DEVICE_WIDTH[device],
                transition: 'max-width 0.3s ease',
                background: 'var(--card)',
                border: '1px solid var(--line)',
                borderRadius: 16,
                boxShadow: '0 30px 60px -30px rgba(13,21,18,0.3)',
                overflow: 'hidden',
              }}
            >
              {/* Browser chrome */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '11px 14px',
                  borderBottom: '1px solid var(--line)',
                  background: 'var(--bg)',
                }}
              >
                <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#d9dbe0', flexShrink: 0 }} />
                <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#d9dbe0', flexShrink: 0 }} />
                <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#d9dbe0', flexShrink: 0 }} />
                <span
                  style={{
                    marginLeft: 8,
                    flex: 1,
                    fontFamily: 'var(--font-space-grotesk), monospace',
                    fontSize: 11.5,
                    color: 'var(--ink-soft)',
                    background: 'var(--card)',
                    border: '1px solid var(--line)',
                    borderRadius: 6,
                    padding: '5px 11px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  yourbrokerage.com/tools
                </span>
              </div>

              {/* Embedded calculator */}
              <EmbeddedCalculator />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function EmbeddedCalculator() {
  return (
    <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
      <div style={{ maxWidth: 520, margin: '0 auto' }}>
        <div
          style={{
            fontFamily: 'var(--font-space-grotesk), sans-serif',
            fontWeight: 600,
            fontSize: 13,
            textTransform: 'uppercase',
            letterSpacing: '0.03em',
            color: 'var(--ink-soft)',
          }}
        >
          Mortgage Payment
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(140px, 100%),1fr))', gap: 12, marginTop: 14 }}>
          {[
            { label: 'Home price', value: '$650,000' },
            { label: 'Down payment', value: '$130,000' },
            { label: 'Rate', value: '4.99%' },
            { label: 'Term', value: '25 yrs' },
          ].map(({ label, value }) => (
            <div key={label} style={{ border: '1px solid var(--line)', borderRadius: 10, padding: '10px 12px' }}>
              <div style={{ fontSize: 11.5, color: 'var(--ink-soft)' }}>{label}</div>
              <div style={{ fontFamily: 'var(--font-space-grotesk), sans-serif', fontWeight: 600, fontSize: 17 }}>{value}</div>
            </div>
          ))}
        </div>
        <div
          style={{
            marginTop: 16,
            padding: 16,
            borderRadius: 10,
            background: 'var(--card)',
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            gap: 12,
          }}
        >
          <span style={{ fontSize: 13, color: 'var(--ink-soft)' }}>Monthly payment</span>
          <span style={{ fontFamily: 'var(--font-space-grotesk), sans-serif', fontWeight: 700, fontSize: 30, color: 'var(--accent)' }}>
            $2,847
          </span>
        </div>
        <div
          style={{
            marginTop: 14,
            textAlign: 'center',
            background: 'var(--accent)',
            color: '#fff',
            fontWeight: 600,
            fontSize: 14.5,
            padding: 13,
            borderRadius: 10,
          }}
        >
          Calculate &amp; get my PDF report →
        </div>
        <div style={{ marginTop: 12, textAlign: 'center', fontSize: 11, color: 'var(--ink-soft)' }}>
          Powered by SocialCalcs
        </div>
      </div>
    </div>
  )
}
