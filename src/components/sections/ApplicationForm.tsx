"use client";

import React, { useState, useRef } from "react";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  FileText,
  Upload,
  X,
  User,
  Mail,
  Phone,
  Briefcase,
  MapPin,
  MessageSquare,
  Sparkles,
  ShieldCheck,
  Clock,
  Loader2,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const LinkedInIcon = ({ size = 16, className = "" }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export interface ApplicationFormProps {
  initialRole?: string;
  className?: string;
}

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  role: string;
  location: string;
  linkedin: string;
  message: string;
  file: File | null;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  role?: string;
  location?: string;
  message?: string;
  file?: string;
}

const ROLE_OPTIONS = [
  "Senior B2B Mötesbokare / SDR (Stockholm / Malta)",
  "Account Executive / Senior Säljare (Stockholm)",
  "AI Outreach & Data Specialist / LinkedClient Operator (Malta / Remote)",
  "Spontanansökan — Sälj & Outreach",
  "Spontanansökan — Data & Tech",
];

const LOCATION_OPTIONS = [
  "Sliema, Malta (Medelhavet)",
  "Stockholm, Sverige",
  "Hybrid / Flexibelt mellan hubbarna",
  "Remote / Distans",
];

export const ApplicationForm: React.FC<ApplicationFormProps> = ({
  initialRole = "",
  className = "",
}) => {
  const [formData, setFormData] = useState<FormState>({
    fullName: "",
    email: "",
    phone: "",
    role: initialRole || ROLE_OPTIONS[0],
    location: LOCATION_OPTIONS[0],
    linkedin: "",
    message: "",
    file: null,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormState | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const [prevInitialRole, setPrevInitialRole] = useState(initialRole);
  if (initialRole !== prevInitialRole) {
    setPrevInitialRole(initialRole);
    if (initialRole) {
      setFormData((prev) => ({ ...prev, role: initialRole }));
    }
  }

  const validate = (data: FormState): FormErrors => {
    const errs: FormErrors = {};

    if (!data.fullName.trim()) {
      errs.fullName = "Vänligen ange ditt fullständiga namn.";
    } else if (data.fullName.trim().length < 2) {
      errs.fullName = "Namnet är för kort.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email.trim()) {
      errs.email = "Vänligen ange din e-postadress.";
    } else if (!emailRegex.test(data.email.trim())) {
      errs.email = "Ange en giltig e-postadress (t.ex. namn@foretag.se).";
    }

    const phoneRegex = /^[+0-9\s-()]{6,20}$/;
    if (!data.phone.trim()) {
      errs.phone = "Vänligen ange ditt telefonnummer.";
    } else if (!phoneRegex.test(data.phone.trim().replace(/\s/g, ""))) {
      errs.phone = "Ange ett giltigt telefonnummer (minst 6 siffror).";
    }

    if (!data.role) {
      errs.role = "Välj vilken roll du söker.";
    }

    if (!data.location) {
      errs.location = "Välj önskad placeringsort.";
    }

    if (!data.message.trim()) {
      errs.message = "Berätta kort om din säljerfarenhet eller varför du vill jobba på HCS.";
    } else if (data.message.trim().length < 15) {
      errs.message = "Vänligen skriv lite mer (minst 15 tecken).";
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      if (selectedFile.size > 10 * 1024 * 1024) {
        setErrors((prev) => ({ ...prev, file: "Filen får max vara 10 MB stor." }));
        return;
      }
      setFormData((prev) => ({ ...prev, file: selectedFile }));
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy.file;
        return copy;
      });
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0];
      if (droppedFile.size > 10 * 1024 * 1024) {
        setErrors((prev) => ({ ...prev, file: "Filen får max vara 10 MB stor." }));
        return;
      }
      setFormData((prev) => ({ ...prev, file: droppedFile }));
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy.file;
        return copy;
      });
    }
  };

  const removeFile = () => {
    setFormData((prev) => ({ ...prev, file: null }));
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all as touched
    setTouched({
      fullName: true,
      email: true,
      phone: true,
      role: true,
      location: true,
      message: true,
    });

    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      // Scroll smoothly to form top on validation error
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
      email: "",
      phone: "",
      role: ROLE_OPTIONS[0],
      location: LOCATION_OPTIONS[0],
      linkedin: "",
      message: "",
      file: null,
    });
    setErrors({});
    setTouched({});
    setIsSuccess(false);
    setSubmittedData(null);
  };

  return (
    <div id="ansokan" ref={formRef} className={cn("w-full scroll-mt-24", className)}>
      <Card
        variant="dark"
        padding="lg"
        radius="lg"
        glow
        className="border-[#2B2B2B] bg-gradient-to-b from-[#141414] to-[#0D0D0D] shadow-2xl relative overflow-hidden"
      >
        {/* Ambient Top Glow */}
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#7851A9]/20 blur-[90px] rounded-full pointer-events-none" />

        {isSuccess && submittedData ? (
          /* SUCCESS STATE */
          <div className="py-8 sm:py-12 text-center max-w-xl mx-auto flex flex-col items-center animate-in fade-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-[#7851A9]/20 border border-[#7851A9] flex items-center justify-center text-[#9B7BC7] mb-6 shadow-[0_0_30px_rgba(120,81,169,0.4)]">
              <CheckCircle2 size={36} className="text-[#9B7BC7]" />
            </div>

            <Badge variant="purple-soft" size="md" className="mb-4">
              <Sparkles size={12} className="text-[#7851A9] mr-1" />
              <span>Ansökan mottagen</span>
            </Badge>

            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
              Tack för din ansökan, {submittedData.fullName.split(" ")[0]}!
            </h3>

            <p className="text-sm sm:text-base text-[#A8A8A8] leading-relaxed mb-8">
              Vi har tagit emot din ansökan för rollen som{" "}
              <strong className="text-white font-semibold">{submittedData.role}</strong>{" "}
              med placering i{" "}
              <strong className="text-white font-semibold">{submittedData.location}</strong>.
              En bekräftelse har skickats till{" "}
              <span className="text-[#9B7BC7] font-medium">{submittedData.email}</span>.
            </p>

            {/* Next Steps Box */}
            <div className="w-full bg-[#1A1A1A] border border-[#2B2B2B] rounded-2xl p-5 mb-8 text-left space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#7851A9] flex items-center gap-1.5">
                <Clock size={14} />
                <span>Vad händer nu?</span>
              </div>
              <ul className="text-xs sm:text-sm text-[#CCCCCC] space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#7851A9] font-bold">1.</span>
                  <span>Vårt rekryteringsteam granskar din profil och eventuella bilagor inom 24–48 timmar.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7851A9] font-bold">2.</span>
                  <span>Om din profil matchar våra krav ringer vi upp dig för en första kort avstämning (15 min).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7851A9] font-bold">3.</span>
                  <span>Därefter följer en djupare säljintervju och eventuellt besök på vårt kontor i Stockholm eller Sliema.</span>
                </li>
              </ul>
            </div>

            <Button
              variant="outline"
              size="md"
              onClick={resetForm}
              className="text-xs sm:text-sm"
            >
              Skicka en ny ansökan
            </Button>
          </div>
        ) : (
          /* FORM ENTRY STATE */
          <div>
            {/* Header / Intro */}
            <div className="mb-8 sm:mb-10 text-center sm:text-left">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-3">
                <Badge variant="purple-soft" size="sm">
                  <Sparkles size={12} className="text-[#7851A9]" />
                  <span>Sök idag</span>
                </Badge>
                <Badge variant="glass" size="sm">
                  <span>Svar inom 48h</span>
                </Badge>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
                Skicka in din ansökan
              </h3>
              <p className="text-sm sm:text-base text-[#A8A8A8] max-w-2xl">
                Fyll i formuläret nedan och berätta lite om dig själv. Du kan söka en specifik roll eller skicka en spontanansökan om du vill bygga Nordens vassaste B2B-pipeline med oss.
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {/* Row 1: Namn & E-post */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#A8A8A8] mb-2"
                  >
                    Fullständigt namn <span className="text-[#7851A9]">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#6E6E6E]">
                      <User size={16} />
                    </div>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      onBlur={() => handleBlur("fullName")}
                      placeholder="Anna Andersson"
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

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#A8A8A8] mb-2"
                  >
                    E-postadress <span className="text-[#7851A9]">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#6E6E6E]">
                      <Mail size={16} />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={() => handleBlur("email")}
                      placeholder="anna@exempel.se"
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
              </div>

              {/* Row 2: Telefon & LinkedIn */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#A8A8A8] mb-2"
                  >
                    Telefonnummer <span className="text-[#7851A9]">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#6E6E6E]">
                      <Phone size={16} />
                    </div>
                    <input
                      type="tel"
                      id="phone"
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

                <div>
                  <label
                    htmlFor="linkedin"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#A8A8A8] mb-2"
                  >
                    LinkedIn-profil / Portfolio <span className="text-[#6E6E6E] font-normal lowercase">(frivilligt)</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#6E6E6E]">
                      <LinkedInIcon size={16} />
                    </div>
                    <input
                      type="url"
                      id="linkedin"
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleChange}
                      placeholder="https://linkedin.com/in/ditt-namn"
                      className="w-full pl-10 pr-4 py-3 bg-[#181818] border border-[#2B2B2B] hover:border-white/20 rounded-xl text-sm text-white placeholder-[#5A5A5A] transition-all focus:outline-none focus:ring-2 focus:ring-[#7851A9] focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Row 3: Sökt Roll & Plats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="role"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#A8A8A8] mb-2"
                  >
                    Sökt roll <span className="text-[#7851A9]">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#6E6E6E]">
                      <Briefcase size={16} />
                    </div>
                    <select
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      onBlur={() => handleBlur("role")}
                      className="w-full pl-10 pr-8 py-3 bg-[#181818] border border-[#2B2B2B] hover:border-white/20 rounded-xl text-sm text-white transition-all focus:outline-none focus:ring-2 focus:ring-[#7851A9] focus:border-transparent cursor-pointer"
                    >
                      {ROLE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#111111] text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                  {errors.role && touched.role && (
                    <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle size={12} />
                      <span>{errors.role}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="location"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#A8A8A8] mb-2"
                  >
                    Önskad placering <span className="text-[#7851A9]">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#6E6E6E]">
                      <MapPin size={16} />
                    </div>
                    <select
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      onBlur={() => handleBlur("location")}
                      className="w-full pl-10 pr-8 py-3 bg-[#181818] border border-[#2B2B2B] hover:border-white/20 rounded-xl text-sm text-white transition-all focus:outline-none focus:ring-2 focus:ring-[#7851A9] focus:border-transparent cursor-pointer"
                    >
                      {LOCATION_OPTIONS.map((loc) => (
                        <option key={loc} value={loc} className="bg-[#111111] text-white">
                          {loc}
                        </option>
                      ))}
                    </select>
                  </div>
                  {errors.location && touched.location && (
                    <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle size={12} />
                      <span>{errors.location}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Row 4: Kort Presentation / Meddelande */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#A8A8A8] mb-2"
                >
                  Kort presentation & tidigare erfarenhet <span className="text-[#7851A9]">*</span>
                </label>
                <div className="relative">
                  <div className="absolute top-3.5 left-3.5 pointer-events-none text-[#6E6E6E]">
                    <MessageSquare size={16} />
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={() => handleBlur("message")}
                    placeholder="Berätta kort om din bakgrund inom försäljning, vad du drivs av och varför du vill arbeta hos Hard Call Sales..."
                    className={cn(
                      "w-full pl-10 pr-4 py-3 bg-[#181818] border rounded-xl text-sm text-white placeholder-[#5A5A5A] transition-all focus:outline-none focus:ring-2 focus:ring-[#7851A9] focus:border-transparent resize-y",
                      errors.message && touched.message
                        ? "border-red-500/80 bg-red-950/10 focus:ring-red-500"
                        : "border-[#2B2B2B] hover:border-white/20"
                    )}
                    aria-invalid={!!(errors.message && touched.message)}
                  />
                </div>
                {errors.message && touched.message && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle size={12} />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Row 5: CV / Meritförteckning Filuppladdning */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#A8A8A8] mb-2">
                  CV / Meritförteckning <span className="text-[#6E6E6E] font-normal lowercase">(PDF eller Word, max 10MB)</span>
                </label>

                {formData.file ? (
                  <div className="flex items-center justify-between p-3.5 bg-[#181818] border border-[#7851A9]/40 rounded-xl text-sm text-white">
                    <div className="flex items-center gap-3 overflow-hidden">
                      <div className="w-8 h-8 rounded-lg bg-[#7851A9]/20 flex items-center justify-center text-[#9B7BC7] shrink-0">
                        <FileText size={16} />
                      </div>
                      <div className="truncate">
                        <p className="text-xs font-medium truncate">{formData.file.name}</p>
                        <p className="text-[11px] text-[#A8A8A8]">
                          {(formData.file.size / (1024 * 1024)).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={removeFile}
                      className="p-1.5 rounded-lg hover:bg-white/10 text-[#A8A8A8] hover:text-white transition-colors cursor-pointer"
                      title="Ta bort fil"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ) : (
                  <div
                    onDragOver={(e) => {
                      e.preventDefault();
                      setIsDragOver(true);
                    }}
                    onDragLeave={() => setIsDragOver(false)}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                    className={cn(
                      "border-2 border-dashed rounded-xl p-5 text-center cursor-pointer transition-all",
                      isDragOver
                        ? "border-[#7851A9] bg-[#7851A9]/10"
                        : "border-[#2B2B2B] hover:border-white/30 bg-[#161616]/50 hover:bg-[#181818]"
                    )}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <div className="flex flex-col items-center justify-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#7851A9]">
                        <Upload size={18} />
                      </div>
                      <div className="text-xs sm:text-sm text-[#CCCCCC]">
                        <span className="font-semibold text-[#9B7BC7]">Klicka för att bläddra</span> eller dra och släpp filen här
                      </div>
                      <p className="text-[11px] text-[#6E6E6E]">
                        PDF, DOC eller DOCX upp till 10MB
                      </p>
                    </div>
                  </div>
                )}
                {errors.file && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle size={12} />
                    <span>{errors.file}</span>
                  </p>
                )}
              </div>

              {/* Integrity & Privacy Note */}
              <div className="flex items-start gap-2.5 pt-2 text-xs text-[#6E6E6E]">
                <ShieldCheck size={16} className="text-[#7851A9] shrink-0 mt-0.5" />
                <span>
                  Dina personuppgifter hanteras säkert och konfidentiellt i enlighet med GDPR. Vi använder endast uppgifterna för vår rekryteringsprocess.
                </span>
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
                      <span>Skickar din ansökan...</span>
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <span>Skicka ansökan</span>
                      <Send size={16} />
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
