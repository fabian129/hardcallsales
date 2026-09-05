"use client";

// MistLayer — motorns molnlager som fristående, transparent GL-canvas ovanpå vad som helst.
// Port av lagret "clouds" ur designfabrikens hero-motor (apps/zaitex-lego/hero/engine.js, provet
// prov/scen-arkitekten 4 sep 2026): domain-warpad fbm i två steg inne i ett horisontellt band; tiden
// driver bara q-steget, så driften loopar aldrig synligt.
// Lagar: EN statisk frame vid load · loopen väcks av första gest · reduced motion = stilla för alltid ·
// pausar utanför skärmen · 0.6× upplösning, DPR ≤ 1.5 · 30 fps · canvasen föds i effekten (React i
// dev-läge kör effekten två gånger, en förlorad kontext får aldrig återanvändas) · kontexten släpps vid unmount.

import React, { useEffect, useRef, useState } from "react";

export type MistProbe = { gl: boolean; engaged: boolean; frames: number; reduced: boolean; running: boolean; plate: string };
declare global {
  interface Window { __hcsLandskap?: MistProbe; __hcsMist?: MistProbe }
}

export interface MistLayerProps {
  /** molnets färg (rgb 0–255). Default: dämpad grå med en droppe lila — aldrig ren vit. */
  tint?: [number, number, number];
  /** täthet 0–1 */
  opacity?: number;
  /** band [mitt, halvbredd] i uv-y (0 = botten) */
  band?: [number, number];
  /** uv/s: 0.02–0.05 lugn */
  drift?: number;
  scale?: number;
  /** 2.0 = molnbank, 4.0 = rökfilament */
  warp?: number;
  threshold?: [number, number];
  /** vilken sond som skrivs på window (bevis) */
  probeKey?: "__hcsLandskap" | "__hcsMist";
  probePlate?: string;
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

export const MistLayer: React.FC<MistLayerProps> = ({
  tint = [177, 173, 183],
  opacity = 0.55,
  band = [0.3, 0.18],
  drift = 0.03,
  scale = 2.4,
  warp = 2.0,
  threshold = [0.45, 0.7],
  probeKey = "__hcsMist",
  probePlate = "",
  className = "",
}) => {
  const hostRef = useRef<HTMLDivElement>(null);
  const [glOk, setGlOk] = useState<boolean>(true);

  useEffect(() => {
    const host = hostRef.current;
    if (!host || opacity <= 0) return;

    const canvas = document.createElement("canvas");
    canvas.setAttribute("aria-hidden", "true");
    canvas.style.cssText = "position:absolute;inset:0;width:100%;height:100%;display:block;";
    host.appendChild(canvas);

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const probe: MistProbe = { gl: false, engaged: reduced, frames: 0, reduced, running: false, plate: probePlate };
    window[probeKey] = probe;
    const bail = () => { setGlOk(false); if (canvas.parentNode === host) host.removeChild(canvas); };

    const gl = canvas.getContext("webgl", { alpha: true, premultipliedAlpha: false, antialias: false, depth: false, stencil: false, powerPreference: "low-power" });
    if (!gl) { bail(); return; }
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
    if (!vs || !fs || !prog) { bail(); return; }
    gl.attachShader(prog, vs); gl.attachShader(prog, fs); gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) { bail(); return; }
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
    gl.uniform2f(U("u_band"), band[0], band[1]);
    gl.uniform2f(U("u_thr"), threshold[0], threshold[1]);
    gl.uniform1f(U("u_scale"), scale);
    gl.uniform1f(U("u_drift"), drift);
    gl.uniform1f(U("u_warp"), warp);
    const uRes = U("u_res"), uT = U("u_t");
    probe.gl = true;

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
      if ((tick++ & 1) === 1) return;
      if (!start) start = t;
      draw((t - start) / 1000 + 40);
    };
    const startLoop = () => { if (probe.running || reduced) return; probe.running = true; raf = requestAnimationFrame(loop); };
    const stopLoop = () => { if (!probe.running) return; probe.running = false; cancelAnimationFrame(raf); };

    fit();
    draw(40);

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
      if (window[probeKey] === probe) delete window[probeKey];
    };
    // Rattarna är designvärden, inte reaktiva props — byt key på komponenten om de ska ändras.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (opacity <= 0) return null;
  return (
    <div ref={hostRef} className={`absolute inset-0 pointer-events-none select-none ${className}`} aria-hidden="true">
      {!glOk && (
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 40% at 70% 66%, rgba(177,173,183,.35), transparent 70%), radial-gradient(45% 30% at 40% 72%, rgba(177,173,183,.25), transparent 70%)",
          }}
        />
      )}
    </div>
  );
};

export default MistLayer;
