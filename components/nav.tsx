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
