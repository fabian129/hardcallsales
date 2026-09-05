import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Mail } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

interface LeaderData {
  name: string;
  role: string;
  tagline: string;
  image: string;
  linkedin: string;
  fullBio: string[];
  specialty: string[];
  meetingCta: {
    title: string;
    description: string;
  };
}

const LEADERS_DATA: Record<string, LeaderData> = {
  malin: {
    name: "Malin Berlin",
    role: "VD & Partner (Sverige)",
    tagline: "Ansvarig för kundrelationer i Europa och ledare för det svenska kontoret.",
    image: "/images/team/malin-lindqvist.png",
    linkedin: "https://www.linkedin.com/in/malinberlins/",
    fullBio: [
      "Jag kom ner till Malta i slutet av 2017 med ett tydligt mål: att tjäna ihop till en lägenhet på Östermalm utan lån innan jag fyllde 25.",
      "Efter bara sex månader som mötesbokare på Hard Call Sales blev jag toppsäljare och hade flera månader med över 250 000 kr i provision – vilket gjorde målet allt mer realistiskt.",
      "I mitten av 2023 blev det verklighet. Lägenheten på Östermalm är numera min, och idag ansvarar jag för våra kundrelationer i Europa.",
      "Jag leder det svenska kontoret och jobbar främst med att bygga nya affärsrelationer, utveckla nyckelkunder och teckna nya avtal. På fritiden gillar jag att resa, träna och hänga med vänner eller familjen.",
    ],
    specialty: ["B2B Kundrelationer", "Nyckelavtal & Förhandling", "Pipeline-strategi IT/SaaS"],
    meetingCta: {
      title: "Boka ett strategisamtal direkt med Malin",
      description: "Diskutera er målgrupp, era säljmål och hur en tre månaders pilot kan se ut för ert bolag.",
    },
  },
  pontus: {
    name: "Pontus Bredal-Hansen",
    role: "Grundare & Partner",
    tagline: "Grundare sedan 2017, pipeline-strateg och arkitekten bakom nätverksmodellen.",
    image: "/images/team/pontus-westerlund.png",
    linkedin: "https://www.linkedin.com/in/pontus-bredal-hansen-51a07a110/",
    fullBio: [
      "Jag har jobbat med försäljning i hela mitt vuxna liv. De sista åren innan vi drog igång Hard Call Sales jobbade jag på ett av Sveriges största mötesbokningsföretag – och efter att ha toppat intäktslistan varje månad i över ett år kände jag att det var dags att bygga något eget.",
      "Tillsammans med Joakim startade jag Hard Call Sales i januari 2017, efter att vi flyttat till Malta och hyrt en av landets största villor som kontor. Ambitionen var enkel: att skapa ett säljbolag med högre kvalitet, mer affärsfokus – och roligare kultur.",
      "Sedan dess har vi bokat tiotusentals möten, representerat världsledande bolag och hjälpt allt från snabbväxande tech-startups till världsledande företag att nå rätt beslutsfattare.",
      "Idag kombinerar vi klassisk mötesbokning med smart AI-prospektering genom bland annat vår partner LinkedClient – och fortsätter utveckla vår modell dagligen. När jag inte jobbar tränar jag thaiboxning, gymmar eller umgås med familjen.",
    ],
    specialty: ["Outbound B2B Metodik", "AI-Prospektering & LinkedIn", "Skalning av Säljkår"],
    meetingCta: {
      title: "Boka ett taktiskt möte med Pontus",
      description: "Gå igenom hur vi bygger upp er säljmaskin och skapar ett ägt nätverk av 70 000+ beslutsfattare.",
    },
  },
  joakim: {
    name: "Joakim Ström",
    role: "Grundare & Operativ chef",
    tagline: "Grundare sedan 2017, operativ ledare och säljkulturens ryggrad.",
    image: "/images/team/joakim-sundqvist.png",
    linkedin: "https://www.linkedin.com/in/joakim-strom-ab5aaa13a/",
    fullBio: [
      "Jag har alltid gillat affärer – redan som liten sålde jag golfbollar jag dykt upp eller samlade pant på festivaler som sjuåring. Jag har inga problem med att jobba sju dagar i veckan om det krävs.",
      "Innan jag startade Hard Call Sales tillsammans med Pontus 2017 hade jag olika säljjobb. Det sista innan vi drog igång var att jobba 300 timmar i månaden i en fabrik. Det var bra betalt, men inte hållbart i längden. Jag har inget emot att jobba hårt – men det får gärna vara roligt också.",
      "Jag har läst över 100 böcker om försäljning, ledarskap och personlig utveckling, och älskar att få fram nya idéer, genomföra dem och se företaget växa. Samtidigt har jag inga problem att sätta mig och kötta samtal en hel dag – man får aldrig glömma var man kommer ifrån.",
      "Sälj är kul när man lyckas – och jag älskar att lyckas. Därför älskar jag försäljning. På fritiden hänger jag med familjen, tar långa promenader med hunden Luna, kör thaiboxning eller dyker efter muränor.",
    ],
    specialty: ["Säljkultur & Träning", "Operativ Samtalskvalitet", "Ledarskap & Execution"],
    meetingCta: {
      title: "Boka ett möte med Joakim",
      description: "Se hur vi tränar våra säljare att hantera era mest komplexa invändningar i skarpa B2B-samtal.",
    },
  },
};

