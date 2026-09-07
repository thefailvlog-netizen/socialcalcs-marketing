import { Avatar } from '@/components/avatars'
import { Arrow } from '@/components/icons'
import { APP_URL, DEMO_URL } from '@/lib/links'

const chip = {
  display: 'inline-flex',
  alignItems: 'center',
  height: 32,
  padding: '0 14px',
  border: '1.5px solid var(--line)',
  borderRadius: 'var(--pill)',
  fontSize: 12.5,
  fontWeight: 700,
} as const

const row = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: 52,
  padding: '0 20px',
  borderRadius: 'var(--pill)',
  fontSize: 15,
  fontWeight: 700,
} as const

export function Hero() {
  return (
    <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(480px, 100%), 1fr))', minHeight: 700 }}>
      {/* Left — gradient block */}
      <div
        style={{
          background: 'var(--grad)',
          color: '#fff',
          padding: 'clamp(48px, 6vw, 88px) clamp(24px, 5vw, 72px) clamp(40px, 5vw, 72px) clamp(24px, 6.6vw, 96px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 28,
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignSelf: 'flex-start',
            alignItems: 'center',
            minHeight: 32,
            padding: '6px 14px',
            borderRadius: 'var(--pill)',
            background: 'rgba(255,255,255,0.18)',
            fontSize: 12.5,
            fontWeight: 700,
            lineHeight: 1.3,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}
        >
          For mortgage brokers &amp; real estate agents
        </div>
        <h1 style={{ margin: 0, fontWeight: 800, fontSize: 'clamp(44px, 5.8vw, 84px)', lineHeight: 0.96, letterSpacing: '-0.035em' }}>
          Your bio link, built to win clients.
        </h1>
        <p style={{ margin: 0, maxWidth: 500, fontSize: 'clamp(16.5px, 1.3vw, 19px)', lineHeight: 1.5, color: 'rgba(255,255,255,0.9)' }}>
          One page with your face, your licence, and calculators built in. Every number a visitor runs becomes a lead — with a
          branded report in their inbox.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 14 }}>
          <a
            href={`${APP_URL}/signup`}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 10, height: 56, padding: '0 28px', background: '#fff', color: 'var(--accent)', borderRadius: 'var(--pill)', fontSize: 16.5, fontWeight: 800, textDecoration: 'none' }}
          >
            Try it free <Arrow />
          </a>
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', height: 56, padding: '0 24px', border: '2px solid rgba(255,255,255,0.55)', color: '#fff', borderRadius: 'var(--pill)', fontSize: 16.5, fontWeight: 700, textDecoration: 'none' }}
          >
            See a live example
          </a>
        </div>
        <div style={{ fontSize: 14, fontWeight: 600, color: 'rgba(255,255,255,0.75)' }}>No credit card. Live in an afternoon. Cancel anytime.</div>
      </div>

      {/* Right — the person card */}
      <div style={{ padding: 'clamp(32px, 4vw, 64px)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', background: '#fff' }}>
        <div
          style={{
            width: '100%',
            maxWidth: 390,
            background: '#fff',
            border: '1px solid var(--line)',
            borderRadius: 32,
            padding: '36px 26px 28px',
            boxShadow: '0 40px 70px -40px rgba(31,80,210,0.5)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 12,
            textAlign: 'center',
          }}
        >
          <div style={{ width: 136, height: 136, borderRadius: '50%', overflow: 'hidden', border: '6px solid var(--tint)' }}>
            <Avatar person="sarah" size={136} />
          </div>
          <div style={{ fontWeight: 800, fontSize: 27, letterSpacing: '-0.02em', marginTop: 6 }}>Sarah Jones</div>
          <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink-soft)' }}>Licensed Mortgage Broker · #M20481</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8 }}>
            <span style={chip}>Email</span>
            <span style={chip}>Call</span>
            <span style={chip}>sarahjones.ca</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, width: '100%', marginTop: 10 }}>
            <div style={{ ...row, background: 'var(--accent)', color: '#fff', fontWeight: 800 }}>
              <span>Mortgage Payment Calculator</span>
              <Arrow />
            </div>
            <div style={{ ...row, background: 'var(--tint)' }}>
              <span>Book a consultation</span>
              <Arrow stroke="var(--accent)" />
            </div>
            <div style={{ ...row, background: 'var(--tint)' }}>
              <span>Today&apos;s rate sheet</span>
              <Arrow stroke="var(--accent)" />
            </div>
          </div>
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: 'clamp(14px, 2.6vw, 40px)',
            right: 'clamp(12px, 3vw, 48px)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            padding: '12px 16px',
            background: 'var(--ink)',
            color: '#fff',
            borderRadius: 16,
            boxShadow: '0 18px 36px -16px rgba(15,26,51,0.5)',
            animation: 'floaty 5s ease-in-out infinite',
          }}
        >
          <span style={{ width: 9, height: 9, borderRadius: '50%', background: 'var(--accent)', boxShadow: '0 0 0 4px rgba(31,80,210,0.25)', flexShrink: 0 }} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: 13, fontWeight: 800 }}>New lead captured</span>
            <span style={{ fontSize: 11.5, opacity: 0.65 }}>jordan.m@email.com · just now</span>
          </div>
        </div>
      </div>
    </section>
  )
}
