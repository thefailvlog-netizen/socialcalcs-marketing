'use client'

import { useState } from 'react'
import { BillingToggle } from '@/components/pricing/billing-toggle'
import { PricingCards } from '@/components/pricing/pricing-cards'
import { Faq } from '@/components/pricing/faq'

const PRICES = {
  proMonthly: '20',
  proAnnual: '16',
  businessMonthly: '99',
  businessAnnual: '79',
}

export default function PricingPage() {
  const [annual, setAnnual] = useState(false)

  return (
    <div className="py-20 px-6">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Simple, honest pricing
        </h1>
        <p className="text-gray-500 text-lg">
          Start free. Upgrade when you&apos;re ready to unlock unlimited leads and full features.
        </p>
        <div className="mt-8">
          <BillingToggle annual={annual} onChange={setAnnual} />
        </div>
      </div>

      <div className="mb-20">
        <PricingCards
          annual={annual}
          proMonthlyPrice={PRICES.proMonthly}
          proAnnualPrice={PRICES.proAnnual}
          businessMonthlyPrice={PRICES.businessMonthly}
          businessAnnualPrice={PRICES.businessAnnual}
        />
      </div>

      <Faq />

      <div className="text-center mt-16">
        <p className="text-gray-500 mb-4">Still have questions?</p>
        <a
          href={`mailto:support@socialcalcs.com`}
          className="text-blue-600 font-semibold hover:underline"
        >
          Email us at support@socialcalcs.com →
        </a>
      </div>
    </div>
  )
}
