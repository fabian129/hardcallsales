# Montering — två bakgrundsscener till den vita editorialsektionen

Byggda 5 sep som nya filer, sektionsfilen är orörd. Två labb på dev-servern:

- `/labb/editorial` — HELA sektionen som scroll-berättelse med sylvass landskapshorisont (rekommenderad).
- `/labb/landskap` — bara bakgrunden (landskapsplåt + dis) i den befintliga sektionens layout.

## A. Scroll-berättelsen (EditorialScrollScene)

Fil: `src/components/sections/EditorialScrollScene.tsx`. Bakgrunden består av `src/components/ui/DuneHorizon.tsx`
(dynerna som vektor, sylvassa i alla upplösningar; tar en genererad plåt via `plate` när en finns) och
`src/components/ui/MistLayer.tsx` (motorns molnlager, tillval).

Montering i `src/app/page.tsx`: byt raden

```tsx
<EditorialCanvasSection />
```

mot

```tsx
<EditorialScrollScene />
```

och importen `import { EditorialScrollScene } from "@/components/sections/EditorialScrollScene";`.
Texterna (tre steg) ligger i `HCS_STEPS` i samma fil; skicka `steps={...}` för andra.

Rattarna: `stepSpan` 0.10 (nästa stycke tio procent ner), `fade` 0.04, `stair` 10 (trappan i procent av
höjden; halveras under 820 px höjd, av på mobil), `topBase` 15, `trackVh` 240, `dis` 0.45 (0 = av), `glow` 0.3
(0 = av), `horizon` 0.46, `plate` (genererad still i stället för vektordynerna).

Genererad plåt: dynerna som vektor är ställföreträdare. En högupplöst still kostar krediter (Seedream 5 Pro
21:9 i 2k: 100 krediter · Nano Banana Pro 21:9 i 4k: 150 krediter, simulerat 5 sep) och beställs enligt
scen-arkitektens lapp: still först, aldrig text i bilden, nedre tredjedelen dyner, resten tom ljus himmel.

## B. Bara bakgrunden (LandscapeScene) i den befintliga sektionen

Fil: `src/components/ui/LandscapeScene.tsx`, plåtar i `public/images/scen/` (tallarna 29 kB, staden 10 kB).
Tre rader i `src/components/sections/EditorialCanvasSection.tsx`:

```tsx
import { LandscapeScene } from "@/components/ui/LandscapeScene";
```

```tsx
{ id: 5, name: "L1: Landskap", src: "tallarna", note: "Tallar i morgondis — texten fri till vänster" },
```

```tsx
const isLandscape = currentImage.id === 5;
```

```tsx
{isLandscape ? (
  <LandscapeScene plate={currentImage.src as "tallarna" | "staden"} />
) : isStudio ? (
```

## Lagarna båda följer
EN plåt + ETT lager · statisk frame vid load, disen väcks av första gest · reduced motion = tonar utan att flytta,
disen stilla · pausar utanför skärmen · 0.6× upplösning, DPR ≤ 1.5 · canvasen föds i effekten (React i dev-läge
kör effekter två gånger) · kontexten släpps vid unmount · textytan vänster förblir vit.
