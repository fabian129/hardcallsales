import { CaseStudy, ClientLogo, Testimonial } from "@/types";

export const KEY_METRICS = [
  {
    id: "aveva-deal-value",
    value: "20 MSEK",
    label: "i affärer hos AVEVA",
    sublabel: "Stängda enterprise-avtal och mätbar pipeline",
  },
  {
    id: "monster-growth",
    value: "120+",
    label: "kvalificerade möten för Monster",
    sublabel: "B2B-expansion i Norden",
  },
  {
    id: "idnet-pipeline",
    value: "85+",
    label: "möten för IDNet",
    sublabel: "Strategiska dialoger inom logistik & RFID",
  },
  {
    id: "reachable-leads",
    value: "100M+",
    label: "beslutsfattare nåbara",
    sublabel: "70 000+ i eget nätverk på LinkedIn",
  },
];

export const CLIENT_LOGOS: ClientLogo[] = [
  { id: "aveva", name: "AVEVA", category: "Enterprise", industry: "Industriell Mjukvara", isFeatured: true },
  { id: "monster", name: "Monster", category: "Enterprise", industry: "B2B Rekrytering & Media", isFeatured: true },
  { id: "idnet", name: "IDNet", category: "Tech", industry: "Logistik & RFID-lösningar", isFeatured: true },
  { id: "wall-to-wall", name: "Wall to Wall Group", category: "Enterprise", industry: "Fastighet & Industri", isFeatured: true },
  { id: "allt-om-juridik", name: "Allt om Juridik", category: "SaaS", industry: "Juridiska B2B-tjänster", isFeatured: true },
  { id: "nordtech", name: "NordTech Solutions", category: "Consulting", industry: "IT & Molnkonsult", isFeatured: true },
  { id: "cloudscale", name: "CloudScale Systems", category: "Tech", industry: "Infrastruktur & Cloud", isFeatured: false },
  { id: "syncpoint", name: "SyncPoint Software", category: "Tech", industry: "Integrationsplattform", isFeatured: false },
  { id: "corelogic", name: "CoreLogic B2B", category: "Enterprise", industry: "Supply Chain Solutions", isFeatured: false },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "aveva",
    client: "AVEVA",
    category: "Enterprise",
    industry: "Enterprise Industriell Mjukvara",
    metric: ">20 MSEK",
    metricLabel: "i genererat pipelinevärde och stängda affärer",
    badge: "Enterprise Deep-Dive",
    stats: [
      { label: "Genererat pipelinevärde", value: ">20 MSEK" },
      { label: "Kvalificerade C-level möten", value: "45+" },
      { label: "Genomsnittlig show rate", value: "92 %" },
      { label: "Målgrupp", value: "CTO, CIO & Driftchefer" },
    ],
    challenge:
      "AVEVA och deras nordiska partners behövde etablera strategiska affärsdialoger med svåråtkomliga C-level beslutsfattare (CIO, CTO och Teknisk Driftledning) inom komplex tillverknings-, energi- och processindustri.",
    solution:
      "Hard Call Sales designade en skräddarsydd multi-touch outreach-kampanj. Vi kombinerade djupgående målgruppsanalys av nordiska industribolag med personifierade LinkedIn-sekvenser och dedikerad telefonprospektering av seniora B2B-säljare.",
    outcome:
      "Kampanjen genererade över 45 kvalificerade C-level möten med verifierat investeringsbehov. Dessa dialoger resulterade i över 20 miljoner SEK i stängda enterprise-avtal och en stark, långsiktig pipeline.",
    keyDeliverables: [
      "Identifiering och berikning av 1 800+ nordiska industribeslutsfattare",
      "Skräddarsytt samtalsmanus och invändningshantering för industriell IT",
      "45+ genomförda strategiska möten direkt i kundens kalender",
      "Kontinuerlig rapportering av köpsignaler och budgetfönster",
    ],
    quote: {
      text: "Hard Call Sales har levererat en konsekvent ström av kvalificerade möten med rätt beslutsfattare, vilket resulterat i över 20 MSEK i affärer för oss.",
      author: "Mattias Holm",
      role: "Säljchef",
      company: "AVEVA",
    },
  },
  {
    id: "monster",
    client: "Monster",
    category: "Enterprise",
    industry: "B2B HR-Tech & Rekryteringslösningar",
    metric: "120+",
    metricLabel: "bokade möten med HR-direktörer och VD",
    badge: "Enterprise Media",
    stats: [
      { label: "Bokade möten", value: "120+" },
      { label: "Avkastning (ROI)", value: "4.2x" },
      { label: "Genomsnittlig show rate", value: "89 %" },
      { label: "Målgrupp", value: "HR-chefer & VD" },
    ],
    challenge:
      "Monster behövde nå HR-direktörer och beslutsfattare på medelstora och stora nordiska bolag för att introducera nya B2B-rekryteringslösningar i en konkurrensutsatt marknad.",
    solution:
      "HCS genomförde en riktad outreach-kampanj med kombination av datadriven LinkedIn-bearbetning och personlig telefonuppföljning från erfarna SDR:er.",
    outcome:
      "Över 120 kvalificerade säljmöten bokades direkt i säljarnas kalendrar, vilket drev en markant ökning av nya ramavtal och stärkte Monsters position i Norden.",
    keyDeliverables: [
      "Segmenterad målgruppsdatabas med 3 000+ HR-chefer",
      "A/B-testade mejl- och samtalsmanus",
      "Realtidsintegration med Monsters CRM",
    ],
    quote: {
      text: "HCS har varit en pålitlig partner för att öppna dörrar till stora nordiska arbetsgivare med precision och professionalism.",
      author: "Kommersiell Ledare",
      role: "Sales Director Nordic",
      company: "Monster",
    },
  },
  {
    id: "idnet",
    client: "IDNet",
    category: "Tech",
    industry: "Logistik & RFID-lösningar",
    metric: "85+",
    metricLabel: "strategiska möten med lager- & logistikchefer",
    badge: "Logistik & Tech",
    stats: [
      { label: "Kvalificerade möten", value: "85+" },
      { label: "Genomsnittligt affärsvärde", value: "650 tkr" },
      { label: "Möteskonvertering", value: "31 %" },
      { label: "Fokus", value: "Supply Chain & Retail" },
    ],
    challenge:
      "Att nå upptagna logistikchefer och supply chain-ansvariga som ställer höga tekniska krav och har långa upphandlingsprocesser.",
    solution:
      "Senior mötesbokning kombinerat med värdebaserad outreach fokuserad på automation, ROI och minskade ledtider i lagermiljöer.",
    outcome:
      "85+ bokade möten ledde till flera stora systemleveranser och stärkte IDNets pipeline inom nordisk detaljhandel och industriell logistik.",
    keyDeliverables: [
      "Målgruppsberikning inom logistik och e-handel",
      "Teknisk invändningshantering och kvalificering enligt BANT",
      "Kalendersynk mot key account managers",
    ],
    quote: {
      text: "HCS team förstår komplex B2B-försäljning och lyckas boka in relevanta möten med rätt beslutsfattare gång på gång.",
      author: "Försäljningschef",
      role: "Head of Business Development",
      company: "IDNet",
    },
  },
  {
    id: "wall-to-wall",
    client: "Wall to Wall Group",
    category: "Enterprise",
    industry: "Fastighet & Industriell Tech",
    metric: "65+",
    metricLabel: "strategiska möten med fastighetschefer",
    badge: "Industri & Fastighet",
    stats: [
      { label: "Bokade möten", value: "65+" },
      { label: "Genomsnittligt ordervärde", value: "450 tkr" },
      { label: "Möteskonvertering", value: "34 %" },
      { label: "Geografiskt fokus", value: "Sverige & Norge" },
    ],
    challenge:
      "Att nå upptagna fastighets- och underhållschefer på kommunala och privata fastighetsbolag som sällan svarar på kalla mejl och har långa upphandlingsfönster.",
    solution:
      "Telefonburen uppsökande försäljning från erfarna HCS-säljare med fokus på ROI och förebyggande underhåll, synkroniserat med regionala upphandlingstidpunkter.",
    outcome:
      "Över 65 genomförda möten ledde till flera miljonkontrakt och etablerade Wall to Wall Group som föredragen partner bland Sveriges ledande fastighetsägare.",
    keyDeliverables: [
      "Kartläggning av fastighetsbestånd och beslutsfattare",
      "Proaktiv telefonprospektering mot driftchefer",
      "Fullständig integration med säljarnas kalendrar",
    ],
    quote: {
      text: "HCS har en exceptionell förmåga att nå fram till människor som annars har skyhöga trösklar för att ta möten. Resultatet syns direkt på vår sista rad.",
      author: "Marknadschef",
      role: "Head of Sales Nordic",
      company: "Wall to Wall Group",
    },
  },
  {
    id: "allt-om-juridik",
    client: "Allt om Juridik",
    category: "SaaS",
    industry: "Juridiska B2B-tjänster",
    metric: "150+",
    metricLabel: "kvalificerade företagsmöten och SaaS-abonnemang",
    badge: "LegalTech Scale-Up",
    stats: [
      { label: "Bokade möten", value: "150+" },
      { label: "Avtalskonvertering", value: "28 %" },
      { label: "Genomsnittlig show rate", value: "91 %" },
      { label: "Målgrupp", value: "VD & Ekonomichefer" },
    ],
    challenge:
      "Allt om Juridik behövde accelerera försäljningen av sina digitala juridiska rådgivningsabonnemang mot svenska SME-bolag och ekonomichefer.",
    solution:
      "Skräddarsydd kampanj med LinkedClient AI-agent i kombination med personlig telefonuppföljning fokuserad på riskminimering och juridisk trygghet.",
    outcome:
      "Över 150 kvalificerade möten ledde till en snabb ökning av årliga återkommande intäkter (ARR) och stark konvertering.",
    keyDeliverables: [
      "Segmenterad outreach mot svenska bolag 10–200 anställda",
      "LinkedClient flerstegssekvenser via LinkedIn och e-post",
      "Direktbokning i kalendrar med automatisk SMS- och mejlpåminnelse",
    ],
    quote: {
      text: "HCS har varit en motor i vår kundtillväxt. Mötena de bokar håller en jämn och hög kvalitet med beslutsfattare som har ett genuint behov.",
      author: "Affärsområdeschef",
      role: "Head of Sales",
      company: "Allt om Juridik",
    },
  },
  {
    id: "nordtech",
    client: "NordTech Solutions",
    category: "Consulting",
    industry: "IT- & Molnkonsult",
    metric: "3.2 MSEK",
    metricLabel: "i nya konsultuppdrag inom 90 dagar",
    badge: "Konsult & Tjänster",
    stats: [
      { label: "Affärsvärde (90 dagar)", value: "3.2 MSEK" },
      { label: "Bokade möten", value: "28 st" },
      { label: "Nyckelkunder vunna", value: "6 bolag" },
      { label: "Pilottid", value: "3 månader" },
    ],
    challenge:
      "Behov av att belägga seniora molnarkitekter och IT-säkerhetskonsulter snabbt under ett konjunkturskifte utan att konsulterna behövde ta tid från fakturerbara uppdrag.",
    solution:
      "HCS 3-månaders pilotmodell med fokus på målgruppsanpassad LinkedIn-outreach och personlig uppföljning mot IT-chefer med pågående molnmigreringsprojekt.",
    outcome:
      "28 kvalificerade möten under piloten resulterade i 6 nya ramavtal och 3.2 MSEK i säkrad konsultintäkt under första kvartalet.",
    keyDeliverables: [
      "Identifiering av bolag i aktiv molntransformation",
      "Värdebaserad outreach fokuserad på specialistkompetens",
      "Full transparens med veckovisa statusrapporter",
    ],
    quote: {
      text: "Efter bara två månader i piloten hade vi fyllt beläggningen för hela vårt seniorteam. Metodiken och transparensen är i en klass för sig.",
      author: "VD & Delägare",
      role: "Managing Partner",
      company: "NordTech Solutions",
    },
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "quote-1",
    quote: "Hard Call Sales har levererat en konsekvent ström av kvalificerade möten med rätt beslutsfattare, vilket resulterat i över 20 MSEK i affärer för oss.",
    highlightText: "över 20 MSEK i affärer",
    author: "Mattias Holm",
    role: "Säljchef",
    company: "AVEVA",
    category: "Enterprise",
    metricImpact: ">20 MSEK pipeline",
  },
  {
    id: "quote-2",
    quote: "HCS har varit en pålitlig partner för att öppna dörrar till stora nordiska arbetsgivare med precision och professionalism.",
    highlightText: "öppna dörrar till stora arbetsgivare",
    author: "Kommersiell Chef",
    role: "Sales Director Nordic",
    company: "Monster",
    category: "Enterprise",
    metricImpact: "120+ bokade möten",
  },
  {
    id: "quote-3",
    quote: "HCS team förstår komplex B2B-försäljning och lyckas boka in relevanta möten med rätt beslutsfattare gång på gång.",
    highlightText: "komplex B2B-försäljning",
    author: "Försäljningschef",
    role: "Head of Business Development",
    company: "IDNet",
    category: "Tech",
    metricImpact: "85+ strategiska möten",
  },
  {
    id: "quote-4",
    quote: "Med LinkedClient och HCS erfarna mötesbokare har vi kunnat öppna dörrar till Nordens största fastighetsägare på rekordtid.",
    highlightText: "rekordtid",
    author: "Marknadschef",
    role: "Head of Sales Nordic",
    company: "Wall to Wall Group",
    category: "Enterprise",
    metricImpact: "65+ strategiska möten",
  },
  {
    id: "quote-5",
    quote: "HCS har varit en motor i vår kundtillväxt. Mötena de bokar håller en jämn och hög kvalitet med beslutsfattare som har ett genuint behov.",
    highlightText: "jämn och hög kvalitet",
    author: "Affärsområdeschef",
    role: "Head of Sales",
    company: "Allt om Juridik",
    category: "SaaS",
    metricImpact: "150+ kvalificerade möten",
  },
];

