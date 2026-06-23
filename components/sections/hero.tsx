const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.socialcalcs.com'

interface HeroProps {
  eyebrow: string
  headline: string
  subheadline: string
  ctaPrimary: string
  ctaSecondary: string
}

export function Hero({ eyebrow, headline, subheadline, ctaPrimary, ctaSecondary }: HeroProps) {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-blue-900 text-white py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block text-blue-200 text-xs font-semibold tracking-widest uppercase mb-6">
          {eyebrow}
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          {headline}
        </h1>
        <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          {subheadline}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`${APP_URL}/signup`}
            className="bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors text-sm md:text-base"
          >
            {ctaPrimary}
          </a>
          <a
            href={`${APP_URL}/demo`}
            className="border-2 border-white/60 text-white font-semibold px-8 py-4 rounded-xl hover:border-white hover:bg-white/10 transition-colors text-sm md:text-base"
          >
            {ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  )
}
