import React from "react";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

export interface SectionHeaderProps {
  badge?: string;
  badgeIcon?: React.ReactNode;
  badgeVariant?: "purple" | "purple-soft" | "partner" | "glass" | "dark";
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  align?: "left" | "center" | "right";
  theme?: "dark" | "light";
  className?: string;
  titleClassName?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  badgeIcon,
  badgeVariant = "purple-soft",
  title,
  subtitle,
  align = "center",
  theme = "dark",
  className = "",
  titleClassName = "",
}) => {
  const alignStyles = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  const isLight = theme === "light";

  return (
    <div
      className={cn(
        "flex flex-col max-w-3xl mb-12 sm:mb-16",
        alignStyles[align],
        className
      )}
    >
      {badge && (
        <div className="mb-4">
          <Badge
            variant={isLight && badgeVariant === "glass" ? "dark" : badgeVariant}
            icon={badgeIcon}
            dot
          >
            {badge}
          </Badge>
        </div>
      )}

      <h2
        className={cn(
          "text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.15]",
          isLight ? "text-[#0F0F0F]" : "text-white",
          titleClassName
        )}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={cn(
            "mt-4 sm:mt-5 text-base sm:text-lg leading-relaxed max-w-2xl font-normal",
            isLight ? "text-[#6E6E6E]" : "text-[#A8A8A8]"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
