'use client'

interface BillingToggleProps {
  annual: boolean
  onChange: (annual: boolean) => void
}

export function BillingToggle({ annual, onChange }: BillingToggleProps) {
  return (
    <div className="flex items-center gap-4 justify-center">
      <button
        className={`text-sm font-medium transition-colors ${!annual ? 'text-gray-900' : 'text-gray-400'}`}
        onClick={() => onChange(false)}
      >
        Monthly
      </button>
      <button
        onClick={() => onChange(!annual)}
        className={`relative w-12 h-6 rounded-full transition-colors ${annual ? 'bg-blue-600' : 'bg-gray-200'}`}
        aria-label="Toggle billing period"
        aria-pressed={annual}
      >
        <span
          className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-transform ${annual ? 'translate-x-7' : 'translate-x-1'}`}
        />
      </button>
      <button
        className={`text-sm font-medium transition-colors ${annual ? 'text-gray-900' : 'text-gray-400'}`}
        onClick={() => onChange(true)}
      >
        Annual <span className="text-green-600 text-xs font-semibold ml-1">Save 20%</span>
      </button>
    </div>
  )
}
