import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ffffff',
        background: 'linear-gradient(135deg, #0f172a 0%, #020617 100%)'
      }}
    >
      <div
        style={{
          width: 96,
          height: 96,
          borderRadius: 28,
          border: '1px solid rgba(255,255,255,0.12)',
          background: 'rgba(255,255,255,0.06)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 58,
          fontWeight: 700
        }}
      >
        A
      </div>
    </div>,
    {
      width: 120,
      height: 120
    }
  );
}
