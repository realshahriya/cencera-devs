import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'CENCERA DEVS — Software Engineering Studio & Agency'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          backgroundColor: '#F8FAFC',
          backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(148, 163, 184, 0.25) 2px, transparent 0)',
          backgroundSize: '36px 36px',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Top Bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              padding: '8px 20px',
              borderRadius: '9999px',
              backgroundColor: '#EFF6FF',
              border: '1px solid rgba(37, 99, 235, 0.3)',
              color: '#1D4ED8',
              fontSize: '18px',
              fontWeight: 800,
              letterSpacing: '0.15em',
            }}
          >
            SOFTWARE ENGINEERING STUDIO //
          </div>
        </div>

        {/* Hero Title Area */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '1000px' }}>
          <div
            style={{
              fontSize: '68px',
              fontWeight: 900,
              color: '#020617',
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
            }}
          >
            CENCERA DEVS
          </div>
          <div
            style={{
              fontSize: '44px',
              fontWeight: 800,
              color: '#1D4ED8',
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
            }}
          >
            High-Stakes Software &amp; AI Agency
          </div>
          <div
            style={{
              fontSize: '24px',
              fontWeight: 600,
              color: '#334155',
              lineHeight: 1.5,
            }}
          >
            We partner with founders and enterprises to architect AI systems, Web3 protocols, cloud infrastructure, and custom software.
          </div>
        </div>

        {/* Bottom Capabilities Row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            paddingTop: '32px',
            borderTop: '2px solid #CBD5E1',
          }}
        >
          <div style={{ display: 'flex', gap: '12px' }}>
            {['AI & LLMs', 'Web3 & dApps', 'Full Stack Web', 'Smart Contracts'].map((tag) => (
              <div
                key={tag}
                style={{
                  padding: '8px 18px',
                  borderRadius: '9999px',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #CBD5E1',
                  color: '#0F172A',
                  fontSize: '16px',
                  fontWeight: 700,
                }}
              >
                {tag}
              </div>
            ))}
          </div>

          <div
            style={{
              fontSize: '20px',
              fontWeight: 800,
              color: '#1D4ED8',
              fontFamily: 'monospace',
            }}
          >
            cencera.xyz
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
