export function CalculatorPreview() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            See what your clients see
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            A clean, branded calculator page they can use in 30 seconds — no signup, no friction.
          </p>
        </div>
        <div aria-hidden="true" className="max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
          {/* Browser chrome */}
          <div className="bg-gray-100 border-b border-gray-200 px-4 py-3 flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-gray-400 font-mono">
              socialcalcs.com/sarahjones
            </div>
          </div>
          {/* Mockup content */}
          <div className="bg-gradient-to-b from-blue-600 to-blue-700 p-6 text-white text-center">
            <div className="w-14 h-14 rounded-full bg-white/20 mx-auto mb-3 flex items-center justify-center text-2xl">
              👩‍💼
            </div>
            <div className="font-bold text-lg">Sarah Jones</div>
            <div className="text-blue-200 text-sm">Mortgage Broker · TD Bank</div>
          </div>
          <div className="bg-white p-6">
            <div className="font-semibold text-gray-900 mb-4">Mortgage Payment Calculator</div>
            <div className="space-y-4 mb-5">
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Home Price</label>
                <div className="border border-gray-200 rounded-lg px-3 py-2 text-gray-900 font-medium text-sm bg-gray-50">
                  $650,000
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-gray-500 mb-1 block">Down Payment</label>
                  <div className="border border-gray-200 rounded-lg px-3 py-2 text-gray-900 font-medium text-sm bg-gray-50">
                    $130,000
                  </div>
                </div>
                <div>
                  <label className="text-xs text-gray-500 mb-1 block">Rate</label>
                  <div className="border border-gray-200 rounded-lg px-3 py-2 text-gray-900 font-medium text-sm bg-gray-50">
                    4.99%
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-blue-600 text-white text-center font-bold py-3 rounded-xl text-sm">
              Calculate & Get My PDF Report →
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
