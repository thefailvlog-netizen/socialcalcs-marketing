import Link from 'next/link'

interface PricingTeaserProps {
  proMonthlyPrice: string
}

export function PricingTeaser({ proMonthlyPrice }: PricingTeaserProps) {
  return (
    <section className="py-16 px-6 bg-blue-50 border-y border-blue-100">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-gray-600 text-lg">
          Start free. Upgrade when you&apos;re ready.{' '}
          <span className="font-bold text-gray-900">Pro plans from ${proMonthlyPrice}/mo.</span>
        </p>
        <Link
          href="/pricing"
          className="inline-block mt-4 text-blue-600 font-semibold hover:underline text-sm"
        >
          See full pricing →
        </Link>
      </div>
    </section>
  )
}
