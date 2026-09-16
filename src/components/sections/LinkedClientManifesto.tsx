"use client";

import React from "react";

export const LinkedClientManifesto: React.FC = () => {
  return (
    <section className="w-full bg-[#000000] text-white py-28 sm:py-36 lg:py-44 relative z-10 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12 text-center">
        {/* Typographic Manifesto with stark contrast matching Bild 2 */}
        <div className="space-y-6 sm:space-y-8 max-w-4xl mx-auto">
          {/* White High-Contrast Lines */}
          <p className="text-2xl sm:text-4xl lg:text-[42px] font-normal tracking-tight text-white leading-[1.25]">
            Köpare vill förstå värdet innan de pratar med en säljare.
          </p>

          <p className="text-2xl sm:text-4xl lg:text-[42px] font-normal tracking-tight text-white leading-[1.25]">
            Säljare vill att varje samtal ska starta med ett varmt intresse.
          </p>

          {/* Muted Contrast Lines */}
          <div className="pt-4 sm:pt-6 space-y-4 sm:space-y-6">
            <p className="text-2xl sm:text-4xl lg:text-[42px] font-normal tracking-tight text-neutral-600 leading-[1.25]">
              Traditionell kallprospektering saktar ner båda parter.
            </p>

            <p className="text-2xl sm:text-4xl lg:text-[42px] font-normal tracking-tight text-neutral-500 leading-[1.25]">
              LinkedClient förändrar detta.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
