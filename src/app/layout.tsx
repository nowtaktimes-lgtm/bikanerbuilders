import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";

const inter = Inter({ subsets: ["latin"], display: 'swap' });

export const viewport: Viewport = {
  themeColor: '#0F172A',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Bikaner Builders - Top Construction & Architecture in Bikaner",
  description: "Bikaner's leading construction company offering 2D Naksha, 3D Front Elevation, and Turnkey Construction services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased selection:bg-[#EA580C] selection:text-white`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileBottomBar />
      </body>
    </html>
  );
}
