import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = "TuinXpert — Professionele Tuinaanleg in Mol"
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0A1A0A 0%, #0A0A0A 40%, #111111 70%, #0A2A0A 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'serif',
          padding: '60px',
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: '#F5F5F5',
            textAlign: 'center',
            lineHeight: 1.2,
            marginBottom: 20,
          }}
        >
          Tuin<span style={{ color: '#4CAF50' }}>Xpert</span>
        </div>
        <div
          style={{
            fontSize: 28,
            color: '#A0A0A0',
            textAlign: 'center',
            maxWidth: 700,
          }}
        >
          Professionele tuinaanleg & onderhoud — Regio Mol
        </div>
        <div
          style={{
            marginTop: 40,
            background: '#4CAF50',
            color: 'white',
            padding: '12px 32px',
            borderRadius: 8,
            fontSize: 20,
            fontWeight: 700,
          }}
        >
          www.xandrostuinen.be
        </div>
      </div>
    ),
    size
  )
}
