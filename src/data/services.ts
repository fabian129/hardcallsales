import { ServiceItem } from "@/types";

export const SERVICES: ServiceItem[] = [
  {
    id: "motesbokning",
    number: "01",
    title: "Mötesbokning med beslutsfattare",
    shortDesc: "Vi tar samtalet, du tar mötet. 10–100 bokade möten per månad, hos rätt person.",
    fullDesc:
      "Vi hjälper IT- och SaaS-bolag att boka möten med rätt beslutsfattare — oavsett bransch och land. Våra mötesbokare har i snitt över 10 000 timmars säljerfarenhet. Vi ringer relevanta prospekts med ett skräddarsytt manus baserat på er unika värdeproposition.",
    kicker: "Pilot 3 mån",
    icon: "CalendarCheck",
    isDarkFeatured: true,
    methodology:
      "Strukturerad uppringning kombinerat med djup förståelse för tech-erbjudanden. Vi hanterar invändningar professionellt och kvalificerar varje möte mot era uppsatta kriterier.",
    deliverables: [
      "10–100 kvalificerade möten per månad",
      "Bokas direkt i era säljares kalendrar",
      "Skräddarsydda manus och invändningsmatriser",
      "Ombokningsgaranti vid no-shows utan extra kostnad",
    ],
    tools: ["Google Meet", "Teams", "Calendly", "HubSpot", "Salesforce"],
    targetPersona:
      "VD, CRO & Försäljningschefer på IT/SaaS-bolag som vill fylla kalendrarna med 10–100 kvalificerade beslutsfattare per månad utan intern rekryteringsrisk.",
  },
  {
    id: "kampanjer",
    number: "02",
    title: "Mejl- och LinkedIn-kampanjer",
    shortDesc: "Sekvenser som når 100+ miljoner beslutsfattare.",
    fullDesc:
      "Riktade sekvenser och kampanjer via e-post och LinkedIn som når 100+ miljoner beslutsfattare oavsett bransch och geografi. Vi skapar personaliserade meddelanden med hög relevans och kombinerar detta med vårt eget nätverk på över 70 000 LinkedIn-beslutsfattare.",
    kicker: "100M+ kontakter",
    icon: "Mail",
    methodology:
      "Datadriven copywriting med hyper-personalisering, A/B-testning av ämnesrader och sekvenser, samt avancerad domän- och inbox-uppvärmning för högsta möjliga leveransgrad.",
    deliverables: [
      "Flerstegs e-post- och LinkedIn-sekvenser",
      "A/B-testade copyvarianter optimerade för svar",
      "Domänsäkring med SPF, DKIM och DMARC",
      "Detaljerad svars- och konverteringsanalys",
    ],
    tools: ["LinkedIn Sales Navigator", "Smartlead", "Instantly", "Lemlist"],
    targetPersona:
      "Kommersiella chefer & Growth Leads som vill penetrera nya marknader och nå 100M+ beslutsfattare med hög precision och domänsäkerhet.",
  },
  {
    id: "telefon",
    number: "03",
    title: "Telefonuppföljning och säljstöd",
    shortDesc: "Säljstöd som stänger loopen efter kampanjen.",
    fullDesc:
      "När någon visar intresse i en mejlsekvens eller på LinkedIn tar vårt erfarna säljteam vid och följer upp via telefon. Varma signaler omvandlas snabbt till bokade möten innan intresset svalnar.",
    kicker: "Säljstöd",
    icon: "PhoneCall",
    methodology:
      "Snabb reaktion på köpsignaler (klick, öppningar, LinkedIn-profilvisningar). Våra SDR:er ringer med full kontext om prospektets tidigare interaktion.",
    deliverables: [
      "Uppföljning inom minuter/timmar på varma signaler",
      "Stänger informationsloopar och besvarar frågor",
      "Minskar lead-bortfall med upp till 60 %",
      "Veckovis rapportering av samtalsutfall och feedback",
    ],
    tools: ["Aircall", "Salesloft", "HubSpot Calling", "VoiP"],
    targetPersona:
      "Säljteam med inkommande eller varma leads som behöver korta svarstider och stänga loopen direkt med professionella telefonsamtal.",
  },
  {
    id: "natverk",
    number: "04",
    title: "Nätverksbyggande och prospektering",
    shortDesc: "Prospektering och relationer före pitchen.",
    fullDesc:
      "Vi identifierar relevanta beslutsfattare i er målgrupp och bygger strategiska nätverk på autopilot. Relationer etableras och vårdas innan någon formell säljpitch sker, vilket skapar förtroende och värme.",
    kicker: "Prospektering",
    icon: "Network",
    methodology:
      "Löpande kartläggning av ICP (Ideal Customer Profile) i kombination med mjukt värdeskapande nätverkande. Varje månad adderas hundratals nya relevanta beslutsfattare till ert nätverk.",
    deliverables: [
      "Kontinuerligt inflöde av relevanta nätverkskontakter",
      "Uppbyggnad av varumärkeskännedom hos nyckelpersoner",
      "Segmenterade kontaktlistor exporterade till ert CRM",
      "Full transparens över vilka som kontaktas",
    ],
    tools: ["Apollo.io", "LinkedIn Sales Navigator", "Clay", "ZoomInfo"],
    targetPersona:
      "B2B-techbolag med längre säljcykler som vill bygga förtroende och strategiska relationer med nyckelbeslutsfattare innan pitchen.",
  },
  {
    id: "pilotmodellen",
    number: "05",
    title: "Pilotmodellen",
    statNumber: "10–100",
    statLabel: "möten per månad",
    shortDesc: "Pilotmodellen: sex steg, tre månaders test. Du ser resultatet innan du binder dig.",
    fullDesc:
      "Vår beprövade 3-månaders pilotmodell låter er utvärdera vår förmåga utan långa bindningstider eller stora upfront-investeringar. Vi tar hand om allt från workshop till outreach, bokning och slutlig ROI-utvärdering.",
    kicker: "Ingen bindning",
    icon: "Target",
    isPurpleFeatured: true,
    methodology:
      "Ett 6-stegs strukturerat ramverk som minimerar risk och maximerar transparens. Efter 3 månader har ni exakt data på kostnad per möte och förväntat affärsvärde.",
    deliverables: [
      "3 månaders strukturerad testperiod",
      "Garanterat 10–100 bokade möten per månad",
      "Veckovisa avstämningar och live-rapporter",
      "Omfattande slutrapport med konkreta skalningsrekommendationer",
    ],
    tools: ["Pilot KPI Tracker", "Looker Studio", "Slack Connect", "Notion Hub"],
    targetPersona:
      "Företagsledare och tech-grundare som vill verifiera resultat och ROI under 3 månader innan de binder upp sig för ett långsiktigt samarbete.",
  },
  {
    id: "segmentering",
    number: "06",
    title: "AI-driven segmentering & CRM",
    shortDesc: "Målgrupper som bygger sig själva. Plus CRM-integrering.",
    fullDesc:
      "Vi identifierar köpsignaler som nyckelrekryteringar, teknikskiften, kapitalrundor eller expansion med hjälp av maskininlärning. Samtidigt kopplar vi sömlöst ihop kalendrar och CRM så att allt landar där ni redan arbetar.",
    kicker: "AI & CRM",
    icon: "Workflow",
    methodology:
      "Realtidsövervakning av marknadssignaler i kombination med 2-vägs CRM-synkronisering. Eliminerar dubbelarbete och säkerställer 100 % datakvalitet i ert säljsystem.",
    deliverables: [
      "Dynamiska målgruppslistor baserade på triggers",
      "Tvåvägs integration med HubSpot, Salesforce, Pipedrive",
      "Automatiserad kalenderbokning och mötesbekräftelser",
      "Datarikning med direktnummer och verifierade e-postadresser",
    ],
    tools: ["HubSpot", "Salesforce", "Pipedrive", "Zapier", "Make", "OpenAI"],
    targetPersona:
      "Data- och säljdrivna organisationer som vill automatisera prospektering utifrån skarpa köpsignaler och eliminera manuell CRM-administration.",
  },
];
