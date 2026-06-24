'use client'

interface BillingToggleProps {
  annual: boolean
  onChange: (annual: boolean) => void
}

export function BillingToggle({ annual, onChange }: BillingToggleProps) {
  return (
    <div className="flex items-center gap-3 justify-center">
      <button
        type="button"
        className={`text-sm font-medium transition-colors ${!annual ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'}`}
        onClick={() => onChange(false)}
        aria-pressed={!annual}
      >
        Monthly
      </button>

      <button
        type="button"
        role="switch"
        aria-checked={annual}
        onClick={() => onChange(!annual)}
        className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
          annual ? 'bg-blue-600' : 'bg-gray-200'
        }`}
        aria-label="Toggle annual billing"
      >
        <span
          aria-hidden="true"
          className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow-sm transition-transform duration-200 ${
            annual ? 'translate-x-5' : 'translate-x-0'
          }`}
        />
      </button>

      <button
        type="button"
        className={`text-sm font-medium transition-colors ${annual ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'}`}
        onClick={() => onChange(true)}
        aria-pressed={annual}
      >
        Annual{' '}
        <span className={`text-xs font-semibold ml-1 ${annual ? 'text-green-600' : 'text-green-500'}`}>
          Save 20%
        </span>
      </button>
    </div>
  )
}
