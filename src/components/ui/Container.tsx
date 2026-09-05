import React from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "narrow" | "standard" | "wide" | "full";
  className?: string;
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({
  size = "wide",
  className = "",
  children,
  ...props
}) => {
  const sizeStyles = {
    narrow: "max-w-4xl",
    standard: "max-w-5xl",
    wide: "max-w-7xl",
    full: "max-w-full",
  };

  return (
    <div
      className={cn(
        "w-full mx-auto px-4 sm:px-6 lg:px-8",
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
