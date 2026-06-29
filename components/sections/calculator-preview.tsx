// Tools section (dark band)
const calcTiles = [
  { name: 'Mortgage Payment', desc: 'Monthly payments, instantly.' },
  { name: 'Affordability', desc: 'How much they can borrow.' },
  { name: 'Compound Interest', desc: 'Watch savings grow over time.' },
  { name: 'Mortgage Penalty', desc: 'Estimate break fees fast.' },
  { name: 'Scenario Comparison', desc: 'Compare two mortgages side by side.' },
  { name: 'Investment Projection', desc: 'Future value of contributions.' },
]

export function ToolsSection() {
  return (
    <section id="tools" style={{ padding: '88px 32px', background: 'var(--dark)', color: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(340px,1fr))',
            gap: 56,
            alignItems: 'center',
          }}
        >
          {/* Left */}
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--accent)' }}>
              Built-in tools
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
              The link that does the math.
            </h2>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.66)', margin: '18px 0 0', maxWidth: 460 }}>
              Drop a live calculator straight onto your page. Visitors get a real answer in
              seconds — no signup, no download — and you capture the lead behind every result.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 26 }}>
              {[
                'Fully customizable inputs, branding, and results.',
                'Embed one tool or a whole suite on a single page.',
                'Mobile-first — exactly where your followers are.',
              ].map(bullet => (
                <div key={bullet} style={{ display: 'flex', gap: 11, alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--accent)', fontWeight: 700 }}>✓</span>
                  <span style={{ fontSize: 15.5, color: 'rgba(255,255,255,0.82)' }}>{bullet}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — calculator card */}
          <div
            style={{
              background: '#fff',
              borderRadius: 16,
              padding: 22,
              color: 'var(--ink)',
              boxShadow: '0 30px 60px -24px rgba(0,0,0,0.5)',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-space-grotesk), sans-serif',
                fontWeight: 600,
                fontSize: 14,
                textTransform: 'uppercase',
                letterSpacing: '0.03em',
                color: 'var(--ink-soft)',
              }}
            >
              Mortgage Payment
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 14 }}>
              {[
                { label: 'Home price', value: '$650,000' },
                { label: 'Down payment', value: '$130,000' },
                { label: 'Rate', value: '4.99%' },
                { label: 'Term', value: '25 yrs' },
              ].map(({ label, value }) => (
                <div key={label}>
                  <div style={{ fontSize: 11.5, color: 'var(--ink-soft)' }}>{label}</div>
                  <div style={{ fontFamily: 'var(--font-space-grotesk), sans-serif', fontWeight: 600, fontSize: 17 }}>{value}</div>
                </div>
              ))}
            </div>
            <div
              style={{
                marginTop: 16,
                padding: 14,
                borderRadius: 10,
                background: 'var(--bg)',
                display: 'flex',
                alignItems: 'baseline',
                justifyContent: 'space-between',
              }}
            >
              <span style={{ fontSize: 13, color: 'var(--ink-soft)' }}>Monthly payment</span>
              <span style={{ fontFamily: 'var(--font-space-grotesk), sans-serif', fontWeight: 700, fontSize: 26, color: 'var(--accent)' }}>
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
          </div>
        </div>

        {/* Calculator list */}
        <div style={{ marginTop: 64 }}>
          <div
            style={{
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.5)',
            }}
          >
            A calculator for every conversation
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))',
              gap: 14,
              marginTop: 18,
            }}
          >
            {calcTiles.map(({ name, desc }) => (
              <div
                key={name}
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 12,
                  padding: 18,
                }}
              >
                <div style={{ fontFamily: 'var(--font-space-grotesk), sans-serif', fontWeight: 600, fontSize: 15.5 }}>{name}</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', marginTop: 4 }}>{desc}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.45)', marginTop: 16 }}>
            Stress test, refinance, and rent-vs-buy calculators — plus new tools added every month.
          </p>
        </div>
      </div>
    </section>
  )
}
