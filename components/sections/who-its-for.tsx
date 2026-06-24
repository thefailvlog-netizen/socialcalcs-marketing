export function WhoItsFor() {
  const personas = [
    {
      emoji: '🏠',
      title: 'Mortgage Brokers',
      comingSoon: false,
      points: [
        'Turn your Instagram bio into a lead form',
        'Send clients a calculator link instead of a generic rate sheet',
        'Every calculation captures their contact info automatically',
        'Follow up with the exact numbers they already ran',
      ],
    },
    {
      emoji: '🏡',
      title: 'Real Estate Agents',
      comingSoon: false,
      points: [
        'Give buyers an affordability calculator tied to your brand',
        'Embed your microsite link in every listing',
        'Capture buyer leads before they find another agent',
        'PDF reports they email to themselves — with your logo',
      ],
    },
    {
      emoji: '📊',
      title: 'Financial Advisors',
      comingSoon: true,
      points: [
        'Share retirement and investment calculators from your bio',
        'Capture leads from LinkedIn and your website automatically',
        'Branded tools that position you as the expert',
        'PDF summaries your clients can keep and share',
      ],
    },
  ]

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Built for financial professionals
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {personas.map((p) => (
            <div key={p.title} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm relative">
              {p.comingSoon && (
                <span className="absolute top-4 right-4 bg-blue-100 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                  Coming Soon
                </span>
              )}
              <div className="text-4xl mb-4" aria-hidden="true">{p.emoji}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-5">{p.title}</h3>
              <ul className="space-y-3">
                {p.points.map((point) => (
                  <li key={point} className="flex gap-3 text-gray-600 text-sm leading-relaxed">
                    <span aria-hidden="true" className="text-blue-500 font-bold mt-0.5">✓</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
