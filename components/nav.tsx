'use client'

import { useState } from 'react'
import Link from 'next/link'
import { APP_URL, DEMO_URL } from '@/lib/links'

const NAV_LINKS = [
  { label: 'Bio site', href: '/#bio' },
  { label: 'Tools', href: '/#tools' },
  { label: 'Embed', href: '/#embed' },
  { label: 'Pricing', href: '/pricing' },
]

const demoDot = {
  width: 7,
  height: 7,
  borderRadius: '50%',
  background: 'var(--accent)',
  flexShrink: 0,
  animation: 'dot-pulse 2.8s ease-in-out infinite',
} as const

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'rgba(255,255,255,0.88)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--line)',
        padding: '0 clamp(20px, 5vw, 96px)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, height: 80, maxWidth: 1248, margin: '0 auto' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', color: 'var(--ink)' }}>
          <span
            style={{
              width: 36,
              height: 36,
              borderRadius: 12,
              background: 'var(--accent)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontSize: 15,
              color: '#fff',
              flexShrink: 0,
            }}
          >
            SC
          </span>
          <span style={{ fontWeight: 800, fontSize: 23, letterSpacing: '-0.02em' }}>
            Social<span style={{ color: 'var(--accent)' }}>Calcs</span>
          </span>
        </Link>

        <nav className="hidden md:flex" style={{ gap: 30, alignItems: 'center' }}>
          {NAV_LINKS.map(({ label, href }) => (
            <Link key={label} href={href} style={{ fontSize: 15, fontWeight: 600, color: 'var(--ink-soft)', textDecoration: 'none' }}>
              {label}
            </Link>
          ))}
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 15, fontWeight: 700, color: 'var(--accent)', textDecoration: 'none' }}
          >
            <span style={demoDot} />
            Live demo
          </a>
        </nav>

        <div className="hidden md:flex" style={{ alignItems: 'center', gap: 18 }}>
          <a href={`${APP_URL}/login`} style={{ fontSize: 15, fontWeight: 700, color: 'var(--ink-soft)', textDecoration: 'none' }}>
            Log in
          </a>
          <a
            href={`${APP_URL}/signup`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              height: 44,
              padding: '0 20px',
              background: 'var(--ink)',
              color: '#fff',
              borderRadius: 'var(--pill)',
              fontSize: 15,
              fontWeight: 700,
              textDecoration: 'none',
              transition: 'background 0.18s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'var(--accent)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'var(--ink)')}
          >
            Get started
          </a>
        </div>

        <button
          className="flex md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--ink)', width: 44, height: 44, marginRight: -11, alignItems: 'center', justifyContent: 'center' }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
            {open ? (
              <>
                <path d="M5 5l14 14" />
                <path d="M19 5L5 19" />
              </>
            ) : (
              <>
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div style={{ borderTop: '1px solid var(--line)', padding: '12px 0 20px', display: 'flex', flexDirection: 'column', gap: 4 }}>
          {NAV_LINKS.map(({ label, href }) => (
            <Link key={label} href={href} onClick={() => setOpen(false)} style={{ display: 'flex', alignItems: 'center', minHeight: 44, fontSize: 16, fontWeight: 600, color: 'var(--ink)', textDecoration: 'none' }}>
              {label}
            </Link>
          ))}
          <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: 8, minHeight: 44, fontSize: 16, fontWeight: 700, color: 'var(--accent)', textDecoration: 'none' }}>
            <span style={demoDot} />
            Live demo
          </a>
          <div style={{ display: 'flex', gap: 10, marginTop: 8 }}>
            <a href={`${APP_URL}/login`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1, minHeight: 48, background: 'var(--card)', border: '1px solid var(--line)', borderRadius: 'var(--pill)', fontSize: 15, fontWeight: 700, color: 'var(--ink)', textDecoration: 'none' }}>
              Log in
            </a>
            <a href={`${APP_URL}/signup`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1, minHeight: 48, background: 'var(--ink)', borderRadius: 'var(--pill)', fontSize: 15, fontWeight: 700, color: '#fff', textDecoration: 'none' }}>
              Get started
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
