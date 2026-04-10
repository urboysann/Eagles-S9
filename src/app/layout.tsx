import "@/app/globals.css";
import type { Metadata } from "next";
import React from "react";
import { Outfit, Montserrat } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "PNB EAGLES - Season 9",
  description:
    "The Ultimate E-Sports Arena in Politeknik Negeri Bali. Join the competition, explore the seminar, and be part of the gaming revolution.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.variable} ${montserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}