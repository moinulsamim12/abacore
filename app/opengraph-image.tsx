import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Abacore';
export const size = {
  width: 1200,
  height: 630
};
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '72px',
        color: '#ffffff',
        background:
          'radial-gradient(circle at top left, rgba(34, 211, 238, 0.24), transparent 32%), radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.22), transparent 24%), linear-gradient(135deg, #020617 0%, #0f172a 100%)'
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '760px' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            padding: '10px 18px',
            borderRadius: '999px',
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.12)',
            fontSize: '20px',
            letterSpacing: '0.18em',
            textTransform: 'uppercase'
          }}
        >
          Abacore
        </div>
        <div style={{ fontSize: 74, lineHeight: 1.02, fontWeight: 700, letterSpacing: '-0.04em' }}>
          AI Automation Systems That Help Businesses Scale Faster
        </div>
        <div style={{ fontSize: 28, lineHeight: 1.4, color: 'rgba(226,232,240,0.9)' }}>
          Premium AI systems for lead follow-up, CRM automation, booking workflows, and operational scale.
        </div>
      </div>
      <div
        style={{
          width: 270,
          height: 270,
          borderRadius: 48,
          border: '1px solid rgba(255,255,255,0.14)',
          background: 'rgba(255,255,255,0.06)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 20px 80px rgba(0,0,0,0.45)'
        }}
      >
        <div style={{ fontSize: 180, fontWeight: 700, lineHeight: 1, letterSpacing: '-0.08em' }}>A</div>
      </div>
    </div>,
    size
  );
}
