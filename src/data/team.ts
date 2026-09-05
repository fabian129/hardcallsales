import { TeamMember, JobOpening } from "@/types";

export const TEAM_ROLES: TeamMember[] = [
  {
    id: "kontaktperson",
    name: "Er kontaktperson",
    roleTitle: "Projektledning & Strategi",
    cardKicker: "01 Roll",
    description:
      "Håller i uppstartsworkshopen, definierar målgruppen och är er personliga kontaktpunkt genom hela piloten och samarbetet.",
    hub: "Stockholm & Malta",
  },
  {
    id: "saljare",
    name: "Säljarna som ringer",
    roleTitle: "Senior B2B SDR & Mötesbokning",
    cardKicker: "02 Roll",
    description:
      "Riktiga samtal från människor som kan er bransch — med i snitt över 10 000 timmars säljerfarenhet. Inte en robot i andra änden.",
    hub: "Malta (Sliema)",
  },
  {
    id: "analys",
    name: "Analysen & Kampanjledning",
    roleTitle: "Data, AI & Konvertering",
    cardKicker: "03 Roll",
    description:
      "Följer show rate, svarsfrekvens och konvertering i realtid, samt optimerar LinkedClient-sekvenser och målgrupper löpande.",
    hub: "Stockholm",
  },
];

export const CORE_VALUES = [
  {
    id: "resultat",
    number: "01",
    title: "Resultat framför löften",
    description:
      "Vi pratar inte om 'bra energi' eller 'stora möjligheter'. Vi pratar om show rate, antal bokade möten, kostnad per kvalificerad kontakt och genererat pipelinevärde. Siffror före adjektiv.",
    icon: "Target",
    bulletPoints: [
      "Hårda KPI:er uppsatta före varje kampanjstart",
      "Resultaträkning kopplad direkt till faktiskt affärsvärde",
      "Inga fluffiga vanity metrics — bara möten som stänger",
    ],
  },
  {
    id: "transparens",
    number: "02",
    title: "Radikal transparens",
    description:
      "Våra kunder har alltid 100 % insyn i vilka vi kontaktar, vilka sekvenser som skickas och vad som sägs i telefonsamtalen. Full spårbarhet i ert eget CRM.",
    icon: "ShieldCheck",
    bulletPoints: [
      "Full export och access till kontaktlistor och loggar",
      "Veckovisa avstämningar och transparens kring show rate",
      "Inget hemlighetsmakeri — ni äger all insamlad data",
    ],
  },
  {
    id: "precision",
    number: "03",
    title: "Datadriven precision & hybrid AI",
    description:
      "AI identifierar köpsignaler och öppnar dörren med kirurgisk precision. Men när samtalet ska tas är det en erfaren säljare med djup affärsförståelse som skapar förtroendet.",
    icon: "Cpu",
    bulletPoints: [
      "LinkedClient AI-agent för storskalig målgruppsanalys",
      "Säljare med i snitt över 10 000 timmar i telefonen",
      "Realtidsoptimering av samtalsmanus och sekvenser",
    ],
  },
  {
    id: "partnerskap",
    number: "04",
    title: "Partnerskap på lång sikt",
    description:
      "Vi fungerar som en integrerad förlängning av ert säljteam. Vi värnar om ert varumärkes rykte och bygger relationer som håller över många år.",
    icon: "Users",
    bulletPoints: [
      "3-månaders pilotmodell så ni ser värdet innan långa avtal",
      "Dedikerad Account Director som kan er affärsmodell",
      "Varumärkestrygg outreach med högsta affärsetik",
    ],
  },
];

