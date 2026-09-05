"use client";

// LandscapeScene — ljus bakgrundsscen för vita sektioner: EN plåt (landskap, still som redan finns i projektet)
// + motorns molnlager (domain-warpad fbm i ett horisontellt band) som transparent dis ovanpå.
// Port av lagret "clouds" ur designfabrikens hero-motor (apps/zaitex-lego/hero/engine.js,
// provet prov/scen-arkitekten 4 sep 2026) till en fristående React-komponent utan beroenden.
//
// Scenkontraktet (scen-arkitekten §1): roll sektion · tier 1 · motiv "ett landskap i dis, höger" ·
// värden ljusa, motivet bär kontrasten · ljus diffust · djup: dis (förgrund) · motiv · vit fond ·
// atmosfär: molnlagret driver genom motivets fot · textyta: vänster 55 % är tom · rörelsebudget:
// EN rörelse (driften), bunden till tid, väckt av första gest · medium: plåt = still + lager = GL ·
// fallback: statisk frame; reduced motion = statisk för alltid · GL ritas i 0.6× upplösning, DPR ≤ 1.5,
// pausar utanför skärmen, kontexten släpps vid unmount (högst sex GL-kontexter per sida).
//
// Plåtar utan alfa läggs med multiply mot det vita: ljus himmel försvinner av sig själv, motivet stannar.
// Kanterna smälts med en CSS-mask, så plåten aldrig får en hård kant mot canvasen.

import React, { useEffect, useRef, useState } from "react";

export type LandscapePlate = {
  /** basnamn under /images/scen/ → {namn}-{w}.avif|webp + {namn}-{max}.png|jpg */
  namn: string;
  alt: string;
  bredder: number[];
  /** naturlig bredd/höjd */
  ratio: number;
  /** alfa-plåt (png-reserv) eller foto (jpg-reserv + multiply + mask) */
  alfa: boolean;
  /** plåtens bredd i procent av scenen på desktop */
  bredd: number;
  /** var motivet ankras */
  position: string;
  fit: "contain" | "cover";
  /** molnbandet [mitt, halvbredd] i uv-y (0 = botten) — genom motivets fot */
  band: [number, number];
  drift: number;
};

export const PLATES: Record<string, LandscapePlate> = {
  tallarna: {
    namn: "tallarna", alt: "Tallar och sanddyner i morgondis", bredder: [900, 1376], ratio: 1376 / 768,
    alfa: false, bredd: 72, position: "right bottom", fit: "cover", band: [0.30, 0.18], drift: 0.03,
  },
  staden: {
    namn: "staden", alt: "En stads silhuett som stiger ur ett molnhav", bredder: [900, 1376], ratio: 1376 / 768,
    alfa: false, bredd: 78, position: "right bottom", fit: "cover", band: [0.27, 0.16], drift: 0.02,
  },
  snoberget: {
    namn: "snoberget", alt: "Snöklätt berg som stiger ur vit dis", bredder: [900, 1376], ratio: 1376 / 768,
    alfa: true, bredd: 62, position: "right bottom", fit: "contain", band: [0.34, 0.2], drift: 0.03,
  },
};

export interface LandscapeSceneProps {
  plate?: keyof typeof PLATES | LandscapePlate;
  /** molnets färg (rgb 0–255). Default: dämpad grå med en droppe lila — aldrig ren vit, aldrig ren grå. */
  tint?: [number, number, number];
  /** molnets täthet 0–1 (0 = plåten ensam) */
  opacity?: number;
  band?: [number, number];
  drift?: number;
  scale?: number;
  warp?: number;
  threshold?: [number, number];
  plateWidth?: number;
  className?: string;
}

const VERT = `attribute vec2 a; void main(){ gl_Position = vec4(a, 0.0, 1.0); }`;
const FRAG = `precision mediump float;
uniform vec2 u_res; uniform float u_t; uniform vec3 u_col; uniform float u_op;
uniform vec2 u_band; uniform vec2 u_thr; uniform float u_scale; uniform float u_drift; uniform float u_warp;
float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
float noise(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f);
  return mix(mix(hash(i),hash(i+vec2(1,0)),f.x), mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x), f.y); }
float fbm(vec2 p){ float v=0.0, a=0.5; for(int i=0;i<5;i++){ v+=a*noise(p); p*=2.0; a*=0.5; } return v; }
float clouds(vec2 p, float t){
  vec2 q = vec2(fbm(p + t*u_drift), fbm(p + vec2(5.2,1.3) - t*u_drift*0.66));
  vec2 r = vec2(fbm(p + u_warp*q + vec2(1.7,9.2)), fbm(p + u_warp*q + vec2(8.3,2.8)));
  return fbm(p + u_warp*r);
}
void main(){
  vec2 uv = gl_FragCoord.xy / u_res;
  vec2 st = vec2(uv.x * u_res.x / u_res.y, uv.y);
  float band = smoothstep(u_band.x - u_band.y, u_band.x - u_band.y*0.35, uv.y)
             * (1.0 - smoothstep(u_band.x + u_band.y*0.35, u_band.x + u_band.y, uv.y));
  float c = smoothstep(u_thr.x, u_thr.y, clouds(st * u_scale + vec2(0.0, 0.4), u_t));
  gl_FragColor = vec4(u_col, c * band * u_op);
}`;

