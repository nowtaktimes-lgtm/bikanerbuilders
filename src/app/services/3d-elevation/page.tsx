import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Top 3D Front Elevation Designers in Bikaner | Bikaner Builders",
  description: "Get photorealistic 3D front elevation designs for your home in Bikaner. 100% Vastu-compliant, modern, and traditional house facades. Call 9351132772 for a free consultation.",
};

export default function ThreeDElevationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "3D Architectural Rendering",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Bikaner Builders",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Shop No 04, Opp Govt School, Napasar Rd, Ridmalsar Sipahiyan",
        "addressLocality": "Bikaner",
        "addressRegion": "Rajasthan",
        "postalCode": "334022",
        "addressCountry": "IN"
      },
      "telephone": "+919351132772"
    },
    "areaServed": {
      "@type": "City",
      "name": "Bikaner"
    },
    "description": "Premium photorealistic 3D front elevation designs and architectural rendering for residential and commercial buildings in Bikaner."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="pt-20">
        
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-slate-900">
          <Image
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1920&auto=format&fit=crop"
            alt="Modern 3D house front elevation design in Bikaner by expert architects"
            title="3D Elevation Bikaner"
            fill
            priority
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
          
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-12">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 drop-shadow-xl leading-tight">
              Premium 3D Front Elevation <span className="text-orange-500">Design in Bikaner</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 font-medium max-w-2xl mx-auto mb-10 drop-shadow-md">
              Visualize your dream home before the first brick is laid.
            </p>
            <Link href="tel:9351132772" className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white font-bold text-lg px-8 py-4 rounded-full shadow-[0_4px_20px_rgba(234,88,12,0.5)] transition-all hover:-translate-y-1">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M11.97 2.005a9.962 9.962 0 00-8.528 15.11L2 22l5.023-1.328a9.964 9.964 0 104.947-18.667zM12 20a7.973 7.973 0 01-4.062-1.115l-.291-.173-3.023.794.808-2.953-.19-.3A7.95 7.95 0 014.032 12 7.977 7.977 0 1112 20zm4.242-5.467c-.232-.116-1.378-.68-1.593-.758-.215-.078-.372-.116-.528.116-.156.232-.6 .758-.737.914-.136.155-.274.175-.506.058-.232-.116-.983-.362-1.87-1.156-.69-.617-1.155-1.38-1.29-1.612-.136-.233-.014-.359.102-.475.105-.105.232-.272.348-.408.116-.136.155-.233.232-.388.077-.156.039-.292-.019-.408-.058-.116-.528-1.277-.723-1.748-.19-.46-.383-.398-.528-.406-.137-.008-.293-.008-.45-.008z" /></svg>
              Get a Free Quote
            </Link>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">Why Choose Our 3D Elevation Services?</h2>
              <div className="w-24 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mb-6 border border-orange-100">
                  <span className="text-orange-500 text-3xl">🕉️</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">100% Vastu Compliant</h3>
                <p className="text-slate-600 leading-relaxed">
                  Our exterior designs respect traditional Vastu principles, ensuring correct placement of windows, doors, and balconies for positive energy flow.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mb-6 border border-orange-100">
                  <span className="text-orange-500 text-3xl">💰</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Cost-Effective Materials</h3>
                <p className="text-slate-600 leading-relaxed">
                  We render realistic material textures (HPL, ACP, tiles) that are easily available in Bikaner, helping you calculate accurate BOQ before construction.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mb-6 border border-orange-100">
                  <span className="text-orange-500 text-3xl">☀️</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Bikaner Climate Ready</h3>
                <p className="text-slate-600 leading-relaxed">
                  Our elevations incorporate heat-resistant design features like extended sunshades and ventilated facades tailored for Rajasthan's extreme temperatures.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
