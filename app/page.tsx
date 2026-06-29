import { Hero } from '@/components/sections/hero'
import { HowItWorks } from '@/components/sections/how-it-works'
import { BioExamples } from '@/components/sections/features'
import { ToolsSection } from '@/components/sections/calculator-preview'
import { LeadsSection } from '@/components/sections/social-proof'
import { WhoItsFor } from '@/components/sections/who-its-for'
import { CtaBanner } from '@/components/sections/cta-banner'

export const revalidate = 60

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <BioExamples />
      <ToolsSection />
      <LeadsSection />
      <WhoItsFor />
      <CtaBanner />
    </>
  )
}
