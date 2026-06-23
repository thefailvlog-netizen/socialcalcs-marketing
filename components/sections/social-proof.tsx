const testimonials = [
  {
    quote: "I used to lose leads because I'd send people to my website and never hear from them again. Now every calculation is a contact.",
    name: 'Mark T.',
    title: 'Mortgage Broker, Vancouver BC',
  },
  {
    quote: "My clients love getting the PDF. They forward it to their partners, which means more leads from a single session.",
    name: 'Priya S.',
    title: 'Real Estate Agent, Toronto ON',
  },
  {
    quote: "Set it up in an afternoon. My Instagram bio link has been working harder than my website ever did.",
    name: 'Jason L.',
    title: 'Mortgage Specialist, Calgary AB',
  },
]

export function SocialProof() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Financial pros are already using it
          </h2>
          <p className="text-gray-500 text-lg">Real results from real brokers and agents.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <p className="text-gray-700 leading-relaxed mb-5 text-sm">&ldquo;{t.quote}&rdquo;</p>
              <div>
                <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                <div className="text-gray-400 text-xs">{t.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
