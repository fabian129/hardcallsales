import { PilotStep } from "@/types";

export const PILOT_STEPS: PilotStep[] = [
  {
    step: "01",
    title: "Workshop & uppstart",
    subtitle: "Förberedelse och djupdykning i ert erbjudande",
    layoutSide: "left",
    points: [
      "Vi går igenom ert erbjudande, affärsmål och nuläge",
      "Ni håller en presentation så vi förstår erbjudandet fullt ut",
      "Vi säkerställer att vi kan svara på vanliga invändningar i samtal",
      "Vi definierar vad som räknas som ett kvalificerat möte",
    ],
  },
  {
    step: "02",
    title: "Mål & KPI:er",
    subtitle: "Tydliga nyckeltal och förväntansbild",
    layoutSide: "right",
    points: [
      "Vi sätter tydliga mål för testperioden",
      "Vi enas om hur vi mäter resultat",
      "Vi mäter antal möten, kvalitet, show rate och konvertering",
      "Allt dokumenteras och görs tillgängligt i er dashboard",
    ],
  },
  {
    step: "03",
    title: "Målgrupp & beslutsfattare",
    subtitle: "Identifiering av exakt rätt mottagare",
    layoutSide: "left",
    points: [
      "Vi går igenom exakt målgrupp: bransch, roll, storlek och region",
      "Vi tar fram er idealkundprofil (ICP) och kompletterar med vår globala databas",
      "Ni har alltid full insyn i vilka vi kontaktar",
    ],
  },
  {
    step: "04",
    title: "Teknisk setup",
    subtitle: "Infrastruktur, domäner och systemintegration",
    layoutSide: "right",
    points: [
      "Vi integrerar er kalender så möten bokas direkt hos rätt person",
      "Vi sätter upp dedikerade e-postkonton och LinkedIn-profiler för outreach",
      "CRM-integration görs sömlöst där det är relevant (HubSpot, Salesforce etc.)",
    ],
  },
  {
    step: "05",
    title: "Bokningsflöde & uppföljning",
    subtitle: "Aktivt uppsökande arbete och mötesbokning",
    layoutSide: "left",
    points: [
      "Vi sätter rutiner för bokning, bekräftelser och påminnelser",
      "Ni får löpande rapporter — veckovis",
      "Vi följer upp möten för att säkra kvalitet och närvaro",
      "Justeringar görs löpande om något kan förbättras",
      "Ni slipper jaga — vi tar ansvar hela vägen fram till mötet",
    ],
  },
  {
    step: "06",
    title: "Utvärdering & Nästa steg",
    subtitle: "Slutsatser, affärsnytta och rekommendation för skala",
    layoutSide: "right",
    points: [
      "Vi analyserar datan från kampanjen och kopplar till affärsnytta",
      "Vi presenterar en sammanställning: antal möten, kvalitet och utfall",
      "Vi ger en tydlig rekommendation för hur ett fullt samarbete kan se ut",
      "Fokus: hur vi maximerar affärsvärde per investerad krona",
    ],
  },
];
