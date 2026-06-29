# SocialCalcs Marketing Site Visual Rebuild

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace all visual files in the SocialCalcs marketing site with a new design that uses custom CSS tokens, Roboto/Space Grotesk/Hanken Grotesk fonts, and 7 home page sections + a pricing page with billing toggle.

**Architecture:** All sections are inline JSX in `app/page.tsx` or imported from focused component files. CSS design tokens live in `globals.css`. The nav and footer are client/server components respectively. `lib/copy.ts`, `lib/supabase.ts`, `app/admin/`, `next.config.ts`, `package.json`, `tsconfig.json`, `app/privacy/`, `app/terms/` are untouched.

**Tech Stack:** Next.js 15, Tailwind v4 (CSS-first, no tailwind.config.ts), `next/font/google`, React Server Components, TypeScript.

---

## File Map

| File | Action | Responsibility |
|---|---|---|
| `app/globals.css` | Replace | CSS vars, body defaults, @keyframes floaty |
| `app/layout.tsx` | Replace | Font loading, metadata, Nav+Footer wrapper |
| `components/nav.tsx` | Replace | Sticky nav with logo, links, CTA buttons |
| `components/footer.tsx` | Replace | Dark footer with 3-col grid + copyright |
| `app/page.tsx` | Replace | Server component, getCopy calls, 7 sections |
| `components/sections/hero.tsx` | Replace | 2-col hero with phone mockup + toast |
| `components/sections/how-it-works.tsx` | Replace | 3-step numbered grid |
| `components/sections/features.tsx` | Replace | Bio site examples with 3 phone mockups |
| `components/sections/calculator-preview.tsx` | Replace | Dark tools section with calc card + tile grid |
| `components/sections/social-proof.tsx` | Replace | Leads section with result card + PDF card |
| `components/sections/who-its-for.tsx` | Replace | 3 persona cards |
| `components/sections/cta-banner.tsx` | Replace | Final centered CTA |
| `components/sections/pricing-teaser.tsx` | Replace | Empty export (no longer used) |
| `app/pricing/page.tsx` | Replace | Client component with billing toggle, 3 tiers, FAQ |
| `components/pricing/billing-toggle.tsx` | Replace | Animated sliding pill toggle |
| `components/pricing/pricing-cards.tsx` | Replace | 3 tier cards, receives `annual: boolean` prop |
| `components/pricing/faq.tsx` | Replace | 4 FAQ cards |

---

## Task 1: globals.css — Design tokens, body defaults, keyframes

**Files:**
- Modify: `app/globals.css`

- [ ] **Step 1: Replace globals.css entirely**

```css
@import "tailwindcss";

:root {
  --bg: #f7f7f4;
  --ink: #15171c;
  --ink-soft: #5d626d;
  --line: #e6e6e0;
  --card: #ffffff;
  --dark: #101216;
  --accent: #10A37F;
  --r: 14px;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 80px;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}

body {
  background: var(--bg);
  color: var(--ink);
  -webkit-font-smoothing: antialiased;
}

@keyframes floaty {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-7px); }
}
```

- [ ] **Step 2: Verify it compiles**

```bash
cd /Users/mikepacione/Documents/Claude/Projects/socialcalcs-marketing && npx next build 2>&1 | tail -20
```

Expected: build succeeds or errors are only about other files not yet changed (no CSS parse errors).

- [ ] **Step 3: Commit**

```bash
cd /Users/mikepacione/Documents/Claude/Projects/socialcalcs-marketing && git add app/globals.css && git commit -m "style: add design tokens, body defaults, floaty keyframe"
```

---

## Task 2: layout.tsx — Fonts, metadata, Nav+Footer

**Files:**
- Modify: `app/layout.tsx`

- [ ] **Step 1: Replace layout.tsx**

```tsx
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
```

- [ ] **Step 2: Verify build**

```bash
cd /Users/mikepacione/Documents/Claude/Projects/socialcalcs-marketing && npx next build 2>&1 | tail -20
```

Expected: no font or layout errors.

- [ ] **Step 3: Commit**

```bash
cd /Users/mikepacione/Documents/Claude/Projects/socialcalcs-marketing && git add app/layout.tsx && git commit -m "feat: load Roboto, Space Grotesk, Hanken Grotesk; update OG metadata"
```

---

## Task 3: Nav component

**Files:**
- Modify: `components/nav.tsx`

- [ ] **Step 1: Replace nav.tsx**

```tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'rgba(247,247,244,0.82)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--line)',
        padding: '16px 32px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: 1200, margin: '0 auto' }}>
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: 9,
              background: 'var(--ink)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 17,
              fontFamily: 'var(--font-roboto), serif',
              fontWeight: 900,
              fontStyle: 'italic',
              lineHeight: 1,
              flexShrink: 0,
            }}
          >
            <span style={{ color: '#fff' }}>S</span>
            <span style={{ color: 'var(--accent)' }}>C</span>
          </div>
          <span
            style={{
              fontFamily: 'var(--font-roboto), serif',
              fontWeight: 700,
              fontSize: 16,
              color: 'var(--ink)',
              letterSpacing: '-0.01em',
            }}
          >
            Social<span style={{ color: 'var(--accent)' }}>Calcs</span>
          </span>
        </Link>

        {/* Center links — desktop */}
        <nav className="hidden md:flex" style={{ gap: 28, alignItems: 'center' }}>
          {[
            { label: 'Bio site', href: '/#bio' },
            { label: 'Tools', href: '/#tools' },
            { label: 'Pricing', href: '/pricing' },
          ].map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              style={{ fontSize: 14.5, fontWeight: 500, color: 'var(--ink-soft)', textDecoration: 'none' }}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Right CTAs — desktop */}
        <div className="hidden md:flex" style={{ alignItems: 'center', gap: 12 }}>
          <a
            href="https://app.socialcalcs.com/login"
            style={{ fontSize: 14.5, fontWeight: 500, color: 'var(--ink-soft)', textDecoration: 'none' }}
          >
            Log in
          </a>
          <a
            href="https://app.socialcalcs.com/signup"
            style={{
              fontSize: 14.5,
              fontWeight: 600,
              color: '#fff',
              background: 'var(--ink)',
              padding: '9px 18px',
              borderRadius: 'var(--r)',
              textDecoration: 'none',
              transition: 'background 0.18s ease',
            }}
            onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.background = 'var(--accent)')}
            onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.background = 'var(--ink)')}
          >
            Get started
          </a>
        </div>

        {/* Hamburger — mobile */}
        <button
          className="flex md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, color: 'var(--ink)' }}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {open ? (
              <>
                <line x1="4" y1="4" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="18" y1="4" x2="4" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </>
            ) : (
              <>
                <line x1="3" y1="7" x2="19" y2="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="3" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="3" y1="17" x2="19" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          style={{
            borderTop: '1px solid var(--line)',
            marginTop: 12,
            paddingTop: 16,
            display: 'flex',
            flexDirection: 'column',
            gap: 14,
          }}
        >
          {[
            { label: 'Bio site', href: '/#bio' },
            { label: 'Tools', href: '/#tools' },
            { label: 'Pricing', href: '/pricing' },
          ].map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              style={{ fontSize: 15, fontWeight: 500, color: 'var(--ink)', textDecoration: 'none' }}
            >
              {label}
            </Link>
          ))}
          <div style={{ display: 'flex', gap: 10, marginTop: 4 }}>
            <a
              href="https://app.socialcalcs.com/login"
              style={{ fontSize: 14, fontWeight: 500, color: 'var(--ink-soft)', textDecoration: 'none' }}
            >
              Log in
            </a>
            <a
              href="https://app.socialcalcs.com/signup"
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: '#fff',
                background: 'var(--ink)',
                padding: '8px 16px',
                borderRadius: 'var(--r)',
                textDecoration: 'none',
              }}
            >
              Get started
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
```

