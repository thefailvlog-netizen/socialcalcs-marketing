// "Every calculation becomes a lead" section
export function LeadsSection() {
  return (
    <section style={{ padding: '88px 32px' }}>
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(360px,1fr))',
          gap: 56,
          alignItems: 'center',
        }}
      >
        {/* Left */}
        <div>
          <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--accent)' }}>
            From calculation to client
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
            Every calculation becomes a lead.
          </h2>
          <p style={{ fontSize: 17, color: 'var(--ink-soft)', margin: '16px 0 0', maxWidth: 460 }}>
            Link any tool to your own call-to-action — &quot;Get pre-approved,&quot; &quot;Book a call,&quot;
            &quot;Download the full report.&quot; The moment a visitor runs the numbers, they receive a
            personalized, branded PDF, and their contact details land in your dashboard.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 13, marginTop: 24 }}>
            {[
              'Custom CTAs on every calculator and link.',
              'Branded PDF reports, emailed automatically.',
              'Follow up with the exact numbers they ran.',
            ].map(bullet => (
              <div key={bullet} style={{ display: 'flex', gap: 11, alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--accent)', fontWeight: 700 }}>✓</span>
                <span style={{ fontSize: 15.5, color: 'var(--ink-soft)' }}>{bullet}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — layered visual */}
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 380 }}>
          {/* Result card */}
          <div
            style={{
              position: 'relative',
              zIndex: 2,
              width: 260,
              background: 'var(--card)',
              border: '1px solid var(--line)',
              borderRadius: 16,
              boxShadow: '0 24px 48px -28px rgba(20,22,28,0.3)',
              padding: 18,
            }}
          >
            <div style={{ fontSize: 12, color: 'var(--ink-soft)' }}>Your monthly payment</div>
            <div style={{ fontFamily: 'var(--font-space-grotesk), sans-serif', fontWeight: 700, fontSize: 30, color: 'var(--accent)' }}>
              $2,847
            </div>
            <div
              style={{
                position: 'relative',
                marginTop: 14,
                textAlign: 'center',
                background: 'var(--ink)',
                color: '#fff',
                fontWeight: 600,
                fontSize: 13.5,
                padding: 13,
                borderRadius: 10,
              }}
            >
              Get my pre-approval report →
              <span
                style={{
                  position: 'absolute',
                  right: -8,
                  bottom: -12,
                  width: 20,
                  height: 20,
                  borderRadius: '50%',
                  background: 'var(--accent)',
                  boxShadow: '0 0 0 5px rgba(16,163,127,0.25)',
                }}
              />
            </div>
          </div>

          {/* PDF report card */}
          <div
            style={{
              position: 'absolute',
              zIndex: 1,
              top: 24,
              right: 0,
              width: 230,
              background: '#fff',
              border: '1px solid var(--line)',
              borderRadius: 12,
              boxShadow: '0 28px 56px -26px rgba(20,22,28,0.4)',
              overflow: 'hidden',
              transform: 'rotate(5deg)',
            }}
          >
            <div style={{ background: 'var(--accent)', color: '#fff', padding: '14px 16px' }}>
              <div style={{ fontFamily: 'var(--font-space-grotesk), sans-serif', fontWeight: 700, fontSize: 13 }}>
                Mortgage Payment Report
              </div>
              <div style={{ fontSize: 10.5, opacity: 0.85 }}>Prepared by Sarah Jones</div>
            </div>
            <div style={{ padding: '14px 16px' }}>
              <div style={{ fontSize: 10.5, color: 'var(--ink-soft)' }}>Prepared for Jordan M.</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 10 }}>
                {[
                  { label: 'Home price', value: '$650,000' },
                  { label: 'Down payment', value: '$130,000' },
                  { label: 'Rate / term', value: '4.99% · 25y' },
                ].map(({ label, value }) => (
                  <div key={label} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11.5 }}>
                    <span style={{ color: 'var(--ink-soft)' }}>{label}</span>
                    <span style={{ fontWeight: 600 }}>{value}</span>
                  </div>
                ))}
                <div style={{ height: 1, background: 'var(--line)', margin: '2px 0' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12.5 }}>
                  <span style={{ fontWeight: 600 }}>Monthly payment</span>
                  <span style={{ fontWeight: 700, color: 'var(--accent)' }}>$2,847</span>
                </div>
              </div>
              <div
                style={{
                  marginTop: 12,
                  fontSize: 9.5,
                  color: 'var(--ink-soft)',
                  borderTop: '1px dashed var(--line)',
                  paddingTop: 8,
                }}
              >
                Sarah Jones · Licensed Mortgage Broker · sarahjones.ca · 604-555-0142
              </div>
            </div>
          </div>

          {/* Lead chip */}
          <div
            style={{
              position: 'absolute',
              zIndex: 3,
              bottom: 6,
              left: 0,
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              background: 'var(--ink)',
              color: '#fff',
              padding: '9px 13px',
              borderRadius: 10,
              fontSize: 12,
              fontWeight: 600,
              boxShadow: '0 14px 28px -14px rgba(0,0,0,0.5)',
            }}
          >
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
            Lead + report sent
          </div>
        </div>
      </div>
    </section>
  )
}
