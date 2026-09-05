import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

export interface CtaBannerProps {
  titleLine1?: string;
  titleLine2?: string;
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  buttonLabel?: string;
  buttonHref?: string;
  theme?: "dark" | "paper";
  className?: string;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({
  titleLine1,
  titleLine2,
  title,
  subtitle,
  eyebrow,
  buttonLabel = "Boka ett möte",
  buttonHref = "/boka-mote",
}) => {
  const line1 = titleLine1 || title || "Redo att fylla kalendern?";
  const line2 = titleLine2 || (title ? "" : "Boka ett möte med oss först.");
  return (
    <section className="w-full bg-[#0A0A0A] text-white py-28 sm:py-36 border-t border-[#1C1C1C] relative overflow-hidden">
      <Container size="wide">
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
          
          <h2 className="text-3xl sm:text-5xl lg:text-[48px] font-bold tracking-tight text-white leading-tight mb-8 sm:mb-10">
            {line1} {line2 && <><br />{line2}</>}
          </h2>

          <Link
            href={buttonHref}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#7851A9] hover:bg-[#684196] text-white font-semibold text-base transition-all group shadow-md"
          >
            <span>{buttonLabel}</span>
            <div className="w-8 h-8 rounded-full bg-[#0A0A0A] flex items-center justify-center text-white">
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>

        </div>
      </Container>
    </section>
  );
};
