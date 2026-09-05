"use client";

import React, { useEffect, useRef } from "react";

interface CloudFogShaderProps {
  intensity?: number;
  speed?: number;
  className?: string;
  tint?: "indigo" | "neutral" | "obsidian" | "light";
}

export const CloudFogShader: React.FC<CloudFogShaderProps> = ({
  intensity = 0.55,
  speed = 1,
  className = "",
  tint = "light",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;

    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    const puffCount = 18;
    const puffs: Array<{
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      baseAlpha: number;
      phase: number;
      phaseSpeed: number;
      r: number;
      g: number;
      b: number;
    }> = [];

    for (let i = 0; i < puffCount; i++) {
      let r = 255;
      let g = 255;
      let b = 255;
      let alphaMultiplier = 1;

      if (tint === "light") {
        // Soft silver, pearl and pale cloud mist puffs on white editorial canvas
        const variant = Math.random();
        if (variant < 0.45) {
          // Soft silver-grey cloud
          r = 216;
          g = 222;
          b = 230;
          alphaMultiplier = 0.65;
        } else if (variant < 0.75) {
          // Pale cool slate mist
          r = 202;
          g = 210;
          b = 222;
          alphaMultiplier = 0.5;
        } else {
          // Light pearl white
          r = 238;
          g = 242;
          b = 248;
          alphaMultiplier = 0.8;
        }
      } else if (tint === "indigo") {
        const isViolet = Math.random() > 0.55;
        r = isViolet ? 155 : 210;
        g = isViolet ? 145 : 220;
        b = isViolet ? 230 : 235;
      }

      puffs.push({
        x: Math.random() * (width || 1200),
        y: Math.random() * (height || 800),
        radius: 200 + Math.random() * 280,
        vx: (0.2 + Math.random() * 0.4) * speed,
        vy: (Math.random() - 0.5) * 0.08 * speed,
        baseAlpha: (0.04 + Math.random() * 0.06) * intensity * alphaMultiplier,
        phase: Math.random() * Math.PI * 2,
        phaseSpeed: 0.008 + Math.random() * 0.012,
        r,
        g,
        b,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < puffCount; i++) {
        const p = puffs[i];
        p.x += p.vx;
        p.y += p.vy;
        p.phase += p.phaseSpeed;

        const pad = p.radius * 1.2;
        if (p.x > width + pad) p.x = -pad;
        if (p.x < -pad) p.x = width + pad;
        if (p.y > height + pad) p.y = -pad;
        if (p.y < -pad) p.y = height + pad;

        const currentAlpha = p.baseAlpha * (0.8 + 0.2 * Math.sin(p.phase));

        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
        grad.addColorStop(0, `rgba(${p.r}, ${p.g}, ${p.b}, ${currentAlpha})`);
        grad.addColorStop(0.5, `rgba(${p.r}, ${p.g}, ${p.b}, ${currentAlpha * 0.5})`);
        grad.addColorStop(1, `rgba(${p.r}, ${p.g}, ${p.b}, 0)`);

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, [intensity, speed, tint]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none w-full h-full ${className}`}
    />
  );
};
