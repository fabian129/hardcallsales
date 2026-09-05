import { JobOpening } from "@/types";

export interface JobOpeningExtended extends JobOpening {
  department: string;
  compensation: string;
  perks: string[];
  experienceLevel: string;
  slug: string;
}

export const JOB_OPENINGS: JobOpeningExtended[] = [
  {
    id: "sdr-b2b",
    slug: "senior-b2b-motesbokare-sdr",
    title: "Senior B2B Mötesbokare / SDR",
    location: "Stockholm / Sliema, Malta",
    type: "Heltid",
    department: "Sales & Outreach",
    experienceLevel: "1–3 års B2B-erfarenhet",
    compensation: "Fast grundlön + provisionsmodell utan tak",
    description:
      "Som Senior Mötesbokare hos Hard Call Sales är du i händelsernas centrum. Du bearbetar beslutsfattare (VD, Marknadschefer, Säljchefer, IT-chefer) hos spännande tech- och SaaS-bolag i Norden och internationellt. Du kombinerar smarta AI-signaler från LinkedClient med personlig och förtroendeingivande telefonkontakt.",
    responsibilities: [
      "Prospektera och kontakta kvalificerade beslutsfattare via telefon och digitala kanaler",
      "Kvalificera leads utifrån kundens specifika ICP (Ideal Customer Profile)",
      "Boka in kvalitativa säljmöten direkt i våra kunders kalendrar",
      "Hantera invändningar med professionell rådgivning och värdeskapande dialog",
      "Löpande rapportering och feedback i CRM (HubSpot/Salesforce) och daglig avstämning med teamet",
    ],
    qualifications: [
      "Minst 1–2 års dokumenterad erfarenhet av mötesbokning, telefonförsäljning eller SDR-arbete B2B",
      "Mycket stark kommunikativ förmåga och flytande i svenska i tal och skrift (engelska är ett plus)",
      "Hög energinivå, tävlingsinstinkt och orädd inställning till telefonen",
      "Förmåga att förstå komplexa B2B-erbjudanden inom IT, SaaS och företagsrådgivning",
      "Disciplinerad med högt eget driv och vana att arbeta mot tydliga aktivitets- och kvalitetsmål",
    ],
    perks: [
      "Marknadsledande provisionsmodell utan intäktstak",
      "Valmöjlighet att arbeta från Sliema (Malta) med sol & hav eller vårt centrala Stockholmskontor",
      "Betalt boendestöd och flygbiljetter vid flytt till Malta",
      "Daglig coachning av säljledare med över 10 000 timmars säljerfarenhet",
      "Tillgång till marknadens vassaste AI-verktyg (LinkedClient)",
    ],
  },
  {
    id: "account-executive",
    slug: "senior-account-executive",
    title: "Account Executive / Senior Säljare",
    location: "Stockholm / Hybrid",
    type: "Heltid",
    department: "Enterprise Sales",
    experienceLevel: "3–5+ års Enterprise B2B",
    compensation: "Attraktiv fast lön + bonus & vinstdelning",
    description:
      "Som Account Executive hos Hard Call Sales leder du dialogen med VD:ar, CRO:s och säljledningar på snabbväxande tech- och IT-företag. Du ansvarar för att stänga nya pilotavtal, leda uppstartsworkshops och utveckla strategiska kundrelationer från vårt kontor i Stockholm.",
    responsibilities: [
      "Leda säljprocesser från kvalificerat introduktionsmöte till stängt avtal för 3-månaders piloter och helårssamarbeten",
      "Genomföra djupgående behovsanalyser och skräddarsy pilotupplägg för nordiska techbolag",
      "Leda strategiska uppstartsworkshops tillsammans med kundens ledningsgrupp",
      "Utveckla befintliga kundrelationer och identifiera möjligheter till uppskalning av mötesvolymer",
      "Agera rådgivare och expert kring B2B-pipelinebyggnad och SDR-strategier",
    ],
    qualifications: [
      "3–5+ års dokumenterad framgångsrik erfarenhet av komplex B2B-lösningförsäljning inom tech/SaaS",
      "Vana att förhandla och stänga affärer med C-level beslutsfattare",
      "Stark förståelse för pipeline-metodik, konverteringsgrader och kundanskaffningskostnad (CAC)",
      "Utmärkt presentationsförmåga på både svenska och engelska",
      "Affärsmässig mognad och förmåga att bygga långsiktigt förtroende",
    ],
    perks: [
      "Hög fast grundlön med generöst bonusprogram baserat på stängda avtal och kundnöjdhet",
      "Flexibelt hybridupplägg med kontor i centrala Stockholm",
      "Regelbundna resor och strategidagar på Malta",
      "Möjlighet att snabbt växa till Head of Sales eller Partner",
      "Full backning från vårt operativa SDR- och AI-team som fyller din kalender med heta möten",
    ],
  },
  {
    id: "ai-outreach-specialist",
    slug: "ai-outreach-data-specialist",
    title: "AI Outreach & Data Specialist / LinkedClient Operator",
    location: "Sliema, Malta / Remote",
    type: "Heltid",
    department: "Data & Growth",
    experienceLevel: "2+ års Data / Growth / Marketing Ops",
    compensation: "Fast lön + prestationsbonus",
    description:
      "Är du en data- och techdriven tillväxtspecialist som älskar automatisering, prompt engineering och träffsäker B2B-prospektering? I denna roll driftar, optimerar och utvecklar du sekvenserna i vår autonoma AI-säljagent LinkedClient samt berikar data från 100M+ globala beslutsfattare.",
    responsibilities: [
      "Konfigurera, övervaka och optimera outreach-sekvenser i LinkedClient och e-postmotorer",
      "Bygga hyperspecifika målgruppslistor (ICP) med hjälp av Apollo, Sales Navigator och interna databaser",
      "A/B-testa meddelandecopy, ämnesrader och köpsignaler för att maximera svars- och konverteringsfrekvens",
      "Säkra teknisk domänhälsa, SPF/DKIM/DMARC-inställningar och inbox deliverability (99%+)",
      "Analysera svarsmönster och leverera insiktsfull data till säljarna som tar telefonsamtalen",
    ],
    qualifications: [
      "2+ års erfarenhet av outbound sales automation, growth marketing eller data-driven lead generation",
      "Djup förståelse för e-postleveransbarhet, domäninfrastruktur och LinkedIn-algoritmer",
      "Erfarenhet av CRM-verktyg (HubSpot, Pipedrive), scraping-verktyg och moderna AI LLM-prompter",
      "Analytiskt sinne med vana att mäta opens, replies, bounce rates och möteskonvertering",
      "God förmåga att skriva engagerande, professionell B2B-copy på svenska och engelska",
    ],
    perks: [
      "Konkurrenskraftig fast lön med kvartalsvisa prestationsbonusar",
      "Arbete från vårt fantastiska kontor i Sliema med havsutsikt eller 100% remote med flexibla tider",
      "Arbete i den absoluta framkanten av AI-driven B2B-försäljning",
      "Generös budget för kurser, verktyg och personlig utveckling",
      "Teamresor, sociala aktiviteter och ett internationellt high-performance team",
    ],
  },
];

