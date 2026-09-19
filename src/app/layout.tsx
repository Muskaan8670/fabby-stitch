import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { CartProvider } from "@/context/CartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fabby Stitch — Bespoke & Custom Apparel Workshop NYC",
  description:
    "Editorial ready-to-wear fashion essentials, custom embroidery, screen printing, and corporate apparel solutions in New York.",
  icons: {
    icon: "/images/favvy-stitch-logo.webp",
    shortcut: "/images/favvy-stitch-logo.webp",
    apple: "/images/favvy-stitch-logo.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FAF9F6] text-[#121212] font-sans">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