- [ ] **Step 2: Commit**

```bash
cd /Users/mikepacione/Documents/Claude/Projects/socialcalcs-marketing && git add components/nav.tsx && git commit -m "feat: rebuild nav with logo, anchor links, mobile hamburger"
```

---

## Task 4: Footer component

**Files:**
- Modify: `components/footer.tsx`

- [ ] **Step 1: Replace footer.tsx**

```tsx
import Link from 'next/link'

export function Footer() {
  return (
    <footer style={{ background: 'var(--dark)', color: '#fff', padding: '56px 32px 36px' }}>
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 40,
        }}
      >
        {/* Col 1: Logo + tagline */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
            <div
              style={{
                width: 30,
                height: 30,
                borderRadius: 8,
                background: 'rgba(255,255,255,0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 15,
                fontFamily: 'var(--font-roboto), serif',
                fontWeight: 900,
                fontStyle: 'italic',
              }}
            >
              <span style={{ color: '#fff' }}>S</span>
              <span style={{ color: 'var(--accent)' }}>C</span>
            </div>
            <span
              style={{
                fontFamily: 'var(--font-roboto), serif',
                fontWeight: 700,
                fontSize: 15,
                color: '#fff',
              }}
            >
              Social<span style={{ color: 'var(--accent)' }}>Calcs</span>
            </span>
          </div>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, maxWidth: 260 }}>
            The bio link for mortgage brokers, real estate agents, and financial pros.
          </p>
        </div>

        {/* Col 2: Product */}
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 14 }}>
            Product
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Bio site', href: '/#bio' },
              { label: 'Tools', href: '/#tools' },
              { label: 'Pricing', href: '/pricing' },
            ].map(({ label, href }) => (
              <Link key={label} href={href} style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', textDecoration: 'none' }}>
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Col 3: Support */}
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 14 }}>
            Support
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Contact us', href: 'mailto:support@socialcalcs.com' },
              { label: 'Privacy policy', href: '/privacy' },
              { label: 'Terms of service', href: '/terms' },
            ].map(({ label, href }) => (
              <a key={label} href={href} style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', textDecoration: 'none' }}>
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          maxWidth: 1200,
          margin: '36px auto 0',
          paddingTop: 24,
          borderTop: '1px solid rgba(255,255,255,0.1)',
          fontSize: 13,
          color: 'rgba(255,255,255,0.35)',
        }}
      >
        © 2026 SocialCalcs. All rights reserved.
      </div>
    </footer>
  )
}
```

- [ ] **Step 2: Commit**

```bash
cd /Users/mikepacione/Documents/Claude/Projects/socialcalcs-marketing && git add components/footer.tsx && git commit -m "feat: rebuild footer with 3-col grid, dark bg, product + support links"
```

---

## Task 5: Hero section

**Files:**
- Modify: `components/sections/hero.tsx`

- [ ] **Step 1: Replace hero.tsx**

