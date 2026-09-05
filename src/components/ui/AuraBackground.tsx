"use client";

import React, { useEffect } from "react";

interface AuraBackgroundProps {
  projectId?: string;
  className?: string;
  opacity?: number;
  speedScale?: number;
}

export const AuraBackground: React.FC<AuraBackgroundProps> = ({
  projectId = "yWZ2Tbe094Fsjgy9NRnD", // Dark full-page aura project by default
  className = "",
  opacity = 0.5,
  speedScale = 0.3,
}) => {
  useEffect(() => {
    const adjustSpeed = () => {
      if (window.UnicornStudio?.scenes) {
        window.UnicornStudio.scenes.forEach((scene: any) => {
          if (scene?.layers) {
            scene.layers.forEach((l: any) => {
              if (typeof l.speed === "number") {
                if (l._originalSpeed === undefined) {
                  l._originalSpeed = l.speed;
                }
                l.speed = l._originalSpeed * speedScale;
              }
            });
          }
        });
      }
    };

    // Dynamically load UnicornStudio script if not already present
    if (!window.UnicornStudio) {
      window.UnicornStudio = { isInitialized: false };
      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js";
      script.async = true;
      script.onload = () => {
        if (window.UnicornStudio && !window.UnicornStudio.isInitialized) {
          window.UnicornStudio.init?.();
          window.UnicornStudio.isInitialized = true;
          setTimeout(adjustSpeed, 350);
          setTimeout(adjustSpeed, 1000);
        }
      };
      document.body.appendChild(script);
    } else if (window.UnicornStudio && typeof window.UnicornStudio.init === "function") {
      window.UnicornStudio.init();
      setTimeout(adjustSpeed, 350);
      setTimeout(adjustSpeed, 1000);
    }
  }, [projectId, speedScale]);

  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden transition-opacity duration-1000 ${className}`}
      style={{ opacity }}
    >
      <div
        data-us-project={projectId}
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
};

declare global {
  interface Window {
    UnicornStudio?: {
      isInitialized?: boolean;
      init?: () => void;
      scenes?: any[];
    };
  }
}
