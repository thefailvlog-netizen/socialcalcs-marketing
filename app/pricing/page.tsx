'use client'

import { useState } from 'react'
import { BillingToggle } from '@/components/pricing/billing-toggle'
import { PricingCards } from '@/components/pricing/pricing-cards'
import { FAQ } from '@/components/pricing/faq'

export default function PricingPage() {
  const [annual, setAnnual] = useState(false)

  return (
    <>
      {/* Header */}
      <section style={{ padding: '80px 32px 40px', textAlign: 'center' }}>
        <div
          style={{
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
          }}
        >
          Pricing
        </div>
        <h1
          style={{
            fontFamily: 'var(--font-roboto), serif',
            fontWeight: 700,
            fontSize: 'clamp(40px,5vw,68px)',
            lineHeight: 1.0,
            letterSpacing: '-0.035em',
            margin: '14px 0 0',
          }}
        >
          Simple pricing.
          <br />
          <span style={{ color: 'var(--accent)' }}>Serious leads.</span>
        </h1>
        <p style={{ fontSize: 18, color: 'var(--ink-soft)', margin: '18px auto 0', maxWidth: 480 }}>
          Start free. Upgrade the day your bio link earns its keep. No contracts, cancel anytime.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 30 }}>
          <BillingToggle annual={annual} onChange={setAnnual} />
        </div>
      </section>

      {/* Cards */}
      <section style={{ padding: '24px 32px 80px' }}>
        <PricingCards annual={annual} />
      </section>

      {/* FAQ */}
      <FAQ />
    </>
  )
}