```tsx
export function Hero() {
  return (
    <section style={{ padding: '80px 32px 70px' }}>
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: 56,
          alignItems: 'center',
        }}
      >
        {/* Left column */}
        <div>
          {/* Eyebrow pill */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 7,
              border: '1px solid var(--line)',
              background: 'var(--card)',
              borderRadius: 999,
              padding: '6px 12px',
              marginBottom: 24,
            }}
          >
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
            <span
              style={{
                fontSize: 12.5,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                color: 'var(--ink-soft)',
              }}
            >
              The bio link for financial pros
            </span>
          </div>

          {/* H1 */}
          <h1
            style={{
              fontFamily: 'var(--font-roboto), serif',
              fontWeight: 700,
              fontSize: 'clamp(42px, 5.2vw, 72px)',
              lineHeight: 1.0,
              letterSpacing: '-0.035em',
              margin: '0 0 20px',
            }}
          >
            Your bio link,{' '}
            <span style={{ color: 'var(--accent)' }}>built to win clients.</span>
          </h1>

          {/* Body */}
          <p style={{ fontSize: 19, color: 'var(--ink-soft)', maxWidth: 480, lineHeight: 1.6, margin: '0 0 32px' }}>
            SocialCalcs gives you a polished mini bio site — your license, your contact, all your links — with financial calculators built right in. Every number a visitor runs becomes a lead and a branded PDF report.
          </p>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 16 }}>
            <a
              href="https://app.socialcalcs.com/signup"
              style={{
                background: 'var(--accent)',
                color: '#fff',
                fontWeight: 600,
                fontSize: 15,
                padding: '15px 26px',
                borderRadius: 'var(--r)',
                textDecoration: 'none',
              }}
            >
              Try it free →
            </a>
            <a
              href="/#bio"
              style={{
                background: 'var(--card)',
                color: 'var(--ink)',
                fontWeight: 600,
                fontSize: 15,
                padding: '15px 26px',
                borderRadius: 'var(--r)',
                border: '1px solid var(--line)',
                textDecoration: 'none',
              }}
            >
              See examples
            </a>
          </div>

          {/* Microcopy */}
          <p style={{ fontSize: 13.5, color: 'var(--ink-soft)', margin: 0 }}>
            No credit card. Live in an afternoon. Cancel anytime.
          </p>
        </div>

        {/* Right column — Phone mockup */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ position: 'relative', maxWidth: 300, width: '100%' }}>
            <div
              style={{
                background: '#fff',
                border: '1px solid var(--line)',
                borderRadius: 30,
                boxShadow: '0 30px 60px -28px rgba(20,22,28,0.32)',
                overflow: 'hidden',
              }}
            >
              {/* Accent header band */}
              <div style={{ height: 84, background: 'var(--accent)' }} />

              {/* Phone content */}
              <div style={{ padding: '0 20px 22px', marginTop: -34 }}>
                {/* Avatar */}
                <div
                  style={{
                    width: 68,
                    height: 68,
                    borderRadius: '50%',
                    border: '4px solid #fff',
                    background: 'repeating-linear-gradient(45deg, #e0e0da 0px, #e0e0da 4px, #f0f0ec 4px, #f0f0ec 8px)',
                    marginBottom: 8,
                  }}
                />
                <p style={{ fontFamily: 'var(--font-space-grotesk), sans-serif', fontWeight: 600, fontSize: 19, margin: '0 0 3px', color: 'var(--ink)' }}>
                  Sarah Jones
                </p>
                <p style={{ fontSize: 12.5, color: 'var(--ink-soft)', margin: '0 0 10px' }}>
                  Licensed Mortgage Broker · #M12345
                </p>

                {/* Contact chips */}
                <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap', marginBottom: 16 }}>
                  {['Email', 'Call', 'sarahjones.ca'].map((chip) => (
                    <span
                      key={chip}
                      style={{
                        fontSize: 10.5,
                        fontWeight: 600,
                        border: '1px solid var(--line)',
                        borderRadius: 999,
                        padding: '4px 10px',
                        color: 'var(--ink)',
                      }}
                    >
                      {chip}
                    </span>
                  ))}
                </div>

                {/* Link rows */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
                  <div
                    style={{
                      background: 'var(--accent)',
                      color: '#fff',
                      borderRadius: 11,
                      padding: '12px 14px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      fontSize: 13,
                      fontWeight: 600,
                    }}
                  >
                    <span>Mortgage Payment Calculator</span>
                    <span>→</span>
                  </div>
                  {['Book a consultation →', 'Today\'s rate sheet (PDF) →'].map((label) => (
                    <div
                      key={label}
                      style={{
                        border: '1px solid var(--line)',
                        borderRadius: 11,
                        padding: '12px 14px',
                        fontSize: 13,
                        fontWeight: 500,
                        color: 'var(--ink)',
                      }}
                    >
                      {label}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating toast */}
            <div
              style={{
                position: 'absolute',
                bottom: 6,
                right: -6,
                background: 'var(--ink)',
                color: '#fff',
                padding: '12px 16px',
                borderRadius: 12,
                boxShadow: '0 18px 36px -16px rgba(20,22,28,0.5)',
                animation: 'floaty 5s ease-in-out infinite',
                minWidth: 190,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 2 }}>
                <span
                  style={{
                    width: 9,
                    height: 9,
                    borderRadius: '50%',
                    background: 'var(--accent)',
                    boxShadow: '0 0 0 4px rgba(16,163,127,0.25)',
                    flexShrink: 0,
                  }}
                />
                <span style={{ fontSize: 13, fontWeight: 600 }}>New lead captured</span>
              </div>
              <p style={{ fontSize: 11.5, opacity: 0.6, margin: 0, paddingLeft: 16 }}>
                jordan.m@email.com · just now
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Trust line */}
      <p
        style={{
          textAlign: 'center',
          marginTop: 64,
          fontSize: 13,
          fontWeight: 600,
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
          color: 'var(--ink-soft)',
        }}
      >
        Trusted by mortgage brokers &amp; real estate agents across North America
      </p>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
cd /Users/mikepacione/Documents/Claude/Projects/socialcalcs-marketing && git add components/sections/hero.tsx && git commit -m "feat: rebuild hero with phone mockup, toast, trust line"
```

---

## Task 6: How It Works section

**Files:**
- Modify: `components/sections/how-it-works.tsx`

- [ ] **Step 1: Replace how-it-works.tsx**

```tsx
const steps = [
  {
    number: '01',
    title: 'Build your page',
    body: 'Add your name, license, contact, links, and the calculators you want — fully branded to you.',
  },
  {
    number: '02',
    title: 'Share one link',
    body: 'Drop it in your Instagram bio, LinkedIn, listings, or email signature. That\'s the whole install.',
  },
  {
    number: '03',
    title: 'Turn taps into leads',
    body: 'Visitors run a calculator, get a branded PDF, and their contact details land in your inbox.',
  },
]

export function HowItWorks() {
  return (
    <section
      style={{
        background: 'var(--card)',
        borderTop: '1px solid var(--line)',
        borderBottom: '1px solid var(--line)',
        padding: '62px 32px',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 28,
        }}
      >
        {steps.map(({ number, title, body }) => (
          <div key={number}>
            <p
              style={{
                fontFamily: 'var(--font-space-grotesk), sans-serif',
                fontWeight: 700,
                fontSize: 38,
                color: 'var(--accent)',
                lineHeight: 1,
                margin: 0,
              }}
            >
              {number}
            </p>
            <h3
              style={{
                fontFamily: 'var(--font-roboto), serif',
                fontWeight: 600,
                fontSize: 20,
                margin: '12px 0 6px',
                color: 'var(--ink)',
              }}
            >
              {title}
            </h3>
            <p style={{ fontSize: 15, color: 'var(--ink-soft)', margin: 0, lineHeight: 1.6 }}>{body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
cd /Users/mikepacione/Documents/Claude/Projects/socialcalcs-marketing && git add components/sections/how-it-works.tsx && git commit -m "feat: rebuild how-it-works with numbered steps"
```

---

## Task 7: Bio Examples section (features.tsx repurposed)

**Files:**
- Modify: `components/sections/features.tsx`

- [ ] **Step 1: Replace features.tsx**

