import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { CommunityFooter } from "@/components/sections/CommunityFooter";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { CalProvider } from "@/components/cal/CalProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Hard Call Sales — Vi bygger B2B-pipelines för IT & SaaS",
    template: "%s | Hard Call Sales",
  },
  description:
    "Specialister på B2B-leadgenerering, mötesbokning och kalla samtal för IT- och SaaS-bolag. 3-månaders pilotmodell med 10–100 möten/månad utan lång bindningstid.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="sv"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-screen flex flex-col bg-[#0A0A0A] text-white selection:bg-[#7851A9] selection:text-white">
        <CalProvider />
        <SmoothScroll>
          <Header />
          <main className="flex-1 w-full">{children}</main>
          <CommunityFooter />
        </SmoothScroll>
      </body>
    </html>
  );
}
