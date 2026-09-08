import { ImageResponse } from 'next/og';

/** Carte sociale dédiée à l'article comparatif (1200×630). */
export const alt =
  "Comparatif des services de domiciliation d'entreprise à Antibes et alentours";
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
            fontSize: 26,
            letterSpacing: 4,
            textTransform: 'uppercase',
            color: '#C0934A',
            marginBottom: 28,
          }}
        >
          Alatere doMo · Ressources
        </div>
        <div style={{ fontSize: 66, fontWeight: 700, lineHeight: 1.1, marginBottom: 28 }}>
          14 services de domiciliation comparés
        </div>
        <div style={{ fontSize: 34, color: '#c8d6ee', lineHeight: 1.35 }}>
          Antibes · Sophia Antipolis · Vallauris · Villeneuve-Loubet
        </div>
        <div style={{ fontSize: 26, color: '#8fa6c9', marginTop: 44 }}>
          alatere-web.com
        </div>
      </div>
    ),
    size,
  );
}
