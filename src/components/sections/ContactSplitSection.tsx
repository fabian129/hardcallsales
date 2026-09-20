"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";

export const ContactSplitSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"email" | "calendar">("email");
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="kontakt" className="w-full bg-[#0D0D0D] py-28 sm:py-36 border-b border-[#1F1F1F] relative overflow-hidden">
      
      {/* Subtle vertical architectural grid lines matching the process section */}
      <div className="absolute inset-0 pointer-events-none max-w-[1500px] mx-auto grid grid-cols-4 border-x border-white/[0.03]">
        <div className="border-r border-white/[0.03] h-full" />
        <div className="border-r border-white/[0.03] h-full" />
        <div className="border-r border-white/[0.03] h-full" />
      </div>

      <Container size="wide" className="relative z-10">
        {/* Large White Container Box - enlarged and more spacious */}
        <div className="max-w-[1280px] mx-auto rounded-[36px] bg-white p-7 sm:p-10 lg:p-12 xl:p-14 shadow-2xl border border-[#EBEBEB]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-stretch">
            
            {/* Left Side: Dark Hero Info Card */}
            <div className="lg:col-span-5 rounded-[28px] bg-[#0D0D0D] text-white p-8 sm:p-10 lg:p-12 xl:p-13 flex flex-col justify-between shadow-xl min-h-[600px] lg:min-h-[660px]">
              <div>
                {/* Official Hard Call Sales Brand Logo in Top-Left */}
                <div className="flex items-center gap-3 mb-10 sm:mb-12">
                  <div className="w-4 h-4 bg-white [clip-path:polygon(100%_0,0_50%,100%_100%)] shrink-0" />
                  <div className="flex flex-col leading-none">
                    <span className="font-bold tracking-widest text-xs sm:text-[13px] uppercase text-white font-sans">HARD CALL</span>
                    <span className="text-[10px] sm:text-[11px] text-[#888888] font-medium tracking-wider uppercase font-sans mt-0.5">sales</span>
                  </div>
                </div>

                {/* Main Heading */}
                <h3 className="text-3xl sm:text-4xl lg:text-[40px] font-normal tracking-tight leading-[1.16] mb-6 sm:mb-7 text-white">
                  <span className="text-[#7851A9] font-medium">Boka</span> ett samtal med<br />vår mötesexpert
                </h3>

                {/* Body Paragraph */}
                <p className="text-sm sm:text-[15px] text-[#9E9E9E] font-normal leading-[1.65] mb-8 sm:mb-10">
                  Vår mötesexpert går igenom din pipeline med dig. Oavsett om ni säljer till IT-chefer, SaaS-bolag eller upphandlare bygger vi ett upplägg som passar er — och visar exakt hur en pilot skulle se ut hos er.
                </p>
              </div>

              {/* Bottom Testimonial Block: Centered text in box + author Mattias Holm / Säljchef, AVEVA centered underneath + active white line and gray dot */}
              <div className="flex flex-col items-center">
                {/* Centered AVEVA Box */}
                <div className="w-full rounded-[18px] bg-[#161616] border border-white/[0.08] p-5 sm:p-6 text-white shadow-md text-center">
                  <div className="flex items-center justify-center gap-2 text-[11px] font-mono text-[#A8A8A8] uppercase tracking-wider mb-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-white inline-block" />
                    <span>AVEVA</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#E0E0E0] font-normal leading-relaxed text-center">
                    ”Hard Call Sales fyllde kalendern på sex veckor. Vi slapp bygga en egen SDR-funktion.”
                  </p>
                </div>

                {/* Centered Author Underneath */}
                <div className="text-center mt-3.5 sm:mt-4">
                  <span className="font-semibold text-white text-xs sm:text-sm block">Mattias Holm</span>
                  <span className="text-[#777777] text-[11px] sm:text-xs block mt-0.5">Säljchef, AVEVA</span>
                </div>

                {/* Testimonial Pagination Indicator: Active white line + gray dot */}
                <div className="flex items-center justify-center gap-2 mt-3.5 sm:mt-4">
                  <span className="w-4 h-0.5 rounded-full bg-white" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#333333]" />
                </div>
              </div>

            </div>

            {/* Right Side: Exact Form Layout from Prov: Kontaktytan - enlarged and comfortable */}
            <div className="lg:col-span-7 bg-white p-3 sm:p-6 lg:p-8 xl:p-10 flex flex-col justify-between h-full">
              <div className="flex-1 flex flex-col justify-between">
                {/* Form Tabs */}
                <div className="flex items-center gap-8 sm:gap-10 border-b border-[#E5E5E5] mb-8 sm:mb-10 pb-3 sm:pb-4">
                  <button
                    type="button"
                    onClick={() => setActiveTab("email")}
                    className={`text-sm sm:text-base font-semibold pb-3 sm:pb-4 -mb-3 sm:-mb-4 transition-colors cursor-pointer ${
                      activeTab === "email"
                        ? "text-black border-b-2 border-black"
                        : "text-[#888888] hover:text-black"
                    }`}
                  >
                    Kontakta via mejl
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("calendar")}
                    className={`text-sm sm:text-base font-semibold pb-3 sm:pb-4 -mb-3 sm:-mb-4 transition-colors cursor-pointer ${
                      activeTab === "calendar"
                        ? "text-black border-b-2 border-black"
                        : "text-[#888888] hover:text-black"
                    }`}
                  >
                    Boka direkt i kalendern
                  </button>
                </div>

                {submitted ? (
                  <div className="py-24 text-center my-auto">
                    <h4 className="text-2xl sm:text-3xl font-bold text-black mb-3">Tack för ditt meddelande!</h4>
                    <p className="text-base text-[#666666]">Vår mötesexpert hör av sig inom kort.</p>
                  </div>
                ) : activeTab === "calendar" ? (
                  <div className="py-20 text-center text-sm sm:text-base text-[#777777] my-auto">
                    <p className="mb-4 font-medium text-black">Kalenderintegration aktiverad.</p>
                    <p className="text-[#888888]">Välj en tid direkt med säljledningen i nästa steg.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex-1 flex flex-col justify-between">
                    <div className="space-y-7 sm:space-y-8">
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-[#4B4B4B] mb-2">
                          Förnamn
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Ange ditt förnamn"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          className="w-full pb-3 pt-1 border-b border-[#E0E0E0] focus:border-black text-sm sm:text-base text-black placeholder:text-[#AAAAAA] focus:outline-none transition-colors bg-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-[#4B4B4B] mb-2">
                          Efternamn
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Ange ditt efternamn"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          className="w-full pb-3 pt-1 border-b border-[#E0E0E0] focus:border-black text-sm sm:text-base text-black placeholder:text-[#AAAAAA] focus:outline-none transition-colors bg-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-[#4B4B4B] mb-2">
                          Mejl
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="Ange din mejladress"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pb-3 pt-1 border-b border-[#E0E0E0] focus:border-black text-sm sm:text-base text-black placeholder:text-[#AAAAAA] focus:outline-none transition-colors bg-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-[#4B4B4B] mb-2">
                          Vad kan vi hjälpa till med?
                        </label>
                        <input
                          type="text"
                          placeholder="Berätta kort om er försäljning i dag"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full pb-3 pt-1 border-b border-[#E0E0E0] focus:border-black text-sm sm:text-base text-black placeholder:text-[#AAAAAA] focus:outline-none transition-colors bg-transparent"
                        />
                      </div>
                    </div>

                    <div className="pt-10 sm:pt-12 mt-auto">
                      <button
                        type="submit"
                        className="w-full py-4.5 sm:py-5 px-8 rounded-xl bg-[#0A0A0A] hover:bg-[#262626] text-white text-sm sm:text-base font-semibold tracking-wide transition-all shadow-md hover:shadow-lg cursor-pointer"
                      >
                        Skicka meddelande
                      </button>
                    </div>
                  </form>
                )}
              </div>

            </div>

          </div>
        </div>
      </Container>
    </section>
  );
};