```tsx
const profiles = [
  {
    accent: '#10A37F',
    name: 'Sarah Jones',
    subtitle: 'Mortgage Broker #M12345',
    links: [
      { label: 'Mortgage Payment Calc', filled: true },
      { label: 'Mortgage Penalty Calc', filled: false, bullet: '#10A37F' },
      { label: 'Book a consultation', filled: false },
    ],
  },
  {
    accent: '#5B6CFF',
    name: 'Marcus Lee',
    subtitle: 'Real Estate Agent #RE8842',
    links: [
      { label: 'Affordability Calculator', filled: true },
      { label: 'Browse my listings', filled: false },
      { label: 'Book a showing', filled: false },
    ],
  },
  {
    accent: '#E08A2B',
    name: 'Priya Shah',
    subtitle: 'Financial Advisor #FA3310',
    links: [
      { label: 'Compound Interest Calc', filled: true },
      { label: 'Investment Scenario Calc', filled: false, bullet: '#E08A2B' },
      { label: 'Book an intro call', filled: false },
    ],
  },
]

export function Features() {
  return (
    <section id="bio" style={{ padding: '88px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Eyebrow */}
        <p
          style={{
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            margin: '0 0 14px',
          }}
        >
          Your mini bio site
        </p>

        {/* H2 */}
        <h2
          style={{
            fontFamily: 'var(--font-roboto), serif',
            fontWeight: 700,
            fontSize: 'clamp(30px, 3.6vw, 46px)',
            lineHeight: 1.04,
            letterSpacing: '-0.025em',
            margin: '0 0 18px',
            maxWidth: 700,
          }}
        >
          More than a link in bio. Your whole practice on one page.
        </h2>

        {/* Body */}
        <p style={{ fontSize: 17, color: 'var(--ink-soft)', maxWidth: 620, lineHeight: 1.65, margin: '0 0 48px' }}>
          Your headshot, name, license and credentials, contact details, and every important link — fully customizable to match your brand. Pick your colors, reorder your links, and embed live calculators anywhere on the page.
        </p>

        {/* Phone mockups */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 28,
          }}
        >
          {profiles.map(({ accent, name, subtitle, links }) => (
            <div
              key={name}
              style={{
                background: '#fff',
                border: '1px solid var(--line)',
                borderRadius: 28,
                boxShadow: '0 24px 48px -28px rgba(20,22,28,0.28)',
                overflow: 'hidden',
                maxWidth: 270,
              }}
            >
              <div style={{ height: 74, background: accent }} />
              <div style={{ padding: '0 18px 20px', marginTop: -30 }}>
                <div
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: '50%',
                    border: '3px solid #fff',
                    background: 'repeating-linear-gradient(45deg, #e0e0da 0px, #e0e0da 4px, #f0f0ec 4px, #f0f0ec 8px)',
                    marginBottom: 8,
                  }}
                />
                <p style={{ fontFamily: 'var(--font-space-grotesk), sans-serif', fontWeight: 600, fontSize: 17, margin: '0 0 3px', color: 'var(--ink)' }}>
                  {name}
                </p>
                <p style={{ fontSize: 11.5, color: 'var(--ink-soft)', margin: '0 0 14px' }}>{subtitle}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {links.map(({ label, filled, bullet }) => (
                    <div
                      key={label}
                      style={{
                        background: filled ? accent : 'transparent',
                        color: filled ? '#fff' : 'var(--ink)',
                        border: filled ? 'none' : '1px solid var(--line)',
                        borderRadius: 10,
                        padding: '10px 12px',
                        fontSize: 12.5,
                        fontWeight: filled ? 600 : 500,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 6,
                      }}
                    >
                      {bullet && !filled && (
                        <span style={{ width: 6, height: 6, borderRadius: '50%', background: bullet, flexShrink: 0 }} />
                      )}
                      {label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
cd /Users/mikepacione/Documents/Claude/Projects/socialcalcs-marketing && git add components/sections/features.tsx && git commit -m "feat: rebuild bio examples section with 3 phone mockups"
```

---

## Task 8: Built-in Tools section (calculator-preview.tsx repurposed)

**Files:**
- Modify: `components/sections/calculator-preview.tsx`

- [ ] **Step 1: Replace calculator-preview.tsx**

```tsx
const tiles = [
  { name: 'Mortgage Payment', sub: 'Principal, rate, and amortization' },
  { name: 'Affordability', sub: 'Max purchase from income and debts' },
  { name: 'Compound Interest', sub: 'Investment growth over time' },
  { name: 'Mortgage Penalty', sub: 'IRD vs. 3-month interest' },
  { name: 'Scenario Comparison', sub: 'Side-by-side mortgage options' },
  { name: 'Investment Projection', sub: 'Future value with contributions' },
]

export function CalculatorPreview() {
  return (
    <section id="tools" style={{ background: 'var(--dark)', color: '#fff', padding: '88px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* 2-col layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: 56,
            alignItems: 'center',
            marginBottom: 64,
          }}
        >
          {/* Left */}
          <div>
            <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
              Built-in tools
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-roboto), serif',
                fontWeight: 700,
                fontSize: 'clamp(30px, 3.6vw, 46px)',
                lineHeight: 1.04,
                letterSpacing: '-0.025em',
                margin: '0 0 18px',
                color: '#fff',
              }}
            >
              The link that does the math.
            </h2>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.66)', maxWidth: 460, lineHeight: 1.65, margin: '0 0 28px' }}>
              Drop a live calculator straight onto your page. Visitors get a real answer in seconds — no signup, no download — and you capture the lead behind every result.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'Fully customizable inputs, branding, and results.',
                'Embed one tool or a whole suite on a single page.',
                'Mobile-first — exactly where your followers are.',
              ].map((bullet) => (
                <div key={bullet} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 15 }}>
                  <span style={{ color: 'var(--accent)', fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</span>
                  <span style={{ color: 'rgba(255,255,255,0.82)' }}>{bullet}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Calculator card */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                background: '#fff',
                borderRadius: 16,
                padding: 22,
                color: 'var(--ink)',
                boxShadow: '0 30px 60px -24px rgba(0,0,0,0.5)',
                width: '100%',
                maxWidth: 340,
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-space-grotesk), sans-serif',
                  fontWeight: 600,
                  fontSize: 14,
                  textTransform: 'uppercase',
                  letterSpacing: '0.03em',
                  color: 'var(--ink-soft)',
                  margin: '0 0 16px',
                }}
              >
                Mortgage Payment
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 14 }}>
                {[
                  { label: 'Home price', value: '$650,000' },
                  { label: 'Down payment', value: '$130,000' },
                  { label: 'Rate', value: '4.99%' },
                  { label: 'Term', value: '25 yrs' },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <p style={{ fontSize: 11, color: 'var(--ink-soft)', margin: '0 0 2px', fontWeight: 500 }}>{label}</p>
                    <p style={{ fontFamily: 'var(--font-space-grotesk), sans-serif', fontWeight: 600, fontSize: 15, margin: 0 }}>{value}</p>
                  </div>
                ))}
              </div>
              <div
                style={{
                  background: 'var(--bg)',
                  borderRadius: 10,
                  padding: 14,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 14,
                }}
              >
                <p style={{ fontSize: 13, color: 'var(--ink-soft)', margin: 0 }}>Monthly payment</p>
                <p
                  style={{
                    fontFamily: 'var(--font-space-grotesk), sans-serif',
                    fontWeight: 700,
                    fontSize: 26,
                    color: 'var(--accent)',
                    margin: 0,
                  }}
                >
                  $2,847
                </p>
              </div>
              <button
                style={{
                  width: '100%',
                  background: 'var(--accent)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 10,
                  padding: 13,
                  fontSize: 14.5,
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Calculate &amp; get my PDF report →
              </button>
            </div>
          </div>
        </div>

        {/* Tile grid */}
        <div>
          <p
            style={{
              fontSize: 13,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              color: 'rgba(255,255,255,0.5)',
              margin: '0 0 18px',
            }}
          >
            A calculator for every conversation
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
              gap: 14,
            }}
          >
            {tiles.map(({ name, sub }) => (
              <div
                key={name}
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 12,
                  padding: 18,
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-space-grotesk), sans-serif',
                    fontWeight: 600,
                    fontSize: 15.5,
                    margin: '0 0 4px',
                    color: '#fff',
                  }}
                >
                  {name}
                </p>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', margin: 0 }}>{sub}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.45)', marginTop: 16 }}>
            Stress test, refinance, and rent-vs-buy calculators — plus new tools added every month.
          </p>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
cd /Users/mikepacione/Documents/Claude/Projects/socialcalcs-marketing && git add components/sections/calculator-preview.tsx && git commit -m "feat: rebuild tools section with dark bg, calc card, tile grid"
```

