import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowDown, Sparkles, Calendar, Mail } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { LeadershipCardsSection } from '@/components/sections/LeadershipCardsSection';

export const metadata: Metadata = {
  title: 'Ledning & Partners — Människorna bakom Hard Call Sales',
  description:
    'Lär känna ledningen bakom Hard Call Sales: Pontus Bredal-Hansen, Joakim Ström och Malin Berlin. Säljhantverk, pipeline-strategi och operativt ledarskap från Stockholm och Malta.',
};

export default function LeadershipPage() {
  return (
    <main className="w-full min-h-screen bg-[#050505] text-white flex flex-col">
      <Header />

      {/* ── 1. FULL EDITORIAL HERO MED HÖGUPPLÖST ARKITEKTURFOTO ── */}
      <section className="relative w-full min-h-[92vh] sm:min-h-screen flex flex-col justify-between overflow-hidden bg-white select-none pt-28 pb-12 sm:pb-16 border-b border-neutral-900">
        {/* Bakgrund: 2.5K Högupplöst arkitekturfoto som ramar in himlen */}
        <img
          src="/images/architecture-skylight-framed.jpg"
          alt="Hard Call Sales Ledningsarkitektur"
          className="absolute inset-0 w-full h-full object-cover object-center brightness-100 contrast-105 pointer-events-none"
        />

        {/* Diskret mjuk bottenövergång till mörka sektionen */}
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent pointer-events-none z-10" />

        {/* Huvudrubrik & Editorial Typografi placerad i den öppna rena himlen */}
        <div className="relative z-20 w-full max-w-[1480px] mx-auto px-6 sm:px-10 lg:px-16 pt-16 sm:pt-24 lg:pt-28 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/10 backdrop-blur-md border border-black/10 text-[11px] font-mono tracking-widest text-neutral-950 uppercase mb-6 sm:mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-neutral-950 animate-pulse" />
            <span>HARD CALL SALES · LEDNING &amp; PARTNERS</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-[76px] xl:text-[86px] font-medium tracking-tight text-neutral-950 leading-[1.04] max-w-4xl">
            Principer, säljhantverk <br />
            <span className="text-neutral-500 font-normal">&amp; operativt ledarskap.</span>
          </h1>

          {/* Tydlig och lättläst brödtext med hög kontrast och perfekt radavstånd */}
          <p className="mt-6 sm:mt-8 text-base sm:text-xl lg:text-[21px] text-neutral-800 font-normal max-w-2xl leading-relaxed">
            Vi grundade Hard Call Sales för att bevisa att kvalificerade B2B-möten aldrig bygger på slump. Det bygger på tusentals timmar av säljhantverk, absolut transparens och partners som själva leder från frontlinjen.
          </p>
        </div>

        {/* Botten-HUD ovanpå fasaderna */}
        <div className="relative z-20 w-full max-w-[1480px] mx-auto px-6 sm:px-10 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/90">
          <div className="flex items-center gap-4 uppercase tracking-wider">
            <span>STOCKHOLM (59.33°N)</span>
            <span>·</span>
            <span>SLIEMA, MALTA (35.91°N)</span>
          </div>

          <a
            href="#ledning"
            className="flex items-center gap-2 uppercase tracking-widest text-white hover:text-neutral-300 transition-colors animate-bounce"
          >
            <span>Scrolla för att möta ledningen</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

      {/* ── 2. LEDNINGSSEKTIONEN EXAKT SOM PÅ STARTSIDAN (SAMMA BAKGRUND, AURA & KORT) ── */}
      <LeadershipCardsSection />

      {/* ── 3. STRATEGISAMTAL MED LEDNINGEN (BOKA MÖTE CTA) ── */}
      <section className="w-full bg-[#0A0A0A] border-t border-neutral-800 py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-6 sm:px-12 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono tracking-widest text-neutral-300 uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#7851A9]" />
            <span>DIREKTDIALOG MED GRUNDARNA</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white mb-6">
            Boka ett strategisamtal direkt med ledningen.
          </h2>

          <p className="text-neutral-400 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed font-light">
            Gå igenom er målgrupp, er marknadspotential och hur en tre månaders pilot kan se ut för ert bolag. 20 minuter, 100 % förutsättningslöst.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/boka-mote"
              className="inline-flex items-center px-8 py-4 rounded-full bg-white text-black text-sm font-medium uppercase tracking-wider hover:bg-neutral-200 transition-colors shadow-xl"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Boka strategimöte
            </Link>
            <a
              href="mailto:info@hardcallsales.se"
              className="inline-flex items-center px-8 py-4 rounded-full bg-transparent border border-white/20 text-white text-sm font-medium uppercase tracking-wider hover:bg-white/10 transition-colors"
            >
              <Mail className="w-4 h-4 mr-2" />
              Skicka e-post till ledningen
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
