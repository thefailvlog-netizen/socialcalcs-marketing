import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SocialCalcs — Turn your bio link into a lead machine',
  description: 'Branded microsites and calculators for mortgage brokers and real estate agents. Share once, capture leads forever.',
  openGraph: {
    title: 'SocialCalcs — Turn your bio link into a lead machine',
    description: 'Branded microsites and calculators for mortgage brokers and real estate agents.',
    url: 'https://socialcalcs.com',
    siteName: 'SocialCalcs',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Nav />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
