"use client";

// EditorialScrollScene — den vita editorialsektionen som scroll-berättelse: canvasen behåller sina linjer,
// landskapet står sylvasst som horisont längst ner, och texten trappar ner i tre steg när man scrollar:
// första stycket överst med större rubrik, nästa stycke tio procent ner medan det första tonar ut, tredje
// stycket tio procent ner till. Stegen korstonar mjukt kring varje byte; reduced motion tonar utan att flytta.
// Bakgrundens delar: DuneHorizon (vektor eller genererad plåt) + MistLayer (motorns molnlager, tillval).
// Fristående: inga beroenden utöver React. Byggd 5 sep 2026 för Hard Call Sales (labb: /labb/editorial).

import React, { useEffect, useRef, useState } from "react";
import { DuneHorizon, type DunePlate } from "@/components/ui/DuneHorizon";
import { MistLayer } from "@/components/ui/MistLayer";

export interface EditorialStep {
  id: string;
  stepNumber: string;
  badge: string;
  headline: string;
  ingress: string;
  card?: { quote: string; author: string; tag: string };
}

export const HCS_STEPS: EditorialStep[] = [
  {
    id: "manifest",
    stepNumber: "01",
    badge: "MANIFEST",
    headline: "Vi bokar möten med beslutsfattare som faktiskt kan säga ja.",
    ingress: "Ingen egen SDR-funktion, ingen uppstartstid — bara kvalificerade möten i kalendern och affärer som stänger.",
    card: { quote: "”Hard Call Sales har levererat över 20 MSEK i nya affärer för oss.”", author: "Mattias Holm, Säljchef på AVEVA", tag: ">20 MSEK LEVERERAT" },
  },
  {
    id: "verkligheten",
    stepNumber: "02",
    badge: "VERKLIGHETEN",
    headline: "Att bygga ett internt säljteam tar sex månader och kostar miljoner.",
    ingress: "Rekrytering, onboarding, verktygslicenser och personalomsättning. De flesta SaaS- och IT-bolag tappar fart och momentum innan deras egna SDR:er ens bokat sitt första kvalificerade möte.",
    card: { quote: "”Vi slapp anställa och bygga upp en egen säljavdelning från grunden.”", author: "Kundreferens, B2B Enterprise IT", tag: "0 KR I FAST ONBOARDING" },
  },
  {
    id: "losningen",
    stepNumber: "03",
    badge: "VÅR METODIK",
    headline: "Seniora mötesbokare med över 10 000 timmar i luren.",
    ingress: "Vi kombinerar precision i prospekteringen med erfarna säljare som kan föra en trovärdig dialog med VD, CIO och inköpschefer. Ni får möten direkt i kalendern från vecka ett.",
  },
];

export interface EditorialScrollSceneProps {
  steps?: EditorialStep[];
  /** andel av scrollsträckan mellan stegen: 0.10 = nästa stycke tio procent ner */
  stepSpan?: number;
  /** toningens halvbredd kring varje byte (andel av sträckan) */
  fade?: number;
  /** trappan: varje steg börjar så här många procent av höjden längre ner (desktop) */
  stair?: number;
  /** första stegets överkant, procent av höjden */
  topBase?: number;
  /** scrollsträckan i vh */
  trackVh?: number;
  /** disens täthet, 0 = av */
  dis?: number;
  /** skymningsglöd vid horisonten, 0 = av */
  glow?: number;
  /** horisontens höjd som andel av scenen */
  horizon?: number;
  /** genererad plåt i stället för vektordynerna */
  plate?: DunePlate;
  id?: string;
}

type Probe = { p: number; steps: number[]; active: number };
declare global {
  interface Window { __hcsEditorial?: Probe }
}

const smooth = (a: number, b: number, x: number) => {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};

