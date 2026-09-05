export interface CaseStory {
  client: string;
  industry: string;
  event: string;
  description: string;
  image: string;
  stats: {
    primary: string;
    secondary: string;
    metric: string;
  };
  accent: string;
  href: string;
}

export const HCS_STORIES = [
  {
    client: "AVEVA",
    industry: "Enterprise Industriell Mjukvara",
    event: "45+ C-level möten som genererade >20 MSEK i affärer",
    description:
      "Multi-touch kampanj med personlig senior prospektering mot svåråtkomliga CTO, CIO och tekniska driftledare inom nordisk tung process- och energiindustri.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    stats: { primary: ">20 MSEK", secondary: "45+ Möten", metric: "92 % Show-rate" },
    accent: "#7851A9",
    href: "/case",
  },
  {
    client: "Monster",
    industry: "B2B HR-Tech & Rekrytering",
    event: "120+ bokade möten med HR-chefer & VD över hela Norden",
    description:
      "Datadriven LinkedIn-bearbetning i kombination med telefonburen uppsökande dialog för att introducera nya B2B-rekryteringslösningar på medelstora och stora bolag.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
    stats: { primary: "120+ Möten", secondary: "4.2x ROI", metric: "89 % Show-rate" },
    accent: "#8B5CF6",
    href: "/case",
  },
  {
    client: "IDNet",
    industry: "Logistik & RFID-system",
    event: "85+ strategiska möten med lager- & logistikchefer",
    description:
      "Senior mötesbokning mot komplexa supply chain-organisationer inom nordisk detaljhandel och industriell logistik med fokus på ROI och automation.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
    stats: { primary: "85+ Möten", secondary: "650 tkr Snittorder", metric: "31 % Konvertering" },
    accent: "#7851A9",
    href: "/case",
  },
  {
    client: "Wall to Wall Group",
    industry: "Fastighet & Industriell Tech",
    event: "65+ möten med kommunala & privata fastighetschefer",
    description:
      "Telefonburen uppsökande försäljning från erfarna HCS-säljare med fokus på förebyggande underhåll och direkt integration i säljarnas kalendrar.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    stats: { primary: "65+ Möten", secondary: "450 tkr Snittorder", metric: "34 % Konvertering" },
    accent: "#9333EA",
    href: "/case",
  },
  {
    client: "Allt om Juridik",
    industry: "Juridiska B2B-tjänster & SaaS",
    event: "150+ företagsmöten och stark tillväxt i ARR",
    description:
      "Skräddarsydd kampanj med LinkedClient AI-agent i kombination med personlig telefonuppföljning mot svenska SME-bolag och ekonomichefer.",
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=1200&auto=format&fit=crop",
    stats: { primary: "150+ Möten", secondary: "28 % Avtalsfrekvens", metric: "91 % Show-rate" },
    accent: "#7851A9",
    href: "/case",
  },
  {
    client: "NordTech Solutions",
    industry: "IT- & Molnkonsult",
    event: "28 kvalificerade möten och 3.2 MSEK i säkrad intäkt",
    description:
      "Målgruppsanpassad prospektering och personlig uppföljning mot IT-chefer i aktiv molnmigrering, vilket säkrade 6 nya ramavtal under en 3-månaders pilot.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
    stats: { primary: "3.2 MSEK", secondary: "28 Möten", metric: "6 Ramavtal" },
    accent: "#8B5CF6",
    href: "/case",
  },
];
