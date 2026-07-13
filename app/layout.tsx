import type { Metadata } from 'next'
import { Roboto, Space_Grotesk, Hanken_Grotesk } from 'next/font/google'
import './globals.css'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-roboto',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
})

const hankenGrotesk = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-hanken-grotesk',
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
      className={`${roboto.variable} ${spaceGrotesk.variable} ${hankenGrotesk.variable}`}
      style={{ fontFamily: 'var(--font-hanken-grotesk), sans-serif' }}
    >
      <body>
        <Nav />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