export const EditorialScrollScene: React.FC<EditorialScrollSceneProps> = ({
  steps = HCS_STEPS,
  stepSpan = 0.1,
  fade = 0.04,
  stair = 10,
  topBase = 15,
  trackVh = 240,
  dis = 0.45,
  glow = 0.3,
  horizon = 0.46,
  plate,
  id = "manifest",
}) => {
  const hostRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [active, setActive] = useState(0);
  // Trappan är så brant som höjden tillåter, högst `stair` procent: varje steg mäts, och inget steg får sluta
  // under läsindikatorn. På en 1080-skärm håller tio procent; på 900 px pressas den ihop av steg två (kortet).
  // Av på mobil.
  const [stairEff, setStairEff] = useState(stair);
  const [topEff, setTopEff] = useState(topBase);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const LUFT = 88; // läsindikatorn + luft under det lägsta steget
    const measure = () => {
      const vh = window.innerHeight;
      const hs = stepRefs.current.map((el) => (el ? el.offsetHeight : 0));
      // Överkanten: topBase, men aldrig så lågt att det högsta steget hamnar under indikatorn (lägst 6 %).
      const maxH = Math.max(0, ...hs);
      const top = Math.max(6, Math.min(topBase, ((vh - maxH - LUFT) / vh) * 100));
      setTopEff(Math.round(top * 10) / 10);
      if (!mq.matches) { setStairEff(0); return; }
      let allowed = stair;
      hs.forEach((h, i) => {
        if (i === 0 || !h) return;
        const room = vh - h - LUFT - (top / 100) * vh;
        allowed = Math.min(allowed, (room / i / vh) * 100);
      });
      setStairEff(Math.max(0, Math.round(allowed * 10) / 10));
    };
    measure();
    mq.addEventListener("change", measure);
    window.addEventListener("resize", measure);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure).catch(() => {});
    return () => { mq.removeEventListener("change", measure); window.removeEventListener("resize", measure); };
  }, [stair, topBase, steps]);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const probe: Probe = { p: 0, steps: [], active: 0 };
    window.__hcsEditorial = probe;
    let raf = 0;
    let lastActive = -1;
    const n = steps.length;

    const apply = () => {
      raf = 0;
      const rect = host.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height - vh;
      const p = total > 0 ? Math.min(Math.max(-rect.top / total, 0), 1) : 0;
      const ops: number[] = [];
      let best = 0, bestOp = -1;
      for (let i = 0; i < n; i++) {
        const sIn = i * stepSpan, sOut = (i + 1) * stepSpan;
        // Asymmetrisk toning: det utgående stycket är borta när nästa når mitten — ut över [s − fade, s],
        // in över [s − fade/2, s + fade]. Två rubriker ligger aldrig fullt ovanpå varandra.
        const oin = i === 0 ? 1 : smooth(sIn - fade * 0.5, sIn + fade, p);
        const oout = i === n - 1 ? 1 : 1 - smooth(sOut - fade, sOut, p);
        const o = oin * oout;
        ops.push(o);
        if (o > bestOp) { bestOp = o; best = i; }
        const el = stepRefs.current[i];
        if (el) {
          el.style.opacity = o.toFixed(3);
          el.style.transform = reduced ? "none" : `translate3d(0, ${((1 - oin) * 28 - (1 - oout) * 20).toFixed(1)}px, 0)`;
          el.style.visibility = o < 0.01 ? "hidden" : "visible";
          el.style.pointerEvents = o > 0.5 ? "auto" : "none";
        }
      }
      probe.p = p; probe.steps = ops; probe.active = best;
      if (best !== lastActive) { lastActive = best; setActive(best); }
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(apply); };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    apply();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
      if (window.__hcsEditorial === probe) delete window.__hcsEditorial;
    };
  }, [steps, stepSpan, fade]);

  const scrollTo = (i: number) => {
    const host = hostRef.current;
    if (!host) return;
    const rect = host.getBoundingClientRect();
    const total = rect.height - window.innerHeight;
    const target = window.scrollY + rect.top + (i * stepSpan + (i === 0 ? 0 : fade)) * total + 1;
    window.scrollTo({ top: target, behavior: "smooth" });
  };

  const current = steps[active] || steps[0];

  return (
    <div ref={hostRef} id={id} className="relative w-full bg-[#FFFFFF] text-neutral-900 select-none" style={{ height: `${trackVh}vh` }}>
      <div className="sticky top-0 w-full h-screen overflow-hidden border-t border-black/[0.06]">

        {/* 1 · Canvasens linjer — behålls, går bakom allt */}
        <div className="absolute inset-0 pointer-events-none select-none z-0 max-w-[1760px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 h-full">
          <div className="border-r border-black/[0.035] h-full" />
          <div className="border-r border-black/[0.035] h-full" />
          <div className="border-r border-black/[0.035] h-full hidden md:block" />
          <div className="border-r border-black/[0.035] h-full hidden md:block" />
          <div className="border-r border-black/[0.035] h-full hidden lg:block" />
          <div className="h-full hidden lg:block" />
        </div>

        {/* 2 · Landskapet: sylvass horisont längst ner, disen driver över dynerna */}
        <div className="absolute inset-0 z-[3]">
          <DuneHorizon height={horizon} glow={glow} plate={plate} />
          {dis > 0 && <MistLayer opacity={dis} tint={[198, 192, 188]} band={[horizon * 0.62, horizon * 0.42]} drift={0.025} probeKey="__hcsMist" probePlate="dyner" />}
        </div>

        {/* HUD */}
        <div className="absolute inset-8 sm:inset-12 lg:inset-16 pointer-events-none select-none z-[4] flex flex-col justify-between">
          <div className="flex items-center justify-between text-[10px] font-mono text-black/30 uppercase tracking-[0.2em]">
            <span className="flex items-center gap-1.5"><span className="text-black/50">+</span> ARCH // SEC.02</span>
            <span className="hidden sm:inline-block tracking-[0.25em] text-neutral-400">EDITORIAL · SCROLL STORY</span>
            <span className="flex items-center gap-1.5">PHASE: {current.stepNumber}/0{steps.length} <span className="text-black/50">+</span></span>
          </div>
          <div className="flex items-center justify-between text-[10px] font-mono text-black/30 uppercase tracking-[0.2em]">
            <span className="text-black/40">+</span>
            <span className="text-black/40">+</span>
          </div>
        </div>

        {/* 3 · Textstegen: trappan ner, korstonade av scrollen */}
        <div className="relative z-20 h-full w-full max-w-[1760px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20">
          {steps.map((s, i) => (
            <div
              key={s.id}
              ref={(el) => { stepRefs.current[i] = el; }}
              className="absolute left-6 sm:left-12 lg:left-16 xl:left-20 right-6 sm:right-auto max-w-2xl xl:max-w-3xl will-change-[opacity,transform]"
              style={{ top: `${topEff + i * stairEff}%`, opacity: i === 0 ? 1 : 0, visibility: i === 0 ? "visible" : "hidden" }}
              aria-hidden={i !== active}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-neutral-200/80 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-[#7851A9]" />
                  <span className="text-[11px] font-mono tracking-[0.2em] font-semibold text-[#7851A9] uppercase">{s.badge}</span>
                </div>
                <span className="text-xs font-mono text-neutral-400">FAS {s.stepNumber} AV 0{steps.length}</span>
              </div>
              <h2 className={`${i === 0 ? "text-4xl sm:text-6xl lg:text-[74px] xl:text-[84px]" : "text-3xl sm:text-5xl lg:text-[62px] xl:text-[70px]"} font-normal text-[#0A0A0A] leading-[1.04] tracking-[-0.035em] mb-6`}>
                {s.headline}
              </h2>
              <p className="text-base sm:text-xl lg:text-2xl text-neutral-600 font-normal leading-relaxed max-w-2xl tracking-tight mb-8">
                {s.ingress}
              </p>
              {s.card && (
                <div className="max-w-xl rounded-2xl bg-white/80 backdrop-blur-md border border-neutral-200/80 p-5 sm:p-6 shadow-xs">
                  <blockquote className="text-base sm:text-lg lg:text-xl font-medium text-[#0A0A0A] tracking-tight leading-snug">{s.card.quote}</blockquote>
                  <div className="flex items-center justify-between pt-2 border-t border-black/[0.06] mt-3">
                    <cite className="text-xs font-mono uppercase tracking-wider text-neutral-500 not-italic">— {s.card.author}</cite>
                    <span className="text-[10px] font-mono font-bold text-[#7851A9] bg-[#7851A9]/10 px-2 py-0.5 rounded">{s.card.tag}</span>
                  </div>
                </div>
              )}
              {/* Handlingarna följer stycket, så de aldrig krockar med nästa stegs kort */}
              <div className="flex flex-wrap items-center gap-4 mt-8">
                <a href="#kontakt" className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-[#0A0A0A] hover:bg-neutral-800 text-white font-semibold text-sm tracking-tight transition-all shadow-md group cursor-pointer">
                  <span>Boka ett möte</span>
                  <span className="text-sm font-bold text-[#A881E9] group-hover:translate-x-0.5 transition-transform">→</span>
                </a>
                <a href="#kunder" className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white/85 hover:bg-white text-neutral-800 border border-neutral-300/80 backdrop-blur-md font-semibold text-sm tracking-tight transition-all shadow-xs group cursor-pointer">
                  <span className="text-neutral-400 group-hover:translate-y-0.5 transition-transform">↓</span>
                  <span>Se dokumenterade case</span>
                </a>
              </div>
            </div>
          ))}

          {/* Läsindikatorn: fast längst ner till vänster */}
          <div className="absolute left-6 sm:left-12 lg:left-16 xl:left-20 bottom-10 sm:bottom-12 z-30">
            <div className="flex items-center gap-4 text-xs font-mono text-neutral-400">
              <span className="text-[10px] tracking-widest uppercase">Scrolla för att läsa</span>
              <div className="flex items-center gap-1.5">
                {steps.map((s, i) => (
                  <button
                    key={s.id}
                    type="button"
                    aria-label={`Steg ${s.stepNumber}`}
                    onClick={() => scrollTo(i)}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${active === i ? "w-8 bg-[#0A0A0A]" : "w-2 bg-neutral-300 hover:bg-neutral-400"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default EditorialScrollScene;
