import { DEMO_URL } from '@/lib/links'

const steps = [
  {
    num: '01',
    title: 'Build in a few clicks',
    body: 'Make your site in a few clicks on your phone — or describe your practice and let AI assemble the page for you.',
    cta: { label: 'See a real one →', href: DEMO_URL },
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
        padding: '62px clamp(20px, 5vw, 32px)',
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
          gridTemplateColumns: 'repeat(auto-fit,minmax(min(260px, 100%),1fr))',
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
                fontFamily: 'var(--font-roboto), sans-serif',
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
                  gap: 7,
                  marginTop: 12,
                  minHeight: 44,
                  fontSize: 14.5,
                  fontWeight: 600,
                  color: 'var(--accent)',
                  textDecoration: 'none',
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: 'var(--accent)',
                    flexShrink: 0,
                    animation: 'dot-pulse 2.8s ease-in-out infinite',
                  }}
                />
                {cta.label}
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
