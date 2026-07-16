'use client'

const faqs = [
  {
    q: 'Do my clients need to download anything?',
    a: 'Never. They open your link, run the numbers, and get their report — all in the browser, mostly on mobile.',
  },
  {
    q: 'How long does setup take?',
    a: 'Minutes. Describe your practice and we build the page for you — then tweak the branding, calculators, and links to taste.',
  },
  {
    q: 'Can I put a calculator on my own website?',
    a: 'Yes. On Pro and up you can embed any calculator on your site, blog, or listing pages with one line of code — and it still captures leads.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. No contracts, no lock-in. Downgrade to free whenever you want and keep your bio site.',
  },
]

export function FAQ() {
  return (
    <section style={{ padding: '24px 32px 96px' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <h2
          style={{
            fontFamily: 'var(--font-roboto), sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(26px,3vw,36px)',
            letterSpacing: '-0.02em',
            margin: '0 0 28px',
            textAlign: 'center',
          }}
        >
          Questions, answered
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {faqs.map(({ q, a }) => (
            <div
              key={q}
              style={{
                background: 'var(--card)',
                border: '1px solid var(--line)',
                borderRadius: 'var(--r)',
                padding: '22px 24px',
              }}
            >
              <div style={{ fontFamily: 'var(--font-space-grotesk), sans-serif', fontWeight: 600, fontSize: 16 }}>{q}</div>
              <p style={{ fontSize: 14.5, color: 'var(--ink-soft)', margin: '8px 0 0' }}>{a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
