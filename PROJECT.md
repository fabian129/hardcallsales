# Project: Hard Call Sales Homepage Polish

## Architecture
- Framework: Next.js 16 (App Router + Turbopack)
- Styling: Tailwind CSS v4 (@theme inline tokens in `src/app/globals.css`)
- Typography: Geist Sans & Geist Mono via `next/font/google`
- Components:
  - `src/components/sections/ContactSplitSection.tsx`: Two-column contact section (dark left card + form right card)
  - `src/components/sections/CommunityFooter.tsx`: Wide-canvas community footer with smoky background fade and social/contact links
  - `src/components/sections/ManifestSection.tsx`: Core manifesto statement with tight negative letter-spacing
  - `src/components/ui/AuraBackground.tsx`: Interactive background canvas

## Feature Inventory
| # | Feature | Description | Milestone | Source |
|---|---------|-------------|-----------|--------|
| 1 | Contact: Left Logomark | Solid white left triangle `◀` (`polygon(100% 0, 0 50%, 100% 100%)`) + 2-line stacked `hard call \n sales` | M1 | ORIGINAL_REQUEST §1 |
| 2 | Contact: Headline Break & Color | Headline `Boka ett samtal med \n vår mötesexpert` with soft purple `#7851A9` on `Boka` and explicit `<br />` | M1 | ORIGINAL_REQUEST §1 |
| 3 | Contact: Centered AVEVA Testimonial | Centered quote text in box + author `Mattias Holm \n Säljchef, AVEVA` centered underneath + active white line & gray dot centered indicator | M1 | ORIGINAL_REQUEST §1 |
| 4 | Contact: Form Underlines | Underline input lines (`Förnamn`, `Efternamn`, `Mejl`, `Vad kan vi hjälpa till med?`) stretching edge-to-edge | M1 | ORIGINAL_REQUEST §1 |
| 5 | Contact: Vertical Alignment | Balance heights so `Skicka meddelande` button aligns with bottom of dark left card | M1 | ORIGINAL_REQUEST §1 |
| 6 | Footer: Wide Canvas | Canvas `max-w-[1720px] w-full px-8 sm:px-14 lg:px-20` replacing narrower grid | M2 | ORIGINAL_REQUEST §2 |
| 7 | Footer: Left Alignment | `HÅLL KONTAKTEN!`, subtitle, and input `Din mejladress ↗` positioned far left | M2 | ORIGINAL_REQUEST §2 |
| 8 | Footer: Right Columns | `UTFORSKA`, `SOCIALT`, `KONTAKT` (with `kontakt@hardcallsales.se`) pushed far to right edge | M2 | ORIGINAL_REQUEST §2 |
| 9 | Footer: Smoky Image Fade | Conference room image background with soft smoky fade and zero hard edges | M2 | ORIGINAL_REQUEST §2 |
| 10 | Footer: Bottom Row | `HARD CALL` in bold white on left, copyright + legal links far right | M2 | ORIGINAL_REQUEST §2 |
| 11 | Manifesto: Exact Typography | Sans-serif with `letter-spacing: -1.3px` (`tracking-[-1.3px]`), distinct `#0F0F0F` bold and `#8E8E8E` ingress | M3 | ORIGINAL_REQUEST §3 |
| 12 | Build & Typecheck Cleanliness | Fix TS2722 in `AuraBackground.tsx` (`window.UnicornStudio.init?.()`) so `npm run build` succeeds | M3 | ORIGINAL_REQUEST §3 & Survey |
| 13 | Final Verification & Build | Full verification via build, review, adversarial challenge, and forensic audit | M4 | ORIGINAL_REQUEST Acceptance Criteria |

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| 1 | M1: ContactSplitSection Polish | `src/components/sections/ContactSplitSection.tsx` | none | IN_PROGRESS |
| 2 | M2: CommunityFooter Polish | `src/components/sections/CommunityFooter.tsx` | none | IN_PROGRESS |
| 3 | M3: ManifestSection Polish & TS Fix | `src/components/sections/ManifestSection.tsx`, `src/components/ui/AuraBackground.tsx` | none | IN_PROGRESS |
| 4 | M4: Final Verification & Build Gate | Full application build & gate checks | M1, M2, M3 | PLANNED |

## Pontus & Fabian Feedback Roadmap
- [x] CaseStoriesSection: Riktiga kundlogotyper (AVEVA, Monster, IDNet, Wall to Wall, Allt om Juridik, Milient) inlagda i kundcase-korten
- [x] ScrollMetricsStorySection: Porträttet på mannen ("gubben") borttaget; ren bakgrund med jordglobens aura
- [x] Jobba hos oss: "Distans" tillagt i Slot 02 Önskad placering, och tidigare Slot 03 & 05 borttagna för snabbare ansökningsflöde
- [x] Ledning & Team: Alla 6 nyckelpersoner från hardcallsales.se/about-1 (Malin, Pontus, Joakim Ström, Johanna Glaad, Joakim Lundin, Kevin Eriksson) inlagda i kortsektionen och med undersidor
- [ ] TODO: Fortlöpande finjustering av individuella kalenderlänkar och fördjupade citat för Johanna Glaad och Joakim Lundin vid önskemål från Pontus/ledningen

