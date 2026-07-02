import { ImageResponse } from 'next/og';

/** Carte sociale OpenGraph/Twitter par défaut (1200×630) - brandée Alatere Web. */
export const alt = "Alatere Web - Agence, formation Qualiopi & centre d'affaires à Antibes";
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '90px',
          background: 'linear-gradient(135deg, #163a6e 0%, #0f2a52 100%)',
          color: '#ffffff',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 30,
            letterSpacing: 3,
            textTransform: 'uppercase',
            color: '#C29446',
            fontWeight: 700,
          }}
        >
          Antibes · depuis 2002
        </div>
        <div style={{ fontSize: 96, fontWeight: 800, marginTop: 18, lineHeight: 1.02 }}>
          Alatere Web
        </div>
        <div
          style={{
            fontSize: 40,
            marginTop: 28,
            color: 'rgba(255,255,255,0.86)',
            maxWidth: 960,
            lineHeight: 1.25,
          }}
        >
          E-commerce · Formation Qualiopi · Domiciliation · Coworking
        </div>
      </div>
    ),
    { ...size },
  );
}