type Probe = { gl: boolean; engaged: boolean; frames: number; reduced: boolean; running: boolean; plate: string };
declare global {
  interface Window { __hcsLandskap?: Probe }
}

export const LandscapeScene: React.FC<LandscapeSceneProps> = ({
  plate = "tallarna",
  tint = [177, 173, 183],
  opacity = 0.55,
  band,
  drift,
  scale = 2.4,
  warp = 2.0,
  threshold = [0.45, 0.7],
  plateWidth,
  className = "",
}) => {
  const hostRef = useRef<HTMLDivElement>(null);
  const [glOk, setGlOk] = useState<boolean>(true);
  const p: LandscapePlate = typeof plate === "string" ? PLATES[plate] : plate;
  const bandV = band ?? p.band;
  const driftV = drift ?? p.drift;
  const widthV = plateWidth ?? p.bredd;

  useEffect(() => {
    const host = hostRef.current;
    if (!host || opacity <= 0) return;

    // Canvasen föds i effekten, inte i JSX: React i dev-läge kör effekten två gånger (StrictMode), och en
    // kontext som förlorats i städningen kan inte återanvändas. Ny canvas per varv = ren kontext per varv.
    const canvas = document.createElement("canvas");
    canvas.setAttribute("aria-hidden", "true");
    canvas.style.cssText = "position:absolute;inset:0;width:100%;height:100%;display:block;";
    host.appendChild(canvas);

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const probe: Probe = { gl: false, engaged: reduced, frames: 0, reduced, running: false, plate: p.namn };
    window.__hcsLandskap = probe;

    const gl = canvas.getContext("webgl", { alpha: true, premultipliedAlpha: false, antialias: false, depth: false, stencil: false, powerPreference: "low-power" });
    if (!gl) { setGlOk(false); host.removeChild(canvas); return; }

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type);
      if (!s) return null;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) { gl.deleteShader(s); return null; }
      return s;
    };
    const vs = compile(gl.VERTEX_SHADER, VERT);
    const fs = compile(gl.FRAGMENT_SHADER, FRAG);
    const prog = gl.createProgram();
    if (!vs || !fs || !prog || !gl.attachShader) { setGlOk(false); host.removeChild(canvas); return; }
    gl.attachShader(prog, vs); gl.attachShader(prog, fs); gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) { setGlOk(false); host.removeChild(canvas); return; }
    gl.useProgram(prog);
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, "a");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    gl.clearColor(0, 0, 0, 0);
    const U = (n: string) => gl.getUniformLocation(prog, n);
    gl.uniform3f(U("u_col"), tint[0] / 255, tint[1] / 255, tint[2] / 255);
    gl.uniform1f(U("u_op"), opacity);
    gl.uniform2f(U("u_band"), bandV[0], bandV[1]);
    gl.uniform2f(U("u_thr"), threshold[0], threshold[1]);
    gl.uniform1f(U("u_scale"), scale);
    gl.uniform1f(U("u_drift"), driftV);
    gl.uniform1f(U("u_warp"), warp);
    const uRes = U("u_res"), uT = U("u_t");
    probe.gl = true;

    // 0.6× upplösning, DPR-tak 1.5 — moln tål det, huvudtråden gör det inte.
    const RENDER_SCALE = 0.6;
    const fit = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const w = Math.max(1, Math.floor(host.clientWidth * RENDER_SCALE * dpr));
      const h = Math.max(1, Math.floor(host.clientHeight * RENDER_SCALE * dpr));
      if (canvas.width !== w || canvas.height !== h) { canvas.width = w; canvas.height = h; }
      gl.viewport(0, 0, w, h);
      gl.uniform2f(uRes, w, h);
    };
    // +40 s: den statiska ramen är redan mitt i driften, aldrig det owarpade nolläget.
    const draw = (tSec: number) => {
      gl.uniform1f(uT, tSec);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      probe.frames++;
    };

    let raf = 0, start = 0, tick = 0, visible = false;
    const loop = (t: number) => {
      raf = requestAnimationFrame(loop);
      if ((tick++ & 1) === 1) return; // 30 fps räcker för dis
      if (!start) start = t;
      draw((t - start) / 1000 + 40);
    };
    const startLoop = () => { if (probe.running || reduced) return; probe.running = true; raf = requestAnimationFrame(loop); };
    const stopLoop = () => { if (!probe.running) return; probe.running = false; cancelAnimationFrame(raf); };

    fit();
    draw(40); // EN statisk frame vid load

    // GEST-VÄCKNING: loopen startar först vid användarens första gest; reduced motion väcks aldrig.
    const events = ["scroll", "pointerdown", "pointermove", "touchstart", "wheel"] as const;
    const engage = () => {
      if (probe.engaged) return;
      probe.engaged = true;
      events.forEach((ev) => window.removeEventListener(ev, engage));
      if (visible) startLoop();
    };
    if (!reduced) events.forEach((ev) => window.addEventListener(ev, engage, { passive: true }));

    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        visible = e.isIntersecting;
        if (visible && probe.engaged) startLoop(); else if (!visible) stopLoop();
      });
    }, { rootMargin: "80px" });
    io.observe(host);

    let rT: number | undefined;
    const ro = new ResizeObserver(() => {
      window.clearTimeout(rT);
      rT = window.setTimeout(() => { fit(); if (!probe.running) draw(40); }, 160);
    });
    ro.observe(host);

    return () => {
      stopLoop();
      io.disconnect();
      ro.disconnect();
      window.clearTimeout(rT);
      events.forEach((ev) => window.removeEventListener(ev, engage));
      const lose = gl.getExtension("WEBGL_lose_context");
      if (lose) lose.loseContext();
      if (canvas.parentNode === host) host.removeChild(canvas);
      if (window.__hcsLandskap === probe) delete window.__hcsLandskap;
    };
    // Rattarna är designvärden, inte reaktiva props — ändras de byggs scenen om (key på komponenten).
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const src = (w: number, ext: string) => `/images/scen/${p.namn}-${w}.${ext}`;
  const widest = Math.max(...p.bredder);
  const srcset = (ext: string) => p.bredder.map((w) => `${src(w, ext)} ${w}w`).join(", ");
  const sizes = `(min-width: 1024px) ${widthV}vw, 100vw`;
  // Foto utan alfa: multiply mot vitt + mjuk mask i kanterna. Alfa-plåt: som den är.
  const imgStyle: React.CSSProperties = p.alfa
    ? { opacity: 0.96 }
    : {
        mixBlendMode: "multiply",
        WebkitMaskImage: "linear-gradient(90deg, transparent 0%, #000 34%, #000 100%), linear-gradient(180deg, transparent 0%, #000 30%, #000 100%)",
        maskImage: "linear-gradient(90deg, transparent 0%, #000 34%, #000 100%), linear-gradient(180deg, transparent 0%, #000 30%, #000 100%)",
        WebkitMaskComposite: "source-in",
        maskComposite: "intersect",
      };

  return (
    <div ref={hostRef} className={`absolute inset-0 overflow-hidden pointer-events-none select-none ${className}`} aria-hidden="true">
      {/* Plåten: landskapet till höger och nedtill; texten till vänster är beställd tom. */}
      <div className="absolute bottom-0 right-0 h-full flex items-end justify-end" style={{ width: `${widthV}%` }}>
        <picture className="block w-full h-full">
          <source type="image/avif" srcSet={srcset("avif")} sizes={sizes} />
          <source type="image/webp" srcSet={srcset("webp")} sizes={sizes} />
          <img
            src={src(widest, p.alfa ? "png" : "jpg")}
            alt={p.alt}
            width={Math.round(1000 * p.ratio)}
            height={1000}
            loading="lazy"
            decoding="async"
            className={p.fit === "cover" ? "w-full h-full object-cover" : "w-full h-auto max-h-[92%] object-contain"}
            style={{ objectPosition: p.position, ...imgStyle }}
          />
        </picture>
      </div>
      {/* Molnlagret föds i effekten som en canvas. Utan WebGL: mjuk dis i CSS. */}
      {!glOk && opacity > 0 && (
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 40% at 70% 66%, rgba(177,173,183,.35), transparent 70%), radial-gradient(45% 30% at 40% 72%, rgba(177,173,183,.25), transparent 70%)",
          }}
        />
      )}
      {/* Den vita fonden får aldrig bli grå: en tyst vit slöja i textytan (vänster) håller AA-kontrasten. */}
      <div className="absolute inset-y-0 left-0 w-[58%] bg-gradient-to-r from-white via-white/70 to-transparent" />
    </div>
  );
};

export default LandscapeScene;
