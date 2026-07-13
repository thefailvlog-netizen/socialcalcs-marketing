import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'SocialCalcs — The bio link for financial pros'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: '#0d0f18',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-120px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '700px',
            height: '400px',
            background: 'radial-gradient(ellipse at center, rgba(79,70,229,0.20) 0%, transparent 70%)',
            display: 'flex',
          }}
        />
        <div
          style={{
            width: '72px',
            height: '72px',
            borderRadius: '20px',
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '32px',
            fontWeight: 900,
            fontStyle: 'italic',
            marginBottom: '28px',
          }}
        >
          <span style={{ color: '#ffffff' }}>S</span>
          <span style={{ color: '#4F46E5' }}>C</span>
        </div>
        <div
          style={{
            fontSize: '56px',
            fontWeight: 700,
            fontStyle: 'italic',
            letterSpacing: '-0.03em',
            color: '#ffffff',
            marginBottom: '20px',
            display: 'flex',
          }}
        >
          Social<span style={{ color: '#4F46E5' }}>Calcs</span>
        </div>
        <div
          style={{
            fontSize: '22px',
            color: 'rgba(255,255,255,0.55)',
            textAlign: 'center',
            maxWidth: '600px',
            lineHeight: 1.5,
            display: 'flex',
          }}
        >
          The bio link for mortgage brokers and real estate agents.
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '48px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(79,70,229,0.15)',
            border: '1px solid rgba(79,70,229,0.3)',
            borderRadius: '999px',
            padding: '8px 20px',
          }}
        >
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4F46E5', display: 'flex' }} />
          <span style={{ fontSize: '15px', fontWeight: 600, color: '#4F46E5', display: 'flex' }}>
            socialcalcs.com
          </span>
        </div>
      </div>
    ),
    { ...size }
  )
}
