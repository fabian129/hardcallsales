"use client";

import React, { useState, useRef } from "react";
import {
  CheckCircle2,
  AlertCircle,
  User,
  Building2,
  Mail,
  Phone,
  Target,
  Calendar,
  Sparkles,
  Shield,
  Clock,
  Check,
  Bot,
  Users,
  Rocket,
  HelpCircle,
  Loader2,
  ArrowRight,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export interface BookingFormProps {
  initialService?: string;
  className?: string;
}

interface FormState {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  interest: string;
  industry: string;
  meetingVolume: string;
  revenueBracket: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  company?: string;
  email?: string;
  phone?: string;
  interest?: string;
  industry?: string;
  meetingVolume?: string;
  message?: string;
}

const INTEREST_OPTIONS = [
  {
    id: "motesbokning",
    label: "Mötesbokning B2B",
    desc: "10–100 bokade möten per månad",
    icon: Target,
  },
  {
    id: "fullstack",
    label: "Fullstack Säljteam",
    desc: "Komplett SDR-funktion & outreach",
    icon: Users,
  },
  {
    id: "linkedclient",
    label: "LinkedClient AI-Agent",
    desc: "AI-outreach & live demo",
    icon: Bot,
  },
  {
    id: "pilotstart",
    label: "Pilotstart (3 mån)",
    desc: "Testa utan bindningstid",
    icon: Rocket,
  },
  {
    id: "ovrigt",
    label: "Övrigt / Rådgivning",
    desc: "Pipelineanalys & rådgivning",
    icon: HelpCircle,
  },
];

const getInitialInterest = (serviceParam: string): string => {
  if (!serviceParam) return "motesbokning";
  const match = INTEREST_OPTIONS.find(
    (opt) =>
      opt.id.toLowerCase() === serviceParam.toLowerCase() ||
      opt.label.toLowerCase().includes(serviceParam.toLowerCase())
  );
  return match ? match.id : "motesbokning";
};

const INDUSTRY_OPTIONS = [
  "SaaS & Molntjänster",
  "IT-konsult & Systemutveckling",
  "Industri, Tillverkning & Tech",
  "FinTech & Finansiella Tjänster",
  "Cybersecurity & IT-infrastruktur",
  "Övrig B2B-verksamhet",
];

const MEETING_VOLUME_OPTIONS = [
  "10–25 möten per månad",
  "25–50 möten per månad",
  "50–100+ möten per månad",
  "Osäker — behöver rekommendation",
];

const REVENUE_OPTIONS = [
  "Under 10 MSEK",
  "10 – 50 MSEK",
  "50 – 150 MSEK",
  "Över 150 MSEK",
  "Vill ej ange",
];

export const BookingForm: React.FC<BookingFormProps> = ({
  initialService = "",
  className = "",
}) => {
  const [formData, setFormData] = useState<FormState>({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    interest: getInitialInterest(initialService),
    industry: INDUSTRY_OPTIONS[0],
    meetingVolume: MEETING_VOLUME_OPTIONS[0],
    revenueBracket: REVENUE_OPTIONS[1],
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormState | null>(null);

  const formRef = useRef<HTMLDivElement>(null);

  const [prevInitialService, setPrevInitialService] = useState(initialService);
  if (initialService !== prevInitialService) {
    setPrevInitialService(initialService);
    if (initialService) {
      const match = INTEREST_OPTIONS.find(
        (opt) =>
          opt.id.toLowerCase() === initialService.toLowerCase() ||
          opt.label.toLowerCase().includes(initialService.toLowerCase())
      );
      if (match) {
        setFormData((prev) => ({ ...prev, interest: match.id }));
      }
    }
  }

  const validate = (data: FormState): FormErrors => {
    const errs: FormErrors = {};

    if (!data.fullName.trim()) {
      errs.fullName = "Vänligen ange ditt för- och efternamn.";
    } else if (data.fullName.trim().length < 2) {
      errs.fullName = "Namnet är för kort.";
    }

    if (!data.company.trim()) {
      errs.company = "Vänligen ange ditt företagsnamn.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email.trim()) {
      errs.email = "Vänligen ange din e-postadress.";
    } else if (!emailRegex.test(data.email.trim())) {
      errs.email = "Ange en giltig e-postadress (gärna arbetsmejl).";
    }

    const phoneRegex = /^[+0-9\s-()]{6,20}$/;
    if (!data.phone.trim()) {
      errs.phone = "Vänligen ange ditt telefonnummer.";
    } else if (!phoneRegex.test(data.phone.trim().replace(/\s/g, ""))) {
      errs.phone = "Ange ett giltigt telefonnummer.";
    }

    if (!data.interest) {
      errs.interest = "Välj ett primärt intresseområde.";
    }

    return errs;
  };

  const handleBlur = (field: keyof FormState) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const currentErrors = validate(formData);
    setErrors(currentErrors);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const updated = { ...formData, [name]: value };
      const currentErrors = validate(updated);
      setErrors(currentErrors);
    }
  };

  const handleInterestSelect = (id: string) => {
    setFormData((prev) => ({ ...prev, interest: id }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setTouched({
      fullName: true,
      company: true,
      email: true,
      phone: true,
      interest: true,
    });

    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    setIsSubmitting(true);

    // Simulate genuine async network dispatch / server action
    await new Promise((resolve) => setTimeout(resolve, 1100));

    setIsSubmitting(false);
    setIsSuccess(true);
    setSubmittedData(formData);
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      company: "",
      email: "",
      phone: "",
      interest: getInitialInterest(initialService),
      industry: INDUSTRY_OPTIONS[0],
      meetingVolume: MEETING_VOLUME_OPTIONS[0],
      revenueBracket: REVENUE_OPTIONS[1],
      message: "",
    });
    setErrors({});
    setTouched({});
    setIsSuccess(false);
    setSubmittedData(null);
  };

  const selectedInterestObj = INTEREST_OPTIONS.find((o) => o.id === (submittedData?.interest || formData.interest));

  return (
    <div id="bokningsformular" ref={formRef} className={cn("w-full scroll-mt-24", className)}>
      <Card
        variant="dark"
        padding="lg"
        radius="lg"
        glow
        className="border-[#2B2B2B] bg-gradient-to-b from-[#141414] to-[#0D0D0D] shadow-2xl relative overflow-hidden"
      >
        {/* Ambient Top Glow */}
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#7851A9]/20 blur-[90px] rounded-full pointer-events-none" />

        {isSuccess && submittedData ? (
          /* SUCCESS STATE */
          <div className="py-8 sm:py-12 text-center max-w-xl mx-auto flex flex-col items-center animate-in fade-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-[#7851A9]/20 border border-[#7851A9] flex items-center justify-center text-[#9B7BC7] mb-6 shadow-[0_0_30px_rgba(120,81,169,0.4)]">
              <CheckCircle2 size={36} className="text-[#9B7BC7]" />
            </div>

            <Badge variant="purple-soft" size="md" className="mb-4">
              <Sparkles size={12} className="text-[#7851A9] mr-1" />
              <span>Bokningsförfrågan mottagen</span>
            </Badge>

            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
              Tack för din bokning, {submittedData.fullName.split(" ")[0]}!
            </h3>

            <p className="text-sm sm:text-base text-[#A8A8A8] leading-relaxed mb-6">
              Vi återkommer inom <strong className="text-white">2 timmar</strong> under kontorstid med kalenderinbjudan och möteslänk till{" "}
              <span className="text-[#9B7BC7] font-medium">{submittedData.email}</span>.
            </p>

            {/* Summary Box */}
            <div className="w-full bg-[#1A1A1A] border border-[#2B2B2B] rounded-2xl p-5 mb-8 text-left space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#7851A9] flex items-center gap-1.5">
                <Calendar size={14} />
                <span>Sammanfattning av förfrågan</span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm">
                <div>
                  <span className="text-[#6E6E6E] block text-[11px] uppercase">Företag:</span>
                  <span className="text-white font-medium">{submittedData.company}</span>
                </div>
                <div>
                  <span className="text-[#6E6E6E] block text-[11px] uppercase">Primärt intresse:</span>
                  <span className="text-white font-medium">{selectedInterestObj?.label}</span>
                </div>
                <div>
                  <span className="text-[#6E6E6E] block text-[11px] uppercase">Önskad volym:</span>
                  <span className="text-white font-medium">{submittedData.meetingVolume}</span>
                </div>
                <div>
                  <span className="text-[#6E6E6E] block text-[11px] uppercase">Telefon:</span>
                  <span className="text-white font-medium">{submittedData.phone}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full justify-center">
              <Button
                variant="outline"
                size="md"
                onClick={resetForm}
                className="text-xs sm:text-sm w-full sm:w-auto"
              >
                Gör en ny bokning
              </Button>
              <Button
                href="tel:+46708506304"
                variant="secondary"
                size="md"
                isExternal
                className="text-xs sm:text-sm w-full sm:w-auto"
              >
                Ring oss direkt: +46 70 850 63 04
              </Button>
            </div>
          </div>
        ) : (
          /* FORM ENTRY STATE */
          <div>
            {/* Header */}
            <div className="mb-8 sm:mb-10 text-center sm:text-left">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-3">
                <Badge variant="purple-soft" size="sm">
                  <Sparkles size={12} className="text-[#7851A9]" />
                  <span>15 min Strategisamtal</span>
                </Badge>
                <Badge variant="glass" size="sm">
                  <Clock size={12} className="mr-1 text-[#9B7BC7]" />
                  <span>Svar inom 2 timmar</span>
                </Badge>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
                Boka kostnadsfri pipelinegenomgång
              </h3>
              <p className="text-sm sm:text-base text-[#A8A8A8] max-w-2xl">
                Fyll i era uppgifter så återkommer en av våra seniora rådgivare med mötesinbjudan och en skräddarsydd analys av er målgrupp.
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-7">
              {/* Step 1: Intresseval */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#A8A8A8] mb-3">
                  1. Vad vill ni diskutera? <span className="text-[#7851A9]">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {INTEREST_OPTIONS.map((opt) => {
                    const isSelected = formData.interest === opt.id;
                    const IconComp = opt.icon;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => handleInterestSelect(opt.id)}
                        className={cn(
                          "p-3.5 rounded-xl border text-left flex items-start gap-3 transition-all cursor-pointer relative",
                          isSelected
                            ? "bg-[#7851A9]/20 border-[#7851A9] text-white shadow-[0_0_15px_rgba(120,81,169,0.3)]"
                            : "bg-[#181818] border-[#2B2B2B] text-[#A8A8A8] hover:border-white/20 hover:text-white"
                        )}
                      >
                        <div
                          className={cn(
                            "w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5",
                            isSelected
                              ? "bg-[#7851A9] text-white"
                              : "bg-white/5 text-[#A8A8A8]"
                          )}
                        >
                          <IconComp size={16} />
                        </div>
                        <div className="flex-1 min-w-0 pr-4">
                          <p className="text-xs sm:text-sm font-semibold text-white truncate">
                            {opt.label}
                          </p>
                          <p className="text-[11px] text-[#8E8E8E] leading-tight mt-0.5">
                            {opt.desc}
                          </p>
                        </div>
                        {isSelected && (
                          <div className="absolute top-3 right-3 w-4 h-4 rounded-full bg-[#7851A9] text-white flex items-center justify-center">
                            <Check size={10} strokeWidth={3} />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Kontaktuppgifter */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#A8A8A8] mb-3">
                  2. Era kontaktuppgifter
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Fullständigt namn */}
                  <div>
                    <label
                      htmlFor="booking-fullName"
                      className="block text-xs font-medium text-[#CCCCCC] mb-1.5"
                    >
                      Ditt namn <span className="text-[#7851A9]">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#6E6E6E]">
                        <User size={16} />
                      </div>
                      <input
                        type="text"
                        id="booking-fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        onBlur={() => handleBlur("fullName")}
                        placeholder="För- och efternamn"
                        className={cn(
                          "w-full pl-10 pr-4 py-3 bg-[#181818] border rounded-xl text-sm text-white placeholder-[#5A5A5A] transition-all focus:outline-none focus:ring-2 focus:ring-[#7851A9] focus:border-transparent",
                          errors.fullName && touched.fullName
                            ? "border-red-500/80 bg-red-950/10 focus:ring-red-500"
                            : "border-[#2B2B2B] hover:border-white/20"
                        )}
                        aria-invalid={!!(errors.fullName && touched.fullName)}
                      />
                    </div>
                    {errors.fullName && touched.fullName && (
                      <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle size={12} />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Företagsnamn */}
                  <div>
                    <label
                      htmlFor="booking-company"
                      className="block text-xs font-medium text-[#CCCCCC] mb-1.5"
                    >
                      Företagsnamn <span className="text-[#7851A9]">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#6E6E6E]">
                        <Building2 size={16} />
                      </div>
                      <input
                        type="text"
                        id="booking-company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        onBlur={() => handleBlur("company")}
                        placeholder="Företag AB"
                        className={cn(
                          "w-full pl-10 pr-4 py-3 bg-[#181818] border rounded-xl text-sm text-white placeholder-[#5A5A5A] transition-all focus:outline-none focus:ring-2 focus:ring-[#7851A9] focus:border-transparent",
                          errors.company && touched.company
                            ? "border-red-500/80 bg-red-950/10 focus:ring-red-500"
                            : "border-[#2B2B2B] hover:border-white/20"
                        )}
                        aria-invalid={!!(errors.company && touched.company)}
                      />
                    </div>
                    {errors.company && touched.company && (
                      <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle size={12} />
                        <span>{errors.company}</span>
                      </p>
                    )}
                  </div>

                  {/* Arbetsmejl */}
                  <div>
                    <label
                      htmlFor="booking-email"
                      className="block text-xs font-medium text-[#CCCCCC] mb-1.5"
                    >
                      Arbetsmejl <span className="text-[#7851A9]">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#6E6E6E]">
                        <Mail size={16} />
                      </div>
                      <input
                        type="email"
                        id="booking-email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={() => handleBlur("email")}
                        placeholder="namn@foretag.se"
                        className={cn(
                          "w-full pl-10 pr-4 py-3 bg-[#181818] border rounded-xl text-sm text-white placeholder-[#5A5A5A] transition-all focus:outline-none focus:ring-2 focus:ring-[#7851A9] focus:border-transparent",
                          errors.email && touched.email
                            ? "border-red-500/80 bg-red-950/10 focus:ring-red-500"
                            : "border-[#2B2B2B] hover:border-white/20"
                        )}
                        aria-invalid={!!(errors.email && touched.email)}
                      />
                    </div>
                    {errors.email && touched.email && (
                      <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle size={12} />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Telefonnummer */}
                  <div>
                    <label
                      htmlFor="booking-phone"
                      className="block text-xs font-medium text-[#CCCCCC] mb-1.5"
                    >
                      Telefonnummer <span className="text-[#7851A9]">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#6E6E6E]">
                        <Phone size={16} />
                      </div>
                      <input
                        type="tel"
                        id="booking-phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={() => handleBlur("phone")}
                        placeholder="+46 70 123 45 67"
                        className={cn(
                          "w-full pl-10 pr-4 py-3 bg-[#181818] border rounded-xl text-sm text-white placeholder-[#5A5A5A] transition-all focus:outline-none focus:ring-2 focus:ring-[#7851A9] focus:border-transparent",
                          errors.phone && touched.phone
                            ? "border-red-500/80 bg-red-950/10 focus:ring-red-500"
                            : "border-[#2B2B2B] hover:border-white/20"
                        )}
                        aria-invalid={!!(errors.phone && touched.phone)}
                      />
                    </div>
                    {errors.phone && touched.phone && (
                      <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle size={12} />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Step 3: Företagskontext & Volym */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#A8A8A8] mb-3">
                  3. Bransch, mötesvolym & team
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {/* Bransch */}
                  <div>
                    <label
                      htmlFor="booking-industry"
                      className="block text-xs font-medium text-[#CCCCCC] mb-1.5"
                    >
                      Bransch / Målgrupp
                    </label>
                    <select
                      id="booking-industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      className="w-full px-3.5 py-3 bg-[#181818] border border-[#2B2B2B] hover:border-white/20 rounded-xl text-sm text-white transition-all focus:outline-none focus:ring-2 focus:ring-[#7851A9] focus:border-transparent cursor-pointer"
                    >
                      {INDUSTRY_OPTIONS.map((ind) => (
                        <option key={ind} value={ind} className="bg-[#111111] text-white">
                          {ind}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Önskat antal möten */}
                  <div>
                    <label
                      htmlFor="booking-meetingVolume"
                      className="block text-xs font-medium text-[#CCCCCC] mb-1.5"
                    >
                      Önskad mötesvolym
                    </label>
                    <select
                      id="booking-meetingVolume"
                      name="meetingVolume"
                      value={formData.meetingVolume}
                      onChange={handleChange}
                      className="w-full px-3.5 py-3 bg-[#181818] border border-[#2B2B2B] hover:border-white/20 rounded-xl text-sm text-white transition-all focus:outline-none focus:ring-2 focus:ring-[#7851A9] focus:border-transparent cursor-pointer"
                    >
                      {MEETING_VOLUME_OPTIONS.map((vol) => (
                        <option key={vol} value={vol} className="bg-[#111111] text-white">
                          {vol}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Omsättning / Frivilligt */}
                  <div>
                    <label
                      htmlFor="booking-revenueBracket"
                      className="block text-xs font-medium text-[#CCCCCC] mb-1.5"
                    >
                      Omsättning <span className="text-[#6E6E6E] font-normal">(valfritt)</span>
                    </label>
                    <select
                      id="booking-revenueBracket"
                      name="revenueBracket"
                      value={formData.revenueBracket}
                      onChange={handleChange}
                      className="w-full px-3.5 py-3 bg-[#181818] border border-[#2B2B2B] hover:border-white/20 rounded-xl text-sm text-white transition-all focus:outline-none focus:ring-2 focus:ring-[#7851A9] focus:border-transparent cursor-pointer"
                    >
                      {REVENUE_OPTIONS.map((rev) => (
                        <option key={rev} value={rev} className="bg-[#111111] text-white">
                          {rev}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Step 4: Meddelande / Nuvarande utmaning */}
              <div>
                <label
                  htmlFor="booking-message"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#A8A8A8] mb-2"
                >
                  Nuvarande utmaning eller mål <span className="text-[#6E6E6E] font-normal lowercase">(valfritt)</span>
                </label>
                <textarea
                  id="booking-message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Beskriv kort vad ni säljer, vilka roller ni vill boka möten med eller era tillväxtmål..."
                  className="w-full px-4 py-3 bg-[#181818] border border-[#2B2B2B] hover:border-white/20 rounded-xl text-sm text-white placeholder-[#5A5A5A] transition-all focus:outline-none focus:ring-2 focus:ring-[#7851A9] focus:border-transparent resize-y"
                />
              </div>

              {/* Guarantees Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-[#A8A8A8] border-t border-white/5">
                <div className="flex items-center gap-2">
                  <Shield size={14} className="text-[#9B7BC7] shrink-0" />
                  <span>Ingen bindning under pilot</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#9B7BC7] shrink-0" />
                  <span>100% transparens i data</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={14} className="text-[#9B7BC7] shrink-0" />
                  <span>Snabb bekräftelse inom 2h</span>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  disabled={isSubmitting}
                  className="py-4 text-base shadow-[0_0_25px_rgba(120,81,169,0.45)] hover:shadow-[0_0_35px_rgba(120,81,169,0.65)]"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <Loader2 size={18} className="animate-spin" />
                      <span>Bokar strategisamtal & förbereder analys...</span>
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <span>Bekräfta och boka strategisamtal</span>
                      <ArrowRight size={16} />
                    </span>
                  )}
                </Button>
              </div>
            </form>
          </div>
        )}
      </Card>
    </div>
  );
};
