"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const Reveal: React.FC<{
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
}> = ({ children, delay = 0, duration = 0.9, yOffset = 30, className = "" }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const el = ref.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { opacity: 0, y: yOffset },
      {
        opacity: 1,
        y: 0,
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      }
    );
  }, [delay, duration, yOffset]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};