---

## Task 9: Leads section (social-proof.tsx repurposed)

**Files:**
- Modify: `components/sections/social-proof.tsx`

- [ ] **Step 1: Replace social-proof.tsx**

```tsx
export function SocialProof() {
  return (
    <section style={{ padding: '88px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: 56,
            alignItems: 'center',
          }}
        >
          {/* Left */}
          <div>
            <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
              From calculation to client
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-roboto), serif',
                fontWeight: 700,
                fontSize: 'clamp(30px, 3.6vw, 46px)',
                lineHeight: 1.04,
                letterSpacing: '-0.025em',
                margin: '0 0 18px',
              }}
            >
              Every calculation becomes a lead.
            </h2>
            <p style={{ fontSize: 17, color: 'var(--ink-soft)', maxWidth: 460, lineHeight: 1.65, margin: '0 0 28px' }}>
              Link any tool to your own call-to-action — &apos;Get pre-approved,&apos; &apos;Book a call,&apos; &apos;Download the full report.&apos; The moment a visitor runs the numbers, they receive a personalized, branded PDF, and their contact details land in your dashboard.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'Custom CTAs on every calculator and link.',
                'Branded PDF reports, emailed automatically.',
                'Follow up with the exact numbers they ran.',
              ].map((bullet) => (
                <div key={bullet} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 15 }}>
                  <span style={{ color: 'var(--accent)', fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</span>
                  <span style={{ color: 'var(--ink-soft)' }}>{bullet}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — layered visual */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative', minHeight: 380, display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', maxWidth: 360 }}>
              {/* Result card */}
              <div
                style={{
                  position: 'relative',
                  zIndex: 2,
                  width: 260,
                  background: 'var(--card)',
                  border: '1px solid var(--line)',
                  borderRadius: 16,
                  boxShadow: '0 24px 48px -24px rgba(20,22,28,0.2)',
                  padding: 18,
                }}
              >
                <p style={{ fontSize: 12, color: 'var(--ink-soft)', margin: '0 0 4px' }}>Your monthly payment</p>
                <p
                  style={{
                    fontFamily: 'var(--font-space-grotesk), sans-serif',
                    fontWeight: 700,
                    fontSize: 30,
                    color: 'var(--accent)',
                    margin: '0 0 16px',
                  }}
                >
                  $2,847
                </p>
                <div style={{ position: 'relative' }}>
                  <button
                    style={{
                      width: '100%',
                      background: 'var(--ink)',
                      color: '#fff',
                      border: 'none',
                      borderRadius: 10,
                      padding: 13,
                      fontSize: 13.5,
                      fontWeight: 600,
                      cursor: 'pointer',
                      textAlign: 'left',
                    }}
                  >
                    Get my pre-approval report →
                  </button>
                  <span
                    style={{
                      position: 'absolute',
                      right: -8,
                      bottom: -12,
                      width: 20,
                      height: 20,
                      borderRadius: '50%',
                      background: 'var(--accent)',
                      boxShadow: '0 0 0 5px rgba(16,163,127,0.25)',
                    }}
                  />
                </div>
              </div>

              {/* PDF report card */}
              <div
                style={{
                  position: 'absolute',
                  top: 24,
                  right: 0,
                  zIndex: 1,
                  width: 230,
                  background: '#fff',
                  border: '1px solid var(--line)',
                  borderRadius: 12,
                  boxShadow: '0 28px 56px -26px rgba(20,22,28,0.4)',
                  overflow: 'hidden',
                  transform: 'rotate(5deg)',
                }}
              >
                <div style={{ background: 'var(--accent)', color: '#fff', padding: '14px 16px' }}>
                  <p style={{ fontFamily: 'var(--font-space-grotesk), sans-serif', fontWeight: 700, fontSize: 13, margin: '0 0 2px' }}>
                    Mortgage Payment Report
                  </p>
                  <p style={{ fontSize: 10.5, opacity: 0.85, margin: 0 }}>Prepared by Sarah Jones</p>
                </div>
                <div style={{ padding: '14px 16px' }}>
                  <p style={{ fontSize: 10.5, color: 'var(--ink-soft)', margin: '0 0 10px' }}>Prepared for Jordan M.</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    {[
                      { label: 'Home price', value: '$650,000' },
                      { label: 'Down payment', value: '$130,000' },
                      { label: 'Rate / term', value: '4.99% · 25y' },
                    ].map(({ label, value }) => (
                      <div key={label} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11 }}>
                        <span style={{ color: 'var(--ink-soft)' }}>{label}</span>
                        <span style={{ fontWeight: 600, color: 'var(--ink)' }}>{value}</span>
                      </div>
                    ))}
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11 }}>
                      <span style={{ color: 'var(--ink-soft)' }}>Monthly payment</span>
                      <span style={{ fontFamily: 'var(--font-space-grotesk), sans-serif', fontWeight: 700, color: 'var(--accent)' }}>$2,847</span>
                    </div>
                  </div>
                  <div style={{ borderTop: '1px dashed var(--line)', marginTop: 10, paddingTop: 8 }}>
                    <p style={{ fontSize: 9.5, color: 'var(--ink-soft)', margin: 0, lineHeight: 1.5 }}>
                      Sarah Jones · Licensed Mortgage Broker · sarahjones.ca · 604-555-0142
                    </p>
                  </div>
                </div>
              </div>

              {/* Lead chip */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 6,
                  left: 0,
                  zIndex: 3,
                  background: 'var(--ink)',
                  color: '#fff',
                  padding: '9px 13px',
                  borderRadius: 10,
                  fontSize: 12,
                  fontWeight: 600,
                  boxShadow: '0 8px 20px -8px rgba(20,22,28,0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 7,
                }}
              >
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
                Lead + report sent
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
cd /Users/mikepacione/Documents/Claude/Projects/socialcalcs-marketing && git add components/sections/social-proof.tsx && git commit -m "feat: rebuild leads section with result card, PDF card, lead chip"
```

---

## Task 10: Who It's For section

**Files:**
- Modify: `components/sections/who-its-for.tsx`

- [ ] **Step 1: Replace who-its-for.tsx**

