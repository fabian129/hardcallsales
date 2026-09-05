"use client";

// LABB — inte länkad från sajten. Editorialsektionen som scroll-berättelse med sylvass landskapshorisont.
// Adress i dev: /labb/editorial · Montering: byt <EditorialCanvasSection /> mot <EditorialScrollScene /> i page.tsx.

import React, { useState } from "react";
import { EditorialScrollScene } from "@/components/sections/EditorialScrollScene";

export default function EditorialLabb() {
  const [stepSpan, setStepSpan] = useState<number>(0.1);
  const [dis, setDis] = useState<number>(0.45);
  const [glow, setGlow] = useState<number>(0.3);

  const knapp = (aktiv: boolean) =>
    `px-3 py-1 rounded-xl text-xs font-semibold transition-all cursor-pointer ${aktiv ? "bg-[#0A0A0A] text-white shadow-xs" : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"}`;

  return (
    <main className="w-full bg-white">
      <EditorialScrollScene key={`${stepSpan}-${dis}-${glow}`} stepSpan={stepSpan} dis={dis} glow={glow} id="labb-editorial" />

      {/* Nästa sektion enligt sidans ordning: mörk case-sektion. Bara en yta att döma temabytet mot. */}
      <section className="w-full h-[70vh] bg-[#0A0A0A] text-white flex items-center justify-center">
        <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-white/40">Här börjar den mörka case-sektionen</span>
      </section>

      {/* Labbets reglage — fast nere till höger */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 p-2 rounded-2xl bg-white/90 backdrop-blur-md border border-neutral-200/90 shadow-md text-neutral-700">
        <div className="flex items-center gap-1">
          <span className="text-[10px] font-mono uppercase font-bold text-neutral-400 px-2">Steg var</span>
          {[0.1, 0.16, 0.25].map((v) => (
            <button key={v} type="button" onClick={() => setStepSpan(v)} className={knapp(stepSpan === v)}>{Math.round(v * 100)} %</button>
          ))}
        </div>
        <div className="flex items-center gap-1">
          <span className="text-[10px] font-mono uppercase font-bold text-neutral-400 px-2">Dis</span>
          <button type="button" onClick={() => setDis(0.45)} className={knapp(dis > 0)}>På</button>
          <button type="button" onClick={() => setDis(0)} className={knapp(dis === 0)}>Av</button>
          <span className="w-px h-4 bg-neutral-200 mx-1" />
          <span className="text-[10px] font-mono uppercase font-bold text-neutral-400 px-2">Glöd</span>
          <button type="button" onClick={() => setGlow(0.3)} className={knapp(glow > 0)}>På</button>
          <button type="button" onClick={() => setGlow(0)} className={knapp(glow === 0)}>Av</button>
        </div>
      </div>
    </main>
  );
}
