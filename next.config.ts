import type { NextConfig } from 'next'

const SUPABASE_URL = process.env.SUPABASE_URL ?? 'https://jzopknytzwjitakkrsgw.supabase.co'

// Analytics only loads when a measurement ID is configured, so the CSP only
// widens to Google's domains in that case. With GA off the policy stays tight.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID

const scriptSrc = ["'self'", "'unsafe-inline'"]
const connectSrc = ["'self'", SUPABASE_URL]
const imgSrc = ["'self'", 'data:']

if (GA_ID) {
  scriptSrc.push('https://www.googletagmanager.com')
  connectSrc.push(
    'https://www.google-analytics.com',
    'https://*.google-analytics.com',
    'https://*.analytics.google.com',
    'https://www.googletagmanager.com',
    'https://*.googletagmanager.com'
  )
  imgSrc.push(
    'https://www.google-analytics.com',
    'https://*.google-analytics.com',
    'https://www.googletagmanager.com'
  )
}

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              `connect-src ${connectSrc.join(' ')}`,
              `img-src ${imgSrc.join(' ')}`,
              "font-src 'self' https://fonts.gstatic.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              `script-src ${scriptSrc.join(' ')}`,
              "frame-ancestors 'none'",
            ].join('; '),
          },
        ],
      },
    ]
  },
}

export default nextConfig
