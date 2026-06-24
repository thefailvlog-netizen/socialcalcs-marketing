import { getCopy } from '@/lib/copy'
import { Hero } from '@/components/sections/hero'
import { HowItWorks } from '@/components/sections/how-it-works'
import { Features } from '@/components/sections/features'
import { CalculatorPreview } from '@/components/sections/calculator-preview'
import { WhoItsFor } from '@/components/sections/who-its-for'
import { SocialProof } from '@/components/sections/social-proof'
import { PricingTeaser } from '@/components/sections/pricing-teaser'
import { CtaBanner } from '@/components/sections/cta-banner'

export const revalidate = 60

export default async function HomePage() {
  const [
    eyebrow, headline, subheadline, ctaPrimary, ctaSecondary,
    step1Title, step1Desc, step2Title, step2Desc, step3Title, step3Desc,
    feat1Title, feat1Desc, feat2Title, feat2Desc,
    feat3Title, feat3Desc, feat4Title, feat4Desc,
    proMonthlyPrice,
    bannerHeadline, bannerSubheadline, bannerCta,
  ] = await Promise.all([
    getCopy('hero.eyebrow', 'Lead Engine for Financial Pros'),
    getCopy('hero.headline', 'Turn your bio link into a lead machine.'),
    getCopy('hero.subheadline', 'Branded microsites and calculators for mortgage brokers and real estate agents.'),
    getCopy('hero.cta_primary', 'Start Free'),
    getCopy('hero.cta_secondary', 'See Demo'),
    getCopy('howitworks.step1.title', 'Share your link'),
    getCopy('howitworks.step1.description', 'Add your SocialCalcs link to your Instagram bio, LinkedIn profile, or email signature.'),
    getCopy('howitworks.step2.title', 'Visitors use your calculator'),
    getCopy('howitworks.step2.description', 'They enter their numbers into a branded calculator — no app download needed.'),
    getCopy('howitworks.step3.title', 'You get the lead'),
    getCopy('howitworks.step3.description', 'The moment they hit calculate, their contact info lands in your dashboard.'),
    getCopy('features.card1.title', 'Branded Microsite'),
    getCopy('features.card1.description', 'Your own page at socialcalcs.com/yourname.'),
    getCopy('features.card2.title', 'Embedded Calculators'),
    getCopy('features.card2.description', 'Mortgage, affordability, stress test, and more.'),
    getCopy('features.card3.title', 'PDF Lead Magnet'),
    getCopy('features.card3.description', 'Every calculation generates a branded PDF report.'),
    getCopy('features.card4.title', 'Lead Dashboard'),
    getCopy('features.card4.description', 'Every lead in one place with the numbers they ran.'),
    getCopy('pricing.pro.price_monthly', '20'),
    getCopy('cta_banner.headline', 'Ready to turn followers into clients?'),
    getCopy('cta_banner.subheadline', 'Join mortgage brokers and real estate agents already using SocialCalcs.'),
    getCopy('cta_banner.cta', 'Start Free — No credit card required'),
  ])

  const steps = [
    { number: '1', title: step1Title, description: step1Desc },
    { number: '2', title: step2Title, description: step2Desc },
    { number: '3', title: step3Title, description: step3Desc },
  ]

  const features = [
    { icon: '🖼️', title: feat1Title, description: feat1Desc },
    { icon: '🧮', title: feat2Title, description: feat2Desc },
    { icon: '📄', title: feat3Title, description: feat3Desc },
    { icon: '📊', title: feat4Title, description: feat4Desc },
  ]

  return (
    <>
      <Hero
        eyebrow={eyebrow}
        headline={headline}
        subheadline={subheadline}
        ctaPrimary={ctaPrimary}
        ctaSecondary={ctaSecondary}
      />
      <HowItWorks steps={steps} />
      <Features features={features} />
      <CalculatorPreview />
      <WhoItsFor />
      <SocialProof />
      <PricingTeaser proMonthlyPrice={proMonthlyPrice} />
      <CtaBanner headline={bannerHeadline} subheadline={bannerSubheadline} cta={bannerCta} />
    </>
  )
}
