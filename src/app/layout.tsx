import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import { SettingsProvider } from "@/components/SettingsProvider";
import { generateGeneralContractorSchema } from '@/lib/schema';
import { getGlobalSettings, getRecentLocations, getAllServices, SITE_URL } from "@/lib/api";
import { getCombinedServices } from "@/lib/services";

const inter = Inter({ subsets: ["latin"], display: 'swap' });

export const viewport: Viewport = {
  themeColor: '#0F172A',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Construction Company in Bikaner | Top Builders & House Construction",
  description: "Looking for a trusted construction company & builders in Bikaner? We coordinate house construction, architectural planning, 2D Vastu maps, 3D elevation, and turnkey projects under one roof.",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: 'https://www.bikanerbuilders.in/',
  },
  openGraph: {
    title: 'Construction Company in Bikaner | Top Builders & House Construction',
    description: 'Looking for a trusted construction company & builders in Bikaner? We coordinate house construction, architectural planning, 2D Vastu maps, 3D elevation, and turnkey projects under one roof.',
    url: SITE_URL,
    siteName: 'Bikaner Builders',
    images: [
      {
        url: 'https://www.bikanerbuilders.in/_next/image?url=%2Fassets%2Fog_bikaner_builders_v2.jpg&w=1200&q=75',
        width: 1200,
        height: 630,
        alt: 'Bikaner Builders - Construction Company and Builders in Bikaner',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Construction Company in Bikaner | Top Builders & House Construction',
    description: 'Looking for a trusted construction company & builders in Bikaner? We coordinate house construction, architectural planning, 2D Vastu maps, 3D elevation, and turnkey projects under one roof.',
    images: ['https://www.bikanerbuilders.in/_next/image?url=%2Fassets%2Fog_bikaner_builders_v2.jpg&w=1200&q=75'],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [globalSettings, recentLocations, dynamicServices] = await Promise.all([
    getGlobalSettings(),
    getRecentLocations(),
    getAllServices()
  ]);
  const services = getCombinedServices(dynamicServices);

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateGeneralContractorSchema()) }} />
      </head>
      <body className={`${inter.className} antialiased selection:bg-[#EA580C] selection:text-white pb-16 md:pb-0`}>
        <SettingsProvider settings={globalSettings}>
          <Header services={services} />
          <main>{children}</main>
          <Footer locations={recentLocations} services={services} />
          <MobileBottomBar />
        </SettingsProvider>
      </body>
    </html>
  );
}


