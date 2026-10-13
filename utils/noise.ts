// Monotone noise (black), same idea as Figma's "Noise > Monotone"
export const noiseSvg = `
<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'>
  <filter id='n' x='0' y='0' width='100%' height='100%'>
    <feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/>
    <feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  3 0 0 0 -1'/>
  </filter>
  <rect width='100%' height='100%' filter='url(#n)'/>
</svg>`;

export const noiseStyle = {
  backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(noiseSvg)}")`,
  backgroundSize: "200px 200px",
  opacity: 0.1,
};