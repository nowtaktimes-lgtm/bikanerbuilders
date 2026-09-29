import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Top 3D Front Elevation Designers in Bikaner | Bikaner Builders",
  description: "Best 3D front elevation design for residential and commercial buildings in Bikaner. Modern, classic, and Vastu-compliant house front designs.",
  keywords: "Premium 3D Front Elevation Designers in Bikaner, Bikaner Builders, top civil contractor in Bikaner, best building construction company near me, ghar ka naksha, architects in bikaner",
};

export default function SEOOptimizedServicePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Architectural Rendering",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Bikaner Builders",
      "image": "https://www.bikanerbuilders.in/icon.svg",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Shop No 04, Opp Govt School, Napasar Rd, Ridmalsar Sipahiyan",
        "addressLocality": "Bikaner",
        "addressRegion": "Rajasthan",
        "postalCode": "334022",
        "addressCountry": "IN"
      },
      "telephone": "+919351132772",
      "url": "https://www.bikanerbuilders.in"
    },
    "areaServed": {
      "@type": "City",
      "name": "Bikaner"
    },
    "description": "Best 3D front elevation design for residential and commercial buildings in Bikaner. Modern, classic, and Vastu-compliant house front designs."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{ "@type": "Question", "name": "How much does a 3D front elevation cost in Bikaner?", "acceptedAnswer": { "@type": "Answer", "text": "The cost depends on the size of the frontage and design details. We offer highly affordable rates for residential 3D elevations starting from just a few thousand rupees with complete material detailing." } },{ "@type": "Question", "name": "Do you provide material details with the 3D design?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! We are not just 3D designers, we are a complete building construction company in Bikaner. We provide complete specifications for tiles, HPL, glass, and paint codes." } },{ "@type": "Question", "name": "Is the elevation Vastu compliant?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We ensure balcony placements, main gate positions, and window directions perfectly align with Vastu Shastra." } }]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `JSON.stringify(serviceSchema)` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `JSON.stringify(faqSchema)` }} />
      
      <div className="pt-20">
        
        {/* SEO Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-slate-900">
          <Image
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1920&auto=format&fit=crop"
            alt="Premium 3D Front Elevation Designers in Bikaner - Bikaner Builders"
            title="Premium 3D Front Elevation Designers in Bikaner"
            fill
            priority
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent"></div>
          
          <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-12">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 drop-shadow-xl leading-tight">
              Premium 3D Front Elevation Designers in Bikaner
            </h1>
            <h2 className="text-xl md:text-2xl text-orange-400 font-bold max-w-3xl mx-auto mb-8 drop-shadow-md">
              Best 3D front elevation design for residential and commercial buildings in Bikaner. Modern, classic, and Vastu-compliant house front designs.
            </h2>
            <Link href="tel:9351132772" className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white font-bold text-xl px-10 py-5 rounded-full shadow-[0_4px_25px_rgba(234,88,12,0.6)] transition-all hover:-translate-y-1">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M11.97 2.005a9.962 9.962 0 00-8.528 15.11L2 22l5.023-1.328a9.964 9.964 0 104.947-18.667zM12 20a7.973 7.973 0 01-4.062-1.115l-.291-.173-3.023.794.808-2.953-.19-.3A7.95 7.95 0 014.032 12 7.977 7.977 0 1112 20zm4.242-5.467c-.232-.116-1.378-.68-1.593-.758-.215-.078-.372-.116-.528.116-.156.232-.6 .758-.737.914-.136.155-.274.175-.506.058-.232-.116-.983-.362-1.87-1.156-.69-.617-1.155-1.38-1.29-1.612-.136-.233-.014-.359.102-.475.105-.105.232-.272.348-.408.116-.136.155-.233.232-.388.077-.156.039-.292-.019-.408-.058-.116-.528-1.277-.723-1.748-.19-.46-.383-.398-.528-.406-.137-.008-.293-.008-.45-.008z" /></svg>
              Get a Free Quote on WhatsApp
            </Link>
          </div>
        </section>

        {/* LSI Keyword Rich Content Section */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-8">
              <article className="prose prose-lg md:prose-xl prose-slate max-w-none bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100">
                <h2 className="text-3xl font-black text-slate-900 mb-6 border-b-4 border-orange-500 pb-4 inline-block">
                  Why We Are The Best 3D Elevation Architects in Bikaner
                </h2>
                <p className="text-slate-700 leading-relaxed mb-10" dangerouslySetInnerHTML={{ __html: `Are you searching for the <strong class="text-slate-900">best 3D elevation designers in Bikaner</strong>? Your house exterior is the first impression. We specialize in photorealistic 3D rendering, modern house facades, traditional Rajasthan architectural designs, and commercial building elevations. Whether you need a simple single-floor elevation or a luxurious duplex villa design, our expert architects ensure it is 100% Vastu-compliant and climate-ready for extreme temperatures.` }} />
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Materials & Execution (ACP, HPL, CNC)
                </h3>
                <p className="text-slate-700 leading-relaxed mb-10" dangerouslySetInnerHTML={{ __html: `Unlike other civil contractors, we design practical elevations. We use locally available materials in Bikaner like HPL sheets, ACP panels, CNC jali designs, toughened glass, and textured paint to ensure your 3D design can actually be built within your budget.` }} />
                
                {/* Local Trust Block */}
                <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-inner mt-8">
                  <h4 className="text-xl font-bold text-orange-500 mb-3">Rated #1 by Bikaner Residents</h4>
                  <p className="text-slate-300 text-base">
                    Don&apos;t risk your hard-earned money with unverified contractors from Justdial or local directories. Bikaner Builders is a registered, trusted, and highly-rated civil engineering firm in Bikaner. We guarantee 100% transparent pricing and flawless execution.
                  </p>
                </div>
              </article>
              
              {/* FAQ Schema Section */}
              <div className="mt-12 bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100">
                <h2 className="text-3xl font-black text-slate-900 mb-8">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div className="border-b border-slate-200 pb-6"><h3 className="text-xl font-bold text-slate-900 mb-2">How much does a 3D front elevation cost in Bikaner?</h3><p className="text-slate-600">The cost depends on the size of the frontage and design details. We offer highly affordable rates for residential 3D elevations starting from just a few thousand rupees with complete material detailing.</p></div>
                  <div className="border-b border-slate-200 pb-6"><h3 className="text-xl font-bold text-slate-900 mb-2">Do you provide material details with the 3D design?</h3><p className="text-slate-600">Yes! We are not just 3D designers, we are a complete building construction company in Bikaner. We provide complete specifications for tiles, HPL, glass, and paint codes.</p></div>
                  <div className="border-b border-slate-200 pb-6"><h3 className="text-xl font-bold text-slate-900 mb-2">Is the elevation Vastu compliant?</h3><p className="text-slate-600">Absolutely. We ensure balcony placements, main gate positions, and window directions perfectly align with Vastu Shastra.</p></div>
                </div>
              </div>
            </div>
            
            {/* Sticky Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100">
                <h3 className="text-2xl font-black text-slate-900 mb-2">Book a Free Site Visit</h3>
                <p className="text-slate-600 mb-8 text-base">Our senior architect will visit your plot in Bikaner and provide a free consultation.</p>
                
                <Link href="https://wa.me/919351132772" target="_blank" className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1fae54] text-white font-black text-lg py-4 px-4 rounded-xl mb-4 transition-transform hover:-translate-y-1">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M11.97 2.005a9.962 9.962 0 00-8.528 15.11L2 22l5.023-1.328a9.964 9.964 0 104.947-18.667zM12 20a7.973 7.973 0 01-4.062-1.115l-.291-.173-3.023.794.808-2.953-.19-.3A7.95 7.95 0 014.032 12 7.977 7.977 0 1112 20zm4.242-5.467c-.232-.116-1.378-.68-1.593-.758-.215-.078-.372-.116-.528.116-.156.232-.6 .758-.737.914-.136.155-.274.175-.506.058-.232-.116-.983-.362-1.87-1.156-.69-.617-1.155-1.38-1.29-1.612-.136-.233-.014-.359.102-.475.105-.105.232-.272.348-.408.116-.136.155-.233.232-.388.077-.156.039-.292-.019-.408-.058-.116-.528-1.277-.723-1.748-.19-.46-.383-.398-.528-.406-.137-.008-.293-.008-.45-.008z" /></svg>
                  WhatsApp Now
                </Link>
                <Link href="tel:+919351132772" className="flex items-center justify-center gap-2 w-full bg-slate-900 hover:bg-slate-800 text-white font-black text-lg py-4 px-4 rounded-xl mb-6 transition-transform hover:-translate-y-1">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  Call +91-9351132772
                </Link>
                
                <div className="pt-6 border-t border-slate-100 text-center">
                  <p className="text-slate-500 text-sm font-medium">Office: Ridmalsar Sipahiyan, Bikaner</p>
                </div>
              </div>
            </div>
            
          </div>
        </section>
      </div>
    </>
  );
}

