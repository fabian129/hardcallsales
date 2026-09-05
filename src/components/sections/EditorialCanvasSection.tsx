"use client";

import React, { useRef, useState, useEffect } from "react";
import { CloudFogShader } from "@/components/ui/CloudFogShader";

export const EditorialCanvasSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [dimOpacity, setDimOpacity] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollable = rect.height - windowHeight;
      if (totalScrollable <= 0) return;

      const scrolled = -rect.top;
      const progress = Math.min(Math.max(scrolled / totalScrollable, 0), 1);
      setScrollProgress(progress);

      // Synkroniserad släckning mot nästa mörka sektion: Drivs exakt när sticky unpinnas
      const distance = windowHeight - rect.bottom;
      const dim = Math.min(1, Math.max(0, distance / (windowHeight * 0.22)));
      setDimOpacity(dim);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // De 3 redaktionella faserna över scroll-spännet
  const isStage1 = scrollProgress < 0.34;
  const isStage2 = scrollProgress >= 0.34 && scrollProgress < 0.68;
  const isStage3 = scrollProgress >= 0.68;

  // Kontinuerlig mjuk expansion för Fas 02 & 03 (100% kant i kant, noll hopp, scroll-kopplad)
  const stage23Progress = Math.min(Math.max((scrollProgress - 0.34) / 0.66, 0), 1);
  const domeScale = 1.0 + stage23Progress * 0.10; // Subtil 10% kontinuerlig tillväxt medan man scrollar

  return (
    <section
      ref={sectionRef}
      id="manifest"
      className="relative w-full h-[200vh] bg-[#FFFFFF] text-neutral-900 border-t border-black/[0.06] select-none"
    >
      {/* ── STICKY VIEWPORT CONTAINER ── */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between bg-[#FFFFFF]">
        
        {/* ── 1. ARCHITECTURAL GRID GUIDES (Hårfina linjer på duken — synliga över alla faser) ── */}
        <div className="absolute inset-0 pointer-events-none select-none z-[5] max-w-[1760px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 h-full">
          <div className="border-r border-black/[0.035] h-full" />
          <div className="border-r border-black/[0.035] h-full" />
          <div className="border-r border-black/[0.035] h-full hidden md:block" />
          <div className="border-r border-black/[0.035] h-full hidden md:block" />
          <div className="border-r border-black/[0.035] h-full hidden lg:block" />
          <div className="h-full hidden lg:block" />
        </div>

        {/* ── FAS 01 BILD: ARKITEKTONISK OKULUS (FRAMING MOT HIMMEL) ── */}
        <div
          className={`absolute inset-0 pointer-events-none select-none z-[3] flex items-center justify-center transition-all duration-700 ease-out ${
            isStage1 ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          <img
            src="/images/architecture-oculus-4k.jpg"
            alt="Arkitektonisk oculus"
            className="w-full h-full object-cover object-center transition-transform duration-500 ease-out"
            style={{
              transform: `scale(${1.01 + scrollProgress * 0.04}) translate3d(${mousePos.x * -6}px, ${mousePos.y * -4}px, 0)`,
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transformStyle: "preserve-3d",
            }}
          />
        </div>

        {/* ── FAS 02 & 03 BILD: ESPLANADE KUPOL (100% KANT I KANT · KONTINUERLIG MJUK SCROLL-EXPANSION) ── */}
        <div
          className={`absolute bottom-0 left-0 pointer-events-none select-none z-[3] flex items-end justify-start leading-none transition-opacity duration-500 ease-out ${
            !isStage1 ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <img
            src="/images/architecture-esplanade-clean.png"
            alt="Geometrisk kupol"
            className="block w-[360px] sm:w-[500px] md:w-[600px] lg:w-[720px] xl:w-[820px] h-auto object-contain object-bottom-left origin-bottom-left"
            style={{
              transform: `scale(${domeScale})`,
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              willChange: "transform",
            }}
          />
        </div>

        {/* ── 4. TECHNICAL HUD & COORDINATES (Nedflyttad så den landar rent på vita duken, fritt från headern) ── */}
        <div className="absolute top-24 sm:top-28 lg:top-32 inset-x-6 sm:inset-x-12 lg:inset-x-16 xl:inset-x-20 pointer-events-none select-none z-[10]">
          <div className="max-w-[1760px] mx-auto flex items-center justify-between text-[10px] font-mono text-black/45 uppercase tracking-[0.2em]">
            <span className="flex items-center gap-1.5">
              <span className="text-black/60">+</span> ARCH // SEC.02
            </span>
            <span className="flex items-center gap-1.5">
              FAS {isStage1 ? "01" : isStage2 ? "02" : "03"} / 03 <span className="text-black/60">+</span>
            </span>
          </div>
        </div>

        {/* Hårfina hörnmarkörer i botten */}
        <div className="absolute bottom-8 sm:bottom-10 inset-x-6 sm:inset-x-12 lg:inset-x-16 xl:inset-x-20 pointer-events-none select-none z-[10]">
          <div className="max-w-[1760px] mx-auto flex items-center justify-between text-[10px] font-mono text-black/25">
            <span>+</span>
            <span>+</span>
          </div>
        </div>

        {/* ── 5. DE TRE REDAKTIONELLA STEGEN (Rena Swiss editorial-texter utan boxar) ── */}
        <div className="relative z-20 w-full max-w-[1760px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 h-full">
          
          {/* ════════ STAGE 1: MANIFESTO (Vänsterställt slightly till vänster) ════════ */}
          <div
            className={`absolute left-6 sm:left-12 lg:left-[14vw] xl:left-[18vw] top-1/2 -translate-y-1/2 flex flex-col items-start text-left max-w-2xl xl:max-w-3xl transition-all duration-700 ease-out ${
              isStage1
                ? "opacity-100 translate-y-[-50%] pointer-events-auto"
                : "opacity-0 translate-y-[-58%] pointer-events-none"
            }`}
          >
            <div className="inline-flex items-center gap-2 mb-4 sm:mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
              <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.2em] font-medium text-neutral-500 uppercase">
                MANIFEST
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-[62px] xl:text-[70px] font-normal text-[#0A0A0A] leading-[1.1] sm:leading-[1.05] tracking-[-0.03em]">
              Vi bokar möten med beslutsfattare som{" "}
              <span className="text-neutral-400 font-normal">
                faktiskt kan säga ja.
              </span>
            </h2>

            <p className="mt-4 sm:mt-6 text-base sm:text-xl text-neutral-600 font-normal leading-relaxed max-w-xl tracking-tight">
              Ingen egen SDR-funktion, ingen uppstartstid — bara kvalificerade möten i kalendern och affärer som stänger.
            </p>
          </div>

          {/* ════════ STAGE 2: METODIK & FOKUS ════════ */}
          <div
            className={`absolute inset-x-6 sm:inset-x-12 lg:inset-x-16 xl:inset-x-20 top-[12vh] sm:top-[16%] transition-all duration-700 ease-out ${
              isStage2
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : scrollProgress < 0.34
                ? "opacity-0 translate-y-12 pointer-events-none"
                : "opacity-0 -translate-y-8 pointer-events-none"
            }`}
          >
            <div className="flex flex-col lg:flex-row items-start justify-between gap-8 sm:gap-12 lg:gap-20">
              {/* Vänster kolumn: Rubrik */}
              <div className="w-full lg:w-[40%]">
                <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.2em] font-medium text-neutral-500 uppercase block mb-3 sm:mb-4">
                  METODIK &amp; FOKUS
                </span>
                <h3 className="text-2xl sm:text-4xl lg:text-5xl font-normal text-[#0A0A0A] leading-[1.15] sm:leading-[1.12] tracking-tight">
                  Vi bygger pipeline för IT &amp; SaaS som leder till avslut.
                </h3>
              </div>

              {/* Höger kolumn: Flyttad ner en aning, större och mer lättläst */}
              <div className="w-full lg:w-[48%] max-w-2xl flex flex-col gap-6 sm:gap-8 pt-4 sm:pt-8 lg:pt-14">
                <p className="text-base sm:text-xl lg:text-[23px] text-neutral-800 font-normal leading-[1.65] tracking-tight">
                  På Hard Call Sales hjälper vi IT- och SaaS-bolag att boka möten med rätt beslutsfattare. Det spelar ingen roll om era kunder finns inom industri, bygg, finans eller offentlig sektor — vi identifierar och kvalificerar dem mot era krav.
                </p>
                <p className="text-base sm:text-xl lg:text-[23px] text-neutral-800 font-normal leading-[1.65] tracking-tight">
                  Vi skapar intelligenta kampanjer via e-post och LinkedIn. Men när någon visar köpintresse ersätter vi inte säljhantverket med robotar — vårt erfarna säljteam tar vid via telefon och bokar mötet i en genuin dialog.
                </p>
              </div>
            </div>
          </div>

          {/* ════════ STAGE 3: ERFARENHET & RESULTAT (Faller ner på högersidan) ════════ */}
          <div
            className={`absolute right-6 sm:right-12 lg:right-16 xl:right-20 top-[18vh] sm:top-[22%] w-full lg:w-[50%] xl:w-[46%] max-w-2xl transition-all duration-700 ease-out ${
              isStage3
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 translate-y-12 pointer-events-none"
            }`}
          >
            <div>
              <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.2em] font-medium text-neutral-500 uppercase block mb-3 sm:mb-4">
                ERFARENHET &amp; RESULTAT
              </span>
              
              <blockquote className="text-2xl sm:text-4xl lg:text-[44px] font-normal text-[#0A0A0A] tracking-tight leading-[1.2] sm:leading-[1.15] mb-5 sm:mb-6">
                ”Hard Call Sales har levererat över 20 MSEK i nya affärer för oss.”
              </blockquote>
              <cite className="block text-xs sm:text-base font-mono tracking-wider uppercase text-neutral-500 not-italic mb-6 sm:mb-8">
                — Mattias Holm, Säljchef på AVEVA
              </cite>

              <div className="pt-6 border-t border-black/10 flex flex-col gap-6">
                <p className="text-sm sm:text-lg text-neutral-700 leading-relaxed font-normal">
                  Våra säljare har i snitt över <strong className="text-neutral-900 font-semibold">10 000 timmars säljerfarenhet</strong>. Resultatet är hundratals miljoner kronor i genererat affärsvärde för både uppstickare och marknadsledare.
                </p>
                <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs sm:text-sm font-medium text-neutral-500">
                  <span className="text-neutral-900 font-semibold">Kunder:</span>
                  <span>Monster</span>
                  <span>IDNet</span>
                  <span>Wall to Wall</span>
                  <span>Allt om Juridik</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ── 6. LÄSINDIKATOR & PROGRESSION I MITTEN AV SKÄRMEN (Ren Swiss Editorial direkt på duken — inget pill) ── */}
        <div className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 z-30 pointer-events-auto select-none">
          <div className="flex items-center gap-3.5 sm:gap-5 text-neutral-800">
            <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.2em] uppercase text-neutral-500 font-medium whitespace-nowrap">
              Scrolla för nästa fas
            </span>
            <div className="flex items-center gap-1.5">
              <div className={`h-[2px] rounded-full transition-all duration-300 ${isStage1 ? "w-7 bg-[#0A0A0A]" : "w-1.5 bg-neutral-300"}`} />
              <div className={`h-[2px] rounded-full transition-all duration-300 ${isStage2 ? "w-7 bg-[#0A0A0A]" : "w-1.5 bg-neutral-300"}`} />
              <div className={`h-[2px] rounded-full transition-all duration-300 ${isStage3 ? "w-7 bg-[#0A0A0A]" : "w-1.5 bg-neutral-300"}`} />
            </div>
            <span className="text-[10px] sm:text-[11px] font-mono tracking-wider text-neutral-400 font-medium pl-2 border-l border-neutral-300">
              {isStage1 ? "01" : isStage2 ? "02" : "03"} / 03
            </span>
          </div>
        </div>

        {/* ── 7. DIMMER OVERLAY MOT NÄSTA MÖRKA SEKTION (Släcker ner duken till #0A0A0A) ── */}
        <div
          className="absolute inset-0 bg-[#0A0A0A] pointer-events-none z-40 transition-opacity duration-75 ease-linear"
          style={{ opacity: dimOpacity }}
        />

      </div>
    </section>
  );
};
