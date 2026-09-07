import { Check, Eyebrow, h2Style } from '@/components/icons'

const personas = [
  {
    title: 'Mortgage brokers',
    bullets: [
      'Turn your Instagram bio into a working lead form.',
      'Send a calculator link instead of a generic rate sheet.',
      'Every calculation captures their contact automatically.',
    ],
  },
  {
    title: 'Real estate agents',
    bullets: [
      'Give buyers an affordability calculator tied to your brand.',
      'Embed your microsite link in every listing.',
      'Capture buyer leads before they find another agent.',
    ],
  },
  {
    title: 'Financial advisors',
    comingSoon: true,
    bullets: [
      'Share retirement and investment calculators from your bio.',
      'Capture leads from LinkedIn automatically.',
      'Branded tools that position you as the expert.',
    ],
  },
]

export function WhoItsFor() {
  return (
    <section style={{ padding: '104px clamp(20px, 5vw, 96px)' }}>
      <div style={{ maxWidth: 1248, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 44 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 700 }}>
          <Eyebrow>Who it&apos;s for</Eyebrow>
          <h2 style={h2Style}>If you sell with numbers, this is your edge.</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))', gap: 24 }}>
          {personas.map(({ title, bullets, comingSoon }) => (
            <div key={title} style={{ position: 'relative', padding: 32, background: '#fff', border: '1px solid var(--line)', borderRadius: 28, display: 'flex', flexDirection: 'column', gap: 16 }}>
              {comingSoon && (
                <span style={{ position: 'absolute', top: 22, right: 22, padding: '5px 11px', border: '1.5px solid var(--line)', borderRadius: 'var(--pill)', fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--ink-soft)' }}>
                  Coming soon
                </span>
              )}
              <div style={{ fontWeight: 800, fontSize: 24, letterSpacing: '-0.02em' }}>{title}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 15, color: 'var(--ink-soft)', opacity: comingSoon ? 0.72 : 1 }}>
                {bullets.map(b => (
                  <div key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <Check size={18} />
                    {b}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