export function generateStaticParams() {
  return [
    { slug: "malin" },
    { slug: "pontus" },
    { slug: "joakim" },
  ];
}

export default async function LeaderPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const leader = LEADERS_DATA[slug];

  if (!leader) {
    notFound();
  }

  return (
    <main className="w-full min-h-screen bg-[#0A0A0A] text-white">
      <Header />

      {/* ── Breadcrumb & Back button ── */}
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-12 pt-32 sm:pt-40 pb-8">
        <Link
          href="/#ledning"
          className="inline-flex items-center text-xs font-mono tracking-widest text-neutral-400 hover:text-white transition-colors uppercase group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
          Tillbaka till Ledning &amp; Team
        </Link>
      </div>

      {/* ── Hero Profile Section ── */}
      <section className="w-full max-w-6xl mx-auto px-6 sm:px-12 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Vänster: Stor bild + Socials */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-[#141414] shadow-2xl">
              <img
                src={leader.image}
                alt={leader.name}
                className="w-full h-full object-cover object-center grayscale contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />
            </div>

            <div className="mt-6 flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/10">
              <span className="text-xs font-mono text-neutral-400">CONNECTA MED {leader.name.split(" ")[0].toUpperCase()}</span>
              <a
                href={leader.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-xs font-mono text-white transition-colors"
              >
                <svg className="w-3.5 h-3.5 mr-1.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.49 1.49 0 0 0 1.49-1.48 1.5 1.5 0 0 0-1.49-1.5 1.5 1.5 0 0 0-1.5 1.5c0 .82.68 1.48 1.5 1.48m1.4 9.74v-8.37H5.06v8.37h2.8z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          {/* Höger: Bio & Specialiteter */}
          <div className="lg:col-span-7 flex flex-col justify-start">
            <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase block mb-3">
              {leader.role}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-6">
              {leader.name}
            </h1>
            <p className="text-lg sm:text-xl text-neutral-300 font-light leading-relaxed mb-8 pb-8 border-b border-white/10">
              {leader.tagline}
            </p>

            {/* Story Paragraphs */}
            <div className="space-y-5 text-neutral-400 text-sm sm:text-base leading-relaxed font-normal">
              {leader.fullBio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>


            {/* Specialties */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider block mb-3">
                Expertis &amp; Ansvarsområden
              </span>
              <div className="flex flex-wrap gap-2">
                {leader.specialty.map((spec) => (
                  <span
                    key={spec}
                    className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-neutral-300 font-mono"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── Dedikerad Boka Möte CTA Längst ner ── */}
      <section className="w-full bg-[#111111] border-t border-white/10 py-20 sm:py-28">
        <div className="w-full max-w-4xl mx-auto px-6 sm:px-12 text-center">
          <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase block mb-4">
            PERSONLIG KONTAKT
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white mb-6">
            {leader.meetingCta.title}
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 max-w-xl mx-auto mb-10 leading-relaxed font-light">
            {leader.meetingCta.description}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/boka-mote"
              className="inline-flex items-center px-8 py-4 rounded-full bg-white text-black text-sm font-medium uppercase tracking-wider hover:bg-neutral-200 transition-colors shadow-lg"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Boka möte med {leader.name.split(" ")[0]}
            </Link>
            <a
              href="mailto:info@hardcallsales.se"
              className="inline-flex items-center px-8 py-4 rounded-full bg-transparent border border-white/20 text-white text-sm font-medium uppercase tracking-wider hover:bg-white/10 transition-colors"
            >
              <Mail className="w-4 h-4 mr-2" />
              Skicka e-post
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
