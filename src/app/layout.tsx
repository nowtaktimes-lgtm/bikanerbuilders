import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import { SettingsProvider } from "@/components/SettingsProvider";
import { generateLocalBusinessSchema } from '@/lib/schema';
import { getGlobalSettings, getRecentLocations, getAllServices } from "@/lib/api";

const inter = Inter({ subsets: ["latin"], display: 'swap' });

export const viewport: Viewport = {
  themeColor: '#0F172A',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Top Builders in Bikaner | Free Site Visit & Vastu Map | 9351132772",
  description: "Bikaner me ghar banwana hai? Get 100% Vastu-compliant 3D designs & turnkey construction with a transparent BOQ. Call now to book your FREE site inspection!",
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [globalSettings, recentLocations, services] = await Promise.all([
    getGlobalSettings(),
    getRecentLocations(),
    getAllServices()
  ]);

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateLocalBusinessSchema()) }} />
      </head>
      <body className={`${inter.className} antialiased selection:bg-[#EA580C] selection:text-white pb-16 md:pb-0`}>
        <SettingsProvider settings={globalSettings}>
          <Header services={services} />
          <main>{children}</main>
          <Footer locations={recentLocations} />
          <MobileBottomBar />
        </SettingsProvider>
      </body>
    </html>
  );
}