export const LEADERSHIP_TEAM: TeamMember[] = [
  {
    id: "management-1",
    name: "Fredrik Holmgren",
    roleTitle: "Medgrundare & VD",
    cardKicker: "Ledning",
    description:
      "Över 12 års erfarenhet av B2B-försäljning och kommersiell skalning för snabbväxande techbolag. Leder Hard Call Sales strategiska expansion och enterprise-partnerskap.",
    bio: "Fredrik grundade HCS med visionen att revolutionera outbound-försäljning genom att kombinera klassiskt säljhantverk med banbrytande AI-automation.",
    expertise: ["Enterprise Outreach", "Pipeline-arkitektur", "Säljstrategi"],
    hub: "Stockholm & Malta",
    linkedinUrl: "https://www.linkedin.com/company/hard-call-sales",
    isLeadership: true,
  },
  {
    id: "management-2",
    name: "Alexander Lind",
    roleTitle: "Head of SDR Operations & Hub Director",
    cardKicker: "Operativ Chef Malta",
    description:
      "Ansvarar för den operativa säljleveransen och mötesbokarteamet i Sliema, Malta. Tränar och coachar säljarna enligt HCS 10 000-timmarsmetodik.",
    bio: "Med bakgrund som toppresterande SDR och säljcoach driver Alexander den dagliga leveransen med obevekligt fokus på samtalskvalitet och show rate.",
    expertise: ["Cold Calling Excellence", "Invändningshantering", "Team Coaching"],
    hub: "Malta (Sliema)",
    linkedinUrl: "https://www.linkedin.com/company/hard-call-sales",
    isLeadership: true,
  },
  {
    id: "management-3",
    name: "Sara Vesterlund",
    roleTitle: "Head of AI & Growth Architecture",
    cardKicker: "AI & Tech",
    description:
      "Leder implementeringen av LinkedClient AI-agenten, databerikning, CRM-integrationer och multikanalssekvenser över 100M+ beslutsfattare.",
    bio: "Sara har en bakgrund inom RevOps och data engineering för internationella SaaS-bolag och säkrar att varje kampanj bygger på verifierade köpsignaler.",
    expertise: ["LinkedClient AI", "Data Enrichment", "HubSpot/Salesforce Sync"],
    hub: "Stockholm",
    linkedinUrl: "https://www.linkedin.com/company/hard-call-sales",
    isLeadership: true,
  },
  {
    id: "management-4",
    name: "Marcus Ahlström",
    roleTitle: "Client Success & Pilot Director",
    cardKicker: "Kundframgång",
    description:
      "Leder uppstartsworkshops, måldefiniering och den 6-stegiga pilotprocessen. Säkrar att varje ny kund når förväntat mötesantal och maximal ROI.",
    bio: "Marcus har lett över 100 framgångsrika B2B-piloter inom IT, industri och SaaS med en genomsnittlig förlängningsgrad på över 90 %.",
    expertise: ["Pilotmetodik", "ICP-definition", "ROI-analys"],
    hub: "Stockholm & Malta",
    linkedinUrl: "https://www.linkedin.com/company/hard-call-sales",
    isLeadership: true,
  },
];

export const HUBS = [
  {
    id: "stockholm",
    city: "Stockholm",
    country: "Sverige",
    title: "Huvudkontor & Strategiskt Nav",
    address: "Stureplan / Sveavägen, Stockholm",
    description:
      "Strategisk ledning, kundansvar, teknisk integration och AI-utveckling för våra nordiska och europeiska kunder.",
    badge: "HQ & Strategi",
    roleFocus: "Ledning, Kundansvar, CRM-integration & Pilotworkshops",
    features: [
      "Strategisk rådgivning och pilotplanering",
      "Teknisk integration mot HubSpot, Salesforce och Pipedrive",
      "Kontoansvariga och analysspecialister på plats",
      "Centralt beläget i Stockholms tech- och finansdistrikt",
    ],
    email: "info@hardcallsales.se",
    phone: "+46 70 850 63 04",
    operatingHours: "Mån–Fre 08:00 – 17:00 CET",
  },
  {
    id: "malta",
    city: "Sliema",
    country: "Malta",
    title: "Operativt Säljnav & AI-Center",
    address: "Mayflower Mansions, 12th Floor, Sliema, Malta",
    description:
      "Vårt operativa säljnav med utsikt över Medelhavet. Härifrån ringer våra internationella och nordiska topp-SDR:er med oöverträffad energi.",
    badge: "Operativt Säljnav",
    roleFocus: "Seniora B2B SDR:er, Kalla samtal & Multi-touch Outreach",
    features: [
      "Högpresterande säljkultur i internationell miljö",
      "Toppmodern telefoniteknologi och realtidsövervakning",
      "300 soldagar per år med attraktiv expat-livsstil",
      "Fokus på högt samtalsengagemang och möteskvalitet",
    ],
    email: "malta@hardcallsales.se",
    phone: "+46 70 850 63 04",
    operatingHours: "Mån–Fre 08:30 – 17:30 CET",
  },
];

