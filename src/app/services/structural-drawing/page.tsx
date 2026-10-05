import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ServiceTrustBlock from '@/components/ServiceTrustBlock';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Structural Engineers & Drawings in Bikaner | Strong Foundations",
  description: "Best structural engineers in Bikaner. We provide RCC column design, foundation details, and structural safety drawings for buildings.",
  keywords: "Expert Structural Engineering & Drawings in Bikaner, Bikaner Builders, top civil contractor in Bikaner, best building construction company near me, ghar ka naksha, architects in bikaner",
};

export default function SEOOptimizedServicePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Structural Engineering",
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
      "telephone": "+91-93765-90313",
      "url": "https://www.bikanerbuilders.in"
    },
    "areaServed": {
      "@type": "City",
      "name": "Bikaner"
    },
    "description": "Best structural engineers in Bikaner. We provide RCC column design, foundation details, and structural safety drawings for buildings."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{ "@type": "Question", "name": "Why do I need a structural drawing?", "acceptedAnswer": { "@type": "Answer", "text": "A structural drawing dictates the exact amount of steel and cement needed for columns and beams. It prevents contractors from using too little (causing cracks) or too much (wasting your money)." } },{ "@type": "Question", "name": "Do you provide bar bending schedules (BBS)?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, our structural detailing includes a complete Bar Bending Schedule so your steel fabricators know exactly how to cut and bend the TMT bars with zero wastage." } },{ "@type": "Question", "name": "Is my building earthquake-proof?", "acceptedAnswer": { "@type": "Answer", "text": "Our structural engineers design all RCC frames adhering strictly to Indian Standard (IS) codes for seismic zones, ensuring maximum safety." } }]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      <div className="pt-20">
        
        {/* SEO Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-slate-900">
          <Image
            src="/assets/seo_structural.jpg"
            alt="Expert Structural Engineering & Drawings in Bikaner - Bikaner Builders"
            title="Expert Structural Engineering & Drawings in Bikaner"
            fill
            priority
            className="object-cover opacity-30"
          sizes="(max-width: 768px) 100vw, 578px" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent"></div>
          
          <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-12">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 drop-shadow-xl leading-tight">
              Expert Structural Engineering & Drawings in Bikaner
            </h1>
            <h2 className="text-xl md:text-2xl text-orange-400 font-bold max-w-3xl mx-auto mb-8 drop-shadow-md">
              Best structural engineers in Bikaner. We provide RCC column design, foundation details, and structural safety drawings for buildings.
            </h2>
            <Link href="tel:9376590313" className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white font-bold text-xl px-10 py-5 rounded-full shadow-[0_4px_25px_rgba(234,88,12,0.6)] transition-all hover:-translate-y-1">
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

                <div className="relative w-full h-[400px] mb-10 rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                  <Image src="/assets/seo_structural.jpg" alt="RCC Structural Engineering Blueprint Drawings" fill className="object-cover hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 578px" />
                </div>

                <h2 className="text-3xl font-black text-slate-900 mb-6 border-b-4 border-orange-500 pb-4 inline-block">
                  Top Structural Engineers for Safe Buildings in Bikaner
                </h2>
                <p className="text-slate-700 leading-relaxed mb-10" dangerouslySetInnerHTML={{ __html: `A beautiful house means nothing without a solid foundation. We provide detailed <strong class="text-slate-900">structural drawings and RCC designs</strong> in Bikaner. Our certified civil and structural engineers calculate load-bearing capacities, column positioning, beam sizes, and steel reinforcement details to ensure your home is earthquake-resistant and safe.` }} />
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Foundation Details & Soil Testing
                </h3>
                <p className="text-slate-700 leading-relaxed mb-10" dangerouslySetInnerHTML={{ __html: `Bikaner has unique sandy soil conditions. Our civil engineering contractors customize foundation depth and footing designs specifically for your plot&apos;s soil type. We provide complete working drawings for the steel binding team so there is zero wastage of expensive TMT bars.` }} />
                
                
                
                {/* 1. Elite Process Section */}
                <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b-2 border-slate-100 pb-3">
                  Our Rigorous Structural Engineering Process
                </h3>
                <p className="text-slate-700 leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: "The safety of your family depends on the hidden skeleton of your building. As Bikaner's premier <strong class=\"text-slate-900\">structural engineering firm</strong>, we design earthquake-resistant structures that are safe, durable, and economically optimized." }}></p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                    <span className="text-orange-500 font-black text-4xl opacity-20 block mb-2">01</span>
                    <h4 className="font-bold text-slate-900 text-xl mb-2">Soil Testing & Foundation Planning</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">Bikaner&apos;s sandy soil requires specific foundation depth. We analyze soil bearing capacity to design isolated, combined, or raft foundations accordingly.</p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                    <span className="text-orange-500 font-black text-4xl opacity-20 block mb-2">02</span>
                    <h4 className="font-bold text-slate-900 text-xl mb-2">Load Bearing Analysis</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">We meticulously calculate dead loads (concrete/walls), live loads (people/furniture), and dynamic forces (wind/earthquakes) acting on the building.</p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                    <span className="text-orange-500 font-black text-4xl opacity-20 block mb-2">03</span>
                    <h4 className="font-bold text-slate-900 text-xl mb-2">Optimum Column Positioning</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">We strategically place columns and beams to ensure maximum structural integrity without interrupting the aesthetic flow of the 2D naksha.</p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                    <span className="text-orange-500 font-black text-4xl opacity-20 block mb-2">04</span>
                    <h4 className="font-bold text-slate-900 text-xl mb-2">Detailed Steel Detailing (BBS)</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">We provide comprehensive AutoCAD drawings and a Bar Bending Schedule (BBS) so the local contractor knows exactly how to cut and tie the TMT steel.</p>
                  </div>
                </div>

                {/* 2. Materials/Tech Section */}
                <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b-2 border-slate-100 pb-3">
                  Advanced Software & Safety Standards
                </h3>
                <p className="text-slate-700 leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: "We do not rely on guesswork or thumb rules. Our licensed structural engineers use advanced physics and mathematics to guarantee the safety of your <strong class=\"text-slate-900\">house construction in Bikaner</strong>." }}></p>
                <ul className="space-y-4 mb-12 list-none pl-0">
                  
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-orange-500 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <div>
                      <strong className="text-slate-900 block">STAAD.Pro & ETABS</strong>
                      <span className="text-slate-600 text-sm">We use world-class structural analysis software to simulate loads and seismic activity, ensuring your building won&apos;t crack under pressure.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-orange-500 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <div>
                      <strong className="text-slate-900 block">IS Code Compliance</strong>
                      <span className="text-slate-600 text-sm">All our structural drawings strictly adhere to Indian Standard codes (IS 456, IS 1893) for reinforced concrete and earthquake resistance.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-orange-500 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <div>
                      <strong className="text-slate-900 block">Steel Optimization</strong>
                      <span className="text-slate-600 text-sm">Local contractors often over-use steel &apos;just to be safe&apos;, wasting your money. Our calculated designs save you lakhs in unnecessary TMT bar costs.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-orange-500 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <div>
                      <strong className="text-slate-900 block">Zone-Specific Seismic Design</strong>
                      <span className="text-slate-600 text-sm">Bikaner falls in a specific seismic zone. We detail the column-beam joints with extra ductility to withstand potential tremors.</span>
                    </div>
                  </li>
                </ul>

                {/* 3. Why Choose Us Section */}
                <div className="bg-slate-900 rounded-3xl p-8 md:p-10 shadow-2xl my-12 text-white not-prose">
                  <h3 className="text-2xl md:text-3xl font-black mb-6 text-white leading-tight">
                    Why You Need a Professional Structural Engineer
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-8">
                    Never let a local thekedar guess your steel requirements. A weak column can cause building collapse, while over-engineering wastes your hard-earned money. Here is why you need our technical expertise.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                      </div>
                      <div>
                        <strong className="block text-white text-lg">Certified Engineers</strong>
                        <span className="text-slate-400 text-sm">Your structure is designed and approved by licensed, highly qualified civil/structural engineers.</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                      </div>
                      <div>
                        <strong className="block text-white text-lg">Massive Cost Savings</strong>
                        <span className="text-slate-400 text-sm">Our optimized steel and concrete calculations usually save you much more than our design fee.</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      </div>
                      <div>
                        <strong className="block text-white text-lg">Zero Safety Compromise</strong>
                        <span className="text-slate-400 text-sm">Sleep peacefully knowing your multi-story building can handle storms, loads, and time.</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                      </div>
                      <div>
                        <strong className="block text-white text-lg">On-Site Steel Checking</strong>
                        <span className="text-slate-400 text-sm">We offer site visits to verify that the contractor has tied the steel exactly as per our drawings.</span>
                      </div>
                    </div>
                  </div>
                </div>
                <ServiceTrustBlock slug="structural-drawing" />
              </article>
              
              {/* FAQ Schema Section */}
              <div className="mt-12 bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100">
                <h2 className="text-3xl font-black text-slate-900 mb-8">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div className="border-b border-slate-200 pb-6"><h3 className="text-xl font-bold text-slate-900 mb-2">Why do I need a structural drawing?</h3><p className="text-slate-600">A structural drawing dictates the exact amount of steel and cement needed for columns and beams. It prevents contractors from using too little (causing cracks) or too much (wasting your money).</p></div>
                  <div className="border-b border-slate-200 pb-6"><h3 className="text-xl font-bold text-slate-900 mb-2">Do you provide bar bending schedules (BBS)?</h3><p className="text-slate-600">Yes, our structural detailing includes a complete Bar Bending Schedule so your steel fabricators know exactly how to cut and bend the TMT bars with zero wastage.</p></div>
                  <div className="border-b border-slate-200 pb-6"><h3 className="text-xl font-bold text-slate-900 mb-2">Is my building earthquake-proof?</h3><p className="text-slate-600">Our structural engineers design all RCC frames adhering strictly to Indian Standard (IS) codes for seismic zones, ensuring maximum safety.</p></div>
                </div>
              </div>
            </div>
            
            {/* Sticky Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100">
                <h3 className="text-2xl font-black text-slate-900 mb-2">Book a Free Site Visit</h3>
                <p className="text-slate-600 mb-8 text-base">Our senior architect will visit your plot in Bikaner and provide a free consultation.</p>
                
                <Link href="https://wa.me/919376590313" target="_blank" className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1fae54] text-white font-black text-lg py-4 px-4 rounded-xl mb-4 transition-transform hover:-translate-y-1">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M11.97 2.005a9.962 9.962 0 00-8.528 15.11L2 22l5.023-1.328a9.964 9.964 0 104.947-18.667zM12 20a7.973 7.973 0 01-4.062-1.115l-.291-.173-3.023.794.808-2.953-.19-.3A7.95 7.95 0 014.032 12 7.977 7.977 0 1112 20zm4.242-5.467c-.232-.116-1.378-.68-1.593-.758-.215-.078-.372-.116-.528.116-.156.232-.6 .758-.737.914-.136.155-.274.175-.506.058-.232-.116-.983-.362-1.87-1.156-.69-.617-1.155-1.38-1.29-1.612-.136-.233-.014-.359.102-.475.105-.105.232-.272.348-.408.116-.136.155-.233.232-.388.077-.156.039-.292-.019-.408-.058-.116-.528-1.277-.723-1.748-.19-.46-.383-.398-.528-.406-.137-.008-.293-.008-.45-.008z" /></svg>
                  WhatsApp Now
                </Link>
                <Link href="tel:+919376590313" className="flex items-center justify-center gap-2 w-full bg-slate-900 hover:bg-slate-800 text-white font-black text-lg py-4 px-4 rounded-xl mb-6 transition-transform hover:-translate-y-1">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  Call +91 93765 90313
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

