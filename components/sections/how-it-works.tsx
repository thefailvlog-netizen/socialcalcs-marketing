const steps = [
  {
    num: '01',
    title: 'Build your page',
    body: 'Add your name, license, contact, links, and the calculators you want — fully branded to you.',
  },
  {
    num: '02',
    title: 'Share one link',
    body: "Drop it in your Instagram bio, LinkedIn, listings, or email signature. That's the whole install.",
  },
  {
    num: '03',
    title: 'Turn taps into leads',
    body: 'Visitors run a calculator, get a branded PDF, and their contact details land in your inbox.',
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
        {steps.map(({ num, title, body }) => (
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
          </div>
        ))}
      </div>
    </section>
  )
}
