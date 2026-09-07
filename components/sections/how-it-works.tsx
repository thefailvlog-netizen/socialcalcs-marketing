import { DEMO_URL } from '@/lib/links'

const steps = [
  {
    num: '01',
    title: 'Build in a few clicks',
    body: 'Make your site on your phone — or describe your practice and let AI assemble the page for you.',
    cta: { label: 'See a real one', href: DEMO_URL },
  },
  {
    num: '02',
    title: 'Share one link',
    body: "Drop it in your Instagram bio, LinkedIn, listings, or email signature. That's the whole install.",
    cta: null,
  },
  {
    num: '03',
    title: 'Turn taps into leads',
    body: 'Visitors run a calculator, get a branded PDF, and their contact details land in your inbox.',
    cta: null,
  },
]

export function HowItWorks() {
  return (
    <section style={{ padding: '88px clamp(20px, 5vw, 96px)', borderBottom: '1px solid var(--line)' }}>
      <div style={{ maxWidth: 1248, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: 48 }}>
        {steps.map(({ num, title, body, cta }) => (
          <div key={num} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ fontWeight: 800, fontSize: 56, lineHeight: 1, color: 'var(--accent)', letterSpacing: '-0.03em' }}>{num}</div>
            <div style={{ fontWeight: 800, fontSize: 24, letterSpacing: '-0.02em' }}>{title}</div>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.5, color: 'var(--ink-soft)' }}>{body}</p>
            {cta && (
              <a
                href={cta.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 4, minHeight: 44, fontSize: 15, fontWeight: 700, color: 'var(--accent)', textDecoration: 'none' }}
              >
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--accent)', animation: 'dot-pulse 2.8s ease-in-out infinite' }} />
                {cta.label}
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