```tsx
const personas = [
  {
    title: 'Mortgage brokers',
    bullets: [
      'Turn your Instagram bio into a working lead form.',
      'Send a calculator link instead of a generic rate sheet.',
      'Every calculation captures their contact automatically.',
    ],
    comingSoon: false,
  },
  {
    title: 'Real estate agents',
    bullets: [
      'Give buyers an affordability calculator tied to your brand.',
      'Embed your microsite link in every listing.',
      'Capture buyer leads before they find another agent.',
    ],
    comingSoon: false,
  },
  {
    title: 'Financial advisors',
    bullets: [
      'Share retirement and investment calculators from your bio.',
      'Capture leads from LinkedIn automatically.',
      'Branded tools that position you as the expert.',
    ],
    comingSoon: true,
  },
]

export function WhoItsFor() {
  return (
    <section
      style={{
        background: 'var(--card)',
        borderTop: '1px solid var(--line)',
        borderBottom: '1px solid var(--line)',
        padding: '80px 32px',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
          Who it&apos;s for
        </p>
        <h2
          style={{
            fontFamily: 'var(--font-roboto), serif',
            fontWeight: 700,
            fontSize: 'clamp(30px, 3.6vw, 46px)',
            lineHeight: 1.04,
            letterSpacing: '-0.025em',
            margin: '0 0 46px',
          }}
        >
          If you sell with numbers, this is your edge.
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 20,
          }}
        >
          {personas.map(({ title, bullets, comingSoon }) => (
            <div
              key={title}
              style={{
                background: 'var(--bg)',
                border: '1px solid var(--line)',
                borderRadius: 'var(--r)',
                padding: 28,
                position: 'relative',
              }}
            >
              {comingSoon && (
                <span
                  style={{
                    position: 'absolute',
                    top: 18,
                    right: 18,
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    color: 'var(--ink-soft)',
                    border: '1px solid var(--line)',
                    borderRadius: 999,
                    padding: '4px 10px',
                  }}
                >
                  Coming soon
                </span>
              )}
              <h3
                style={{
                  fontFamily: 'var(--font-roboto), serif',
                  fontWeight: 700,
                  fontSize: 20,
                  margin: '0 0 18px',
                  color: 'var(--ink)',
                }}
              >
                {title}
              </h3>
              <ul
                style={{
                  listStyle: 'none',
                  margin: 0,
                  padding: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                  opacity: comingSoon ? 0.72 : 1,
                }}
              >
                {bullets.map((bullet) => (
                  <li key={bullet} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 15, color: 'var(--ink-soft)', lineHeight: 1.5 }}>
                    <span style={{ color: 'var(--accent)', fontWeight: 700, flexShrink: 0 }}>✓</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
cd /Users/mikepacione/Documents/Claude/Projects/socialcalcs-marketing && git add components/sections/who-its-for.tsx && git commit -m "feat: rebuild who-its-for with 3 persona cards, coming soon badge"
```

---

## Task 11: Final CTA Banner

**Files:**
- Modify: `components/sections/cta-banner.tsx`

- [ ] **Step 1: Replace cta-banner.tsx**

```tsx
export function CtaBanner() {
  return (
    <section style={{ padding: '96px 32px', textAlign: 'center' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <h2
          style={{
            fontFamily: 'var(--font-roboto), serif',
            fontWeight: 700,
            fontSize: 'clamp(34px, 4.6vw, 58px)',
            lineHeight: 1.0,
            letterSpacing: '-0.03em',
            margin: '0 0 20px',
          }}
        >
          Your bio link could be your best salesperson.
        </h2>
        <p style={{ fontSize: 18, color: 'var(--ink-soft)', maxWidth: 520, margin: '0 auto 32px', lineHeight: 1.6 }}>
          Build your page, embed your calculators, and start turning followers into clients today.
        </p>
        <a
          href="https://app.socialcalcs.com/signup"
          style={{
            display: 'inline-block',
            background: 'var(--accent)',
            color: '#fff',
            fontWeight: 600,
            fontSize: 16,
            padding: '16px 30px',
            borderRadius: 'var(--r)',
            textDecoration: 'none',
            marginBottom: 14,
          }}
        >
          Try it now — free →
        </a>
        <p style={{ fontSize: 13, color: 'var(--ink-soft)', margin: 0 }}>No credit card required.</p>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
cd /Users/mikepacione/Documents/Claude/Projects/socialcalcs-marketing && git add components/sections/cta-banner.tsx && git commit -m "feat: rebuild final CTA banner"
```

---

## Task 12: pricing-teaser.tsx — empty stub

**Files:**
- Modify: `components/sections/pricing-teaser.tsx`

- [ ] **Step 1: Replace pricing-teaser.tsx with empty export**

```tsx
export function PricingTeaser() {
  return null
}
```

- [ ] **Step 2: Commit**

```bash
cd /Users/mikepacione/Documents/Claude/Projects/socialcalcs-marketing && git add components/sections/pricing-teaser.tsx && git commit -m "chore: stub out pricing-teaser (replaced by dedicated pricing page)"
```

---

## Task 13: Home page (app/page.tsx)

**Files:**
- Modify: `app/page.tsx`

Note: The sections no longer accept props from getCopy — the copy is now hardcoded in the components. We keep the revalidate export and a minimal getCopy call to preserve the infrastructure connection.

- [ ] **Step 1: Replace app/page.tsx**

```tsx
import { getCopy } from '@/lib/copy'
import { Hero } from '@/components/sections/hero'
import { HowItWorks } from '@/components/sections/how-it-works'
import { Features } from '@/components/sections/features'
import { CalculatorPreview } from '@/components/sections/calculator-preview'
import { SocialProof } from '@/components/sections/social-proof'
import { WhoItsFor } from '@/components/sections/who-its-for'
import { CtaBanner } from '@/components/sections/cta-banner'

export const revalidate = 60

export default async function HomePage() {
  // Keep getCopy infrastructure warm; add editable copy keys here as needed
  await getCopy('site.active', 'true')

  return (
    <>
      <Hero />
      <HowItWorks />
      <Features />
      <CalculatorPreview />
      <SocialProof />
      <WhoItsFor />
      <CtaBanner />
    </>
  )
}
```

- [ ] **Step 2: Commit**

```bash
cd /Users/mikepacione/Documents/Claude/Projects/socialcalcs-marketing && git add app/page.tsx && git commit -m "feat: wire up home page with 7 rebuilt sections"
```

---

## Task 14: Pricing components — BillingToggle

**Files:**
- Modify: `components/pricing/billing-toggle.tsx`

- [ ] **Step 1: Replace billing-toggle.tsx**

