"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

export const CommunityFooter: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <footer className="w-full bg-[#080808] text-white border-t border-[#1C1C1C] relative overflow-hidden min-h-[620px] flex flex-col justify-between">
      
      {/* Background Layer: Dark Conference Room Image on bottom-left, smoothly shadowed and dissolving into the dark canvas */}
      <div 
        className="absolute left-0 bottom-0 w-[65%] sm:w-[50%] h-[75%] sm:h-[70%] pointer-events-none select-none z-0 mix-blend-screen opacity-50"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'left bottom',
          maskImage: 'radial-gradient(ellipse 90% 80% at 10% 90%, black 20%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 80% at 10% 90%, black 20%, transparent 80%)',
        }}
      />
      {/* Dark gradient overlays to guarantee seamless shadow blending without hard edges */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#080808]/70 to-[#080808] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#080808]/40 to-[#080808] pointer-events-none z-0" />

      {/* Main Content Container: max-w-[1720px] wide canvas */}
      <div className="max-w-[1720px] w-full mx-auto px-8 sm:px-14 lg:px-20 relative z-10 flex-1 flex flex-col justify-between pt-24 sm:pt-28 pb-12 gap-20 sm:gap-24">
        
        {/* Top Row: Left HÅLL KONTAKTEN! + Right 3 Columns */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16 w-full">
          
          {/* Left: Headline + Subtitle + Underline Input */}
          <div className="max-w-md w-full">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight uppercase leading-none mb-4 sm:mb-5">
              HÅLL KONTAKTEN!
            </h2>
            <p className="text-xs sm:text-[13px] text-[#8E8E8E] leading-relaxed max-w-sm mb-8 sm:mb-10">
              Få konkreta tips om mötesbokning, prospektering och pipeline – direkt i inkorgen.
            </p>

            {/* Underline Newsletter Input with arrow */}
            <form onSubmit={handleSubscribe} className="relative max-w-xs sm:max-w-sm w-full">
              {subscribed ? (
                <div className="flex items-center gap-2 text-xs text-[#7851A9] py-2 font-medium">
                  <Check size={14} />
                  <span>Tack! Du är nu uppskriven.</span>
                </div>
              ) : (
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Din mejladress"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent border-b border-white/20 pb-2.5 pt-1 text-xs text-white placeholder:text-[#555555] focus:border-white focus:outline-none transition-colors pr-8"
                  />
                  <button
                    type="submit"
                    aria-label="Prenumerera"
                    className="absolute right-0 bottom-2.5 text-[#777777] hover:text-white transition-colors cursor-pointer"
                  >
                    <ArrowUpRight size={15} />
                  </button>
                </div>
              )}
            </form>
          </div>

          {/* Right: 3 Navigation & Info Columns (UTFORSKA, SOCIALT, KONTAKT) pushed far right */}
          <div className="w-full lg:w-auto grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
            
            {/* UTFORSKA */}
            <div>
              <span className="text-[11px] font-mono tracking-widest text-[#777777] uppercase block mb-5">
                UTFORSKA
              </span>
              <ul className="space-y-3 text-xs sm:text-[13px] text-[#A8A8A8]">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">Hem</Link>
                </li>

                <li>
                  <Link href="/case" className="hover:text-white transition-colors">Case</Link>
                </li>
                <li>
                  <Link href="/om" className="hover:text-white transition-colors">Om oss</Link>
                </li>
              </ul>
            </div>

            {/* SOCIALT */}
            <div>
              <span className="text-[11px] font-mono tracking-widest text-[#777777] uppercase block mb-5">
                SOCIALT
              </span>
              <ul className="space-y-3 text-xs sm:text-[13px] text-[#A8A8A8]">
                <li>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
                </li>
                <li>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
                </li>
                <li>
                  <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">X</a>
                </li>
              </ul>
            </div>

            {/* KONTAKT */}
            <div className="col-span-2 sm:col-span-1">
              <span className="text-[11px] font-mono tracking-widest text-[#777777] uppercase block mb-5">
                KONTAKT
              </span>
              <div className="text-xs sm:text-[13px] text-[#A8A8A8]">
                <a href="mailto:kontakt@hardcallsales.se" className="hover:text-white transition-colors break-all">
                  kontakt@hardcallsales.se
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Bar: Left HARD CALL + Right Copyright & Legal */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 pt-14 sm:pt-16 border-t border-white/[0.06]">
          
          {/* HARD CALL Wordmark on Left */}
          <div className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-widest text-white uppercase font-sans">
            HARD CALL
          </div>

          {/* Copyright & Legal Links on Right */}
          <div className="text-left sm:text-right flex flex-col gap-1.5 text-xs text-[#6E6E6E]">
            <div>© 2026 Hard Call Sales AB. Alla rättigheter förbehållna.</div>
            <div className="flex items-center justify-start sm:justify-end gap-5 text-[#555555] text-[11px]">
              <Link href="/om" className="hover:text-white transition-colors">Integritetspolicy</Link>
              <Link href="/om" className="hover:text-white transition-colors">Villkor</Link>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
};
