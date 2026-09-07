import type { Metadata } from 'next'
import { Bricolage_Grotesque, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  display: 'swap',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://socialcalcs.com'),
  title: 'SocialCalcs — The bio link for financial pros',
  description:
    'SocialCalcs gives mortgage brokers and real estate agents a branded mini bio site with financial calculators. Turn followers into leads.',
  openGraph: {
    title: 'SocialCalcs — The bio link for financial pros',
    description:
      'SocialCalcs gives mortgage brokers and real estate agents a branded mini bio site with financial calculators. Turn followers into leads.',
    url: 'https://socialcalcs.com',
    siteName: 'SocialCalcs',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${mono.variable}`}
      style={{ fontFamily: 'var(--font-bricolage), "Helvetica Neue", Arial, sans-serif' }}
    >
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
