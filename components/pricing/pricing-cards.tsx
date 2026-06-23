'use client'

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.socialcalcs.com'

interface PricingTier {
  name: string
  monthlyPrice: string
  annualPrice: string
  description: string
  features: string[]
  cta: string
  highlighted: boolean
}

interface PricingCardsProps {
  annual: boolean
  proMonthlyPrice: string
  proAnnualPrice: string
  businessMonthlyPrice: string
  businessAnnualPrice: string
}

export function PricingCards({
  annual,
  proMonthlyPrice,
  proAnnualPrice,
  businessMonthlyPrice,
  businessAnnualPrice,
}: PricingCardsProps) {
  const tiers: PricingTier[] = [
    {
      name: 'Free',
      monthlyPrice: '0',
      annualPrice: '0',
      description: 'Get started and try it out.',
      features: [
        '1 branded microsite',
        '1 calculator type',
        'Lead capture (up to 20 leads/mo)',
        'SocialCalcs branding',
      ],
      cta: 'Start Free',
      highlighted: false,
    },
    {
      name: 'Pro',
      monthlyPrice: proMonthlyPrice,
      annualPrice: proAnnualPrice,
      description: 'For brokers and agents serious about leads.',
      features: [
        '1 branded microsite',
        'All calculator types',
        'Unlimited leads',
        'PDF lead magnet reports',
        'Email notifications',
        'Remove SocialCalcs branding',
        'Priority support',
      ],
      cta: 'Get Started',
      highlighted: true,
    },
    {
      name: 'Business',
      monthlyPrice: businessMonthlyPrice,
      annualPrice: businessAnnualPrice,
      description: 'For teams and brokerages.',
      features: [
        'Everything in Pro',
        'Up to 5 microsites',
        'Team member access',
        'Custom domain',
        'CRM integrations (coming soon)',
        'Dedicated support',
      ],
      cta: 'Get Started',
      highlighted: false,
    },
  ]

  return (
    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {tiers.map((tier) => {
        const price = annual ? tier.annualPrice : tier.monthlyPrice
        return (
          <div
            key={tier.name}
            className={`rounded-2xl p-8 border flex flex-col ${
              tier.highlighted
                ? 'bg-blue-600 border-blue-500 text-white shadow-xl scale-105'
                : 'bg-white border-gray-200 text-gray-900'
            }`}
          >
            <div className="mb-6">
              <div className={`text-sm font-semibold mb-1 ${tier.highlighted ? 'text-blue-200' : 'text-gray-500'}`}>
                {tier.name}
              </div>
              <div className="flex items-end gap-1 mb-2">
                <span className="text-4xl font-extrabold">${price}</span>
                <span className={`text-sm mb-1.5 ${tier.highlighted ? 'text-blue-200' : 'text-gray-400'}`}>
                  {price === '0' ? '' : '/mo'}
                </span>
              </div>
              {annual && price !== '0' && (
                <div className={`text-xs ${tier.highlighted ? 'text-blue-200' : 'text-green-600'}`}>
                  Billed annually
                </div>
              )}
              <p className={`text-sm mt-2 ${tier.highlighted ? 'text-blue-100' : 'text-gray-500'}`}>
                {tier.description}
              </p>
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              {tier.features.map((f) => (
                <li key={f} className="flex gap-2 text-sm">
                  <span aria-hidden="true" className={tier.highlighted ? 'text-blue-200' : 'text-blue-500'}>✓</span>
                  {f}
                </li>
              ))}
            </ul>

            <a
              href={`${APP_URL}/signup?plan=${tier.name.toLowerCase()}`}
              className={`text-center font-semibold py-3 rounded-xl transition-colors text-sm ${
                tier.highlighted
                  ? 'bg-white text-blue-700 hover:bg-blue-50'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {tier.cta}
            </a>
          </div>
        )
      })}
    </div>
  )
}
