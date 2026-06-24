import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="font-bold text-xl text-white mb-2">SocialCalcs</div>
            <p className="text-sm max-w-xs leading-relaxed">
              The lead engine for mortgage brokers and real estate agents.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-8 text-sm">
            <div className="flex flex-col gap-3">
              <span className="text-white font-medium">Product</span>
              <Link href="/#features" className="hover:text-white transition-colors">Features</Link>
              <Link href="/#how-it-works" className="hover:text-white transition-colors">How it works</Link>
              <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-white font-medium">Support</span>
              <a href="mailto:support@socialcalcs.com" className="hover:text-white transition-colors">Contact Us</a>
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-sm text-center md:text-left">
          © {new Date().getFullYear()} SocialCalcs. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
