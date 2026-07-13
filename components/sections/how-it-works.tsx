const steps = [
  {
    num: '01',
    title: 'Build your page with AI',
    body: 'Answer a few questions and AI assembles your bio site — your name, license, colors, calculators, and links — in minutes.',
    cta: { label: 'See a real one →', href: 'https://app.socialcalcs.com/mortgageman' },
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
    <section
      style={{
        padding: '62px 32px',
        background: 'var(--card)',
        borderTop: '1px solid var(--line)',
        borderBottom: '1px solid var(--line)',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
          gap: 28,
        }}
      >
        {steps.map(({ num, title, body, cta }) => (
          <div key={num}>
            <div
              style={{
                fontFamily: 'var(--font-space-grotesk), sans-serif',
                fontWeight: 700,
                fontSize: 38,
                color: 'var(--accent)',
                lineHeight: 1,
              }}
            >
              {num}
            </div>
            <h3
              style={{
                fontFamily: 'var(--font-roboto), serif',
                fontWeight: 600,
                fontSize: 20,
                margin: '12px 0 6px',
              }}
            >
              {title}
            </h3>
            <p style={{ fontSize: 15, color: 'var(--ink-soft)', margin: 0 }}>{body}</p>
            {cta && (
              <a
                href={cta.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  marginTop: 14,
                  fontSize: 14,
                  fontWeight: 600,
                  color: 'var(--accent)',
                  textDecoration: 'none',
                }}
              >
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', display: 'inline-block', flexShrink: 0 }} />
                {cta.label}
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
