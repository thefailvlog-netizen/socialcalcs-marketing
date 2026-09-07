import { Check, Eyebrow, h2Style } from '@/components/icons'

const mono = { fontFamily: 'var(--font-mono), monospace' } as const

const calcTiles = [
  { name: 'Mortgage Payment', desc: 'Monthly payments, instantly.' },
  { name: 'Affordability', desc: 'How much they can borrow.' },
  { name: 'Compound Interest', desc: 'Watch savings grow over time.' },
  { name: 'Mortgage Penalty', desc: 'Estimate break fees fast.' },
  { name: 'Scenario Comparison', desc: 'Compare two mortgages side by side.' },
  { name: 'Investment Projection', desc: 'Future value of contributions.' },
]

const inputs = [
  { label: 'Home price', value: '$650,000' },
  { label: 'Down payment', value: '$130,000' },
  { label: 'Rate', value: '4.99%' },
  { label: 'Term', value: '25 yrs' },
]

const leads = [
  { name: 'Jordan M.', value: '$3,022/mo' },
  { name: 'Priya K.', value: '$3,112/mo' },
  { name: 'Devon R.', value: '$1,940/mo' },
  { name: 'Amira S.', value: '$2,405/mo' },
]

export function ToolsSection() {
  return (
    <section id="tools" style={{ background: 'var(--grad-dark)', color: '#fff', padding: '104px clamp(20px, 5vw, 96px)' }}>
      <div style={{ maxWidth: 1248, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 64 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(420px, 100%), 1fr))', gap: 72, alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
            <Eyebrow onDark>Built-in tools</Eyebrow>
            <h2 style={h2Style}>The link that does the math.</h2>
            <p style={{ margin: 0, fontSize: 17.5, lineHeight: 1.55, color: 'rgba(255,255,255,0.68)' }}>
              Drop a live calculator straight onto your page. Visitors get a real answer in seconds — no signup, no download — and
              you capture the lead behind every result.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 6 }}>
              {['Fully customizable inputs, branding, and results.', 'One tool or a whole suite on a single page.', 'Mobile-first — exactly where your followers are.'].map(b => (
                <div key={b} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 16, fontWeight: 600 }}>
                  <Check stroke="var(--soft)" />
                  {b}
                </div>
              ))}
            </div>
          </div>

          {/* Dashboard mock */}
          <div style={{ background: '#1c2b4f', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 22, overflow: 'hidden', boxShadow: '0 50px 90px -50px rgba(31,80,210,0.55)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '13px 18px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
              {[0, 1, 2].map(i => (
                <span key={i} style={{ width: 9, height: 9, borderRadius: '50%', background: 'rgba(255,255,255,0.18)' }} />
              ))}
              <span style={{ ...mono, marginLeft: 10, fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>app.socialcalcs.com/dashboard</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(240px, 100%), 1fr))' }}>
              <div style={{ padding: 26, borderRight: '1px solid rgba(255,255,255,0.08)', display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)' }}>Mortgage payment</div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 10 }}>
                  {inputs.map(({ label, value }) => (
                    <div key={label} style={{ padding: '12px 14px', background: 'rgba(255,255,255,0.05)', borderRadius: 12, display: 'flex', flexDirection: 'column', gap: 3 }}>
                      <span style={{ fontSize: 11.5, color: 'rgba(255,255,255,0.5)' }}>{label}</span>
                      <span style={{ ...mono, fontSize: 16, fontWeight: 600 }}>{value}</span>
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '14px 16px', background: 'rgba(31,80,210,0.22)', borderRadius: 12 }}>
                  <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>Monthly payment</span>
                  <span style={{ ...mono, fontSize: 30, fontWeight: 600, color: 'var(--soft)', letterSpacing: '-0.03em' }}>$3,022</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 46, background: 'var(--accent)', borderRadius: 'var(--pill)', fontSize: 14, fontWeight: 800 }}>
                  Calculate &amp; get my PDF report
                </div>
              </div>
              <div style={{ padding: 26, display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)' }}>Leads</span>
                  <span style={{ ...mono, fontSize: 12, color: 'var(--soft)' }}>+3 today</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {leads.map(({ name, value }) => (
                    <div key={name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 14px', background: 'rgba(255,255,255,0.05)', borderRadius: 12, fontSize: 13.5 }}>
                      <span style={{ fontWeight: 700 }}>{name}</span>
                      <span style={{ ...mono, color: 'var(--soft)' }}>{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)' }}>A calculator for every conversation</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(260px, 100%), 1fr))', gap: 14 }}>
            {calcTiles.map(({ name, desc }) => (
              <div key={name} style={{ padding: '20px 22px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 18, display: 'flex', flexDirection: 'column', gap: 4 }}>
                <span style={{ fontWeight: 800, fontSize: 17 }}>{name}</span>
                <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)' }}>{desc}</span>
              </div>
            ))}
          </div>
          <p style={{ margin: 0, fontSize: 13.5, color: 'rgba(255,255,255,0.45)' }}>Stress test, refinance, and rent-vs-buy calculators — plus new tools added every month.</p>
        </div>
      </div>
    </section>
  )
}
