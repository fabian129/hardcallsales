"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  FileText,
  Mail,
  MapPin,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  Upload,
  User,
  X,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

export default function CareersPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    linkedin: "",
    location: "Stockholm (Östermalm)",
    experience: "",
    whyUs: "",
    strength: "",
    file: null as File | null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, file: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 900));
    setIsSubmitting(false);
    setIsSuccess(true);
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="w-full min-h-screen bg-[#0A0A0A] text-white">
      <Header />

      {/* ── BREADCRUMB & BACK LINK ── */}
      <div className="w-full max-w-[1480px] mx-auto px-4 sm:px-8 lg:px-12 pt-28 sm:pt-36 pb-6">
        <Link
          href="/"
          className="inline-flex items-center text-xs font-mono tracking-widest text-neutral-400 hover:text-white transition-colors uppercase group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
          Tillbaka till startsidan
        </Link>
      </div>

      <div className="w-full max-w-[1480px] mx-auto px-4 sm:px-8 lg:px-12 pb-28">

        {/* ── 1. EDITORIAL CINEMATIC HERO CARD (PANSTROY-STYLE FROSTED GLASS SHOWCASE) ── */}
        <section className="rounded-[24px] sm:rounded-[36px] bg-[#0A0A0C] border border-white/15 shadow-2xl relative overflow-hidden mb-8 sm:mb-12 min-h-[580px] sm:min-h-[660px] lg:min-h-[720px] flex items-center justify-center select-none">
          {/* Background Image: Svartvit editorial bild med ljusportal och gående affärskvinna */}
          <img
            src="/images/careers-editorial-walking-bw.jpg"
            alt="Hard Call Sales Karriär"
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none grayscale contrast-110"
          />

          {/* Cinematic Dark Vignette & Shadow Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/50 pointer-events-none" />
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />

          {/* Thin Architectural Glass Door Divider Lines */}
          <div className="absolute inset-0 pointer-events-none hidden md:grid grid-cols-12 max-w-[1520px] mx-auto z-10">
            <div className="col-span-4 border-r border-white/[0.07] h-full" />
            <div className="col-span-4 border-r border-white/[0.07] h-full" />
            <div className="col-span-4 h-full" />
          </div>

          {/* ── TOP-LEFT: CATEGORY / CONTEXT ── */}
          <div className="absolute top-6 sm:top-10 left-6 sm:left-10 lg:left-12 z-20">
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.25em] text-white/80 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              KARRIÄR · HARD CALL SALES
            </span>
          </div>

          {/* ── UPPER LEFT-CENTER: PHILOSOPHY ── */}
          <div className="absolute top-20 sm:top-28 left-6 sm:left-[16%] lg:left-[22%] z-20 max-w-[240px]">
            <p className="text-xs sm:text-[13px] font-sans uppercase tracking-[0.18em] text-white/90 font-medium leading-[1.65] drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
              PRESTATION FÖRE ADJEKTIV
              <br />
              ETT ÄKTA SÄLJHANTVERK
            </p>
          </div>

          {/* ── DEAD CENTER: AUTHENTIC HCS BRAND LOGO ── */}
          <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 max-w-xl mx-auto">
            <img
              src="/images/logo/hcs-full-logo-hq.png"
              alt="The Hard Call Sales Group"
              className="h-14 sm:h-20 lg:h-24 w-auto object-contain brightness-0 invert drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)] transition-transform duration-300 hover:scale-105"
            />
            <div className="inline-flex items-center gap-2 mt-4 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 shadow-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7851A9]" />
              <span className="text-[11px] sm:text-xs font-mono tracking-widest text-neutral-300 uppercase">
                B2B-MÖTESBOKNING · STOCKHOLM &amp; MALTA
              </span>
            </div>
          </div>

          {/* ── CENTER-RIGHT: AUDIENCE / ROLE ── */}
          <div className="absolute top-1/2 -translate-y-1/2 right-6 sm:right-10 lg:right-16 z-20 max-w-[200px] sm:max-w-[240px] text-right sm:text-left">
            <p className="text-xs sm:text-[13px] font-sans uppercase tracking-[0.18em] text-white/85 font-medium leading-[1.65] drop-shadow-md">
              FÖR NORDENS FRÄMSTA
              <br />
              B2B-SÄLJARE &amp; TALANGER
            </p>
          </div>

          {/* ── LOWER-LEFT: FOUNDERS / HUBS ── */}
          <div className="absolute bottom-24 sm:bottom-28 left-6 sm:left-[16%] lg:left-[22%] z-20 hidden sm:block">
            <p className="text-xs sm:text-[13px] font-sans uppercase tracking-[0.18em] text-white/75 font-medium leading-[1.65] drop-shadow-md">
              FAST LÖN + PROVISION
              <br />
              PONTUS · JOAKIM · MALIN
            </p>
          </div>

          {/* ── BOTTOM-LEFT CTA BUTTON (EXACT MATCH TO NAVBAR BUTTON) ── */}
          <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 lg:left-12 z-20">
            <Button
              variant="primary"
              size="md"
              hasArrow
              onClick={() => formRef.current?.scrollIntoView({ behavior: "smooth" })}
            >
              Ansök nedan
            </Button>
          </div>

          {/* ── BOTTOM-RIGHT STATUS PILL ── */}
          <div className="absolute bottom-6 sm:bottom-10 right-6 sm:right-10 lg:right-12 z-20">
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-black/60 border border-white/15 text-neutral-300 text-xs font-mono backdrop-blur-md shadow-xl">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Svar inom 24–48h</span>
            </div>
          </div>
        </section>

        {/* ── 2. ANSÖKNINGSFORMULÄR: SLOTTAR DÄR MAN KAN FYLLA TEXT ── */}
        <section ref={formRef} className="rounded-[24px] sm:rounded-[36px] bg-[#111111] border border-white/10 p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          
          {isSuccess ? (
            <div className="py-16 sm:py-24 text-center max-w-xl mx-auto flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
                <CheckCircle2 size={36} />
              </div>

              <h2 className="text-3xl sm:text-4xl font-medium text-white tracking-tight mb-4">
                Tack för din ansökan, {formData.fullName.split(" ")[0]}!
              </h2>

              <p className="text-neutral-400 text-base sm:text-lg leading-relaxed mb-8">
                Vi har tagit emot dina svar och sparar dina kontaktuppgifter. Pontus, Joakim och Malin går igenom alla inkomna kandidater löpande. Vi hör av oss inom 24–48 timmar.
              </p>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-xs font-mono text-neutral-400 flex items-center gap-3">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Bekräftelse skickad till {formData.email || "din e-post"}</span>
              </div>
            </div>
          ) : (
            <div>
              {/* Sektions-header för formuläret */}
              <div className="max-w-3xl mb-12 sm:mb-16">
                <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase block mb-3">
                  ANSÖKNINGSSYTA · DINA ORD
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-4">
                  Berätta vem du är.
                </h2>
                <p className="text-neutral-400 text-base sm:text-lg leading-relaxed font-light">
                  Vi förväntar oss inga standardiserade personliga brev. Skriv ärligt och direkt i slottarna nedan vad du har gjort och vad du vill åstadkomma.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-10">
                
                {/* ── SLOT 01: Vem är du? (Basuppgifter) ── */}
                <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.07]">
                  <div className="flex items-center gap-2 mb-6">
                    <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">Slot 01</span>
                    <span className="text-neutral-600">·</span>
                    <h3 className="text-lg font-medium text-white">Kontakt &amp; Identitet</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
                        Fullständigt namn *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Förnamn Efternamn"
                        className="w-full px-4 py-3.5 bg-black/40 border border-white/10 rounded-xl text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-white/40 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
                        Telefonnummer *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+46 70 000 00 00"
                        className="w-full px-4 py-3.5 bg-black/40 border border-white/10 rounded-xl text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-white/40 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
                        E-postadress *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="namn@epost.se"
                        className="w-full px-4 py-3.5 bg-black/40 border border-white/10 rounded-xl text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-white/40 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
                        LinkedIn-länk eller hemsida (frivilligt)
                      </label>
                      <input
                        type="url"
                        name="linkedin"
                        value={formData.linkedin}
                        onChange={handleChange}
                        placeholder="https://linkedin.com/in/ditt-namn"
                        className="w-full px-4 py-3.5 bg-black/40 border border-white/10 rounded-xl text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-white/40 transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* ── SLOT 02: Placering & Tillgänglighet ── */}
                <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.07]">
                  <div className="flex items-center gap-2 mb-6">
                    <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">Slot 02</span>
                    <span className="text-neutral-600">·</span>
                    <h3 className="text-lg font-medium text-white">Önskad placering</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                      "Stockholm (Östermalm)",
                      "Sliema, Malta (12th Floor)",
                      "Distans",
                      "Flexibel / Öppen för båda",
                    ].map((loc) => (
                      <button
                        type="button"
                        key={loc}
                        onClick={() => setFormData((prev) => ({ ...prev, location: loc }))}
                        className={`p-4 rounded-xl border text-left text-sm transition-all duration-200 cursor-pointer ${
                          formData.location === loc
                            ? "bg-white text-black border-white font-medium shadow-md"
                            : "bg-black/30 text-neutral-300 border-white/10 hover:border-white/25"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{loc}</span>
                          {formData.location === loc && (
                            <CheckCircle2 className="w-4 h-4 text-black" />
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* ── SLOT 03: Varför söker du till Hard Call Sales? ── */}
                <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.07]">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">Slot 03</span>
                    <span className="text-neutral-600">·</span>
                    <h3 className="text-lg font-medium text-white">Varför vill du arbeta här?</h3>
                  </div>
                  <p className="text-xs text-neutral-400 mb-4">
                    Vad fick dig att titta på Hard Call Sales och vad vill du uppnå hos oss som du inte kan göra någon annanstans?
                  </p>
                  <textarea
                    name="whyUs"
                    rows={3}
                    required
                    value={formData.whyUs}
                    onChange={handleChange}
                    placeholder="Dina tankar kring vår modell och varför du vill in i teamet..."
                    className="w-full p-4 bg-black/40 border border-white/10 rounded-xl text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-white/40 transition-colors resize-y leading-relaxed"
                  />
                </div>

                {/* ── SLOT 04: CV / Meritförteckning ── */}
                <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.07]">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">Slot 04</span>
                    <span className="text-neutral-600">·</span>
                    <h3 className="text-lg font-medium text-white">Meritförteckning / CV</h3>
                  </div>
                  <p className="text-xs text-neutral-400 mb-4">
                    Ladda upp ett CV (PDF eller Word) om du har ett till hands.
                  </p>

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                  />

                  {formData.file ? (
                    <div className="flex items-center justify-between p-4 bg-black/40 border border-white/20 rounded-xl text-sm">
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-neutral-300" />
                        <div>
                          <p className="text-white font-medium">{formData.file.name}</p>
                          <p className="text-xs text-neutral-400">
                            {(formData.file.size / (1024 * 1024)).toFixed(2)} MB
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => setFormData((prev) => ({ ...prev, file: null }))}
                        className="p-1 text-neutral-400 hover:text-white"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full p-6 border border-dashed border-white/15 hover:border-white/30 rounded-xl bg-black/20 hover:bg-black/40 transition-colors flex flex-col items-center justify-center gap-2 text-neutral-400 text-xs font-mono uppercase tracking-wider cursor-pointer"
                    >
                      <Upload className="w-5 h-5 text-neutral-300" />
                      <span>Klicka för att bifoga CV (PDF, DOCX)</span>
                    </button>
                  )}
                </div>

                {/* ── SUBMIT BUTTON ── */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-neutral-500">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Dina uppgifter behandlas konfidentiellt av ledningsgruppen.</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-10 py-4 rounded-full bg-white text-black font-medium text-sm tracking-wide uppercase hover:bg-neutral-200 transition-colors shadow-xl flex items-center justify-center gap-3 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Skickar...</span>
                    ) : (
                      <>
                        <span>Skicka in ansökan</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

              </form>
            </div>
          )}

        </section>

      </div>

      <Footer />
    </main>
  );
}

