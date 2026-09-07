import { Check, Eyebrow, h2Style } from '@/components/icons'

const mono = { fontFamily: 'var(--font-mono), monospace' } as const

const bullets = [
  'A custom PDF report, emailed automatically.',
  'Your name and branding on every page.',
  'The lead lands in-app or in your email — with their numbers.',
]

export function LeadsSection() {
  return (
    <section style={{ padding: '104px clamp(20px, 5vw, 96px)' }}>
      <div style={{ maxWidth: 1248, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(420px, 100%), 1fr))', gap: 72, alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <Eyebrow>From calculation to client</Eyebrow>
          <h2 style={h2Style}>Every calculation becomes a lead.</h2>
          <p style={{ margin: 0, maxWidth: 500, fontSize: 17.5, lineHeight: 1.55, color: 'var(--ink-soft)' }}>
            The moment a visitor runs the numbers, they get a custom PDF report in their inbox — your calculator, your branding,
            your name on every page. You get the lead with the exact figures they ran.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 4 }}>
            {bullets.map(b => (
              <div key={b} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 16, fontWeight: 600 }}>
                <Check />
                {b}
              </div>
            ))}
          </div>
        </div>

        <div style={{ position: 'relative', minHeight: 440, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ position: 'relative', zIndex: 2, width: 290, background: '#fff', border: '1px solid var(--line)', borderRadius: 24, padding: 22, boxShadow: '0 30px 60px -30px rgba(15,26,51,0.35)', display: 'flex', flexDirection: 'column', gap: 6 }}>
            <div style={{ fontSize: 13, color: 'var(--ink-soft)' }}>Your monthly payment</div>
            <div style={{ ...mono, fontSize: 40, fontWeight: 600, color: 'var(--accent)', letterSpacing: '-0.03em' }}>$3,022</div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 48, marginTop: 10, background: 'var(--ink)', color: '#fff', borderRadius: 'var(--pill)', fontSize: 14, fontWeight: 800 }}>
              Get my pre-approval report
            </div>
          </div>

          <div style={{ position: 'absolute', zIndex: 1, top: 20, right: 'clamp(0px, 4vw, 40px)', width: 260, background: '#fff', border: '1px solid var(--line)', borderRadius: 18, overflow: 'hidden', transform: 'rotate(5deg)', boxShadow: '0 34px 60px -30px rgba(15,26,51,0.4)' }}>
            <div style={{ padding: '16px 18px', background: 'var(--grad)', color: '#fff', display: 'flex', flexDirection: 'column', gap: 2 }}>
              <span style={{ fontWeight: 800, fontSize: 14 }}>Mortgage Payment Report</span>
              <span style={{ fontSize: 11, opacity: 0.85 }}>Prepared by Sarah Jones</span>
            </div>
            <div style={{ padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: 9, fontSize: 12.5 }}>
              <div style={{ color: 'var(--ink-soft)' }}>Prepared for Jordan M.</div>
              {[
                ['Home price', '$650,000'],
                ['Down payment', '$130,000'],
                ['Rate / term', '4.99% · 25y'],
              ].map(([l, v]) => (
                <div key={l} style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--ink-soft)' }}>{l}</span>
                  <span style={{ fontWeight: 700 }}>{v}</span>
                </div>
              ))}
              <div style={{ height: 1, background: 'var(--line)' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontWeight: 800 }}>Monthly payment</span>
                <span style={{ ...mono, fontWeight: 600, color: 'var(--accent)' }}>$3,022</span>
              </div>
            </div>
          </div>

          <div style={{ position: 'absolute', zIndex: 3, bottom: 30, left: 'clamp(0px, 2vw, 20px)', display: 'inline-flex', alignItems: 'center', gap: 9, padding: '10px 14px', background: 'var(--ink)', color: '#fff', borderRadius: 14, fontSize: 13, fontWeight: 800 }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent)' }} />
            Lead + report sent
          </div>
        </div>
      </div>
    </section>
  )
}