export const CULTURE_PILLARS = [
  {
    number: "01",
    title: "Siffror före adjektiv",
    subtitle: "Vi mäter det som räknas",
    description:
      "Vi gömmer oss inte bakom diffusa termer. Hos oss vet alla exakt vad som förväntas: antal samtal, show rate, bokade möten och skapad pipeline. Tydliga mål skapar trygghet och frihet.",
  },
  {
    number: "02",
    title: "Människa + Maskin",
    subtitle: "Världsledande AI som din hävstång",
    description:
      "Du behöver inte sitta och leta telefonnummer manuellt. Vår AI-säljagent LinkedClient öppnar dörrarna och bygger intresset — du kliver in med din personlighet och stänger mötet.",
  },
  {
    number: "03",
    title: "10 000 timmars coachning",
    subtitle: "Utvecklas varje vecka",
    description:
      "Du coachas dagligen av ledare som själva har ringt tiotusentals samtal och stängt hundratals affärer. Vi lyssnar på samtal tillsammans, finslipar argument och gör dig till en toppsäljare.",
  },
  {
    number: "04",
    title: "Stockholm & Medelhavet",
    subtitle: "Två fantastiska hubbar",
    description:
      "Välj mellan pulsen i Stockholm eller 300 soldagar om året på Malta. Vi uppmuntrar rotation mellan kontoren och firar framgångar tillsammans med gemensamma resor och aktiviteter.",
  },
];

export const BENEFITS_LIST = [
  {
    icon: "TrendingUp",
    title: "Provisionsmodell utan tak",
    description:
      "Vi anser att de som levererar mest ska tjäna bäst. Fast grundlön som bas med en mycket generös och transparent provisionsstege.",
  },
  {
    icon: "Palmtree",
    title: "Kontor i Sliema, Malta & Stockholm",
    description:
      "Toppmodernt kontor på 12:e våningen med panoramautsikt över Medelhavet i Sliema, eller vårt centrala nav i Stockholm.",
  },
  {
    icon: "Plane",
    title: "Betalda teamresor & kickoffer",
    description:
      "Gemensamma kickoffer, konferenser, middagar och sponsrade resor mellan kontoren i Stockholm och Malta.",
  },
  {
    icon: "Sparkles",
    title: "Certifiering i LinkedClient AI",
    description:
      "Lär dig bemästra marknadens modernaste AI-verktyg för outreach och B2B data, en kompetens som framtidssäkrar din karriär.",
  },
  {
    icon: "Award",
    title: "Tydlig & snabb karriärtrappa",
    description:
      "Vi befordrar internt baserat på resultat och attityd. Ta steget från SDR till Senior SDR, Team Lead eller Account Executive inom 6–12 månader.",
  },
  {
    icon: "HeartHandshake",
    title: "Hälsa & Trygghet",
    description:
      "Friskvårdsbidrag, privat sjukvårdsförsäkring, pensionsavsättningar och betalt boendestöd vid flytt till Malta.",
  },
];