```tsx
'use client'

interface BillingToggleProps {
  annual: boolean
  onChange: (annual: boolean) => void
}

export function BillingToggle({ annual, onChange }: BillingToggleProps) {
  return (
    <div
      style={{
        display: 'inline-flex',
        position: 'relative',
        background: 'var(--card)',
        border: '1px solid var(--line)',
        borderRadius: 999,
        padding: 4,
        marginTop: 30,
      }}
    >
      {/* Sliding pill */}
      <div
        style={{
          position: 'absolute',
          top: 4,
          left: 4,
          height: 'calc(100% - 8px)',
          width: 'calc(50% - 4px)',
          background: 'var(--ink)',
          borderRadius: 999,
          transform: annual ? 'translateX(100%)' : 'translateX(0)',
          transition: 'transform 0.22s ease',
          pointerEvents: 'none',
        }}
      />
      {[
        { label: 'Monthly', value: false },
        { label: 'Annual −20%', value: true, accent: true },
      ].map(({ label, value, accent }) => (
        <button
          key={label}
          onClick={() => onChange(value)}
          style={{
            position: 'relative',
            zIndex: 1,
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '9px 20px',
            borderRadius: 999,
            fontSize: 14,
            fontWeight: 600,
            color: annual === value ? '#fff' : 'var(--ink-soft)',
            transition: 'color 0.22s ease',
            whiteSpace: 'nowrap',
          }}
        >
          {accent ? (
            <>
              Annual{' '}
              <span style={{ color: annual ? 'var(--accent)' : 'var(--ink-soft)' }}>−20%</span>
            </>
          ) : (
            label
          )}
        </button>
      ))}
    </div>
  )
}
```

- [ ] **Step 2: Commit**

```bash
cd /Users/mikepacione/Documents/Claude/Projects/socialcalcs-marketing && git add components/pricing/billing-toggle.tsx && git commit -m "feat: rebuild billing toggle with animated sliding pill"
```

---

## Task 15: Pricing components — PricingCards

**Files:**
- Modify: `components/pricing/pricing-cards.tsx`

- [ ] **Step 1: Replace pricing-cards.tsx**

```tsx
interface PricingCardsProps {
  annual: boolean
}

export function PricingCards({ annual }: PricingCardsProps) {
  const proPrice = annual ? '$16' : '$20'
  const proBilled = annual ? 'billed $192/year' : 'billed monthly'

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 20,
        alignItems: 'start',
        maxWidth: 1100,
        margin: '0 auto',
        padding: '24px 32px 80px',
      }}
    >
      {/* Starter */}
      <div
        style={{
          background: 'var(--card)',
          border: '1px solid var(--line)',
          borderRadius: 18,
          padding: 30,
        }}
      >
        <p style={{ fontFamily: 'var(--font-space-grotesk), sans-serif', fontWeight: 700, fontSize: 18, margin: '0 0 4px', color: 'var(--ink)' }}>
          Starter
        </p>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, margin: '14px 0 4px' }}>
          <span style={{ fontFamily: 'var(--font-space-grotesk), sans-serif', fontWeight: 700, fontSize: 38, color: 'var(--ink)' }}>$0</span>
          <span style={{ fontSize: 14, color: 'var(--ink-soft)' }}>/forever</span>
        </div>
        <p style={{ fontSize: 13, color: 'var(--ink-soft)', margin: '0 0 22px' }}>No credit card required</p>
        <a
          href="https://app.socialcalcs.com/signup"
          style={{
            display: 'block',
            textAlign: 'center',
            background: 'var(--bg)',
            color: 'var(--ink)',
            border: '1px solid var(--line)',
            borderRadius: 10,
            padding: '12px 0',
            fontWeight: 600,
            fontSize: 15,
            textDecoration: 'none',
            marginBottom: 24,
          }}
        >
          Start free
        </a>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            'Your mini bio site',
            '2 built-in calculators',
            'Unlimited leads',
            'PDF reports (SocialCalcs badge)',
          ].map((f) => (
            <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 9, fontSize: 14.5, color: 'var(--ink-soft)' }}>
              <span style={{ color: 'var(--accent)', fontWeight: 700, flexShrink: 0 }}>✓</span>
              {f}
            </li>
          ))}
        </ul>
      </div>

      {/* Pro */}
      <div
        style={{
          background: 'var(--ink)',
          borderRadius: 18,
          padding: 30,
          position: 'relative',
          boxShadow: '0 30px 60px -28px rgba(20,22,28,0.4)',
        }}
      >
        <span
          style={{
            position: 'absolute',
            top: 24,
            right: 24,
            background: 'var(--accent)',
            color: '#fff',
            borderRadius: 999,
            padding: '5px 12px',
            fontSize: 11,
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
          }}
        >
          Most popular
        </span>
        <p style={{ fontFamily: 'var(--font-space-grotesk), sans-serif', fontWeight: 700, fontSize: 18, margin: '0 0 4px', color: '#fff' }}>
          Pro
        </p>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, margin: '14px 0 4px' }}>
          <span style={{ fontFamily: 'var(--font-space-grotesk), sans-serif', fontWeight: 700, fontSize: 38, color: '#fff' }}>{proPrice}</span>
          <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)' }}>/mo</span>
        </div>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', margin: '0 0 22px' }}>{proBilled}</p>
        <a
          href="https://app.socialcalcs.com/signup"
          style={{
            display: 'block',
            textAlign: 'center',
            background: 'var(--accent)',
            color: '#fff',
            borderRadius: 10,
            padding: '12px 0',
            fontWeight: 600,
            fontSize: 15,
            textDecoration: 'none',
            marginBottom: 24,
          }}
        >
          Start free trial
        </a>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            'Everything in Starter',
            'All calculators + unlimited leads',
            'Custom domain & custom CTAs',
            'Your branding on PDFs (no badge)',
            'CRM export & email alerts',
          ].map((f) => (
            <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 9, fontSize: 14.5, color: 'rgba(255,255,255,0.82)' }}>
              <span style={{ color: 'var(--accent)', fontWeight: 700, flexShrink: 0 }}>✓</span>
              {f}
            </li>
          ))}
        </ul>
      </div>

      {/* Enterprise */}
      <div
        style={{
          background: 'var(--card)',
          border: '1px solid var(--line)',
          borderRadius: 18,
          padding: 30,
        }}
      >
        <p style={{ fontFamily: 'var(--font-space-grotesk), sans-serif', fontWeight: 700, fontSize: 18, margin: '0 0 4px', color: 'var(--ink)' }}>
          Enterprise
        </p>
        <p
          style={{
            fontFamily: 'var(--font-space-grotesk), sans-serif',
            fontWeight: 700,
            fontSize: 38,
            color: 'var(--ink)',
            margin: '14px 0 4px',
            lineHeight: 1,
          }}
        >
          Contact us
        </p>
        <p style={{ fontSize: 13, color: 'var(--ink-soft)', margin: '0 0 22px' }}>Custom pricing for your team</p>
        <a
          href="mailto:support@socialcalcs.com"
          style={{
            display: 'block',
            textAlign: 'center',
            background: 'transparent',
            color: 'var(--ink)',
            border: '1px solid var(--line)',
            borderRadius: 10,
            padding: '12px 0',
            fontWeight: 600,
            fontSize: 15,
            textDecoration: 'none',
            marginBottom: 24,
          }}
        >
          Contact us
        </a>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            'Everything in Pro',
            'Up to 5 team seats',
            'Multiple bio sites',
            'Priority support & API access',
          ].map((f) => (
            <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 9, fontSize: 14.5, color: 'var(--ink-soft)' }}>
              <span style={{ color: 'var(--accent)', fontWeight: 700, flexShrink: 0 }}>✓</span>
              {f}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Commit**

```bash
cd /Users/mikepacione/Documents/Claude/Projects/socialcalcs-marketing && git add components/pricing/pricing-cards.tsx && git commit -m "feat: rebuild pricing cards with 3 tiers, annual/monthly prop"
```

---

## Task 16: Pricing components — FAQ

**Files:**
- Modify: `components/pricing/faq.tsx`

- [ ] **Step 1: Replace faq.tsx**

```tsx
const faqs = [
  {
    q: 'Do my clients need to download anything?',
    a: 'Never. They open your link, run the numbers, and get their report — all in the browser, mostly on mobile.',
  },
  {
    q: 'How long does setup take?',
    a: 'Most pros are live in an afternoon. Add your branding, pick your calculators, drop the link in your bio.',
  },
  {
    q: 'Where do my leads go?',
    a: 'Straight to your dashboard and inbox, with the exact numbers each person ran. Export to your CRM on Pro and up.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. No contracts, no lock-in. Downgrade to free whenever you want and keep your bio site.',
  },
]