export const COMPANY_STORY = {
  headline: "Från traditionella kalla samtal till modern hybrid AI-outreach",
  intro:
    "Hard Call Sales grundades med en enkel övertygelse: B2B-företag ska inte behöva spendera månader och miljontals kronor på att bygga egna säljfunktioner från grunden innan de vet om metodiken fungerar.",
  paragraphs: [
    "Under 2010-talet dominerades branschen av antingen trötta kalla samtal med generiska manus, eller automatiserad mass-spam som förstörde varumärken. Vi såg att det saknades en aktör som kunde kombinera den kirurgiska precisionen i modern data med erfarna säljare som faktiskt behärskar komplexa B2B-samtal.",
    "Genom att etablera vårt strategiska nav i Stockholm och vårt operativa säljnav i Sliema på Malta skapade vi en unik hybridmodell: extremt motiverade, erfarna säljare som ringer på varma signaler framtagna av avancerad AI och datamodellering.",
    "Idag är vi certifierad partner till LinkedClient och har hjälpt över 13 ledande tech- och industribolag att generera mer än 20 MSEK i bevisat pipelinevärde. Vårt löfte förblir detsamma: Siffror före adjektiv, 100 % transparens och möten som faktiskt stänger.",
  ],
  milestones: [
    { year: "Start", title: "Grundandet & 10 000-timmarsregeln", desc: "HCS grundas med fokus på högkvalitativ B2B-mötesbokning för IT-sektorn." },
    { year: "Expansion", title: "Malta Hub i Sliema", desc: "Etablering av vårt operativa säljcenter med Medelhavsutsikt och högpresterande säljare." },
    { year: "Innovation", title: "LinkedClient AI-partnerskap", desc: "Certifiering och integrering av världens första AI-sales agent tillsammans med kalla samtal." },
    { year: "Idag", title: ">20 MSEK i genererad pipeline", desc: "13+ aktiva techkunder, 100+ stängda affärer och 98 % nöjda pilotpartners." },
  ],
};

export const JOB_OPENINGS: JobOpening[] = [
  {
    id: "b2b-sdr",
    title: "B2B Mötesbokare / SDR",
    location: "Sliema, Malta / Stockholm",
    type: "Heltid",
    description:
      "Du kommer att arbeta med aktiv prospektering, telefonbokning och LinkedIn-outreach mot beslutsfattare på IT- och SaaS-bolag.",
    responsibilities: [
      "Kontakta och boka kvalificerade möten med C-level beslutsfattare via telefon och LinkedIn",
      "Kommunicera värdeerbjudanden för ledande tech- och SaaS-kunder",
      "Dokumentera aktivitet och insikter i CRM-system",
      "Samarbeta tätt med teamets analys- och LinkedClient-specialister",
    ],
    qualifications: [
      "Minst 1–2 års erfarenhet av B2B-försäljning eller mötesbokning",
      "Flytande svenska i tal och skrift (engelska är meriterande)",
      "Hög energinivå, orädd för telefonen och genuint intresse för affärer",
      "Vinnarskalle som motiveras av tydliga KPI:er och hög provision",
    ],
  },
  {
    id: "account-executive",
    title: "Senior B2B Account Executive",
    location: "Stockholm / Hybrid",
    type: "Heltid",
    description:
      "Ansvara för kunddialoger, pilotuppstarter och långsiktiga samarbetsavtal med Sveriges mest spännande IT- och tillväxtbolag.",
    responsibilities: [
      "Leda uppstartsworkshops och definiera målgrupper för nya pilotkunder",
      "Presentera resultat och ROI-utvärderingar efter avslutade 3-månaderspiloter",
      "Bygga långsiktiga kundrelationer och expandera samarbeten",
      "Agera strategisk rådgivare inom modern B2B-prospektering",
    ],
    qualifications: [
      "3+ års dokumenterad framgång inom B2B-försäljning eller SaaS",
      "Djup förståelse för kommersiella processer och pipeline-metodik",
      "Förmåga att kommunicera med VD, CRO och säljchefer på en hög nivå",
      "Strukturerad och van vid CRM-styrd försäljning",
    ],
  },
  {
    id: "data-ai-specialist",
    title: "Data & AI Campaign Specialist",
    location: "Stockholm / Malta / Remote",
    type: "Heltid",
    description:
      "Ansvara för målgruppssegmentering, LinkedClient AI-sekvenser och konverteringsoptimering över alla våra kundkampanjer.",
    responsibilities: [
      "Konfigurera och optimera LinkedClient AI-agenter och outreach-sekvenser",
      "Segmentera och rika målgruppsdata mot ICP med verktyg som Apollo, Clay och LinkedIn",
      "A/B-testa copy och svarsmönster för att maximera möteskonvertering",
      "Sätta upp tekniska CRM-integrationer och kalendersynk",
    ],
    qualifications: [
      "Erfarenhet av outbound tooling (Smartlead, Instantly, Apollo, Clay eller LinkedClient)",
      "God förståelse för e-postleverabilitet (SPF, DKIM, DMARC) och domänstrategier",
      "Analytisk förmåga att tolka konverteringsdata och dra träffsäkra slutsatser",
      "Stort intresse för AI-drivna säljverktyg",
    ],
  },
];
