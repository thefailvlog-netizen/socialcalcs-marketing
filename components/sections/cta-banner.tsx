const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.socialcalcs.com'

interface CtaBannerProps {
  headline: string
  subheadline: string
  cta: string
}

export function CtaBanner({ headline, subheadline, cta }: CtaBannerProps) {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-600 to-blue-900 text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">{headline}</h2>
        <p className="text-blue-100 text-lg mb-10 leading-relaxed">{subheadline}</p>
        <a
          href={`${APP_URL}/signup`}
          className="bg-white text-blue-700 font-bold px-10 py-4 rounded-xl hover:bg-blue-50 transition-colors block sm:inline-block w-full sm:w-auto text-center"
        >
          {cta}
        </a>
      </div>
    </section>
  )
}
