"use client";

import React from "react";
import Image from "next/image";

interface PartnerLogo {
  name: string;
  src: string;
  width: number;
  height: number;
}

const partnerLogos: PartnerLogo[] = [
  { name: "AVEVA", src: "/images/logos/logo-aveva.svg", width: 140, height: 38 },
  { name: "Wall to Wall", src: "/images/logos/logo-wall-to-wall.svg", width: 160, height: 38 },
  { name: "Milient", src: "/images/logos/logo-milient.svg", width: 130, height: 36 },
  { name: "Roima Intelligence", src: "/images/logos/logo-roima.svg", width: 140, height: 38 },
  { name: "Monster", src: "/images/logos/logo-monster.svg", width: 140, height: 36 },
  { name: "Bumbee Labs", src: "/images/logos/logo-bumbee-labs.svg", width: 150, height: 38 },
  { name: "IDnet", src: "/images/logos/logo-idnet.svg", width: 120, height: 36 },
  { name: "Allt om Juridik", src: "/images/logos/logo-allt-om-juridik.svg", width: 150, height: 38 },
];

export const LinkedClientLogos: React.FC = () => {
  return (
    <section className="w-full bg-[#000000] border-t border-white/[0.08] py-14 sm:py-16 relative z-10">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-white/[0.06]">
          <div>
            <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-500 block mb-1">
              Validerat av marknaden
            </span>
            <h2 className="text-lg sm:text-xl font-normal text-neutral-200 tracking-tight">
              Betrodd av världsledande varumärken och B2B-ledare
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Dokumenterad mötesbokning & ROI</span>
          </div>
        </div>

        {/* Clean, Non-Slop Logo Grid: No boxes, no artificial gradients, pure optical balance */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-8 sm:gap-10 items-center justify-items-center">
          {partnerLogos.map((logo) => (
            <div
              key={logo.name}
              className="group relative flex items-center justify-center w-full h-12 p-2 transition-all duration-300"
              title={logo.name}
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                className="max-h-7 sm:max-h-8 w-auto object-contain opacity-45 group-hover:opacity-95 transition-opacity duration-300 filter brightness-0 invert"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
