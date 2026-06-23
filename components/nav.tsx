'use client'

import Link from 'next/link'
import { useState } from 'react'

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.socialcalcs.com'

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-bold text-xl text-blue-600 tracking-tight">
          SocialCalcs
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <Link href="/#features" className="hover:text-blue-600 transition-colors">Features</Link>
          <Link href="/#how-it-works" className="hover:text-blue-600 transition-colors">How it works</Link>
          <Link href="/pricing" className="hover:text-blue-600 transition-colors">Pricing</Link>
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={`${APP_URL}/login`}
            className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors px-3 py-2"
          >
            Log in
          </a>
          <a
            href={`${APP_URL}/signup`}
            className="text-sm font-semibold bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get Started
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-gray-600"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 flex flex-col gap-4">
          <Link href="/#features" className="text-sm font-medium text-gray-600" onClick={() => setOpen(false)}>Features</Link>
          <Link href="/#how-it-works" className="text-sm font-medium text-gray-600" onClick={() => setOpen(false)}>How it works</Link>
          <Link href="/pricing" className="text-sm font-medium text-gray-600" onClick={() => setOpen(false)}>Pricing</Link>
          <hr className="border-gray-100" />
          <a href={`${APP_URL}/login`} className="text-sm font-medium text-gray-600">Log in</a>
          <a href={`${APP_URL}/signup`} className="text-sm font-semibold bg-blue-600 text-white px-4 py-2 rounded-lg text-center">
            Get Started
          </a>
        </div>
      )}
    </nav>
  )
}
