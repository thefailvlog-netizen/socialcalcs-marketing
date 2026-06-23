'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'Do I need a website to use SocialCalcs?',
    answer: 'No. SocialCalcs gives you a hosted microsite at socialcalcs.com/yourname. You can share that link anywhere — Instagram, LinkedIn, email, or your own website.',
  },
  {
    question: 'How does the lead capture work?',
    answer: "When a visitor uses your calculator and clicks to get their PDF report, they enter their name and email. That contact immediately appears in your lead dashboard and gets emailed to you.",
  },
  {
    question: 'Can I cancel at any time?',
    answer: 'Yes. No contracts, no cancellation fees. You can downgrade to the free plan or cancel anytime from your dashboard.',
  },
  {
    question: 'What calculators are included?',
    answer: 'Mortgage payment, mortgage affordability, stress test, land transfer tax, and more. We add new calculators regularly. All calculator types are included on Pro and Business plans.',
  },
  {
    question: 'Is there a free trial?',
    answer: "The free plan lets you explore the product with no time limit. When you're ready for unlimited leads and full features, upgrade to Pro.",
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-8">
        Frequently asked questions
      </h2>
      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
            <button
              className="w-full text-left px-6 py-4 flex justify-between items-center font-medium text-gray-900 hover:bg-gray-50 transition-colors"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
            >
              {faq.question}
              <span aria-hidden="true" className={`ml-4 text-gray-400 transition-transform ${open === i ? 'rotate-180' : ''}`}>
                ↓
              </span>
            </button>
            {open === i && (
              <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
