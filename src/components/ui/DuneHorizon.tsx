"use client";

// DuneHorizon — landskapet som SKARP horisont längst ner på en vit canvas. Vektor: sylvass i alla upplösningar
// och DPR, väger under 3 kB, får aldrig en mjuk kant. Ljuset kommer lågt från vänster (varm rand på krönen,
// svala skuggsidor åt höger), som i referensen. Ställföreträdare för en genererad högupplöst plåt: ges `plate`
// renderas stillen i stället, med samma placering (bottenankrad, object-cover).
//
// Scenkontraktet: motiv "dyner mot horisonten, längst ner" · värden: ljusa, canvasen förblir vit ·
// ljus: EN källa, låg vänster · djup: fyra åsar, den närmaste ljusast · atmosfär: valfri dis (MistLayer) ·
// textyta: allt ovanför horisonten · rörelse: ingen i plåten (disen bär rörelsen).

import React from "react";

export interface DunePlate {
  avif?: string;
  webp?: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface DuneHorizonProps {
  /** horisontens höjd som andel av scenen (0–1), default 0.46 */
  height?: number;
  /** varm glöd vid horisonten (skymning), 0 = av */
  glow?: number;
  plate?: DunePlate;
  className?: string;
}

export const DuneHorizon: React.FC<DuneHorizonProps> = ({ height = 0.46, glow = 0.3, plate, className = "" }) => {
  const h = `${Math.round(height * 100)}%`;
  if (plate) {
    return (
      <div className={`absolute inset-x-0 bottom-0 pointer-events-none select-none ${className}`} style={{ height: h }} aria-hidden="true">
        <picture>
          {plate.avif && <source type="image/avif" srcSet={plate.avif} />}
          {plate.webp && <source type="image/webp" srcSet={plate.webp} />}
          <img src={plate.src} alt={plate.alt} width={plate.width} height={plate.height} loading="lazy" decoding="async" className="w-full h-full object-cover object-bottom" />
        </picture>
      </div>
    );
  }
  return (
    <div className={`absolute inset-x-0 bottom-0 pointer-events-none select-none ${className}`} style={{ height: h }} aria-hidden="true">
      <svg viewBox="0 0 1600 640" preserveAspectRatio="xMidYMax slice" className="w-full h-full block" shapeRendering="geometricPrecision">
        <defs>
          {/* Fjärran ås: svalast, ljusast lavendelgrå */}
          <linearGradient id="dune-far" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#E4E0E6" />
            <stop offset="0.55" stopColor="#D4CFD8" />
            <stop offset="1" stopColor="#CBC5D1" />
          </linearGradient>
          {/* Stora dynen: lyst vänster, skugga höger */}
          <linearGradient id="dune-big" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#F1E7DA" />
            <stop offset="0.28" stopColor="#E3D7C8" />
            <stop offset="0.62" stopColor="#C9BFB5" />
            <stop offset="1" stopColor="#BDB4AD" />
          </linearGradient>
          <linearGradient id="dune-mid" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#EEE6DB" />
            <stop offset="0.5" stopColor="#E2D8CB" />
            <stop offset="1" stopColor="#D5CBBF" />
          </linearGradient>
          <linearGradient id="dune-near" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#F5EFE6" />
            <stop offset="1" stopColor="#E7DDD0" />
          </linearGradient>
          {/* Skymningsglöd vid horisonten: persika, tyst */}
          <radialGradient id="dune-glow" cx="0.22" cy="1" r="0.75">
            <stop offset="0" stopColor="#F6D9C4" stopOpacity="0.9" />
            <stop offset="0.45" stopColor="#F3DCCB" stopOpacity="0.35" />
            <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
          </radialGradient>
          {/* Varm rand på krönen */}
          <linearGradient id="dune-rim" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#F9D8BF" />
            <stop offset="0.5" stopColor="#F3CDB4" />
            <stop offset="1" stopColor="#F3CDB4" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Glöden ligger bakom åsarna, i det som annars är vit canvas — bara vid horisonten. */}
        {glow > 0 && <rect x="0" y="120" width="1600" height="320" fill="url(#dune-glow)" opacity={glow} />}

        {/* 4 · fjärran ås */}
        <path d="M0 336 C 180 312, 360 350, 560 322 C 760 296, 900 334, 1100 302 C 1300 270, 1450 306, 1600 288 L 1600 640 L 0 640 Z" fill="url(#dune-far)" />

        {/* 3 · stora dynen, vänster, med varm rand på krönet */}
        <path d="M0 262 C 100 222, 220 196, 360 232 C 500 268, 620 300, 800 332 C 980 362, 1140 348, 1320 384 C 1440 408, 1530 402, 1600 410 L 1600 640 L 0 640 Z" fill="url(#dune-big)" />
        <path d="M0 262 C 100 222, 220 196, 360 232 C 500 268, 620 300, 800 332" fill="none" stroke="url(#dune-rim)" strokeWidth="2.2" strokeLinecap="round" />

        {/* 2 · mellandyn, höger */}
        <path d="M0 478 C 260 446, 520 426, 780 452 C 1000 474, 1220 434, 1600 418 L 1600 640 L 0 640 Z" fill="url(#dune-mid)" />
        <path d="M780 452 C 1000 474, 1220 434, 1600 418" fill="none" stroke="#F6E2D3" strokeWidth="1.6" strokeLinecap="round" opacity="0.9" />

        {/* 1 · närmaste dynen: ljusast, nästan ett med canvasen */}
        <path d="M0 566 C 380 536, 800 566, 1200 536 C 1400 522, 1520 528, 1600 546 L 1600 640 L 0 640 Z" fill="url(#dune-near)" />
      </svg>
    </div>
  );
};

export default DuneHorizon;
