import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PNB EAGLES - Season 9",
  description: "The Ultimate eSports Arena in PNB",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}