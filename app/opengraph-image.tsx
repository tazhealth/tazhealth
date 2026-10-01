import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';

export const alt = 'TAZhealth: free medical outreaches for underserved Nigerian communities';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  const [photo, logo] = await Promise.all([
  readFile(join(process.cwd(), 'assets/og-photo.jpg'), 'base64'),
  readFile(join(process.cwd(), 'public/logo-light.png'), 'base64')]
  );

  return new ImageResponse(
    <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex' }}>
      <img src={`data:image/jpeg;base64,${photo}`} width={1200} height={630} style={{ position: 'absolute', top: 0, left: 0 }} />
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '64px 72px', width: '100%' }}>
        <img src={`data:image/png;base64,${logo}`} width={210} height={85} />
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 700 }}>
          <div style={{ fontSize: 64, fontWeight: 700, color: 'white', lineHeight: 1.05, letterSpacing: -2 }}>
            Healthcare for the communities that need it most.
          </div>
          <div style={{ marginTop: 24, fontSize: 28, color: 'rgba(255,255,255,0.8)' }}>
            Free medical outreaches across Nigeria · 1,000+ people reached
          </div>
        </div>
        <div style={{ fontSize: 24, color: 'rgba(255,255,255,0.7)' }}>tazhealth.org</div>
      </div>
    </div>,
    size
  );
}