export function FAQ() {
  return (
    <div style={{ padding: '24px 32px 96px', maxWidth: 760, margin: '0 auto' }}>
      <h2
        style={{
          fontFamily: 'var(--font-roboto), serif',
          fontWeight: 700,
          fontSize: 'clamp(26px, 3vw, 36px)',
          margin: '0 0 28px',
          color: 'var(--ink)',
        }}
      >
        Questions, answered
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {faqs.map(({ q, a }) => (
          <div
            key={q}
            style={{
              background: 'var(--card)',
              border: '1px solid var(--line)',
              borderRadius: 'var(--r)',
              padding: '22px 24px',
            }}
          >
            <p style={{ fontFamily: 'var(--font-space-grotesk), sans-serif', fontWeight: 600, fontSize: 16, margin: '0 0 8px', color: 'var(--ink)' }}>
              {q}
            </p>
            <p style={{ fontSize: 14.5, color: 'var(--ink-soft)', margin: 0, lineHeight: 1.6 }}>{a}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Commit**

```bash
cd /Users/mikepacione/Documents/Claude/Projects/socialcalcs-marketing && git add components/pricing/faq.tsx && git commit -m "feat: rebuild FAQ section with 4 cards"
```

---

## Task 17: Pricing page (app/pricing/page.tsx)

**Files:**
- Modify: `app/pricing/page.tsx`

- [ ] **Step 1: Replace pricing/page.tsx**

```tsx
'use client'

import { useState } from 'react'
import { BillingToggle } from '@/components/pricing/billing-toggle'
import { PricingCards } from '@/components/pricing/pricing-cards'
import { FAQ } from '@/components/pricing/faq'

export default function PricingPage() {
  const [annual, setAnnual] = useState(false)

  return (
    <>
      {/* Header */}
      <div style={{ padding: '80px 32px 40px', textAlign: 'center' }}>
        <p
          style={{
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            margin: '0 0 14px',
          }}
        >
          Pricing
        </p>
        <h1
          style={{
            fontFamily: 'var(--font-roboto), serif',
            fontWeight: 700,
            fontSize: 'clamp(40px, 5vw, 68px)',
            lineHeight: 1.0,
            letterSpacing: '-0.03em',
            margin: 0,
          }}
        >
          Simple pricing.
          <br />
          <span style={{ color: 'var(--accent)' }}>Serious leads.</span>
        </h1>
        <p style={{ fontSize: 18, color: 'var(--ink-soft)', maxWidth: 520, margin: '18px auto 0', lineHeight: 1.6 }}>
          Start free. Upgrade the day your bio link earns its keep. No contracts, cancel anytime.
        </p>
        <BillingToggle annual={annual} onChange={setAnnual} />
      </div>

      {/* Pricing cards */}
      <PricingCards annual={annual} />

      {/* FAQ */}
      <FAQ />
    </>
  )
}
```

- [ ] **Step 2: Commit**

```bash
cd /Users/mikepacione/Documents/Claude/Projects/socialcalcs-marketing && git add app/pricing/page.tsx && git commit -m "feat: rebuild pricing page with billing toggle, tier cards, FAQ"
```

---

## Task 18: Final build verification

**Files:** (none — verification only)

- [ ] **Step 1: Run full build**

```bash
cd /Users/mikepacione/Documents/Claude/Projects/socialcalcs-marketing && npm run build 2>&1
```

Expected: `✓ Compiled successfully` or similar — no TypeScript errors, no missing export errors.

- [ ] **Step 2: Fix any build errors**

Common issues to check:
- Missing named exports (e.g. `PricingTeaser` must still export from pricing-teaser.tsx if imported anywhere — check app/page.tsx no longer imports it)
- Apostrophes in JSX text need `&apos;` or `{'...'}` syntax
- The `getCopy` in page.tsx: confirm `lib/copy.ts` exports `getCopy` as a named export (it does — verified)

- [ ] **Step 3: Final commit**

```bash
cd /Users/mikepacione/Documents/Claude/Projects/socialcalcs-marketing && git add -A && git commit -m "fix: resolve any build errors from marketing site rebuild"
```

---

## Self-Review

**Spec coverage check:**

| Spec requirement | Task |
|---|---|
| CSS vars + body + @keyframes floaty | Task 1 |
| Roboto + Space Grotesk + Hanken Grotesk fonts | Task 2 |
| OG metadata updated | Task 2 |
| Nav: logo, anchor links, CTA, mobile hamburger | Task 3 |
| Footer: dark, 3 cols, copyright | Task 4 |
| Hero: eyebrow, H1, body, buttons, phone mockup, toast, trust line | Task 5 |
| How It Works: 3 numbered steps | Task 6 |
| Bio Examples: 3 phone mockups (id="bio") | Task 7 |
| Tools section: dark bg, calc card, 6 tiles (id="tools") | Task 8 |
| Leads: result card, PDF card, lead chip | Task 9 |
| Who It's For: 3 persona cards, coming soon | Task 10 |
| Final CTA: centered, accent button | Task 11 |
| pricing-teaser.tsx stubbed | Task 12 |
| Home page wired with all 7 sections | Task 13 |
| BillingToggle: sliding pill, annual −20% accent | Task 14 |
| PricingCards: Starter/Pro/Enterprise, annual prop | Task 15 |
| FAQ: 4 cards | Task 16 |
| Pricing page: client component, toggle + cards + FAQ | Task 17 |
| Build verification | Task 18 |

**Placeholder scan:** No TBDs, no "similar to Task N" shortcuts. All JSX is complete.

**Type consistency:** `BillingToggle` receives `{ annual: boolean, onChange: (annual: boolean) => void }` — matches usage in `PricingPage`. `PricingCards` receives `{ annual: boolean }` — matches. All section components export named functions with no props.
